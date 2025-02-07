import {
  mobile,
  backend,
  creator,
  web,
  javascript,
  typescript,
  html,
  css,
  reactjs,
  redux,
  tailwind,
  nodejs,
  mongodb,
  git,
  figma,
  docker,
  meta,
  starbucks,
  tesla,
  shopify,
  carrent,
  jobit,
  tripguide,
  threejs,
  fullstack,
} from "../assets";
 
 import {
  AiOutlineHome,
  AiOutlineFundProjectionScreen,
  AiOutlineUser,
} from "react-icons/ai";

import { CgFileDocument } from "react-icons/cg";
export const navLinks = [
  {
    id:"home",
    title:"Home",
  
  },
  {
    id: "about",
    title: "About",
   
  },

  {
    id: "work",
    title: "Work",
    
  },
  {
    id: "project",
    title: "Projects",
    
  },
  {
    id: "achievement",
    title: "Achievments",
    
  },
  {
    id: "contact",
    title: "Contact",
   
  },
];

const services = [
  {
    title:"PROGRAMMING IN C",
    link:"https://drive.google.com/file/d/1ku8K5cpyHtSa8ROUeoc95bM6MVcchv7s/view?usp=sharing",
    icon: web,
  },
  {
    title:"PROGRAMMING IN C++",
    link:"https://drive.google.com/file/d/1SL_zB5BciiJFfaYaJz28zATRHCJ60NSx/view?usp=sharing",
    icon: mobile,
  },
  {
    title:"MODERN APPLICATION DEVELOPMENT",
    link:"https://drive.google.com/file/d/1QrTVI0q8c2PJHF-etIuk_vhDkA6aK7CJ/view?usp=sharing",
    icon: backend,
  
  },
  {
    title:"Node JS",
    link:"https://drive.google.com/file/d/1mNGD4J76EL0pSzDsO8vT1Nlt3rZelkCj/view?usp=sharing",
    icon: creator,
  },
  {
    title:"Angular 8",
    link:"https://drive.google.com/file/d/1GKwTUVRmaT78tj21GlttImcaUNgt-EOx/view?usp=sharing",
    icon: web,
   
  },
  {
    title:"Python",
    link:"https://drive.google.com/file/d/1jUjrXri7kz_vhGXcLAiGmTjxkdoux-OH/view?usp=sharing",
    icon: mobile,

  }
  
];

const technologies = [
  {
    name: "HTML 5",
    icon: html,
  },
  {
    name: "CSS 3",
    icon: css,
  },
  {
    name: "JavaScript",
    icon: javascript,
  },
  {
    name: "TypeScript",
    icon: typescript,
  },
  {
    name: "React JS",
    icon: reactjs,
  },
  {
    name: "Redux Toolkit",
    icon: redux,
  },
  {
    name: "Tailwind CSS",
    icon: tailwind,
  },
  {
    name: "Node JS",
    icon: nodejs,
  },
  {
    name: "MongoDB",
    icon: mongodb,
  },
  {
    name: "Three JS",
    icon: threejs,
  },
  {
    name: "git",
    icon: git,
  },
  {
    name: "figma",
    icon: figma,
  },
  {
    name: "docker",
    icon: docker,
  },
];

const experiences = [
  {
    title: "React.js Developer",
    company_name: "Starbucks",
    icon: starbucks,
    iconBg: "#383E56",
    date: "March 2020 - April 2021",
    points: [
      "Developing and maintaining web applications using React.js and other related technologies.",
      "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
      "Implementing responsive design and ensuring cross-browser compatibility.",
      "Participating in code reviews and providing constructive feedback to other developers.",
    ],
  },
  {
    title: "React Native Developer",
    company_name: "Tesla",
    icon: tesla,
    iconBg: "#E6DEDD",
    date: "Jan 2021 - Feb 2022",
    points: [
      "Developing and maintaining web applications using React.js and other related technologies.",
      "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
      "Implementing responsive design and ensuring cross-browser compatibility.",
      "Participating in code reviews and providing constructive feedback to other developers.",
    ],
  },
  {
    title: "Web Developer",
    company_name: "Shopify",
    icon: shopify,
    iconBg: "#383E56",
    date: "Jan 2022 - Jan 2023",
    points: [
      "Developing and maintaining web applications using React.js and other related technologies.",
      "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
      "Implementing responsive design and ensuring cross-browser compatibility.",
      "Participating in code reviews and providing constructive feedback to other developers.",
    ],
  },
  {
    title: "Full stack Developer",
    company_name: "Meta",
    icon: meta,
    iconBg: "#E6DEDD",
    date: "Jan 2023 - Present",
    points: [
      "Developing and maintaining web applications using React.js and other related technologies.",
      "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
      "Implementing responsive design and ensuring cross-browser compatibility.",
      "Participating in code reviews and providing constructive feedback to other developers.",
    ],
  },
];

