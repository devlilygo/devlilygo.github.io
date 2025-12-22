"use client";

import Introduction from "@/components/v4/organisms/Introduction";
import Hero from "@/components/v4/organisms/Hero";
import Contacts from "@/components/v4/organisms/Contacts";
import CurrentWorks from "@/components/v4/organisms/CurrentWorks";

export default function Home() {
  return (
    <div className="bg-gray-950 overflow-x-hidden flex flex-col w-full h-fit cursor-default  font-montserrat">
      <main className="w-full h-full">
        <Hero />
        <Introduction />
        <CurrentWorks />
        <Contacts />
      </main>
    </div>
  );
}
