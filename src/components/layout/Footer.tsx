import Image from "next/image";
import { Mail } from "lucide-react";

function GithubIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.02c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22" />
    </svg>
  );
}

function LinkedinIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
      <rect width="4" height="12" x="2" y="9" />
      <circle cx="4" cy="4" r="2" />
    </svg>
  );
}

export function Footer() {
  return (
    <footer className="bg-card/40 border-t border-border/50 py-16 relative overflow-hidden">
      <div className="container px-4 md:px-6 relative z-10 flex flex-col items-center">
        <div className="flex items-center gap-3 mb-6 group">
          <div className="p-1 rounded-xl bg-card border border-border/50 shadow-md group-hover:border-primary/50 transition-colors">
            <Image
              src="/AC-logo.png"
              alt="Aditya Logo"
              width={40}
              height={40}
              className="w-10 h-10 rounded-lg object-contain"
            />
          </div>
          <span className="font-bold text-2xl tracking-tight text-foreground">
            Aditya<span className="text-primary">.</span>
          </span>
        </div>

        <p className="text-xl md:text-2xl font-medium text-center max-w-2xl text-foreground mb-10 leading-snug">
          &quot;Building impactful products through technology, analytics, and business thinking.&quot;
        </p>

        <div className="flex items-center gap-6 mb-10">
          <a href="https://in.linkedin.com/in/adityachaturvedi26" target="_blank" rel="noopener noreferrer" className="w-12 h-12 rounded-full bg-accent hover:bg-primary/20 flex items-center justify-center text-foreground hover:text-primary transition-colors border border-border">
            <LinkedinIcon className="w-5 h-5" />
            <span className="sr-only">LinkedIn</span>
          </a>
          <a href="https://github.com/ze40xAditya" target="_blank" rel="noopener noreferrer" className="w-12 h-12 rounded-full bg-accent hover:bg-primary/20 flex items-center justify-center text-foreground hover:text-primary transition-colors border border-border">
            <GithubIcon className="w-5 h-5" />
            <span className="sr-only">GitHub</span>
          </a>
          <a href="mailto:adityachaturvedi26@gmail.com" className="w-12 h-12 rounded-full bg-accent hover:bg-primary/20 flex items-center justify-center text-foreground hover:text-primary transition-colors border border-border">
            <Mail className="w-5 h-5" />
            <span className="sr-only">Email</span>
          </a>
        </div>

        <div className="text-sm text-muted-foreground">
          © {new Date().getFullYear()} Aditya Chaturvedi. All rights reserved.
        </div>
      </div>
      
      {/* Background decoration */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[800px] h-[300px] bg-primary/5 rounded-full blur-[100px] pointer-events-none" />
    </footer>
  );
}
