import { EventDetails } from "./PageParts/EventDetails";

export const EventsPage = () => {
  return (
    <div className="flex-col">
      <div className=" flex justify-center w-full bg-gradient-to-r from-amber-500 to-slate-900 py-5 md:py-7">
        <div className="max-w-5xl ">
          <div
            className="text-center font-bold text-2xl xmd:text-3xl md:text-4xl lg:text-5xl text-white drop-shadow-xl"
            style={{ textShadow: "2px 2px 4px #000000" }}
          >
            Grow Your Career
            <br />
            Learn Cybersecurity Today!
          </div>
        </div>
      </div>
      <div className="bg-gradient-to-br from-amber-400 to-slate-900 flex justify-center">
        <div className="max-w-5xl">
          <EventDetails />
        </div>
      </div>
    </div>
  );
};
