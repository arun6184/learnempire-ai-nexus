
import React from 'react';
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { 
  BookOpen, 
  FileText, 
  School, 
  Search, 
  TrendingUp, 
  Upload, 
  Award,
  BarChart2,
  User,
  Calendar
} from 'lucide-react';
import { Progress } from '@/components/ui/progress';

const StaffDashboard = () => {
  // Sample data for commerce subjects and student counts
  const subjects = [
    { name: 'Accounting', students: 42, completion: 78, color: 'bg-rathinam-orange' },
    { name: 'Economics', students: 38, completion: 82, color: 'bg-rathinam-blue' },
    { name: 'Business Studies', students: 45, completion: 75, color: 'bg-rathinam-green' },
  ];

  // Sample data for top performers
  const topStudents = [
    { name: 'Priya Sharma', xp: 1245, subject: 'Accounting', img: null },
    { name: 'Rahul Verma', xp: 1120, subject: 'Economics', img: null },
    { name: 'Ananya Patel', xp: 980, subject: 'Business Studies', img: null },
  ];

  return (
    <div className="space-y-6">
      <header>
        <h1 className="text-3xl font-bold font-poppins">Welcome back, Prof. Williams</h1>
        <p className="text-muted-foreground">Commerce Department</p>
      </header>

      {/* Overview Stats */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="text-lg font-medium flex items-center gap-2">
              <User className="h-5 w-5 text-rathinam-blue" />
              Total Students
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-3xl font-bold">125</div>
            <p className="text-sm text-muted-foreground">Across all subjects</p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="text-lg font-medium flex items-center gap-2">
              <School className="h-5 w-5 text-rathinam-orange" />
              Average Attendance
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-3xl font-bold">82%</div>
            <Progress value={82} className="mt-2 h-2" />
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="text-lg font-medium flex items-center gap-2">
              <BarChart2 className="h-5 w-5 text-rathinam-green" />
              Pass Rate
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-3xl font-bold">76%</div>
            <p className="text-sm text-muted-foreground">Term average</p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="text-lg font-medium flex items-center gap-2">
              <Calendar className="h-5 w-5 text-purple-500" />
              Upcoming
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-3xl font-bold">3</div>
            <p className="text-sm text-muted-foreground">Scheduled sessions</p>
          </CardContent>
        </Card>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {/* My Students by Subject */}
        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="text-lg font-medium flex items-center gap-2">
              <School className="h-5 w-5 text-rathinam-blue" />
              My Students
            </CardTitle>
            <CardDescription>
              Currently teaching 125 students
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-2">
              {subjects.map((subject) => (
                <Button key={subject.name} variant="outline" className="w-full justify-start">
                  <span className="mr-2 h-6 w-6 rounded-full bg-rathinam-blue text-white text-xs flex items-center justify-center">{subject.students}</span>
                  {subject.name}
                </Button>
              ))}
              <Button variant="ghost" size="sm" className="w-full text-rathinam-blue mt-2">View All Classes</Button>
            </div>
          </CardContent>
        </Card>

        {/* Upload Interface */}
        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="text-lg font-medium flex items-center gap-2">
              <Upload className="h-5 w-5 text-rathinam-orange" />
              Upload Materials
            </CardTitle>
            <CardDescription>
              Add resources for commerce students
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <div className="border-2 border-dashed border-gray-300 rounded-lg p-6 text-center">
                <Upload className="h-8 w-8 mx-auto mb-2 text-muted-foreground" />
                <p className="text-sm text-muted-foreground">Drag & drop commerce study materials or click to browse</p>
              </div>
              <div className="grid grid-cols-1 gap-2">
                <Button variant="outline" className="w-full justify-start text-sm">
                  <FileText className="mr-2 h-4 w-4" />
                  Upload Financial Accounting Quiz
                </Button>
                <Button variant="outline" className="w-full justify-start text-sm">
                  <FileText className="mr-2 h-4 w-4" />
                  Upload Economics Case Study
                </Button>
              </div>
              <div className="flex gap-2">
                <Button className="flex-1 bg-rathinam-orange hover:bg-rathinam-orange/90">Upload File</Button>
                <Button variant="outline" className="flex-1">AI Generate</Button>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Module Manager */}
        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="text-lg font-medium flex items-center gap-2">
              <BookOpen className="h-5 w-5 text-rathinam-green" />
              Module Manager
            </CardTitle>
            <CardDescription>
              Manage commerce course modules
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-3">
              <div className="flex justify-between items-center p-3 border rounded-lg">
                <div>
                  <h4 className="font-medium">Financial Statements</h4>
                  <p className="text-xs text-muted-foreground">Accounting • Week 1-3</p>
                </div>
                <Button variant="ghost" size="sm">Edit</Button>
              </div>
              <div className="flex justify-between items-center p-3 border rounded-lg">
                <div>
                  <h4 className="font-medium">Market Structures</h4>
                  <p className="text-xs text-muted-foreground">Economics • Week 4-6</p>
                </div>
                <Button variant="ghost" size="sm">Edit</Button>
              </div>
              <div className="flex justify-between items-center p-3 border rounded-lg">
                <div>
                  <h4 className="font-medium">Business Ethics & CSR</h4>
                  <p className="text-xs text-muted-foreground">Business Studies • Week 2-4</p>
                </div>
                <Button variant="ghost" size="sm">Edit</Button>
              </div>
              <Button variant="outline" className="w-full">Create New Module</Button>
            </div>
          </CardContent>
        </Card>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {/* Performance Overview */}
        <Card className="md:col-span-2">
          <CardHeader className="pb-2">
            <CardTitle className="text-lg font-medium flex items-center gap-2">
              <TrendingUp className="h-5 w-5 text-rathinam-blue" />
              Performance Overview
            </CardTitle>
            <CardDescription>
              Student progress in commerce subjects
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <div>
                <h4 className="text-sm font-medium mb-2">Syllabus Completion by Subject</h4>
                <div className="space-y-2">
                  {subjects.map((subject) => (
                    <div key={subject.name}>
                      <div className="flex justify-between text-xs mb-1">
                        <span>{subject.name}</span>
                        <span>{subject.completion}%</span>
                      </div>
                      <div className="w-full bg-gray-200 rounded-full h-2">
                        <div className={`${subject.color} h-2 rounded-full`} style={{ width: `${subject.completion}%` }}></div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              <div>
                <h4 className="text-sm font-medium mb-2">Top Performing Students</h4>
                <div className="space-y-2">
                  {topStudents.map((student, index) => (
                    <div key={index} className="flex items-center p-2 rounded-lg border">
                      <div className="w-8 h-8 rounded-full bg-rathinam-blue flex items-center justify-center text-white font-bold">
                        {index + 1}
                      </div>
                      <div className="ml-3 flex-1">
                        <p className="font-medium">{student.name}</p>
                        <p className="text-xs text-muted-foreground">{student.subject} • {student.xp} XP</p>
                      </div>
                      <Button variant="ghost" size="sm">View</Button>
                    </div>
                  ))}
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
              <Search className="h-5 w-5 text-rathinam-orange" />
              AI Teaching Assistant
            </CardTitle>
            <CardDescription>
              Get help with commerce teaching
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <p className="text-sm">What would you like help with?</p>
              <div className="space-y-2">
                <Button variant="outline" className="w-full justify-start text-sm">Generate accounting quiz questions</Button>
                <Button variant="outline" className="w-full justify-start text-sm">Create a lesson plan on market economics</Button>
                <Button variant="outline" className="w-full justify-start text-sm">Suggest projects for commerce students</Button>
              </div>
              <div className="relative">
                <input 
                  type="text" 
                  placeholder="Ask anything about commerce education..."
                  className="w-full rounded-full border border-input px-4 py-2 text-sm"
                />
                <Button className="absolute right-1 top-1 h-6 w-6 rounded-full p-0 bg-rathinam-orange hover:bg-rathinam-orange/90">
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
      </div>
    </div>
  );
};

export default StaffDashboard;
