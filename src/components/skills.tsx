"use client";

import { motion } from "framer-motion";
import { SKILLS } from "@/lib/data";

const fadeInAnimationVariants = {
    initial: { opacity: 0, y: 20 },
    animate: (index: number) => ({
        opacity: 1,
        y: 0,
        transition: {
            delay: 0.05 * index,
            type: "spring" as const,
            stiffness: 100,
            damping: 15
        },
    }),
};

export function Skills() {
    return (
        <section id="skills" className="py-24 bg-secondary/20">
            <div className="container-width space-y-12">
                <div className="text-center space-y-4">
                    <h2 className="text-3xl md:text-4xl font-bold">Technical Competencies</h2>
                    <p className="text-muted-foreground max-w-2xl mx-auto">
                        A diverse skillset spanning development, networking, and cloud operations.
                    </p>
                    <div className="w-20 h-1 bg-primary mx-auto rounded-full" />
                </div>

                <ul className="flex flex-wrap justify-center gap-3 text-lg">
                    {SKILLS.map((skill, index) => (
                        <motion.li
                            key={index}
                            variants={fadeInAnimationVariants}
                            initial="initial"
                            whileInView="animate"
                            viewport={{ amount: 0.1 }}
                            custom={index}
                            whileHover={{ scale: 1.05, transition: { type: "spring", stiffness: 400, damping: 10 } }}
                            className="bg-card/40 backdrop-blur-md border border-white/10 text-card-foreground rounded-xl px-5 py-3 shadow-sm hover:shadow-md hover:bg-card/60 cursor-default"
                        >
                            {skill}
                        </motion.li>
                    ))}
                </ul>
            </div>
        </section>
    );
}
