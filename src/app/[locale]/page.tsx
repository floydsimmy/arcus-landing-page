/* eslint-disable @typescript-eslint/no-explicit-any */
'use client'
// import projectsData from '@/data/projects.json'
import { Link } from '@/i18n/routing'
import { ArrowRight, Phone } from '@phosphor-icons/react'
import { useTranslations } from 'next-intl'
import Image from 'next/image'
import { Button } from '../_components/button'
import { InsightCard } from '../_components/cards/insight-card'
import { PartnerCard } from '../_components/cards/partner-card'
import { ProcessCard } from '../_components/cards/process-card'
import { ServiceCard } from '../_components/cards/service-card'
import { TestimonialCard } from '../_components/cards/testimonial-card'
import { Footer } from '../_components/footer'
import { Form } from '../_components/form'
import Marquee from '../_components/marque'
import { Navbar } from '../_components/navbar'
import { SectionHeader } from '../_components/section-header'

const HeroSection = ({ value, t, buttons }: any) => (
  <div
    className="bg-white rounded-3xl lg:rounded-[64px] min-h-[29.375rem] lg:h-[53.75rem] lg:p-16 py-16 px-4 flex items-center lg:w-full"
    style={{
      backgroundImage: "url('./back.png')",
      backgroundSize: 'cover',
      backgroundPosition: 'center',
    }}
  >
    <div className="max-w-[25.875rem] lg:max-w-[40rem] flex flex-col gap-3 text-white">
      <div className="flex items-center gap-3">
        <hr className="min-w-8 lg:w-28 border-t-[3px] border-slate-arc-400 " />
        <span className="text-sm lg:text-base leading-6">
          {t(`${value}.span`)}
        </span>
      </div>
      <h1 className="text-xl lg:text-6xl font-bold leading-7 lg:leading-[6rem]">
        {t(`${value}.h1`)}
      </h1>
      <p className="leading-6 lg:leading-8 text-base lg:text-xl">
        {t(`${value}.p`)}
      </p>
      <div className="flex flex-col lg:flex-row gap-3">
        <Button className="max-md:hidden" variant content={buttons[1]} />
        <Button className="md:hidden" variant content={buttons[0]} />
        <Button icon={<Phone weight="fill" />} content={buttons[2]} />
      </div>
    </div>
  </div>
)

const InsightsSection = ({ cards }: any) => (
  <div className="flex flex-row gap-6 justify-start lg:justify-center lg:items-center w-full max-md:overflow-x-scroll">
    <InsightCard imgSrc="/list.svg" title={cards[0].title} text="+100" />
    <InsightCard imgSrc="/people.svg" title={cards[1].title} text="+50" />
    <InsightCard imgSrc="/house.svg" title={cards[2].title} text="+50" />
    <InsightCard imgSrc="/person.svg" title={cards[3].title} text="+100" />
  </div>
)

const ServicesSection = ({ value, t, cards }: any) => (
  <div className="flex flex-col gap-10 justify-center items-center w-full overflow-hidden">
    <SectionHeader
      title={t(`${value}.title`)}
      description={t(`${value}.description`)}
    />

    <Marquee className="max-md:hidden flex gap-6 ">
      {cards.map((card: any) => (
        <ServiceCard imgSrc="/map.svg" title={card.title} text={card.text} />
      ))}
    </Marquee>

    <div className="lg:hidden flex gap-4 w-full overflow-x-scroll">
      {cards.map((card: any) => (
        <ServiceCard imgSrc="/map.svg" title={card.title} text={card.text} />
      ))}
    </div>
  </div>
)

