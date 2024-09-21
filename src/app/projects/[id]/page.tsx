import { Footer } from '@/app/_components/footer';
import { Navbar } from '@/app/_components/navbar';
import { SectionHeader } from '@/app/_components/section-header';
import projectsData from '@/data/projects.json';
import Image from 'next/image';
import { notFound } from 'next/navigation';

interface Project {
  id: string;
  title: string;
  text: string;
  imgSrc: string;
}

interface ProjectProps {
  params: { id: string };
}

export async function generateStaticParams() {
  return projectsData.map((project: Project) => ({
    id: project.id,
  }));
}

export default function ProjectDetails({ params }: ProjectProps) {
  const project = projectsData.find((project: Project) => project.id === params.id);

  if (!project) {
    return notFound();
  }

  return (
    <div>
      <div className="flex flex-col items-center h-full my-0 bg-white">
        <div className="px-20 pt-4">
          <Navbar />
        </div>
        <main className="mt-11 max-w-7xl ">
          <div className='flex gap-8'>
            <div className='w-[50rem] '>
              <h1 className="text-3xl font-bold text-blue-arc-900">{project.title}</h1>
              <Image src={project.imgSrc} width={800} height={512} alt={project.title} />
            </div>
            <div className='flex flex-col w-[48rem] gap-8'>
              <div>
                <h2 className='font-bold leading-7 text-xl'>Introdução</h2>
                {/* <p className="mt-4 text-lg">{project.text}</p> */}
                <p className='text-xl leading-7'>A criação da Escola Primária 12 de Outubro foi um processo estratégico que visou atender à necessidade de educação de qualidade na comunidade local. O projeto envolveu uma série de etapas fundamentais, desde a identificação da necessidade até a implementação e abertura da escola. Abaixo, está o percurso detalhado que levou à concretização deste importante projeto educacional.</p>
              </div>
              <div>
                <h2 className='font-bold leading-7 text-xl'>Identificação da Necessidade de Educação</h2>
                <p className='text-xl leading-7'>A criação da Escola Primária 12 de Outubro foi um processo estratégico que visou atender à necessidade de educação de qualidade na comunidade local. O projeto envolveu uma série de etapas fundamentais, desde a identificação da necessidade até a implementação e abertura da escola. Abaixo, está o percurso detalhado que levou à concretização deste importante projeto educacional.</p>
              </div>
              <div>
                <h2 className='font-bold leading-7 text-xl'>Planejamento do Projeto</h2>
                <p className='text-xl leading-7'>Após a identificação da necessidade, foi criado um plano detalhado para a criação da escola. Esse planejamento envolveu a definição clara da missão e da visão da instituição, que se centraram na formação de crianças com uma base educacional sólida e valores éticos. Além disso, foram feitos estudos para determinar o número de turmas, o currículo a ser seguido, os recursos didáticos necessários, e a estrutura física ideal para abrigar as atividades escolares. O plano também incluiu a elaboração de um cronograma para a construção e implementação gradual das atividades.</p>
              </div>
            </div>
          </div>
          <aside className='gap-10 mb-24'>
            <SectionHeader title="Galeria" />
            <div className="grid grid-cols-2 grid-rows-2 gap-4">
              <div className="col-span-1 row-span-1">
                <Image src="/galeria1.svg" width={788} height={522} alt="Image 1" />
              </div>
              <div className="col-span-1 row-span-1">
                <Image src="/galeria1.svg"  width={788} height={522} alt="Image 2" />
              </div>
              <div className="col-span-2 row-span-1">
                <Image src="/galeria2.svg" width={1600} height={522} alt="Image 3" />
              </div>
            </div>
          </aside>
        </main>
      </div>
      <div>
        <Footer />
      </div>
    </div>
  );
}