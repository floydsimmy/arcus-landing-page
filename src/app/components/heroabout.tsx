import React from "react";
import Image from "next/image";

const Heroabout = () => {
  return (
    <div className="w-full max-w-screen-xl mx-auto p-4 lg:py-12">
      {/* Hero Section */}
      <div
        className="relative h-auto lg:h-[25rem] p-6 bg-cover bg-center"
        style={{ backgroundImage: "url('/images/hero.jpg')" }}
      >
        <div className="relative flex flex-col lg:flex-row items-start lg:items-center gap-2 mb-6">
          <Image src="/images/Line.png" alt="line" width={108} height={58} />
          <h1 className="font-semibold text-white text-2xl lg:text-3xl leading-8">
            Sobre nós
          </h1>
        </div>

        <div className="text-white">
          <h1 className="text-3xl lg:text-4xl font-bold mb-4">Arcus</h1>
          <p className="text-base lg:text-lg max-w-lg">
            Criada em 1998, a Arcus Consultores actua como uma empresa de
            consultoria de planeamento arquitetônico e urbano, engenharia
            multidisciplinar, gestão e desenvolvimento.
          </p>
        </div>

        <div className="flex flex-col lg:flex-row items-start lg:items-center gap-4 mt-6">
          <button className="px-6 py-2 bg-white text-black hover:bg-green-600 rounded-3xl transition duration-300">
            Peça a cotação do seu projeto
          </button>
          <button className="px-6 py-2 bg-blue-700 text-white hover:bg-green-600 rounded-3xl transition duration-300">
            Ligue-nos já
          </button>
        </div>
      </div>

      {/* Cards Section */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mt-12">
        {/* Card Missão */}
        <div className="bg-white p-6 border rounded-lg shadow-lg">
          <button className="px-6 py-2 bg-blue-700 text-white rounded-3xl hover:bg-green-600 mb-4">
            Missão
          </button>
          <p className="mt-2 text-[#52525B] font-semibold text-lg">
            Trazer inovação e praticidade na elaboração e execução de projetos
            arquitetônicos, permitindo a obtenção de um resultado surpreendente.
          </p>
        </div>

        {/* Card Visão */}
        <div className="bg-white p-6 border rounded-lg shadow-lg">
          <button className="px-6 py-2 bg-blue-700 text-white rounded-3xl hover:bg-green-600 mb-4">
            Visão
          </button>
          <p className="mt-2 text-[#52525B] font-semibold text-lg">
            Ser referência na área de consultoria de planeamento arquitetônico e
            urbano, engenharia multidisciplinar, gestão e desenvolvimento.
          </p>
        </div>

        {/* Card Valores */}
        <div className="bg-white p-6 border rounded-lg shadow-lg">
          <button className="px-6 py-2 bg-blue-700 text-white rounded-3xl hover:bg-green-600 mb-4">
            Valores
          </button>
          <ul className="mt-2 text-[#52525B] font-semibold text-lg">
            <li>Comprometimento;</li>
            <li>Honestidade;</li>
            <li>Valorização dos recursos humanos;</li>
            <li>Confiabilidade.</li>
          </ul>
        </div>
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

export default Heroabout;
