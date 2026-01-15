"use client";

import { motion } from "framer-motion";
import { ABOUT } from "@/lib/data";
import { User, MapPin, Mail, Terminal, Phone } from "lucide-react";

const containerVariants = {
    hidden: { opacity: 0 },
    show: {
        opacity: 1,
        transition: {
            staggerChildren: 0.2,
        },
    },
};

const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    show: { opacity: 1, y: 0, transition: { duration: 0.8, ease: [0.22, 1, 0.36, 1] as [number, number, number, number] } },
};

export function About() {
    return (
        <section id="about" className="py-24 container-width">
            <motion.div
                variants={containerVariants}
                initial="hidden"
                whileInView="show"
                viewport={{ amount: 0.3 }}
                className="space-y-12"
            >
                <motion.div variants={itemVariants} className="text-center space-y-4">
                    <h2 className="text-3xl md:text-4xl font-bold">About Me</h2>
                    <div className="w-20 h-1 bg-primary mx-auto rounded-full" />
                </motion.div>

                <div className="grid md:grid-cols-2 gap-12 items-center">
                    <motion.div variants={itemVariants} className="relative group">
                        <div className="absolute inset-0 bg-gradient-to-r from-purple-500/20 to-blue-500/20 rounded-2xl blur-2xl opacity-20 group-hover:opacity-30 transition-opacity duration-500" />
                        <div className="relative p-8 rounded-2xl border border-white/10 bg-background/40 backdrop-blur-md shadow-xl space-y-6">
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
                    </motion.div>

                    <motion.div variants={itemVariants} className="space-y-6">
                        <div className="p-6 rounded-xl border border-white/10 bg-card/30 backdrop-blur-sm hover:bg-accent/20 transition-colors">
                            <div className="flex items-center gap-4 mb-2">
                                <Terminal className="w-6 h-6 text-blue-500" />
                                <h3 className="font-semibold text-lg">Backend Development</h3>
                            </div>
                            <p className="text-muted-foreground">Experienced in server-side logic, database management, and scalable API architecture.</p>
                        </div>
                        <div className="p-6 rounded-xl border border-white/10 bg-card/30 backdrop-blur-sm hover:bg-accent/20 transition-colors">
                            <div className="flex items-center gap-4 mb-2">
                                <Terminal className="w-6 h-6 text-purple-500" />
                                <h3 className="font-semibold text-lg">System Administration</h3>
                            </div>
                            <p className="text-muted-foreground">Proficient in server health checks, network configurations, and cloud infrastructure management.</p>
                        </div>
                    </motion.div>
                </div>
            </motion.div>
        </section>
    );
}
