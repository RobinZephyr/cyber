import Image from "next/image";
import {
  blackBearLogo,
  cyberBackground,
  innovateLogo,
  techstacksLogo,
} from "../../src/index";
import { logos } from "../../src/constant/HeaderLogos";
import { Banner } from "./Banner";

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
      <Banner />
    </div>
  );
}
