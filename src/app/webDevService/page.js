"use client";
import { HomePagePartSeven } from "@/sections/HomePagePartSeven";
import { WebDevPartFour } from "@/sections/WebDevPartFour";
import { WebDevPartOne } from "@/sections/WebDevPartOne";
import { WebDevPartTwo } from "@/sections/WebDevPartTwo";
import { motion } from "framer-motion";



async function Home() {

    return (
        <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
        >
            <WebDevPartOne></WebDevPartOne>
            <WebDevPartTwo></WebDevPartTwo>
            <WebDevPartFour></WebDevPartFour>
            <HomePagePartSeven></HomePagePartSeven>

        </motion.div>
    );
}

export default Home;


