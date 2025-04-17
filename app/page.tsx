import {
  Hero,AboutUs,Features,
  NewLetter,
  OurExpert,
  Testimonialscarousel, 
} from "@/components";
import { AboutUs2 } from "@/components/sections/about-us/AboutUs2";


export default function Home() {
  return (
    <main className="no-scrollbar p-2 md:p-4 overflow-hidden ">
      <Hero />
      <AboutUs />
      <AboutUs2/>
      <Features />
      <OurExpert />
      <Testimonialscarousel />
      <NewLetter />
    </main>
  );
}
