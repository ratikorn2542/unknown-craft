import { personalInfo, workExperience, education, skills } from '@/lib/resume';
import { Card, CardContent } from '@/components/ui/Card';
import { Button } from '@/components/ui/Button';

const techColors: Record<string, string> = {
  Java: 'bg-[#16213e] text-[#f39c12] border-[#f39c12]',
  Kotlin: 'bg-[#16213e] text-[#a855f7] border-[#a855f7]',
  TypeScript: 'bg-[#16213e] text-[#00d9ff] border-[#00d9ff]',
  JavaScript: 'bg-[#16213e] text-[#f39c12] border-[#f39c12]',
  SQL: 'bg-[#16213e] text-[#22c55e] border-[#22c55e]',
  HTML: 'bg-[#16213e] text-[#e94560] border-[#e94560]',
  CSS: 'bg-[#16213e] text-[#00d9ff] border-[#00d9ff]',
  SCSS: 'bg-[#16213e] text-[#e94560] border-[#e94560]',
  'Spring Boot': 'bg-[#16213e] text-[#22c55e] border-[#22c55e]',
  NestJS: 'bg-[#16213e] text-[#e94560] border-[#e94560]',
  Angular: 'bg-[#16213e] text-[#e94560] border-[#e94560]',
  PostgreSQL: 'bg-[#16213e] text-[#00d9ff] border-[#00d9ff]',
  MySQL: 'bg-[#16213e] text-[#f39c12] border-[#f39c12]',
  MariaDB: 'bg-[#16213e] text-[#00d9ff] border-[#00d9ff]',
  Docker: 'bg-[#16213e] text-[#00d9ff] border-[#00d9ff]',
  Jenkins: 'bg-[#16213e] text-[#e94560] border-[#e94560]',
  Nginx: 'bg-[#16213e] text-[#22c55e] border-[#22c55e]',
  Git: 'bg-[#16213e] text-[#f39c12] border-[#f39c12]',
  Spring: 'bg-[#16213e] text-[#22c55e] border-[#22c55e]',
  SpringMVC: 'bg-[#16213e] text-[#22c55e] border-[#22c55e]',
};

function getTechColor(tech: string): string {
  return techColors[tech] || 'bg-[#16213e] text-[#9ca3af] border-[#2d2d44]';
}

function extractTechs(description: string): string[] {
  const techs: string[] = [];
  const techPatterns = [
    'Java', 'Kotlin', 'Spring Boot', 'Spring', 'NestJS', 'Angular',
    'TypeScript', 'JavaScript', 'PostgreSQL', 'MySQL', 'Docker',
    'Jenkins', 'Nginx', 'Git', 'HTML', 'CSS', 'SCSS', 'Spring MVC'
  ];
  
  techPatterns.forEach(tech => {
    if (description.includes(tech)) {
      techs.push(tech);
    }
  });
  
  return techs.slice(0, 5);
}

