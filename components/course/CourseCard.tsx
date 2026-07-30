import Link from 'next/link';
import Image from 'next/image';
import { CourseMeta } from '@/types';
import { LevelBadge, StatusBadge } from '@/components/ui/Badge';

interface CourseCardProps {
  course: CourseMeta;
}

export function CourseCard({ course }: CourseCardProps) {
  const isComingSoon = course.status === 'Coming Soon';

  return (
    <Link href={`/courses/${course.slug}`} className="group block">
      <div className={`h-full border-2 border-[#2d2d44] bg-[#0f0f23] transition-all duration-100 hover:border-[#e94560] hover:shadow-[4px_4px_0px_0px_#e94560] ${isComingSoon ? 'opacity-70' : ''}`}>
        <div className="aspect-video relative overflow-hidden">
          {isComingSoon ? (
            <>
              <div className="absolute inset-0 bg-[#16213e] flex items-center justify-center">
                <div className="text-center">
                  <span className="text-5xl opacity-30">🔒</span>
                  <div className="mt-2 px-3 py-1 bg-[#16213e] border border-[#f39c12] text-[#f39c12] text-xs font-bold rounded">
                    COMING SOON
                  </div>
                </div>
              </div>
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
            </>
          ) : course.slug === 'opencode-adventure' ? (
            <Image
              src="/opencode-adventure.png"
              alt={course.title}
              fill
              className="object-cover"
            />
          ) : course.slug === 'ai-for-everyone' ? (
            <Image
              src="/ai-for-everyone.png"
              alt={course.title}
              fill
              className="object-cover"
            />
          ) : course.slug === 'react-adventure' ? (
            <Image
              src="/react-adventure.png"
              alt={course.title}
              fill
              className="object-cover"
            />
          ) : (
            <div className="absolute inset-0 bg-[#16213e] flex items-center justify-center">
              <span className="text-6xl opacity-50">🎮</span>
            </div>
          )}
        </div>

        <div className="p-4">
          <div className="flex items-center gap-2 mb-3">
            <LevelBadge level={course.level} />
            <StatusBadge status={course.status} />
          </div>
          <h3 className="font-bold text-lg mb-2 text-white line-clamp-1">
            {course.title}
          </h3>
          <p className="text-[#8b8b9a] text-sm line-clamp-2 leading-relaxed">
            {course.description}
          </p>

          <div className="mt-4 flex items-center justify-between">
            <span className="text-xs text-[#8b8b9a]">
              ⚔️ Quest
            </span>
            {!isComingSoon && (
              <span className="text-[#e94560] text-sm font-bold group-hover:translate-x-1 transition-transform inline-flex items-center gap-1">
                PLAY ▶
              </span>
            )}
          </div>
        </div>
      </div>
    </Link>
  );
}