export const javaProject = [
  {
    name: "Cryptography",
    description:
      "The project is based on a cryptography technique that uses Double layer encryption and decryption using Armstrong numbers and RGB color-based mappings for various types of file format. The idea is inspired from a research paper.",
    tags: [
      {
        name: "cryptography",
        color: "blue-text-gradient",
      },
      {
        name: "security",
        color: "green-text-gradient",
      },
      {
        name: "java",
        color: "pink-text-gradient",
      },
    ],
    image: carrent,
    source_link: "https://github.com/shinchancode/Cryptography",
    source_code_link: "https://github.com/shinchancode/Cryptography",
  },
  {
    name: "Snake Yaml",
    description:
      "Created a simple Maven project, a YAML file and write student data in it. As the request is made, crud should be performed in real time . (Hint: Used SnakeYAML library and add dependency in pom)",
    tags: [
      {
        name: "yaml",
        color: "blue-text-gradient",
      },
      {
        name: "springboot",
        color: "green-text-gradient",
      },
      {
        name: "postman",
        color: "pink-text-gradient",
      },
    ],
    image: carrent,
    source_link: "https://github.com/shinchancode/Snake-Yaml-Project",
    source_code_link: "https://github.com/shinchancode/Snake-Yaml-Project",
  },
  {
    name: "CRUD operations",
    description:
      "Built a java based application to allow user to create, read, update and delete Entities. Spring Boot provides an interface called CrudRepository that contains methods for CRUD operations.",
    tags: [
      {
        name: "java",
        color: "blue-text-gradient",
      },
      {
        name: "springboot",
        color: "green-text-gradient",
      },
      {
        name: "crud",
        color: "pink-text-gradient",
      },
    ],
    image: carrent,
    source_link: "https://github.com/shinchancode/CRUD-Operation",
    source_code_link: "https://github.com/shinchancode/CRUD-Operation",
  },
  {
    name: "Byte-Array-to-File",
    description:
      "Built a java project where we input a file using byte array, store it on local system. In order to convert a byte array to a file, we will be using a method named the getBytes() method of String class.",
    tags: [
      {
        name: "java",
        color: "blue-text-gradient",
      },
      {
        name: "byteArray",
        color: "green-text-gradient",
      },
      {
        name: "file",
        color: "pink-text-gradient",
      },
    ],
    image: carrent,
    source_link: "https://github.com/shinchancode/byte-array-to-file",
    source_code_link: "https://github.com/shinchancode/byte-array-to-file",
  },
  {
    name: "Spring Boot One To Many",
    description:
      "Implemented Spring Boot One-To-Many mapping with Hibernate in a Spring Boot CRUD using @OnetoMany annotation. Mapping between two entities and used a MySQL database to store and retrieve the data.",
    tags: [
      {
        name: "onetomany",
        color: "blue-text-gradient",
      },
      {
        name: "springbott",
        color: "green-text-gradient",
      },
      {
        name: "crud",
        color: "pink-text-gradient",
      },
    ],
    image: carrent,
    source_link: "https://github.com/shinchancode/oneTomany-springboot",
    source_code_link: "https://github.com/shinchancode/oneTomany-springboot",
  },
  {
    name: "OOP Lab",
    description:
      "These projects contain object oriented programming primary concepts and its code in Java language. Topics like : Inheritence, Constructor, Virtual function, Interface, Exception Handling, Generic Programming and File Handling etc.",
    tags: [
      {
        name: "java",
        color: "blue-text-gradient",
      },
      {
        name: "oop",
        color: "green-text-gradient",
      },
      {
        name: "coding",
        color: "pink-text-gradient",
      },
    ],
    image: carrent,
    source_link: "https://github.com/shinchancode/Object-Oriented-Programming-Lab",
    source_code_link: "https://github.com/shinchancode/Object-Oriented-Programming-Lab",
  },
];

