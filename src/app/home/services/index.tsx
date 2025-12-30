import React from 'react';
import {
  Code,
  Smartphone,
  Cloud,
  Shield,
  ShoppingCart,
  Wrench,
  TestTube,
  Monitor,
} from 'lucide-react';
import AnimatedText from '@/components/layout/animation/AnimatedText';
import SubHeading from '@/components/ui/SubHeading';

const services = [
  {
    id: 1,
    title: 'Custom Application Development',
    description: 'End-to-end backend and frontend engineering using React, Next.js, Node.js, and TypeScript.',
    icon: Code,
    tags: ['React', 'Next.js', 'Node.js', 'TypeScript'],
    color: 'from-blue-500 to-blue-600',
  },
  {
    id: 2,
    title: 'Web App Development',
    description: 'Build responsive and performant SPAs and PWAs using modern frameworks like React.js, Vue.js, and Astro.',
    icon: Monitor,
    tags: ['React.js', 'Vue.js', 'Astro', 'PWAs'],
    color: 'from-purple-500 to-purple-600',
  },
  {
    id: 3,
    title: 'Mobile App Development',
    description: 'Cross-platform mobile apps using React Native or Flutter, tailored to both Android and iOS.',
    icon: Smartphone,
    tags: ['React Native', 'Flutter', 'iOS', 'Android'],
    color: 'from-green-500 to-green-600',
  },
  {
    id: 4,
    title: 'Legacy System Modernization',
    description: 'Refactor legacy stacks to use scalable APIs, microservices, or serverless components.',
    icon: Wrench,
    tags: ['APIs', 'Microservices', 'Serverless', 'Refactoring'],
    color: 'from-orange-500 to-orange-600',
  },
  {
    id: 5,
    title: 'E-Commerce Solutions',
    description: 'Headless commerce, Shopify customizations, or full-stack eCommerce platforms with Stripe or Razorpay integrations.',
    icon: ShoppingCart,
    tags: ['Shopify', 'Stripe', 'Razorpay', 'Headless Commerce'],
    color: 'from-pink-500 to-pink-600',
  },
  {
    id: 6,
    title: 'Cloud-Native Applications',
    description: 'Serverless functions (AWS Lambda, GCP Cloud Functions), containerized deployments (Docker, Kubernetes), and CI/CD pipelines.',
    icon: Cloud,
    tags: ['AWS', 'GCP', 'Docker', 'Kubernetes'],
    color: 'from-cyan-500 to-cyan-600',
  },
  {
    id: 7,
    title: 'Testing & QA Automation',
    description: 'Set up E2E (Cypress, Playwright) and unit/integration tests (Jest, Vitest) as part of CI workflows.',
    icon: TestTube,
    tags: ['Cypress', 'Playwright', 'Jest', 'Vitest'],
    color: 'from-red-500 to-red-600',
  },
  {
    id: 8,
    title: 'Maintenance & DevOps Support',
    description: 'Monitor uptime, error tracking, incident response, and regular updates with observability tools.',
    icon: Shield,
    tags: ['Monitoring', 'DevOps', 'CI/CD', 'Observability'],
    color: 'from-indigo-500 to-indigo-600',
  },
];

const Services = () => {
  return (
    <section className="py-10 bg-[#cccecd] text-white min-h-screen">
      <div className=" px-4 sm:px-6 lg:px-4 max-w-7xl mx-auto">

        {/* Header */}
        <div className="mb-5 md:mb-16">
     <SubHeading span='Services' >
     Development   
     </SubHeading>
          <AnimatedText>
          <p className="text-md md:text-xl text-black max-w-3xl leading-relaxed">
            Comprehensive software development solutions designed to transform your ideas into 
            scalable, modern applications that drive business growth.
          </p>
          </AnimatedText>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-2">
          {services.map((service) => {
            const IconComponent = service.icon;
            return (
              <div
                key={service.id}
                className="group relative bg-white rounded-md shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 overflow-hidden"
              >
                {/* Gradient Glow Background on Hover */}
                <div className={`absolute inset-0 bg-gradient-to-br ${service.color} opacity-0 group-hover:opacity-10 transition-opacity duration-300`} />

                {/* Card Content */}
                <div className="relative p-4 md:p-8 h-full">
                  {/* Icon */}
                  <div className={`inline-flex items-center justify-center w-16 h-16 rounded-xl bg-gradient-to-br ${service.color} mb-6 shadow-md`}>
                    <IconComponent className="w-8 h-8 text-white" />
                  </div>

                  {/* Title */}
                  <AnimatedText>
                  <h3 className="text-xl font-bold mb-4 font-Archivo-semibold text-black transition-colors">
                    {service.title}
                  </h3>
                  </AnimatedText>

                  {/* Description */}
                  <AnimatedText>
                  <p className="text-gray-400 mb-6 leading-relaxed">
                    {service.description}
                  </p>
                  </AnimatedText>

                  {/* Tech Tags */}
                  <AnimatedText>
                  <div className="flex flex-wrap gap-2">
                    {service.tags.map((tag, index) => (
                      <span
                      key={index}
                      className="inline-block px-3 py-1 text-xs font-medium text-gray-300 bg-neutral-800 rounded-full group-hover:bg-neutral-700 transition-colors"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                    </AnimatedText>

                  {/* Bottom Border Glow */}
                  <div className={`absolute inset-x-0 bottom-0 h-1 bg-gradient-to-r ${service.color} transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left`} />
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Services;
