'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const navItems = [
  { href: '/', label: 'Home', emoji: '🏠' },
  { href: '/courses', label: 'Courses', emoji: '🎮' },
  { href: '/cheatsheets', label: 'Cheatsheets', emoji: '📜' },
  { href: '/profile', label: 'Profile', emoji: '⚔️' },
];

export function Header() {
  const pathname = usePathname();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b-2 border-[#2d2d44] bg-[#0f0f23]">
      <div className="max-w-6xl mx-auto px-4 h-16 flex items-center justify-between">
        <Link href="/" className="flex items-center gap-2 font-bold text-xl">
          <img src="/logo.png" alt="Logo" className="h-8 w-auto" />
          <span className="hidden sm:inline text-white font-bold tracking-wide">Unknown Craft</span>
        </Link>

        <nav className="hidden sm:flex items-center gap-1">
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
        </nav>

        <div className="flex sm:hidden">
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="p-2 text-white hover:bg-[#16213e] rounded transition-colors"
            aria-label="Toggle menu"
          >
            <motion.div
              animate={isMobileMenuOpen ? 'open' : 'closed'}
              className="w-6 h-5 flex flex-col justify-between"
            >
              <motion.span
                variants={{
                  closed: { rotate: 0, y: 0 },
                  open: { rotate: 45, y: 9, originX: 0.5 },
                }}
                className="w-full h-0.5 bg-white block"
              />
              <motion.span
                variants={{
                  closed: { opacity: 1 },
                  open: { opacity: 0 },
                }}
                className="w-full h-0.5 bg-white block"
              />
              <motion.span
                variants={{
                  closed: { rotate: 0, y: 0 },
                  open: { rotate: -45, y: -9, originX: 0.5 },
                }}
                className="w-full h-0.5 bg-white block"
              />
            </motion.div>
          </button>
        </div>
      </div>

      <AnimatePresence>
        {isMobileMenuOpen && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 bg-black/60 sm:hidden z-40"
              onClick={() => setIsMobileMenuOpen(false)}
            />
            <motion.nav
              initial={{ x: '100%' }}
              animate={{ x: 0 }}
              exit={{ x: '100%' }}
              transition={{ type: 'spring', damping: 25, stiffness: 200 }}
              className="fixed right-0 top-16 bottom-0 w-64 bg-[#0f0f23] border-l-2 border-[#2d2d44] sm:hidden z-50"
            >
              <div className="flex flex-col p-4 gap-2">
                {navItems.map((item, index) => {
                  const isActive = pathname === item.href || pathname.startsWith(item.href + '/');
                  return (
                    <motion.div
                      key={item.href}
                      initial={{ opacity: 0, x: 50 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: index * 0.05 }}
                    >
                      <Link
                        href={item.href}
                        onClick={() => setIsMobileMenuOpen(false)}
                        className={`flex items-center gap-3 px-4 py-3 rounded transition-all font-medium ${
                          isActive
                            ? 'bg-[#e94560] text-white border-2 border-[#f39c12]'
                            : 'text-white hover:text-white hover:bg-[#16213e] border-2 border-transparent'
                        }`}
                      >
                        <span className="text-xl">{item.emoji}</span>
                        <span>{item.label}</span>
                      </Link>
                    </motion.div>
                  );
                })}
              </div>
            </motion.nav>
          </>
        )}
      </AnimatePresence>
    </header>
  );
}
