import { useEffect, useState, useRef } from "react";
import type { Schema } from "../../amplify/data/resource";
import { generateClient } from "aws-amplify/data";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Checkbox } from "@/components/ui/checkbox";

const client = generateClient<Schema>();

interface RouteEditProps {
  route: Schema["Route"]["type"];
  onBack: () => void;
}

interface AddressValidationResult {
  isValid: boolean;
  formattedAddress?: string;
  error?: string;
}

interface PlacePrediction {
  place_id: string;
  description: string;
  structured_formatting: {
    main_text: string;
    secondary_text: string;
  };
}

export default function RouteEdit({ route, onBack }: RouteEditProps) {
  const [addresses, setAddresses] = useState<Array<Schema["Address"]["type"]>>([]);
  const [loading, setLoading] = useState(true);
  const [addressInput, setAddressInput] = useState("");
  const [notesInput, setNotesInput] = useState("");
  const [isValidating, setIsValidating] = useState(false);
  const [inputMethod, setInputMethod] = useState<'text' | 'voice' | 'camera'>('text');
  const [isRecording, setIsRecording] = useState(false);
  const [optimizeRoute, setOptimizeRoute] = useState(true);
  const [editingNotes, setEditingNotes] = useState<string | null>(null);
  const [tempNotes, setTempNotes] = useState("");
  const [placePredictions, setPlacePredictions] = useState<PlacePrediction[]>([]);
  const [showPredictions, setShowPredictions] = useState(false);
  const [isLoadingPredictions, setIsLoadingPredictions] = useState(false);
  
  const videoRef = useRef<HTMLVideoElement>(null);
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const mediaRecorderRef = useRef<MediaRecorder | null>(null);
  const debounceTimerRef = useRef<NodeJS.Timeout | null>(null);
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    // Load addresses for this route
    client.models.Address.observeQuery({
      filter: { routeId: { eq: route.id } }
    }).subscribe({
      next: (data) => {
        setAddresses([...data.items]);
        setLoading(false);
      },
    });
  }, [route.id]);

  // Google Places Autocomplete integration
  async function fetchPlacePredictions(input: string) {
    const apiKey = import.meta.env.VITE_GOOGLE_PLACES_API_KEY;
    
    if (!apiKey || input.trim().length < 3) {
      setPlacePredictions([]);
      return;
    }

    setIsLoadingPredictions(true);
    
    try {
      const response = await fetch(
        `https://maps.googleapis.com/maps/api/place/autocomplete/json?input=${encodeURIComponent(input)}&key=${apiKey}&types=address`
      );
      
      const data = await response.json();
      
      if (data.status === 'OK') {
        setPlacePredictions(data.predictions || []);
      } else {
        setPlacePredictions([]);
      }
    } catch (error) {
      console.error('Places Autocomplete error:', error);
      setPlacePredictions([]);
    } finally {
      setIsLoadingPredictions(false);
    }
  }

  // Get place details from place_id
  async function getPlaceDetails(placeId: string): Promise<string | null> {
    const apiKey = import.meta.env.VITE_GOOGLE_PLACES_API_KEY;
    
    if (!apiKey) return null;
    
    try {
      const response = await fetch(
        `https://maps.googleapis.com/maps/api/place/details/json?place_id=${placeId}&fields=formatted_address&key=${apiKey}`
      );
      
      const data = await response.json();
      
      if (data.status === 'OK' && data.result) {
        return data.result.formatted_address;
      }
    } catch (error) {
      console.error('Place Details error:', error);
    }
    
    return null;
  }

  // Address validation using Places API
  async function validateAddress(address: string): Promise<AddressValidationResult> {
    const apiKey = import.meta.env.VITE_GOOGLE_PLACES_API_KEY;
    
    if (!apiKey) {
      console.warn('Google Places API key not configured');
      return { isValid: true, formattedAddress: address.trim() };
    }

    if (address.trim().length < 5) {
      return {
        isValid: false,
        error: "Address too short - please enter a complete address",
      };
    }

    try {
      // Use Places Autocomplete to validate
      const response = await fetch(
        `https://maps.googleapis.com/maps/api/place/autocomplete/json?input=${encodeURIComponent(address)}&key=${apiKey}&types=address`
      );
      
      const data = await response.json();
      
      if (data.status === 'OK' && data.predictions && data.predictions.length > 0) {
        // Get the first prediction's formatted address
        const placeId = data.predictions[0].place_id;
        const formattedAddress = await getPlaceDetails(placeId);
        
        return {
          isValid: true,
          formattedAddress: formattedAddress || data.predictions[0].description,
        };
      } else {
        return {
          isValid: false,
          error: 'Address not found - please check spelling or try a different address',
        };
      }
    } catch (error) {
      console.error('Address validation error:', error);
      return {
        isValid: false,
        error: 'Failed to validate address - please check your connection',
      };
    }
  }

  // Handle address input with debounced autocomplete
  function handleAddressInputChange(value: string) {
    setAddressInput(value);
    
    // Clear existing timer
    if (debounceTimerRef.current) {
      clearTimeout(debounceTimerRef.current);
    }
    
    // Show predictions if there's input
    if (value.trim().length >= 3) {
      setShowPredictions(true);
      // Debounce the API call
      debounceTimerRef.current = setTimeout(() => {
        fetchPlacePredictions(value);
      }, 300);
    } else {
      setShowPredictions(false);
      setPlacePredictions([]);
    }
  }
  
  // Handle selecting a place prediction
  async function selectPlacePrediction(prediction: PlacePrediction) {
    const formattedAddress = await getPlaceDetails(prediction.place_id);
    setAddressInput(formattedAddress || prediction.description);
    setShowPredictions(false);
    setPlacePredictions([]);
    inputRef.current?.focus();
  }
  
  // Hide predictions when clicking outside
  function hidePredictions() {
    setTimeout(() => {
      setShowPredictions(false);
    }, 150); // Small delay to allow clicking on predictions
  }

  async function handleAddAddress() {
    if (!addressInput.trim()) return;

    setIsValidating(true);
    try {
      const validationResult = await validateAddress(addressInput);
      
      if (validationResult.isValid) {
        await client.models.Address.create({
          fullAddress: validationResult.formattedAddress || addressInput,
          notes: notesInput.trim(),
          routeId: route.id,
        });
        setAddressInput("");
        setNotesInput("");
      } else {
        alert(`Address validation failed: ${validationResult.error}`);
      }
    } catch (error) {
      console.error('Error adding address:', error);
      alert('Failed to add address');
    } finally {
      setIsValidating(false);
    }
  }

  // Voice input functionality
  async function startVoiceInput() {
    if (!('webkitSpeechRecognition' in window) && !('SpeechRecognition' in window)) {
      alert('Speech recognition not supported in this browser');
      return;
    }

    const SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;
    const recognition = new SpeechRecognition();
    
    recognition.continuous = false;
    recognition.interimResults = false;
    recognition.lang = 'en-US';

    recognition.onstart = () => {
      setIsRecording(true);
    };

    recognition.onresult = (event) => {
      const transcript = event.results[0][0].transcript;
      handleAddressInputChange(transcript);
      setIsRecording(false);
    };

    recognition.onerror = () => {
      setIsRecording(false);
      alert('Speech recognition error');
    };

    recognition.onend = () => {
      setIsRecording(false);
    };

    recognition.start();
  }

  // Camera OCR functionality (placeholder)
  async function startCameraInput() {
    try {
      const stream = await navigator.mediaDevices.getUserMedia({ video: true });
      if (videoRef.current) {
        videoRef.current.srcObject = stream;
        videoRef.current.play();
        setInputMethod('camera');
      }
    } catch (error) {
      console.error('Error accessing camera:', error);
      alert('Camera access denied or not available');
    }
  }

  async function captureAndProcessImage() {
    if (!videoRef.current || !canvasRef.current) return;

    const canvas = canvasRef.current;
    const video = videoRef.current;
    const context = canvas.getContext('2d');

    if (context) {
      canvas.width = video.videoWidth;
      canvas.height = video.videoHeight;
      context.drawImage(video, 0, 0);
      
      // This is a placeholder for OCR processing
      // You would need to integrate with an OCR service like Tesseract.js or AWS Textract
      const mockExtractedText = "123 Main Street, Anytown, ST 12345";
      handleAddressInputChange(mockExtractedText);
      
      // Stop camera
      const stream = video.srcObject as MediaStream;
      stream.getTracks().forEach(track => track.stop());
      video.srcObject = null;
    }
  }

  async function deleteAddress(addressId: string) {
    try {
      await client.models.Address.delete({ id: addressId });
    } catch (error) {
      console.error('Error deleting address:', error);
    }
  }

  function startEditingNotes(addressId: string, currentNotes: string) {
    setEditingNotes(addressId);
    setTempNotes(currentNotes);
  }

  async function saveNotes(addressId: string) {
    try {
      await client.models.Address.update({
        id: addressId,
        notes: tempNotes.trim(),
      });
      setEditingNotes(null);
      setTempNotes("");
    } catch (error) {
      console.error('Error updating notes:', error);
    }
  }

  function cancelEditingNotes() {
    setEditingNotes(null);
    setTempNotes("");
  }

  function constructGoogleMapsURL() {
    if (addresses.length === 0) {
      alert('No addresses to navigate to');
      return;
    }

    if (addresses.length === 1) {
      // Single destination - simple search
      const encodedAddress = encodeURIComponent(addresses[0].fullAddress);
      const url = `https://www.google.com/maps/search/?api=1&query=${encodedAddress}`;
      window.open(url, '_blank');
      return;
    }

    // Multiple addresses - use directions with waypoints
    const origin = encodeURIComponent(addresses[0].fullAddress);
    const destination = encodeURIComponent(addresses[addresses.length - 1].fullAddress);
    
    // Middle addresses become waypoints
    const waypoints = addresses.slice(1, -1)
      .map(addr => encodeURIComponent(addr.fullAddress))
      .join('|');

    let url = `https://www.google.com/maps/dir/?api=1&origin=${origin}&destination=${destination}`;
    
    if (waypoints) {
      url += `&waypoints=${waypoints}`;
    }

    if (optimizeRoute) {
      url += '&waypoints_optimize=true';
    }

    window.open(url, '_blank');
  }

  if (loading) {
    return (
      <div>
        <h2>Loading addresses...</h2>
      </div>
    );
  }

  return (
    <div className="space-y-6">
      <Button onClick={onBack} variant="outline" className="flex items-center gap-2">
        <span>←</span> Back to Shift
      </Button>
      
      <Card>
        <CardHeader>
          <CardTitle>{route.name || 'Unnamed Route'}</CardTitle>
        </CardHeader>
      </Card>
      
      <Card>
        <CardHeader>
          <CardTitle>Add Address</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            <div className="relative">
              <Label htmlFor="address">Address</Label>
              <Input
                ref={inputRef}
                id="address"
                value={addressInput}
                onChange={(e) => handleAddressInputChange(e.target.value)}
                onFocus={() => {
                  if (addressInput.trim().length >= 3) {
                    setShowPredictions(true);
                  }
                }}
                onBlur={hidePredictions}
                placeholder="Start typing an address..."
                autoComplete="off"
              />
              
              {/* Autocomplete Dropdown */}
              {showPredictions && (
                <div className="absolute z-10 w-full mt-1 bg-white border border-gray-200 rounded-md shadow-lg max-h-60 overflow-y-auto">
                  {isLoadingPredictions && (
                    <div className="p-3 text-sm text-gray-500 text-center">
                      Searching addresses...
                    </div>
                  )}
                  
                  {!isLoadingPredictions && placePredictions.length === 0 && addressInput.trim().length >= 3 && (
                    <div className="p-3 text-sm text-gray-500 text-center">
                      No addresses found. Try a different search.
                    </div>
                  )}
                  
                  {placePredictions.map((prediction) => (
                    <button
                      key={prediction.place_id}
                      type="button"
                      onClick={() => selectPlacePrediction(prediction)}
                      className="w-full text-left p-3 hover:bg-gray-100 border-b border-gray-100 last:border-b-0 focus:outline-none focus:bg-gray-100"
                    >
                      <div className="font-medium text-sm text-gray-900">
                        {prediction.structured_formatting.main_text}
                      </div>
                      <div className="text-xs text-gray-600">
                        {prediction.structured_formatting.secondary_text}
                      </div>
                    </button>
                  ))}
                </div>
              )}
            </div>
            
            <div>
              <Label htmlFor="notes">Notes</Label>
              <Textarea
                id="notes"
                value={notesInput}
                onChange={(e) => setNotesInput(e.target.value)}
                placeholder="Optional notes (delivery instructions, contact info, etc.)"
                rows={2}
              />
            </div>

            <div className="flex gap-2">
              <Button onClick={startVoiceInput} disabled={isRecording} variant="outline">
                {isRecording ? '🎙️ Listening...' : '🎤 Speak Address'}
              </Button>
              <Button onClick={startCameraInput} variant="outline">
                📷 Take Picture
              </Button>
            </div>

            {/* Camera view when activated */}
            <div className={inputMethod === 'camera' ? 'space-y-4' : 'hidden'}>
              <div>
                <Label>Camera Capture</Label>
                <video ref={videoRef} className="w-full max-w-md border rounded-lg" />
                <canvas ref={canvasRef} className="hidden" />
              </div>
              <div className="flex gap-2">
                <Button onClick={captureAndProcessImage} variant="outline">
                  📸 Capture & Extract Text
                </Button>
                <Button onClick={() => {
                  // Stop camera
                  if (videoRef.current?.srcObject) {
                    const stream = videoRef.current.srcObject as MediaStream;
                    stream.getTracks().forEach(track => track.stop());
                    videoRef.current.srcObject = null;
                  }
                  setInputMethod('text');
                }} variant="outline">
                  Cancel
                </Button>
              </div>
            </div>

            <Button onClick={handleAddAddress} disabled={isValidating || !addressInput.trim()} className="w-full">
              {isValidating ? 'Validating...' : 'Add Address'}
            </Button>
          </div>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>Addresses ({addresses.length})</CardTitle>
          {addresses.length === 0 && (
            <CardDescription>No addresses added yet. Add your first address above.</CardDescription>
          )}
        </CardHeader>
        {addresses.length > 0 && (
          <CardContent className="space-y-4">
            {addresses.map((address, index) => (
              <Card key={address.id}>
                <CardContent className="p-4">
                  <div className="flex justify-between items-start">
                    <div className="flex-1">
                      <h4 className="font-semibold">{index + 1}. {address.fullAddress}</h4>
                    
                      {/* Notes display/edit */}
                      <div className="mt-2">
                        {editingNotes === address.id ? (
                          <div className="space-y-2">
                            <Textarea
                              value={tempNotes}
                              onChange={(e) => setTempNotes(e.target.value)}
                              placeholder="Enter notes..."
                              rows={3}
                            />
                            <div className="flex gap-2">
                              <Button 
                                onClick={() => saveNotes(address.id)}
                                size="sm"
                                className="bg-success-600 hover:bg-success-700"
                              >
                                Save
                              </Button>
                              <Button 
                                onClick={cancelEditingNotes}
                                size="sm"
                                variant="outline"
                              >
                                Cancel
                              </Button>
                            </div>
                          </div>
                      ) : (
                        <div>
                          {address.notes ? (
                            <div className="space-y-2">
                              <div className="bg-gray-50 p-3 rounded-md border italic text-gray-600">
                                📝 {address.notes}
                              </div>
                              <Button 
                                onClick={() => startEditingNotes(address.id, address.notes || '')}
                                size="sm"
                                variant="outline"
                                className="text-xs"
                              >
                                Edit Notes
                              </Button>
                            </div>
                          ) : (
                            <Button 
                              onClick={() => startEditingNotes(address.id, '')}
                              size="sm"
                              variant="outline"
                              className="text-xs"
                            >
                              + Add Notes
                            </Button>
                          )}
                        </div>
                      )}
                    </div>
                  </div>
                  
                    <Button 
                      onClick={() => deleteAddress(address.id)}
                      variant="destructive"
                      size="sm"
                      className="ml-4"
                    >
                      Delete
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </CardContent>
        )}
        
        {/* Google Maps Integration */}
        {addresses.length > 0 && (
          <Card className="border-primary bg-blue-50">
            <CardHeader>
              <CardTitle className="flex items-center gap-2 text-primary">
                🗺️ Navigation
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="flex items-start space-x-3">
                <Checkbox
                  id="optimize-route"
                  checked={optimizeRoute}
                  onCheckedChange={(checked) => setOptimizeRoute(checked === true)}
                />
                <div>
                  <Label htmlFor="optimize-route" className="text-sm font-medium">
                    Optimize route order in Google Maps
                  </Label>
                  <p className="text-xs text-gray-600 mt-1">
                    {optimizeRoute 
                      ? 'Google Maps will automatically reorder stops for the most efficient route'
                      : 'Addresses will be visited in the order listed above'
                    }
                  </p>
                </div>
              </div>

              <Button 
                onClick={constructGoogleMapsURL}
                className="w-full bg-primary hover:bg-primary/90"
                size="lg"
              >
                🗺️ Open in Google Maps ({addresses.length} stop{addresses.length !== 1 ? 's' : ''})
              </Button>
            </CardContent>
          </Card>
        )}
      </Card>
    </div>
  );
}

// Add speech recognition types
declare global {
  interface Window {
    SpeechRecognition: any;
    webkitSpeechRecognition: any;
  }
}