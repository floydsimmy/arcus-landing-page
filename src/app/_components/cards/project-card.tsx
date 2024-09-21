'use client'

import Image from 'next/image'
import { CardProps } from './CardProps'
import { Button } from '../button'
import { ArrowRight } from '@phosphor-icons/react'
import Link from 'next/link'

type ProjectCardProps = CardProps & {
  id: string;
}

const truncateText = (text: string, maxLength: number) => {
  if (text.length <= maxLength) return text;
  return text.substring(0, maxLength) + '...';
}

export const ProjectCard = ({ title, text, imgSrc, id }: ProjectCardProps) => {
  const truncatedText = truncateText(text ?? '', 100);
  console.log(imgSrc)
  return (
    <div className='flex flex-col gap-[0.6254rem] p-3 hover:shadow-lg hover:border border-slate-arc-300 rounded-2xl'>
      <Image src={imgSrc ?? ""} alt='' width={490} height={460} />
      
      <h3 className='text-xl font-medium leading-[1.8rem] text-slate-arc-700 '>{title}</h3>
      <p className='text-base font-normal leading-6 text-slate-arc-600 '>{truncatedText}</p>
      <div>
        <Link className='bg-blue-arc-700 hover:bg-blue-arc-800 text-white transition-colors duration-200  py-2 px-4 flex justify-center items-center gap-2 rounded-3xl max-w-32'  href={`/projects/${id}`}>Ver mais  <ArrowRight/> </Link>
      </div>
    </div>
  )
}