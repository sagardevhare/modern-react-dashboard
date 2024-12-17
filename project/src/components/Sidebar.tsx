import React from 'react';
import { 
  Home,
  ShoppingCart,
  Users,
  MessageSquare,
  Calendar,
  Mail,
  Ticket,
  GitFork,
  CreditCard
} from 'lucide-react';
import { MenuSection } from './ui/MenuSection';
import { ProfileSection } from './ui/ProfileSection';

const menuSections = [
  {
    title: 'HOME',
    items: [
      { icon: Home, text: 'Dashboard' },
      { icon: ShoppingCart, text: 'eCommerce', active: true }
    ]
  },
  {
    title: 'APP',
    items: [
      { icon: Users, text: 'Contacts' },
      { icon: MessageSquare, text: 'Chats' },
      { icon: Calendar, text: 'Calendar' },
      { icon: Mail, text: 'Email' },
      { icon: Ticket, text: 'Tickets' }
    ]
  },
  {
    title: 'PAGE',
    items: [
      { icon: GitFork, text: 'Tree view' },
      { icon: CreditCard, text: 'Pricing' }
    ]
  }
];

export default function Sidebar() {
  return (
    <div className="w-64 h-screen bg-white border-r flex flex-col">
      <div className="p-4">
        <div className="flex items-center space-x-2 px-4 py-2">
          <div className="w-8 h-8 bg-indigo-600 rounded-lg"></div>
          <span className="text-xl font-semibold">Catalog</span>
        </div>
      </div>

      <nav className="flex-1 px-2">
        {menuSections.map((section) => (
          <MenuSection key={section.title} {...section} />
        ))}
      </nav>

      <ProfileSection />
    </div>
  );
}