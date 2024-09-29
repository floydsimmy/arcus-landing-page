'use client'
import projectsData from '@/data/projects.json'
import { ArrowRight, Phone } from '@phosphor-icons/react'
import Image from 'next/image'
import Link from 'next/link'
import { Button } from './_components/button'
import { InsightCard } from './_components/cards/insight-card'
import { PartnerCard } from './_components/cards/partner-card'
import { ProcessCard } from './_components/cards/process-card'
import { ServiceCard } from './_components/cards/service-card'
import { TestimonialCard } from './_components/cards/testimonial-card'
import { Footer } from './_components/footer'
import { Form } from './_components/form'
import Marquee from './_components/marque'
import { Navbar } from './_components/navbar'
import { SectionHeader } from './_components/section-header'

const HeroSection = () => (
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
          Empresa de Consultoria
        </span>
      </div>
      <h1 className="text-xl lg:text-6xl font-bold leading-7 lg:leading-[6rem]">
        Construindo o futuro com solidez, confiança e inovação.
      </h1>
      <p className="leading-6 lg:leading-8 text-base lg:text-xl">
        Transformamos projetos em realidade, com dedicação e excelência em cada
        detalhe. Seja para grandes obras ou pequenas reformas, estamos prontos
        para concretizar suas ideias.
      </p>
      <div className="flex flex-col lg:flex-row gap-3">
        <Button
          className="max-md:hidden"
          variant
          content="Peça a cotação do seu projeto"
        />
        <Button className="md:hidden" variant content="Peça a cotação" />
        <Button icon={<Phone weight="fill" />} content="Ligue-nos já" />
      </div>
    </div>
  </div>
)

const InsightsSection = () => (
  <div className="flex flex-row gap-6 justify-start lg:justify-center lg:items-center w-full max-md:overflow-x-scroll">
    <InsightCard imgSrc="/list.svg" title="Projectos" text="+100" />
    <InsightCard imgSrc="/people.svg" title="Trabalhadores" text="+50" />
    <InsightCard imgSrc="/house.svg" title="Obras concluídas" text="+50" />
    <InsightCard imgSrc="/person.svg" title="Clientes" text="+100" />
  </div>
)

const ServicesSection = () => (
  <div className="flex flex-col gap-10 justify-center items-center w-full overflow-hidden">
    <SectionHeader
      title="Serviços"
      description="Oferecemos serviços onde o nosso maior valor é a qualidade e a satisfação do cliente "
    />

    <Marquee className="max-md:hidden flex gap-6 ">
      <ServiceCard
        imgSrc="/map.svg"
        title="Arquitectura"
        text="Nosso serviço de arquitetura combina criatividade e funcionalidade para dar vida a projetos únicos e personalizados."
      />
      <ServiceCard
        imgSrc="/map.svg"
        title="Planeamento Físico/Urbano"
        text="Nosso serviço de arquitetura combina criatividade e funcionalidade para dar vida a projetos únicos e personalizados."
      />
      <ServiceCard
        imgSrc="/map.svg"
        title="Engenharia Multidisciplinar"
        text="Nosso serviço de arquitetura combina criatividade e funcionalidade para dar vida a projetos únicos e personalizados."
      />
      <ServiceCard
        imgSrc="/map.svg"
        title="Fiscalização de obras"
        text="Nosso serviço de arquitetura combina criatividade e funcionalidade para dar vida a projetos únicos e personalizados."
      />
      <ServiceCard
        imgSrc="/map.svg"
        title="Avaliação Patrimonial"
        text="Nosso serviço de arquitetura combina criatividade e funcionalidade para dar vida a projetos únicos e personalizados."
      />
      <ServiceCard
        imgSrc="/map.svg"
        title="Estudos do impacto ambiental"
        text="Nosso serviço de arquitetura combina criatividade e funcionalidade para dar vida a projetos únicos e personalizados."
      />
    </Marquee>

    <div className="lg:hidden flex gap-4 w-full overflow-x-scroll">
      <ServiceCard
        imgSrc="/map.svg"
        title="Arquitectura"
        text="Nosso serviço de arquitetura combina criatividade e funcionalidade para dar vida a projetos únicos e personalizados."
      />

      <ServiceCard
        imgSrc="/map.svg"
        title="Planeamento Físico/Urbano"
        text="Nosso serviço de arquitetura combina criatividade e funcionalidade para dar vida a projetos únicos e personalizados."
      />

      <ServiceCard
        imgSrc="/map.svg"
        title="Engenharia Multidisciplinar"
        text="Nosso serviço de arquitetura combina criatividade e funcionalidade para dar vida a projetos únicos e personalizados."
      />
      <ServiceCard
        imgSrc="/map.svg"
        title="Fiscalização de obras"
        text="Nosso serviço de arquitetura combina criatividade e funcionalidade para dar vida a projetos únicos e personalizados."
      />
      <ServiceCard
        imgSrc="/map.svg"
        title="Avaliação Patrimonial"
        text="Nosso serviço de arquitetura combina criatividade e funcionalidade para dar vida a projetos únicos e personalizados."
      />
      <ServiceCard
        imgSrc="/map.svg"
        title="Estudos do impacto ambiental"
        text="Nosso serviço de arquitetura combina criatividade e funcionalidade para dar vida a projetos únicos e personalizados."
      />
    </div>
  </div>
)

