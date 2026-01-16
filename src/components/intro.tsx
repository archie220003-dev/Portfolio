"use client";

import React, { useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useLoading } from "@/context/loading-context";

export function Intro() {
    const { isLoading, setIsLoading } = useLoading();

    useEffect(() => {
        const timer = setTimeout(() => {
            setIsLoading(false);
        }, 4000);

        return () => clearTimeout(timer);
    }, [setIsLoading]);

    return (
        <AnimatePresence>
            {isLoading && (
                <motion.div
                    initial={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.5, ease: "easeInOut" }}
                    className="fixed inset-0 z-[100] bg-black flex flex-col items-center justify-center"
                >
                    <div className="flex flex-col items-center gap-10">
                        {/* Name behaving like Apple Logo */}
                        <motion.h1
                            layoutId="brand-text"
                            initial={{ opacity: 0, scale: 0.9 }}
                            animate={{ opacity: 1, scale: 1 }}
                            transition={{ duration: 1, ease: "easeOut" }}
                            className="text-white text-3xl md:text-5xl font-semibold tracking-tight"
                            style={{ fontFamily: "var(--font-inter), sans-serif" }}
                        >
                            Archit Sharma
                        </motion.h1>

                        {/* Apple Loading Bar */}
                        <motion.div
                            initial={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                            className="w-48 h-1.5 bg-[#333333] rounded-full overflow-hidden"
                        >
                            <motion.div
                                className="h-full bg-white rounded-full"
                                initial={{ width: "0%" }}
                                animate={{ width: "100%" }}
                                transition={{
                                    duration: 3.5,
                                    ease: "easeInOut",
                                }}
                            />
                        </motion.div>
                    </div>
                </motion.div>
            )}
        </AnimatePresence>
    );
}
