import Image from "next/image";
import { CardProps } from "./CardProps";


export const ServiceCard = ({ imgSrc, title, text }: CardProps) => {
  return (
    <div className=" border border-slate-arc-200 h-56 w-96  flex flex-col items-center justify-center rounded-2xl gap-[0.625rem] px-4 ">
      {imgSrc && <Image src={imgSrc} width={30} height={30} alt={title} />}

      <h3 className="text-gray-600 text-lg font-bold leading-7 ">{title}</h3>
      <p className="text-base text-gray-600  leading-6">{text}</p>
    </div>

  )

} 