import Link from 'next/link';
import Image from 'next/image';
import { Button } from '@/components/ui/Button';
import { LevelBadge } from '@/components/ui/Badge';
import { courses } from '@/lib/courses';
import HeroBackground from '@/components/home/HeroBackground';

const courseEmojis: Record<string, string> = {
  'opencode-adventure': '🎨',
  'ai-for-everyone': '🤖',
  'react-adventure': '⚛️',
};

export default function Home() {
  const availableCourses = courses.filter((c) => c.status === 'Available').slice(0, 3);

  return (
    <div className="flex flex-col">
      <section className="relative min-h-[85vh] flex items-center justify-center overflow-hidden">
        <HeroBackground />

        <div className="relative z-10 max-w-4xl mx-auto px-4 text-center">
          <div className="mb-6">
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-4 tracking-wider" style={{ textShadow: '4px 4px 0px #e94560, 8px 8px 0px #000' }}>
              UNKNOWN CRAFT
            </h1>
            <div className="flex items-center justify-center gap-3">
              <span className="text-3xl">⚔️</span>
              <p className="text-lg md:text-xl text-[#9ca3af] mb-8 max-w-2xl mx-auto leading-relaxed">
                เรียนรู้การใช้งานต่างๆ ผ่านคอร์สออนไลน์<br />
                สไตล์ Pixel Adventure 🕹️
              </p>
              <span className="text-3xl">🛡️</span>
            </div>
          </div>

          <div className="flex flex-wrap justify-center gap-4 mb-12">
            <Link href="/courses">
              <Button size="lg">
                🎮 ดูคอร์สทั้งหมด
              </Button>
            </Link>
            <Link href="/profile">
              <Button size="lg" variant="outline">
                ⚔️ Profile
              </Button>
            </Link>
          </div>

          <div className="flex items-center justify-center gap-6 text-sm text-[#9ca3af]">
            <span className="flex items-center gap-1">🎯 3 คอร์ส</span>
            <span className="flex items-center gap-1">📖 30+ บทเรียน</span>
            <span className="flex items-center gap-1">⚡ RPG Style</span>
          </div>
        </div>

      </section>

      <section className="py-20 px-4 bg-[#0f0f23]">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-white mb-3">
              ⚔️ SELECT YOUR QUEST ⚔️
            </h2>
            <p className="text-[#9ca3af]">เลือกคอร์สที่สนใจแล้วเริ่มผจญภัยได้เลย!</p>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {availableCourses.map((course) => (
              <Link key={course.slug} href={`/courses/${course.slug}`} className="group block">
                <div className="relative h-full border-2 border-[#2d2d44] bg-[#0f0f23] transition-all duration-100 hover:border-[#e94560] hover:shadow-[4px_4px_0px_0px_#e94560]">
                  <div className="absolute top-3 right-3 z-10">
                    <span className="px-3 py-1 text-xs font-bold bg-[#e94560] text-white border-2 border-[#f39c12] rounded">
                      NEW
                    </span>
                  </div>

                  <div className="aspect-[4/3] relative overflow-hidden">
                    {course.slug === 'opencode-adventure' ? (
                      <Image
                        src="/opencode-adventure.png"
                        alt={course.title}
                        fill
                        className="object-cover"
                        priority
                      />
                    ) : course.slug === 'ai-for-everyone' ? (
                      <Image
                        src="/ai-for-everyone.png"
                        alt={course.title}
                        fill
                        className="object-cover"
                        priority
                      />
                    ) : course.slug === 'react-adventure' ? (
                      <Image
                        src="/react-adventure.png"
                        alt={course.title}
                        fill
                        className="object-cover"
                        priority
                      />
                    ) : (
                      <div className="absolute inset-0 bg-[#16213e] flex items-center justify-center">
                        <span className="text-6xl opacity-50">
                          {courseEmojis[course.slug] || '🎮'}
                        </span>
                      </div>
                    )}
                  </div>

                  <div className="p-5">
                    <div className="mb-3">
                      <LevelBadge level={course.level} />
                    </div>
                    <h3 className="font-bold text-xl mb-2 text-white group-hover:text-[#e94560] transition-colors">
                      {course.title}
                    </h3>
                    <p className="text-[#9ca3af] text-sm line-clamp-2 leading-relaxed">
                      {course.description}
                    </p>

                    <div className="mt-4 flex items-center justify-between">
                      <span className="text-xs text-[#9ca3af]">
                        ⚔️ {course.chapters.length} บท • {course.chapters.reduce((acc, ch) => acc + ch.lessons.length, 0)} บทเรียน
                      </span>
                      <span className="text-[#e94560] text-sm font-bold group-hover:translate-x-1 transition-transform inline-flex items-center gap-1">
                        เริ่มเล่น ▶
                      </span>
                    </div>
                  </div>
                </div>
              </Link>
            ))}
          </div>

          <div className="text-center mt-12">
            <Link href="/courses">
              <Button variant="outline" size="lg">
                ดูคอร์สทั้งหมด →
              </Button>
            </Link>
          </div>
        </div>
      </section>

      <section className="py-16 px-4 bg-[#1a1a2e]">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-2xl font-bold text-white mb-8">
            🎮 เริ่มต้นการเดินทางวันนี้
          </h2>

          <div className="grid sm:grid-cols-3 gap-6">
            <div className="p-6 bg-[#0f0f23] border-2 border-[#2d2d44]">
              <div className="text-3xl mb-3">🎯</div>
              <h3 className="font-bold mb-2 text-white">เลือกคอร์ส</h3>
              <p className="text-sm text-[#9ca3af]">เลือกเควสที่สนใจจากคอร์สมากมายของเรา</p>
            </div>

            <div className="p-6 bg-[#0f0f23] border-2 border-[#2d2d44]">
              <div className="text-3xl mb-3">📖</div>
              <h3 className="font-bold mb-2 text-white">ศึกษา</h3>
              <p className="text-sm text-[#9ca3af]">ศึกษาเนื้อหาแต่ละด่านอย่างละเอียด</p>
            </div>

            <div className="p-6 bg-[#0f0f23] border-2 border-[#2d2d44]">
              <div className="text-3xl mb-3">🏆</div>
              <h3 className="font-bold mb-2 text-white">พิชิต</h3>
              <p className="text-sm text-[#9ca3af]">นำความรู้ไปประยุกต์ใช้ในโปรเจกต์จริง</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
