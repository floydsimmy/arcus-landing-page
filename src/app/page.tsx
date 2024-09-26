'use client'
import projectsData from "@/data/projects.json";
import { ArrowRight, Phone } from "@phosphor-icons/react";
import Image from "next/image";
import { Button } from "./_components/button";
import { InsightCard } from "./_components/cards/insight-card";
import { PartnerCard } from "./_components/cards/partner-card";
import { ProcessCard } from "./_components/cards/process-card";
import { ServiceCard } from "./_components/cards/service-card";
import { TestimonialCard } from "./_components/cards/testimonial-card";
import { Footer } from "./_components/footer";
import { Form } from "./_components/form";
import Marquee from "./_components/marque";
import { Navbar } from "./_components/navbar";
import { SectionHeader } from "./_components/section-header";

const HeroSection = () => (
  <div className="bg-white rounded-[64px] h-[53.75rem] p-16 flex items-center w-full" style={{ backgroundImage: "url('./back.png')", backgroundSize: 'cover', backgroundPosition: 'center' }}>
    <div className="max-w-[40rem] flex flex-col gap-3 text-white">
      <div className="flex items-center gap-3">
        <hr className="w-28 border-t-[3px] border-slate-arc-400 " />
        <span className="text-base leading-6">Empresa de Consultoria</span>
      </div>
      <h1 className="text-6xl font-bold">Construindo o futuro com solidez, confiança e inovação.</h1>
      <p className="leading-8">
        Transformamos projetos em realidade, com dedicação e excelência em cada detalhe. Seja para grandes obras ou pequenas reformas, estamos prontos para concretizar suas ideias.
      </p>
      <div className="flex gap-3">
        <Button variant content="Peça a cotação do seu projeto" />
        <Button icon={<Phone weight="fill" />} content="Ligue-nos já" />
      </div>
    </div>
  </div>
);

const InsightsSection = () => (
  <div className="flex flex-col lg:flex-row gap-6 justify-center items-center w-full">
    <InsightCard imgSrc="/list.svg" title="Projectos" text="+100" />
    <InsightCard imgSrc="/people.svg" title="Trabalhadores" text="+50" />
    <InsightCard imgSrc="/house.svg" title="Obras concluídas" text="+50" />
    <InsightCard imgSrc="/person.svg" title="Clientes" text="+100" />
  </div>
);

const ServicesSection = () => (
  <div className="flex flex-col gap-10 justify-center items-center w-full overflow-hidden">
    <SectionHeader title="Serviços" description="Oferecemos serviços onde o nosso maior valor é a qualidade e a satisfação do cliente " />

    <Marquee className="lg:flex gap-6 ">
      <ServiceCard imgSrc="/map.svg" title="Arquitectura" text="Nosso serviço de arquitetura combina criatividade e funcionalidade para dar vida a projetos únicos e personalizados." />
      <ServiceCard imgSrc="/map.svg" title="Planeamento Físico/Urbano" text="Nosso serviço de arquitetura combina criatividade e funcionalidade para dar vida a projetos únicos e personalizados." />
      <ServiceCard imgSrc="/map.svg" title="Engenharia Multidisciplinar" text="Nosso serviço de arquitetura combina criatividade e funcionalidade para dar vida a projetos únicos e personalizados." />
      <ServiceCard imgSrc="/map.svg" title="Fiscalização de obras" text="Nosso serviço de arquitetura combina criatividade e funcionalidade para dar vida a projetos únicos e personalizados." />
      <ServiceCard imgSrc="/map.svg" title="Avaliação Patrimonial" text="Nosso serviço de arquitetura combina criatividade e funcionalidade para dar vida a projetos únicos e personalizados." />
      <ServiceCard imgSrc="/map.svg" title="Estudos do impacto ambiental" text="Nosso serviço de arquitetura combina criatividade e funcionalidade para dar vida a projetos únicos e personalizados." />
    </Marquee>

  </div>
);

