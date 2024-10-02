import { blackBearLogo } from "@/app/src";
import { features } from "@/app/src/constant/FeaturesMap";
import Image from "next/image";

export const FeatureDetails = () => {
  return (
    <div className=" flex justify-center py-10 w-full">
      <div>
        <div className="flex-col space-y-5 lg:px-2 lg:flex-row flex lg:space-y-0 lg:space-x-5  ">
          {features.map((ft, index) => (
            <div
              key={index}
              className="flex-col bg-gradient-to-b from-slate-50 from-70% to-orange-400 ] p-4 drop-shadow-md w-full w-full max-w-[30rem] h-fit "
            >
              <div className="flex justify-center">
                <Image src={ft.image} className="w-24 h-24" alt={ft.title} />
              </div>
              <div className="flex w-full justify-center">
                <div className="text-center font-extrabold text-xl pt-5 pb-3 tracking-wide w-full w-[15rem] ">
                  {ft.title}
                </div>
              </div>
              <div className="flex justify-center">
                <div className="w-[90%] px-5 lg:px-5 space-y-3">
                  {ft.feat.map((f, index) => (
                    <ul key={index} className="list-disc">
                      <li>{f}</li>
                    </ul>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
        <div className="flex justify-center">
          <Image
            src={blackBearLogo}
            alt="Black Bear Logo"
            className="h-20 w-auto mt-4"
          />
        </div>
      </div>
    </div>
  );
};
