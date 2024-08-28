"use client";
import { motion } from "framer-motion";
import { HelpAndSupportPartOne } from "@/sections/HelpAndSupportPartOne";
import FAQ from "@/components/frequently-asked-questions";
import { AnimatedButton } from "@/sections/AnimatedButton";



async function Home() {

    return (
        <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}>

            <HelpAndSupportPartOne></HelpAndSupportPartOne>
            <div className="flex items-center justify-center py-20">
                <AnimatedButton></AnimatedButton>
            </div>
            <FAQ></FAQ>


        </motion.div>

    );
}

export default Home;
