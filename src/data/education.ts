export interface Honor {
  name: string;
}

export interface Activity {
  name: string;
}

export interface Education {
  degree: string;
  school: string;
  location: string;
  startDate: string;
  endDate: string;
  gpa: string;
  honors: Honor[];
  activities: Activity[];
}
export const education: Education = {
  degree: "Bachelor of Technology",
  school: "Lingaya’s Vidyapeeth",
  location: "Faridabad, Haryana, India",
  startDate: "August 2019",
  endDate: "May 2023",
  gpa: "9.54 CGPA",
  honors: [],
  activities: [],
};
