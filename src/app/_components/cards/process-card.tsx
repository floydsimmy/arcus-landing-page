import Image from "next/image";
import { CardProps } from "./CardProps";


export const ProcessCard = ({ imgSrc = "", title, text }: CardProps) => {
  return (
    <div className=" border border-slate-400 h-[20.9rem] w-96  flex flex-col items-center justify-center rounded-md gap-[0.625rem] px-4 ">
      <Image src={imgSrc} width={350} height={210} alt={title} />
      <h3 className="text-gray-600 text-base font-bold leading-6 ">{title}</h3>
      <p className="text-base text-gray-600  leading-6 borde h-12">{text}</p> 
    </div>

  )

}