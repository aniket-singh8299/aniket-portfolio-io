import { Project } from "@/types/project";

export const projectsData: Project[] = [
  {
    id: "1",
    title: " CV Parser with AI-Powered Prescreening",
    description:  
    "🤖 CV Parser with AI-Powered Prescreening: Built with Python, Crew AI, and Generative AI to extract key resume fields into a structured database.  Features a CV scoring engine that ranks candidates based on job description match and highlights the top 10.  Includes a prescreening chatbot to collect details like location, salary expectations, and experience.  Automatically initiates an AI-driven interview process for deeper candidate evaluation.",
    image: "/projects/Cv_parser.png",
    technologies: [
      "Python",
      "Crew AI",
      "Generative AI",
      "NeonDb",
      "Machine Learning",
      "Clustering",
      "AWS S3",
      "Sklearn",
      "Groq",
      "Langchain",
      "PCA",
      "Hierarchical Clustering",
      "K-means Clusering",
      "Text Embeddings",
      "Large Language Models",
      "OpenAi",
      "Prompt Engineering"

    ],
    category: "AI & Machine Learning",
    links: {
      github: "https://github.com/aniket-singh8299?tab=repositories"
        },
    featured: true,
  },
  {
    id: "2",
    title: "Price Monitoring with Competitor Analysis",
    description:
      "In 2024, I developed a price monitoring system that scraped product data from various e-commerce websites using Python libraries like BeautifulSoup and Selenium. I integrated Celery and Redis for background task processing, enabling periodic and real-time price tracking. The data was stored in a database for detailed competitor price analysis. This provided valuable insights into market trends and pricing strategies.",
    image: "/projects/Price-monitoring.png",
    technologies: [
      "Python",
      "Django",
      "Reactjs",
      "Celery",
      "Redis",
      "Selenium",
      "BeautifulSoup",
      "RESTAPI"    ],
    category: "Web Development",
    links: {
      github: "https://github.com/aniket-singh8299?tab=repositories",
    },
    featured: true,
  },
  {
    id: "3",
    title: "Suicidal Text Detection",
    description:
      "A deep learning-based system to detect suicidal ideation in text using NLP. Built in Python with Jupyter Notebooks, it uses models like Logistic Regression, CNN, LSTM, BERT, and ELECTRA. The project features data preprocessing, custom Word2Vec embeddings, EDA, and a Streamlit web interface. ELECTRA was selected as the best model based on F1 score.",
    image: "/projects/Suicidal-text-detection.png",
    technologies: [
      "Python",
      "Numpy",
      "Pandas",
      "Seaborn",
      "NLTK",
      "Word2Vec",
      "BERT",
      "ELECTRA",
      "Scikit-learn",
      "TensorFlow/Keras",
      "Streamlit"
    ],
    category: "AI & Machine Learning",
    links: {
      github: "https://github.com/aniket-singh8299/SUICIDAL-TEXT--DETECTION"
    },
    featured: true
  },
  {
    id: "4",
    title: "Blogs in Company website",
    description:
      "Developed a full-stack company website with a dynamic blog section using React.js and Tailwind CSS on the frontend, and Java Spring Boot on the backend. Implemented complete CRUD operations for blog management along with a secure admin panel for login, adding, updating, and deleting blogs. Assets are uploaded to AWS S3, and their URLs are stored in the database for efficient content delivery. The application ensures smooth content management, scalability, and a responsive user experience.",
    image: "/projects/Blog-website.jpg",
    technologies: [
      "Reactjs",
      "Tailwind CSS",
      "Java",
      "Spring Boot",
      "AWS S3",
      "AWS ECS",
      "Api Gateway",
      "REST API",
      "Web Development"
    ],
    category: "Web Development",
    links: {
      github: "https://github.com/aniket-singh8299?tab=repositories"
    },
    featured: false
  }
,  
  {
    id: "5",
    title: "SMS Spam Classifier",
    description:
      "A machine learning project that classifies SMS messages as spam or ham using NLP techniques. Built with Python, it includes text preprocessing, feature extraction with TF-IDF, and model training using algorithms like Naive Bayes and Logistic Regression. A Streamlit web app is also provided for real-time classification.",
    image: "/projects/Sms-spam-classifier.png", 
    technologies: [
      "Python",
      "Pandas",
      "Scikit-learn",
      "NLTK",
      "TF-IDF",
      "Naive Bayes",
      "Logistic Regression",
      "NLP",
      "Streamlit",
      "Text Classification",
      "Machine Learning"
    ],
    category: "AI & Machine Learning",
    links: {
      github: "https://github.com/aniket-singh8299/SMS-SPAM-CLASSIFIER" // Update this link if it's not the correct repo for the SMS project
    },
    featured: false
  },  
];
