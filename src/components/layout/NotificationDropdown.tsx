
import React from 'react';
import { Card } from '@/components/ui/card';

interface Notification {
  id: number;
  title: string;
  message: string;
  time: string;
}

interface NotificationDropdownProps {
  notifications: Notification[];
  onClose: () => void;
}

const NotificationDropdown: React.FC<NotificationDropdownProps> = ({ notifications, onClose }) => {
  return (
    <Card className="absolute top-12 right-0 w-80 max-h-96 overflow-y-auto shadow-lg z-50 border border-gray-200 dark:border-gray-700">
      <div className="p-4 border-b border-gray-200 dark:border-gray-700 flex justify-between items-center">
        <h3 className="font-semibold">Notifications</h3>
        <span className="text-xs text-gray-500 cursor-pointer" onClick={onClose}>
          Close
        </span>
      </div>
      <div className="max-h-[400px] overflow-y-auto">
        {notifications.length > 0 ? (
          notifications.map((notification) => (
            <div
              key={notification.id}
              className="p-4 border-b border-gray-200 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-700 cursor-pointer"
            >
              <div className="font-medium">{notification.title}</div>
              <div className="text-sm text-gray-600 dark:text-gray-300">{notification.message}</div>
              <div className="text-xs text-gray-500 mt-1">{notification.time}</div>
            </div>
          ))
        ) : (
          <div className="p-4 text-center text-gray-500">No notifications</div>
        )}
      </div>
      <div className="p-2 border-t border-gray-200 dark:border-gray-700 text-center">
        <button className="text-sm text-royal hover:underline">View all notifications</button>
      </div>
    </Card>
  );
};

export default NotificationDropdown;
