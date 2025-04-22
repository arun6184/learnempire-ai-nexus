
import React from 'react';
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { 
  BookOpen, 
  BookText, 
  Brain, 
  GraduationCap, 
  Search, 
  Trophy, 
  TrendingUp, 
  Clock,
  BookCheck,
  Award,
  ChevronRight
} from 'lucide-react';
import { Progress } from '@/components/ui/progress';

const StudentDashboard = () => {
  // Sample data for commerce subjects
  const subjects = [
    { name: 'Accounting', progress: 75, color: 'bg-rathinam-orange' },
    { name: 'Economics', progress: 60, color: 'bg-rathinam-blue' },
    { name: 'Business Studies', progress: 85, color: 'bg-rathinam-green' },
    { name: 'Commerce Law', progress: 40, color: 'bg-purple-500' },
    { name: 'CA Foundation', progress: 55, color: 'bg-red-500' },
    { name: 'Banking', progress: 30, color: 'bg-yellow-500' },
  ];

  // Sample data for upcoming assignments
  const upcomingAssignments = [
    { name: 'Market Analysis Report', subject: 'Economics', deadline: '2 days left', color: 'border-rathinam-blue' },
    { name: 'Balance Sheet Preparation', subject: 'Accounting', deadline: '5 days left', color: 'border-rathinam-orange' },
    { name: 'Case Study: Business Ethics', subject: 'Business Studies', deadline: '1 week left', color: 'border-rathinam-green' },
  ];

  // Sample data for tests
  const upcomingTests = [
    { name: 'Mid-term: Financial Accounting', date: 'May 15, 2025', subject: 'Accounting' },
    { name: 'Quiz: Economic Indicators', date: 'May 10, 2025', subject: 'Economics' },
  ];

  // Sample data for insights
  const insights = {
    studyHours: 45,
    lessonsCompleted: 24,
    testsAttempted: 12,
    testsPassed: 10,
    attendance: 92,
  };

  return (
    <div className="space-y-6">
      <header>
        <h1 className="text-3xl font-bold font-poppins">Welcome back, Alex</h1>
        <p className="text-muted-foreground">Let's continue your commerce education journey</p>
      </header>

      {/* Insights Panel */}
      <div className="grid grid-cols-1 md:grid-cols-5 gap-4">
        <Card className="col-span-1">
          <CardHeader className="pb-2">
            <CardTitle className="text-lg font-medium flex items-center gap-2">
              <Clock className="h-5 w-5 text-rathinam-blue" />
              Study Hours
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-3xl font-bold">{insights.studyHours}</div>
            <p className="text-sm text-muted-foreground">This month</p>
          </CardContent>
        </Card>

        <Card className="col-span-1">
          <CardHeader className="pb-2">
            <CardTitle className="text-lg font-medium flex items-center gap-2">
              <BookCheck className="h-5 w-5 text-rathinam-orange" />
              Lessons
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-3xl font-bold">{insights.lessonsCompleted}</div>
            <p className="text-sm text-muted-foreground">Completed</p>
          </CardContent>
        </Card>

        <Card className="col-span-1">
          <CardHeader className="pb-2">
            <CardTitle className="text-lg font-medium flex items-center gap-2">
              <GraduationCap className="h-5 w-5 text-rathinam-green" />
              Tests
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-3xl font-bold">{insights.testsPassed}/{insights.testsAttempted}</div>
            <p className="text-sm text-muted-foreground">Passed/Attempted</p>
          </CardContent>
        </Card>

        <Card className="col-span-2">
          <CardHeader className="pb-2">
            <CardTitle className="text-lg font-medium flex items-center gap-2">
              <TrendingUp className="h-5 w-5 text-rathinam-blue" />
              Attendance
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="flex items-end gap-2">
              <div className="text-3xl font-bold">{insights.attendance}%</div>
              <div className="text-sm text-green-600 font-medium">+2% from last month</div>
            </div>
            <Progress value={insights.attendance} className="mt-2 h-2" />
            <p className="text-sm text-muted-foreground mt-1">Overall attendance rate</p>
          </CardContent>
        </Card>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {/* Subjects Progress */}
        <Card className="md:col-span-2">
          <CardHeader className="pb-2">
            <CardTitle className="text-lg font-medium flex items-center gap-2">
              <BookOpen className="h-5 w-5 text-rathinam-blue" />
              My Subjects
            </CardTitle>
            <CardDescription>
              Track your progress in commerce subjects
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {subjects.map((subject) => (
                <div key={subject.name} className="space-y-1">
                  <div className="flex justify-between items-center">
                    <span className="text-sm font-medium">{subject.name}</span>
                    <span className="text-sm font-medium">{subject.progress}%</span>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-2">
                    <div className={`${subject.color} h-2 rounded-full`} style={{ width: `${subject.progress}%` }}></div>
                  </div>
                </div>
              ))}
              <Button variant="outline" className="w-full mt-2">View All Subjects</Button>
            </div>
          </CardContent>
        </Card>

        {/* Weekly XP and Level */}
        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="text-lg font-medium flex items-center gap-2">
              <Award className="h-5 w-5 text-rathinam-orange" />
              Weekly Progress
            </CardTitle>
            <CardDescription>
              Your learning achievements
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="flex flex-col items-center justify-center py-6">
              <div className="relative h-36 w-36">
                <svg className="h-full w-full" viewBox="0 0 100 100">
                  {/* Background Circle */}
                  <circle
                    cx="50"
                    cy="50"
                    r="45"
                    fill="none"
                    stroke="#e6e6e6"
                    strokeWidth="10"
                  />
                  {/* Progress Circle - 70% complete */}
                  <circle
                    cx="50"
                    cy="50"
                    r="45"
                    fill="none"
                    stroke="url(#gradient)"
                    strokeWidth="10"
                    strokeDasharray="282.6"
                    strokeDashoffset="84.78"
                    strokeLinecap="round"
                    transform="rotate(-90 50 50)"
                  />
                  <defs>
                    <linearGradient id="gradient" x1="0%" y1="0%" x2="100%" y2="0%">
                      <stop offset="0%" stopColor="#0099CC" />
                      <stop offset="100%" stopColor="#A4C639" />
                    </linearGradient>
                  </defs>
                </svg>
                <div className="absolute inset-0 flex flex-col items-center justify-center">
                  <span className="text-3xl font-bold">720</span>
                  <span className="text-sm text-muted-foreground">XP this week</span>
                </div>
              </div>
              <div className="mt-4 text-center">
                <div className="text-lg font-semibold">Level 7</div>
                <div className="text-sm text-muted-foreground">280 XP to next level</div>
                <div className="w-full bg-gray-200 rounded-full h-1.5 mt-2">
                  <div className="bg-gradient-to-r from-rathinam-blue to-rathinam-green h-1.5 rounded-full" style={{ width: '70%' }}></div>
                </div>
              </div>
              <div className="grid grid-cols-2 gap-2 mt-6 w-full">
                <Button variant="outline" size="sm" className="flex items-center">
                  <Trophy className="mr-1 h-4 w-4 text-gold" />
                  <span>Leaderboard</span>
                </Button>
                <Button variant="outline" size="sm" className="flex items-center">
                  <Brain className="mr-1 h-4 w-4 text-rathinam-blue" />
                  <span>Achievements</span>
                </Button>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {/* AI Tutor */}
        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="text-lg font-medium flex items-center gap-2">
              <Search className="h-5 w-5 text-rathinam-blue" />
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
                <Button variant="outline" size="sm">Financial Ratios</Button>
                <Button variant="outline" size="sm">Market Structures</Button>
                <Button variant="outline" size="sm">Business Ethics</Button>
                <Button variant="outline" size="sm">Tax Planning</Button>
              </div>
              <div className="p-3 bg-gray-50 rounded-lg border border-gray-200 text-sm">
                <p className="font-medium">Suggested Topic</p>
                <p className="text-muted-foreground mt-1">Based on your recent activity, we recommend studying "Balance Sheet Analysis"</p>
              </div>
              <Button className="w-full bg-rathinam-blue hover:bg-rathinam-blue/90">Start Learning</Button>
            </div>
          </CardContent>
        </Card>

        {/* Upcoming Assignments */}
        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="text-lg font-medium flex items-center gap-2">
              <BookText className="h-5 w-5 text-rathinam-orange" />
              Upcoming Assignments
            </CardTitle>
            <CardDescription>
              Pending tasks and deadlines
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-3">
              {upcomingAssignments.map((assignment, index) => (
                <div key={index} className={`p-3 rounded-lg border-l-4 ${assignment.color} border-gray-200 bg-gray-50`}>
                  <div className="font-medium">{assignment.name}</div>
                  <div className="flex justify-between mt-1">
                    <span className="text-xs text-muted-foreground">{assignment.subject}</span>
                    <span className="text-xs font-medium text-red-500">{assignment.deadline}</span>
                  </div>
                </div>
              ))}
              <Button variant="outline" className="w-full">View All Assignments</Button>
            </div>
          </CardContent>
        </Card>

        {/* Upcoming Tests */}
        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="text-lg font-medium flex items-center gap-2">
              <GraduationCap className="h-5 w-5 text-rathinam-green" />
              Upcoming Tests
            </CardTitle>
            <CardDescription>
              Scheduled evaluations
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="bg-amber-50 border border-amber-100 p-3 rounded-lg mb-3">
              <h4 className="font-medium">Weekly Test Available</h4>
              <p className="text-xs text-muted-foreground mt-1">Covers economics and accounting modules</p>
              <Button className="mt-3 w-full bg-gold text-white hover:bg-gold/90">Start Test</Button>
            </div>
            <div className="space-y-3">
              {upcomingTests.map((test, index) => (
                <div key={index} className="flex justify-between items-center p-3 border rounded-lg">
                  <div>
                    <h4 className="font-medium">{test.name}</h4>
                    <p className="text-xs text-muted-foreground">{test.subject} • {test.date}</p>
                  </div>
                  <Button variant="ghost" size="icon">
                    <ChevronRight className="h-5 w-5" />
                  </Button>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default StudentDashboard;
