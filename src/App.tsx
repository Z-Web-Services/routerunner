import { useEffect, useState } from "react";
import type { Schema } from "../amplify/data/resource";
import { generateClient } from "aws-amplify/data";
import { useAuthenticator } from '@aws-amplify/ui-react';
import ShiftEdit from './components/ShiftEdit';
import RouteEdit from './components/RouteEdit';
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

const client = generateClient<Schema>();

type ViewType = 'home' | 'editShift' | 'editRoute';

function App() {
  const [activeShift, setActiveShift] = useState<Schema["Shift"]["type"] | null>(null);
  const [allShifts, setAllShifts] = useState<Array<Schema["Shift"]["type"]>>([]);
  const [loading, setLoading] = useState(true);
  const [currentView, setCurrentView] = useState<ViewType>('home');
  const [currentRoute, setCurrentRoute] = useState<Schema["Route"]["type"] | null>(null);
  const [viewingShift, setViewingShift] = useState<Schema["Shift"]["type"] | null>(null);

  const { user, signOut } = useAuthenticator();

  useEffect(() => {
    // Query for all shifts and separate active from completed
    client.models.Shift.observeQuery().subscribe({
      next: (data) => {
        const shifts = [...data.items].sort((a, b) => new Date(b.start).getTime() - new Date(a.start).getTime());
        setAllShifts(shifts);
        
        // Find active shift (has start but no stop)
        const active = shifts.find(shift => !shift.stop);
        setActiveShift(active || null);
        
        setLoading(false);
      },
    });
  }, []);

  async function startShift() {
    try {
      // Get count of all existing shifts to determine next shift number
      const allShifts = await client.models.Shift.list();
      const shiftCount = allShifts.data.length;
      const shiftName = `Shift ${shiftCount + 1}`;
      
      const newShift = await client.models.Shift.create({
        start: new Date().toISOString(),
        name: shiftName,
      });
      
      // Navigate to edit shift page
      setCurrentView('editShift');
      setActiveShift(newShift.data);
    } catch (error) {
      console.error('Error starting shift:', error);
    }
  }

  async function viewActiveShift() {
    setCurrentView('editShift');
  }

  function navigateToRoute(route: Schema["Route"]["type"]) {
    setCurrentRoute(route);
    setCurrentView('editRoute');
  }

  function navigateHome() {
    setCurrentView('home');
    setCurrentRoute(null);
  }

  function navigateToShift() {
    setCurrentView('editShift');
    setCurrentRoute(null);
    setViewingShift(null);
  }

  function viewCompletedShift(shift: Schema["Shift"]["type"]) {
    setViewingShift(shift);
    setCurrentView('editShift');
    setCurrentRoute(null);
  }

  if (loading) {
    return (
      <main className="max-w-4xl mx-auto p-6 min-h-screen">
        <div className="flex items-center justify-center h-64">
          <div className="flex items-center gap-3">
            <div className="w-6 h-6 border-2 border-primary-600 border-t-transparent rounded-full animate-spin"></div>
            <span className="text-lg text-gray-600">Loading...</span>
          </div>
        </div>
      </main>
    );
  }

  // Render different views based on currentView state
  if (currentView === 'editShift' && (activeShift || viewingShift)) {
    const shiftToShow = viewingShift || activeShift;
    return (
      <main className="max-w-4xl mx-auto p-6 min-h-screen">
        <ShiftEdit 
          shift={shiftToShow!} 
          onNavigateToRoute={navigateToRoute}
          onBack={navigateHome}
        />
        <div className="mt-8 pt-6 border-t border-gray-300">
          <Button onClick={signOut} variant="outline">
            Sign out
          </Button>
        </div>
      </main>
    );
  }

  if (currentView === 'editRoute' && currentRoute) {
    return (
      <main className="max-w-4xl mx-auto p-6 min-h-screen">
        <RouteEdit 
          route={currentRoute}
          onBack={navigateToShift}
        />
        <div className="mt-8 pt-6 border-t border-gray-300">
          <Button onClick={signOut} variant="outline">
            Sign out
          </Button>
        </div>
      </main>
    );
  }

  // Home view
  const completedShifts = allShifts.filter(shift => shift.stop);
  
  return (
    <main className="max-w-4xl mx-auto p-6 min-h-screen">
      <div className="text-center mb-8">
        <h1 className="text-4xl font-bold text-gray-900 mb-2">RouteRunner</h1>
        <p className="text-gray-600">Welcome, {user?.signInDetails?.loginId}!</p>
      </div>
      
      {activeShift ? (
        <Card className="mb-8 border-2 border-success-200 bg-success-50">
          <CardHeader>
            <CardTitle className="flex items-center gap-2 text-success-800">
              <div className="w-3 h-3 bg-success-500 rounded-full"></div>
              Active Shift
            </CardTitle>
            <CardDescription className="text-lg font-medium text-gray-900">
              {activeShift.name}
            </CardDescription>
          </CardHeader>
          <CardContent>
            <p className="text-gray-600 mb-4">Started: {new Date(activeShift.start).toLocaleString()}</p>
            <Button onClick={viewActiveShift} className="bg-success-600 hover:bg-success-700">
              View Active Shift
            </Button>
          </CardContent>
        </Card>
      ) : (
        <Card className="mb-8 border-2 border-primary-200 bg-primary-50">
          <CardHeader>
            <CardTitle className="text-primary-800">Start New Shift</CardTitle>
            <CardDescription>Create a new shift to begin planning your routes.</CardDescription>
          </CardHeader>
          <CardContent>
            <Button onClick={startShift} size="lg" className="bg-primary-600 hover:bg-primary-700">
              + Start Shift
            </Button>
          </CardContent>
        </Card>
      )}

      {/* Shift History */}
      {completedShifts.length > 0 && (
        <div className="mb-8">
          <div className="flex items-center gap-2 mb-4">
            <span className="text-2xl">📋</span>
            <h2 className="text-2xl font-semibold text-gray-900">Shift History</h2>
          </div>
          <div className="max-h-96 overflow-y-auto scrollbar-thin space-y-3">
            {completedShifts.map((shift) => (
              <Card key={shift.id}>
                <CardContent className="pt-6">
                  <div className="flex justify-between items-start">
                    <div className="flex-1">
                      <h3 className="text-lg font-medium text-gray-900 mb-3">{shift.name}</h3>
                      <div className="space-y-1 text-sm text-gray-600">
                        <p>
                          <span className="font-medium">Started:</span> {new Date(shift.start).toLocaleString()}
                        </p>
                        {shift.stop && (
                          <p>
                            <span className="font-medium">Ended:</span> {new Date(shift.stop).toLocaleString()}
                          </p>
                        )}
                        {shift.stop && (
                          <p>
                            <span className="font-medium">Duration:</span> {Math.round((new Date(shift.stop).getTime() - new Date(shift.start).getTime()) / (1000 * 60))} minutes
                          </p>
                        )}
                      </div>
                    </div>
                    <Button 
                      onClick={() => viewCompletedShift(shift)}
                      variant="secondary"
                      className="ml-4"
                    >
                      View Shift
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      )}
      
      <div className="mt-8 pt-6 border-t border-gray-300">
        <Button onClick={signOut} variant="outline">
          Sign out
        </Button>
      </div>
    </main>
  );
}

export default App;
