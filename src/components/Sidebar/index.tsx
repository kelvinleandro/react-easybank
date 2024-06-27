import React from "react";

const navItems = ["Home", "About", "Contact", "Blog", "Careers"];

type Props = {
  isOpen: boolean;
};

const Sidebar = ({ isOpen }: Props) => {
  return (
    <div
      className={`fixed inset-0 ${
        isOpen ? "pointer-events-auto" : "pointer-events-none"
      } z-40`}
    >
      <div
        className={`absolute inset-0 bg-gradient-to-b from-dark-blue/50 to-transparent ${
          isOpen ? "opacity-100" : "opacity-0"
        } transition-opacity duration-300 ease-in-out`}
      ></div>

      <div
        className={`absolute top-16 left-0 right-0 mx-4 mt-4 bg-white rounded-lg shadow-2xl transform ${
          isOpen ? "opacity-100" : "opacity-0"
        } transition-opacity duration-300 ease-in-out`}
      >
        <div className="text-center p-4">
          {navItems.map((item, index) => (
            <p
              key={index}
              className="text-dark-blue hover:text-bright-cyan text-lg py-2 cursor-pointer"
            >
              {item}
            </p>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
