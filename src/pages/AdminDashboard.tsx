
import React from 'react';
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { BookOpen, FileText, LayoutDashboard, Settings, TrendingUp, User, Users } from 'lucide-react';

const AdminDashboard = () => {
  return (
    <div className="min-h-screen bg-lightBg dark:bg-darkBg">
      <div className="container mx-auto py-8 px-4">
        <header className="mb-8">
          <h1 className="text-3xl font-bold font-poppins">Admin Dashboard</h1>
          <p className="text-muted-foreground">System administration and management</p>
        </header>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {/* Manage Users */}
          <Card>
            <CardHeader className="pb-2">
              <CardTitle className="text-lg font-medium flex items-center gap-2">
                <Users className="h-5 w-5 text-royal" />
                Manage Users
              </CardTitle>
              <CardDescription>
                Administer user accounts
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div className="grid grid-cols-2 gap-4">
                  <div className="p-4 bg-blue-50 rounded-lg text-center">
                    <p className="text-2xl font-bold text-royal">1,245</p>
                    <p className="text-xs text-muted-foreground">Students</p>
                  </div>
                  <div className="p-4 bg-purple-50 rounded-lg text-center">
                    <p className="text-2xl font-bold text-purple-700">87</p>
                    <p className="text-xs text-muted-foreground">Staff</p>
                  </div>
                </div>
                <div className="space-y-2">
                  <Button variant="outline" className="w-full justify-start">
                    <User className="mr-2 h-4 w-4" />
                    Add New User
                  </Button>
                  <Button variant="outline" className="w-full justify-start">
                    <Users className="mr-2 h-4 w-4" />
                    Bulk Import Users
                  </Button>
                  <Button variant="outline" className="w-full justify-start">
                    <Settings className="mr-2 h-4 w-4" />
                    User Permissions
                  </Button>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Feature Access Control */}
          <Card>
            <CardHeader className="pb-2">
              <CardTitle className="text-lg font-medium flex items-center gap-2">
                <Settings className="h-5 w-5 text-royal" />
                Feature Access Control
              </CardTitle>
              <CardDescription>
                Manage platform functionality
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-3">
                <div className="flex items-center justify-between p-2 bg-muted rounded-lg">
                  <div className="flex items-center">
                    <div className="w-8 h-8 rounded-full bg-royal/10 flex items-center justify-center">
                      <BookOpen className="h-4 w-4 text-royal" />
                    </div>
                    <span className="ml-2 text-sm font-medium">AI Tutor</span>
                  </div>
                  <div className="relative inline-flex h-6 w-11 items-center rounded-full bg-gray-200 transition-colors focus:outline-none">
                    <span className="inline-block h-4 w-4 transform rounded-full bg-white transition-transform translate-x-5"></span>
                  </div>
                </div>
                
                <div className="flex items-center justify-between p-2 bg-muted rounded-lg">
                  <div className="flex items-center">
                    <div className="w-8 h-8 rounded-full bg-royal/10 flex items-center justify-center">
                      <TrendingUp className="h-4 w-4 text-royal" />
                    </div>
                    <span className="ml-2 text-sm font-medium">Analytics Dashboard</span>
                  </div>
                  <div className="relative inline-flex h-6 w-11 items-center rounded-full bg-royal transition-colors focus:outline-none">
                    <span className="inline-block h-4 w-4 transform rounded-full bg-white transition-transform translate-x-5"></span>
                  </div>
                </div>
                
                <div className="flex items-center justify-between p-2 bg-muted rounded-lg">
                  <div className="flex items-center">
                    <div className="w-8 h-8 rounded-full bg-royal/10 flex items-center justify-center">
                      <FileText className="h-4 w-4 text-royal" />
                    </div>
                    <span className="ml-2 text-sm font-medium">Quiz Generator</span>
                  </div>
                  <div className="relative inline-flex h-6 w-11 items-center rounded-full bg-royal transition-colors focus:outline-none">
                    <span className="inline-block h-4 w-4 transform rounded-full bg-white transition-transform translate-x-5"></span>
                  </div>
                </div>
                
                <Button variant="outline" className="w-full">Manage All Features</Button>
              </div>
            </CardContent>
          </Card>

          {/* Global Module & Quiz Overview */}
          <Card>
            <CardHeader className="pb-2">
              <CardTitle className="text-lg font-medium flex items-center gap-2">
                <BookOpen className="h-5 w-5 text-royal" />
                Module & Quiz Overview
              </CardTitle>
              <CardDescription>
                Complete learning content overview
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-3">
                <div className="grid grid-cols-2 gap-3">
                  <div className="p-3 border rounded-lg text-center">
                    <p className="text-2xl font-bold text-royal">156</p>
                    <p className="text-xs text-muted-foreground">Active Modules</p>
                  </div>
                  <div className="p-3 border rounded-lg text-center">
                    <p className="text-2xl font-bold text-cyan">342</p>
                    <p className="text-xs text-muted-foreground">Active Quizzes</p>
                  </div>
                </div>
                <Button variant="outline" className="w-full">View Content Library</Button>
                <Button variant="outline" className="w-full">Content Approval Queue (12)</Button>
              </div>
            </CardContent>
          </Card>

          {/* Platform Analytics */}
          <Card>
            <CardHeader className="pb-2">
              <CardTitle className="text-lg font-medium flex items-center gap-2">
                <TrendingUp className="h-5 w-5 text-royal" />
                Platform Analytics
              </CardTitle>
              <CardDescription>
                Usage and performance metrics
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div>
                  <h4 className="text-sm font-medium mb-2">System Overview</h4>
                  <div className="space-y-2">
                    <div>
                      <div className="flex justify-between text-xs mb-1">
                        <span>Active Users (last 24h)</span>
                        <span>832</span>
                      </div>
                      <div className="w-full bg-gray-200 rounded-full h-2">
                        <div className="bg-royal h-2 rounded-full" style={{ width: '78%' }}></div>
                      </div>
                    </div>
                    <div>
                      <div className="flex justify-between text-xs mb-1">
                        <span>Server Load</span>
                        <span>42%</span>
                      </div>
                      <div className="w-full bg-gray-200 rounded-full h-2">
                        <div className="bg-green-500 h-2 rounded-full" style={{ width: '42%' }}></div>
                      </div>
                    </div>
                    <div>
                      <div className="flex justify-between text-xs mb-1">
                        <span>AI Model Usage</span>
                        <span>65%</span>
                      </div>
                      <div className="w-full bg-gray-200 rounded-full h-2">
                        <div className="bg-cyan h-2 rounded-full" style={{ width: '65%' }}></div>
                      </div>
                    </div>
                  </div>
                </div>
                <Button variant="outline" className="w-full">View Full Analytics</Button>
              </div>
            </CardContent>
          </Card>

          {/* Impersonate View */}
          <Card>
            <CardHeader className="pb-2">
              <CardTitle className="text-lg font-medium flex items-center gap-2">
                <User className="h-5 w-5 text-royal" />
                Impersonate View
              </CardTitle>
              <CardDescription>
                View platform as another user
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-3">
                <div className="relative">
                  <input 
                    type="text" 
                    placeholder="Search users by name or ID..."
                    className="w-full rounded-md border border-input pl-9 pr-4 py-2 text-sm"
                  />
                  <svg 
                    xmlns="http://www.w3.org/2000/svg" 
                    width="16" 
                    height="16" 
                    viewBox="0 0 24 24" 
                    fill="none" 
                    stroke="currentColor" 
                    strokeWidth="2" 
                    strokeLinecap="round" 
                    strokeLinejoin="round" 
                    className="absolute left-3 top-2.5 h-4 w-4 text-muted-foreground"
                  >
                    <circle cx="11" cy="11" r="8" />
                    <path d="m21 21-4.3-4.3" />
                  </svg>
                </div>
                <div className="text-sm">Recent Impersonations:</div>
                <div className="space-y-2">
                  <Button variant="outline" className="w-full justify-start">
                    <User className="mr-2 h-4 w-4" />
                    John Smith (Student)
                  </Button>
                  <Button variant="outline" className="w-full justify-start">
                    <User className="mr-2 h-4 w-4" />
                    Dr. Lisa Chen (Staff)
                  </Button>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* System Updates */}
          <Card>
            <CardHeader className="pb-2">
              <CardTitle className="text-lg font-medium flex items-center gap-2">
                <LayoutDashboard className="h-5 w-5 text-royal" />
                System Updates
              </CardTitle>
              <CardDescription>
                Platform-wide notifications
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div className="p-3 border border-amber-200 bg-amber-50 rounded-lg">
                  <h4 className="font-medium flex items-center">
                    <svg 
                      xmlns="http://www.w3.org/2000/svg" 
                      width="16" 
                      height="16" 
                      viewBox="0 0 24 24" 
                      fill="none" 
                      stroke="currentColor" 
                      strokeWidth="2" 
                      strokeLinecap="round" 
                      strokeLinejoin="round" 
                      className="mr-1 h-4 w-4 text-amber-500"
                    >
                      <path d="M10.29 3.86 1.82 18a2 2 0 0 0 1.71 3h16.94a2 2 0 0 0 1.71-3L13.71 3.86a2 2 0 0 0-3.42 0z" />
                      <line x1="12" y1="9" x2="12" y2="13" />
                      <line x1="12" y1="17" x2="12.01" y2="17" />
                    </svg>
                    Scheduled Maintenance
                  </h4>
                  <p className="text-xs text-muted-foreground mt-1">System update scheduled for April 30, 2025 (2:00 AM - 4:00 AM)</p>
                </div>
                <div className="space-y-2">
                  <Button className="w-full bg-royal hover:bg-royal/90">Send System Notification</Button>
                  <Button variant="outline" className="w-full">Schedule Maintenance Window</Button>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default AdminDashboard;
