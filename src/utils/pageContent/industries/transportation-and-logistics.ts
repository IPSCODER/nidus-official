import { FaGasPump, FaTruckLoading, FaSatelliteDish, FaWarehouse } from "react-icons/fa";
import {
  Truck,
  Map,
  Warehouse,
  BarChart3,
} from "lucide-react";

export const keyChallengeData= [
  {
    text: "High fuel & logistics costs",
    icon: FaGasPump,
    iconClass: "text-2xl text-orange-400 mb-3"
  },
  {
    text: "Inefficient fleet management",
    icon: FaTruckLoading,
    iconClass: "text-2xl text-indigo-400 mb-3"
  },
  {
    text: "Lack of real-time tracking",
    icon: FaSatelliteDish,
    iconClass: "text-2xl text-teal-500 mb-3"
  },
  {
    text: "Warehouse & supply chain bottlenecks",
    icon: FaWarehouse,
    iconClass: "text-2xl text-yellow-500 mb-3"
  }
];

export const impactSectionData= [
  { stat: "20%", label: "Cost Savings" },
  { stat: "40%", label: "Faster Deliveries" },
  { stat: "99.9%", label: "System Uptime" }
];




export const featureGridData = [
  {
    id: 1,
    icon: Truck,
    title: "Fleet Management",
    description: "Monitor vehicles, optimize fuel usage, and automate compliance.",
    iconClass: "w-6 h-6 text-blue-600 mb-3",
  },
  {
    id: 2,
    icon: Map,
    title: "Route Optimization",
    description: "AI-driven route planning for faster, more reliable deliveries.",
    iconClass: "w-6 h-6 text-teal-500 mb-3",
  },
  {
    id: 3,
    icon: Warehouse,
    title: "Smart Warehousing",
    description: "IoT-enabled operations to improve efficiency & reduce waste.",
    iconClass: "w-6 h-6 text-yellow-500 mb-3",
  },
  {
    id: 4,
    icon: BarChart3,
    title: "Supply Chain Analytics",
    description: "Real-time dashboards and predictive insights for better decision-making.",
    iconClass: "w-6 h-6 text-purple-600 mb-3",
  },
];
