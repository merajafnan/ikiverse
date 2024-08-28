"use client";
import ContactForm from "@/components/contact-form";
import FAQ from "@/components/frequently-asked-questions";
import { AnimatedButton } from "@/sections/AnimatedButton";
import { ContactUsPartOne } from "@/sections/ContactUsPartOne";
import { FormSubmitIO } from "@/sections/FormSubmitIO";
import { HelpAndSupportPartTwo } from "@/sections/HelpAndSupportPartTwo";
import { motion } from "framer-motion";

async function Home() {

    return (
        <motion.div
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
        >
            <ContactUsPartOne ></ContactUsPartOne>
            <HelpAndSupportPartTwo></HelpAndSupportPartTwo>
            <div className="flex items-center justify-center py-10">
                <AnimatedButton></AnimatedButton>
            </div>
            

        </motion.div>

    );
}

export default Home;
