import Link from 'next/link';
import { ReactNode } from 'react';

interface ButtonProps {
  children: ReactNode;
  variant?: 'primary' | 'secondary' | 'outline' | 'ghost';
  size?: 'sm' | 'md' | 'lg';
  href?: string;
  className?: string;
  onClick?: () => void;
  disabled?: boolean;
  type?: 'button' | 'submit' | 'reset';
}

export function Button({
  children,
  variant = 'primary',
  size = 'md',
  href,
  className = '',
  onClick,
  disabled,
  type = 'button',
}: ButtonProps) {
  const variants = {
    primary: 'bg-[#e94560] text-white border-2 border-[#f39c12] shadow-[4px_4px_0px_0px_#000] hover:shadow-[2px_2px_0px_0px_#000] hover:translate-x-[2px] hover:translate-y-[2px] active:shadow-[0px_0px_0px_0px_#000] active:translate-x-[4px] active:translate-y-[4px]',
    secondary: 'bg-[#16213e] text-white border-2 border-[#2d2d44] shadow-[4px_4px_0px_0px_#000] hover:shadow-[2px_2px_0px_0px_#000] hover:translate-x-[2px] hover:translate-y-[2px] active:shadow-[0px_0px_0px_0px_#000] active:translate-x-[4px] active:translate-y-[4px]',
    outline: 'border-2 border-[#e94560] bg-transparent text-[#e94560] hover:bg-[#e94560] hover:text-white shadow-[4px_4px_0px_0px_#000] hover:shadow-[2px_2px_0px_0px_#000] hover:translate-x-[2px] hover:translate-y-[2px] active:shadow-[0px_0px_0px_0px_#000] active:translate-x-[4px] active:translate-y-[4px]',
    ghost: 'bg-transparent text-[#9ca3af] hover:text-white hover:bg-[#16213e] border-2 border-transparent',
  };

  const sizes = {
    sm: 'h-8 px-4 text-sm rounded',
    md: 'h-10 px-6 text-sm rounded',
    lg: 'h-12 px-8 text-base rounded',
  };

  const classes = `inline-flex items-center justify-center gap-2 font-bold transition-all duration-100 ease-out disabled:opacity-50 disabled:pointer-events-none focus-visible:ring-2 focus-visible:ring-[#e94560] focus-visible:ring-offset-2 focus-visible:ring-offset-[#0f0f23] ${variants[variant]} ${sizes[size]} ${className}`;

  if (href) {
    return (
      <Link href={href} className={classes}>
        {children}
      </Link>
    );
  }

  return (
    <button type={type} onClick={onClick} disabled={disabled} className={classes}>
      {children}
    </button>
  );
}
