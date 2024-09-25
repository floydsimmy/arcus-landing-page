"use client";
import { Phone } from "@phosphor-icons/react";
import { Button } from "../_components/button";
import { OrgStatementCard } from "../_components/cards/org-statment-card";
import { TeamCard } from "../_components/cards/team-card";
import { Footer } from "../_components/footer";
import { Navbar } from "../_components/navbar";
import Link from "next/link";
import { SectionHeader } from "../_components/section-header";

const HeroSection = () => (
  <div
    className="bg-white rounded-[2rem] min-h-[29.375rem] p-[4rem_2rem] flex items-center"
    style={{
      backgroundImage: "url('./back.png')",
      backgroundSize: "cover",
      backgroundPosition: "center",
    }}
  >
    <div className="max-w-[24.875rem] md:max-w-[40rem] flex flex-col gap-[0.625rem] text-white">
      <div className="flex items-center gap-[0.625rem]">
        <hr className="w-[5rem] border-t-[0.1875rem] border-slate-arc-400" />
        <span className="text-sm leading-[1.375rem]">Sobre nós</span>
      </div>
      <h1 className="text-3xl md:text-6xl font-bold">Arcus</h1>
      <p className="leading-[1.75rem] md:leading-8">
        Criada em 1998, a Arcus Consultores actua como uma empresa de
        consultoria de planeamento arquitetônico e urbano, engenharia
        multidisciplinar, gestão e desenvolvimento.
      </p>
      <div className="flex flex-col gap-[0.625rem] md:flex-row">
        <Button variant content="Peça a cotação do seu projeto" />
        <Button icon={<Phone weight="fill" />} content="Ligue-nos já" />
      </div>
    </div>
  </div>
);

const TeamSection = () => (
  <div>
    <SectionHeader title="Nossa equipe" description="" />
    <div className="grid grid-cols-1 lg:grid-cols-4 gap-6 ">
      <TeamCard title="Eduardo Nhate" text="Chefe de Projectos/Criação" />
      <TeamCard title="John Doe" text="Chefe de something" />
      <TeamCard
        title="Stela Nhantumbo"
        text="Chefe de Administração/Finanças"
      />
      <TeamCard
        title="Florêncio Chau"
        text="Coordenador de Orçamento e Fiscalização"
      />
    </div>
  </div>
);

const OrganazationSection = () => (
  <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
    <OrgStatementCard
      title="Missão"
      text="Trazer inovação e praticidade na elaboração e execução de projectos arquitetônicos, permitindo a obtenção de um resultado surpreendente."
    />
    <OrgStatementCard
      title="Visão"
      text="Ser referência na área de consultoria de planeamento arquitetônico e urbano, engenharia multidisciplinar, gestão e desenvolvimento."
    />
    <OrgStatementCard title="Valores">
      <ul className="mt-2 text-slate-arc-600 text-lg leading-7 list-disc list-inside">
        <li>Comprometimento;</li>
        <li>Honestidade;</li>
        <li>Valorização dos recursos humanos;</li>
        <li>Confiabilidade.</li>
      </ul>
    </OrgStatementCard>
  </div>
);

const AdditionalInfoSection = () => (
<div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-12">
  <div className="bg-white p-6 border rounded-2xl text-slate-arc-800">
    <h1 className="text-slate-arc-800 font-semibold text-2xl md:text-4xl">
      Informação adicional
    </h1>
    <p className="mt-4 text-lg">Saiba mais sobre nós.</p>
    <div className="mt-4 text-base font-medium leading-6">
      <p className="text-slate-arc-500">
        Telefone:{" "}
        <span className="text-slate-arc-900 font-bold"> +258 87 313 3920</span>
      </p>
      <p className="text-slate-arc-500">
        Localização:{" "}
        <Link href={"https://g.co/kgs/54yy8Fp"} className="text-slate-arc-900">
          Museu
        </Link>
      </p>
      <p className="text-slate-arc-500">
        Email: <span className="text-slate-arc-900">arcus@gmail.com</span>
      </p>
      <p className="text-slate-arc-500">
        Horário de funcionamento:{" "}
        <span className="text-slate-arc-900">
          09:00 às 17:00 de Segunda a Sexta-feira
        </span>
      </p>
    </div>
  </div>
  <div
    className="h-[13rem] bg-cover bg-center rounded-md"
    style={{ backgroundImage: "url('/images/Prancheta2.png')" }}
  ></div>
</div>

);

const AboutUs = () => {
  return (
    <>
      <div className="flex flex-col items-center h-full my-0 bg-white">
        <Navbar />
        <main className="mt-28 max-w-full px-9 flex flex-col gap-32 ">
          <HeroSection />
          <OrganazationSection />
          <TeamSection />
          <AdditionalInfoSection />
        </main>
      </div>
      <div>{/* <Footer /> */}</div>
    </>
  );
};

export default AboutUs;
