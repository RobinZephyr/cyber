import Image from "next/image";
import {
  blackBearLogo,
  cyberBackground,
  innovateLogo,
  techstacksLogo,
} from "../../src/index";
import { logos } from "../../src/constant/HeaderLogos";

export default function Header() {
  return (
    <div className="w-full">
      <div className=" flex flex-col md:flex-row md:justify-between">
        {logos.map((l, index) => (
          <a href={l.link} className="flex justify-center " key={index}>
            <Image
              src={l.image}
              className="h-14 object-contain w-[40%] min-w-[150px] md:w-56 m-1"
              alt={l.name}
            />
          </a>
        ))}
      </div>
      <div className="text-white  py-5 md:py-10 text-center text-xl md:text-3xl  lg:text-5xl font-bold font-poppins">
        Do you want to secure a high-paying job?
      </div>

      <div className="flex justify-center items-center h-[4rem] md:h-auto w-full">
        <div
          style={{ textShadow: "2px 2px 4px #000000" }}
          className="absolute drop-shadow-lg text-amber-500  font-bold text-[20px] md:text-[35px] xmd:text-[45px] lg:text-[60px] xl:text-[75px]  text-center px-5  tracking-tighter   "
        >
          LEARN CYBERSECURITY
        </div>
        <Image
          src={cyberBackground}
          className="w-full h-full "
          alt="bg"
        ></Image>
      </div>
    </div>
  );
}
