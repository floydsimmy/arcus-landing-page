import React from "react";
import Image from "next/image";

const AboutUs = () => {
  return (
    <>
      {/* Hero Section */}
      <div className="w-full lg:w-[109rem] h-[55rem] lg:h-[25rem] m-8 lg:m-20">
        <div
          className="relative h-auto lg:h-[25rem] p-8 bg-cover bg-center"
          style={{ backgroundImage: "url('/images/hero.jpg')" }}
        >
          <div className="relative flex flex-col lg:flex-row items-start lg:items-center gap-2 mb-8">
            <Image src="/images/Line.png" alt="line" width={108} height={58} />
            <h1 className="font-semibold text-white text-2xl lg:text-3xl leading-8">
              Sobre nós
            </h1>
          </div>

          <div className="text-white ">
            <h1 className="text-3xl lg:text-4xl font-bold mb-4">Arcus</h1>
            <p className="text-base lg:text-lg">
              Criada em 1998, a Arcus Consultores actua como uma empresa de
              consultoria de planeamento arquitetônico e urbano, engenharia
              multidisciplinar, gestão e desenvolvimento.
            </p>
          </div>

          <div className="flex flex-col lg:flex-row items-start gap-4 mt-8">
            <button className="px-6 py-2 bg-white text-black hover:bg-green-600 rounded-3xl">
              Peça a cotação do seu projeto
            </button>
            <button className="px-6 py-2 bg-blue-700 text-white rounded-3xl hover:bg-green-600">
              Ligue-nos já
            </button>
          </div>
        </div>
      </div>

      {/* Section with Cards */}
      <div className="w-full max-w-screen-xl mx-auto p-8 flex flex-col lg:flex-row items-center justify-between gap-4">
        {/* Card Missão */}
        <div className="bg-white w-full max-w-md h-[22rem] p-6 border-2 rounded-lg overflow-y-auto">
          <div className="mb-4">
            <button className="px-6 py-2 bg-blue-700 text-white rounded-3xl hover:bg-green-600 mb-4">
              Missão
            </button>
            <p className="mt-2 text-[#52525B] font-semibold text-xl">
              Trazer inovação e praticidade na elaboração e execução de projetos
              arquitetônicos, permitindo a obtenção de um resultado
              surpreendente.
            </p>
          </div>
        </div>

        {/* Card Visão */}
        <div className="bg-white w-full max-w-md h-[22rem] p-6 border-2 rounded-lg overflow-y-auto">
          <div className="mb-4">
            <button className="px-6 py-2 bg-blue-700 text-white rounded-3xl hover:bg-green-600 mb-4">
              Visão
            </button>
            <p className="mt-2 text-[#52525B] font-semibold text-xl">
              Ser referência na área de consultoria de planeamento arquitetônico
              e urbano, engenharia multidisciplinar, gestão e desenvolvimento,
              destacando-se positivamente nas suas áreas de atuação.
            </p>
          </div>
        </div>

        {/* Card Valores */}
        <div className="bg-white w-full max-w-md h-[22rem] p-6 border-2 rounded-lg overflow-y-auto">
          <div className="mb-4">
            <button className="px-6 py-2 bg-blue-700 text-white rounded-3xl hover:bg-green-600 mb-4">
              Valores
            </button>
            <div className="mt-2 text-[#52525B] font-semibold text-xl">
              <ul>
                <li>Comprometimento;</li>
                <li>Honestidade;</li>
                <li>Valorização dos recursos humanos;</li>
                <li>Confiabilidade.</li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      {/* Testimony */}
      <div className="w-full flex  justify-between  lg:w-[107rem] h-auto lg:h-[32rem]   lg:m-20">
        {/* Testimoy 1 */}
        <div
          className="relative w-full lg:w-[22.5rem] h-[32rem]  rounded-md"
          style={{
            backgroundImage: "url('/CivilEngineering.jpg')",
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        >
          <div className="absolute bottom-4 w-[18rem] h-auto bg-white rounded-lg flex items-center mx-8 p-4">
            <div className="flex-grow">
              <p className="font-semibold">Francisco Chau</p>
              <p>Coordenador de Orçamento e Fiscalização</p>
            </div>
            <Image
              src="/linkd.png"
              alt="quote"
              width={30}
              height={30}
              className="ml-4"
            />
          </div>
        </div>

        {/* Testimony 2 */}
        <div
          className="relative w-full lg:w-[22.5rem] h-[32rem]  rounded-md"
          style={{
            backgroundImage: "url('/CivilEngineering.jpg')",
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        >
          <div className="absolute bottom-4 w-[18rem] h-auto bg-white rounded-lg flex items-center mx-8 p-4">
            <div className="flex-grow">
              <p className="font-semibold">Francisco Chau</p>
              <p>Coordenador de Orçamento e Fiscalização</p>
            </div>
            <Image
              src="/linkd.png"
              alt="quote"
              width={30}
              height={30}
              className="ml-4"
            />
          </div>
        </div>

        <div
          className="relative w-full lg:w-[22.5rem] h-[32rem]  rounded-md"
          style={{
            backgroundImage: "url('/CivilEngineering.jpg')",
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        >
          <div className="absolute bottom-4 w-[18rem] h-auto bg-white rounded-lg flex items-center mx-8 p-4">
            <div className="flex-grow">
              <p className="font-semibold">Francisco Chau</p>
              <p>Coordenador de Orçamento e Fiscalização</p>
            </div>
            <Image
              src="/linkd.png"
              alt="quote"
              width={30}
              height={30}
              className="ml-4"
            />
          </div>
        </div>

        <div
          className="relative w-full lg:w-[22.5rem] h-[32rem]  rounded-md"
          style={{
            backgroundImage: "url('/CivilEngineering.jpg')",
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        >
          <div className="absolute bottom-4 w-[18rem] h-auto bg-white rounded-lg flex items-center mx-8 p-4">
            <div className="flex-grow">
              <p className="font-semibold">Francisco Chau</p>
              <p>Coordenador de Orçamento e Fiscalização</p>
            </div>
            <Image
              src="/linkd.png"
              alt="quote"
              width={30}
              height={30}
              className="ml-4"
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default AboutUs;
