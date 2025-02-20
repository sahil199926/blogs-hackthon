"use client"

import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/ulComponents/ui/card";
import { Button } from "@/ulComponents/ui/button";
import { AlertTriangle, Home } from "lucide-react";

// 404 Not Found Component
function NotFound() {
  return (
    <Card className="w-full max-w-md">
      <CardHeader className="text-center">
        <CardTitle className="flex items-center justify-center gap-2">
          <AlertTriangle className="h-8 w-8 text-destructive" />
          <span className="text-Display-Semibold-28">404 | Page Not Found</span>
        </CardTitle>
        <CardDescription>
          The page you are looking for does not exist.
        </CardDescription>
      </CardHeader>
      <CardContent className="space-y-4">
        <div className="flex justify-center gap-4">
          <Button
            onClick={() => (window.location.href = "/")}
            className="w-full">
            <Home className="mr-2 h-4 w-4" />
            Go Home
          </Button>
        </div>
      </CardContent>
    </Card>
  );
}

export default NotFound;
