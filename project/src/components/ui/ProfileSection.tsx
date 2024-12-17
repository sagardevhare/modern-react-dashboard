import React from 'react';
import { Settings, LogOut } from 'lucide-react';

export function ProfileSection() {
  return (
    <div className="p-4 border-t">
      <div className="flex items-center justify-between">
        <div className="flex items-center">
          <img
            src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
            alt="Profile"
            className="w-10 h-10 rounded-full"
          />
          <div className="ml-3">
            <div className="font-medium">Jane Cooper</div>
            <div className="text-sm text-gray-500">Admin</div>
          </div>
        </div>
        <div className="flex items-center space-x-2">
          <button className="p-1.5 rounded-lg text-gray-400 hover:text-gray-600 hover:bg-gray-50">
            <Settings size={18} />
          </button>
          <button className="p-1.5 rounded-lg text-gray-400 hover:text-gray-600 hover:bg-gray-50">
            <LogOut size={18} />
          </button>
        </div>
      </div>
    </div>
  );
}