
import React from 'react';
import { Link } from 'react-router-dom';
import { 
  BookOpen, 
  Search, 
  BookText, 
  GraduationCap,
  Award,
  TrendingUp,
  Calendar,
  User,
  ChevronLeft,
  ChevronRight,
  Bookmark,
  BarChart2
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';

interface SidebarProps {
  collapsed: boolean;
  setCollapsed: (collapsed: boolean) => void;
}

export const Sidebar: React.FC<SidebarProps> = ({ collapsed, setCollapsed }) => {
  const mainNavItems = [
    { name: 'Dashboard', icon: <BarChart2 className="h-5 w-5" />, path: '/student-dashboard' },
    { name: 'My Courses', icon: <BookOpen className="h-5 w-5" />, path: '/courses' },
    { name: 'AI Tutor', icon: <Search className="h-5 w-5" />, path: '/ai-tutor' },
    { name: 'Modules', icon: <BookText className="h-5 w-5" />, path: '/modules' },
    { name: 'Tests', icon: <GraduationCap className="h-5 w-5" />, path: '/tests' },
    { name: 'Leaderboard', icon: <Award className="h-5 w-5" />, path: '/leaderboard' },
    { name: 'Progress', icon: <TrendingUp className="h-5 w-5" />, path: '/progress' },
    { name: 'Calendar', icon: <Calendar className="h-5 w-5" />, path: '/calendar' },
    { name: 'Library', icon: <Bookmark className="h-5 w-5" />, path: '/library' },
  ];

  return (
    <aside 
      className={`${
        collapsed ? 'w-20' : 'w-64'
      } bg-white dark:bg-gray-800 border-r border-gray-200 dark:border-gray-700 h-screen sticky top-0 transition-all duration-300 ease-in-out flex flex-col`}
    >
      <div className={`${
        collapsed ? 'justify-center' : 'justify-between px-4'
      } py-4 flex items-center border-b border-gray-200 dark:border-gray-700`}>
        {!collapsed && (
          <div className="flex items-center">
            <img 
              src="/lovable-uploads/483d9d00-9bb4-4481-a939-859efdbb48da.png" 
              alt="Rathinam StudyPal Logo" 
              className="h-8 w-auto"
            />
          </div>
        )}
        <Button 
          variant="ghost" 
          size="icon" 
          onClick={() => setCollapsed(!collapsed)}
          className="rounded-full"
        >
          {collapsed ? <ChevronRight className="h-5 w-5" /> : <ChevronLeft className="h-5 w-5" />}
        </Button>
      </div>

      <div className={`flex flex-col items-${collapsed ? 'center' : 'start'} p-4 border-b border-gray-200 dark:border-gray-700`}>
        <Avatar className={`h-${collapsed ? '10' : '16'} w-${collapsed ? '10' : '16'} mb-2`}>
          <AvatarImage src="https://github.com/shadcn.png" alt="Student" />
          <AvatarFallback>ST</AvatarFallback>
        </Avatar>
        {!collapsed && (
          <div className="text-center w-full">
            <h3 className="font-semibold">Alex Johnson</h3>
            <p className="text-sm text-gray-500">Commerce Student</p>
            <div className="mt-2 w-full bg-gray-200 rounded-full h-2">
              <div className="bg-rathinam-green h-2 rounded-full" style={{ width: '70%' }}></div>
            </div>
            <p className="text-xs mt-1">Level 7 • 720 XP</p>
            <div className="mt-2 flex flex-wrap gap-1">
              <span className="text-xs bg-rathinam-blue/20 text-rathinam-blue px-2 py-1 rounded-full">Economics</span>
              <span className="text-xs bg-rathinam-orange/20 text-rathinam-orange px-2 py-1 rounded-full">Accounting</span>
            </div>
          </div>
        )}
      </div>

      <nav className="flex-1 overflow-y-auto py-4">
        <ul className="space-y-2 px-2">
          {mainNavItems.map((item) => (
            <li key={item.name}>
              <Link
                to={item.path}
                className={`flex items-center ${
                  collapsed ? 'justify-center' : 'px-4'
                } py-2 text-gray-600 hover:bg-gray-100 dark:text-gray-300 dark:hover:bg-gray-700 rounded-md transition-colors`}
              >
                {item.icon}
                {!collapsed && <span className="ml-3">{item.name}</span>}
              </Link>
            </li>
          ))}
        </ul>
      </nav>

      <div className="p-4 border-t border-gray-200 dark:border-gray-700">
        <Link
          to="/profile"
          className={`flex items-center ${
            collapsed ? 'justify-center' : 'px-4'
          } py-2 text-gray-600 hover:bg-gray-100 dark:text-gray-300 dark:hover:bg-gray-700 rounded-md transition-colors`}
        >
          <User className="h-5 w-5" />
          {!collapsed && <span className="ml-3">Profile</span>}
        </Link>
      </div>
    </aside>
  );
};
