import { ClientType } from "@/sections/ClientType";
import FormSubmitIO from "@/sections/FormSubmitIO";
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
          <button type="button" className="btn-home-page">
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
