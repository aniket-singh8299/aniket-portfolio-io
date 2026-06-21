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
        "CrewAi",
        "RAG",
        "Agentic AI",
        "NLP",
        "Text Classification",
        "Sentiment Analysis"      ],
    },
    {
      name: "Cloud Architecture",
      Icon: Cloud,
      color: "bg-blue-500/10 text-blue-500",
      skills: [
        "AWS ECS",
        "AWS S3",
        "AWS EC2",
        "CI/CD",
        "Github Actions",
        "AWS Lambda",
        "AWS Cloudwatch",
        "Pinecone",
        "Redis",
        "Docker",
        "Git",     ],
    },
    {
      name: "Programming",
      Icon: Code,
      color: "bg-green-500/10 text-green-500",
      skills: [
        "Python",
        "JavaScript",
        "TensorFlow",
        "PyTorch",
        "SpaCy",
        "BERT",
        "LangChain",
        "LangGraph",
        "Hugging Face Transformers",
        "Scikit-Learn",
        "Pandas",
        "NumPy",
        "React.js",
        "Django"
      ],
    },
    {
      name: "Data Science",
      Icon: Terminal,
      color: "bg-orange-500/10 text-orange-500",
      skills: [
        "Feature Engineering",
        "Data preprocessing",
        "Predictive Modelling",
        "Classification",
        "Statistical Modeling",
        "Data Visualization"
      ],
    },
  ];
  