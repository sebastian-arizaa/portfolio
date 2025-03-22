export type Language = 'spanish' | 'english'
export type Theme = 'light' | 'dark'
export type Page = 'projects' | 'skills' | 'about me'

export type Skill = 'React' | 'TypeScript' | 'JavaScript' | 'Node JS' | 'CSS3' | 'Bootstrap' | 'HTML5' | 'Tailwind CSS' | 'MySQL' | 'Git' | 'Github' | 'VS Code' | 'Ingles B2' | 'English B2' | 'Español Nativo' |'Native Spanish' | 'Word' | 'Excel' | 'PowerPoint' | 'APIs REST'

export type ProjectType = {
  position?: number,
  title?: string,
  description?: string,
  image?: string,
  tags?: Skill[],
  url?: string,
  githubUrl?: string
}