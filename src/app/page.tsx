'use client'
import { EnvelopeSimple } from "@phosphor-icons/react";
import { Button } from "./components/button";
import { Navbar } from "./components/navbar";

export default function Home() {
  return (
    <div className="px-16 h-screen m-auto">
      <Navbar />
      <main>
        <div>
          <hr className="w-4" />
          <span>Arquitectura</span>
        </div>
        <h1>Construindo o futuro com solidez, confiança e inovação.</h1>
        <p>
          Transformamos projetos em realidade, com dedicação e excelência em cada detalhe. Seja para grandes obras ou pequenas reformas, estamos prontos para concretizar suas ideias.
        </p>
        <div>
          <Button content="Contacte-nos">
            <EnvelopeSimple />
          </Button>
          <Button content="Peça a cotação do seu projeto" />
        </div>
      </main>
    </div>
  );
}
