import { cyberBackground } from "@/app/src";
import Image from "next/image";
export const Banner = () => {
  return (
    <div className="flex justify-center items-center h-[4rem] md:h-auto w-full">
      <div className="absolute drop-shadow-3xl text-amber-500  font-bold text-[20px] md:text-[35px] xmd:text-[45px] lg:text-[60px] xl:text-[75px]  text-center px-5  tracking-tighter   ">
        LEARN CYBERSECURITY
      </div>
      <Image src={cyberBackground} className="w-full h-full " alt="bg"></Image>
    </div>
  );
};
