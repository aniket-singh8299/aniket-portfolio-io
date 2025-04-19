import { Brain, Cloud, Code, Terminal } from "lucide-react";
import { ElementType } from "react";

export interface SkillCategory {
  name: string;
  Icon: ElementType;
  skills: string[];
  color: string;
}

export const skillCategories: SkillCategory[] = [
  {
    name: "AI & Machine Learning",
    Icon: Brain,
    color: "bg-purple-500/10 text-purple-500",
    skills: [
      "Machine Learning",
      "Deep Learning",
      "Generative AI",
      "LLM Fine-Tuning",
    ],
  },
  {
    name: "Cloud Architecture",
    Icon: Cloud,
    color: "bg-blue-500/10 text-blue-500",
    skills: [
      "AWS ECS",
      "NeonDB",
      "Postgres",
      "Docker",
      "Git",
    ],
  },
  {
    name: "Programming",
    Icon: Code,
    color: "bg-green-500/10 text-green-500",
    skills: [
      "Python",
      "Java",
      "TensorFlow",
      "PyTorch",
      "LangChain",
      "Hugging Face Transformers",
      "Scikit-Learn",
      "CrewAi",
      "Pandas",
      "NumPy",
      "Spring Boot"
    ],
  },
  {
    name: "Data Science",
    Icon: Terminal,
    color: "bg-orange-500/10 text-orange-500",
    skills: [
      "Feature Engineering",
      "Dimensionality Reduction",
      "Clustering",
      "Statistical Modeling"
    ],
  },
];
