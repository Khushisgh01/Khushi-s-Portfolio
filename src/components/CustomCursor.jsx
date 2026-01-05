import React, { useEffect, useState } from "react";

const CustomCursor = () => {
  const [position, setPosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const moveCursor = (e) => {
      setPosition({ x: e.clientX, y: e.clientY });
    };
    window.addEventListener("mousemove", moveCursor);
    return () => window.removeEventListener("mousemove", moveCursor);
  }, []);

  return (
    <div
      className='fixed top-0 left-0 w-6 h-6 border-2 border-secondary rounded-full pointer-events-none z-[9999] transition-transform duration-100 ease-out'
      style={{
        transform: `translate(${position.x - 12}px, ${position.y - 12}px)`,
      }}
    >
      <div className='absolute top-1/2 left-1/2 w-1 h-1 bg-white rounded-full -translate-x-1/2 -translate-y-1/2' />
    </div>
  );
};

export default CustomCursor;