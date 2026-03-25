import Link from "next/link";
import React from "react";

const Footer = () => {
  return (
    <footer className="bg-black text-white px-10 py-16">
      {/* Top Section */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 border-b border-gray-800 pb-10">
        
        {/* Left */}
        <div>
          <p className="text-gray-400 mb-4">Let’s Talk</p>

          <a
            href="mailto:hello@nidustechnologies.com"
            className="text-4xl md:text-5xl font-semibold tracking-tight"
          >
            hello@nidustechnologies.com
          </a>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 mt-10 text-sm">
            <div>
              <p className="text-gray-400 mb-2">Job Application</p>
              <p>apply@nidustechnologies.com</p>
            </div>

            <div>
              <p className="text-gray-400 mb-2">Office Address</p>
              <p>
                2464 Royal Ln. Mesa,
                <br />
                New Jersey 45463
              </p>
            </div>

            <div>
              <p className="text-gray-400 mb-2">Phone Number</p>
              <p>342-000-0000</p>
            </div>
          </div>
        </div>

        {/* Right Social */}
        <div className="flex lg:justify-end">
          <ul className="space-y-4 text-gray-300">
            <li>
              <Link href="#">Twitter ↗</Link>
            </li>
            <li>
              <Link href="#">LinkedIn ↗</Link>
            </li>
            <li>
              <Link href="#">Instagram ↗</Link>
            </li>
            <li>
              <Link href="#">Facebook ↗</Link>
            </li>
          </ul>
        </div>
      </div>

      {/* Bottom */}
      <div className="flex flex-col md:flex-row justify-between items-center pt-6">
        <h2 className="text-2xl font-semibold">nidustechnologies</h2>

        <p className="text-gray-400 text-sm mt-4 md:mt-0">
          © 2024 Nidus Technologies All Right Reserved
        </p>
      </div>
    </footer>
  );
};

export default Footer;