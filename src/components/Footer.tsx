import React from "react";
import { FaFacebookF, FaInstagram, FaYoutube } from "react-icons/fa";
import { HiOutlinePhone } from "react-icons/hi";
import { MdOutlineEmail } from "react-icons/md";
import { LuClock5 } from "react-icons/lu";
import { FaLocationDot } from "react-icons/fa6";
import Image from "next/image";

const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-900 text-white">
      <div
        className="w-full flex flex-col items-center bg-cover bg-center px-6 sm:px-10 max-sm:px-[16px] py-12"
        style={{
          backgroundImage:
            "linear-gradient(to top,rgba(35, 35, 80, 0.67), rgba(35, 35, 80, 0.67)), url(/images/footer.png)",
        }}
      >
        {/* Logo and School Name */}
        {/* <div className="flex flex-col items-center text-center">
          <Image
            src="/images/school Logo 1.png"
            alt="Achievers International School"
            width={200}
            height={200}
            className="w-20 h-20 mb-2"
          />
          <h2 className="text-xl font-bold">ACHIEVERS INTERNATIONAL SCHOOL</h2>
          <p className="text-gray-300">Pratappur (C.G.)</p>
        </div> */}

        {/* Main Content */}
        <div className="grid md:grid-cols-3 gap-10 mt-8 w-full max-w-6xl">

        <div className="flex flex-col items-center text-center">
          <Image
            src="/images/school Logo 1.png"
            alt="Achievers International School"
            width={200}
            height={200}
            className="w-20 h-20 mb-2"
          />
          <h2 className="text-xl font-bold">ACHIEVERS INTERNATIONAL SCHOOL</h2>
          <p className="text-gray-300">Pratappur (C.G.)</p>
        </div>
          {/* About Us Section */}
          <div>
            <h3 className="text-lg font-semibold mb-2">About Us</h3>
            <p className="text-gray-300 text-sm leading-relaxed">
              Achievers International School is a premier CBSE institution
              dedicated to fostering academic excellence and holistic growth.
              As the first AI-integrated classrooms in the region and ranked
              No.1, we provide an innovative & dynamic learning environment
              where students thrive academically, socially, & personally.
            </p>
            <div className="flex space-x-4 mx-auto my-4">
              <a
                href="https://www.facebook.com/achieversinternationalppur/"
                className="bg-white text-gray-900 p-2 rounded-full hover:bg-gray-300"
              >
                <FaFacebookF/>
              </a>
              <a
                href="https://www.instagram.com/achievers_international_school/"
                className="bg-white text-gray-900 p-2 rounded-full hover:bg-gray-300"
              >
               <FaInstagram/>
              </a>
              <a
                href="https://www.youtube.com/@Achievers_International_School"
                className="bg-white text-gray-900 p-2 rounded-full hover:bg-gray-300"
              >
               <FaYoutube/>
              </a>
            </div>
          </div>

          {/* Social Media Links */}
          {/* <div className="flex flex-col items-center">
            <h3 className="text-lg font-semibold mb-2">Follow Us</h3>
            <div className="flex space-x-4">
              <a
                href="#"
                className="bg-white text-gray-900 p-2 rounded-full hover:bg-gray-300"
              >
                <FaFacebookF/>
              </a>
              <a
                href="#"
                className="bg-white text-gray-900 p-2 rounded-full hover:bg-gray-300"
              >
               <FaInstagram/>
              </a>
              <a
                href="#"
                className="bg-white text-gray-900 p-2 rounded-full hover:bg-gray-300"
              >
               <FaYoutube/>
              </a>
            </div>
          </div> */}

          {/* Contact Information */}
          <div>
            <h3 className="text-lg font-semibold mb-2">Get In Touch</h3>
            <div className="flex items-center space-x-2">
              <HiOutlinePhone/>
              <p className="text-gray-300 text-sm">
                7999671694 | 9098418685
              </p>
            </div>
            <div className="flex items-center space-x-2 mt-4">
              <MdOutlineEmail/>
              <p className="text-gray-300 text-sm">
                achieversinternationalpur@gmail.com
              </p>
            </div>
            <div className="flex items-center space-x-2 mt-4">
              <LuClock5 />
              <p className="text-gray-300 text-sm">
              Mon - Fri | 09:00 AM - 03:00 PM
              </p>
            </div>
            <div className="flex  space-x-2 mt-4">
              <FaLocationDot />
              <p className="text-gray-300 text-sm">
                Near Indian Oil Petrol Pump, Ambikapur Road, Pratappur, Surajpur, Chhattisgarh - 497223
              </p>
            </div>
          </div>
        </div>

        {/* Footer Bottom */}
        <div className="md:flex md:justify-between border-t border-gray-700 w-full max-w-6xl mt-6 pt-4 text-center text-gray-400 text-sm">
          <p>
            Copyright © 2025 Achievers International School. All rights
            reserved.
          </p>
          <p className="mt-1">Powered By Achievers International School</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
