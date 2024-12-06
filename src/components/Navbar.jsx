import React, { useState } from 'react';

function Navbar() {
  const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <>
      <nav className="bg-gray-800 p-4 z-50">
        <div className="container mx-auto flex justify-between items-center">
          <div className="text-white text-lg font-bold">
            <a href="/">Aleris</a>
          </div>
          <div className="hidden md:flex space-x-4">
            <a href="/" className="text-gray-300 hover:text-white">Home</a>
            <a href="/about" className="text-gray-300 hover:text-white">About</a>
            <a href="/shop" className="text-gray-300 hover:text-white">Shop</a>
          </div>
          <div className="md:hidden">
            <button onClick={toggleMobileMenu} className="text-white focus:outline-none" id="menu-button">
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7"></path>
              </svg>
            </button>
          </div>
        </div>
        {isMobileMenuOpen && (
          <div className="md:hidden bg-gray-700">
            <a href="/" className="block text-gray-300 hover:text-white px-4 py-2">Home</a>
            <a href="/about" className="block text-gray-300 hover:text-white px-4 py-2">About</a>
            <a href="/shop" className="block text-gray-300 hover:text-white px-4 py-2">Shop</a>
          </div>
        )}
      </nav>
    </>
  );
}

export default Navbar;
