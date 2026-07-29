'use client';

import { useState, useMemo } from 'react';
import { CourseMeta } from '@/types';
import { CourseCard } from './CourseCard';

interface CourseFilterClientProps {
  courses: CourseMeta[];
}

export function CourseFilterClient({ courses }: CourseFilterClientProps) {
  const [selectedLevel, setSelectedLevel] = useState<string>('All');
  const [selectedStatus, setSelectedStatus] = useState<string>('All');

  const levels = ['All', 'Beginner', 'Intermediate', 'Advanced'];
  const statuses = ['All', 'Available', 'Coming Soon'];

  const filteredCourses = useMemo(() => {
    let filtered = [...courses];

    if (selectedLevel !== 'All') {
      filtered = filtered.filter((c) => c.level === selectedLevel);
    }

    if (selectedStatus !== 'All') {
      filtered = filtered.filter((c) => c.status === selectedStatus);
    }

    return filtered;
  }, [courses, selectedLevel, selectedStatus]);

  const handleFilter = (level: string, status: string) => {
    setSelectedLevel(level);
    setSelectedStatus(status);
  };

  const handleClearFilters = () => {
    setSelectedLevel('All');
    setSelectedStatus('All');
  };

  const hasActiveFilters = selectedLevel !== 'All' || selectedStatus !== 'All';

  return (
    <div>
      <div className="flex flex-wrap gap-4 mb-8 items-center">
        <div className="flex items-center gap-2">
          <span className="text-sm font-medium text-[#9ca3af]">⚔️ Level:</span>
          <div className="flex gap-1 flex-wrap">
            {levels.map((level) => (
              <button
                key={level}
                onClick={() => handleFilter(level, selectedStatus)}
                aria-pressed={selectedLevel === level}
                className={`px-3 py-1 rounded text-sm font-bold transition-all border-2 focus-visible:ring-2 focus-visible:ring-[#e94560] focus-visible:ring-offset-2 focus-visible:ring-offset-[#0f0f23] ${
                  selectedLevel === level
                    ? 'bg-[#e94560] text-white border-[#e94560]'
                    : 'bg-[#16213e] text-[#9ca3af] border-[#2d2d44] hover:border-[#e94560]'
                }`}
              >
                {level === 'All' ? '🌟' : level === 'Beginner' ? '🌱' : level === 'Intermediate' ? '🌿' : '🔥'} {level}
              </button>
            ))}
          </div>
        </div>

        <div className="flex items-center gap-2">
          <span className="text-sm font-medium text-[#9ca3af]">📜 Status:</span>
          <div className="flex gap-1 flex-wrap">
            {statuses.map((status) => (
              <button
                key={status}
                onClick={() => handleFilter(selectedLevel, status)}
                aria-pressed={selectedStatus === status}
                className={`px-3 py-1 rounded text-sm font-bold transition-all border-2 focus-visible:ring-2 focus-visible:ring-[#e94560] focus-visible:ring-offset-2 focus-visible:ring-offset-[#0f0f23] ${
                  selectedStatus === status
                    ? 'bg-[#e94560] text-white border-[#e94560]'
                    : 'bg-[#16213e] text-[#9ca3af] border-[#2d2d44] hover:border-[#e94560]'
                }`}
              >
                {status === 'All' ? '✨' : status === 'Available' ? '✓' : '⚡'} {status}
              </button>
            ))}
          </div>
        </div>

        {hasActiveFilters && (
          <button
            onClick={handleClearFilters}
            className="px-3 py-1 rounded text-sm font-bold transition-all border-2 border-[#e94560] text-[#e94560] hover:bg-[#e94560] hover:text-white focus-visible:ring-2 focus-visible:ring-[#e94560] focus-visible:ring-offset-2 focus-visible:ring-offset-[#0f0f23]"
          >
            ✕ Clear
          </button>
        )}
      </div>

      <p className="text-sm text-[#9ca3af] mb-6">
        Showing <span className="font-bold text-white">{filteredCourses.length}</span> courses
      </p>

      {filteredCourses.length === 0 ? (
        <div className="text-center py-20">
          <div className="text-6xl mb-4">😿</div>
          <h2 className="text-xl font-bold mb-2 text-white">No courses found</h2>
          <p className="text-[#9ca3af]">
            Try adjusting your filters!
          </p>
        </div>
      ) : (
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredCourses.map((course) => (
            <CourseCard key={course.slug} course={course} />
          ))}
        </div>
      )}
    </div>
  );
}
