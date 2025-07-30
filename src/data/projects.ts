export interface Project {
  title: string;
  description: string;
  tech: string[];
  image: string;
  link: string;
}

export const projects: Project[] = [
  {
    title: "Path Genie",
    description: 'A modern personalized visual learning path generator',
    tech: ['Perplexity AI API', 'Node-js', 'React-Flow', 'Tailwind CSS'],
    image: '../project1.png',
    link: 'https://pathgenie.onrender.com/',
  },
  {
    title: 'AI-Powered-Todo-Agent-Web-App',
    description: 'AI-powered todo agent web app. Create, manage, and automate tasks with AI assistance.',
    tech: ['Node-JS', 'React', 'vite', 'Gemini-API'],
    image: '../project2.png',
    link: 'https://github.com/omanandswami2005/AI-Powered-Todo-Agent-Web-App',
  },

  {
    title: 'Social Media Engagement Analysis Report',
    description: 'A comprehensive report on social media engagement metrics and insights.',
    tech: ['LangFlow AI', 'React', 'vite','DataStax Astra DB'],
    image: 'project3.png',
    link: 'https://teamfullstackforce.onrender.com/',
  },
  {
    title: 'The Student-Teacher Appointment Booking System',
    description: 'A web application for booking appointments between students and teachers.',
    tech: ['Node-js', 'Tailwind CSS', 'React JS', 'JWT'],
    image: '../project4.png',
    link: 'https://stabs.onrender.com/',
  },
  {
    title: 'The Face Mask And Cough Detector. (ML)',
    description: 'A machine learning model that detects whether a person is wearing a face mask and if they are coughing.',
    tech: ['Teachable Machine', 'HTML', 'CSS', 'JS'],
    image: '../project5.png',
    link: 'https://thefacemaskdetectorml.netlify.app/',
  },
  {
    title: 'VPolyServer - The Advance College Attendance Management System!',
    description: 'A comprehensive college attendance management system with advanced features.',
    tech: ['React-js',  'Tailwind CSS', 'Node JS', 'MongoDB', 'JWT'],
    image: '../project6.png',
    link: 'https://vpolyserver.onrender.com/'
  },
]; 