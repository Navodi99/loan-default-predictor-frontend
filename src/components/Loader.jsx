import React, { useEffect, useState } from 'react';

const Loader = ({ text , ring }) => {
  const [dots, setDots] = useState('');

  useEffect(() => {
    if (!text) return;

    const interval = setInterval(() => {
      setDots((prev) => (prev.length < 3 ? prev + '.' : ''));
    }, 500); 

    return () => clearInterval(interval);
  }, [text]);

  return (
    <div className="flex flex-col items-center justify-center gap-4">
       { ring &&
      <div className="relative w-16 h-16">
        {/* Outer ring */}
        <div className="absolute inset-0 border-4 border-t-[#1CD4D4] border-r-[#1CD4D4] border-b-transparent border-l-transparent rounded-full animate-spin"></div>
        {/* Inner ring */}
        <div className="absolute inset-2 border-4 border-t-transparent border-r-transparent border-b-[#1CD4D4] border-l-[#1CD4D4] rounded-full animate-spin animation-delay-150"></div>
        {/* Center dot */}
        <div className="absolute inset-[30%] bg-[#1CD4D4] rounded-full animate-pulse"></div>
      </div>}
      {text && <p className="text-[#1CD4D4] font-medium text-lg">{text}{dots}</p>}
    </div>
  );
};

export default Loader;
