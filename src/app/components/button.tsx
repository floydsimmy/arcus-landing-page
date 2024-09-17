import { StaticImport } from "next/dist/shared/lib/get-img-props";
import Image from "next/image";

interface ButtonProps {
  imgSrc?: string;
  content?: string;
}

export const Button = ({imgSrc, content}: ButtonProps) => {
  return (
    <button className="bg-blue-arc-700 hover:bg-blue-700 text-white py-2 px-4 rounded flex items-center gap-2">
      <span>{content}</span>
      <Image src={imgSrc ?? ""} width={30} height={30} alt=""/>
    </button>
  )
}