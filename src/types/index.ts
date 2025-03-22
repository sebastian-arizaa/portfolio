export type Language = 'spanish' | 'english'
export type Theme = 'light' | 'dark'
export type Page = 'projects' | 'skills' | 'about me'

export type Skill = 'react' | 'typescript' | 'javascript' | 'nodejs' | 'css' | 'html' | 'tailwindcss' | 'mysql' | 'git' | 'github' | 'vscode' | 'inglesb1'

export type ProjectType = {
  title?: string,
  description?: string,
  image?: string,
  tags?: Skill[],
  url?: string,
  githubUrl?: string
}