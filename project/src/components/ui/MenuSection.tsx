import React from 'react';
import { MenuItem } from './MenuItem';
import { LucideIcon } from 'lucide-react';

interface MenuSectionProps {
  title: string;
  items: {
    icon: LucideIcon;
    text: string;
    active?: boolean;
  }[];
}

export function MenuSection({ title, items }: MenuSectionProps) {
  return (
    <div className="mb-4">
      <h2 className="px-4 text-xs font-semibold text-gray-400 uppercase tracking-wider">
        {title}
      </h2>
      <ul className="mt-2 space-y-1">
        {items.map((item) => (
          <MenuItem key={item.text} {...item} />
        ))}
      </ul>
    </div>
  );
}