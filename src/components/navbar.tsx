"use client";

import * as React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, Code2, Moon, Sun, Palette } from "lucide-react";
import { useTheme } from "next-themes";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

const NAV_ITEMS = [
    { name: "About", href: "#about" },
    { name: "Projects", href: "#projects" },
    { name: "Skills", href: "#skills" },
    { name: "Experience", href: "#experience" },
    { name: "Contact", href: "#contact" },
];

export function Navbar() {
    const [isOpen, setIsOpen] = React.useState(false);
    const [scrolled, setScrolled] = React.useState(false);
    const { theme, setTheme } = useTheme();
    const [mounted, setMounted] = React.useState(false);
    const [showThemeMenu, setShowThemeMenu] = React.useState(false);

    React.useEffect(() => {
        setMounted(true);
        const handleScroll = () => setScrolled(window.scrollY > 50);
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    const themes = [
        { name: 'Light', value: 'light', icon: Sun },
        { name: 'Dark', value: 'dark', icon: Moon },
    ];

    return (
        <nav
            className={cn(
                "fixed top-0 w-full z-50 transition-all duration-300 border-b border-transparent",
                scrolled ? "bg-background/60 backdrop-blur-xl border-b border-border/20 shadow-sm supports-[backdrop-filter]:bg-background/60" : "bg-transparent"
            )}
        >
            <div className="container-width flex items-center justify-between h-16 md:h-20">
                <Link href="/" className="flex items-center gap-2 group">
                    <div className="p-2 bg-primary rounded-xl group-hover:rotate-12 transition-transform">
                        <Code2 className="w-5 h-5 text-primary-foreground" />
                    </div>
                    <span className="font-bold text-xl tracking-tight">Archit Sharma.</span>
                </Link>

                {/* Desktop Nav */}
                <div className="hidden md:flex items-center gap-8">
                    {NAV_ITEMS.map((item) => (
                        <Link
                            key={item.name}
                            href={item.href}
                            className="text-sm font-medium text-muted-foreground hover:text-primary transition-colors hover:scale-105 transform inline-block"
                        >
                            {item.name}
                        </Link>
                    ))}

                    <div className="relative">
                        {mounted && (
                            <Button
                                variant="ghost"
                                size="sm"
                                onClick={() => setShowThemeMenu(!showThemeMenu)}
                                className="ml-2 w-9 h-9 p-0 rounded-full"
                            >
                                <Palette className="w-5 h-5" />
                            </Button>
                        )}

                        <AnimatePresence>
                            {showThemeMenu && (
                                <motion.div
                                    initial={{ opacity: 0, scale: 0.9, y: 10 }}
                                    animate={{ opacity: 1, scale: 1, y: 0 }}
                                    exit={{ opacity: 0, scale: 0.9, y: 10 }}
                                    className="absolute right-0 top-12 w-32 bg-card border border-border rounded-xl shadow-xl overflow-hidden p-1 flex flex-col gap-1"
                                >
                                    {themes.map((t) => (
                                        <button
                                            key={t.value}
                                            onClick={() => { setTheme(t.value); setShowThemeMenu(false); }}
                                            className={cn(
                                                "flex items-center gap-2 px-3 py-2 text-sm rounded-lg hover:bg-accent hover:text-accent-foreground transition-colors",
                                                theme === t.value && "bg-accent/50 text-primary font-medium"
                                            )}
                                        >
                                            <t.icon className="w-4 h-4" />
                                            {t.name}
                                        </button>
                                    ))}
                                </motion.div>
                            )}
                        </AnimatePresence>
                    </div>

                    <Button size="sm" onClick={() => window.open('/resume.png', '_blank')}>
                        Resume
                    </Button>
                </div>

                {/* Mobile Toggle */}
                <div className="md:hidden flex items-center gap-4">
                    {mounted && (
                        <Button
                            variant="ghost"
                            size="sm"
                            onClick={() => {
                                // Cycle through themes on mobile simple click
                                const currentIndex = themes.findIndex(t => t.value === theme);
                                const nextIndex = (currentIndex + 1) % themes.length;
                                setTheme(themes[nextIndex].value);
                            }}
                            className="w-9 h-9 p-0 rounded-full"
                        >
                            <Palette className="w-5 h-5" />
                        </Button>
                    )}
                    <button onClick={() => setIsOpen(!isOpen)} className="p-2">
                        {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
                    </button>
                </div>
            </div>

            {/* Mobile Menu */}
            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: "auto" }}
                        exit={{ opacity: 0, height: 0 }}
                        className="md:hidden bg-background/95 backdrop-blur-xl border-b border-border/50 overflow-hidden"
                    >
                        <div className="container-width py-6 flex flex-col gap-4">
                            {NAV_ITEMS.map((item) => (
                                <Link
                                    key={item.name}
                                    href={item.href}
                                    onClick={() => setIsOpen(false)}
                                    className="text-lg font-medium py-2 border-b border-border/10"
                                >
                                    {item.name}
                                </Link>
                            ))}
                            <Button className="w-full mt-4" onClick={() => window.open('/resume.png', '_blank')}>
                                Resume
                            </Button>

                            <div className="pt-4 border-t border-border/10">
                                <p className="text-sm text-muted-foreground mb-3">Color Theme</p>
                                <div className="grid grid-cols-2 gap-2">
                                    {themes.map((t) => (
                                        <button
                                            key={t.value}
                                            onClick={() => setTheme(t.value)}
                                            className={cn(
                                                "flex items-center gap-2 px-3 py-2 text-sm rounded-lg border border-border/50",
                                                theme === t.value ? "bg-primary text-primary-foreground" : "bg-card hover:bg-accent"
                                            )}
                                        >
                                            <t.icon className="w-4 h-4" />
                                            {t.name}
                                        </button>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </nav>
    );
}
