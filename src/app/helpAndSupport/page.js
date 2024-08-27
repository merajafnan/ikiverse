"use client";
import { motion } from "framer-motion";
import { HelpAndSupportPartOne } from "@/sections/HelpAndSupportPartOne";
import { HelpAndSupportPartTwo } from "@/sections/HelpAndSupportPartTwo";



async function Home() {

    return (
        <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}>

            <HelpAndSupportPartOne></HelpAndSupportPartOne>
            <HelpAndSupportPartTwo></HelpAndSupportPartTwo>

        </motion.div>

    );
}

export default Home;
