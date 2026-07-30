'use client';

import { motion } from 'framer-motion';

export default function Loading() {
  return (
    <div className="min-h-screen bg-[#0f0f23] flex items-center justify-center p-4">
      <div className="max-w-6xl w-full">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="mb-8 text-center"
        >
          <div className="inline-block w-16 h-16 border-4 border-[#2d2d44] border-t-[#e94560] rounded-full animate-spin" />
        </motion.div>

        <div className="grid md:grid-cols-3 gap-6">
          {[1, 2, 3].map((i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1 }}
              className="border-2 border-[#2d2d44] bg-[#0f0f23] overflow-hidden"
            >
              <div className="aspect-video bg-[#16213e] animate-pulse" />
              <div className="p-4 space-y-3">
                <div className="flex gap-2">
                  <div className="w-16 h-6 bg-[#2d2d44] rounded animate-pulse" />
                  <div className="w-20 h-6 bg-[#2d2d44] rounded animate-pulse" />
                </div>
                <div className="w-3/4 h-6 bg-[#2d2d44] rounded animate-pulse" />
                <div className="space-y-2">
                  <div className="w-full h-4 bg-[#2d2d44] rounded animate-pulse" />
                  <div className="w-2/3 h-4 bg-[#2d2d44] rounded animate-pulse" />
                </div>
                <div className="pt-2 flex justify-between">
                  <div className="w-20 h-4 bg-[#2d2d44] rounded animate-pulse" />
                  <div className="w-16 h-4 bg-[#2d2d44] rounded animate-pulse" />
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}
