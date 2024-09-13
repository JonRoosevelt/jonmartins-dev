import React from "react";
import "./glitch.css";

interface GlitchProps {
  children: React.ReactNode;
  color?: string;
}

const Glitch: React.FC<GlitchProps> = ({ children }) => {
  return (
    <div className="flex flex-col text-teal-500 text-xl">
      <div className="grid grid-cols-1">
        <div className="relative">
          <span className="absolute inset-0 font-bold text-4xl glitch-index0">
            {children}
          </span>
          <span className="absolute inset-0 font-bold text-4xl glitch-index1">
            {children}
          </span>
          <span className="absolute inset-0 font-bold text-4xl glitch-index2">
            {children}
          </span>
        </div>
      </div>
    </div>
  );
};

export default Glitch;
