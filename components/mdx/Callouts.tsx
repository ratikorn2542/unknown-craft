'use client';

import { ReactNode } from 'react';

interface CalloutProps {
  children: ReactNode;
  emoji?: string;
  title?: string;
  variant?: 'tip' | 'warning' | 'info' | 'success';
}

const variantStyles = {
  tip: {
    bg: 'bg-green-50 dark:bg-green-900/20',
    border: 'border-green-200 dark:border-green-800',
    title: 'text-green-700 dark:text-green-300',
    content: 'text-green-800 dark:text-green-200',
    emoji: '💡',
  },
  warning: {
    bg: 'bg-orange-50 dark:bg-orange-900/20',
    border: 'border-orange-200 dark:border-orange-800',
    title: 'text-orange-700 dark:text-orange-300',
    content: 'text-orange-800 dark:text-orange-200',
    emoji: '⚠️',
  },
  info: {
    bg: 'bg-blue-50 dark:bg-blue-900/20',
    border: 'border-blue-200 dark:border-blue-800',
    title: 'text-blue-700 dark:text-blue-300',
    content: 'text-blue-800 dark:text-blue-200',
    emoji: '📚',
  },
  success: {
    bg: 'bg-purple-50 dark:bg-purple-900/20',
    border: 'border-purple-200 dark:border-purple-800',
    title: 'text-purple-700 dark:text-purple-300',
    content: 'text-purple-800 dark:text-purple-200',
    emoji: '🎉',
  },
};

export function Callout({ children, emoji, title, variant = 'tip' }: CalloutProps) {
  const style = variantStyles[variant];
  
  return (
    <div className={`rounded-xl p-4 my-6 border ${style.bg} ${style.border}`}>
      <div className="flex gap-3">
        <div className="flex-shrink-0 text-2xl">
          {emoji || style.emoji}
        </div>
        <div className="flex-1">
          {title && (
            <div className={`font-semibold mb-1 ${style.title}`}>
              {title}
            </div>
          )}
          <div className={`text-sm leading-relaxed ${style.content}`}>
            {children}
          </div>
        </div>
      </div>
    </div>
  );
}

interface InfoBoxProps {
  title: string;
  children: ReactNode;
}

export function InfoBox({ title, children }: InfoBoxProps) {
  return (
    <div className="rounded-xl my-6 border border-border bg-card overflow-hidden">
      <div className="px-4 py-2 bg-secondary/50 border-b border-border font-medium text-sm flex items-center gap-2">
        <span>📋</span>
        <span>{title}</span>
      </div>
      <div className="p-4">
        <div className="text-sm leading-relaxed text-muted-foreground">
          {children}
        </div>
      </div>
    </div>
  );
}

interface ChecklistProps {
  children: ReactNode;
}

export function Checklist({ children }: ChecklistProps) {
  return (
    <div className="rounded-xl my-6 border border-border bg-card overflow-hidden">
      <div className="px-4 py-2 bg-secondary/50 border-b border-border font-medium text-sm">
        ✅ Checklist
      </div>
      <div className="p-4">
        {children}
      </div>
    </div>
  );
}

interface ChecklistItemProps {
  children: ReactNode;
  done?: boolean;
}

export function ChecklistItem({ children, done }: ChecklistItemProps) {
  return (
    <div className="flex items-start gap-2 mb-2 last:mb-0">
      <span className={done ? 'text-green-500' : 'text-muted-foreground'}>
        {done ? '✅' : '⬜'}
      </span>
      <span className={done ? 'line-through text-muted-foreground' : ''}>
        {children}
      </span>
    </div>
  );
}