export default function ProfilePage() {
  return (
    <div className="min-h-screen relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-[#0f0f23] via-[#1a1a2e] to-[#16213e]" />

      <div className="relative z-10 max-w-4xl mx-auto px-6 md:px-8 py-12 md:py-16">
        <div className="text-center mb-16">
          <div className="relative inline-block mb-6">
            <div className="w-36 h-36 rounded-lg p-1 border-4 border-[#f39c12] shadow-[8px_8px_0px_0px_#e94560]">
              <div className="w-full h-full rounded overflow-hidden bg-[#0f0f23]">
                <img
                  src="/profile.jpeg"
                  alt={personalInfo.name}
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>

          <h1 className="text-4xl md:text-5xl font-bold text-white mb-3 tracking-wide">
            {personalInfo.name}
          </h1>
          <p className="text-xl text-[#e94560] mb-4 font-bold">
            ⚔️ {personalInfo.title}
          </p>
          <p className="text-[#9ca3af] max-w-xl mx-auto mb-8 leading-relaxed">
            {personalInfo.bio}
          </p>

          <div className="flex flex-wrap justify-center gap-2 mb-8">
            {personalInfo.location && (
              <span className="px-4 py-2 rounded bg-[#0f0f23] border-2 border-[#2d2d44] text-sm text-white">
                📍 {personalInfo.location}
              </span>
            )}
            {personalInfo.phone && (
              <a href={`tel:${personalInfo.phone.replace(/-/g, '')}`} className="px-4 py-2 rounded bg-[#0f0f23] border-2 border-[#2d2d44] text-sm text-white hover:border-[#e94560] transition-colors">
                📞 {personalInfo.phone}
              </a>
            )}
            {personalInfo.email && (
              <a href={`mailto:${personalInfo.email}`} className="px-4 py-2 rounded bg-[#0f0f23] border-2 border-[#2d2d44] text-sm text-white hover:border-[#e94560] transition-colors">
                ✉️ {personalInfo.email}
              </a>
            )}
          </div>

          <div className="flex flex-wrap justify-center gap-3">
            {personalInfo.website && (
              <a href={personalInfo.website} target="_blank" rel="noopener noreferrer">
                <Button variant="outline">
                  🌐 Portfolio
                </Button>
              </a>
            )}
            {personalInfo.github && (
              <a href={personalInfo.github} target="_blank" rel="noopener noreferrer">
                <Button variant="outline">
                  💻 GitHub
                </Button>
              </a>
            )}
            {personalInfo.linkedin && (
              <a href={personalInfo.linkedin} target="_blank" rel="noopener noreferrer">
                <Button variant="outline">
                  🔗 LinkedIn
                </Button>
              </a>
            )}
            <a href="/Resume.pdf" download>
              <Button>
                📥 Download Resume
              </Button>
            </a>
          </div>
        </div>

        <div className="space-y-16">
          <section>
            <div className="flex items-center gap-3 mb-10">
              <div className="w-12 h-12 rounded bg-[#0f0f23] border-2 border-[#e94560] flex items-center justify-center shadow-[4px_4px_0px_0px_#e94560]">
                💼
              </div>
              <h2 className="text-2xl md:text-3xl font-bold text-white">
                Work Experience
              </h2>
            </div>

            <div className="relative pl-8">
              <div className="absolute left-3 top-0 bottom-0 w-0.5 bg-gradient-to-b from-[#e94560] via-[#f39c12] to-[#e94560]" />

              <div className="space-y-8">
                {workExperience.map((work, index) => (
                  <div key={index} className="relative">
                    <div className="absolute -left-5 top-4 w-3 h-3 bg-[#e94560] shadow-[2px_2px_0px_0px_#f39c12]" />
                    
                    <Card className="ml-4 bg-[#0f0f23] border-2 border-[#2d2d44] border-l-4 border-l-[#e94560]">
                      <CardContent className="p-6 md:p-8">
                        <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
                          <div>
                            <h3 className="font-bold text-xl text-white">
                              {work.role}
                            </h3>
                            <p className="text-[#e94560] font-medium mt-1">
                              {work.company}
                            </p>
                          </div>
                          <span className="mt-2 md:mt-0 px-4 py-1.5 rounded bg-[#16213e] border border-[#f39c12] text-[#f39c12] text-sm font-bold">
                            {work.period}
                          </span>
                        </div>
                        
                        <p className="text-[#9ca3af] leading-relaxed mb-5">
                          {work.description}
                        </p>
                        
                        <div className="flex flex-wrap gap-2">
                          {extractTechs(work.description).map((tech) => (
                            <span
                              key={tech}
                              className={`px-2 py-1 rounded text-xs font-bold border ${getTechColor(tech)}`}
                            >
                              {tech}
                            </span>
                          ))}
                        </div>
                      </CardContent>
                    </Card>
                  </div>
                ))}
              </div>
            </div>
          </section>

          <section>
            <div className="flex items-center gap-3 mb-10">
              <div className="w-12 h-12 rounded bg-[#0f0f23] border-2 border-[#f39c12] flex items-center justify-center shadow-[4px_4px_0px_0px_#f39c12]">
                🎓
              </div>
              <h2 className="text-2xl md:text-3xl font-bold text-white">
                Education
              </h2>
            </div>

            <div className="relative pl-8">
              <div className="absolute left-3 top-0 bottom-0 w-0.5 bg-gradient-to-b from-[#f39c12] to-[#f39c12]" />

              <div className="space-y-6">
                {education.map((edu, index) => (
                  <div key={index} className="relative">
                    <div className="absolute -left-5 top-4 w-3 h-3 bg-[#f39c12] shadow-[2px_2px_0px_0px_#e94560]" />
                    
                    <Card className="ml-4 bg-[#0f0f23] border-2 border-[#2d2d44] border-l-4 border-l-[#f39c12]">
                      <CardContent className="p-6 md:p-8">
                        <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
                          <div>
                            <h3 className="font-bold text-xl text-white">
                              {edu.degree}
                            </h3>
                            <p className="text-[#f39c12] font-medium mt-1">
                              🏛️ {edu.school}
                            </p>
                          </div>
                          <span className="mt-2 md:mt-0 px-3 py-1 rounded bg-[#16213e] border border-[#f39c12] text-[#f39c12] text-sm font-bold whitespace-nowrap">
                            {edu.year}
                          </span>
                        </div>
                        
                        {edu.gpa && (
                          <div className="inline-flex items-center gap-2 px-4 py-2 rounded bg-[#16213e] border border-[#f39c12]">
                            <span className="text-lg">📊</span>
                            <span className="font-bold text-[#f39c12]">
                              GPA: {edu.gpa}
                            </span>
                          </div>
                        )}
                      </CardContent>
                    </Card>
                  </div>
                ))}
              </div>
            </div>
          </section>

          <section>
            <div className="flex items-center gap-3 mb-10">
              <div className="w-12 h-12 rounded bg-[#0f0f23] border-2 border-[#00d9ff] flex items-center justify-center shadow-[4px_4px_0px_0px_#00d9ff]">
                ⚡
              </div>
              <h2 className="text-2xl md:text-3xl font-bold text-white">
                Skills
              </h2>
            </div>

            <div className="grid md:grid-cols-2 gap-6">
              {skills.map((skill, index) => (
                <Card key={index} className="bg-[#0f0f23] border-2 border-[#2d2d44]">
                  <CardContent className="p-6 md:p-8">
                    <h3 className="font-bold text-lg mb-5 text-white flex items-center gap-2">
                      <span>{skill.category.split(' ')[0]}</span>
                      <span>{skill.category.split(' ').slice(1).join(' ')}</span>
                    </h3>
                    <div className="flex flex-wrap gap-2">
                      {skill.items.map((item) => (
                        <span
                          key={item}
                          className="px-3 py-1.5 rounded text-sm font-bold bg-[#16213e] text-[#00d9ff] border border-[#2d2d44]"
                        >
                          {item}
                        </span>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </section>
        </div>

      </div>
    </div>
  );
}
