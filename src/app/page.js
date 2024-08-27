import { ClientType } from "@/sections/ClientType";
import { HomePagePartFive } from "@/sections/HomePagePartFive";
import { HomePagePartFour } from "@/sections/HomePagePartFour";
import { HomePagePartNine } from "@/sections/HomePagePartNine";
import { HomePagePartOne } from "@/sections/HomePagePartOne";
import { HomePagePartSix } from "@/sections/HomePagePartSix";
import { HomePagePartThree } from "@/sections/HomePagePartThree";
import { HomePagePartTwo } from "@/sections/HomePagePartTwo";
import { LogoTicker } from "@/sections/LogoTicker";
import Image from "next/image";

export default function Home() {
  return (
    <section className="relative w-full h-full min-h-screen ">
      <HomePagePartOne></HomePagePartOne>
      <HomePagePartTwo></HomePagePartTwo>
      <HomePagePartThree></HomePagePartThree>
      <HomePagePartFour></HomePagePartFour>
      <div className="flex items-center justify-center">
        <a href="">
          <button type="button" className="py-3 px-10 inline-flex items-center gap-x-2 text-sm font-medium rounded-full border border-transparent bg-gray-100 text-gray-800 hover:bg-gray-200 focus:outline-none focus:bg-gray-200 disabled:opacity-50 disabled:pointer-events-none dark:bg-white/10 dark:text-white dark:hover:bg-white/20 dark:hover:text-white dark:focus:bg-white/20 dark:focus:text-white">
            Open Jobs {'>'}
          </button>
        </a>
      </div>
      <HomePagePartFive></HomePagePartFive>
      <HomePagePartSix></HomePagePartSix>
      <ClientType></ClientType>
      <LogoTicker></LogoTicker>
      <HomePagePartNine></HomePagePartNine>
    </section>

  );
}
