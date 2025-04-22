
import React from 'react';
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "./pages/Login";
import StudentDashboard from "./pages/StudentDashboard";
import StaffDashboard from "./pages/StaffDashboard";
import AdminDashboard from "./pages/AdminDashboard";
import NotFound from "./pages/NotFound";
import MainLayout from "./components/layout/MainLayout";

// Add additional routes based on project needs
import AIChatbot from "./components/AIChatbot";

// Create a new QueryClient instance
const queryClient = new QueryClient();

const App = () => (
  <React.StrictMode>
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <Toaster />
        <Sonner />
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Login />} />
            <Route path="/student-dashboard" element={
              <MainLayout>
                <StudentDashboard />
              </MainLayout>
            } />
            <Route path="/staff-dashboard" element={
              <MainLayout>
                <StaffDashboard />
              </MainLayout>
            } />
            <Route path="/admin-dashboard" element={
              <MainLayout>
                <AdminDashboard />
              </MainLayout>
            } />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </BrowserRouter>
        <AIChatbot />
      </TooltipProvider>
    </QueryClientProvider>
  </React.StrictMode>
);

export default App;
