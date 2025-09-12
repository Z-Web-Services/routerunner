import { useEffect, useState } from "react";
import type { Schema } from "../../amplify/data/resource";
import { generateClient } from "aws-amplify/data";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const client = generateClient<Schema>();

interface ShiftEditProps {
  shift: Schema["Shift"]["type"];
  onNavigateToRoute: (route: Schema["Route"]["type"]) => void;
  onBack: () => void;
}

export default function ShiftEdit({ shift, onNavigateToRoute, onBack }: ShiftEditProps) {
  const [routes, setRoutes] = useState<Array<Schema["Route"]["type"]>>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Load routes for this shift
    client.models.Route.observeQuery({
      filter: { shiftId: { eq: shift.id } }
    }).subscribe({
      next: (data) => {
        setRoutes([...data.items]);
        setLoading(false);
      },
    });
  }, [shift.id]);

  async function createRoute() {
    try {
      const routeCount = routes.length;
      const routeName = `Route ${routeCount + 1}`;
      
      const newRoute = await client.models.Route.create({
        name: routeName,
        shiftId: shift.id,
      });

      if (newRoute.data) {
        onNavigateToRoute(newRoute.data);
      }
    } catch (error) {
      console.error('Error creating route:', error);
    }
  }

  async function endShift() {
    try {
      await client.models.Shift.update({
        id: shift.id,
        stop: new Date().toISOString(),
      });
      onBack();
    } catch (error) {
      console.error('Error ending shift:', error);
    }
  }

  if (loading) {
    return (
      <div className="flex items-center justify-center h-64">
        <div className="flex items-center gap-3">
          <div className="w-6 h-6 border-2 border-primary-600 border-t-transparent rounded-full animate-spin"></div>
          <span className="text-lg text-gray-600">Loading routes...</span>
        </div>
      </div>
    );
  }

  return (
    <div className="space-y-6">
      <Button onClick={onBack} variant="outline" className="flex items-center gap-2">
        <span>←</span> Back to Home
      </Button>
      
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-3">
            {shift.stop ? (
              <div className="w-4 h-4 bg-gray-500 rounded-full"></div>
            ) : (
              <div className="w-4 h-4 bg-success-500 rounded-full animate-pulse"></div>
            )}
            <span>
              {shift.name} {shift.stop && <span className="text-muted-foreground text-xl">(Completed)</span>}
            </span>
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-2 text-muted-foreground">
            <p><span className="font-medium">Started:</span> {new Date(shift.start || 0).toLocaleString()}</p>
            {shift.stop && (
              <>
                <p><span className="font-medium">Ended:</span> {new Date(shift.stop || 0).toLocaleString()}</p>
                <p><span className="font-medium">Duration:</span> {Math.round((new Date(shift.stop || 0).getTime() - new Date(shift.start || 0).getTime()) / (1000 * 60))} minutes</p>
              </>
            )}
          </div>
        </CardContent>
      </Card>
      
      <Card>
        <CardHeader>
          <div className="flex items-center justify-between">
            <CardTitle>Routes ({routes.length})</CardTitle>
            {!shift.stop && (
              <Button onClick={createRoute}>
                + Create New Route
              </Button>
            )}
          </div>
        </CardHeader>
        <CardContent>
          {routes.length === 0 ? (
            <div className="text-center py-8 text-muted-foreground">
              <div className="text-4xl mb-2">🗺️</div>
              <p>No routes created yet.</p>
              {!shift.stop && <p className="text-sm">Create your first route to get started.</p>}
            </div>
          ) : (
            <div className="grid gap-3">
              {routes.map((route) => (
                <Card key={route.id} className="hover:bg-accent transition-colors">
                  <CardContent className="flex items-center justify-between p-4">
                    <div className="flex items-center gap-3">
                      <div className="w-3 h-3 bg-primary-500 rounded-full"></div>
                      <span className="font-medium">
                        {route.name || 'Unnamed Route'}
                      </span>
                    </div>
                    <Button 
                      onClick={() => onNavigateToRoute(route)}
                      variant="outline"
                      size="sm"
                    >
                      View Route
                    </Button>
                  </CardContent>
                </Card>
              ))}
            </div>
          )}
        </CardContent>
      </Card>

      {!shift.stop && (
        <div className="flex justify-end">
          <Button onClick={endShift} variant="destructive">
            End Shift
          </Button>
        </div>
      )}
    </div>
  );
}