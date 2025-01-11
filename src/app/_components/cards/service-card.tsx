import Image from "next/image";
import { CardProps } from "./CardProps";

export const ServiceCard = ({ imgSrc, title, text }: CardProps) => {
  return (
    <div className=" border border-slate-arc-200 h-64 max-md:h-72 w-64 min-w-64 lg:max-w-96 lg:w-96 flex flex-col items-center justify-center rounded-2xl gap-[0.625rem] py-4 px-8 ">
      {imgSrc && (
        <Image loading="lazy" src={imgSrc} width={30} height={30} alt={title} />
      )}

      <h3 className="text-gray-600 text-lg font-bold leading-7 ">{title}</h3>
      <p className="text-sm lg:text-base text-gray-600  leading-6">{text}</p>
    </div>
  );
};
