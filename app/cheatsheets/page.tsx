'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import { Button } from '@/components/ui/Button';

const upcomingCheatsheets = [
  { slug: 'git', title: 'Git', emoji: '📦', description: 'คำสั่ง Git ที่ใช้บ่อย', color: '#f05032' },
  { slug: 'docker', title: 'Docker', emoji: '🐳', description: 'Docker commands & concepts', color: '#2496ed' },
  { slug: 'react', title: 'React', emoji: '⚛️', description: 'React hooks & patterns', color: '#61dafb' },
  { slug: 'linux', title: 'Linux', emoji: '🐧', description: 'Linux commands ที่จำเป็น', color: '#fcc624' },
  { slug: 'nextjs', title: 'Next.js', emoji: '▲', description: 'Next.js App Router', color: '#ffffff' },
];

export default function CheatsheetsPage() {
  return (
    <div className="max-w-4xl mx-auto px-4 py-12 bg-[#0f0f23] min-h-screen">
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        className="text-center mb-12"
      >
        <h1 className="text-3xl md:text-4xl font-bold text-white mb-4">
          📜 CHEATSHEETS 📜
        </h1>
        <p className="text-[#9ca3af]">
          คำสั่งและเทคนิคต่างๆ ที่ใช้บ่อย
        </p>
      </motion.div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.2 }}
        className="text-center py-8 mb-8"
      >
        <div className="text-6xl mb-4 animate-bounce">🗺️</div>
        <h2 className="text-2xl font-bold text-white mb-2">กำลังวางแผนเส้นทาง</h2>
        <p className="text-[#9ca3af] mb-6">
          กำลังสร้างเนื้อหาสำหรับคุณ...
        </p>
      </motion.div>

      <motion.div
        initial="hidden"
        animate="visible"
        variants={{
          hidden: { opacity: 0 },
          visible: {
            opacity: 1,
            transition: {
              staggerChildren: 0.1,
            },
          },
        }}
        className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 mb-12"
      >
        {upcomingCheatsheets.map((item) => (
          <motion.div
            key={item.slug}
            variants={{
              hidden: { opacity: 0, y: 20 },
              visible: { opacity: 1, y: 0 },
            }}
            className="border-2 border-[#2d2d44] bg-[#0f0f23] p-5 rounded hover:border-[#e94560] transition-colors group"
          >
            <div className="flex items-start gap-3">
              <div
                className="w-12 h-12 rounded flex items-center justify-center text-2xl"
                style={{ backgroundColor: `${item.color}20` }}
              >
                {item.emoji}
              </div>
              <div className="flex-1">
                <h3 className="font-bold text-white group-hover:text-[#e94560] transition-colors">
                  {item.title}
                </h3>
                <p className="text-xs text-[#8b8b9a] mt-1">
                  {item.description}
                </p>
              </div>
            </div>
            <div className="mt-3 flex items-center gap-2">
              <div className="h-1 flex-1 bg-[#2d2d44] rounded-full overflow-hidden">
                <div
                  className="h-full bg-[#e94560] rounded-full"
                  style={{ width: '10%' }}
                />
              </div>
              <span className="text-xs text-[#8b8b9a]">Soon</span>
            </div>
          </motion.div>
        ))}
      </motion.div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.8 }}
        className="text-center py-8 border-t-2 border-[#2d2d44]"
      >
        <p className="text-[#9ca3af] mb-4">
          อยากให้มีเนื้อหาอะไรเพิ่มเติม?
        </p>
        <div className="flex flex-wrap justify-center gap-3">
          <a
            href="https://github.com/ratikorn2542/unknown-craft/issues"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Button variant="outline" size="sm">
              🐛 แจ้งเสนอแนะบน GitHub
            </Button>
          </a>
          <Link href="/courses">
            <Button size="sm">
              🎮 เรียนคอร์สที่มีอยู่
            </Button>
          </Link>
        </div>
      </motion.div>
    </div>
  );
}
