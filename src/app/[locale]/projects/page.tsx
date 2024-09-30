import { Footer } from '@/app/_components/footer'
import { Navbar } from '@/app/_components/navbar'
import { SectionHeader } from '@/app/_components/section-header'
// import projectsData from '@/data/projects.json'
import { Pagination } from '@nextui-org/pagination'
import { ProjectCard } from '../../_components/cards/project-card'
import { useTranslations } from 'next-intl'

export default function Projects() {
  const t = useTranslations('Projects')
  const projectsData = t.raw(`ProjectList`)
  return (
    <div>
      <div className="flex flex-col items-center h-full my-0 bg-white">
        <Navbar />
        <main className="mt-28 lg:mt-28 md:max-w-3xl max-w-[22rem] lg:max-w-7xl xl:max-w-[87rem] 2xl:max-w-[110rem] flex flex-col gap-16 lg:gap-32 ">
          <SectionHeader title={t(`SectionHeader.title`)} />

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 sm:gap-12 mt-8">
            {projectsData.map((project) => (
              <ProjectCard
                key={project.id}
                id={project.id}
                imgSrc={project.imgSrc}
                title={project.title}
                text={project.text}
              />
            ))}
          </div>
        </main>

        <Pagination total={10} initialPage={1} className="mt-10 mb-24 z-0" />
      </div>

      <Footer />
    </div>
  )
}
