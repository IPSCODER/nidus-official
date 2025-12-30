import { FaMoneyBillWave, FaTools, FaProjectDiagram, FaEye } from "react-icons/fa";
import {
  Cpu,
  Activity,
  Database,
  BarChart2,
} from "lucide-react";

export const keyChallengeData = [
  {
    text: "High operational costs",
    icon: FaMoneyBillWave,
    iconClass: "text-2xl text-red-500 mb-3"
  },
  {
    text: "Unplanned downtime",
    icon: FaTools,
    iconClass: "text-2xl text-yellow-500 mb-3"
  },
  {
    text: "Supply chain inefficiencies",
    icon: FaProjectDiagram,
    iconClass: "text-2xl text-indigo-500 mb-3"
  },
  {
    text: "Lack of real-time visibility",
    icon: FaEye,
    iconClass: "text-2xl text-green-500 mb-3"
  }
];


export const impactSectionData= [
        { stat: "25%", label: "Reduced Downtime" },
            { stat: "35%", label: "Operational Efficiency Increase" },
            { stat: "3x", label: "ROI Improvement" },
];



export const manufacturingFeatures = [
  {
    id: 1,
    icon: Cpu,
    title: "IoT Automation",
    description: "Smart sensors and IoT-enabled machinery for seamless automation.",
    iconClass: "w-6 h-6 text-blue-600 mb-3",
  },
  {
    id: 2,
    icon: Activity,
    title: "Predictive Maintenance",
    description: "AI-driven analytics to prevent breakdowns and reduce downtime.",
    iconClass: "w-6 h-6 text-teal-500 mb-3",
  },
  {
    id: 3,
    icon: Database,
    title: "ERP Integration",
    description: "End-to-end ERP systems for streamlined production and inventory control.",
    iconClass: "w-6 h-6 text-yellow-500 mb-3",
  },
  {
    id: 4,
    icon: BarChart2,
    title: "Smart Analytics",
    description: "Real-time dashboards to monitor KPIs and improve decision-making.",
    iconClass: "w-6 h-6 text-purple-500 mb-3",
  },
];
