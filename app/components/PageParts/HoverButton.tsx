"use client";
import { useEffect, useState } from "react";

export const HoverButton = () => {
  const hoverUp = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 300) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <>
      {isVisible && (
        <div
          onClick={hoverUp}
          className="fixed right-0 bottom-[20%] bg-black bg-opacity-50 z-[9999] text-white text-5xl border-b-2 border-white hover:cursor-pointer"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="w-10 h-10"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M5 15l7-7 7 7"
            />
          </svg>
        </div>
      )}
    </>
  );
};
