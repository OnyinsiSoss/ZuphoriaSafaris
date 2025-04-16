import {
  Hero,AboutUs,Features,
  NewLetter,
  OurExpert,
  Testimonialscarousel, 
} from "@/components";


export default function Home() {
  return (
    <main className="no-scrollbar p-2 md:p-4 overflow-hidden ">
      <Hero />
      <AboutUs />
      <Features />
      <OurExpert />
      <NewLetter />
        <Testimonialscarousel />
    </main>
  );
}
