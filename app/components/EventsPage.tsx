import { Banner } from "./PageParts/Banner";
import { EventDetails } from "./PageParts/EventDetails";

export const EventsPage = () => {
  return (
    <div className="flex-col">
      <div className=" flex justify-center w-full bg-gradient-to-r from-amber-500 to-black py-5 md:py-10">
        <div className=" max-w-screen-xl">
          <div className="text-center font-bold text-2xl xmd:text-3xl md:text-4xl lg:text-5xl text-white drop-shadow-3xl">
            Grow Your Career
            <br />
            Learn Cybersecurity Today!
          </div>
        </div>
      </div>
      <div className="gradient flex justify-center">
        <div className="w-full md:max-w-screen-2xl px-5 ">
          <EventDetails />
        </div>
      </div>
      <div className="bg-black flex justify-center p-5 py-10">
        <div className="max-w-screen-xl flex-col w-full ">
          <div className="font-poppins font-bold pb-5 text-white text-xl md:text-4xl text-center">
            Transform your career and salary!
          </div>
          <Banner />
        </div>
      </div>
    </div>
  );
};
