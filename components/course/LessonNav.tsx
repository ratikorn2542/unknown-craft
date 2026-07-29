import Link from 'next/link';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { Button } from '@/components/ui/Button';

interface LessonNavProps {
  courseSlug: string;
  prevLesson: { chapter: string; lesson: string; title: string } | null;
  nextLesson: { chapter: string; lesson: string; title: string } | null;
}

export function LessonNav({ courseSlug, prevLesson, nextLesson }: LessonNavProps) {
  return (
    <div className="flex items-center justify-between mt-12 pt-8 border-t border-[#2d2d44]">
      <div>
        {prevLesson ? (
          <Link href={`/courses/${courseSlug}/${prevLesson.chapter}/${prevLesson.lesson}`}>
            <Button variant="outline">
              <ChevronLeft className="w-4 h-4" />
              <span className="hidden sm:inline">{prevLesson.title}</span>
              <span className="sm:hidden">◀ ก่อนหน้า</span>
            </Button>
          </Link>
        ) : (
          <div />
        )}
      </div>

      <div>
        {nextLesson ? (
          <Link href={`/courses/${courseSlug}/${nextLesson.chapter}/${nextLesson.lesson}`}>
            <Button>
              <span className="hidden sm:inline">{nextLesson.title}</span>
              <span className="sm:hidden">ถัดไป ▶</span>
              <ChevronRight className="w-4 h-4" />
            </Button>
          </Link>
        ) : (
          <Link href={`/courses/${courseSlug}`}>
            <Button>
              ⚔️ กลับไปหน้าคอร์ส
            </Button>
          </Link>
        )}
      </div>
    </div>
  );
}
