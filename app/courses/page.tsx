import { getAllCourseMeta } from '@/lib/courses';
import { CourseFilterClient } from '@/components/course/CourseFilterClient';

export default function CoursesPage() {
  const courses = getAllCourseMeta();

  return (
    <div className="max-w-6xl mx-auto px-4 py-12 bg-[#0f0f23] min-h-screen">
      <div className="text-center mb-12">
        <h1 className="text-3xl md:text-4xl font-bold mb-4 text-white">
          ⚔️ SELECT YOUR QUEST ⚔️
        </h1>
        <p className="text-[#8b8b9a] text-lg">
          ค้นหาคอร์สที่ใช่ แล้วเริ่มผจญภัยไปด้วยกัน! 🕹️
        </p>
      </div>

      <CourseFilterClient courses={courses} />
    </div>
  );
}
