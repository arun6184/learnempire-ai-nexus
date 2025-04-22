
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
      <div className="hero-gradient text-white py-20 px-4 text-center">
        <h1 className="text-4xl md:text-5xl font-bold font-poppins mb-4">Welcome to LearnEmpire AI</h1>
        <p className="text-lg md:text-xl max-w-2xl mx-auto opacity-90">
          An intelligent learning platform powered by AI to enhance education for students, staff, and administrators.
        </p>
      </div>
      
      {/* Login Section */}
      <div className="flex-grow flex items-center justify-center p-4 -mt-10">
        <Card className="w-full max-w-md glass-card">
          <CardHeader className="space-y-1">
            <CardTitle className="text-2xl font-bold text-center">Sign in</CardTitle>
            <CardDescription className="text-center">
              Choose your role and enter your credentials
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-3 gap-4 mb-6">
              <div 
                className={`role-card flex flex-col items-center justify-center cursor-pointer ${selectedRole === 'student' ? 'role-card-active' : ''}`}
                onClick={() => handleRoleSelect('student')}
              >
                <GraduationCap className="h-8 w-8 mb-2 text-royal" />
                <span className="text-sm font-medium">Student</span>
              </div>
              <div 
                className={`role-card flex flex-col items-center justify-center cursor-pointer ${selectedRole === 'staff' ? 'role-card-active' : ''}`}
                onClick={() => handleRoleSelect('staff')}
              >
                <School className="h-8 w-8 mb-2 text-royal" />
                <span className="text-sm font-medium">Staff</span>
              </div>
              <div 
                className={`role-card flex flex-col items-center justify-center cursor-pointer ${selectedRole === 'admin' ? 'role-card-active' : ''}`}
                onClick={() => handleRoleSelect('admin')}
              >
                <User className="h-8 w-8 mb-2 text-royal" />
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
                    placeholder="m.johnson@university.edu"
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
              <Button type="submit" className="w-full mt-6 bg-royal hover:bg-royal/90">
                Sign In
              </Button>
            </form>
          </CardContent>
          <CardFooter className="flex justify-center">
            <div className="text-sm text-muted-foreground flex items-center">
              <BookText className="w-4 h-4 mr-1" />
              Powered by LearnEmpire AI Technology
            </div>
          </CardFooter>
        </Card>
      </div>
      
      {/* AI Chatbot Placeholder - This would be implemented with Supabase integration */}
      <div className="fixed bottom-4 right-4">
        <Button className="rounded-full w-12 h-12 bg-royal hover:bg-royal/90 flex items-center justify-center">
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