export const cProject = [
  {
    name: "Spell Checker",
    description:
      "Trie data structure implementation used as a dictionary, where customer details are checked, searched, inserted and removed. Using Trie, search complexities can be brought to optimal limit (key length)",
    tags: [
      {
        name: "C++",
        color: "blue-text-gradient",
      },
      {
        name: "trie",
        color: "green-text-gradient",
      },
      {
        name: "dictionary",
        color: "pink-text-gradient",
      },
    ],
    image: carrent,
    source_link: "https://github.com/shinchancode/Trie-Data-structure",
    source_code_link: "https://github.com/shinchancode/Trie-Data-structure",
  },
  {
    name: "DSA Lab",
    description:
      "These projects contain data structure and algorithms primary concepts and its code in C++ language. Topics like : Linked List, Stack, Queue, Circular Queue, Binary Tree, Binary Search Tree, Expression Tree, Threaded Binary Tree, and Heap Sort etc.",
    tags: [
      {
        name: "DSA",
        color: "blue-text-gradient",
      },
      {
        name: "C++",
        color: "green-text-gradient",
      },
      {
        name: "semester",
        color: "pink-text-gradient",
      },
    ],
    image: carrent,
    source_link: "https://github.com/shinchancode/Data-Structure-Algorithms",
    source_code_link: "https://github.com/shinchancode/Data-Structure-Algorithms/",
  },
  {
    name: "Computer Graphics Lab",
    description:
      "These projects contain computer graphics topics like : Line Drawing Algorithm (DDA and Bresenham), Bresenham circle drawing, Polygon filling, 2D transformation, Cohen Sutherland polygon clipping and Bezier curve.",
    tags: [
      {
        name: "computergraphics",
        color: "blue-text-gradient",
      },
      {
        name: "C++",
        color: "green-text-gradient",
      },
      {
        name: "semester",
        color: "pink-text-gradient",
      },
    ],
    image: carrent,
    source_link: "https://github.com/shinchancode/Computer-Graphics",
    source_code_link: "https://github.com/shinchancode/Computer-Graphics",
  },
  
];

