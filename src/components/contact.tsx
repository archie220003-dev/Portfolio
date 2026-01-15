"use client";

import * as React from "react";
import { motion } from "framer-motion";
import { ABOUT } from "@/lib/data";
import { Mail, Send } from "lucide-react";
import { Button } from "@/components/ui/button";

export function Contact() {
    const [name, setName] = React.useState("");
    const [userEmail, setUserEmail] = React.useState("");
    const [message, setMessage] = React.useState("");

    const handleSendMessage = (e: React.FormEvent) => {
        e.preventDefault();
        const subject = encodeURIComponent(`Portfolio Contact from ${name}`);
        const body = encodeURIComponent(`Name: ${name}\nEmail: ${userEmail}\n\nMessage:\n${message}`);
        window.location.href = `mailto:${ABOUT.email}?subject=${subject}&body=${body}`;
    };

    return (
        <section id="contact" className="py-24 container-width">
            <div className="max-w-2xl mx-auto text-center space-y-12">
                <motion.div
                    initial={{ opacity: 0, scale: 0.95 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    className="space-y-4"
                >
                    <h2 className="text-3xl md:text-4xl font-bold">Get In Touch</h2>
                    <p className="text-muted-foreground">
                        Whether you have a question or just want to say hi, I&apos;ll try my best to get back to you!
                    </p>
                </motion.div>

                <motion.div
                    initial="hidden"
                    whileInView="show"
                    viewport={{ once: true }}
                    variants={{
                        hidden: { opacity: 0, y: 20 },
                        show: {
                            opacity: 1,
                            y: 0,
                            transition: {
                                staggerChildren: 0.1,
                                delayChildren: 0.2
                            }
                        }
                    }}
                    className="bg-card border border-border rounded-2xl p-8 md:p-12 shadow-sm"
                >
                    <div className="flex flex-col items-center gap-6">
                        <motion.div variants={{ hidden: { opacity: 0, scale: 0.8 }, show: { opacity: 1, scale: 1 } }} className="p-4 bg-primary/10 rounded-full text-primary">
                            <Mail className="w-8 h-8" />
                        </motion.div>

                        <motion.p variants={{ hidden: { opacity: 0, y: 10 }, show: { opacity: 1, y: 0 } }} className="text-muted-foreground text-center max-w-md">
                            Feel free to reach out using the form below.
                        </motion.p>

                        <motion.form variants={{ hidden: { opacity: 0, y: 10 }, show: { opacity: 1, y: 0 } }} className="w-full space-y-4 text-left" onSubmit={handleSendMessage}>
                            <div className="grid md:grid-cols-2 gap-4">
                                <div className="space-y-2">
                                    <label htmlFor="name" className="text-sm font-medium">Name</label>
                                    <input
                                        type="text"
                                        id="name"
                                        value={name}
                                        onChange={(e) => setName(e.target.value)}
                                        required
                                        className="w-full px-4 py-2 rounded-lg border border-input bg-background focus:ring-2 focus:ring-primary/20 outline-none transition-all"
                                        placeholder="John Doe"
                                    />
                                </div>
                                <div className="space-y-2">
                                    <label htmlFor="email" className="text-sm font-medium">Email</label>
                                    <input
                                        type="email"
                                        id="email"
                                        value={userEmail}
                                        onChange={(e) => setUserEmail(e.target.value)}
                                        required
                                        className="w-full px-4 py-2 rounded-lg border border-input bg-background focus:ring-2 focus:ring-primary/20 outline-none transition-all"
                                        placeholder="john@example.com"
                                    />
                                </div>
                            </div>
                            <div className="space-y-2">
                                <label htmlFor="message" className="text-sm font-medium">Message</label>
                                <textarea
                                    id="message"
                                    rows={4}
                                    value={message}
                                    onChange={(e) => setMessage(e.target.value)}
                                    required
                                    className="w-full px-4 py-2 rounded-lg border border-input bg-background focus:ring-2 focus:ring-primary/20 outline-none transition-all"
                                    placeholder="Hello..."
                                />
                            </div>
                            <Button type="submit" className="w-full">
                                <Send className="w-4 h-4 mr-2" />
                                Send Message
                            </Button>
                        </motion.form>
                    </div>
                </motion.div>
            </div>
        </section>
    );
}
