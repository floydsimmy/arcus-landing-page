import { notFound } from 'next/navigation';
import { Navbar } from '@/app/_components/navbar';
import { Footer } from '@/app/_components/footer';
import projectsData from '@/data/projects.json'; 

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
        <main className="mt-11 max-w-7xl flex flex-col">
          <h1 className="text-3xl font-bold">{project.title}</h1>
          <img src={project.imgSrc} alt={project.title} className="w-full h-auto" />
          <p className="mt-4 text-lg">{project.text}</p>
        </main>
      </div>
      <div>
        <Footer />
      </div>
    </div>
  );
}