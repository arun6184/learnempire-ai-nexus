
import React from 'react';
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { BookOpen, FileText, School, Search, TrendingUp, Upload } from 'lucide-react';

const StaffDashboard = () => {
  return (
    <div className="min-h-screen bg-lightBg dark:bg-darkBg">
      <div className="container mx-auto py-8 px-4">
        <header className="mb-8">
          <h1 className="text-3xl font-bold font-poppins">Welcome back, Prof. Williams</h1>
          <p className="text-muted-foreground">Computer Science Department</p>
        </header>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {/* My Students */}
          <Card>
            <CardHeader className="pb-2">
              <CardTitle className="text-lg font-medium flex items-center gap-2">
                <School className="h-5 w-5 text-royal" />
                My Students
              </CardTitle>
              <CardDescription>
                Currently teaching 87 students
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-2">
                <Button variant="outline" className="w-full justify-start">
                  <span className="mr-2 h-6 w-6 rounded-full bg-royal text-white text-xs flex items-center justify-center">42</span>
                  CS101: Intro to Programming
                </Button>
                <Button variant="outline" className="w-full justify-start">
                  <span className="mr-2 h-6 w-6 rounded-full bg-royal text-white text-xs flex items-center justify-center">25</span>
                  CS401: Advanced Algorithms
                </Button>
                <Button variant="outline" className="w-full justify-start">
                  <span className="mr-2 h-6 w-6 rounded-full bg-royal text-white text-xs flex items-center justify-center">20</span>
                  CS210: Data Structures
                </Button>
                <Button variant="ghost" size="sm" className="w-full text-royal mt-2">View All Classes</Button>
              </div>
            </CardContent>
          </Card>

          {/* Upload Quiz/Assignments */}
          <Card>
            <CardHeader className="pb-2">
              <CardTitle className="text-lg font-medium flex items-center gap-2">
                <Upload className="h-5 w-5 text-royal" />
                Upload Quiz / Assignments
              </CardTitle>
              <CardDescription>
                Create new learning materials
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div className="border-2 border-dashed border-muted rounded-lg p-6 text-center">
                  <Upload className="h-8 w-8 mx-auto mb-2 text-muted-foreground" />
                  <p className="text-sm text-muted-foreground">Drag & drop files here or click to browse</p>
                </div>
                <div className="flex gap-2">
                  <Button className="flex-1 bg-royal hover:bg-royal/90">Upload File</Button>
                  <Button variant="outline" className="flex-1">AI Generate</Button>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Module Manager */}
          <Card>
            <CardHeader className="pb-2">
              <CardTitle className="text-lg font-medium flex items-center gap-2">
                <BookOpen className="h-5 w-5 text-royal" />
                Module Manager
              </CardTitle>
              <CardDescription>
                Manage course modules
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-3">
                <div className="flex justify-between items-center p-3 border rounded-lg">
                  <div>
                    <h4 className="font-medium">Programming Basics</h4>
                    <p className="text-xs text-muted-foreground">CS101 • Week 1-3</p>
                  </div>
                  <Button variant="ghost" size="sm">Edit</Button>
                </div>
                <div className="flex justify-between items-center p-3 border rounded-lg">
                  <div>
                    <h4 className="font-medium">Object-Oriented Programming</h4>
                    <p className="text-xs text-muted-foreground">CS101 • Week 4-6</p>
                  </div>
                  <Button variant="ghost" size="sm">Edit</Button>
                </div>
                <div className="flex justify-between items-center p-3 border rounded-lg">
                  <div>
                    <h4 className="font-medium">Advanced Sorting Algorithms</h4>
                    <p className="text-xs text-muted-foreground">CS401 • Week 2-4</p>
                  </div>
                  <Button variant="ghost" size="sm">Edit</Button>
                </div>
                <Button variant="outline" className="w-full">Create New Module</Button>
              </div>
            </CardContent>
          </Card>

          {/* Performance Overview */}
          <Card>
            <CardHeader className="pb-2">
              <CardTitle className="text-lg font-medium flex items-center gap-2">
                <TrendingUp className="h-5 w-5 text-royal" />
                Performance Overview
              </CardTitle>
              <CardDescription>
                Student progress analytics
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div>
                  <h4 className="text-sm font-medium mb-2">Average Performance by Class</h4>
                  <div className="space-y-2">
                    <div>
                      <div className="flex justify-between text-xs mb-1">
                        <span>CS101: Intro to Programming</span>
                        <span>78%</span>
                      </div>
                      <div className="w-full bg-gray-200 rounded-full h-2">
                        <div className="bg-royal h-2 rounded-full" style={{ width: '78%' }}></div>
                      </div>
                    </div>
                    <div>
                      <div className="flex justify-between text-xs mb-1">
                        <span>CS401: Advanced Algorithms</span>
                        <span>82%</span>
                      </div>
                      <div className="w-full bg-gray-200 rounded-full h-2">
                        <div className="bg-royal h-2 rounded-full" style={{ width: '82%' }}></div>
                      </div>
                    </div>
                    <div>
                      <div className="flex justify-between text-xs mb-1">
                        <span>CS210: Data Structures</span>
                        <span>75%</span>
                      </div>
                      <div className="w-full bg-gray-200 rounded-full h-2">
                        <div className="bg-royal h-2 rounded-full" style={{ width: '75%' }}></div>
                      </div>
                    </div>
                  </div>
                </div>
                <Button variant="outline" className="w-full">View Detailed Analytics</Button>
              </div>
            </CardContent>
          </Card>

          {/* AI Assistant */}
          <Card>
            <CardHeader className="pb-2">
              <CardTitle className="text-lg font-medium flex items-center gap-2">
                <Search className="h-5 w-5 text-royal" />
                AI Assistant
              </CardTitle>
              <CardDescription>
                Get help with teaching materials
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <p className="text-sm">What would you like help with?</p>
                <div className="space-y-2">
                  <Button variant="outline" className="w-full justify-start text-sm">Generate quiz questions for CS101</Button>
                  <Button variant="outline" className="w-full justify-start text-sm">Create a lesson plan on algorithms</Button>
                  <Button variant="outline" className="w-full justify-start text-sm">Suggest projects for advanced students</Button>
                </div>
                <div className="relative">
                  <input 
                    type="text" 
                    placeholder="Ask anything..."
                    className="w-full rounded-full border border-input px-4 py-2 text-sm"
                  />
                  <Button className="absolute right-1 top-1 h-6 w-6 rounded-full p-0 bg-royal hover:bg-royal/90">
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
                      className="h-4 w-4"
                    >
                      <path d="m22 2-7 20-4-9-9-4Z" />
                      <path d="M22 2 11 13" />
                    </svg>
                  </Button>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Notification Center */}
          <Card>
            <CardHeader className="pb-2">
              <CardTitle className="text-lg font-medium flex items-center gap-2">
                <FileText className="h-5 w-5 text-royal" />
                Notification Center
              </CardTitle>
              <CardDescription>
                Send updates to students
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div className="space-y-2">
                  <h4 className="text-sm font-medium">Recent Notifications</h4>
                  <div className="p-2 bg-muted rounded-lg text-sm">
                    <p className="font-medium">CS101 Quiz Reminder</p>
                    <p className="text-xs text-muted-foreground">Sent 2 days ago to 42 students</p>
                  </div>
                  <div className="p-2 bg-muted rounded-lg text-sm">
                    <p className="font-medium">CS401 Project Deadline Extension</p>
                    <p className="text-xs text-muted-foreground">Sent 5 days ago to 25 students</p>
                  </div>
                </div>
                <Button className="w-full bg-royal hover:bg-royal/90">Create New Notification</Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default StaffDashboard;
