import React from "react";
import Image from "next/image";

const Footer = () => {
  return (
    <footer className="footer border z-10 border-t-[#33353F] border-b-transparent border-l-transparent border-r-transparent text-white" >
      <div className="container p-12 flex justify-between pt-8 pb-9">
        <div className="flex justify-between px-4 -mt-8 mb-1">
        <Image
                  src="/images/MyLogo.png"
                  alt="Logo"
                  width={70}
                  height={70}
                  style={{ marginLeft: -33, marginTop: 15, display: 'block', position: 'absolute' }}
                />
        </div>
        <p className="text-slate-600">All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
