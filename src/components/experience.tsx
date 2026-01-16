"use client";

import React from "react";
import { motion } from "framer-motion";
import { EXPERIENCE, EDUCATION } from "@/lib/data";
import { Briefcase, GraduationCap } from "lucide-react";

export function Experience() {
    return (
        <section id="experience" className="py-24 container-width">
            <div className="text-center space-y-4 mb-16">
                <h2 className="text-3xl md:text-4xl font-bold">Experience & Education</h2>
                <div className="w-20 h-1 bg-primary mx-auto rounded-full" />
            </div>

            <div className="grid md:grid-cols-2 gap-12">
                {/* Work Experience */}
                <div className="space-y-8">
                    <div className="flex items-center gap-3 mb-6">
                        <Briefcase className="w-6 h-6 text-primary" />
                        <h3 className="text-2xl font-bold">Work History</h3>
                    </div>
                    <div className="space-y-8 border-l-2 border-border/50 ml-3 pl-8 relative">
                        {EXPERIENCE.map((item, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, x: -20, scale: 0.9 }}
                                whileInView={{ opacity: 1, x: 0, scale: 1 }}
                                viewport={{ amount: 0.3 }}
                                transition={{ type: "spring", stiffness: 260, damping: 20, delay: index * 0.1 }}
                                className="relative group p-6 rounded-2xl border border-white/5 bg-card/20 backdrop-blur-sm hover:bg-card/40 transition-colors"
                            >
                                <div className="absolute -left-[53px] top-6 w-5 h-5 rounded-full bg-background border-4 border-primary" />
                                <div className="space-y-2">
                                    <h4 className="font-bold text-lg">{item.role}</h4>
                                    <p className="text-primary font-medium">{item.company}</p>
                                    <p className="text-sm text-muted-foreground">{item.period} | {item.location}</p>
                                    <ul className="list-disc list-inside text-muted-foreground text-sm space-y-1 mt-2">
                                        {item.description.map((desc, i) => (
                                            <li key={i}>{desc}</li>
                                        ))}
                                    </ul>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>

                {/* Education */}
                <div className="space-y-8">
                    <div className="flex items-center gap-3 mb-6">
                        <GraduationCap className="w-6 h-6 text-primary" />
                        <h3 className="text-2xl font-bold">Education</h3>
                    </div>
                    <div className="space-y-8 border-l-2 border-border/50 ml-3 pl-8 relative">
                        {EDUCATION.map((item, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, x: 20 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ amount: 0.3 }}
                                transition={{ duration: 0.5, delay: index * 0.1 }}
                                className="relative p-6 rounded-2xl border border-white/5 bg-card/20 backdrop-blur-sm hover:bg-card/40 transition-colors"
                            >
                                <div className="absolute -left-[53px] top-6 w-5 h-5 rounded-full bg-background border-4 border-primary" />
                                <div className="space-y-2">
                                    <h4 className="font-bold text-lg">{item.degree}</h4>
                                    <p className="text-primary font-medium">{item.institution}</p>
                                    <p className="text-sm text-muted-foreground">{item.period}</p>
                                    {item.status && <p className="text-sm font-medium text-blue-500">{item.status}</p>}
                                    {item.grade && <p className="text-sm text-muted-foreground">Grade: {item.grade}</p>}
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}