const ProjectsSection = () => (
  <div className="flex flex-col gap-10 justify-center items-center w-full">
    <SectionHeader
      title="Projectos"
      description="Oferecemos serviços onde o nosso maior valor é a qualidade e a satisfação do cliente "
    />
    <div className="max-md:hidden grid grid-cols-2 gap-4 lg:h-[48rem]">
      <div className="lg:grid grid-rows-2 gap-4 ">
        <div
          className="relative text-white flex flex-col justify-end row-span-2 rounded-[4rem] px-8 pb-16 bg-cover bg-center group "
          style={{ backgroundImage: `url(${projectsData[0].imgSrc} )` }}
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
              <span>Ver mais sobre o projecto</span>
              <ArrowRight weight="regular" />
            </Link>
          </div>
        </div>
      </div>
      <div className="grid grid-rows-2 gap-4">
        <div
          className="relative text-white flex flex-col justify-center bg-cover bg-center group h-full rounded-[4rem] px-8"
          style={{ backgroundImage: `url(${projectsData[1].imgSrc} )` }}
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
              <span>Ver mais sobre o projecto</span>
              <ArrowRight weight="regular" />
            </Link>
          </div>
        </div>
        <div
          className="relative text-white flex flex-col justify-center bg-cover bg-center group rounded-[4rem] px-8"
          style={{ backgroundImage: `url(${projectsData[2].imgSrc} )` }}
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
              <span>Ver mais sobre o projecto</span>
              <ArrowRight weight="regular" />
            </Link>
          </div>
        </div>
      </div>
    </div>
    <div className="lg:hidden flex gap-4 overflow-x-scroll w-full">
      {projectsData.map((project, index) => (
        <div
          key={index}
          className="relative flex flex-col justify-center min-w-[20rem] rounded-3xl h-[31.8rem] bg-cover bg-center group text-white px-10"
          style={{ backgroundImage: `url(${project.imgSrc} )` }}
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
            <span>Ver detalhes</span> <ArrowRight weight="light" />
          </Link>
        </div>
      ))}
    </div>
    <Link
      className="lg:hidden border rounded-[64px] text-center py-4 w-full hover:bg-slate-200 transition-colors duration-200"
      href={'/projects'}
    >
      Ver mais projectos
    </Link>
    <div className="max-lg:hidden flex items-center justify-end w-full">
      <Link
        className="max-lg:hidden border rounded-[64px] h-full w-fit flex justify-center gap-4 py-4 px-6 items-center text-white bg-blue-arc-700 hover:bg-blue-arc-800 transition-colors duration-200"
        href={'/projects'}
      >
        <span>Ver mais projectos</span>
        <ArrowRight weight="regular" />
      </Link>
    </div>
  </div>
)

const PartnersSection = () => (
  <div className="flex flex-col gap-10 justify-center items-center w-full overflow-hidden">
    <SectionHeader
      title="Parceiros"
      description="Oferecemos serviços onde o nosso maior valor é a qualidade e a satisfação do cliente "
    />
    <Marquee className="">
      <PartnerCard imgSrc="/R.svg" title="Tzu Chi" />
      <PartnerCard imgSrc="/Revimo.svg" title="Revimo" />
      <PartnerCard imgSrc="/Julen.svg" title="Julen Construções " />
      <PartnerCard imgSrc="/UH.svg" title="Un Habit" />
      <PartnerCard imgSrc="/Petromoc.svg" title="Petromoc" />
      <PartnerCard imgSrc="/EDM.svg" title="Electricidade de Moçambique" />
      <PartnerCard imgSrc="/WB.svg" title="World Bank Group" />
    </Marquee>
  </div>
)

