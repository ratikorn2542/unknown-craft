'use client';

interface PixelLeafProps {
  className?: string;
  size?: number;
}

export function PixelLeaf({ className = '', size = 24 }: PixelLeafProps) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 16 16"
      fill="none"
      className={className}
      xmlns="http://www.w3.org/2000/svg"
    >
      <rect x="7" y="0" width="2" height="2" fill="#2d8f4e" />
      <rect x="6" y="2" width="4" height="2" fill="#2d8f4e" />
      <rect x="5" y="4" width="6" height="2" fill="#3a9f5c" />
      <rect x="4" y="6" width="8" height="2" fill="#3a9f5c" />
      <rect x="3" y="8" width="10" height="2" fill="#45b369" />
      <rect x="4" y="10" width="8" height="2" fill="#45b369" />
      <rect x="5" y="12" width="6" height="2" fill="#2d8f4e" />
      <rect x="6" y="14" width="4" height="2" fill="#2d8f4e" />
      <rect x="7" y="4" width="2" height="8" fill="#5dbe7a" />
      <rect x="6" y="6" width="4" height="4" fill="#5dbe7a" />
      <rect x="5" y="8" width="2" height="2" fill="#5dbe7a" />
    </svg>
  );
}

export function PixelLeafOrange({ className = '', size = 24 }: PixelLeafProps) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 16 16"
      fill="none"
      className={className}
      xmlns="http://www.w3.org/2000/svg"
    >
      <rect x="7" y="0" width="2" height="2" fill="#c45a2a" />
      <rect x="6" y="2" width="4" height="2" fill="#c45a2a" />
      <rect x="5" y="4" width="6" height="2" fill="#d96a3a" />
      <rect x="4" y="6" width="8" height="2" fill="#d96a3a" />
      <rect x="3" y="8" width="10" height="2" fill="#e87a4a" />
      <rect x="4" y="10" width="8" height="2" fill="#d96a3a" />
      <rect x="5" y="12" width="6" height="2" fill="#c45a2a" />
      <rect x="6" y="14" width="4" height="2" fill="#c45a2a" />
      <rect x="7" y="4" width="2" height="8" fill="#f08a5a" />
      <rect x="6" y="6" width="4" height="4" fill="#f08a5a" />
      <rect x="5" y="8" width="2" height="2" fill="#f08a5a" />
    </svg>
  );
}

export function PixelLeafYellow({ className = '', size = 24 }: PixelLeafProps) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 16 16"
      fill="none"
      className={className}
      xmlns="http://www.w3.org/2000/svg"
    >
      <rect x="7" y="0" width="2" height="2" fill="#c4a42a" />
      <rect x="6" y="2" width="4" height="2" fill="#c4a42a" />
      <rect x="5" y="4" width="6" height="2" fill="#d9b83a" />
      <rect x="4" y="6" width="8" height="2" fill="#d9b83a" />
      <rect x="3" y="8" width="10" height="2" fill="#e8c84a" />
      <rect x="4" y="10" width="8" height="2" fill="#d9b83a" />
      <rect x="5" y="12" width="6" height="2" fill="#c4a42a" />
      <rect x="6" y="14" width="4" height="2" fill="#c4a42a" />
      <rect x="7" y="4" width="2" height="8" fill="#f0d85a" />
      <rect x="6" y="6" width="4" height="4" fill="#f0d85a" />
      <rect x="5" y="8" width="2" height="2" fill="#f0d85a" />
    </svg>
  );
}
