import { PersonalInfo, WorkExperience, Education, Skill, Language } from '@/types';

export const personalInfo: PersonalInfo = {
  name: 'Ratikorn Yoochum',
  title: 'Full Stack Developer',
  bio: 'Full-Stack Developer with 3+ years of experience building scalable backend systems and enterprise platforms, specializing in Java, Spring Boot, NestJS, and Angular. Proven track record in insurance and e-commerce domains, delivering microservices architecture, payment integrations, and CI/CD pipelines. Passionate about writing clean, efficient code and contributing to high-impact products.',
  email: 'ratikorn.yoochum@gmail.com',
  phone: '095-642-3864',
  github: 'https://github.com/ratikorn2542',
  linkedin: '',
  website: '',
  location: 'Mueang District, Phitsanulok',
};

export const workExperience: WorkExperience[] = [
  {
    company: 'Rider Insurance Broker Public Company Limited',
    role: 'Full Stack Developer',
    period: '2024 - Present',
    description:
      'Designed and developed CO-OP, an online term life insurance platform (Java, Spring Boot, Angular, PostgreSQL), plus GO MAX, GO Inter, Kan-Knock, and Double-Care insurance purchasing systems. Built an internal Quotation & Policy Management System, engineered One-ID (centralized IAM with NestJS & Better Auth), a centralized Payment Gateway service, and utility microservices (OTP gateway, Message Sender, LINE Bot, S3 file storage). Managed CI/CD pipelines with Jenkins and containerized deployments via Docker.',
  },
  {
    company: 'HandyWings Co., Ltd',
    role: 'Backend Developer',
    period: '2022 - 2024',
    description:
      'Developed and optimized scalable microservices (Payment, Notification, OTP, File Services) for high-traffic operations. Designed a Webhooks Module and Public APIs for third-party integrations, contributed to the MoveMax OMS (Order Management System), and optimized relational database queries and schema design.',
  },
  {
    company: 'Maejo University',
    role: 'Senior Project',
    period: '2021',
    description:
      'Built a website for the service of scientific equipment for the Faculty of Science, Maejo University, using Spring MVC.',
  },
];

export const education: Education[] = [
  {
    school: 'Maejo University',
    degree: 'Bachelor of Science in Information Technology, Faculty of Science',
    year: '2018 - 2022',
    gpa: '3.42',
  },
];

export const skills: Skill[] = [
  {
    category: '💻 Languages',
    items: ['Java', 'Kotlin', 'TypeScript', 'JavaScript', 'SQL', 'HTML', 'CSS / SCSS'],
  },
  {
    category: '⚙️ Frameworks & Libraries',
    items: ['Spring Boot', 'NestJS', 'Angular'],
  },
  {
    category: '🗄️ Databases',
    items: ['PostgreSQL', 'MySQL', 'MariaDB'],
  },
  {
    category: '🚀 DevOps & Deployment',
    items: ['Docker', 'Jenkins', 'Nginx'],
  },
  {
    category: '🛠️ Tools & Platforms',
    items: ['Git', 'Bitbucket', 'SourceTree', 'GitFiend', 'DBeaver', 'IntelliJ IDEA', 'VS Code', 'Postman', 'Termius', 'JasperReports'],
  },
];

export const languages: Language[] = [];