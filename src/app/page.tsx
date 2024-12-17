"use client";
import Image from "next/image";
import { Carousel } from "./components/carousel/carousel";
import Navbar  from "./components/Navbar/Navbar";
import HomeComponent from "./components/Home/Home";
import  Footer  from "./components/Footer/Footer";
export default function Home() {
  return (
    <div className="">
      <Navbar />
      {/* <Carousel /> */}
      {/* <Carousel /> */}
      <HomeComponent />
      <Footer />
    </div>
  );
}
