/* eslint-disable @typescript-eslint/no-explicit-any */

import React from "react";
import { Footer } from "@/app/_components/footer";
import { Navbar } from "@/app/_components/navbar";
import { SectionHeader } from "@/app/_components/section-header";
// import projectsData from "@/data/projects.json";
import { Pagination } from "@nextui-org/pagination";
import { ProjectCard } from "../../_components/cards/project-card";
import { getTranslations, unstable_setRequestLocale } from "next-intl/server";

export default async function Projects({
  params: { locale },
}: {
  params: { locale: string };
}) {
  // Enable static rendering for this server component under `output: 'export'`.
  unstable_setRequestLocale(locale);
  const t = await getTranslations("Projects");
  const projectsData = t.raw(`ProjectList`);

  return (
    <div>
      <div className="flex flex-col items-center h-full my-0 bg-white">
        <Navbar />
        <main className="mt-28 lg:mt-36 md:max-w-3xl max-w-[22rem] lg:max-w-7xl xl:max-w-[87rem] 2xl:max-w-[110rem] flex flex-col lg:gap-3 ">
          <SectionHeader title={t(`SectionHeader.title`)} />
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 sm:gap-12">
            {projectsData.map((project: any, index: number) => (
              <ProjectCard
                key={index}
                id={project.id}
                imgSrc={project.imgSrc}
                title={project.title}
                text={project.text}
              />
            ))}
          </div>
        </main>

        {/*<Pagination total={10} initialPage={1} className="mt-10 mb-24 z-0" />*/}
      </div>

      <Footer />
    </div>
  );
}