const ProjectsSection = () => (
  <div className="flex flex-col gap-10 justify-center items-center w-full">
    <SectionHeader title="Projectos" description="Oferecemos serviços onde o nosso maior valor é a qualidade e a satisfação do cliente " />
    <div className="grid grid-cols-2 gap-4 h-[48rem]">
      <div className="grid grid-rows-2 gap-4">
        <div className="relative text-white flex flex-col justify-center row-span-2 rounded-[4rem] px-8 bg-cover bg-center group " style={{ backgroundImage: `url(${projectsData[0].imgSrc} )` }}>
          <div className="absolute inset-0 bg-black/90 opacity-0 group-hover:opacity-50 transition-opacity duration-300 rounded-[4rem]"></div>
          <h3 className="z-10 text-3xl font-medium leading-[2.81rem] opacity-0 group-hover:opacity-100 transition-opacity duration-300">
            {projectsData[0].title}
          </h3>
          <p className=" z-10 opacity-0 group-hover:opacity-100 transition-opacity duration-300">{projectsData[0].text}</p>
        </div>
      </div>
      <div className="grid grid-rows-2 gap-4">
        <div className="relative text-white flex flex-col justify-center bg-cover bg-center group h-full rounded-[4rem] px-8" style={{ backgroundImage: `url(${projectsData[1].imgSrc} )` }}>
          <h3 className="z-10 text-3xl font-medium leading-[2.81rem] opacity-0 group-hover:opacity-100 transition-opacity duration-300">
            {projectsData[1].title}
          </h3>
          <p className=" z-10 opacity-0 group-hover:opacity-100 transition-opacity duration-300">{projectsData[1].text}</p>
        </div>
        <div className="relative text-white flex flex-col justify-center bg-cover bg-center group rounded-[4rem] px-8" style={{ backgroundImage: `url(${projectsData[2].imgSrc} )` }}>
          <h3 className="z-10 text-3xl font-medium leading-[2.81rem] opacity-0 group-hover:opacity-100 transition-opacity duration-300">
            {projectsData[2].title}
          </h3>
          <p className=" z-10 opacity-0 group-hover:opacity-100 transition-opacity duration-300">{projectsData[2].text}</p>
        </div>
      </div>
    </div>
    <div className="flex justify-end w-full"><Button icon={<ArrowRight weight="light" />} content="Ver projectos" />
    </div>
  </div>
);

const PartnersSection = () => (
  <div className="flex flex-col gap-10 justify-center items-center w-full overflow-hidden">
    <SectionHeader title="Parceiros" description="Oferecemos serviços onde o nosso maior valor é a qualidade e a satisfação do cliente " />
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
);

const ProcessesSection = () => (
  <div className="flex flex-col gap-10 justify-center items-center w-full">
    <SectionHeader title="Processos" description="Etapas para a execução dos nossos projectos" />
    <div className="flex gap-6 ">
      <ProcessCard imgSrc="/Rectangle1.svg" title="1. Analise Geral" text="Fazemos a analise do seu projecto" />
      <ProcessCard imgSrc="/Rectangle2.svg" title="2. Assinatura de Contrato" text="Fazemos o levantamento dos requisitos e entramos em um acordo." />
      <ProcessCard imgSrc="/Rectangle3.svg" title="3. Planeamento do projecto" text="Fazemos o plano de execução do projecto" />
      <ProcessCard imgSrc="/Rectangle4.svg" title="4. Design da estrutura" text="Vamos a elaboração do design." />
    </div>
  </div>
);

const TestimonialsSection = () => (
  <div className="flex flex-col gap-10 justify-center items-center w-full overflow-hidden">
    <SectionHeader title="Testemunhos" />
    <div className="flex flex-col gap-6">
      <Marquee className="[--duration:10s] ">
        <TestimonialCard title="John Doe" text="A Empresa tem uma qualidade inemaginavel. Nunca antes vista no mercado de arquitectura" />
        <TestimonialCard title="John Doe" text="A Empresa tem uma qualidade inemaginavel. Nunca antes vista no mercado de arquitectura" />
        <TestimonialCard title="John Doe" text="A Empresa tem uma qualidade inemaginavel. Nunca antes vista no mercado de arquitectura" />
        <TestimonialCard title="John Doe" text="A Empresa tem uma qualidade inemaginavel. Nunca antes vista no mercado de arquitectura" />
        <TestimonialCard title="John Doe" text="A Empresa tem uma qualidade inemaginavel. Nunca antes vista no mercado de arquitectura" />
      </Marquee>
      <Marquee reverse>
        <TestimonialCard title="John Doe" className="w-[23.8rem]" text="A Empresa tem uma qualidade inemaginavel. Nunca antes vista no mercado de arquitectura" />
        <TestimonialCard title="John Doe" className="w-[23.8rem]" text="A Empresa tem uma qualidade inemaginavel. Nunca antes vista no mercado de arquitectura" />
        <TestimonialCard title="John Doe" className="w-[23.8rem]" text="A Empresa tem uma qualidade inemaginavel. Nunca antes vista no mercado de arquitectura" />
        <TestimonialCard title="John Doe" className="w-[23.8rem]" text="A Empresa tem uma qualidade inemaginavel. Nunca antes vista no mercado de arquitectura" />
        <TestimonialCard title="John Doe" className="w-[23.8rem]" text="A Empresa tem uma qualidade inemaginavel. Nunca antes vista no mercado de arquitectura" />
      </Marquee>
    </div>
  </div>
);

const ContactSection = () => (
  <div className="flex flex-col gap-10 justify-center items-center">

    <div className="grid grid-cols-2 gap-6">
      <Form />
      <Image src={"./contact.svg"} width={780} height={800} alt="" />
    </div>
  </div>
);

export default function Home() {
  return (
    <div>
      <div className="flex flex-col items-center h-full my-0 bg-white">
        <Navbar />
        <main className="mt-28 max-w-[24.9rem] lg:max-w-7xl pt-12 px-9 flex items-center justify-center flex-col gap-32 ">
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
  );
}


