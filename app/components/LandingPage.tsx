import React from "react";
import Header from "./PageParts/Header";

const LandingPage = () => {
  return (
    <div className="bg-gradient-to-bl from-slate-900 to-amber-500 flex justify-center p-3 md:p-5  w-full ">
      <div className="flex-col w-full max-w-5xl">
        <Header />
      </div>
    </div>
  );
};

export default LandingPage;
