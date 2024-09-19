'use client'
import { Phone } from "@phosphor-icons/react";
import Image from "next/image";
import { Button } from "../components/button";
import { OrgStatementCard } from "../components/org-statment-card";

const HeroSection = () => (
  <div className="bg-white rounded-[64px] h-[53.75rem] p-16 flex items-center" style={{ backgroundImage: "url('./back.png')", backgroundSize: 'cover', backgroundPosition: 'center' }}>
    <div className="max-w-[40rem] flex flex-col gap-3 text-white">
      <div className="flex items-center gap-3">
        <hr className="w-28 border-t-[3px] border-slate-arc-400 " />
        <span className="text-base leading-6">Sobre nós</span>
      </div>
      <h1 className="text-6xl font-bold">Arcus</h1>
      <p className="leading-8">
        Criada em 1998, a Arcus Consultores actua como uma empresa de
        consultoria de planeamento arquitetônico e urbano, engenharia
        multidisciplinar, gestão e desenvolvimento.
      </p>
      <div className="flex gap-3">
        <Button variant content="Peça a cotação do seu projeto" />
        <Button icon={<Phone weight="fill" />} content="Ligue-nos já" />
      </div>
    </div>
  </div>
);

const AboutUs = () => {
  return (
    <div className="w-full max-w-screen-xl mx-auto p-4 lg:py-12">

      <HeroSection />

      {/* Cards Section */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mt-12">
        {/* Card Missão */}
        <OrgStatementCard title="Missão" text="Trazer inovação e praticidade na elaboração e execução de projectos arquitetônicos, permitindo a obtenção de um resultado surpreendente. " />
        <OrgStatementCard title="Visão" text="Ser referência na área de consultoria de planeamento arquitetônico e
            urbano, engenharia multidisciplinar, gestão e desenvolvimento. "/>
        <OrgStatementCard title="Valores">
            <ul className="mt-2 text-slate-arc-600 text-lg leading-7 list-disc list-inside">
            <li>Comprometimento;</li>
            <li>Honestidade;</li>
            <li>Valorização dos recursos humanos;</li>
            <li>Confiabilidade.</li>
            </ul>
        </OrgStatementCard>

      </div>

      {/* Testimony Section */}
      <div className="grid grid-cols-1 lg:grid-cols-4 gap-6 mt-12">
        {/* Testimony 1 */}
        <div
          className="relative h-[24rem] bg-cover bg-center rounded-md"
          style={{ backgroundImage: "url('/CivilEngineering.jpg')" }}
        >
          <div className="absolute ml-8 bottom-4 w-3/4 bg-white rounded-lg p-4 mx-auto">
            <p className="font-semibold">Francisco Chau</p>
            <p>Coordenador de Orçamento e Fiscalização</p>
            <Image src="/linkd.png" alt="quote" width={30} height={30} />
          </div>
        </div>

        {/* Testimony 2 */}
        <div
          className="relative h-[24rem] bg-cover bg-center rounded-md"
          style={{ backgroundImage: "url('/CivilEngineering.jpg')" }}
        >
          <div className="absolute ml-8 bottom-4 w-3/4 bg-white rounded-lg p-4 mx-auto">
            <p className="font-semibold">John Doe</p>
            <p>Chefe de something</p>
            <Image src="/linkd.png" alt="quote" width={30} height={30} />
          </div>
        </div>

        {/* Testimony 3 */}
        <div
          className="relative h-[24rem] bg-cover bg-center rounded-md"
          style={{ backgroundImage: "url('/CivilEngineering.jpg')" }}
        >
          <div className="absolute ml-8 bottom-4 w-3/4 bg-white rounded-lg p-4 mx-auto">
            <p className="font-semibold">Stela Nhantumbo</p>
            <p>Chefe de Administração/Finanças</p>
            <Image src="/linkd.png" alt="quote" width={30} height={30} />
          </div>
        </div>

        {/* Testimony 4 */}
        <div
          className="relative h-[24rem] bg-cover bg-center rounded-md"
          style={{ backgroundImage: "url('/CivilEngineering.jpg')" }}
        >
          <div className="absolute ml-8 bottom-4 w-3/4 bg-white rounded-lg p-4 mx-auto">
            <p className="font-semibold">Eduardo Nhate</p>
            <p>Chefe de Projectos/Criação</p>
            <Image src="/linkd.png" alt="quote" width={30} height={30} />
          </div>
        </div>
      </div>

      {/* Additional Information Section */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mt-12">
        <div className="bg-white p-6 border rounded-lg shadow-lg">
          <h1 className="font-semibold text-2xl">Informação adicional</h1>
          <p className="mt-4">Saiba mais sobre nós.</p>
          <div className="mt-4">
            <p>
              Telefone: <strong>+258 84 8821345</strong>
            </p>
            <p>
              Localização: <strong>Museu</strong>
            </p>
            <p>
              Email: <strong>arcus@gmail.com</strong>
            </p>
            <p>
              Horário de funcionamento:{" "}
              <strong>09:00 às 17:00 de Segunda a Sexta-feira</strong>
            </p>
          </div>
        </div>
        <div
          className="h-[13rem] bg-cover bg-center rounded-md "
          style={{
            backgroundImage: "url('/images/Prancheta 1 cópia 8logo.png')",
          }}
        ></div>
      </div>
    </div>
  );
};

export default AboutUs;
