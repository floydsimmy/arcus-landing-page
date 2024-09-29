import Image from 'next/image'
import { CardProps } from './CardProps'

export const TeamCard = ({ title, text }: CardProps) => {
  return (
    <div
      className="relative h-[32rem]  bg-cover bg-center rounded-2xl"
      style={{ backgroundImage: "url('/CivilEngineering.jpg')" }}
    >
      <div className="absolute flex ml-8 bottom-4 w-3/4 bg-white rounded-2xl p-4 mx-auto">
        <div className="">
          <p className="font-medium text-slate-arc-700 leading-7 text-lg">
            {title}
          </p>
          <p className="text-base text-slate-arc-600">{text}</p>
        </div>
        <Image src="/linkedin.svg" alt="quote" width={30} height={30} />
      </div>
    </div>
  )
}
