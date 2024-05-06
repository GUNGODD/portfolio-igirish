import Image from "next/image";
import { Hero } from "./Components/Hero";
import { SectionTwo } from "./Components/SectionTwo";
import { AboutSection } from "./Components/AboutSection";

export default function Home() {
  return (
    <>
     <Hero/>
     <SectionTwo/>
     <AboutSection/>
    </>
  );
}
