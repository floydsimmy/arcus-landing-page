import { Navbar } from "@/components/navbar";

export default function Projects() {
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
          <ContactSection />
        </main>
      </div>
      <div>
        <Footer />
      </div>
    </div>
  );
}