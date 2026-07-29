import fs from 'fs';
import path from 'path';

const coursesContentDir = path.join(process.cwd(), 'content/courses');

export function getLessonContent(slug: string, chapter: string, lesson: string): string | null {
  const lessonPath = path.join(coursesContentDir, slug, chapter, `${lesson}.mdx`);
  
  if (!fs.existsSync(lessonPath)) {
    return null;
  }

  const fileContents = fs.readFileSync(lessonPath, 'utf8');
  return fileContents;
}

export function lessonExists(slug: string, chapter: string, lesson: string): boolean {
  const lessonPath = path.join(coursesContentDir, slug, chapter, `${lesson}.mdx`);
  return fs.existsSync(lessonPath);
}
