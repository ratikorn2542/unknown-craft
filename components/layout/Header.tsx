'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { ThemeToggle } from './ThemeToggle';

const navItems = [
  { href: '/', label: 'Home', emoji: '🏠' },
  { href: '/courses', label: 'Courses', emoji: '🎮' },
  { href: '/cheatsheets', label: 'Cheatsheets', emoji: '📜' },
  { href: '/profile', label: 'Profile', emoji: '⚔️' },
];

export function Header() {
  const pathname = usePathname();

  return (
    <header className="sticky top-0 z-50 border-b-2 border-[#2d2d44] bg-[#0f0f23]/95 backdrop-blur">
      <div className="max-w-6xl mx-auto px-4 h-16 flex items-center justify-between">
        <Link href="/" className="flex items-center gap-2 font-bold text-xl">
          <img src="/logo.png" alt="Logo" className="h-8 w-auto" />
          <span className="hidden sm:inline text-white font-bold tracking-wide">Unknown Craft</span>
        </Link>

        <nav className="flex items-center gap-1">
          {navItems.map((item) => {
            const isActive = pathname === item.href || pathname.startsWith(item.href + '/');
            return (
              <Link
                key={item.href}
                href={item.href}
                className={`flex items-center gap-2 px-4 py-2 rounded transition-all text-sm font-medium focus-visible:ring-2 focus-visible:ring-[#e94560] focus-visible:ring-offset-2 focus-visible:ring-offset-[#0f0f23] ${
                  isActive
                    ? 'bg-[#e94560] text-white border-2 border-[#f39c12]'
                    : 'text-[#9ca3af] hover:text-white hover:bg-[#16213e] border-2 border-transparent'
                }`}
              >
                <span className="text-sm">{item.emoji}</span>
                <span className="hidden sm:inline">{item.label}</span>
              </Link>
            );
          })}

          <div className="ml-2 pl-2 border-l border-[#2d2d44]">
            <ThemeToggle />
          </div>
        </nav>
      </div>
    </header>
  );
}
