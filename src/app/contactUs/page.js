"use client";
import ContactForm from "@/components/contact-form";
import FAQ from "@/components/frequently-asked-questions";
import { ContactUsPartOne } from "@/sections/ContactUsPartOne";
import { motion } from "framer-motion";

async function Home() {

    return (
        <motion.div
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
        >
            <ContactUsPartOne ></ContactUsPartOne>
            <div id="employerForm" className="py-10">
                <ContactForm></ContactForm>
            </div>
            <FAQ></FAQ>

        </motion.div>

    );
}

export default Home;
