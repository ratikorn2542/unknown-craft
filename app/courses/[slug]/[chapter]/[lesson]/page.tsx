import { notFound } from 'next/navigation';
import { MDXRemote } from 'next-mdx-remote/rsc';
import { getCourseBySlug } from '@/lib/courses';
import { getLessonContent } from '@/lib/lessons';
import { LessonSidebar } from '@/components/course/LessonSidebar';
import { LessonNav } from '@/components/course/LessonNav';
import { mdxComponents } from '@/components/mdx';
import { ChevronLeft } from 'lucide-react';
import Link from 'next/link';

interface PageProps {
  params: Promise<{ slug: string; chapter: string; lesson: string }>;
}

export async function generateStaticParams() {
  const courses = [
    {
      slug: 'opencode-adventure',
      chapters: [
        { slug: '01-fundamental', lessons: ['01-llm-and-agent', '02-opencode-intro', '03-setup', '04-channel', '05-context-and-system', '06-basic-commands', '07-mention'] },
        { slug: '02-basic-usage', lessons: ['01-modes', '02-agents-md'] },
        { slug: '03-usecases', lessons: ['01-setup', '02-daily-life', '03-code-dev'] },
        { slug: '04-mcp', lessons: ['01-index', '02-mcp-chrome', '03-mcp-notion'] },
        { slug: '05-skill', lessons: ['01-skill-introduction'] },
        { slug: '06-sub-agent', lessons: ['01-sub-agents'] },
        { slug: '07-tweak', lessons: ['01-config-scopes', '02-plugin', '03-commands'] },
      ],
    },
    {
      slug: 'ai-for-everyone',
      chapters: [
        { slug: '01-agentic-browser', lessons: ['01-usecase'] },
        { slug: '02-gemini-gem', lessons: ['01-usecase'] },
        { slug: '03-gemini-live', lessons: ['01-usecase'] },
      ],
    },
    {
      slug: 'react-adventure',
      chapters: [
        { slug: '01-getting-started', lessons: ['01-intro', '02-setup'] },
      ],
    },
  ];

  const params: { slug: string; chapter: string; lesson: string }[] = [];
  
  courses.forEach((course) => {
    course.chapters.forEach((chapter) => {
      chapter.lessons.forEach((lesson) => {
        params.push({ slug: course.slug, chapter: chapter.slug, lesson });
      });
    });
  });

  return params;
}

export default async function LessonPage({ params }: PageProps) {
  const { slug, chapter, lesson } = await params;
  const course = getCourseBySlug(slug);

  if (!course) {
    notFound();
  }

  const chapterData = course.chapters.find((c) => c.slug === chapter);
  const lessonData = chapterData?.lessons.find((l) => l.slug === lesson);

  if (!lessonData) {
    notFound();
  }

  const content = getLessonContent(slug, chapter, lesson);

  const allLessons: { chapter: string; lesson: string; title: string }[] = [];
  course.chapters.forEach((ch) => {
    ch.lessons.forEach((le) => {
      allLessons.push({ chapter: ch.slug, lesson: le.slug, title: le.title });
    });
  });

  const currentGlobalIndex = allLessons.findIndex(
    (l) => l.chapter === chapter && l.lesson === lesson
  );

  const prevLesson = currentGlobalIndex > 0 ? allLessons[currentGlobalIndex - 1] : null;
  const nextLesson = currentGlobalIndex < allLessons.length - 1 ? allLessons[currentGlobalIndex + 1] : null;

  const totalLessons = allLessons.length;
  const progress = Math.round(((currentGlobalIndex + 1) / totalLessons) * 100);

  return (
    <div className="flex min-h-screen bg-[#0f0f23]">
      <aside className="hidden lg:block w-80 border-r border-[#2d2d44] bg-[#0f0f23] sticky top-16 h-[calc(100vh-4rem)] overflow-y-auto">
        <LessonSidebar
          course={course}
          currentChapter={chapter}
          currentLesson={lesson}
        />
      </aside>

      <main className="flex-1 max-w-4xl mx-auto px-4 py-8 lg:px-8">
        <Link
          href={`/courses/${slug}`}
          className="inline-flex items-center gap-2 text-sm text-[#8b8b9a] hover:text-[#e94560] transition-colors mb-6"
        >
          <ChevronLeft className="w-4 h-4" />
          <span>กลับไปหน้าคอร์ส</span>
        </Link>

        <article className="bg-[#0f0f23] rounded-lg border-2 border-[#2d2d44] p-6 lg:p-8">
          <header className="mb-8 pb-6 border-b border-[#2d2d44] no-select">
            <div className="flex items-center gap-2 mb-3">
              <span className="px-3 py-1 rounded bg-[#16213e] text-[#e94560] text-xs font-bold border border-[#e94560]">
                ⚔️ {course.title}
              </span>
            </div>
            <h1 className="text-2xl lg:text-3xl font-bold mb-2 text-white">
              {lessonData.title}
            </h1>
            <p className="text-[#8b8b9a]">
              📖 {chapterData?.title}
            </p>
          </header>

          <div className="prose prose-invert max-w-none no-select">
            {content ? (
              <MDXRemote source={content} components={mdxComponents} />
            ) : (
              <div className="text-center py-12">
                <div className="text-6xl mb-4">🚧</div>
                <h2 className="text-xl font-bold mb-2 text-white">กำลังพัฒนาเนื้อหา...</h2>
                <p className="text-[#8b8b9a]">ขอบคุณที่รอครับ! ⚔️</p>
              </div>
            )}
          </div>

          <div className="mt-8 pt-6 border-t border-[#2d2d44]">
            <div className="flex items-center justify-between mb-4">
              <span className="text-sm text-[#8b8b9a]">
                📖 {currentGlobalIndex + 1} / {totalLessons} บทเรียน
              </span>
              <span className="text-sm text-[#f39c12] font-bold">
                ⚡ {progress}% สำเร็จ
              </span>
            </div>
            <div className="w-full bg-[#16213e] rounded-full h-2">
              <div
                className="bg-[#e94560] rounded-full h-2 transition-all duration-500"
                style={{ width: `${progress}%` }}
              />
            </div>
          </div>

          <LessonNav
            courseSlug={slug}
            prevLesson={prevLesson}
            nextLesson={nextLesson}
          />
        </article>
      </main>
    </div>
  );
}
