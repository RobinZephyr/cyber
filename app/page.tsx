import Image from "next/image";
import LandingPage from "./components/LandingPage";
import HomePage from "./components/HomePage";
import { EventsPage } from "./components/EventsPage";
import { FormPage } from "./components/FormPage";
import { HoverButton } from "./components/PageParts/HoverButton";
export default function Home() {
  return (
    <div className=" flex-col">
      <HoverButton />
      <LandingPage />
      <HomePage />
      <EventsPage />
      <FormPage />
    </div>
  );
}
