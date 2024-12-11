import React from 'react';
import '../../css/Fog.css';

const generateRandomFog = (count) => {
  const fogElements = [];
  for (let i = 0; i < count; i++) {
    const randomX = Math.random() * 100;
    const randomY = Math.random() * 60; // 限制霧的範圍在 60vh 內
    const randomOpacity = Math.random() * 0.5 + 0.3;
    const randomDuration = Math.random() * 60 + 60;
    fogElements.push(
      <div
        key={i}
        className="fog"
        style={{
          top: `${randomY}%`,
          left: `${randomX}%`,
          opacity: randomOpacity,
          animationDuration: `${randomDuration}s`,
        }}
      ></div>
    );
  }
  return fogElements;
};

const Fog = ({ className }) => {
  return <div className={`fog-container ${className}`}>{generateRandomFog(20)}</div>; // 增加霧的數量
};

export default Fog;
