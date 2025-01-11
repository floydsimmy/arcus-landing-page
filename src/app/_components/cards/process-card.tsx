import Image from "next/image";
import { CardProps } from "./CardProps";

export const ProcessCard = ({ imgSrc = "", title, text }: CardProps) => {
  return (
    <div className="border border-slate-200 h-[20.9rem] min-w-64 max-md:w-64 lg:max-w-96 flex flex-col justify-center gap-[0.625rem] rounded-2xl px-4 ">
      <Image loading="lazy" src={imgSrc} width={350} height={210} alt={title} />
      <h3 className="text-gray-600 text-base font-bold leading-6 ">{title}</h3>
      <p className="text-sm lg:text-base text-gray-600  leading-6 borde h-12">
        {text}
      </p>
    </div>
  );
};
