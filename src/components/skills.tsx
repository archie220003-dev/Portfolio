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
                            viewport={{ once: true }}
                            custom={index}
                            whileHover={{ scale: 1.05 }}
                            className="bg-card text-card-foreground border border-border/50 rounded-xl px-5 py-3 shadow-sm hover:shadow-md transition-shadow"
                        >
                            {skill}
                        </motion.li>
                    ))}
                </ul>
            </div>
        </section>
    );
}
