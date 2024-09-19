import { Footer } from "@/app/_components/footer";
import { Navbar } from "@/app/_components/navbar";
import { SectionHeader } from "@/app/_components/section-header";
import { ProjectCard } from "../_components/cards/project-card";
import {Pagination, PaginationItem, PaginationCursor} from "@nextui-org/pagination";

export default function Projects() {
  return (
    <div>
      <div className="flex flex-col items-center h-full my-0 bg-white">
        <div className="px-20 pt-4">
          <Navbar />
        </div>
        <main className="mt-11 max-w-7xl flex flex-col gap-32 ">
          <SectionHeader title="Nossos Projectos" />
          <div className="grid grid-cols-3 gap-4">
            <ProjectCard imgSrc="./project1.svg" title="Escola Primária 12 de Outubro" text="A Escola Primária 12 de Outubro foi concebida com o objetivo de proporcionar uma educação de qualidade para crianças em idade escolar na comunidade local. O processo de criação do projeto envolveu várias etapas importantes, desde a concepção da ideia inicial até a implementação final."/>
            <ProjectCard imgSrc="./project1.svg" title="Escola Primária 12 de Outubro" text="A Escola Primária 12 de Outubro foi concebida com o objetivo de proporcionar uma educação de qualidade para crianças em idade escolar na comunidade local. O processo de criação do projeto envolveu várias etapas importantes, desde a concepção da ideia inicial até a implementação final."/>
            <ProjectCard imgSrc="./project1.svg" title="Escola Primária 12 de Outubro" text="A Escola Primária 12 de Outubro foi concebida com o objetivo de proporcionar uma educação de qualidade para crianças em idade escolar na comunidade local. O processo de criação do projeto envolveu várias etapas importantes, desde a concepção da ideia inicial até a implementação final."/>
            <ProjectCard imgSrc="./project1.svg" title="Escola Primária 12 de Outubro" text="A Escola Primária 12 de Outubro foi concebida com o objetivo de proporcionar uma educação de qualidade para crianças em idade escolar na comunidade local. O processo de criação do projeto envolveu várias etapas importantes, desde a concepção da ideia inicial até a implementação final."/>
            <ProjectCard imgSrc="./project1.svg" title="Escola Primária 12 de Outubro" text="A Escola Primária 12 de Outubro foi concebida com o objetivo de proporcionar uma educação de qualidade para crianças em idade escolar na comunidade local. O processo de criação do projeto envolveu várias etapas importantes, desde a concepção da ideia inicial até a implementação final."/>
            <ProjectCard imgSrc="./project1.svg" title="Escola Primária 12 de Outubro" text="A Escola Primária 12 de Outubro foi concebida com o objetivo de proporcionar uma educação de qualidade para crianças em idade escolar na comunidade local. O processo de criação do projeto envolveu várias etapas importantes, desde a concepção da ideia inicial até a implementação final."/>
          </div>
        </main>
        {/* <Pagination totalPages={10} initialPage={1} /> */}
      </div>
      <div>
        <Footer />
      </div>
    </div>
  );
}