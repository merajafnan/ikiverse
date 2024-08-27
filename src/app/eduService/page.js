"use client";
import { motion } from "framer-motion";
import { EduPartOne } from "@/sections/EduPartOne";
import { EduPartThree } from "@/sections/EduPartThree";
import { EduPartTwo } from "@/sections/EduPartTwo";




async function Home() {

    return (
        <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
        >
            <EduPartOne></EduPartOne>
            <EduPartTwo></EduPartTwo>
            <EduPartThree></EduPartThree>

        </motion.div>
    );
}

export default Home;

