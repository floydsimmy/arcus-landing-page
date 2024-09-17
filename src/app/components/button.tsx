import { ReactNode } from "react";

interface ButtonProps {
  icon?: ReactNode;
  content?: string;
  variant?: boolean
}

export const Button = ({ icon, content, variant }: ButtonProps) => {
  return (
    <button className={`${!variant ? "bg-blue-arc-700 hover:bg-blue-arc-800 text-white" : "bg-slate-arc-50 hover:bg-slate-arc-300 text-black"} transition-colors duration-200  py-2 px-4 flex items-center gap-2 rounded-3xl`}>
      <span>{content}</span>
      {icon ?? null}
    </button>
  );
};