export const webProject = [
  {
    name: "3D React Portfolio",
    description:
      "Created an impressive website made using React with 3D graphics and animations to bring their content to life. Responsive webpage is made with user friendly interface",
    tags: [
      {
        name: "TailwindCSS",
        color: "blue-text-gradient",
      },
      {
        name: "ThreeJS",
        color: "green-text-gradient",
      },
      {
        name: "3d_react",
        color: "pink-text-gradient",
      },
    ],
    image: carrent,
    source_link: "https://shinchancode.github.io/3d-react-portfolio/",
    source_code_link: "https://github.com/shinchancode/3d-react-portfolio",
  },
  {
    name: "React portfolio",
    description:
      "Website made using React in the FrontEnd, Nodejs and Express in the BackEnd. Responsive webpage is made with user friendly interface",
    tags: [
      {
        name: "nodejs",
        color: "blue-text-gradient",
      },
      {
        name: "React",
        color: "green-text-gradient",
      },
      {
        name: "html css",
        color: "pink-text-gradient",
      },
    ],
    image: carrent,
    source_link: "https://shinchancode.github.io/React-Portfolio/",
    source_code_link: "https://github.com/shinchancode/React-Portfolio",
  },
  {
    name: "30 Days of JavaScript",
    description:
      "Website made using Nodejs and Express in the BackEnd. A 30 Days Of JavaScript challenge to learn JavaScript by making 30 different projects using some famous JavaScript libraries.",
    tags: [
      {
        name: "JavaScript",
        color: "blue-text-gradient",
      },
      {
        name: "30dayschallenge",
        color: "green-text-gradient",
      },
      {
        name: "css",
        color: "pink-text-gradient",
      },
    ],
    image: carrent,
    source_link: "https://rathi-30-days-of-javascript.onrender.com/",
    source_code_link: "https://github.com/shinchancode/30-Days-of-Javascript",
  },
  {
    name: "Chit Chat Application",
    description:
      "Real-Time, event based communication in Nodejs and browser-based Chat application. Uses Socket.io for implementation for WebSockets protocol. This application built using Node.js, Express, Socket.io and Render (Hosting)",
    tags: [
      {
        name: "Chatting",
        color: "blue-text-gradient",
      },
      {
        name: "socket.io",
        color: "green-text-gradient",
      },
      {
        name: "JavaScript",
        color: "pink-text-gradient",
      },
    ],
    image: carrent,
    source_link: "https://chit-chat-app.onrender.com/",
    source_code_link: "https://github.com/shinchancode/Chit-Chat-Real_time_chat_app",
  },
  {
    name: "Notes Application",
    description:
      "A web-based notes app made by using javaScript, This web-based notes app having functionalities like Drag and drop, Search notes etc.",
    tags: [
      {
        name: "notes",
        color: "blue-text-gradient",
      },
      {
        name: "bootstrap",
        color: "green-text-gradient",
      },
      {
        name: "css",
        color: "pink-text-gradient",
      },
    ],
    image: carrent,
    source_link: "https://shinchancode.github.io/Notes-App/",
    source_code_link: "https://github.com/shinchancode/Notes-App",
  },
];

const list = [
  {
    id: "java",
    title: "Java",
  },
  {
    id: "c++",
    title: "C++",
  },
  {
    id: "web",
    title: "Web Dev",
  },
  {
    id: "other",
    title: "Other",
  },
];
export const otherProject = [
  {
    name: "Multilingual Multiple Choice Question Generation",
    description:
      "Final Year Project : Its a low level and high level model where we automate the process of creating objective question assessment using LSTM(at low level) and Transformer(at high level) models for multiple languages.",
    tags: [
      {
        name: "machine learning",
        color: "blue-text-gradient",
      },
      {
        name: "multilingual",
        color: "green-text-gradient",
      },
      {
        name: "BE_Project",
        color: "pink-text-gradient",
      },
    ],
    image: carrent,
    source_link: "https://drive.google.com/drive/folders/1LECu5ENk_zsowbPeRN_R1V8Rf2Gp7N6l",
    source_code_link: "https://github.com/shinchancode/Final-Year-Project",
  },

  {
    name: "DBMS Lab",
    description:
      "Semester 4 : DBMS Lab. Topics included: ER/EER Diagram, DDL statements, primary key and foreign key constraint., SQL queries with different functions, Views, PL/SQL, Trigger (Row level and statement level) and cursor.",
    tags: [
      {
        name: "MySql",
        color: "blue-text-gradient",
      },
      {
        name: "dbms",
        color: "green-text-gradient",
      },
      {
        name: "semester",
        color: "pink-text-gradient",
      },
    ],
    image: carrent,
    source_link: "https://github.com/shinchancode/DBMS-SQL-Lab",
    source_code_link: "https://github.com/shinchancode/DBMS-SQL-Lab",
  },
  {
    name: "SQL : Library Management System",
    description:
      "Semester 4 : DBMS Mini Project. Created a library management system using SQL and different functionalities.",
    tags: [
      {
        name: "sql",
        color: "blue-text-gradient",
      },
      {
        name: "management",
        color: "green-text-gradient",
      },
      {
        name: "miniproject",
        color: "pink-text-gradient",
      },
    ],
    image: carrent,
    source_link: "https://github.com/shinchancode/Mini-Project-SQL-LibraryManagement",
    source_code_link: "https://github.com/shinchancode/Mini-Project-SQL-LibraryManagement",
  },
  {
    name: "Pyhton : Snake and Ladder",
    description:
      "Snake and Ladder game using python language. A simple command line interface snake and ladder game",
    tags: [
      {
        name: "snake and ladder",
        color: "blue-text-gradient",
      },
      {
        name: "python",
        color: "green-text-gradient",
      },
      {
        name: "CLI",
        color: "pink-text-gradient",
      },
    ],
    image: carrent,
    source_link: "https://github.com/shinchancode/MINI_PROJECT-Snake-and-Ladder",
    source_code_link: "https://github.com/shinchancode/MINI_PROJECT-Snake-and-Ladder",
  },
  
];

