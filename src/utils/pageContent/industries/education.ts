import { FaUserGraduate, FaChalkboardTeacher, FaChartLine, FaGlobe } from "react-icons/fa";
import {
  BookOpen,
  Video,
  BarChart2,
  Cpu,
} from "lucide-react";

export const keyChallengeData = [
  {
    text: "Student engagement in online classes",
    icon: FaChalkboardTeacher,
    iconClass: "text-2xl text-blue-500 mb-3"
  },
  {
    text: "Limited access to personalized learning",
    icon: FaUserGraduate,
    iconClass: "text-2xl text-purple-500 mb-3"
  },
  {
    text: "Data-driven decision-making for institutions",
    icon: FaChartLine,
    iconClass: "text-2xl text-green-500 mb-3"
  },
  {
    text: "Scalability for global learners",
    icon: FaGlobe,
    iconClass: "text-2xl text-orange-400 mb-3"
  }
];


export const impactSectionData= [
     { stat: "50%", label: "More Student Engagement" },
            { stat: "30%", label: "Dropout Rate Reduction" },
            { stat: "100+", label: "Institutions Served" },
];


export const educationFeatures = [
  {
    id: 1,
    icon: BookOpen,
    title: "Learning Management Systems (LMS)",
    description: "Custom LMS with scalability, gamification, and real-time progress tracking.",
    iconClass: "w-6 h-6 text-blue-600 mb-3",
  },
  {
    id: 2,
    icon: Video,
    title: "Virtual Classrooms",
    description: "Seamless live sessions with video, chat, breakout rooms, and whiteboards.",
    iconClass: "w-6 h-6 text-teal-500 mb-3",
  },
  {
    id: 3,
    icon: BarChart2,
    title: "Student Analytics",
    description: "Data-driven insights to identify learning gaps and improve performance.",
    iconClass: "w-6 h-6 text-yellow-500 mb-3",
  },
  {
    id: 4,
    icon: Cpu,
    title: "AI-powered Tutoring",
    description: "Personalized learning paths and recommendations using AI/ML models.",
    iconClass: "w-6 h-6 text-purple-500 mb-3",
  },
];
