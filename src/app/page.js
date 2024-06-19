import Image from "next/image";
import { home } from "../../public/images";
import Navbar from "@/components/navbar/Navbar";
import Landing from "@/components/landing/Landing";
import About from "@/components/about/About";
import GridPage from "@/components/grid/GridPage";
import Footer from "@/components/footer/Footer";

export default function Home() {
  return (
    <div className="relative">
      
      <Landing/>
      <About/>
     <GridPage/>
    
    </div>
  );
}
