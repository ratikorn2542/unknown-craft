'use client';

import { useEffect } from 'react';

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    console.error(error);
  }, [error]);

  return (
    <div className="min-h-screen bg-[#0f0f23] flex items-center justify-center px-4">
      <div className="text-center max-w-md">
        <div className="text-6xl mb-4">💥</div>
        <h1 className="text-2xl font-bold text-white mb-2">Something went wrong!</h1>
        <p className="text-[#9ca3af] mb-6">
          An error occurred while loading this page.
        </p>
        <button
          onClick={reset}
          className="px-6 py-3 bg-[#e94560] text-white font-bold rounded border-2 border-[#f39c12] shadow-[4px_4px_0px_0px_#000] hover:shadow-[2px_2px_0px_0px_#000] hover:translate-x-[2px] hover:translate-y-[2px] active:shadow-[0px_0px_0px_0px_#000] active:translate-x-[4px] active:translate-y-[4px] transition-all"
        >
          Try again
        </button>
      </div>
    </div>
  );
}
