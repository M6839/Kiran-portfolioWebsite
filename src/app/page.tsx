'use client'
import About from "@/components/About";
import Contact from "@/components/Contact";
import Experience from "@/components/Experience";
import Footer from "@/components/Footer";
import Hero from "@/components/Hero";
import Navbar from "@/components/Navbar";
import Projects from "@/components/Projects";
import Skills from "@/components/Skills";
import Strenghts from "@/components/Strenghts";
// bg-gradient-to-br from-amber-900 to-amber-300

export default function Home() {
  return (
   
  <div className="min-h-screen w-full overflow-x-hidden relative bg-[#1a1a1a]"
     >
    <Navbar/>
    <Hero/>
    <Strenghts/>
    <About/>
    <Skills/>
    <Experience/>
    <Projects/>
    <Contact/>
    <Footer/>
  </div>

  );
}
