"use client";

import { Button } from "@/ulComponents/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/ulComponents/ui/card";
import { AlertTriangle, Home, RefreshCw } from "lucide-react";
import NotFoundPage from "./not-found";

// 500 Internal Server Error Component
function ServerErrorPage({ error, reset }: { error: Error & { digest?: string }, reset: () => void }) {
  return (
    <Card className="w-full max-w-md">
      <CardHeader className="text-center">
        <CardTitle className="flex items-center justify-center gap-2">
          <AlertTriangle className="h-8 w-8 text-destructive" />
          <span className="text-Display-Semibold-28">500 | Server Error</span>
        </CardTitle>
        <CardDescription>
          An unexpected error occurred on our server.
        </CardDescription>
      </CardHeader>
      <CardContent className="space-y-4">
        <div className="rounded-lg bg-muted p-3">
          <p className="text-sm text-muted-foreground text-center">
            Error ID: {error.digest}
          </p>
        </div>
        <div className="flex justify-center gap-4">
          <Button
            onClick={() => reset()}
            variant="outline"
            className="w-full"
          >
            <RefreshCw className="mr-2 h-4 w-4" />
            Try Again
          </Button>
          <Button
            onClick={() => (window.location.href = "/")}
            className="w-full"
          >
            <Home className="mr-2 h-4 w-4" />
            Go Home
          </Button>
        </div>
      </CardContent>
    </Card>
  );
}

// Main Error Page Component
export default function GlobalErrorPage({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  return (
    <html>
      <body>
        <main className="flex min-h-screen items-center justify-center bg-background p-4">
          {error.digest ? (
            <ServerErrorPage error={error} reset={reset} />
          ) : (
            <NotFoundPage />
          )}
        </main>
      </body>
    </html>
  );
}