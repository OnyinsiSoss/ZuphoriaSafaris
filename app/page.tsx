import {
  Hero,AboutUs,Features,
  NewLetter, Blog, 
} from "@/components";

export default function Home() {
  return (
    <main className="no-scrollbar">
        <Hero />
        <Features />
        <AboutUs/>
        <NewLetter/>  
        <Blog/>        

    </main>

  );
}
