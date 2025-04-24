import React, { useState } from "react";

const Navbar = () => {
  const [isMobile, setIsMobile] = useState(false);
  return (
    <div className="sticky top-0">
          <div className="flex items-center justify-between px-3 md:px-12 lg:px-20 py-3 md:py-5 bg-white">
      <div>
        <img src="../images/favicon.svg" />
      </div>
      <div className="hidden md:block">
        <div className="flex md:gap-6 lg:gap-10 bg-slate-100 px-4 py-2 rounded">
          <a href="#home" className="">Home</a>
          <a href="#service" className="">Service</a>
          <a href="#about" className="">About</a>
          <a href="#portfolio" className="">Portfolio</a>
          <a href="#testemonial" className="">Testemonial</a>
        </div>
      </div>
      <div className="hidden md:block">
        <a href="#contact" className="py-2 px-4 bg-blue-600 text-white rounded" >Contact us</a>
      </div>
      <div className="md:hidden">
        <button className="bg-slate-100 px-2 py-2 rounded" onClick={()=>setIsMobile(!isMobile)}>
            <span className="material-symbols-rounded">
              {isMobile ? "close" : "menu"}
            </span>
        </button>
      </div>
    </div>
    {
      isMobile ? <div className="md:hidden absolute w-full">
        <div className="flex flex-col gap-4 px-4 bg-slate-50 py-5">
        <a href="#home" className="" onClick={()=>setIsMobile(!isMobile)}>Home</a>
          <a href="#service" className="" onClick={()=>setIsMobile(!isMobile)}>Service</a>
          <a href="#about" className="" onClick={()=>setIsMobile(!isMobile)}>About</a>
          <a href="#portfolio" className="" onClick={()=>setIsMobile(!isMobile)}>Portfolio</a>
          <a href="#testemonial" className="" onClick={()=>setIsMobile(!isMobile)}>Testemonial</a>
          <a href="#contact" className="py-2 bg-blue-600 rounded text-white flex justify-center" onClick={()=>setIsMobile(!isMobile)}>Contact Us</a>
        </div>
      </div>
      : ""
    }
    </div>
  );
};

export default Navbar;
