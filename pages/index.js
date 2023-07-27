import Image from "next/image";
import { Inter } from "next/font/google";
import HeroBanner from "@/components/HeroBanner";
import Details from "@/components/Details";
import DentalDiscuss from "@/components/DentalDiscuss";
import Slider from "@/components/Slider";
import BeforeAfter from "@/components/BeforeAfter";
import Blog from "@/components/Blog";



const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <main className="w-full h-full">
       <HeroBanner />
      <Details />
      <DentalDiscuss />
      <Slider />
      <BeforeAfter />
      <Blog />
    </main>
  );
}
