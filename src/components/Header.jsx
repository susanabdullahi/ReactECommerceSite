import React from 'react';
import Logo from "../assets/brand.png";
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <div className="w-full bg-[#f7f2f2]">
      {/* Navbar */}
      <div className="flex items-center justify-between h-20">
        {/* Left */}
        <div className="flex items-center h-full pl-12">
          <img src={Logo} alt='' className="w-1/2" />
        </div>
        {/* Right */}
        <div className="flex items-center space-x-5  m-5">
          <Link to="/" className="text-[#2b2a2a] text-2xl no-underline hover:text-[#504e4e]">Home</Link>
          <Link to="/Products" className="text-[#2b2a2a] text-2xl no-underline hover:text-[#504e4e]">Products</Link>
          <Link to="/About" className="text-[#2b2a2a] text-2xl no-underline hover:text-[#504e4e]">About</Link>
          <Link to="/Contacts" className="text-[#2b2a2a] text-2xl no-underline hover:text-[#504e4e]">Contacts</Link>
        </div>
      </div>
      
    </div>  
  )
}

export default Header;
