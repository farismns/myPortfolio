export type ProjectImage = {
  src: string;
  label: string;
  alt: string;
};

export type Project = {
  title: string;
  category: string;
  shortDescription: string;
  description: string;
  features: string[];
  contributions: string[];
  technologies: string[];
  githubUrl: string;
  liveUrl?: string;
  images: ProjectImage[];
  featured: boolean;
};

export const projects: Project[] = [
  {
    title: "LearnCheck! Formative Assessment Powered with AI",
    category: "Team Capstone",
    shortDescription:
      "An AI-powered learning platform that assesses participants' understanding through quizzes after each learning submodule.",
    description:
      "LearnCheck! is an AI-powered formative assessment platform designed to help participants evaluate their understanding after completing each learning submodule. Participants complete quizzes to assess their knowledge and comprehension. After submitting their answers, they receive immediate feedback showing which answers are correct or incorrect, along with explanations to help them understand the material and learn from their mistakes.",
    features: [
      "Learning modules divided into submodules.",
      "Formative quizzes to assess participants' understanding after each submodule.",
      "Immediate feedback indicating correct and incorrect answers.",
      "Explanations provided for quiz answers to support the learning process.",
    ],
    contributions: [
      "Developed frontend features using React and reusable UI components.",
      "Integrated frontend components with RESTful APIs.",
      "Implemented asynchronous JavaScript for API communication and data handling.",
      "Collaborated with a five-member development team using Git and GitHub.",
    ],
    technologies: ["React", "Vite", "Tailwind CSS", "REST API"],
    githubUrl: "https://github.com/ReySa18/learncheck-fe.git",
    images: [
      {
        src: "/images/project/learnCheck-web.png",
        label: "Application Preview",
        alt: "LearnCheck learning application interface",
      },
      {
        src: "/images/project/learnCheck-team.png",
        label: "Team Collaboration",
        alt: "LearnCheck capstone project team collaboration",
      },
      {
        src: "/images/project/learnCheck-coding.png",
        label: "Frontend Development",
        alt: "LearnCheck frontend source code implementation",
      },
    ],
    featured: true,
  },
  {
    title: "Expense Management System",
    category: "Personal Project",
    shortDescription:
      "A personal finance application for tracking income, expenses, and budgets in one place.",
    description:
      "A personal expense management application designed to help users organize and monitor their financial activities. Users can record income and expenses, manage transaction categories, and set budgets for specific periods. The application also provides financial summaries to help users track their spending patterns and manage their finances more effectively.",
    features: [
      "Income and expense tracking for recording daily financial activities.",
      "Transaction category management with support for custom categories.",
      "Budget management with defined spending periods.",
      "Financial summaries to monitor income, expenses, and balance.",
      "JWT-based authentication and user-specific data access.",
    ],
    contributions: [
      "Designed and implemented RESTful API endpoints for transaction, category, and budget management.",
      "Implemented JWT-based authentication and authorization.",
      "Developed request validation and business rules to maintain transaction data integrity.",
      "Integrated the React frontend with backend APIs.",
      "Tested API endpoints and application behavior using Postman.",
    ],
    technologies: ["React", "Node.js", "Express", "PostgreSQL", "JWT"],
    githubUrl: "https://github.com/farismns/expense-management-system.git",
    images: [
      {
        src: "/images/project/expense-front.png",
        label: "Application Preview",
        alt: "Expense Management System application interface",
      },
      {
        src: "/images/project/expense-coding.png",
        label: "Source Code",
        alt: "Expense Management System source code implementation",
      },
      {
        src: "/images/project/expense-postmanTest.png",
        label: "API Testing",
        alt: "Expense Management System API testing using Postman",
      },
    ],
    featured: true,
  },
  {
    title: "OpenMusic API",
    category: "Dicoding Program Project",
    shortDescription:
      "A backend API for managing music data and playlists, with caching and asynchronous processing.",
    description:
      "OpenMusic API is a backend application developed as part of a Dicoding project. It provides RESTful API functionality for managing music-related data and playlists. The application also integrates Redis for caching and RabbitMQ for asynchronous message processing.",
    features: [
      "RESTful API for managing music data.",
      "Playlist management and related data operations.",
      "Redis integration for caching.",
      "RabbitMQ integration for asynchronous message processing.",
    ],
    contributions: [
      "Developed RESTful API endpoints using Node.js and Express.js.",
      "Integrated Redis to support data caching.",
      "Implemented RabbitMQ as a message broker.",
      "Developed a consumer service to handle asynchronous message processing.",
      "Configured environment variables for database and messaging service connections.",
    ],
    technologies: ["Node.js", "Express", "Redis", "RabbitMQ"],
    githubUrl: "https://github.com/farismns/openMusic_V3.git",
    images: [
      {
        src: "/images/project/open-music-api-coding.png",
        label: "Backend Development",
        alt: "OpenMusic API backend source code",
      },
      {
        src: "/images/project/open-music-api-postmanTest.png",
        label: "API Testing",
        alt: "OpenMusic API endpoint testing using Postman",
      },
    ],
    featured: true,
  },
];
