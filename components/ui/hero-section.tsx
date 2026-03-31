import { Button } from "@/components/ui/button";
import { motion, type Variants, useReducedMotion } from "framer-motion";
import { ArrowRight } from "lucide-react";

export function HeroSection() {
  const shouldReduceMotion = useReducedMotion();

  const containerVariants: Variants = {
    hidden: { opacity: shouldReduceMotion ? 1 : 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: shouldReduceMotion ? 0 : 0.15,
        delayChildren: shouldReduceMotion ? 0 : 0.1,
      },
    },
  };

  const itemVariants: Variants = {
    hidden: { opacity: shouldReduceMotion ? 1 : 0, y: shouldReduceMotion ? 0 : 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: shouldReduceMotion ? 0 : 0.5, ease: "easeOut" },
    },
  };

  return (
    <motion.div
      variants={containerVariants}
      initial="hidden"
      animate="visible"
      className="flex min-h-[500px] flex-col items-center justify-center px-4 py-16 text-center"
    >
      <motion.div variants={itemVariants} className="mb-4">
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-green-500/10 border border-green-500/20">
          <div className="w-2 h-2 rounded-full bg-green-500 animate-pulse" aria-hidden="true" />
          <span className="text-sm font-medium text-green-400 tracking-wide">Available for Work</span>
        </div>
      </motion.div>

      <motion.h1
        variants={itemVariants}
        className="mb-6 text-5xl font-bold tracking-tight md:text-7xl"
      >
        Emre Ekener
        <br />
        <span className="bg-gradient-to-r from-white to-white/60 bg-clip-text text-transparent">
          WordPress Developer
        </span>
      </motion.h1>

      <motion.p
        variants={itemVariants}
        className="mb-8 max-w-2xl text-lg text-foreground/70"
      >
        WordPress developer focused on building fast, accessible, and
        beautifully detailed web experiences. I turn ideas into products
        that scale.
      </motion.p>

      <motion.div variants={itemVariants} className="flex gap-4">
        <Button size="lg" className="gap-2" asChild>
          <a href="#work">
            View My Work
            <ArrowRight className="h-4 w-4" aria-hidden="true" />
          </a>
        </Button>
        <Button size="lg" variant="outline" asChild>
          <a href="#contact">Get In Touch</a>
        </Button>
      </motion.div>

      <motion.div
        variants={itemVariants}
        className="mt-12 flex items-center gap-8 text-sm text-foreground/60"
      >
        <div>
          <div className="text-2xl font-bold text-foreground" aria-label="8 plus years experience">8+</div>
          <div aria-hidden="true">Years Exp.</div>
        </div>
        <div className="h-8 w-px bg-border" aria-hidden="true" />
        <div>
          <div className="text-2xl font-bold text-foreground" aria-label="90 plus projects">90+</div>
          <div aria-hidden="true">Projects</div>
        </div>
        <div className="h-8 w-px bg-border" aria-hidden="true" />
        <div>
          <div className="text-2xl font-bold text-foreground">100%</div>
          <div>Dedicated</div>
        </div>
      </motion.div>
    </motion.div>
  );
}
