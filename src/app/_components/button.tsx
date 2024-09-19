import { cn } from "@/lib/utils";
import { ReactNode } from "react";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  icon?: ReactNode;
  content?: string;
  variant?: boolean;
}

export const Button = ({ icon, content, variant, ...props }: ButtonProps) => {
  return (
    <button {...props} className={cn(`${!variant ? "bg-blue-arc-700 hover:bg-blue-arc-800 text-white" : "bg-slate-arc-50 hover:bg-slate-arc-300 text-black"} transition-colors duration-200  py-2 px-4 flex justify-center items-center gap-2 rounded-3xl`)}>
      <span>{content}</span>
      {icon ?? null}
    </button>
  );
};
