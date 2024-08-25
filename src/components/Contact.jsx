import React from "react";
import contact from "../assets/contact.jpg";

function Contact() {
  return (
    <div className="w-full h-[90vh] flex mt-8">
      {/* Left Side */}
      <div
        className="w-1/2 h-full bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${contact})` }}
      >
        {/* Optional content can go here */}
      </div>

      {/* Right Side */}
      <div className="w-1/2 h-full flex flex-col justify-center p-8">
        <h1 className="text-5xl font-bold mb-8 text-gray-800">CONTACT US</h1>

        <form className="flex flex-col w-full max-w-md">
          <label htmlFor="name" className="text-gray-600 mb-2">Name</label>
          <input
            type="text"
            id="name"
            placeholder="Enter your name"
            className="h-[40px] w-full border-b border-gray-800 bg-transparent text-black mb-4 placeholder-gray-500"
          />

          <label htmlFor="email" className="text-gray-600 mb-2">Email</label>
          <input
            type="email"
            id="email"
            placeholder="Enter your email"
            className="h-[40px] w-full border-b border-gray-800 bg-transparent text-black mb-4 placeholder-gray-500"
          />

          <label htmlFor="message" className="text-gray-600 mb-2">Message</label>
          <textarea
            id="message"
            rows="8"
            placeholder="Your message"
            className="w-full border-b border-gray-800 bg-transparent text-black mb-6 placeholder-gray-500"
          ></textarea>

          <button
            type="submit"
            className="w-[140px] h-[40px] bg-gray-800 text-white text-sm font-semibold cursor-pointer"
          >
            Submit
          </button>
        </form>
      </div>
    </div>
  );
}

export default Contact;
