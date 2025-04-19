import { Metadata } from "next";
import { AboutDetail } from "@/components/sections/about-detail";

export const metadata: Metadata = {
  title: "About - AniKet SiNgh | Data Scientist & Python Backend Developer",
  description:
    "Learn more about AniKet SiNgh , a Data Scientist and Java Full Stack Developer, specializing in AI/ML solutions .",
};

export default function AboutPage() {
  return (
    <main className="flex min-h-screen flex-col">
      <AboutDetail />
    </main>
  );
}
