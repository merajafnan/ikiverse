"use client";
import { motion } from "framer-motion";
import { HrServicePartOne } from "@/sections/HrServicePartOne";
import { HrServicePartTwo } from "@/sections/HrServicePartTwo";
import { HrServicePartThree } from "@/sections/HrServicePartThree";
import { AnimatedButton } from "@/sections/AnimatedButton";


async function Home() {

    return (
        <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
        >


                    <HrServicePartOne></HrServicePartOne>
                    <HrServicePartTwo></HrServicePartTwo>
                    <HrServicePartThree></HrServicePartThree>
                    <div className="flex items-center justify-center py-10">
                        <AnimatedButton></AnimatedButton>
                </div>

        </motion.div>
    );
}

export default Home;
