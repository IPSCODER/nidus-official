import { FaShoppingCart, FaStoreAlt, FaUsers, FaDatabase } from "react-icons/fa";
import {
  ShoppingCart,
  Store,
  Heart,
  PieChart,
} from "lucide-react";

export const keyChallengeData = [
  {
    text: "High cart abandonment rates",
    icon: FaShoppingCart,
    iconClass: "text-2xl text-rose-500 mb-3"
  },
  {
    text: "Managing omnichannel experiences",
    icon: FaStoreAlt,
    iconClass: "text-2xl text-blue-500 mb-3"
  },
  {
    text: "Meeting rising customer expectations",
    icon: FaUsers,
    iconClass: "text-2xl text-amber-500 mb-3"
  },
  {
    text: "Data silos across platforms",
    icon: FaDatabase,
    iconClass: "text-2xl text-violet-500 mb-3"
  }
];

export const impactSectionData= [
   { stat: "35%", label: "Increase in Conversions" },
            { stat: "50%", label: "Boost in Customer Retention" },
            { stat: "3x", label: "Faster Sales Growth" },
];



export const retailFeatures = [
  {
    id: 1,
    icon: ShoppingCart,
    title: "Custom E-Commerce Platforms",
    description: "Scalable online stores with smooth UX, secure payments, and easy integrations.",
    iconClass: "w-6 h-6 text-blue-600 mb-3",
  },
  {
    id: 2,
    icon: Store,
    title: "Omnichannel Retail",
    description: "Seamlessly connect physical stores, apps, and online platforms for unified shopping.",
    iconClass: "w-6 h-6 text-teal-500 mb-3",
  },
  {
    id: 3,
    icon: Heart,
    title: "Personalized Shopping",
    description: "AI-driven recommendations and loyalty programs that boost customer engagement.",
    iconClass: "w-6 h-6 text-yellow-500 mb-3",
  },
  {
    id: 4,
    icon: PieChart,
    title: "Retail Analytics",
    description: "Actionable insights into sales trends, customer behavior, and inventory optimization.",
    iconClass: "w-6 h-6 text-purple-500 mb-3",
  },
];
