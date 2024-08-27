"use client";
import { motion } from "framer-motion";
import TabsWithImage from '@/components/Tabs-With-Image';
import { AboutUsPartOne } from "@/sections/AboutUsPartOne";
import { AboutUsPartTwo } from "@/sections/AboutUsPartTwo";
import { AboutUsPartThree } from "@/sections/AboutUsPartThree";


async function Home() {
    return (
        <motion.div
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
        >
            <section className="relative w-full h-full min-h-screen pb-10">
                <AboutUsPartOne></AboutUsPartOne>
                <AboutUsPartTwo></AboutUsPartTwo>
                <AboutUsPartThree></AboutUsPartThree>
                <TabsWithImage />
            </section>
            
        </motion.div>
    );
}

export default Home;


