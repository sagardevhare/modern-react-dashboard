import React from 'react';
import { LucideIcon } from 'lucide-react';

interface MenuItemProps {
  icon: LucideIcon;
  text: string;
  active?: boolean;
}

export function MenuItem({ icon: Icon, text, active = false }: MenuItemProps) {
  return (
    <li>
      <a
        href="#"
        className={`flex items-center space-x-3 px-4 py-2.5 rounded-lg transition-colors ${
          active ? 'bg-indigo-50 text-indigo-600' : 'text-gray-600 hover:bg-gray-50'
        }`}
      >
        <Icon size={20} />
        <span>{text}</span>
      </a>
    </li>
  );
}