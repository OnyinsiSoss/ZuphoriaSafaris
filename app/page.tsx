import {
  Hero,AboutUs,Features,
  NewLetter, Testimonials,
  OurExpert, 
} from "@/components";


export default function Home() {
  return (
    <main className="no-scrollbar">
        <Hero />
        <AboutUs/>
        <Features />
        <OurExpert/>  
        <NewLetter/>  
        <Testimonials/>  

    </main>

  );
}
