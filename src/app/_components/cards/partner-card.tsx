import Image from "next/image";
import { CardProps } from "./CardProps";


export const PartnerCard = ({ imgSrc, title }: CardProps) => {
  return (
    <div className="border border-slate-200 h-20 w-[10.625rem] lg:w-[15rem] flex items-center justify-center rounded-xl gap-[0.5rem] py-2 px-2">
      {imgSrc && <Image className="rounded-full" src={imgSrc} width={30} height={30} alt={title} />}
      <h3 className="text-gray-600 text-xl leading-7">{title}</h3>
    </div>

  )

}