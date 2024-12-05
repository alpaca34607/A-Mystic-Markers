import React from 'react';
import  "../../css/style.css";

const GlowingText = ({ text }) => {
  return (
    <div className="glowing-text">
      {text.split('').map((letter, index) => (
        <span key={index} style={{ animationDelay: `${index * 0.3}s` }}>
          {letter}
        </span>
      ))}
    </div>
  );
};

export default GlowingText;
