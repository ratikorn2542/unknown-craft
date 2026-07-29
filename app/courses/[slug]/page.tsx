import Link from 'next/link';
import { notFound } from 'next/navigation';
import { getCourseBySlug, courses } from '@/lib/courses';
import { LevelBadge, StatusBadge, TagBadge } from '@/components/ui/Badge';
import { Button } from '@/components/ui/Button';
import { ChevronRight } from 'lucide-react';

interface PageProps {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return courses.map((course) => ({
    slug: course.slug,
  }));
}

export default async function CourseOverviewPage({ params }: PageProps) {
  const { slug } = await params;
  const course = getCourseBySlug(slug);

  if (!course) {
    notFound();
  }

  const totalLessons = course.chapters.reduce((acc, chapter) => acc + chapter.lessons.length, 0);
  const firstLesson = course.chapters[0]?.lessons[0];
  const isComingSoon = course.status === 'Coming Soon';

  const getCourseImage = (slug: string) => {
    switch (slug) {
      case 'opencode-adventure':
        return `/${encodeURIComponent('opencode-adventure.png')}`;
      case 'ai-for-everyone':
        return `/${encodeURIComponent('ai-for-everyone.png')}`;
      case 'react-adventure':
        return `/${encodeURIComponent('react-adventure.png')}`;
      default:
        return null;
    }
  };

  return (
    <div className="max-w-4xl mx-auto px-4 py-12 bg-[#0f0f23] min-h-screen">
      <Link
        href="/courses"
        className="inline-flex items-center gap-2 text-sm text-[#9ca3af] hover:text-[#e94560] transition-colors mb-8"
      >
        ← Back to Courses
      </Link>

      <div className="text-center mb-12">
        <div className="aspect-video rounded-lg overflow-hidden mb-6 relative border-2 border-[#2d2d44]">
          {isComingSoon ? (
            <>
              <div className="absolute inset-0 bg-[#16213e] flex items-center justify-center">
                <div className="text-center">
                  <span className="text-8xl opacity-30">🔒</span>
                  <div className="mt-4 px-4 py-2 bg-[#16213e] border border-[#f39c12] text-[#f39c12] text-sm font-bold rounded">
                    COMING SOON
                  </div>
                </div>
              </div>
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
            </>
          ) : getCourseImage(slug) ? (
            <img
              src={getCourseImage(slug)!}
              alt={course.title}
              className="w-full h-full object-cover"
            />
          ) : (
            <div className="absolute inset-0 bg-[#16213e] flex items-center justify-center">
              <span className="text-8xl opacity-50">🎮</span>
            </div>
          )}
          <div className="absolute inset-0 bg-gradient-to-t from-[#0f0f23] via-transparent to-transparent" />
        </div>

        <div className="flex items-center justify-center gap-2 mb-4">
          <LevelBadge level={course.level} />
          <StatusBadge status={course.status} />
        </div>

        <h1 className="text-3xl md:text-4xl font-bold mb-4 text-white">
          ⚔️ {course.title}
        </h1>

        <p className="text-lg text-[#9ca3af] mb-6 max-w-2xl mx-auto">
          {course.description}
        </p>

        <div className="flex flex-wrap justify-center gap-2 mb-8">
          {course.tags.map((tag) => (
            <TagBadge key={tag} tag={tag} />
          ))}
        </div>

        {course.status === 'Available' && firstLesson && (
          <Link href={`/courses/${course.slug}/${course.chapters[0].slug}/${firstLesson.slug}`}>
            <Button size="lg">
              🎮 เริ่มเล่น
              <ChevronRight className="w-4 h-4" />
            </Button>
          </Link>
        )}
      </div>

      <div className="mb-8">
        <p className="text-center text-sm text-[#9ca3af] mb-4">
          📖 {course.chapters.length} Chapters • {totalLessons} Lessons
        </p>
      </div>

      <div className="space-y-4">
        {course.chapters.map((chapter, chapterIndex) => (
          <div
            key={chapter.slug}
            className="rounded-lg border-2 border-[#2d2d44] bg-[#0f0f23] overflow-hidden"
          >
            <div className="px-6 py-4 bg-[#16213e] border-b border-[#2d2d44]">
              <h2 className="font-bold flex items-center gap-2 text-white">
                <span className="text-[#9ca3af] font-mono">{String(chapterIndex + 1).padStart(2, '0')}</span>
                {chapter.title}
              </h2>
            </div>
            <div className="p-4">
              {chapter.lessons.length > 0 ? (
                <ul className="space-y-2">
                  {chapter.lessons.map((lesson, lessonIndex) => (
                    <li key={lesson.slug}>
                      {course.status === 'Available' ? (
                        <Link
                          href={`/courses/${course.slug}/${chapter.slug}/${lesson.slug}`}
                          className="flex items-center gap-3 p-3 rounded bg-[#16213e] border border-[#2d2d44] hover:border-[#e94560] hover:bg-[#1a1a2e] transition-colors"
                        >
                          <span className="text-sm text-[#9ca3af] font-mono">
                            {String(chapterIndex + 1)}.{String(lessonIndex + 1)}
                          </span>
                          <span className="flex-1 text-white">{lesson.title}</span>
                          <ChevronRight className="w-4 h-4 text-[#9ca3af]" />
                        </Link>
                      ) : (
                        <div className="flex items-center gap-3 p-3 rounded opacity-50">
                          <span className="text-sm text-[#9ca3af] font-mono">
                            {String(chapterIndex + 1)}.{String(lessonIndex + 1)}
                          </span>
                          <span className="flex-1 text-[#9ca3af]">{lesson.title}</span>
                          <span className="text-xs text-[#f39c12]">⚡ Coming Soon</span>
                        </div>
                      )}
                    </li>
                  ))}
                </ul>
              ) : (
                <p className="text-center text-[#9ca3af] py-4">
                  ⚡ Coming Soon
                </p>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