const ProcessesSection = () => (
  <div className="flex flex-col gap-4 lg:gap-10 justify-start lg:justify-center items-center w-full overflow-x-scroll">
    <SectionHeader
      title="Processos"
      description="Etapas para a execução dos nossos projectos"
    />
    <div className="flex gap-6 max-md:hidden">
      <ProcessCard
        imgSrc="/Rectangle1.svg"
        title="1. Analise Geral"
        text="Fazemos a analise do seu projecto"
      />
      <ProcessCard
        imgSrc="/Rectangle2.svg"
        title="2. Assinatura de Contrato"
        text="Fazemos o levantamento dos requisitos e entramos em um acordo."
      />
      <ProcessCard
        imgSrc="/Rectangle3.svg"
        title="3. Planeamento do projecto"
        text="Fazemos o plano de execução do projecto"
      />
      <ProcessCard
        imgSrc="/Rectangle4.svg"
        title="4. Design da estrutura"
        text="Vamos a elaboração do design."
      />
    </div>

    <div className="lg:hidden flex justify-start w-full flex-row gap-4 overflow-x-scroll">
      <ProcessCard
        imgSrc="/Rectangle1.svg"
        title="1. Analise Geral"
        text="Fazemos a analise do seu projecto"
      />
      <ProcessCard
        imgSrc="/Rectangle2.svg"
        title="2. Assinatura de Contrato"
        text="Fazemos o levantamento dos requisitos e entramos em um acordo."
      />
      <ProcessCard
        imgSrc="/Rectangle3.svg"
        title="3. Planeamento do projecto"
        text="Fazemos o plano de execução do projecto"
      />
      <ProcessCard
        imgSrc="/Rectangle4.svg"
        title="4. Design da estrutura"
        text="Vamos a elaboração do design."
      />
    </div>
  </div>
)

const TestimonialsSection = () => (
  <div className="flex flex-col gap-10 justify-center items-center w-full overflow-hidden">
    <SectionHeader title="Testemunhos" />
    <div className="flex flex-col gap-6">
      <Marquee className="[--duration:10s] ">
        <TestimonialCard
          title="John Doe"
          text="A Empresa tem uma qualidade inemaginavel. Nunca antes vista no mercado de arquitectura"
        />
        <TestimonialCard
          title="John Doe"
          text="A Empresa tem uma qualidade inemaginavel. Nunca antes vista no mercado de arquitectura"
        />
        <TestimonialCard
          title="John Doe"
          text="A Empresa tem uma qualidade inemaginavel. Nunca antes vista no mercado de arquitectura"
        />
        <TestimonialCard
          title="John Doe"
          text="A Empresa tem uma qualidade inemaginavel. Nunca antes vista no mercado de arquitectura"
        />
        <TestimonialCard
          title="John Doe"
          text="A Empresa tem uma qualidade inemaginavel. Nunca antes vista no mercado de arquitectura"
        />
      </Marquee>
      <Marquee className="hidden lg:flex" reverse>
        <TestimonialCard
          title="John Doe"
          className="w-[23.8rem]"
          text="A Empresa tem uma qualidade inemaginavel. Nunca antes vista no mercado de arquitectura"
        />
        <TestimonialCard
          title="John Doe"
          className="w-[23.8rem]"
          text="A Empresa tem uma qualidade inemaginavel. Nunca antes vista no mercado de arquitectura"
        />
        <TestimonialCard
          title="John Doe"
          className="w-[23.8rem]"
          text="A Empresa tem uma qualidade inemaginavel. Nunca antes vista no mercado de arquitectura"
        />
        <TestimonialCard
          title="John Doe"
          className="w-[23.8rem]"
          text="A Empresa tem uma qualidade inemaginavel. Nunca antes vista no mercado de arquitectura"
        />
        <TestimonialCard
          title="John Doe"
          className="w-[23.8rem]"
          text="A Empresa tem uma qualidade inemaginavel. Nunca antes vista no mercado de arquitectura"
        />
      </Marquee>
    </div>
  </div>
)

const ContactSection = () => (
  <div className="flex flex-col gap-10 justify-center items-center max-lg:border max-lg:rounded-2xl max-lg:pt-6">
    <div className="flex flex-col lg:grid lg:grid-cols-2 gap-6">
      <Form />
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
  return (
    <div>
      <div className="flex flex-col items-center h-full my-0 bg-white">
        <Navbar />
        <main className="mt-28 lg:mt-28 md:max-w-3xl max-w-[22rem] lg:max-w-7xl xl:max-w-[87rem] 2xl:max-w-[110rem] flex flex-col gap-16 lg:gap-32 ">
          <HeroSection />
          <InsightsSection />
          <ServicesSection />
          <ProjectsSection />
          <PartnersSection />
          <ProcessesSection />
          <TestimonialsSection />
          <ContactSection />
        </main>
      </div>
      <div>
        <Footer />
      </div>
    </div>
  )
}
