'use client';

import { ReactNode } from 'react';

interface MomoTipProps {
  children: ReactNode;
  className?: string;
}

export function MomoTip({ children, className = '' }: MomoTipProps) {
  return (
    <div className={`momo-tip rounded-xl p-4 my-6 ${className}`}>
      <div className="flex gap-4">
        <div className="flex-shrink-0">
          <div className="w-12 h-12 rounded-full bg-white shadow-sm flex items-center justify-center">
            <span className="text-2xl">🐱</span>
          </div>
        </div>
        <div className="flex-1">
          <div className="flex items-center gap-2 mb-2">
            <span className="font-semibold text-pink-700 dark:text-pink-300">💡 Momo บอก</span>
          </div>
          <div className="text-sm text-pink-800 dark:text-pink-200 leading-relaxed">
            {children}
          </div>
        </div>
      </div>
    </div>
  );
}
