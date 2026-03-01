'use client';

import Link from 'next/link';
import Image from 'next/image';
import { usePathname } from 'next/navigation';
import { Bell, Mail, Menu } from 'lucide-react';

export function Header() {
  const pathname = usePathname();

  return (
    <header className="flex items-center justify-between px-6 lg:px-10 py-6">
      <div className="flex items-center gap-4">
        <button className="md:hidden size-12 rounded-full bg-white flex items-center justify-center text-slate-500 shadow-sm">
          <Menu size={20} />
        </button>
        <Link href="/dashboard" className="bg-slate-900 text-white px-6 py-3 rounded-full flex items-center gap-2 shadow-md hover:shadow-lg transition-shadow">
          <div className="size-3 rounded-full bg-primary"></div>
          <h2 className="text-lg font-bold tracking-tight font-display">mocksy</h2>
        </Link>
      </div>
      
      <div className="flex items-center gap-4">
        <button className="hidden sm:flex size-12 rounded-full bg-white items-center justify-center text-slate-500 hover:text-slate-900 shadow-sm transition-all">
          <Mail size={20} />
        </button>
        <button className="size-12 rounded-full bg-white flex items-center justify-center text-slate-500 hover:text-slate-900 shadow-sm transition-all">
          <Bell size={20} />
        </button>
        <div className="size-12 rounded-full bg-slate-200 border-2 border-white shadow-sm overflow-hidden flex items-center justify-center relative">
          <Image src="https://picsum.photos/seed/mocksyuser/100/100" alt="User" fill className="object-cover" referrerPolicy="no-referrer" />
        </div>
      </div>
    </header>
  );
}
