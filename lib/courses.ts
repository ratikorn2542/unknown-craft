import { Course, CourseMeta } from '@/types';

export const courses: Course[] = [
  {
    slug: 'opencode-adventure',
    title: 'Opencode Adventure',
    description: 'เรียนรู้ Opencode ตั้งแต่เริ่มต้นจนถึงใช้งานได้',
    thumbnail: '/courses/opencode-adventure/thumbnail.png',
    tags: ['Opencode', 'AI-agent', 'LLM'],
    level: 'Beginner',
    status: 'Available',
    chapters: [
      {
        slug: '01-fundamental',
        title: 'พื้นฐาน',
        lessons: [
          { slug: '01-llm-and-agent', title: 'LLM และ AI Agent' },
          { slug: '02-opencode-intro', title: 'Opencode คืออะไร' },
          { slug: '03-setup', title: 'Setup' },
          { slug: '04-channel', title: 'Channel' },
          { slug: '05-context-and-system', title: 'Context Window และ System Role' },
          { slug: '06-basic-commands', title: 'Basic Commands' },
          { slug: '07-mention', title: 'Mention' },
        ],
      },
      {
        slug: '02-basic-usage',
        title: 'การใช้งานเบื้องต้น',
        lessons: [
          { slug: '01-modes', title: 'Mode' },
          { slug: '02-agents-md', title: 'AGENT.md' },
        ],
      },
      {
        slug: '03-usecases',
        title: 'การประยุกต์ใช้',
        lessons: [
          { slug: '01-setup', title: 'Setup' },
          { slug: '02-daily-life', title: 'Daily life' },
          { slug: '03-code-dev', title: 'Code / Dev' },
        ],
      },
      {
        slug: '04-mcp',
        title: 'MCP',
        lessons: [
          { slug: '01-index', title: 'MCP (Model Context Protocol)' },
          { slug: '02-mcp-chrome', title: 'Chrome DevTools MCP' },
          { slug: '03-mcp-notion', title: 'Notion MCP' },
        ],
      },
      {
        slug: '05-skill',
        title: 'Skill',
        lessons: [
          { slug: '01-skill-introduction', title: 'Skill' },
        ],
      },
      {
        slug: '06-sub-agent',
        title: 'Sub Agent',
        lessons: [
          { slug: '01-sub-agents', title: 'Sub Agent' },
        ],
      },
      {
        slug: '07-tweak',
        title: 'ปรับแต่ง',
        lessons: [
          { slug: '01-config-scopes', title: 'Config Scopes' },
          { slug: '02-plugin', title: 'Plugin' },
          { slug: '03-commands', title: 'Commands' },
        ],
      },
    ],
  },
  {
    slug: 'ai-for-everyone',
    title: 'AI for everyone',
    description: 'แนะนำเครื่องมือ AI ใช้ง่าย ช่วยให้ชีวิตประจำวันสะดวกมากขึ้น',
    thumbnail: '/courses/ai-for-everyone/thumbnail.png',
    tags: ['AI', 'Gemini', 'NotebookLM'],
    level: 'Beginner',
    status: 'Available',
    chapters: [
      {
        slug: '01-agentic-browser',
        title: 'Agentic Browser',
        lessons: [
          { slug: '01-usecase', title: 'Usecase' },
        ],
      },
      {
        slug: '02-gemini-gem',
        title: 'Gemini Gem',
        lessons: [
          { slug: '01-usecase', title: 'Usecase' },
        ],
      },
      {
        slug: '03-gemini-live',
        title: 'Gemini Live',
        lessons: [
          { slug: '01-usecase', title: 'Usecase' },
        ],
      },
    ],
  },
  {
    slug: 'react-adventure',
    title: 'React Adventure',
    description: 'เรียนรู้ React ตั้งแต่เริ่มต้นจนถึง deploy ขึ้น Vercel',
    thumbnail: '/courses/react-adventure/thumbnail.png',
    tags: ['React', 'Frontend', 'JavaScript'],
    level: 'Beginner',
    status: 'Available',
    chapters: [
      {
        slug: '01-getting-started',
        title: 'เริ่มต้น',
        lessons: [
          { slug: '01-intro', title: 'React คืออะไร' },
          { slug: '02-setup', title: 'Setup โปรเจค' },
        ],
      },
    ],
  },
  {
    slug: 'docker-adventure',
    title: 'Docker Adventure',
    description: 'เรียนรู้ Docker ตั้งแต่พื้นฐานจนสามารถ deploy งานได้จริง',
    thumbnail: '/courses/docker-adventure/thumbnail.png',
    tags: ['Container', 'Docker'],
    level: 'Intermediate',
    status: 'Coming Soon',
    chapters: [],
  },
  {
    slug: 'git-adventure',
    title: 'Git Adventure',
    description: 'เรียนรู้ Git สำหรับควบคุม version และทำงานร่วมกับทีม',
    thumbnail: '/courses/git-adventure/thumbnail.png',
    tags: ['Git', 'Version Control'],
    level: 'Beginner',
    status: 'Coming Soon',
    chapters: [],
  },
];

export const courseMeta: CourseMeta[] = courses.map(({ 
  slug, title, description, thumbnail, tags, level, status 
}) => ({
  slug, title, description, thumbnail, tags, level, status
}));

export function getCourseBySlug(slug: string): Course | undefined {
  return courses.find((course) => course.slug === slug);
}

export function getCourseMetaBySlug(slug: string): CourseMeta | undefined {
  return courseMeta.find((course) => course.slug === slug);
}

export function getAllCourseMeta(): CourseMeta[] {
  return courseMeta;
}

export function getAvailableCourses(): CourseMeta[] {
  return courseMeta.filter((course) => course.status === 'Available');
}
