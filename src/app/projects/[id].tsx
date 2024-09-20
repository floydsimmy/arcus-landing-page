// pages/projects/[id].tsx
import { GetStaticPaths, GetStaticProps } from 'next';
import { useRouter } from 'next/router';
import { Navbar } from '@/app/_components/navbar';
import { Footer } from '@/app/_components/footer';
import projectsData from '@/data/projects.json'; // Assume this JSON file contains your project data

interface Project {
  id: string;
  title: string;
  text: string;
  imgSrc: string;
}

interface ProjectProps {
  project: Project;
}

export default function ProjectDetails({ project }: ProjectProps) {
  const router = useRouter();

  if (router.isFallback) {
    return <div>Loading...</div>;
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

export const getStaticPaths: GetStaticPaths = async () => {
  const paths = projectsData.map((project: Project) => ({
    params: { id: project.id },
  }));

  return { paths, fallback: true };
};

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const project = projectsData.find((project: Project) => project.id === params?.id);

  if (!project) {
    return {
      notFound: true,
    };
  }

  return {
    props: {
      project,
    },
  };
};