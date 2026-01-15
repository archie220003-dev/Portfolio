"use client";

import { motion } from "framer-motion";
import { PROJECTS } from "@/lib/data";
import { Folder } from "lucide-react";
import { Button } from "@/components/ui/button";

export function Projects() {
    return (
        <section id="projects" className="py-24 bg-secondary/20">
            <div className="container-width">
                <div className="text-center space-y-4 mb-16">
                    <h2 className="text-3xl md:text-4xl font-bold">Featured Projects</h2>
                    <div className="w-20 h-1 bg-primary mx-auto rounded-full" />
                </div>

                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {PROJECTS.map((project, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ amount: 0.3 }}
                            transition={{ delay: index * 0.1, duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
                            whileHover={{ y: -5, scale: 1.02 }}
                            className="group relative bg-background/50 backdrop-blur-sm border border-white/10 rounded-2xl overflow-hidden hover:shadow-2xl transition-all duration-300 hover:scale-[1.02]"
                        >
                            <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />

                            <div className="p-8 space-y-4 relative z-10">
                                <div className="flex items-center justify-between">
                                    <div className="p-3 bg-primary/10 rounded-xl text-primary group-hover:rotate-12 transition-transform">
                                        <Folder className="w-6 h-6" />
                                    </div>
                                </div>

                                <h3 className="text-xl font-bold group-hover:text-primary transition-colors">
                                    {project.title}
                                </h3>

                                <p className="text-muted-foreground text-sm leading-relaxed line-clamp-3">
                                    {project.description}
                                </p>

                                <div className="flex flex-wrap gap-2 pt-4">
                                    {project.tech.map((tech, i) => (
                                        <span
                                            key={i}
                                            className="text-xs px-2 py-1 rounded-md bg-secondary text-secondary-foreground font-medium"
                                        >
                                            {tech}
                                        </span>
                                    ))}
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
