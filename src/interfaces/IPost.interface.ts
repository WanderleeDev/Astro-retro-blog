export interface IPostProps {
  layout: string
  date: string
  title: string
  color: string
  author: string
  image:Image
  tags: string[]
  description: string
file?: string 
url?: string
}

export interface Image {
  url: string;
  alt: string;
}