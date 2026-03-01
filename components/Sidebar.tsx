'use client';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { LayoutDashboard, PlusCircle, BarChart2, User } from 'lucide-react';

export function Sidebar() {
  const pathname = usePathname();
  const navItems = [
    { icon: LayoutDashboard, href: '/' },
    { icon: PlusCircle, href: '/setup' },
    { icon: BarChart2, href: '/analysis' },
    { icon: User, href: '/profile' },
  ];

  return (
    <aside className="hidden md:flex flex-col items-center py-8 w-24 shrink-0 gap-4 sticky top-0 h-screen">
      <div className="flex-1 flex flex-col gap-4 mt-24">
        {navItems.map((item) => {
          const isActive = pathname === item.href;
          return (
            <Link key={item.href} href={item.href} className={`size-12 rounded-full flex items-center justify-center transition-all ${isActive ? 'bg-slate-900 text-white shadow-lg' : 'bg-white text-slate-500 hover:text-slate-900 hover:shadow-md'}`}>
              <item.icon size={20} />
            </Link>
          );
        })}
      </div>
    </aside>
  );
}
