import AnimatedText from '@/components/layout/animation/AnimatedText';
import FlipCard from '@/components/layout/flip-card';
import SubHeading from '@/components/ui/SubHeading';
import React from 'react';

const ourServices = [
  {
    id: 1,
    title: 'IT Strategy Consulting',
    description: 'Craft a technology roadmap that aligns with your business objectives.',
    imageUrl: 'https://images.pexels.com/photos/1181263/pexels-photo-1181263.jpeg',
    backText:
      'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Alias cum repellat velit quae suscipit c.',
  },
  {
    id: 2,
    title: 'Cloud Services',
    description: 'Seamlessly migrate to the cloud and optimize your IT infrastructure.',
    imageUrl: 'https://images.pexels.com/photos/17489163/pexels-photo-17489163.jpeg',
    backText:
      'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Alias cum repellat velit quae suscipit c.',
  },
  {
    id: 3,
    title: 'Data Analytics & AI',
    description: 'Turn data into actionable insights with intelligent automation.',
    imageUrl: 'https://images.pexels.com/photos/17483869/pexels-photo-17483869.jpeg',
    backText:
      'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Alias cum repellat velit quae suscipit c.',
  },
  {
    id: 4,
    title: 'Software Development',
    description: 'Build scalable, efficient, and secure software solutions tailored to your needs.',
    imageUrl: 'https://images.pexels.com/photos/577585/pexels-photo-577585.jpeg',
    backText:
      'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Alias cum repellat velit quae suscipit c.',
  },
];

const OurServices = () => {
  return (
    <section className="w-full  bg-[#cfd8e3] py-10 px-4 sm:px-6 lg:px-5">
      <div className=" mx-auto  max-w-7xl">
     
         <SubHeading span='Service' >
         Our 
         </SubHeading>

        <AnimatedText>
        <p className="text-xl text-gray-600 mb-5 max-w-7xl">
          Empowering your business with innovative technology solutions tailored to your growth.
        </p>
        </AnimatedText>

        <div className="grid gap-2 sm:grid-cols-2 lg:grid-cols-4">
          {ourServices.map((service) => (
            <FlipCard key={service.id} {...service} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default OurServices;
