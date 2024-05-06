import Image from "next/image";
import { Hero } from "./Components/Hero";
import { SectionTwo } from "./Components/SectionTwo";
import { AboutSection } from "./Components/AboutSection";
import { FavoriteProjects } from "./Components/FavoriteProjects";
import { Footer } from "./Components/Footer";

export default function Home() {
  return (
    <>
     <Hero/>
     <SectionTwo/>
     <AboutSection/>
     <FavoriteProjects/>
     <Footer/>
    </>
  );
}
