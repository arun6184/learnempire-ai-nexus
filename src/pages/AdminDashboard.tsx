
import React from 'react';
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { 
  Users, 
  Settings, 
  BookOpen, 
  BarChart2, 
  Eye, 
  Bell, 
  FileText,
  Server,
  CheckCircle
} from 'lucide-react';
import { Progress } from '@/components/ui/progress';

const AdminDashboard = () => {
  return (
    <div className="space-y-6">
      <header>
        <h1 className="text-3xl font-bold font-poppins">Admin Dashboard</h1>
        <p className="text-muted-foreground">Manage Rathinam StudyPal platform</p>
      </header>

      {/* Overview Stats */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="text-lg font-medium flex items-center gap-2">
              <Users className="h-5 w-5 text-rathinam-blue" />
              Total Users
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-3xl font-bold">1,254</div>
            <div className="text-sm flex gap-1">
              <span className="text-muted-foreground">1,180 Students</span>
              <span>•</span>
              <span className="text-muted-foreground">74 Staff</span>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="text-lg font-medium flex items-center gap-2">
              <BookOpen className="h-5 w-5 text-rathinam-orange" />
              Courses
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-3xl font-bold">28</div>
            <p className="text-sm text-muted-foreground">Commerce modules</p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="text-lg font-medium flex items-center gap-2">
              <BarChart2 className="h-5 w-5 text-rathinam-green" />
              Platform Usage
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-3xl font-bold">87%</div>
            <Progress value={87} className="mt-2 h-2" />
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="text-lg font-medium flex items-center gap-2">
              <Server className="h-5 w-5 text-purple-500" />
              System Status
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="flex items-center gap-2">
              <CheckCircle className="h-5 w-5 text-green-500" />
              <span className="text-xl font-medium">All Systems Operational</span>
            </div>
            <p className="text-sm text-muted-foreground mt-1">Last updated: 10 minutes ago</p>
          </CardContent>
        </Card>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {/* Manage Users */}
        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="text-lg font-medium flex items-center gap-2">
              <Users className="h-5 w-5 text-rathinam-blue" />
              Manage Users
            </CardTitle>
            <CardDescription>
              Add, edit or remove users
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <div className="grid grid-cols-2 gap-2">
                <Button className="bg-rathinam-blue hover:bg-rathinam-blue/90">Add Student</Button>
                <Button className="bg-rathinam-orange hover:bg-rathinam-orange/90">Add Staff</Button>
              </div>
              <div className="border rounded-lg divide-y">
                <div className="p-3 flex justify-between items-center">
                  <div>
                    <h4 className="font-medium">Students</h4>
                    <p className="text-xs text-muted-foreground">1,180 active</p>
                  </div>
                  <Button variant="ghost" size="sm">Manage</Button>
                </div>
                <div className="p-3 flex justify-between items-center">
                  <div>
                    <h4 className="font-medium">Faculty</h4>
                    <p className="text-xs text-muted-foreground">74 active</p>
                  </div>
                  <Button variant="ghost" size="sm">Manage</Button>
                </div>
                <div className="p-3 flex justify-between items-center">
                  <div>
                    <h4 className="font-medium">Admins</h4>
                    <p className="text-xs text-muted-foreground">5 active</p>
                  </div>
                  <Button variant="ghost" size="sm">Manage</Button>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Feature Access Control */}
        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="text-lg font-medium flex items-center gap-2">
              <Settings className="h-5 w-5 text-rathinam-orange" />
              Feature Control
            </CardTitle>
            <CardDescription>
              Manage access to platform features
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <div className="border rounded-lg divide-y">
                <div className="p-3 flex justify-between items-center">
                  <div>
                    <h4 className="font-medium">AI Tutor</h4>
                    <p className="text-xs text-muted-foreground">Enabled for all users</p>
                  </div>
                  <div className="flex items-center h-5">
                    <input
                      id="ai-tutor"
                      type="checkbox"
                      defaultChecked
                      className="h-4 w-4 rounded border-gray-300 text-rathinam-blue focus:ring-rathinam-blue"
                    />
                  </div>
                </div>
                <div className="p-3 flex justify-between items-center">
                  <div>
                    <h4 className="font-medium">XP & Gamification</h4>
                    <p className="text-xs text-muted-foreground">Enabled for students</p>
                  </div>
                  <div className="flex items-center h-5">
                    <input
                      id="gamification"
                      type="checkbox"
                      defaultChecked
                      className="h-4 w-4 rounded border-gray-300 text-rathinam-blue focus:ring-rathinam-blue"
                    />
                  </div>
                </div>
                <div className="p-3 flex justify-between items-center">
                  <div>
                    <h4 className="font-medium">Analytics Dashboard</h4>
                    <p className="text-xs text-muted-foreground">For staff only</p>
                  </div>
                  <div className="flex items-center h-5">
                    <input
                      id="analytics"
                      type="checkbox"
                      defaultChecked
                      className="h-4 w-4 rounded border-gray-300 text-rathinam-blue focus:ring-rathinam-blue"
                    />
                  </div>
                </div>
                <div className="p-3 flex justify-between items-center">
                  <div>
                    <h4 className="font-medium">Live Classes</h4>
                    <p className="text-xs text-muted-foreground">Beta feature</p>
                  </div>
                  <div className="flex items-center h-5">
                    <input
                      id="live-classes"
                      type="checkbox"
                      className="h-4 w-4 rounded border-gray-300 text-rathinam-blue focus:ring-rathinam-blue"
                    />
                  </div>
                </div>
              </div>
              <Button className="w-full bg-rathinam-orange hover:bg-rathinam-orange/90">Save Settings</Button>
            </div>
          </CardContent>
        </Card>

        {/* Impersonate View */}
        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="text-lg font-medium flex items-center gap-2">
              <Eye className="h-5 w-5 text-rathinam-green" />
              Impersonate View
            </CardTitle>
            <CardDescription>
              View as a specific user
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <div className="relative">
                <select className="w-full rounded-md border border-input bg-background px-3 py-2 text-sm">
                  <option value="" disabled selected>Select a user type...</option>
                  <option value="student">Student</option>
                  <option value="staff">Staff</option>
                </select>
              </div>
              <div className="relative">
                <input 
                  type="text" 
                  placeholder="Search by name or ID..."
                  className="w-full rounded-md border border-input px-3 py-2 text-sm"
                />
              </div>
              <div className="border rounded-lg divide-y max-h-40 overflow-y-auto">
                <div className="p-3 flex justify-between items-center cursor-pointer hover:bg-gray-50">
                  <div className="flex items-center">
                    <div className="w-8 h-8 rounded-full bg-rathinam-blue flex items-center justify-center text-white">S</div>
                    <div className="ml-3">
                      <h4 className="font-medium">Sarah Johnson</h4>
                      <p className="text-xs text-muted-foreground">Student • Commerce</p>
                    </div>
                  </div>
                  <Button variant="ghost" size="sm">View as</Button>
                </div>
                <div className="p-3 flex justify-between items-center cursor-pointer hover:bg-gray-50">
                  <div className="flex items-center">
                    <div className="w-8 h-8 rounded-full bg-rathinam-orange flex items-center justify-center text-white">P</div>
                    <div className="ml-3">
                      <h4 className="font-medium">Prof. Williams</h4>
                      <p className="text-xs text-muted-foreground">Staff • Commerce</p>
                    </div>
                  </div>
                  <Button variant="ghost" size="sm">View as</Button>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* Platform Analytics */}
        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="text-lg font-medium flex items-center gap-2">
              <BarChart2 className="h-5 w-5 text-rathinam-blue" />
              Platform Analytics
            </CardTitle>
            <CardDescription>
              Usage and performance metrics
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <div className="grid grid-cols-2 gap-4">
                <div className="border rounded-lg p-4">
                  <h4 className="text-sm font-medium text-muted-foreground">Daily Active Users</h4>
                  <div className="text-2xl font-bold mt-1">845</div>
                  <span className="text-xs text-green-600">↑ 12% from last week</span>
                </div>
                <div className="border rounded-lg p-4">
                  <h4 className="text-sm font-medium text-muted-foreground">Avg. Session Time</h4>
                  <div className="text-2xl font-bold mt-1">42m</div>
                  <span className="text-xs text-green-600">↑ 5% from last week</span>
                </div>
                <div className="border rounded-lg p-4">
                  <h4 className="text-sm font-medium text-muted-foreground">AI Tutor Usage</h4>
                  <div className="text-2xl font-bold mt-1">324</div>
                  <span className="text-xs text-muted-foreground">queries today</span>
                </div>
                <div className="border rounded-lg p-4">
                  <h4 className="text-sm font-medium text-muted-foreground">Content Created</h4>
                  <div className="text-2xl font-bold mt-1">52</div>
                  <span className="text-xs text-muted-foreground">new modules this month</span>
                </div>
              </div>
              <Button variant="outline" className="w-full">View Detailed Analytics</Button>
            </div>
          </CardContent>
        </Card>

        {/* Notifications & Updates */}
        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="text-lg font-medium flex items-center gap-2">
              <Bell className="h-5 w-5 text-rathinam-orange" />
              System Notifications
            </CardTitle>
            <CardDescription>
              Send platform-wide announcements
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <div className="space-y-2">
                <input 
                  type="text" 
                  placeholder="Notification title..."
                  className="w-full rounded-md border border-input px-3 py-2 text-sm"
                />
                <textarea 
                  placeholder="Notification message..."
                  className="w-full rounded-md border border-input px-3 py-2 text-sm min-h-[100px] resize-none"
                ></textarea>
              </div>
              <div className="grid grid-cols-2 gap-2">
                <div>
                  <h4 className="text-sm font-medium mb-1">Recipients</h4>
                  <select className="w-full rounded-md border border-input bg-background px-3 py-2 text-sm">
                    <option value="all">All Users</option>
                    <option value="students">Students Only</option>
                    <option value="staff">Staff Only</option>
                    <option value="admin">Admins Only</option>
                  </select>
                </div>
                <div>
                  <h4 className="text-sm font-medium mb-1">Priority</h4>
                  <select className="w-full rounded-md border border-input bg-background px-3 py-2 text-sm">
                    <option value="normal">Normal</option>
                    <option value="important">Important</option>
                    <option value="urgent">Urgent</option>
                  </select>
                </div>
              </div>
              <div className="flex items-center">
                <input
                  id="schedule"
                  type="checkbox"
                  className="h-4 w-4 rounded border-gray-300 text-rathinam-blue focus:ring-rathinam-blue"
                />
                <label htmlFor="schedule" className="ml-2 text-sm text-muted-foreground">
                  Schedule for later
                </label>
              </div>
              <Button className="w-full bg-rathinam-orange hover:bg-rathinam-orange/90">Send Notification</Button>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default AdminDashboard;
