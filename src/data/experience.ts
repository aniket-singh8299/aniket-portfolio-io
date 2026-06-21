export interface Achievement {
  text: string;
}

export interface Skill {
  name: string;
}

export interface Experience {
  title: string;
  company: string;
  location: string;
  startDate: string;
  endDate: string;
  isRemote?: boolean;
  achievements: Achievement[];
  skills: Skill[];
}

export const experiences: Experience[] = [
  {
    title: "Data Scientist",
    company: "VelocitAi Digital Pvt Ltd",
    location: "Gurugram, Haryana",
    startDate: "Jun 2024",
    endDate: "Present",
    achievements: [
  {
    text: "Built a voice-enabled Conversational AI system for real-time, multi-round interviews tailored to candidates and job roles.",
  },
  {
    text: "Developed a CV/JD parsing and fitment scoring pipeline, improving candidate-job match accuracy by 30% and reducing manual screening effort by 50%.",
  },
  {
    text: "Launched MVP for AI-based hiring platform and enabled live interview workflows with automated feedback and analytics pipelines.",
  },
],
    skills: [
      { name: "Python" },
      { name: "Machine Learning" },
      { name: "Deep Learning" },
      { name: "Generative Ai" },
      { name: "RAG" },
      { name: "Agentic AI" },
      { name: "LangGraph" },
      { name: "LangChain" },
      { name: "LLMs" },
      { name: "AWS" }, 






    ],
    isRemote: false,
  },
  {
    title: "Artificial Intelligence Intern",
    company: "Samsung Innovation with MSME",
    location: "New Delhi",
    startDate: "May 2023",
    endDate: "Sept 2023",
    achievements: [
      {
        text: "Implemented SMS Spam Classifier and Suicidal Text Detection using machine learning.",
      },
      {
        text: "Developed and deployed high-accuracy models for text classification and sentiment analysis.",
      },
    ],
    skills: [
      { name: "Python" },
      { name: "Scikit-learn" },
      { name: "NLP" },
      { name: "Sentiment Analysis" },
      { name: "Deep Learning" },
      { name: "Macine Learning" },
      { name: "Matplotlib" },
      { name: "Pandas" },
      { name: "Numpy" }
    ],
    isRemote: false,
  },
];



export const previousExperiences: Experience[] = [
  {
    title: "Machine Learning Intern",
    company: "Prodigy Infotech",
    location: "Wfh",
    startDate: "Jun 2024",
    endDate: "July 2024",
    achievements: [],
    skills: [],
  },
  {
    title: "Python Developer",
    company: "NSIC pvt Ltd.",
    location: "New Delhi",
    startDate: "April 2023",
    endDate: "Jun 2023",
    achievements: [],
    skills: [],
  }
];
