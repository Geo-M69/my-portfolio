type Project = {
  name: string
  description: string
  link: string
  video: string
  id: string
}

type WorkExperience = {
  company: string
  title: string
  start: string
  end: string
  link: string
  id: string
}

type BlogPost = {
  title: string
  description: string
  link: string
  uid: string
}

type SocialLink = {
  label: string
  link: string
}

export const PROJECTS: Project[] = [
  {
    name: 'Ultimate Tic Tac Toe',
    description:
      'Prototype for ART-200 course.',
    link: 'https://art-200-prototype.vercel.app/',
    video:
      '/videos/art-200.mp4',
    id: 'project1',
  },
  {
    name: 'Butter Launcher',
    description: 'Alternative open source launcher for seamless multiplayer support, and multiple instance management.',
    link: 'https://github.com/vZylev/Butter-Launcher/',
    video:
      'https://res.cloudinary.com/read-cv/video/upload/t_v_b/v1/1/profileItems/W2azTw5BVbMXfj7F53G92hMVIn32/XSfIvT7BUWbPRXhrbLed/ee6871c9-8400-49d2-8be9-e32675eabf7e.mp4?_a=DATAdtAAZAA0',
    id: 'project2',
  },
]

export const WORK_EXPERIENCE: WorkExperience[] = [
  {
    company: 'Geo Transport',
    title: 'Computer Specialist',
    start: '2023',
    end: 'Present',
    link: '',
    id: 'work1',
  },
]

export const BLOG_POSTS: BlogPost[] = [
  {
    title: 'Ultimate Tic Tac Toe',
    description: 'A documentation into the development of Ultimate Tic Tac Toe, a prototype for the ART-200 course.',
    link: '/blog/ultimate-tic-tac-toe',
    uid: 'blog-1',
  },
]

export const SOCIAL_LINKS: SocialLink[] = [
  {
    label: 'Github',
    link: 'https://github.com/Geo-M69',
  },
  {
    label: 'LinkedIn',
    link: 'https://www.linkedin.com/in/geovany-munos-3a00082b2',
  },
]

export const EMAIL = 'geomunos73@proton.me'
