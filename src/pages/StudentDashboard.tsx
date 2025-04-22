
import React from 'react';
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Book, BookOpen, Brain, GraduationCap, Search, Trophy, TrendingUp } from 'lucide-react';

const StudentDashboard = () => {
  return (
    <div className="min-h-screen bg-lightBg dark:bg-darkBg">
      <div className="container mx-auto py-8 px-4">
        <header className="mb-8">
          <h1 className="text-3xl font-bold font-poppins">Welcome back, Alex</h1>
          <div className="flex items-center mt-2">
            <div className="w-full max-w-md bg-gray-200 rounded-full h-2.5">
              <div className="bg-royal h-2.5 rounded-full" style={{ width: '45%' }}></div>
            </div>
            <span className="ml-2 text-sm font-medium">Level 4 • 450 XP</span>
          </div>
        </header>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {/* My Courses */}
          <Card>
            <CardHeader className="pb-2">
              <CardTitle className="text-lg font-medium flex items-center gap-2">
                <Book className="h-5 w-5 text-royal" />
                My Courses
              </CardTitle>
              <CardDescription>
                Currently enrolled courses
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-2">
                <Button variant="outline" className="w-full justify-start">
                  <GraduationCap className="mr-2 h-4 w-4" />
                  Advanced Mathematics
                </Button>
                <Button variant="outline" className="w-full justify-start">
                  <GraduationCap className="mr-2 h-4 w-4" />
                  Computer Science 101
                </Button>
                <Button variant="outline" className="w-full justify-start">
                  <GraduationCap className="mr-2 h-4 w-4" />
                  Data Structures
                </Button>
              </div>
            </CardContent>
          </Card>

          {/* AI Tutor */}
          <Card>
            <CardHeader className="pb-2">
              <CardTitle className="text-lg font-medium flex items-center gap-2">
                <Search className="h-5 w-5 text-royal" />
                AI Tutor
              </CardTitle>
              <CardDescription>
                Get personalized help
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <p className="text-sm">What would you like to learn today?</p>
                <div className="grid grid-cols-2 gap-2">
                  <Button variant="outline" size="sm">Linear Algebra</Button>
                  <Button variant="outline" size="sm">Python Basics</Button>
                  <Button variant="outline" size="sm">Machine Learning</Button>
                  <Button variant="outline" size="sm">Algorithms</Button>
                </div>
                <Button className="w-full bg-royal hover:bg-royal/90">Start Learning</Button>
              </div>
            </CardContent>
          </Card>

          {/* Modules */}
          <Card>
            <CardHeader className="pb-2">
              <CardTitle className="text-lg font-medium flex items-center gap-2">
                <Brain className="h-5 w-5 text-royal" />
                Modules
              </CardTitle>
              <CardDescription>
                Recommended learning paths
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-3">
                <div className="p-3 border rounded-lg">
                  <div className="flex justify-between items-center mb-1">
                    <h4 className="font-medium">Array Manipulation</h4>
                    <span className="text-xs bg-cyan/20 text-cyan px-2 py-1 rounded-full">+25 XP</span>
                  </div>
                  <p className="text-xs text-muted-foreground">Master array operations in programming</p>
                  <div className="mt-2 flex justify-end">
                    <Button variant="ghost" size="sm" className="text-royal">Continue</Button>
                  </div>
                </div>
                
                <div className="p-3 border rounded-lg">
                  <div className="flex justify-between items-center mb-1">
                    <h4 className="font-medium">Calculus Fundamentals</h4>
                    <span className="text-xs bg-cyan/20 text-cyan px-2 py-1 rounded-full">+40 XP</span>
                  </div>
                  <p className="text-xs text-muted-foreground">Learn derivatives and integrals</p>
                  <div className="mt-2 flex justify-end">
                    <Button variant="ghost" size="sm" className="text-royal">Start</Button>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Tests */}
          <Card>
            <CardHeader className="pb-2">
              <CardTitle className="text-lg font-medium flex items-center gap-2">
                <BookOpen className="h-5 w-5 text-royal" />
                Tests
              </CardTitle>
              <CardDescription>
                Test your knowledge
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div className="bg-amber-50 border border-amber-100 p-3 rounded-lg">
                  <h4 className="font-medium">Weekly Test Available</h4>
                  <p className="text-xs text-muted-foreground mt-1">Covers all modules completed this week</p>
                  <Button className="mt-3 w-full bg-gold text-white hover:bg-gold/90">Start Test</Button>
                </div>
                <p className="text-sm font-medium">Previous Test Results:</p>
                <div className="space-y-2">
                  <div className="flex justify-between items-center text-sm">
                    <span>Data Structures Quiz</span>
                    <span className="font-medium">85%</span>
                  </div>
                  <div className="flex justify-between items-center text-sm">
                    <span>Algorithms Basics</span>
                    <span className="font-medium">92%</span>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Leaderboard */}
          <Card>
            <CardHeader className="pb-2">
              <CardTitle className="text-lg font-medium flex items-center gap-2">
                <Trophy className="h-5 w-5 text-royal" />
                Leaderboard
              </CardTitle>
              <CardDescription>
                Top performers this week
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-3">
                <div className="flex items-center p-2 bg-gold/20 rounded-lg">
                  <div className="w-8 h-8 rounded-full bg-gold flex items-center justify-center text-white font-bold">1</div>
                  <div className="ml-3">
                    <p className="font-medium">Sarah Johnson</p>
                    <p className="text-xs">1,245 XP</p>
                  </div>
                </div>
                
                <div className="flex items-center p-2 bg-gray-200 rounded-lg">
                  <div className="w-8 h-8 rounded-full bg-gray-400 flex items-center justify-center text-white font-bold">2</div>
                  <div className="ml-3">
                    <p className="font-medium">Michael Chen</p>
                    <p className="text-xs">1,120 XP</p>
                  </div>
                </div>
                
                <div className="flex items-center p-2 bg-amber-100 rounded-lg">
                  <div className="w-8 h-8 rounded-full bg-amber-500 flex items-center justify-center text-white font-bold">3</div>
                  <div className="ml-3">
                    <p className="font-medium">Jessica Patel</p>
                    <p className="text-xs">980 XP</p>
                  </div>
                </div>
                
                <Button variant="outline" className="w-full">View Full Leaderboard</Button>
              </div>
            </CardContent>
          </Card>

          {/* Progress */}
          <Card>
            <CardHeader className="pb-2">
              <CardTitle className="text-lg font-medium flex items-center gap-2">
                <TrendingUp className="h-5 w-5 text-royal" />
                My Progress
              </CardTitle>
              <CardDescription>
                Track your learning journey
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div>
                  <div className="flex justify-between mb-1 text-sm">
                    <span>Computer Science 101</span>
                    <span className="font-medium">65%</span>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-2">
                    <div className="bg-royal h-2 rounded-full" style={{ width: '65%' }}></div>
                  </div>
                </div>
                
                <div>
                  <div className="flex justify-between mb-1 text-sm">
                    <span>Advanced Mathematics</span>
                    <span className="font-medium">42%</span>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-2">
                    <div className="bg-royal h-2 rounded-full" style={{ width: '42%' }}></div>
                  </div>
                </div>
                
                <div>
                  <div className="flex justify-between mb-1 text-sm">
                    <span>Data Structures</span>
                    <span className="font-medium">78%</span>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-2">
                    <div className="bg-royal h-2 rounded-full" style={{ width: '78%' }}></div>
                  </div>
                </div>
                
                <Button variant="outline" className="w-full">View Detailed Analytics</Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default StudentDashboard;
