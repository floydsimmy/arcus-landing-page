import { cn } from '@/lib/utils'
import Image from 'next/image'
import { CardProps } from './CardProps'

type TestimonialCardProps = CardProps & {
  className?: string
}

export const TestimonialCard = ({
  title,
  text,
  className,
}: TestimonialCardProps) => {
  return (
    <div
      className={cn(
        'border border-slate-200 h-56 w-[18.75rem] flex flex-col items-start justify-center rounded-2xl gap-[0.625rem] py-4 px-8',
        className,
      )}
    >
      <Image src="./quote.svg" width={24} height={24} alt={title} />
      <h3 className="text-gray-600 text-lg font-bold leading-7 ">{title}</h3>
      <p className="text-sm lg:text-base text-gray-600 leading-6">{text}</p>
    </div>
  )
}
