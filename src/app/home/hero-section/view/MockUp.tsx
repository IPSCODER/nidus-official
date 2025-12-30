import React from 'react';

const techCards = [
  {
    title: 'AI Assistant',
    desc: 'Automate repetitive tasks & improve customer interaction.',
    button: 'Deploy AI Bot',
  },
  {
    title: 'Cloud Storage',
    desc: 'Access scalable cloud infrastructure in real-time.',
    button: 'Upgrade Plan',
  },
  {
    title: 'DevOps Monitoring',
    desc: 'Real-time CI/CD pipeline & server performance metrics.',
    button: 'View Dashboard',
  },
  {
    title: 'Cybersecurity Shield',
    desc: 'Advanced protection from DDoS, phishing, and intrusion.',
    button: 'Run Audit',
  },
  {
    title: 'Code Collaboration',
    desc: 'Workspaces with Git-based version control & reviews.',
    button: 'Start Session',
  },
  {
    title: 'API Gateway',
    desc: 'Secure & scalable API endpoints with token auth.',
    button: 'View APIs',
  },
    {
    title: 'AI Assistant',
    desc: 'Automate repetitive tasks & improve customer interaction.',
    button: 'Deploy AI Bot',
  },
  {
    title: 'Cloud Storage',
    desc: 'Access scalable cloud infrastructure in real-time.',
    button: 'Upgrade Plan',
  },
  {
    title: 'DevOps Monitoring',
    desc: 'Real-time CI/CD pipeline & server performance metrics.',
    button: 'View Dashboard',
  },
  {
    title: 'Cybersecurity Shield',
    desc: 'Advanced protection from DDoS, phishing, and intrusion.',
    button: 'Run Audit',
  },
  {
    title: 'Code Collaboration',
    desc: 'Workspaces with Git-based version control & reviews.',
    button: 'Start Session',
  },
  {
    title: 'API Gateway',
    desc: 'Secure & scalable API endpoints with token auth.',
    button: 'View APIs',
  },
    {
    title: 'AI Assistant',
    desc: 'Automate repetitive tasks & improve customer interaction.',
    button: 'Deploy AI Bot',
  },
  {
    title: 'Cloud Storage',
    desc: 'Access scalable cloud infrastructure in real-time.',
    button: 'Upgrade Plan',
  },
  {
    title: 'DevOps Monitoring',
    desc: 'Real-time CI/CD pipeline & server performance metrics.',
    button: 'View Dashboard',
  },
  {
    title: 'Cybersecurity Shield',
    desc: 'Advanced protection from DDoS, phishing, and intrusion.',
    button: 'Run Audit',
  },
  {
    title: 'Code Collaboration',
    desc: 'Workspaces with Git-based version control & reviews.',
    button: 'Start Session',
  },
  {
    title: 'API Gateway',
    desc: 'Secure & scalable API endpoints with token auth.',
    button: 'View APIs',
  },
    {
    title: 'AI Assistant',
    desc: 'Automate repetitive tasks & improve customer interaction.',
    button: 'Deploy AI Bot',
  },
  {
    title: 'Cloud Storage',
    desc: 'Access scalable cloud infrastructure in real-time.',
    button: 'Upgrade Plan',
  },
  {
    title: 'DevOps Monitoring',
    desc: 'Real-time CI/CD pipeline & server performance metrics.',
    button: 'View Dashboard',
  },
  {
    title: 'Cybersecurity Shield',
    desc: 'Advanced protection from DDoS, phishing, and intrusion.',
    button: 'Run Audit',
  },
  {
    title: 'Code Collaboration',
    desc: 'Workspaces with Git-based version control & reviews.',
    button: 'Start Session',
  },
  {
    title: 'API Gateway',
    desc: 'Secure & scalable API endpoints with token auth.',
    button: 'View APIs',
  },
    {
    title: 'AI Assistant',
    desc: 'Automate repetitive tasks & improve customer interaction.',
    button: 'Deploy AI Bot',
  },
  {
    title: 'Cloud Storage',
    desc: 'Access scalable cloud infrastructure in real-time.',
    button: 'Upgrade Plan',
  },
  {
    title: 'DevOps Monitoring',
    desc: 'Real-time CI/CD pipeline & server performance metrics.',
    button: 'View Dashboard',
  },
  {
    title: 'Cybersecurity Shield',
    desc: 'Advanced protection from DDoS, phishing, and intrusion.',
    button: 'Run Audit',
  },
  {
    title: 'Code Collaboration',
    desc: 'Workspaces with Git-based version control & reviews.',
    button: 'Start Session',
  },
  {
    title: 'API Gateway',
    desc: 'Secure & scalable API endpoints with token auth.',
    button: 'View APIs',
  },
    {
    title: 'AI Assistant',
    desc: 'Automate repetitive tasks & improve customer interaction.',
    button: 'Deploy AI Bot',
  },
  {
    title: 'Cloud Storage',
    desc: 'Access scalable cloud infrastructure in real-time.',
    button: 'Upgrade Plan',
  },
  {
    title: 'DevOps Monitoring',
    desc: 'Real-time CI/CD pipeline & server performance metrics.',
    button: 'View Dashboard',
  },
  {
    title: 'Cybersecurity Shield',
    desc: 'Advanced protection from DDoS, phishing, and intrusion.',
    button: 'Run Audit',
  },
  {
    title: 'Code Collaboration',
    desc: 'Workspaces with Git-based version control & reviews.',
    button: 'Start Session',
  },
  {
    title: 'API Gateway',
    desc: 'Secure & scalable API endpoints with token auth.',
    button: 'View APIs',
  },
];

const MockUp = () => {
  return (
    <div className="w-full max-h-[80vh] h-[70vh] max-w-xl mt-10 md:mt-0">
      <div className="rounded-3xl p-6 bg-gradient-to-br from-gray-100 via-purple-100 to-blue-100 shadow-xl overflow-hidden h-full scroll-smooth relative ">
        {/* Top Assistant Card */}
<div className='animate-up absolute left-16 bottom-0 w-md' >

        {techCards.map((item, index) => (
          <div
            key={index}
            className="bg-white rounded-xl p-4 shadow mb-5 animate-float-up-down hover:shadow-lg transition duration-300"
          >
            <h4 className="font-semibold text-gray-800 mb-1">{item.title}</h4>
            <p className="text-sm text-gray-500 mb-3">{item.desc}</p>
       
          </div>
        ))}
</div>
      </div>
    </div>
  );
};

export default MockUp;
