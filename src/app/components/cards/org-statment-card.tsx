import { ReactNode } from "react";
import { SectionHeader } from "../section-header";

import { CardProps } from '@/app/components/cards/CardProps';


type OrgCardProps = CardProps & {
  children?: ReactNode
};

export const OrgStatementCard = ({ title, text, children }: OrgCardProps) => {
  return (
    <div className="bg-white p-10 border rounded-lg shadow-lg">
      <SectionHeader title={title} description="" />
      {children}
      {text && <p className="mt-2 text-slate-arc-600 text-lg leading-7">{text}</p>}

    </div>
  )
}