import { StaticImageData } from "next/image";
import { featBenefit, featHat, featPuzzle } from "..";

type FeatureTypes = {
  title: string;
  feat: string[];
  image: StaticImageData;
};

export const features: FeatureTypes[] = [
  {
    title: "What Black Bear Academy is",
    feat: [
      "Designed by our practitioners who have years of experience.",
      "The courseware was simplified with the help of educators but you still get complete real world experience.",
      "Create applied knowledge transfer from our practitioners to yours.",
    ],
    image: featHat,
  },
  {
    title: "Features",
    feat: [
      "More than 1000+ video tutorial in our library.",
      "Integrated gamified challenges, interactive videos and animation.",
      "Online chat, video conferencing and classroom based lessons.",
    ],
    image: featPuzzle,
  },
  {
    title: "Benefits",
    feat: [
      "Bring immediate ROI to your organization by applying what you learn back to work.​",
      "Hundreds of hours of hands on laboratories and table top exercises to challenge your current norm. ",
      "Learn to create compliance reports, build chain of custody processes and incident response frameworks.",
    ],
    image: featBenefit,
  },
];
