import React from 'react';
import Image from 'next/image';

const blogs = [
  {
    id: 1,
    title: 'How AI is Revolutionizing Software Development',
    summary: 'Discover how artificial intelligence is shaping the future of coding, automation, and problem-solving in software development.',
    image: 'https://images.pexels.com/photos/8386440/pexels-photo-8386440.jpeg',
    date: 'August 1, 2025',
    link: '#',
  },
  {
    id: 2,
    title: 'Full-Stack Development Trends in 2025',
    summary: 'Stay ahead in the dev game with the latest tools, languages, and frameworks dominating the full-stack space.',
    image: 'https://images.pexels.com/photos/4976710/pexels-photo-4976710.jpeg',
    date: 'July 24, 2025',
    link: '#',
  },
  {
    id: 3,
    title: 'Why Your Startup Needs a Scalable Tech Stack',
    summary: 'Learn how to choose the right technologies for long-term growth and performance as a tech startup.',
    image: 'https://images.pexels.com/photos/3153201/pexels-photo-3153201.jpeg',
    date: 'July 10, 2025',
    link: '#',
  },
];

const Blogs = () => {
  return (
    <section className="py-20 bg-gray-100">
      <div className="max-w-7xl mx-auto px-6">
        <h2 className="text-3xl font-bold text-center text-gray-800 mb-4">Latest Blogs</h2>
        <p className="text-center text-gray-600 max-w-2xl mx-auto mb-12">
          Insights, updates, and tips from our tech experts to help you stay informed and ahead in the digital space.
        </p>

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {blogs.map((blog) => (
            <div key={blog.id} className="bg-white rounded-sm shadow hover:shadow-lg transition overflow-hidden">
              <div className="relative h-48 w-full">
                <Image
                  src={blog.image}
                  alt={blog.title}
                  layout="fill"
                  objectFit="cover"
                  className="rounded-t-xl"
                />
              </div>
              <div className="p-5">
                <p className="text-sm text-gray-500 mb-2">{blog.date}</p>
                <h3 className="text-xl font-semibold text-gray-800 mb-3">{blog.title}</h3>
                <p className="text-gray-600 text-sm mb-4">{blog.summary}</p>
                <a
                  href={blog.link}
                  className="text-indigo-600 hover:underline text-sm font-medium"
                >
                  Read More →
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Blogs;
