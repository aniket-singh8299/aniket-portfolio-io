export interface EarlyAdopterBadge {
  name: string;
  image: string;
  link: string;
  issuedDate: string;
}

export interface Certification {
  name: string;
  image: string;
  link: string;
  issuedBy: string;
  issuedDate: string;
  earlyAdopterBadge?: EarlyAdopterBadge;
}

export const certifications: Certification[] = [
    {
      name: "Artificial Intelligence - Samsung with MSME",
      image: "/certifications/samsung-msme-ai.png",
      link: "https://www.udemy.com/certificate/UC-c0e8dc21-8e8b-4f6e-9d05-5d109a9523cd/",
      issuedBy: "Samsung Innovation with MSME",
      issuedDate: "September 2023",
    },
    {
      name: "Python - NSIC with MSME",
      image: "/certifications/NSIC-logo.jpg",
      link: "https://www.udemy.com/certificate/UC-b732c216-80d9-448c-b5fd-42b4aa7ca0ee/",
      issuedBy: "NSIC with MSME",
      issuedDate: "August 2023",
    },
    {
      name: "JAVA Full Stack Developer - JSpiders",
      image: "/certifications/jspiders-java.png",
      link: "", // Add a certificate URL here if available
      issuedBy: "JSpiders",
      issuedDate: "2023", // Update with specific month if known
    },
  
  {
    name: "AWS SysOps Administrator Associate",
    image: "/certifications/aws-soa.png",
    link: "https://www.credly.com/badges/0c2d762d-d8e0-44f8-b135-6108647a8f1d/public_url",
    issuedBy: "Amazon Web Services",
    issuedDate: "November 26th, 2024",
  },
  {
    name: "ISRO Geoprocessing with Python",
    image: "/certifications/Isro.png",
    link: "https://drive.google.com/file/d/1moWb7jGcy0GyH-IkdyJ4T8oOhwhvUwgc/view?usp=sharing",
    issuedBy: "ISRO",
    issuedDate: "February 09th 2022",
  },
  {
    name: "AICTE AI ML Eduskills Internship",
    image: "/certifications/Aws-eduskills.png",
    link: "https://drive.google.com/file/d/1uqWYUs85nwwffszOt-vlhNOqmoYYRwtf/view?usp=sharing",
    issuedBy: "Amazon Academy",
    issuedDate: "Feb, 2023",
  },
  {
    name: "AWS AI Practitioner",
    image: "/certifications/aws-aip.png",
    link: "https://www.credly.com/badges/a27f942f-9e21-46b9-b319-9fa2f19d7891/public_url",
    issuedBy: "Amazon Web Services",
    issuedDate: "November 21st, 2024",
    earlyAdopterBadge: {
      name: "AWS Certified AI Practitioner Early Adopter",
      image: "/certifications/aws-aip-early.png",
      link: "https://www.credly.com/badges/120b967e-fd07-4853-9d3d-083462bf62cc/public_url",
      issuedDate: "November 21st, 2024",
    },
  },
  {
    name: "AWS Academy Machine Learning Foundations",
    image: "/certifications/Aws-Ml-foundation-badge.png",
    link: "https://www.credly.com/badges/a21e32fc-dff0-4e95-b1be-69709e5bde5c/print",
    issuedBy: "Amazon Web Services",
    issuedDate: "March 30, 2023",
  },
  {
    name: "AWS Academy Cloud Foundations",
    image: "/certifications/Aws-cloud.png",
    link: "https://www.credly.com/badges/0fa31330-4a5d-4348-9c5b-cb3229188a36/print",
    issuedBy: "Amazon Web Services",
    issuedDate: "March 30, 2023",
  }
];
