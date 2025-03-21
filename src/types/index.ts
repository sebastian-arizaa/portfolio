export type Language = 'spanish' | 'english'
export type Theme = 'light' | 'dark'
export type Page = 'projects' | 'skills' | 'about me'

export type ProjectTag = {
  text: string,
  color: string,
}

export type ProjectType = {
  title?: string,
  description?: string,
  image?: string,
  tags?: ProjectTag[]
}