'use client';

import { ReactNode } from 'react';

interface LunaWarningProps {
  children: ReactNode;
  className?: string;
}

export function LunaWarning({ children, className = '' }: LunaWarningProps) {
  return (
    <div className={`luna-warning rounded-xl p-4 my-6 ${className}`}>
      <div className="flex gap-4">
        <div className="flex-shrink-0">
          <div className="w-12 h-12 rounded-full bg-white shadow-sm flex items-center justify-center">
            <span className="text-2xl">🐱‍👤</span>
          </div>
        </div>
        <div className="flex-1">
          <div className="flex items-center gap-2 mb-2">
            <span className="font-semibold text-orange-700 dark:text-orange-300">⚠️ Luna เตือน</span>
          </div>
          <div className="text-sm text-orange-800 dark:text-orange-200 leading-relaxed">
            {children}
          </div>
        </div>
      </div>
    </div>
  );
}
