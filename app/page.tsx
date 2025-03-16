import Image from "next/image";
import styles from "./page.module.css";
import Hero from "../components/Hero";
import { FloatingNav } from "@/components/ui/floating-navbar";
import React from "react";
import { FaH } from "react-icons/fa6";
import Grid from "@/components/Grid";

export default function Home() {
  return (
    <main className="relative bg-black-100 flex justify-center items-center flex-col overflow-hidden mx-auto sm:px-10 px-5">
      <div className="max-w-7xl w-full">
        <FloatingNav navItems={[
          {name: 'Home', link: '/', icon:<FaH />},
        ]}
          
        />
        <Hero />

        <Grid />
      </div>
    </main>
  );
}
