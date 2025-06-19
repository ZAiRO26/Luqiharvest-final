import React from "react";
import useParallax from "./useParallax";

const ParallaxSection = ({
  bgImage,
  overlay = true,
  height = "400px",
  speed = 0.2,
  className = "",
  children,
}) => {
  const [ref, offset] = useParallax(speed);
  return (
    <section
      ref={ref}
      className={`relative w-full flex items-center justify-center overflow-hidden ${className}`}
      style={{ minHeight: height }}
    >
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage: `url(${bgImage})`,
          zIndex: 1,
          transform: `translateY(${offset}px)`,
          transition: "transform 0.1s linear",
        }}
        aria-hidden="true"
      />
      {overlay && (
        <div className="absolute inset-0 bg-black bg-opacity-40 z-10" />
      )}
      <div className="relative z-20 w-full flex flex-col items-center justify-center h-full">
        {children}
      </div>
    </section>
  );
};

export default ParallaxSection; 