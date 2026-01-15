"use client";

import { motion } from "framer-motion";
import { ArrowDown } from "lucide-react";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { ABOUT } from "@/lib/data";

export function Hero() {
    return (
        <section className="relative h-[90vh] flex items-center justify-center overflow-hidden bg-background">
            {/* Background Ambience */}
            <div className="absolute inset-0 w-full h-full opacity-30 dark:opacity-20 pointer-events-none">
                <div className="absolute top-20 left-20 w-72 h-72 bg-purple-500 rounded-full mix-blend-multiply filter blur-3xl animate-blob" />
                <div className="absolute top-20 right-20 w-72 h-72 bg-blue-500 rounded-full mix-blend-multiply filter blur-3xl animate-blob animation-delay-2000" />
                <div className="absolute -bottom-8 left-20 w-72 h-72 bg-indigo-500 rounded-full mix-blend-multiply filter blur-3xl animate-blob animation-delay-4000" />
            </div>

            <div className="container-width relative z-10 text-center space-y-8">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, ease: "easeOut" }}
                    className="space-y-4"
                >
                    <span className="inline-block px-3 py-1 rounded-full bg-accent/50 border border-accent text-sm font-medium text-muted-foreground backdrop-blur-sm mb-4">
                        Hello, Welcome
                    </span>
                    <h1 className="text-6xl md:text-9xl font-black tracking-tighter text-foreground mb-6">
                        {ABOUT.name}
                    </h1>
                    <h2 className="text-3xl md:text-5xl font-bold tracking-tight text-gradient leading-tight">
                        Building the future, <br className="hidden md:block" />
                        <span className="text-muted-foreground">one line at a time.</span>
                    </h2>
                    <p className="max-w-2xl mx-auto text-lg md:text-xl text-muted-foreground leading-relaxed">
                        {ABOUT.bio.split('.')[0]}. {/* Taking the first sentence for the hero */}
                        Creating seamless digital experiences with code and creativity.
                    </p>
                </motion.div>

                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
                    className="flex items-center justify-center gap-4"
                >
                    <Link href="#projects">
                        <Button size="lg" className="rounded-full">View My Work</Button>
                    </Link>
                    <Link href="#contact">
                        <Button size="lg" variant="outline" className="rounded-full">Contact Me</Button>
                    </Link>
                </motion.div>
            </div>

            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 1, duration: 1 }}
                className="absolute bottom-10 left-1/2 -translate-x-1/2 animate-bounce"
            >
                <ArrowDown className="w-6 h-6 text-muted-foreground" />
            </motion.div>
        </section>
    );
}
