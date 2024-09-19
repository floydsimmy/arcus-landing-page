'use client'

import Image from 'next/image'
import { CardProps } from './CardProps'
import { Button } from '../button'
import { ArrowRight } from '@phosphor-icons/react'

const truncateText = (text: string, maxLength: number) => {
  if (text.length <= maxLength) return text;
  return text.substring(0, maxLength) + '...';
}

export const ProjectCard = ({ title, text, imgSrc }: CardProps) => {
  const truncatedText = truncateText(text ?? '', 100);

  return (
    <div className='flex flex-col gap-[0.6254rem]'>
      <Image src={"./project1.svg"} alt='' width={490} height={460} />
      <h3 className='text-xl font-medium leading-[1.8rem] text-slate-arc-700 '>{title}</h3>
      <p className='text-base font-normal leading-6 text-slate-arc-600 '>{truncatedText}</p>
      <Button content='Ver mais sobre o projecto' icon={<ArrowRight/>}/>
    </div>
  )
}