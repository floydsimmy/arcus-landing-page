import Image from 'next/image'
import { CardProps } from './CardProps'


export const ProjectCard = ({ title, text, imgSrc }: CardProps) => {
  return (
    <div><Image src={"./project1.svg"} alt='' width={490} height={460}/></div>
  )
}