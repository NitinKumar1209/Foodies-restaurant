import React from "react";
import {
  FaFacebook,
  FaInstagram,
  FaLinkedin,
  FaLocationArrow,
  FaMobileAlt,
} from "react-icons/fa";
import footerLogo from "../../assets/food-logo.png";

const Footer = () => {
  return (
    <div className="bg-gray-100 dark:bg-gray-950 text-gray-700 dark:text-gray-300">
      <section className="max-w-[1200px] mx-auto px-4">
        <div className="grid md:grid-cols-3 py-10 gap-6">
          {/* Logo and Contact Info */}
          <div className="px-4">
            <h1 className="text-2xl sm:text-3xl font-bold flex items-center gap-3 mb-4">
              <img src={footerLogo} alt="Logo" className="w-[50px]" />
              FOODIE
            </h1>
            <p className="text-sm mb-4">
              Delicious meals, quick delivery, and top-notch quality. Experience
              the joy of food with us!
            </p>
            <div className="flex items-center gap-2 mb-2">
              <FaLocationArrow />
              <p>Gorakhpur, Uttar Pradesh</p>
            </div>
            <div className="flex items-center gap-2">
              <FaMobileAlt />
              <p>+91 123456789</p>
            </div>
            {/* Social Icons */}
            <div className="flex gap-4 mt-5 text-2xl">
              <a href="#" aria-label="Instagram">
                <FaInstagram />
              </a>
              <a href="#" aria-label="Facebook">
                <FaFacebook />
              </a>
              <a href="#" aria-label="LinkedIn">
                <FaLinkedin />
              </a>
            </div>
          </div>

          {/* Footer Links */}
          <div className="md:col-span-2 grid grid-cols-2 sm:grid-cols-3 gap-6 px-4">
            <div>
              <h2 className="text-lg font-bold mb-4">Quick Links</h2>
              <ul className="space-y-2 text-sm">
                <li className="cursor-pointer hover:underline">Home</li>
                <li className="cursor-pointer hover:underline">About</li>
                <li className="cursor-pointer hover:underline">Menu</li>
                <li className="cursor-pointer hover:underline">Contact</li>
              </ul>
            </div>
            <div>
              <h2 className="text-lg font-bold mb-4">Company</h2>
              <ul className="space-y-2 text-sm">
                <li className="cursor-pointer hover:underline">Careers</li>
                <li className="cursor-pointer hover:underline">Privacy Policy</li>
                <li className="cursor-pointer hover:underline">Terms & Conditions</li>
                <li className="cursor-pointer hover:underline">Support</li>
              </ul>
            </div>
            <div>
              <h2 className="text-lg font-bold mb-4">Services</h2>
              <ul className="space-y-2 text-sm">
                <li className="cursor-pointer hover:underline">Order Online</li>
                <li className="cursor-pointer hover:underline">Dine In</li>
                <li className="cursor-pointer hover:underline">Delivery</li>
                <li className="cursor-pointer hover:underline">Catering</li>
              </ul>
            </div>
          </div>
        </div>

        {/* Bottom Copyright */}
        <div className="text-center py-6 border-t border-gray-300/50 text-sm">
          © 2024 All rights reserved || Made with ❤️ by Nitin Kumar Tiwari
        </div>
      </section>
    </div>
  );
};

export default Footer;
