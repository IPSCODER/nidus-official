import Link from "next/link";
import { Facebook, Twitter, Linkedin, Mail } from "lucide-react";
import Image from "next/image";
import AnimatedText from "@/components/layout/animation/AnimatedText";

const services = [
  "It Statergies Consulting",
  "Software Development",
  "Data Analytics and AI",
  "Cloud Services",
];

const industries = [
  "Transportation And Logistics",
  "Education",
  "Manufacturing",
  "Retail And E-commerce",
  "Healthcare",
  "Finance And Banking",
  "Energy And Utilities",
  "Government And Public Sector",
];

const Footer = () => {
  return (
    <footer className="bg-[#212121] text-gray-300 pt-12 px-6 md:px-5">
      <div className=" grid grid-cols-1 md:grid-cols-4 gap-10 pb-12  border-gray-700 max-w-7xl mx-auto">

        {/* Column 1 - Logo & Address */}
        <div>
          <AnimatedText>
            <Link href="/">
            <Image
              src="/nidus.svg"
              alt="Nidus Logo"
              width={160}
              height={80}
              className="object-contain mb-4"
            />
          </Link>
          </AnimatedText>
          <AnimatedText>
          <p className="text-sm leading-relaxed">
            5465 Legacy Drive, Suite 650, Plano, TX 75024 USA
          </p>
          </AnimatedText>
          <AnimatedText>
          <h4 className="mt-6 mb-2 text-sm font-semibold uppercase text-white">Follow Us</h4>
          </AnimatedText>
          <div className="flex gap-4">
            <AnimatedText>
            <Link href="#" aria-label="Facebook" className="hover:text-secondary transition-colors duration-200">
              <Facebook size={20} />
            </Link>
            </AnimatedText>
            <AnimatedText>
            <Link href="#" aria-label="Twitter" className="hover:text-secondary transition-colors duration-200">
              <Twitter size={20} />
            </Link>
            </AnimatedText>
            <AnimatedText>
            <Link href="#" aria-label="LinkedIn" className="hover:text-secondary transition-colors duration-200">
              <Linkedin size={20} />
            </Link>
            </AnimatedText>
            <AnimatedText>
            <Link href="mailto:info@nidustechnologies.com" aria-label="Email" className="hover:text-secondary transition-colors duration-200">
              <Mail size={20} />
            </Link>
            </AnimatedText>
          </div>
        </div>

        {/* Column 2 - Services */}
        <div>
          <AnimatedText>
          <h4 className="text-lg font-semibold text-white mb-4 font-panchang-medium">Services</h4>
          </AnimatedText>
          <ul className="space-y-2 text-sm">
            {services.map((service) => (
              <AnimatedText key={service} >
              <li className="hover:text-secondary transition-colors duration-200">
                <Link href={`/services/${service.split(" ").join('-').toLocaleLowerCase()}`} >
                {service}
                </Link>
              </li>
              </AnimatedText>
            ))}
          </ul>
        </div>

        {/* Column 3 - Industries */}
        <div>
          <AnimatedText>
          <h4 className="text-lg font-semibold font-panchang-medium text-white mb-4">Industries</h4>
          </AnimatedText>
          <ul className="space-y-2 text-sm">
            {industries.map((industry) => (
              <AnimatedText key={industry} >
                 <Link href={`/industries/${industry.split(" ").join('-').toLocaleLowerCase()}`} >
                {industry}
                </Link>
              </AnimatedText>
            ))}
          </ul>
        </div>

        {/* Column 4 - Contact Info */}
        <div>
          <AnimatedText>
          <h4 className="text-lg font-semibold font-panchang-medium text-white mb-4">Contact</h4>
          </AnimatedText>
          <address className="not-italic text-sm space-y-2">
            <AnimatedText>

            <p>Phone: (682) 331-7733</p>
            </AnimatedText>
            <AnimatedText>
            <p>
              <a
                href="mailto:info@nidustechnologies.com"
                className="underline hover:text-secondary transition-colors duration-200"
                >
                info@nidustechnologies.com
              </a>
            </p>
                </AnimatedText>
          </address>
        </div>
      </div>

      {/* Bottom Footer */}
      <div className="border-t mx-auto flex flex-col sm:flex-row justify-between items-center text-xs text-gray-500 py-6">
        <p>© {new Date().getFullYear()} Nidus Technologies. All rights reserved.</p>
        <div className="flex gap-4 mt-2 sm:mt-0">
          <Link href="/contact-us" className="hover:text-secondary">Contact Us</Link>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
