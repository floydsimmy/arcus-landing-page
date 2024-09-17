import Image from "next/image";
import { CardProps } from "./CardProps";


export const InsightCard = ({ imgSrc, title, text }: CardProps) => {
  return (
    <div className=" border border-slate-400 h-40 w-96 rounded-md flex flex-col items-center justify-center gap-[0.625rem]">
      <Image src={imgSrc} width={30} height={30} alt={title} />
      <h3 className="leading-7 ">{title}</h3>
      <p className="text-3xl text-gray-500 font-bold leading-[2.8rem]">{text}</p>
    </div>

  )

}