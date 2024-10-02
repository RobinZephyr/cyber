import { cross } from "@/app/src";
import { events } from "@/app/src/constant/EventsMap";
import Image from "next/image";
export const EventDetails = () => {
  return (
    <div className="flex justify-center">
      <div className="flex-col xl:grid max-w-[40rem] xl:max-w-none xl:grid-cols-2 w-full py-10 xl:gap-4 xl:space-y-0 space-y-6">
        {events.map((e, index) => (
          <div
            key={index}
            className="p-2 md:p-4 shadow-3xl py-7 space-y-4 font-poppins"
          >
            <div className="flex-col">
              <div className="p-1 text-white  font-bold  uppercase   bg-gradient-to-r from-amber-400 from-10%  to-[rgba(255, 40, 145, 0)]">
                <span className="drop-shadow-4xl tracking-wide text-3xl xmd:text-3xl lg:text-5xl">
                  {e.title}
                </span>
              </div>
              <div className="bg-gradient-to-r from-red-500  to-white bg-clip-text text-transparent text-3xl uppercase  drop-shadow-3xl   font-extrabold tracking-tighter font-anton ">
                {e.date}
              </div>
            </div>
            <div className="text-white text-md tracking-tigher uppercase font-bold ">
              Total Instructions: {e.days} {e.days === 1 ? "DAY" : "DAYS"}
            </div>
            <ul className="px-5 md:px-10 text-md roboto-regular tracking-wide text-white font-bold">
              {e.benefits.map((ben, index) => (
                <li key={index} className="list-disc">
                  {ben}
                </li>
              ))}
            </ul>
            <div className="flex justify-center  w-full px-2 md:px-5 md:px-0 ">
              <div className="flex-col md:flex md:flex-row w-full pt-5 justify-between space-y-4 md:space-y-0 md:space-x-4 ">
                <div className=" text-gray-500 bg-amber-400 px-2 py-5 text-xl   md:w-fit font-bold md:text-2xl w-full ">
                  <div className="flex justify-between w-full space-x-10">
                    <div className="relative">
                      <Image
                        src={cross}
                        alt="err"
                        className="absolute red-cross w-14 left-[60%] "
                      />
                      USD$<span className="">{e.oldPrice}</span>
                    </div>
                    <div>{e.newPrice}</div>
                  </div>
                </div>
                <div className="w-full flex justify-center md:justify-end">
                  <a
                    href="https://www.innovatemarketing.co.nz/blackbearacademy"
                    className="w-full md:w-fit"
                  >
                    <div className="text-gray-500 bg-gray-200 rounded-full py-5 px-3   md:w-56  flex justify-center items-center drop-shadow-glow hover:cursor-pointer">
                      <div> I Want This</div>
                    </div>
                  </a>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
