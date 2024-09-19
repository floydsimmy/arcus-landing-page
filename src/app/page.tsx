'use client'
import { Phone } from "@phosphor-icons/react";
import { Button } from "./components/button";
import { InsightCard } from "./components/insight-card";
import Marquee from "./components/marque";
import { Navbar } from "./components/navbar";
import { PartnerCard } from "./components/partner-card";
import { ProcessCard } from "./components/process-card";
import { SectionHeader } from "./components/section-header";
import { ServiceCard } from "./components/service-card";
import { TestimonialCard } from "./components/testimonial-card";
import { Form } from "./components/form";
import Image from "next/image";
import { Footer } from "./components/footer";

const HeroSection = () => (
  <div className="bg-white rounded-[64px] h-[53.75rem] p-16 flex items-center" style={{ backgroundImage: "url('./back.png')", backgroundSize: 'cover', backgroundPosition: 'center' }}>
    <div className="max-w-[40rem] flex flex-col gap-3 text-white">
      <div className="flex items-center gap-3">
        <hr className="w-28 border-t-[3px] border-slate-arc-400 " />
        <span className="text-base leading-6">Arquitectura</span>
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
  <div className="flex gap-6">
    <InsightCard imgSrc="/list.svg" title="Projectos" text="+100" />
    <InsightCard imgSrc="/people.svg" title="Trabalhadores" text="+50" />
    <InsightCard imgSrc="/house.svg" title="Obras concluídas" text="+50" />
    <InsightCard imgSrc="/person.svg" title="Clientes" text="+100" />
  </div>
);

const ServicesSection = () => (
  <div className="flex flex-col gap-10 ">
    <SectionHeader title="Serviços" description="Oferecemos serviços onde o nosso maior valor é a qualidade e a satisfação do cliente " />
    <div className="flex gap-6">
      <ServiceCard imgSrc="/map.svg" title="Arquitectura" text="Nosso serviço de arquitetura combina criatividade e funcionalidade para dar vida a projetos únicos e personalizados." />
      <ServiceCard imgSrc="/map.svg" title="Planeamento Físico/Urbano" text="Nosso serviço de arquitetura combina criatividade e funcionalidade para dar vida a projetos únicos e personalizados." />
      <ServiceCard imgSrc="/map.svg" title="Engenharia Multidisciplinar" text="Nosso serviço de arquitetura combina criatividade e funcionalidade para dar vida a projetos únicos e personalizados." />
      <ServiceCard imgSrc="/map.svg" title="Fiscalização de obras" text="Nosso serviço de arquitetura combina criatividade e funcionalidade para dar vida a projetos únicos e personalizados." />
    </div>
  </div>
);

const ProjectsSection = () => (
  <div className="flex flex-col gap-10 ">
    <SectionHeader title="Projectos" description="Oferecemos serviços onde o nosso maior valor é a qualidade e a satisfação do cliente " />
    <div className="grid grid-cols-2 gap-4">
      <div className="grid grid-rows-2 gap-4">
        <div className="row-span-2">
          <img src="/project-card.png" alt="Merged" />
        </div>
      </div>
      <div className="grid grid-rows-2 gap-4">
        <div>
          <img src="/project-card1.png" alt="2" />
        </div>
        <div>
          <img src="/project-card2.png" alt="3" />
        </div>
      </div>
    </div>
  </div>
);

const PartnersSection = () => (
  <div className="flex flex-col gap-10 ">
    <SectionHeader title="Parceiros" description="Oferecemos serviços onde o nosso maior valor é a qualidade e a satisfação do cliente " />
    <Marquee>
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
  <div className="flex flex-col gap-10 ">
    <SectionHeader title="Processos" description="Etapas para a execução dos nossos projectos" />
    <div className="flex gap-6">
      <ProcessCard imgSrc="/Rectangle1.svg" title="1. Analise Geral" text="Fazemos a analise do seu projecto" />
      <ProcessCard imgSrc="/Rectangle2.svg" title="2. Assinatura de Contrato" text="Fazemos o levantamento dos requisitos e entramos em um acordo." />
      <ProcessCard imgSrc="/Rectangle3.svg" title="3. Planeamento do projecto" text="Fazemos o plano de execução do projecto" />
      <ProcessCard imgSrc="/Rectangle4.svg" title="4. Design da estrutura" text="Vamos a elaboração do design." />
    </div>
  </div>
);

const TestimonialsSection = () => (
  <div className="flex flex-col gap-10 ">
    <SectionHeader title="Testemunhos" />
    <div className="flex flex-col gap-6">
      <Marquee className="[--duration:10s]">
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
  <div className="flex flex-col gap-10 ">
    
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
        <div className="px-20 pt-4">
          <Navbar />
        </div>
        <main className="mt-11 max-w-7xl flex flex-col gap-32 ">
          <HeroSection />
          <InsightsSection />
          <ServicesSection />
          <ProjectsSection />
          <PartnersSection />
          <ProcessesSection />
          <TestimonialsSection />
          <ContactSection/>
        </main>
      </div>
      <div>
        <Footer/>
      </div>
    </div>
  );
}


