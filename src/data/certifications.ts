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
      image: "/certifications/Samsung_AI.png",
      link: "https://drive.google.com/file/d/1b29llrzfCwZFirG01dbVPJFofdYInsXe/view?usp=sharing",
      issuedBy: "Samsung Innovation with MSME",
      issuedDate: "September 2023",
    },
    {
      name: "Python - NSIC with MSME",
      image: "/certifications/NSIC.png",
      link: "https://drive.google.com/file/d/1R0P24e2pwojdzvsLdhXskiA5q2Bz4WHE/view?usp=sharing",
      issuedBy: "NSIC with MSME",
      issuedDate: "August 2023",
    },
    {
      name: "JAVA Full Stack Developer - JSpiders",
      image: "/certifications/Jspiders.jpeg",
      link: "https://drive.google.com/file/d/1p0xoh-RVCF1fSrehVNyVMZxfFK_62T7n/view?usp=sharing", 
      issuedBy: "JSpiders",
      issuedDate: "2024", 
    },
  
  
  
  {
    name: "AICTE AI ML Eduskills Internship",
    image: "/certifications/Aws-eduskills.png",
    link: "https://drive.google.com/file/d/1uqWYUs85nwwffszOt-vlhNOqmoYYRwtf/view?usp=sharing",
    issuedBy: "Amazon Academy",
    issuedDate: "Feb, 2023",
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
  },
  {
    name: "ISRO Geoprocessing with Python",
    image: "/certifications/Isro.png",
    link: "https://drive.google.com/file/d/1moWb7jGcy0GyH-IkdyJ4T8oOhwhvUwgc/view?usp=sharing",
    issuedBy: "ISRO",
    issuedDate: "February 09th 2022",
  },
  {
    name: "Tryst'22 Campus Ambassador-IIT Delhi",
    image: "/certifications/Tryst.png",
    link: "https://drive.google.com/file/d/193Hc7zBaufd7CHVlUDMzdmjEeI9ajM3L/view?usp=sharing",
    issuedBy: "IIT DELHI",
    issuedDate: "May 22, 2022",
  
  },
  {
    name: "SQL and Relational Databases",
    image: "/certifications/Coginitve.jpeg",
    link: "https://courses.cognitiveclass.ai/certificates/5292290a5b504e50985c740fa82dfd69",
    issuedBy: "Coginitive Class",
    issuedDate: "October 10th, 2021",
  }
 
];
