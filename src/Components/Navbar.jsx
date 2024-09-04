import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import image from "../image.png";

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const offset = window.scrollY;
      setScrolled(offset > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div className={`h-[60px] w-full flex flex-row items-center text-white fixed top-0 z-10 transition-opacity duration-300 ${scrolled ? "bg-black bg-opacity-100" : "bg-black bg-opacity-50"}`}>
      <img src={image} className="h-[30px] ml-5" alt="Logo" />
      <Link to="/" className="text-lg ml-[50px]">Movies</Link>
      <Link to="/Watchlist" className="text-lg ml-[50px]">WatchList</Link>
    </div>
  );
};

export default Navbar;