const ProjectsSection = ({ value, t, t3, projectsData }: any) => {
  console.log('ProjectsSection projectsData:', projectsData)

  if (!projectsData || projectsData.length < 3) {
    return <div>No projects available</div>
  }

  return (
    <div className="flex flex-col gap-10 justify-center items-center w-full">
      <SectionHeader
        title={t(`${value}.title`)}
        description={t(`${value}.description`)}
      />
      <div className="max-md:hidden grid grid-cols-2 gap-4 lg:h-[48rem]">
        <div className="lg:grid grid-rows-2 gap-4 ">
          <div
            className="relative text-white flex flex-col justify-end row-span-2 rounded-[4rem] px-8 pb-16 bg-cover bg-center group "
            style={{ backgroundImage: `url(${projectsData[0].imgSrc})` }}
          >
            <div className="absolute inset-0 bg-black/90 opacity-0 group-hover:opacity-50 transition-opacity duration-300 rounded-[4rem]"></div>
            <h3 className="z-10 text-3xl font-medium leading-[2.81rem] opacity-0 group-hover:opacity-100 transition-opacity duration-300">
              {projectsData[0].title}
            </h3>
            <p className=" z-10 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
              {projectsData[0].text}
            </p>
            <div className="flex items-start opacity-0 group-hover:opacity-100 transition-opacity duration-300">
              <Link
                className="flex items-center justify-center bg-blue-arc-700 hover:bg-blue-arc-800 transition-colors duration-200 z-10 mt-2 gap-2 rounded-[64px] text-center py-4 px-6"
                href={`/projects/${projectsData[0].id}`}
              >
                <span>{t(`${value}.link`)}</span>
                <ArrowRight weight="regular" />
              </Link>
            </div>
          </div>
        </div>
        <div className="grid grid-rows-2 gap-4">
          <div
            className="relative text-white flex flex-col justify-center bg-cover bg-center group h-full rounded-[4rem] px-8"
            style={{ backgroundImage: `url(${projectsData[1].imgSrc})` }}
          >
            <div className="absolute inset-0 bg-black/90 opacity-0 group-hover:opacity-50 transition-opacity duration-300 rounded-[4rem]"></div>
            <h3 className="z-10 text-3xl font-medium leading-[2.81rem] opacity-0 group-hover:opacity-100 transition-opacity duration-300">
              {projectsData[1].title}
            </h3>
            <p className=" z-10 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
              {projectsData[1].text}
            </p>
            <div className="flex items-start opacity-0 group-hover:opacity-100 transition-opacity duration-300">
              <Link
                className="flex items-center justify-center bg-blue-arc-700 hover:bg-blue-arc-800 transition-colors duration-200 z-10 mt-2 gap-2 rounded-[64px] text-center py-4 px-6 "
                href={`/projects/${projectsData[1].id}`}
              >
                <span>{t(`${value}.link`)}</span>
                <ArrowRight weight="regular" />
              </Link>
            </div>
          </div>
          <div
            className="relative text-white flex flex-col justify-center bg-cover bg-center group rounded-[4rem] px-8"
            style={{ backgroundImage: `url(${projectsData[2].imgSrc})` }}
          >
            <div className="absolute inset-0 bg-black/90 opacity-0 group-hover:opacity-50 transition-opacity duration-300 rounded-[4rem]"></div>
            <h3 className="z-10 text-3xl font-medium leading-[2.81rem] opacity-0 group-hover:opacity-100 transition-opacity duration-300">
              {projectsData[2].title}
            </h3>
            <p className=" z-10 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
              {projectsData[2].text}
            </p>
            <div className="flex items-start opacity-0 group-hover:opacity-100 transition-opacity duration-300">
              <Link
                className="flex items-center justify-center bg-blue-arc-700 hover:bg-blue-arc-800 transition-colors duration-200 z-10 mt-2 gap-2 rounded-[64px] text-center py-4 px-6"
                href={`/projects/${projectsData[2].id}`}
              >
                <span>{t(`${value}.link`)}</span>
                <ArrowRight weight="regular" />
              </Link>
            </div>
          </div>
        </div>
      </div>
      <div className="lg:hidden flex gap-4 overflow-x-scroll w-full">
        {projectsData.map((project: any, index: any) => (
          <div
            key={index}
            className="relative flex flex-col justify-center min-w-[20rem] rounded-3xl h-[31.8rem] bg-cover bg-center group text-white px-10"
            style={{ backgroundImage: `url(${project.imgSrc})` }}
          >
            <div className="absolute inset-0 bg-black/90 opacity-50 transition-opacity duration-300 rounded-3xl"></div>
            <h3 className="z-10 text-3xl font-medium leading-[2.81rem] opacity-100 ">
              {project.title}
            </h3>
            <p className="z-10 opacity-100 group-hover:opacity-100 transition-opacity duration-300">
              {project.text}
            </p>
            <Link
              className="flex items-center justify-center bg-blue-arc-700 hover:bg-blue-arc-800 transition-colors duration-200 z-10 mt-2 gap-2 rounded-[64px] text-center py-4 w-full"
              href={`/projects/${project.id}`}
            >
              <span> {t3('link')}</span> <ArrowRight weight="light" />
            </Link>
          </div>
        ))}
      </div>
      <Link
        className="lg:hidden border rounded-[64px] text-center py-4 w-full hover:bg-slate-200 transition-colors duration-200"
        href={'/projects'}
      >
        {t(`${value}.link1`)}
      </Link>
      <div className="max-lg:hidden flex items-center justify-end w-full">
        <Link
          className="max-lg:hidden border rounded-[64px] h-full w-fit flex justify-center gap-4 py-4 px-6 items-center text-white bg-blue-arc-700 hover:bg-blue-arc-800 transition-colors duration-200"
          href={'/projects'}
        >
          <span>{t(`${value}.link1`)}</span>
          <ArrowRight weight="regular" />
        </Link>
      </div>
    </div>
  )
}

