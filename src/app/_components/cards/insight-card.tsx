import Image from "next/image";
import { CardProps } from "./CardProps";

export const InsightCard = ({ imgSrc = "", title, text }: CardProps) => {
  return (
    <div className="border border-slate-200 h-40 min-w-40 w-40 lg:w-[18.75rem] flex flex-col items-center rounded-2xl justify-center gap-[0.625rem]">
      <Image src={imgSrc} width={30} height={30} alt={title} />
      <h3 className="text-gray-600 text-lg leading-7 ">{title}</h3>
      <p className="lg:text-3xl text-gray-600 font-bold leading-[2.8rem]">{text}</p>
    </div>

  )

}