'use client'
import React, { useState } from 'react';

const FAQAccordion = () => {
  const [openItem, setOpenItem] = useState<number| string | null>('faq1');

  const faqs = [
    {
      id: 'faq1',
      icon: 'question-circle',
      question: 'What makes our services stand out?',
      answer: 'Our commitment to innovation, quality, and customer satisfaction sets us apart. We leverage cutting-edge technologies to deliver tailored solutions that exceed expectations.',
    },
    {
      id: 'faq2',
      icon: 'lightbulb',
      question: 'How do we ensure project success?',
      answer: 'Through meticulous planning, agile methodologies, and continuous communication, we ensure every project is delivered on time, within budget, and meets all requirements.',
    },
    {
      id: 'faq3',
      icon: 'users',
      question: 'Do you offer ongoing support?',
      answer: 'Absolutely! We provide comprehensive post-launch support, including maintenance, updates, and 24/7 technical assistance to keep your solutions running smoothly.',
    },
    {
      id: 'faq4',
      icon: 'shield-alt',
      question: 'How secure are our solutions?',
      answer: 'Security is paramount. We implement industry-standard encryption, regular audits, and best practices to protect your data and ensure compliance with global standards.',
    },
    {
      id: 'faq5',
      icon: 'rocket',
      question: 'What technologies do you specialize in?',
      answer: 'We specialize in modern web technologies, including React, Node.js, Python, cloud services, and more. Our team stays ahead of trends to deliver future-proof solutions.',
    },
  ];

  const toggleItem = (id:number| string | null) => {
    setOpenItem(openItem === id ? null : id);
  };

  return (
    <div className=" flex flex-col">
      <div className="max-w-7xl mx-auto mt-12 px-6 flex-1">
            <Heading/>
        <div className="space-y-3">
          {faqs.map((faq) => (
            <div
              key={faq.id}
              className="bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300"
            >
              <button
                className={`w-full text-left p-6 transition-all duration-300 font-medium text-slate-800 cursor-pointer ${
                  openItem === faq.id
                    ? 'bg-gray-400 text-white shadow-inner'
                    : 'bg-white'
                }`}
                onClick={() => toggleItem(faq.id)}
              >
                <span className="inline-flex items-center mr-3 text-amber-500">
                  <svg
                    className="w-6 h-6"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path
                      fillRule="evenodd"
                      d={
                        faq.icon === 'question-circle'
                          ? 'M18 10a8 8 0 11-16 0 8 8 0 0116 0zM6.28 7.72a.75.75 0 01-1.06-1.06 3.5 3.5 0 005.25 0 .75.75 0 11.97 1.13 5 5 0 01-7.16 0zM12 8a1 1 0 100-2 1 1 0 000 2zm-6 5a1 1 0 11-2 0 1 1 0 012 0zm6 1a1 1 0 100-2 1 1 0 000 2z'
                          : faq.icon === 'lightbulb'
                          ? 'M9.663 17h1.674C12.195 16.754 12 16.172 12 15.5c0-.835.685-1.5 1.5-1.5.868 0 1.295.591 1.681 1.317l.13.279a2.5 2.5 0 01-4.746.024L9.664 17zm3.106-2.226C12.145 14.156 12 13.844 12 13.5c0-.928.792-1.676 1.769-1.597A3.001 3.001 0 0017 13.5c0 1.966-1.614 3.563-3.485 3.499l-.317-.005c-.533-.074-.832-.25-.944-.469a3.983 3.983 0 00-.781-.637 4.267 4.267 0 00-.85-.228l-.32-.027zM6.106 14.774C6.015 14.844 6 14.956 6 15.03v.004a.75.75 0 01-.578.701l-.253.076c-.37.112-.72.37-.72.762 0 .52.405.942.936.996a5.501 5.501 0 002.34-.556 4.003 4.003 0 00-1.135-6.743zM4.5 13.5c0-.983.658-1.823 1.56-2.092l.177-.059C6.41 11.058 6 10.588 6 10c0-1.486 1.191-2.69 2.66-2.684.49 0 .966.056 1.423.163L9 7.37v.127c0 .695-.121 1.362-.343 1.986.228.07.443.158.643.283.34.177.648.427.893.757.245.53.38 1.135.38 1.763 0 1.122-.51 2.121-1.311 2.805-.44.47-.98.84-1.555 1.103-.416.167-.854.258-1.312.258H4.5z'
                          : faq.icon === 'users'
                          ? 'M15.298 5.023A.75.75 0 0116 6a1 1 0 001 1h1.5a2.25 2.25 0 012.25 2.25v7.5A2.25 2.25 0 0118.75 19h-15A2.25 2.25 0 011.5 16.75v-7.5A2.25 2.25 0 013.75 7H5a1 1 0 011-.999.75.75 0 01.702-.98zM9 13a1 1 0 102 0v1a1 1 0 10-2 0v-1zM8 12a1 1 0 11-2 0 1 1 0 012 0zm7 2a1 1 0 100-2 1 1 0 000 2zm-7-4a1 1 0 11-2 0 1 1 0 012 0zm6 2a1 1 0 100-2 1 1 0 000 2z'
                          : faq.icon === 'shield-alt'
                          ? 'M10.481 1.196a.75.75 0 01.038 1.003l-3.381 8.482a.75.75 0 01-1.123.084l-2.183-2.182a14.999 14.999 0 005.739-5.208l.001-.002a.75.75 0 011.17-.089l3.45 3.451a15.04 15.04 0 01-4.27 7.966 13.435 13.435 0 01-2.321 2.461l-.163.11a.75.75 0 01-.921-.663 20.870 20.870 0 001.237-7.266l-3.451-3.451a.75.75 0 011.002-.038l8.482 3.381a.75.75 0 01.084 1.123l-2.182 2.182a14.992 14.992 0 005.208 5.739l.002.001a.75.75 0 01.089 1.17l-3.451 3.45a15.04 15.04 0 01-7.966-4.27.75.75 0 01-.663-.921 13.436 13.436 0 012.461-2.321l.11-.163a.75.75 0 01.663.921 15.04 15.04 0 007.266 1.237l.003-.001a.75.75 0 01.038 1.002l-3.381 8.482a.75.75 0 01-1.123.084l-2.182-2.182a15 15 0 00-5.739 5.208l-.001.002a.75.75 0 01-1.17.089L1.196 18.24a.75.75 0 01.038-1.003l8.482-3.381z'
                          : 'M2.25 12h13.5a.75.75 0 010 1.5H2.25a.75.75 0 010-1.5zM2.25 7.5h13.5a.75.75 0 010 1.5H2.25a.75.75 0 010-1.5zM2.25 15h9.75a.75.75 0 010 1.5H2.25a.75.75 0 010-1.5z'
                      }
                      clipRule="evenodd"
                    />
                  </svg>
                </span>
                {faq.question}
              </button>
              <div
                className={`overflow-hidden transition-all duration-300 ease-out bg-slate-50 pl-20 border-l-4 border-indigo-900 ${
                  openItem === faq.id
                    ? 'max-h-52 opacity-100 py-4'
                    : 'max-h-0 opacity-0 p-0'
                }`}
              >
                <p className="text-slate-700 leading-relaxed">{faq.answer}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default FAQAccordion;


const Heading = () => {
    return    <div className='w-full flex flex-col items-center py-5' >
    <p>(FAQ&apos;s)</p>
   <h1 className="text-7xl font-extrabold tracking-tight text-shadow-lg text-center mb-10 text-primary">
   Your Questions, Answered
   </h1>
   <p>Helping you understand our process and offerings.</p>
</div>
}