const PartnersSection = ({ value, t, cards }: any) => (
  <div className="flex flex-col gap-10 justify-center items-center w-full overflow-hidden">
    <SectionHeader
      title={t(`${value}.title`)}
      description={t(`${value}.description`)}
    />
    <Marquee className="">
      {cards.map((card: any) => (
        <PartnerCard imgSrc={card.imgSrc} title={card.title} />
      ))}
    </Marquee>
  </div>
)

const ProcessesSection = ({ value, t, cards }: any) => (
  <div className="flex flex-col gap-4 lg:gap-10 justify-start lg:justify-center items-center w-full">
    <SectionHeader
      title={t(`${value}.title`)}
      description={t(`${value}.description`)}
    />
    <div className="flex gap-6 max-md:hidden">
      {cards.map((card: any) => (
        <ProcessCard imgSrc={card.imgSrc} title={card.title} text={card.text} />
      ))}
    </div>

    <div className="lg:hidden flex justify-start w-full flex-row gap-4 overflow-x-scroll">
      {cards.map((card: any) => (
        <ProcessCard imgSrc={card.imgSrc} title={card.title} text={card.text} />
      ))}
    </div>
  </div>
)

const TestimonialsSection = ({ value, t, cards }: any) => (
  <div className="flex flex-col gap-10 justify-center items-center w-full overflow-hidden">
    <SectionHeader title={t(`${value}.title`)} />
    <div className="flex flex-col gap-6">
      <Marquee className="[--duration:10s] ">
        {cards.map((card: any) => (
          <TestimonialCard title={card.title} text={card.text} />
        ))}
      </Marquee>
      <Marquee className="hidden lg:flex" reverse>
        {cards.map((card: any) => (
          <TestimonialCard
            title={card.title}
            className="w-[23.8rem]"
            text={card.text}
          />
        ))}
      </Marquee>
    </div>
  </div>
)

const ContactSection = ({ value, t }: any) => (
  <div className="flex flex-col gap-10 justify-center items-center max-lg:border max-lg:rounded-2xl max-lg:pt-6">
    <div className="flex flex-col lg:grid lg:grid-cols-2 gap-6">
      <Form
        title={t(`${value}.title`)}
        description={t(`${value}.description`)}
        email={t(`${value}.email`)}
        name={t(`${value}.name`)}
        message={t(`${value}.message`)}
        submitMessage={t(`${value}.submit`)}
      />
      <Image
        className="hidden lg:block"
        src={'./contact.svg'}
        width={780}
        height={800}
        alt=""
      />
    </div>
  </div>
)

export default function Home() {
  const t = useTranslations('Home')
  const t2 = useTranslations('Projects')
  const t3 = useTranslations('ButtonLink')
  const projectsData = t2.raw(`ProjectList`)
  const sections = [
    'HeroSection',
    'InsightsSection',
    'ServicesSection',
    'ProjectsSection',
    'PartnersSection',
    'ProcessesSection',
    'TestimonialsSection',
    'ContactSection',
  ] as const

  const heroButtons = t.raw(`${sections[0]}.buttons`)
  const insightCards = t.raw(`${sections[1]}.cards`)
  const serviceCards = t.raw(`${sections[2]}.cards`)
  const parternsCards = t.raw(`${sections[4]}.cards`)
  const processesCards = t.raw(`${sections[5]}.cards`)
  const testimonialCards = t.raw(`${sections[6]}.cards`)

  return (
    <div>
      <div className="flex flex-col items-center h-full my-0 bg-white">
        <Navbar />
        <main className="mt-28 lg:mt-36 md:max-w-3xl max-w-[22rem] lg:max-w-7xl xl:max-w-[87rem] 2xl:max-w-[110rem] flex flex-col gap-16 lg:gap-32 ">
          <HeroSection t={t} value={sections[0]} buttons={heroButtons} />
          <InsightsSection t={t} value={sections[1]} cards={insightCards} />
          <ServicesSection t={t} value={sections[2]} cards={serviceCards} />
          <ProjectsSection
            t={t}
            t3={t3}
            value={sections[3]}
            projectsData={projectsData}
          />
          <PartnersSection t={t} value={sections[4]} cards={parternsCards} />
          <ProcessesSection
            t={t}
            t2={t2}
            value={sections[5]}
            cards={processesCards}
          />
          <TestimonialsSection
            t={t}
            value={sections[6]}
            cards={testimonialCards}
          />
          <ContactSection t={t} value={sections[7]} />
        </main>
      </div>
      <div>
        <Footer />
      </div>
    </div>
  )
}
