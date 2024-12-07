// import React from "react";

// const Footer = () => {
//   return (
//     <div>
//       <footer className="footer footer-center  p-4 bg-base-300 fixed bottom-0 text-base-content">
//         <aside>
//           <p>Copyright © 2023 - All right reserved by TecH.e</p>
//         </aside>
//       </footer>
//     </div>
//   );
// };

// export default Footer;


import React from "react";
import { Link } from "react-router-dom";
import { HashLink } from "react-router-hash-link";
import { FaInstagram, FaFacebook, FaTwitter, FaLinkedin } from "react-icons/fa";

const Footer = () => {
  const socialLinks = {
    facebook: "https://www.facebook.com/profile.php?id=61565379877004",
    instagram: "https://www.instagram.com/fuzedminds",
    twitter: "https://x.com/fuzedMindsTech",
    linkedin: "https://www.linkedin.com/company/fuzedminds-technologies/",
  };

  const openSocialMedia = (platform) => {
    window.open(socialLinks[platform], "_blank");
  };

  const links = [
    { label: "About", href: "/about-us" },
    { label: "Services", href: "/events" },
    { label: "Contact", href: "/contact#" },
  ];

  const services = [
    { label: "Marriage"},
    { label: "Thread Ceremony"},
    { label: "Corporate Events"},
    { label: "Birthday"},
    { label: "Anniversary"},
    { label: "Bachelor Party"},
    { label: "Private Party"},
  ];

  return (
    <footer className="bg-gray-100 border-t py-6">
      <div className="container mx-auto px-4 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 text-center">
        {/* Company Info */}
        <div>
          <h3 className="font-bold text-4xl mb-4">LMCreations</h3>
          <p>Puri, Odisha, India</p>
        </div>

        {/* Links */}
        <div>
          <h6 className="text-xl font-bold mb-4 text-[#013289]">Links</h6>
          <ul>
            {links.map((link, index) => (
              <li key={index} className="mb-2">
                <HashLink
                  to={link.href}
                  className="text-[#013289] hover:text-gray-900 transition duration-150"
                >
                  {link.label}
                </HashLink>
              </li>
            ))}
          </ul>
        </div>

        {/* Services */}
        <div>
          <h6 className="text-xl font-bold mb-4 text-[#013289]">Our Services</h6>
          <ul>
            {services.map((service, index) => (
              <li key={index} className="mb-2 text-[#013289]">
                {service.label}
              </li>
            ))}
          </ul>
        </div>

        {/* Social Media */}
        <div>
          <h6 className="text-xl font-bold mb-4 text-[#013289]">
            Social Media
          </h6>
          <div className="flex justify-center space-x-4">
            <button
              onClick={() => openSocialMedia("facebook")}
              aria-label="Facebook"
              className="text-blue-900 hover:text-gray-500"
            >
              <FaFacebook size={24} />
            </button> 
            <button
              onClick={() => openSocialMedia("instagram")}
              aria-label="Instagram"
              className="text-blue-900 hover:text-gray-500"
            >
              <FaInstagram size={24} />
            </button>
            <button
              onClick={() => openSocialMedia("twitter")}
              aria-label="Twitter"
              className="text-blue-900 hover:text-gray-500"
            >
              <FaTwitter size={24} />
            </button>
            <button
              onClick={() => openSocialMedia("linkedin")}
              aria-label="LinkedIn"
              className="text-blue-900 hover:text-gray-500"
            >
              <FaLinkedin size={24} />
            </button>
          </div>
        </div>
      </div>

      {/* Copyright */}
      {/* Copyright */}
      <div className="border-t mt-6 pt-4">
        <p className="text-center text-sm text-gray-600 font-bold">
          Copyright © 2025 - All rights reserved by LMCreations
        </p>
      </div>
    </footer>
  );
};

export default Footer;
