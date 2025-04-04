import {
  Hero,AboutUs,Features,
  NewLetter, Blog, 
} from "@/components";

export default function Home() {
  return (
    <main className="no-scrollbar">
        <Hero />
        <AboutUs/>
        <Features />
        <NewLetter/>  
        <Blog/>        

    </main>

  );
}
