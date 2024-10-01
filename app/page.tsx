import Image from "next/image";
import LandingPage from "./components/LandingPage";
import HomePage from "./components/HomePage";
export default function Home() {
  return (
    <div className="border-2 border-white flex-col">
      <LandingPage />
      <HomePage />
    </div>
  );
}
