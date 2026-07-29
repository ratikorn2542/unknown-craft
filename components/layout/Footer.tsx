import Link from 'next/link';

export function Footer() {
  return (
    <footer className="border-t-2 border-[#2d2d44] bg-[#0f0f23] mt-auto">
      <div className="max-w-6xl mx-auto px-4 py-8">
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          <nav className="flex items-center gap-6 text-sm">
            <Link href="/courses" className="text-[#9ca3af] hover:text-[#e94560] transition-colors focus-visible:ring-2 focus-visible:ring-[#e94560] focus-visible:ring-offset-2 focus-visible:ring-offset-[#0f0f23] rounded">
              🎮 Courses
            </Link>
            <Link href="/cheatsheets" className="text-[#9ca3af] hover:text-[#e94560] transition-colors focus-visible:ring-2 focus-visible:ring-[#e94560] focus-visible:ring-offset-2 focus-visible:ring-offset-[#0f0f23] rounded">
              📜 Cheatsheets
            </Link>
            <a 
              href="https://github.com/ratikorn2542" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-[#9ca3af] hover:text-[#e94560] transition-colors focus-visible:ring-2 focus-visible:ring-[#e94560] focus-visible:ring-offset-2 focus-visible:ring-offset-[#0f0f23] rounded"
            >
              💻 GitHub
            </a>
          </nav>

          <div className="text-sm text-[#9ca3af]">
            © {new Date().getFullYear()} UNKNOWN CRAFT
          </div>
        </div>
      </div>
    </footer>
  );
}
