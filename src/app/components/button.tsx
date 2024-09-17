import { ReactNode } from "react";

interface ButtonProps {
  icon?: ReactNode;
  content?: string;
  children?: ReactNode;
}

export const Button = ({ icon, content, children }: ButtonProps) => {
  return (
    <button className="bg-blue-arc-700 hover:bg-blue-arc-800 transition-colors duration-200 text-white py-2 px-4 rounded flex items-center gap-2">
      <span>{content}</span>
      {children ?? icon ?? null}
    </button>
  );
};