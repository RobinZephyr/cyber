import { StaticImageData } from "next/image";
import { blackBearLogo, innovateLogo, techstacksLogo } from "..";

type LogoLinkType = {
  name: string;
  link: string;
  image: StaticImageData;
};
export const logos: LogoLinkType[] = [
  {
    name: "Innovate Logo",
    link: "https://www.innovatemarketing.co.nz/",
    image: innovateLogo,
  },
  {
    name: "Black Bear Logo",
    link: "https://www.innovatemarketing.co.nz/_files/ugd/89fa3f_cc9d4643cb8540b4ab0708bd05bdf548.pdf",
    image: blackBearLogo,
  },
  {
    name: "Techstacks Logo",
    link: "https://techstacksph.com/",
    image: techstacksLogo,
  },
];
