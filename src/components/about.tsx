"use client";

import { motion } from "framer-motion";
import { ABOUT } from "@/lib/data";
import { User, MapPin, Mail, Terminal, Phone } from "lucide-react";

export function About() {
    return (
        <section id="about" className="py-24 container-width">
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className="space-y-12"
            >
                <div className="text-center space-y-4">
                    <h2 className="text-3xl md:text-4xl font-bold">About Me</h2>
                    <div className="w-20 h-1 bg-primary mx-auto rounded-full" />
                </div>

                <div className="grid md:grid-cols-2 gap-12 items-center">
                    <div className="relative group">
                        <div className="absolute inset-0 bg-gradient-to-r from-purple-500 to-blue-500 rounded-2xl blur-2xl opacity-20 group-hover:opacity-30 transition-opacity duration-500" />
                        <div className="relative p-8 rounded-2xl border border-border/50 bg-background/50 backdrop-blur-sm shadow-xl space-y-6">
                            <p className="text-lg leading-relaxed text-muted-foreground">
                                {ABOUT.bio}
                            </p>
                            <div className="grid grid-cols-2 gap-4">
                                <div className="flex items-center gap-3 text-sm font-medium">
                                    <User className="w-5 h-5 text-primary" />
                                    {ABOUT.name}
                                </div>
                                <div className="flex items-center gap-3 text-sm font-medium">
                                    <MapPin className="w-5 h-5 text-primary" />
                                    {ABOUT.location}
                                </div>
                                <div className="flex items-center gap-3 text-sm font-medium col-span-2">
                                    <Mail className="w-5 h-5 text-primary" />
                                    {ABOUT.email}
                                </div>
                                <div className="flex items-center gap-3 text-sm font-medium col-span-2">
                                    <Phone className="w-5 h-5 text-primary" />
                                    {ABOUT.phone}
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="space-y-6">
                        <div className="p-6 rounded-xl border border-border bg-card hover:bg-accent/50 transition-colors">
                            <div className="flex items-center gap-4 mb-2">
                                <Terminal className="w-6 h-6 text-blue-500" />
                                <h3 className="font-semibold text-lg">Backend Development</h3>
                            </div>
                            <p className="text-muted-foreground">Experienced in server-side logic, database management, and scalable API architecture.</p>
                        </div>
                        <div className="p-6 rounded-xl border border-border bg-card hover:bg-accent/50 transition-colors">
                            <div className="flex items-center gap-4 mb-2">
                                <Terminal className="w-6 h-6 text-purple-500" />
                                <h3 className="font-semibold text-lg">System Administration</h3>
                            </div>
                            <p className="text-muted-foreground">Proficient in server health checks, network configurations, and cloud infrastructure management.</p>
                        </div>
                    </div>
                </div>
            </motion.div>
        </section>
    );
}
