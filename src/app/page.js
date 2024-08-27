import { HomePagePartOne } from "@/sections/HomePagePartOne";
import { HomePagePartThree } from "@/sections/HomePagePartThree";
import { HomePagePartTwo } from "@/sections/HomePagePartTwo";
import Image from "next/image";

export default function Home() {
  return (
    <section className="relative w-full h-full min-h-screen ">
      <HomePagePartOne></HomePagePartOne>
      <HomePagePartTwo></HomePagePartTwo>
      <HomePagePartThree></HomePagePartThree>
    </section>

  );
}
