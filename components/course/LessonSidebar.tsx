'use client';

import Link from 'next/link';
import { Course } from '@/types';
import { ChevronRight } from 'lucide-react';

interface LessonSidebarProps {
  course: Course;
  currentChapter: string;
  currentLesson: string;
}

export function LessonSidebar({ course, currentChapter, currentLesson }: LessonSidebarProps) {
  return (
    <div className="p-4 bg-[#0f0f23]">
      <div className="mb-6">
        <h2 className="font-bold text-lg mb-2 text-white">{course.title}</h2>
        <p className="text-sm text-[#8b8b9a]">📖 เนื้อหาทั้งหมด</p>
      </div>

      <nav className="space-y-4">
        {course.chapters.map((chapter, chapterIndex) => (
          <div key={chapter.slug}>
            <div className="flex items-center gap-2 mb-2 px-2">
              <span className="text-xs text-[#8b8b9a] font-mono font-medium">
                {String(chapterIndex + 1).padStart(2, '0')}
              </span>
              <span className="font-medium text-sm text-white">{chapter.title}</span>
            </div>

            <ul className="space-y-1 ml-4">
              {chapter.lessons.map((lesson, lessonIndex) => {
                const isActive = currentChapter === chapter.slug && currentLesson === lesson.slug;

                return (
                  <li key={lesson.slug}>
                    <Link
                      href={`/courses/${course.slug}/${chapter.slug}/${lesson.slug}`}
                      className={`flex items-center gap-2 px-3 py-2 rounded text-sm transition-all ${
                        isActive
                          ? 'bg-[#e94560] text-white border-l-4 border-[#f39c12]'
                          : 'hover:bg-[#16213e] text-[#8b8b9a] hover:text-white'
                      }`}
                    >
                      <span className={`text-xs ${isActive ? 'opacity-70' : 'text-[#8b8b9a]'}`}>
                        {String(chapterIndex + 1)}.{String(lessonIndex + 1)}
                      </span>
                      <span className="flex-1 line-clamp-1">{lesson.title}</span>
                      {isActive && <ChevronRight className="w-3 h-3" />}
                    </Link>
                  </li>
                );
              })}
            </ul>
          </div>
        ))}
      </nav>
    </div>
  );
}
