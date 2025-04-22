
import React, { useState } from 'react';
import { Bell, Menu, Search, X } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Input } from '@/components/ui/input';
import NotificationDropdown from './NotificationDropdown';

type NavbarProps = {
  onSidebarToggle: () => void;
};

export const Navbar: React.FC<NavbarProps> = ({ onSidebarToggle }) => {
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [showNotifications, setShowNotifications] = useState(false);
  const [notifications] = useState([
    { id: 1, title: 'New assignment', message: 'Economics: Market Analysis due tomorrow', time: '2 hours ago' },
    { id: 2, title: 'Test reminder', message: 'Accounting test scheduled for Friday', time: '1 day ago' },
    { id: 3, title: 'New announcement', message: 'CA Foundation class postponed to next week', time: '2 days ago' },
  ]);

  return (
    <nav className="bg-white dark:bg-gray-800 border-b border-gray-200 dark:border-gray-700 p-4 flex items-center justify-between sticky top-0 z-30">
      <div className="flex items-center">
        <Button variant="ghost" size="icon" onClick={onSidebarToggle} className="mr-4">
          <Menu className="h-5 w-5" />
        </Button>
        <div className="hidden md:flex items-center space-x-1">
          <img 
            src="/lovable-uploads/483d9d00-9bb4-4481-a939-859efdbb48da.png" 
            alt="Rathinam StudyPal Logo" 
            className="h-8 w-auto"
          />
          <span className="font-bold text-xl ml-2 text-gray-800 dark:text-white">Rathinam StudyPal</span>
        </div>
      </div>

      <div className="flex items-center space-x-4">
        {isSearchOpen ? (
          <div className="fixed inset-0 bg-black bg-opacity-30 flex items-center justify-center z-50 p-4 md:relative md:inset-auto md:bg-transparent md:p-0">
            <div className="bg-white dark:bg-gray-800 rounded-lg p-4 w-full max-w-md md:p-0 md:w-auto md:max-w-none">
              <div className="flex items-center">
                <Input
                  placeholder="Search subjects, assignments..."
                  className="w-full md:w-64"
                  autoFocus
                />
                <Button
                  variant="ghost"
                  size="icon"
                  className="ml-2"
                  onClick={() => setIsSearchOpen(false)}
                >
                  <X className="h-5 w-5" />
                </Button>
              </div>
            </div>
          </div>
        ) : (
          <Button
            variant="ghost"
            size="icon"
            onClick={() => setIsSearchOpen(true)}
            aria-label="Search"
          >
            <Search className="h-5 w-5" />
          </Button>
        )}

        <div className="relative">
          <Button
            variant="ghost"
            size="icon"
            className="relative"
            onClick={() => setShowNotifications(!showNotifications)}
            aria-label="Notifications"
          >
            <Bell className="h-5 w-5" />
            <Badge className="absolute -top-1 -right-1 w-5 h-5 flex items-center justify-center p-0 bg-rathinam-orange text-white">
              {notifications.length}
            </Badge>
          </Button>
          
          {showNotifications && (
            <NotificationDropdown 
              notifications={notifications} 
              onClose={() => setShowNotifications(false)} 
            />
          )}
        </div>
      </div>
    </nav>
  );
};
