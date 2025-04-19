import { Hero } from "@/components/sections/hero";
import { About } from "@/components/sections/about";
import { FeaturedProjects } from "@/components/sections/featured-projects";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Aniket Singh - Data Scientist ",
  description:
    "Portfolio of Aniket Singh, Data Scientist and Cloud Solutions Architect specializing in AI/ML solutions, GenAI innovation, and cloud-native architectures. 6x AWS Certified professional with expertise in machine learning and scalable cloud solutions.",
  openGraph: {
    type: 'website',
    title: 'Aniket Singh - Data Scientist & Full Stack Developer',
    description: 'Portfolio of Aniket Singh, a Data Scientist and Cloud Solutions Architect specializing in AI/ML solutions, GenAI innovation, and cloud-native architectures.',
    images: [{
      url: 'headshot/profile-pic.png',
      width: 1200,
      height: 630,
      alt: 'Aniket Singh - Portfolio Hero Section'
    }]
  }
};

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col">
      <Hero />
      <About />
      <FeaturedProjects />
    </main>
  );
}
