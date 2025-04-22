
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { BookText, GraduationCap, School, User } from 'lucide-react';
import { toast } from "@/components/ui/use-toast";

type UserRole = 'student' | 'staff' | 'admin' | null;

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [selectedRole, setSelectedRole] = useState<UserRole>(null);
  const navigate = useNavigate();

  const handleRoleSelect = (role: UserRole) => {
    setSelectedRole(role);
  };

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!selectedRole) {
      toast({
        title: "Role not selected",
        description: "Please select a role to continue",
        variant: "destructive",
      });
      return;
    }
    
    if (!email || !password) {
      toast({
        title: "Missing credentials",
        description: "Please enter both email and password",
        variant: "destructive",
      });
      return;
    }
    
    // This is just a placeholder. In a real implementation, we'd authenticate with Supabase
    toast({
      title: "Login successful",
      description: `Redirecting to ${selectedRole} dashboard`,
    });
    
    // Redirect to the appropriate dashboard
    navigate(`/${selectedRole}-dashboard`);
  };

  return (
    <div className="min-h-screen flex flex-col bg-lightBg dark:bg-darkBg">
      {/* Hero Section */}
      <div className="bg-gradient-to-r from-rathinam-blue via-rathinam-orange to-rathinam-green text-white py-20 px-4 text-center">
        <div className="flex justify-center mb-6">
          <img 
            src="/lovable-uploads/483d9d00-9bb4-4481-a939-859efdbb48da.png" 
            alt="Rathinam StudyPal Logo" 
            className="h-16 w-auto animate-float"
          />
        </div>
        <h1 className="text-4xl md:text-5xl font-bold font-poppins mb-4">Welcome to Rathinam StudyPal</h1>
        <p className="text-lg md:text-xl max-w-2xl mx-auto opacity-90">
          An intelligent learning platform powered by AI to enhance commerce education for students and staff.
        </p>
      </div>
      
      {/* Login Section */}
      <div className="flex-grow flex items-center justify-center p-4 -mt-10">
        <Card className="w-full max-w-md backdrop-blur-xl bg-white/90 dark:bg-gray-800/90 border-0 shadow-xl">
          <CardHeader className="space-y-1">
            <CardTitle className="text-2xl font-bold text-center">Sign in</CardTitle>
            <CardDescription className="text-center">
              Choose your role and enter your credentials
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-3 gap-4 mb-6">
              <div 
                className={`flex flex-col items-center justify-center p-4 cursor-pointer rounded-lg border transition-all ${
                  selectedRole === 'student' 
                    ? 'border-rathinam-blue bg-rathinam-blue/10' 
                    : 'border-gray-200 hover:border-rathinam-blue/50 hover:bg-gray-50'
                }`}
                onClick={() => handleRoleSelect('student')}
              >
                <GraduationCap className="h-8 w-8 mb-2 text-rathinam-blue" />
                <span className="text-sm font-medium">Student</span>
              </div>
              <div 
                className={`flex flex-col items-center justify-center p-4 cursor-pointer rounded-lg border transition-all ${
                  selectedRole === 'staff' 
                    ? 'border-rathinam-orange bg-rathinam-orange/10' 
                    : 'border-gray-200 hover:border-rathinam-orange/50 hover:bg-gray-50'
                }`}
                onClick={() => handleRoleSelect('staff')}
              >
                <School className="h-8 w-8 mb-2 text-rathinam-orange" />
                <span className="text-sm font-medium">Staff</span>
              </div>
              <div 
                className={`flex flex-col items-center justify-center p-4 cursor-pointer rounded-lg border transition-all ${
                  selectedRole === 'admin' 
                    ? 'border-rathinam-green bg-rathinam-green/10' 
                    : 'border-gray-200 hover:border-rathinam-green/50 hover:bg-gray-50'
                }`}
                onClick={() => handleRoleSelect('admin')}
              >
                <User className="h-8 w-8 mb-2 text-rathinam-green" />
                <span className="text-sm font-medium">Admin</span>
              </div>
            </div>
            <form onSubmit={handleLogin}>
              <div className="space-y-4">
                <div className="space-y-2">
                  <Label htmlFor="email">Email</Label>
                  <Input 
                    id="email" 
                    type="email" 
                    placeholder="student@rathinam.in"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="password">Password</Label>
                  <Input 
                    id="password" 
                    type="password" 
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                  />
                </div>
              </div>
              <Button type="submit" className="w-full mt-6 bg-gradient-to-r from-rathinam-blue to-rathinam-orange hover:opacity-90">
                Sign In
              </Button>
            </form>
          </CardContent>
          <CardFooter className="flex justify-center">
            <div className="text-sm text-muted-foreground flex items-center">
              <BookText className="w-4 h-4 mr-1" />
              Powered by Rathinam StudyPal AI Technology
            </div>
          </CardFooter>
        </Card>
      </div>
      
      {/* AI Chatbot Placeholder - We'll implement this as a component */}
      <div className="fixed bottom-4 right-4">
        <Button className="rounded-full w-12 h-12 bg-rathinam-green hover:bg-rathinam-green/90 flex items-center justify-center shadow-lg">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="h-6 w-6"
          >
            <path d="M12 2v1" />
            <path d="M12 21v-1" />
            <path d="M4.93 4.93l.7.7" />
            <path d="M18.36 18.36l-.7-.7" />
            <path d="M2 12h1" />
            <path d="M21 12h-1" />
            <path d="M4.93 19.07l.7-.7" />
            <path d="M18.36 5.64l-.7.7" />
            <path d="M12 15a3 3 0 1 0 0-6 3 3 0 0 0 0 6Z" />
            <path d="M2 16.1A5 5 0 0 1 5.9 20M2 12.05A9 9 0 0 1 9.4 20M2 8V6a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2h-6" />
            <path d="M15 12v8" />
            <path d="M12 16h6" />
          </svg>
        </Button>
      </div>
    </div>
  );
};

export default Login;
