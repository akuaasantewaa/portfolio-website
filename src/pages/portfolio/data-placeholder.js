import project1 from "../../assets/images/project 1.png";
import project2 from "../../assets/images/project 2.png";
import project4 from "../../assets/images/project 4.png";
import project6 from "../../assets/images/project 6.png";
import ceo from "../../assets/images/ceo.jpg";
import knust from "../../assets/images/knust.png";
import Kumasi from "../../assets/images/Kumasi_high_school_crest.jpg";
import faith from "../../assets/images/faith-high-school.webp";

export const future = {
  firstname: "Regina Nhyira",
  lastname: "Dadzie",
  username: "akua-asantewaa",
  email: "reginadadzie60@gmail.com",
  password: "$2b$12$lEDxYwgJG31WyxGK3USgXehPywhZBSyD9PEf1WfBYxlZUUsvDztZa",
  education: [
    {
      schoolName: "Kwame Nkrumah University of Science & Technology",
      location: "Kumasi, Ghana",
      description:
        "A leading science and technology university in West Africa, known for its research and innovation.",
      program: "Bachelor of Science in Statistics and Mathematics",
      image: knust,
      grade: "Second Class Honors",
      startDate: "September 2021",
      endDate: "June 2021",
    },
    {
      schoolName: "Ola High School",
      location: "Kumasi, Ghana",
      description:
        "One of the top secondary schools in Ghana, offering a rigorous academic curriculum.",
      program: "General Science",
      image: Kumasi,
      grade: "WASSCE Certificate",
      startDate: "September 2012",
      endDate: "June 2015",
    },
    {
      schoolName: "Faith High School",
      location: "Kumasi, Ghana",
      description:
        "A well-regarded high school providing foundational education and leadership training.",
      program: "Junior Secondary School",
      image: faith,
      grade: "BECE Certificate",
      startDate: "September 2009",
      endDate: "June 2012",
    },
  ],
  skills: [
    {
      name: "JavaScript",
      levelOfProficiency: "Beginner",
      createdAt: "2024-07-22T23:37:06.652Z",
      updatedAt: "2024-07-22T23:37:06.652Z",
      id: "669eed22940cc069e23c9275",
    },
    {
      name: "CSS",
      levelOfProficiency: "Expert",
      createdAt: "2024-07-22T23:37:55.770Z",
      updatedAt: "2024-07-22T23:37:55.770Z",
      id: "669eed53940cc069e23c92a7",
    },
    {
      name: "HTML",
      levelOfProficiency: "Expert",
      createdAt: "2024-07-22T23:39:28.572Z",
      updatedAt: "2024-07-22T23:39:28.572Z",
      id: "669eedb0940cc069e23c9321",
    },
    {
      name: "React",
      levelOfProficiency: "Expert",
      createdAt: "2024-07-26T18:16:49.877Z",
      updatedAt: "2024-07-26T18:16:49.877Z",
      id: "66a3e811205c5257ef1dbef0",
    },
    {
      name: "GitHub",
      levelOfProficiency: "Expert",
      createdAt: "2024-08-08T22:39:41.065Z",
      updatedAt: "2024-08-08T22:39:41.065Z",
      id: "66b5492d57b9b768e0628882",
    },
    {
      name: "Git",
      levelOfProficiency: "Intermediate",
      createdAt: "2024-08-08T22:39:41.065Z",
      updatedAt: "2024-08-08T22:39:41.065Z",
      id: "66b5492d57b9b768e0628882",
    },
    {
      name: "SASS",
      levelOfProficiency: "Intermediate",
      createdAt: "2024-08-08T22:41:11.366Z",
      updatedAt: "2024-08-08T22:41:11.366Z",
      id: "66b5498757b9b768e0628886",
    },
    {
      name: "WordPress",
      levelOfProficiency: "Expert",
      createdAt: "2024-08-08T22:39:41.065Z",
      updatedAt: "2024-08-08T22:39:41.065Z",
      id: "66b5492d57b9b768e0628882",
    },
  ],
  achievements: [
    {
      award: "Backend Developer – camm-library",
      description:
        "Developed the backend architecture for a library management system, including secure user authentication, database integration, and API development.",
      // image: "path/to/camm-library-project.png",
      date: "March 2024",
      nameOfInstitution: "Personal/Team Project",
    },
    {
      award: "API Optimization Award",
      description:
        "Reduced API response time by 30% through query optimization and caching, resulting in a smoother user experience for a web application.",
      // image: "path/to/api-award.png",
      date: "January 2024",
      nameOfInstitution: "Freelance Project",
    },
    {
      award: "Open Source Contributor",
      description:
        "Contributed to multiple open-source backend projects by fixing bugs and implementing new features, enhancing project scalability and security.",
      // image: "path/to/open-source-certificate.png",
      date: "July 2023",
      nameOfInstitution: "GitHub Community",
    },
    {
      award: "Hackathon Winner – Backend Development",
      description:
        "Led the backend development for a winning hackathon project, building RESTful APIs and integrating with a third-party payment gateway.",
      // image: "path/to/hackathon-award.png",
      date: "October 2022",
      nameOfInstitution: "University Hackathon",
    },
  ]
,  

  projects: [
    {
      projectName: "Camm-Library",
      description:
        "A library management app designed to streamline the organization and tracking of books. As the backend developer, I built and managed the server-side logic, database integration, and API functionalities to ensure smooth operations, including user authentication, book lending, and inventory management",
      contribution:
        "Designed the NLP model, integrated it with a backend API, and deployed the solution on a cloud platform.",
      skills: "Express, Node.js, HTML, JavaScript, CSS",
      link: "https://samankwah.github.io/Supa-Lounge/",
      image: project1,
      nameOfInstitution: "Supa Lounge",
      startDate: "January 2019",
      endDate: "June 2019",
    },
    {
      projectName: "BuildRight",
      description:
        "Developed a responsive website to showcase the company's services, projects, and contact information.",
      contribution:
        "Led the development team, implemented key features, and coordinated with construction professionals for testing.",
      skills: "ReactJS, Express, Node.js",
      link: "https://samankwah.github.io/BuildRight/",
      image: project2,
      nameOfInstitution: "BuildRight",
      startDate: "July 2018",
      endDate: "September 2018",
    },
    {
      projectName: "Tukio",
      description:
        "Created an online platform for events management, enabling users to experience culture like never before Created out of the drive and passion for African Entertainment.",
      contribution:
        "Developed the backend infrastructure, managed the database, and implemented video streaming capabilities.",
      skills: "Node.js, MongoDB, Express",
      link: "https://tukioevents.netlify.app/",
      image: project4,
      nameOfInstitution: "Tukio Events",
      startDate: "March 2020",
      endDate: "August 2020",
    },
    {
      projectName: "CookBook",
      description:
        "CookBook is the all-in-one recipe keeper & cooking app for iOS, Android & Web. Add & organise your recipes, plan your meals, create shopping lists and more!",
      contribution:
        "Designed the frontend, integrated a payment gateway, and optimized the site for performance and security.",
      skills: "React, Node.js, Stripe API",
      link: "https://cookbookgh.netlify.app/",
      image: project6,
      nameOfInstitution: "CookBook",
      startDate: "October 2019",
      endDate: "January 2020",
    },
  ],

  volunteering: [
    {
      organisation: "GREEN GHANA PROJECT",
      description: "The project aims to create greater economic and employment opportunities for youth, women and returning migrants by promoting and suppoerting sustainable, green businesses in the Ashanti and Western Regions of Ghana.",
      skills: "Decision making, team work, communication, risk management, commercial, creativity and problem solving.",
      startDate: "2024-07-05",
      endDate: "2024-08-11",
      role: "Crop Modeler",
      responsibility: "Running crop simulation model",
      location: "Accra",
      projectName: "GREEN GHANA PROJECT",
      createdAt: "2024-07-28T23:13:59.963Z",
      updatedAt: "2024-07-28T23:13:59.963Z",
      id: "66a6d0b7d972de20873df27a",
    },
  ],
  experience: [
    {
      companyName: "Ghana Meteorological Agency",
      role: "Agrometeorologist",
      skills: "S2S forecasting, Crop modeling, Seasonal Forecasting",
      responsibility:
        "Ideated detailed and meaningful statistical analyses by using data on precipitation, humidity, wind and sunshine parameters to derive evapotranspiration and solar radiation dataset.",
      location: "Accra, Ghana",
      startDate: "2019-07-28",
      endDate: "2023-09-30",
      createdAt: "2024-07-23T15:04:33.561Z",
      updatedAt: "2024-07-23T15:04:33.561Z",
      id: "669fc681885925ada2d4d18f",
    },
    {
      companyName: "Ghana Meteorological Agency",
      role: "Agrometeorologist",
      skills: "S2S forecasting, Crop modeling, Seasonal Forecasting",
      responsibility:
        "Used advanced computer systems and software tools to analyze weather data, resulting in highly accurate weather forecasts and sophisticated models.",
      location: "Accra, Ghana",
      startDate: "2024-07-27",
      endDate: "2024-07-21",
      createdAt: "2024-07-23T15:04:06.471Z",
      updatedAt: "2024-07-23T15:04:06.471Z",
      id: "669fc666885925ada2d4d18a",
    },
  ],
  createdAt: "2024-07-17T20:17:32.762Z",
  updatedAt: "2024-08-08T22:44:59.183Z",
  userProfile: {
    profilePicture: ceo,
    location: "Addington Park",
    maritalStatus: "single",
    sex: "male",
    bio: "I'm the hottest web dev in africa at the moment",
    about:
      "A Result-Oriented Web Developer specialize in building and managing responsive Websites and Web Applications that leads to the success of the overall product. With a background in Back-end, Statistics and Mathematics, I am eager to solve real-world challenges using modern technologies.",
    contact: "0240298910",
    resume: "secure/uploads/15218",
    githubLink: "https://github.com/samankwah",
    linkedinLink: "http://linkedin.com/in/stephenamankwah ",
    twitterLink: "https://x.com/1amankwa",
    createdAt: "2024-07-22T23:36:18.298Z",
    updatedAt: "2024-07-22T23:36:18.298Z",
    id: "669eecf2940cc069e23c9254",
  },
  id: "669826dc40ae7cda2cd3cb6a",
};