const testimonials = [
  {
    testimonial:
      "I thought it was impossible to make a website as beautiful as our product, but Rick proved me wrong.",
    name: "Sara Lee",
    designation: "CFO",
    company: "Acme Co",
    image: "https://randomuser.me/api/portraits/women/4.jpg",
  },
  {
    testimonial:
      "I've never met a web developer who truly cares about their clients' success like Rick does.",
    name: "Chris Brown",
    designation: "COO",
    company: "DEF Corp",
    image: "https://randomuser.me/api/portraits/men/5.jpg",
  },
  {
    testimonial:
      "After Rick optimized our website, our traffic increased by 50%. We can't thank them enough!",
    name: "Lisa Wang",
    designation: "CTO",
    company: "456 Enterprises",
    image: "https://randomuser.me/api/portraits/women/6.jpg",
  },
];

const projects = [
  {
    name: "Car Rent",
    description:
      "Web-based platform that allows users to search, book, and manage car rentals from various providers, providing a convenient and efficient solution for transportation needs.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "mongodb",
        color: "green-text-gradient",
      },
      {
        name: "tailwind",
        color: "pink-text-gradient",
      },
    ],
    image: carrent,
    source_code_link: "https://github.com/",
  },
  {
    name: "Car Rent",
    description:
      "Web-based platform that allows users to search, book, and manage car rentals from various providers, providing a convenient and efficient solution for transportation needs.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "mongodb",
        color: "green-text-gradient",
      },
      {
        name: "tailwind",
        color: "pink-text-gradient",
      },
    ],
    image: carrent,
    source_code_link: "https://github.com/",
  },
  {
    name: "Car Rent",
    description:
      "Web-based platform that allows users to search, book, and manage car rentals from various providers, providing a convenient and efficient solution for transportation needs.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "mongodb",
        color: "green-text-gradient",
      },
      {
        name: "tailwind",
        color: "pink-text-gradient",
      },
    ],
    image: carrent,
    source_code_link: "https://github.com/",
  },
  {
    name: "Car Rent",
    description:
      "Web-based platform that allows users to search, book, and manage car rentals from various providers, providing a convenient and efficient solution for transportation needs.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "mongodb",
        color: "green-text-gradient",
      },
      {
        name: "tailwind",
        color: "pink-text-gradient",
      },
    ],
    image: carrent,
    source_code_link: "https://github.com/",
  },
  {
    name: "Job IT",
    description:
      "Web application that enables users to search for job openings, view estimated salary ranges for positions, and locate available jobs based on their current location.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "restapi",
        color: "green-text-gradient",
      },
      {
        name: "scss",
        color: "pink-text-gradient",
      },
    ],
    image: jobit,
    source_code_link: "https://github.com/",
  },
  {
    name: "Trip Guide",
    description:
      "A comprehensive travel booking platform that allows users to book flights, hotels, and rental cars, and offers curated recommendations for popular destinations.",
    tags: [
      {
        name: "nextjs",
        color: "blue-text-gradient",
      },
      {
        name: "supabase",
        color: "green-text-gradient",
      },
      {
        name: "css",
        color: "pink-text-gradient",
      },
    ],
    image: tripguide,
    source_code_link: "https://github.com/",
  },
];

const achievements = [
  {
    title: "Completed multiple certification training programs from NPTEL and NareshIT in web technologies, including React, Node.js, Angular, C, C++, and Modern Application Development.",
  },
  {
    title: "Received 'Pat on the Back' award in my first year at Divami for outstanding performance.",
  },
  {
    title: "Awarded 'Shining Star' in my second year at Divami in recognition of my contributions.",
  },
];


export { services, technologies, experiences, testimonials, projects,list,achievements };
