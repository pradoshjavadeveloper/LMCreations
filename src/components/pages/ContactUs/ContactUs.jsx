import React from "react";
import { ChatBubbleOvalLeftEllipsisIcon } from "@heroicons/react/24/outline";

const ContactUs = () => {
  const openWhatsApp = () => {
    window.location.href = "https://wa.me/6361468385";
  };

  const openFacebook = () => {
    window.open(
      "https://www.facebook.com/profile.php?id=61565379877004",
      "_blank"
    );
  };

  const openInstagram = () => {
    window.open("https://www.instagram.com/fuzedminds", "_blank");
  };

  return (
    <div className="bg-gray-100 min-h-screen">
      {/* Hero Section */}
      <div
        className="hero relative min-h-[30vh] bg-[#053B50] flex items-center justify-center"
        style={{
          backgroundImage: "url(https://i.ibb.co/CHCh7fv/cool-background.png)",
        }}
      >
        <div className="absolute inset-0 bg-black bg-opacity-50"></div>
        <div className="relative z-10 text-center text-neutral-content">
          <h1 className="text-5xl font-extrabold text-white mb-4">Contact Us</h1>
          <p className="text-lg text-gray-200">
            We're here to connect with you! Choose your preferred platform to
            reach us.
          </p>
        </div>
      </div>

      {/* Contact Options Section */}
      <div className="py-12 px-6">
        <div className="flex flex-wrap justify-center gap-8">
          {/* WhatsApp Section */}
          <div className="max-w-sm p-6 bg-white rounded-lg shadow-md hover:shadow-lg transition duration-300">
            <div className="flex flex-col items-center text-center">
              <ChatBubbleOvalLeftEllipsisIcon className="w-12 h-12 text-green-500 mb-4" />
              <h2 className="text-2xl font-bold text-gray-800 mb-2">
                WhatsApp Us
              </h2>
              <p className="text-gray-600 mb-4">+91 63614 68385</p>
              <button
                onClick={openWhatsApp}
                className="px-5 py-2 text-white bg-green-600 rounded-lg hover:bg-green-700 transition duration-300"
              >
                Message Now
              </button>
            </div>
          </div>

          {/* Facebook Section */}
          <div className="max-w-sm p-6 bg-white rounded-lg shadow-md hover:shadow-lg transition duration-300">
            <div className="flex flex-col items-center text-center">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="w-12 h-12 text-blue-600 mb-4"
                viewBox="0 0 24 24"
                fill="currentColor"
              >
                <path d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 5.123 3.848 9.348 8.792 9.948V15.6h-2.65v-3.6h2.65v-2.82c0-2.622 1.576-4.058 3.942-4.058 1.146 0 2.353.21 2.353.21v2.582h-1.326c-1.306 0-1.71.815-1.71 1.65v2.436h2.908l-.464 3.6h-2.444V21.948C18.152 21.348 22 17.123 22 12z" />
              </svg>
              <h2 className="text-2xl font-bold text-gray-800 mb-2">
                Facebook
              </h2>
              <p className="text-gray-600 mb-4">/fuzedminds Technologies</p>
              <button
                onClick={openFacebook}
                className="px-5 py-2 text-white bg-blue-700 rounded-lg hover:bg-blue-800 transition duration-300"
              >
                Follow Us
              </button>
            </div>
          </div>

          {/* Instagram Section */}
          <div className="max-w-sm p-6 bg-white rounded-lg shadow-md hover:shadow-lg transition duration-300">
            <div className="flex flex-col items-center text-center">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="w-12 h-12 text-pink-500 mb-4"
                viewBox="0 0 24 24"
                fill="currentColor"
              >
                <path d="M7.75 2C4.246 2 2 4.246 2 7.75v8.5C2 19.754 4.246 22 7.75 22h8.5c3.504 0 5.75-2.246 5.75-5.75v-8.5C22 4.246 19.754 2 16.25 2h-8.5zm8.5 1.5c2.621 0 4.25 1.629 4.25 4.25v8.5c0 2.621-1.629 4.25-4.25 4.25h-8.5c-2.621 0-4.25-1.629-4.25-4.25v-8.5c0-2.621 1.629-4.25 4.25-4.25h8.5zm-4.25 4.25a5 5 0 1 0 0 10 5 5 0 0 0 0-10zm0 1.5a3.5 3.5 0 1 1 0 7 3.5 3.5 0 0 1 0-7zm5.125-3.875a.875.875 0 1 0 0 1.75.875.875 0 0 0 0-1.75z" />
              </svg>
              <h2 className="text-2xl font-bold text-gray-800 mb-2">
                Instagram
              </h2>
              <p className="text-gray-600 mb-4">/fuzedminds</p>
              <button
                onClick={openInstagram}
                className="px-5 py-2 text-white bg-pink-500 rounded-lg hover:bg-pink-600 transition duration-300"
              >
                Follow Us
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactUs;
