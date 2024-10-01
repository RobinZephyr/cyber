import { FeatureDetails } from "./PageParts/FeatureDetails";
import PageDetails from "./PageParts/PageDetails";

export default function HomePage() {
  return (
    <div className=" bg-gradient-to-tl from-slate-900 to-amber-500  flex justify-center w-full">
      <div className="flex-col max-w-5xl ">
        <div className="px-5">
          <PageDetails />;
        </div>
        <FeatureDetails />
      </div>
    </div>
  );
}
