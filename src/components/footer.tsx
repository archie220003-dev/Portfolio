import Link from "next/link";
import { Github, Linkedin, Mail } from "lucide-react";
import { ABOUT } from "@/lib/data";

export function Footer() {
    return (
        <footer className="border-t border-border/40 bg-background/50 backdrop-blur-sm mt-20">
            <div className="container-width py-12 flex flex-col md:flex-row items-center justify-between gap-6">
                <div className="text-center md:text-left">
                    <p className="font-bold text-lg">{ABOUT.name}</p>
                    <p className="text-muted-foreground text-sm">
                        Based in {ABOUT.location}
                    </p>
                </div>

                <div className="flex items-center gap-6 mt-4 md:mt-0">
                    <Link href={ABOUT.github} target="_blank" className="text-muted-foreground hover:text-primary transition-colors hover:scale-110 transform">
                        <Github className="w-5 h-5" />
                    </Link>
                    <Link href={ABOUT.linkedin} target="_blank" className="text-muted-foreground hover:text-primary transition-colors hover:scale-110 transform">
                        <Linkedin className="w-5 h-5" />
                    </Link>
                    <Link href={`mailto:${ABOUT.email}`} className="text-muted-foreground hover:text-primary transition-colors hover:scale-110 transform">
                        <Mail className="w-5 h-5" />
                    </Link>
                </div>

                <div className="text-center md:text-right text-sm text-muted-foreground">
                    <p>&copy; {new Date().getFullYear()} Archit Sharma. All rights reserved.</p>
                </div>
            </div>
        </footer>
    );
}
