import {
  HeartPulse,
  Stethoscope,
  Brain,
  ShieldCheck,
} from "lucide-react";

export const healthcareFeatures = [
  {
    id: 1,
    icon: HeartPulse,
    title: "Telehealth & Remote Care",
    description: "Enable patients to consult doctors from anywhere with secure, real-time telemedicine platforms.",
    iconClass: "w-10 h-10 text-primary mb-3",
  },
  {
    id: 2,
    icon: Stethoscope,
    title: "EHR Integration",
    description: "Seamlessly connect patient records across providers with interoperable EHR/EMR systems.",
    iconClass: "w-10 h-10 text-primary mb-3",
  },
  {
    id: 3,
    icon: Brain,
    title: "AI Diagnostics",
    description: "Leverage machine learning for predictive health insights, early disease detection, and decision support.",
    iconClass: "w-10 h-10 text-primary mb-3",
  },
  {
    id: 4,
    icon: ShieldCheck,
    title: "Compliance & Security",
    description: "HIPAA-compliant systems with end-to-end encryption ensuring patient data confidentiality.",
    iconClass: "w-10 h-10 text-primary mb-3",
  },
];
