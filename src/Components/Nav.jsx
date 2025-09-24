import React, { useState } from "react";
let Nav = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);

  return (
    <header className="flex justify-between items-center px-6 py-4 shadow-md bg-white fixed w-full top-0 left-0 z-50">
      <div className="flex items-center gap-2">
        <i className="fa-solid fa-hexagon-nodes mb-2 text-[22px] text-blue-600"></i>
        <h2 className="text-[22px] font-bold">AI Chatbot</h2>
      </div>
      <nav className="hidden md:flex gap-6 font-medium">
        <a href="#features" className="hover:text-blue-600">Features </a>
        <a href="#how-it-works" className="hover:text-blue-600">How it works</a>
        <a href="#pricing" className="hover:text-blue-600"> Pricing</a>
        <a href="#testimonials" className="hover:text-blue-600">Testimonials</a>
        <a href="#faq" className="hover:text-blue-600">FAQ</a>
      </nav>
      <button className="md:hidden text-2xl text-blue-600" onClick={toggleMenu} aria-label="Toggle Menu">
        <i className={`fa-solid ${isOpen ? 'fa-times' : 'fa-bars'}`}></i>
      </button>
      {isOpen && (
        <div className="absolute top-full left-0 w-full bg-white shadow-md md:hidden flex flex-col items-center gap-4 py-6 font-medium animate-slideDown">
          <a href="#features">Features</a>
          <a href="#how-it-works"> How it works</a>
          <a href="#pricing">Pricing</a>
          <a href="#testimonials">Testimonials</a>
          <a href="#faq">FAQ</a>
        </div>
      )}
    </header>
  );
};
export default Nav;
