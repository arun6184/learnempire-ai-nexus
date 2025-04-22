
import React from "react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const NotFound = () => {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-lightBg dark:bg-darkBg p-4">
      <div className="text-center">
        <h1 className="text-6xl font-bold text-royal">404</h1>
        <h2 className="text-2xl font-semibold mt-4 mb-6">Page Not Found</h2>
        <p className="text-muted-foreground max-w-md mx-auto mb-8">
          The page you are looking for might have been removed, had its name changed, or is temporarily unavailable.
        </p>
        <Link to="/">
          <Button className="bg-royal hover:bg-royal/90">
            Return to Home
          </Button>
        </Link>
      </div>
    </div>
  );
};

export default NotFound;
