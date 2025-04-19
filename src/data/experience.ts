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
    startDate: "Jan 2025",
    endDate: "Present",
    achievements: [
      {
        text: "Focused on analyzing large datasets, building predictive models, and optimizing machine learning algorithms.",
      },
      {
        text: "Contributing to AI-driven solutions to improve business processes, decision-making, and forecasting accuracy.",
      },
    ],
    skills: [
      { name: "Python" },
      { name: "Machine Learning" },
      { name: "Data Analysis" },
      { name: "Forecasting" },
    ],
    isRemote: false,
  },
  {
    title: "Full Stack Developer",
    company: "VelocitAi Digital Pvt Ltd",
    location: "Gurugram, Haryana",
    startDate: "June 2024",
    endDate: "Dec 2024",
    achievements: [
      {
        text: "Developed full-stack web applications using Spring Boot and ReactJS.",
      },
      {
        text: "Implemented blogs and whitepapers on web technologies.",
      },
      {
        text: "Created a price monitoring system for competitor analysis across e-commerce platforms.",
      },
    ],
    skills: [
      { name: "Spring Boot" },
      { name: "ReactJS" },
      { name: "Web Development" },
      { name: "Python" },
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
