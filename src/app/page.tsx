'use client'
import { Phone } from "@phosphor-icons/react";
import { Button } from "./components/button";
import { Navbar } from "./components/navbar";
import { InsightCard } from "./components/insight-card";

export default function Home() {
  return (
    <>
    <div className="px-16 border h-full mx-auto my-0 bg-white">
      <div className="px-20 pt-4">
        <Navbar />
      </div>
    
      <main className="mt-11 max-w-7xl ">
        <div className="bg-white mb-10 rounded-[64px] h-[53.75rem] p-16 flex items-center" style={{ backgroundImage: "url('./back.png')", backgroundSize: 'cover', backgroundPosition: 'center' }}>

          <div className="max-w-[40rem] flex flex-col gap-3 text-white">
            <div className="flex items-center gap-3">
              <hr className="w-28 border-t-[3px] border-slate-arc-400 " />
              <span>Arquitectura</span>
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
      </main>
    </div>
    <div className="pt-10">
    <div className="flex gap-6 px-16 ">
          <InsightCard imgSrc="/list.svg" title="Projectos" text="+100" />
          <InsightCard imgSrc="/people.svg" title="Trabalhadores" text="+50" />
          <InsightCard imgSrc="/house.svg" title="Obras concluídas" text="+50" />
          <InsightCard imgSrc="/person.svg" title="Clientes" text="+100" />
        </div>
    </div>
    </>
  );
}
