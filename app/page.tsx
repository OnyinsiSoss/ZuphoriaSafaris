import {
  Hero,AboutUs,Features,
  NewLetter,
  OurExpert,
  Testimonialscarousel, 
} from "@/components";
import { AboutUs2 } from "@/components/sections/about-us/AboutUs2";


export default function Home() {
  return (
    <main className="no-scrollbar overflow-hidden ">
      <Hero />
      <AboutUs />
      <Features /> 
      <AboutUs2 />
      <OurExpert />
      <Testimonialscarousel />
      <NewLetter />
    </main>
  );
}
