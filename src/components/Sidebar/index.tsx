import React from "react";

const navItems = ["Home", "About", "Contact", "Blog", "Careers"];

type Props = {
  isOpen: boolean;
};

const Sidebar = ({ isOpen }: Props) => {
  return (
    <div
      className={`md:hidden fixed z-50 top-16 left-0 right-0 mx-4 mt-4 bg-white rounded-lg shadow-2xl transform ${
        isOpen ? "opacity-100" : "opacity-0"
      } transition-opacity duration-300 ease-in-out z-40`}
    >
      <div className="text-center p-4">
        {navItems.map((item, index) => (
          <p key={index} className="text-dark-blue hover:text-bright-cyan text-lg py-2 cursor-pointer">
            {item}
          </p>
        ))}
      </div>
    </div>
  );
};

export default Sidebar;
