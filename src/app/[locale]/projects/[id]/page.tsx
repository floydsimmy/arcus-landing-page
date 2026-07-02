/* eslint-disable @typescript-eslint/no-explicit-any */
import { Footer } from '@/app/_components/footer'
import { Navbar } from '@/app/_components/navbar'
import { SectionHeader } from '@/app/_components/section-header'
import { useTranslations } from 'next-intl'
import { unstable_setRequestLocale } from 'next-intl/server'
import Image from 'next/image'
import { notFound } from 'next/navigation'

import enMessages from '../../../../../messages/en.json'
import ptMessages from '../../../../../messages/pt.json'

interface Project {
  id: string
  title: string
  text: string
  imgSrc: string
  imgSrcs: string[]
}

interface ProjectProps {
  params: { id: string; locale: string }
}

// Pre-render every project page at build time (required for static export).
// IDs are collected from both locales' message files so nothing is missed.
export function generateStaticParams() {
  const ids = new Set<string>()
  for (const messages of [ptMessages, enMessages]) {
    for (const project of messages.Projects.ProjectList) {
      ids.add(project.id)
    }
  }
  return Array.from(ids, (id) => ({ id }))
}

export default function ProjectDetails({ params }: ProjectProps) {
  unstable_setRequestLocale(params.locale)

  const t = useTranslations('Projects')
  const projectsData = t.raw(`ProjectList`)
  const project = projectsData.find(
    (project: Project) => project.id === params.id,
  )

  const t2 = useTranslations('ProjectDetails')
  const projectDetails = t2.raw(`sections`)

  if (!project) {
    return notFound()
  }

  return (
    <div>
      <div className="flex flex-col items-center h-full my-0 bg-white">
        <Navbar />
        <main className="mt-28 lg:mt-28 md:max-w-3xl max-w-[22rem] lg:max-w-7xl xl:max-w-[87rem] 2xl:max-w-[110rem] flex flex-col gap-16 lg:gap-32 ">
          <div className="flex flex-col md:flex-row gap-8">
            <div className="w-full md:w-[50%]">
              <h1 className="text-3xl mb-4 font-bold text-blue-arc-800">
                {project.title}
              </h1>
              <Image
                src={project.imgSrc}
                width={800}
                height={512}
                alt={project.title}
                className="rounded-2xl w-full h-auto object-cover"
              />
            </div>
            <div className="flex flex-col w-full md:w-[50%] gap-8">
              {projectDetails.map((section: any, index: number) => (
                <div key={index}>
                  <h2 className="font-bold leading-7 text-xl">{section.h2}</h2>
                  <p className="text-base lg:text-lg leading-7">{section.p}</p>
                </div>
              ))}
            </div>
          </div>
          <aside className="gap-10 mt-12 mb-24">
            <SectionHeader title={t2('aside.SectionHeader.title')} />
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="col-span-1 row-span-1">
                <Image
                  src={project.imgSrcs[0]}
                  width={788}
                  height={522}
                  alt="Image 1"
                  className="rounded-[32px] max-lg:rounded-2xl w-full h-full object-cover"
                />
              </div>
              <div className="col-span-1 row-span-1">
                <Image
                  src={project.imgSrcs[1]}
                  width={788}
                  height={522}
                  alt="Image 1"
                  className="rounded-[32px] max-lg:rounded-2xl w-full h-full object-cover"
                />
              </div>
              <div className="col-span-1 md:col-span-2 row-span-1">
                <Image
                  src={project.imgSrcs[2]}
                  width={1600}
                  height={522}
                  alt="Image 3"
                  className="rounded-[32px] max-lg:rounded-2xl w-full h-auto object-cover"
                />
              </div>
            </div>
          </aside>
        </main>
      </div>
      <Footer />
    </div>
  )
}
