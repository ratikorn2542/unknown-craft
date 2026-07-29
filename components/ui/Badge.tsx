import Link from 'next/link';
import { ReactNode } from 'react';

interface BadgeProps {
  children: ReactNode;
  variant?: 'default' | 'beginner' | 'intermediate' | 'advanced' | 'available' | 'coming-soon';
  className?: string;
  emoji?: string;
}

export function Badge({ children, variant = 'default', className = '', emoji }: BadgeProps) {
  const variants = {
    default: 'bg-[#16213e] text-[#00d9ff] border border-[#2d2d44]',
    beginner: 'bg-[#16213e] text-[#22c55e] border border-[#22c55e]',
    intermediate: 'bg-[#16213e] text-[#f39c12] border border-[#f39c12]',
    advanced: 'bg-[#16213e] text-[#e94560] border border-[#e94560]',
    'available': 'bg-[#16213e] text-[#22c55e] border border-[#22c55e]',
    'coming-soon': 'bg-[#16213e] text-[#f39c12] border border-[#f39c12]',
  };

  return (
    <span className={`inline-flex items-center gap-1 px-3 py-1 rounded text-xs font-bold ${variants[variant]} ${className}`}>
      {emoji && <span>{emoji}</span>}
      {children}
    </span>
  );
}

interface LevelBadgeProps {
  level: 'Beginner' | 'Intermediate' | 'Advanced';
  className?: string;
}

const levelConfig = {
  Beginner: { emoji: '🌱', class: 'bg-[#16213e] text-[#22c55e] border border-[#22c55e]' },
  Intermediate: { emoji: '🌿', class: 'bg-[#16213e] text-[#f39c12] border border-[#f39c12]' },
  Advanced: { emoji: '🔥', class: 'bg-[#16213e] text-[#e94560] border border-[#e94560]' },
};

export function LevelBadge({ level, className = '' }: LevelBadgeProps) {
  const config = levelConfig[level];

  return (
    <span className={`inline-flex items-center gap-1 px-3 py-1 rounded text-xs font-bold ${config.class} ${className}`}>
      <span>{config.emoji}</span>
      <span>{level}</span>
    </span>
  );
}

interface StatusBadgeProps {
  status: 'Available' | 'Coming Soon';
  className?: string;
}

const statusConfig = {
  'Available': { emoji: '✓', class: 'bg-[#16213e] text-[#22c55e] border border-[#22c55e]' },
  'Coming Soon': { emoji: '⚡', class: 'bg-[#16213e] text-[#f39c12] border border-[#f39c12]' },
};

export function StatusBadge({ status, className = '' }: StatusBadgeProps) {
  const config = statusConfig[status];

  return (
    <span className={`inline-flex items-center gap-1 px-3 py-1 rounded text-xs font-bold ${config.class} ${className}`}>
      <span>{config.emoji}</span>
      <span>{status}</span>
    </span>
  );
}

interface TagBadgeProps {
  tag: string;
  className?: string;
}

export function TagBadge({ tag, className = '' }: TagBadgeProps) {
  return (
    <span className={`inline-flex items-center px-2 py-0.5 rounded text-xs font-medium bg-[#16213e] text-[#9ca3af] border border-[#2d2d44] ${className}`}>
      {tag}
    </span>
  );
}

interface DifficultyBadgeProps {
  difficulty: 'common' | 'rare' | 'epic' | 'legendary';
  className?: string;
}

const difficultyConfig = {
  common: { label: 'COMMON', class: 'text-[#9ca3af]' },
  rare: { label: 'RARE', class: 'text-[#00d9ff]' },
  epic: { label: 'EPIC', class: 'text-[#a855f7]' },
  legendary: { label: 'LEGENDARY', class: 'text-[#f39c12]' },
};

export function DifficultyBadge({ difficulty, className = '' }: DifficultyBadgeProps) {
  const config = difficultyConfig[difficulty];

  return (
    <span className={`inline-flex items-center gap-1 text-xs font-bold ${config.class} ${className}`}>
      <span>{config.label}</span>
    </span>
  );
}

interface RealmBadgeProps {
  realm: string;
  className?: string;
}

const realmColors: Record<string, string> = {
  frontend: 'text-[#22c55e]',
  backend: 'text-[#00d9ff]',
  devops: 'text-[#f39c12]',
  others: 'text-[#e94560]',
};

export function RealmBadge({ realm, className = '' }: RealmBadgeProps) {
  const colorClass = realmColors[realm.toLowerCase()] || realmColors.others;

  return (
    <span className={`inline-flex items-center rounded px-2.5 py-0.5 text-xs font-bold border border-[#2d2d44] bg-[#16213e] ${colorClass} ${className}`}>
      {realm}
    </span>
  );
}
