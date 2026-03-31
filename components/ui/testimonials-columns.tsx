"use client";
import React from "react";
import Image from "next/image";
import { motion, useReducedMotion } from "motion/react";

export type Testimonial = {
  text: string;
  image?: string;
  name: string;
  role?: string;
};

function getInitials(name: string) {
  return name
    .split(' ')
    .map((n) => n[0])
    .join('')
    .toUpperCase()
    .slice(0, 2);
}

const AVATAR_COLOURS = [
  'bg-violet-500',
  'bg-blue-500',
  'bg-emerald-500',
  'bg-amber-500',
  'bg-rose-500',
  'bg-sky-500',
];

function getColour(name: string) {
  let hash = 0;
  for (let i = 0; i < name.length; i++) hash = name.charCodeAt(i) + ((hash << 5) - hash);
  return AVATAR_COLOURS[Math.abs(hash) % AVATAR_COLOURS.length];
}

export const TestimonialsColumn = (props: {
  className?: string;
  testimonials: Testimonial[];
  duration?: number;
}) => {
  const shouldReduceMotion = useReducedMotion();

  const renderCards = (ariaHidden?: boolean) =>
    props.testimonials.map(({ text, image, name, role }, i) => (
      <div
        className="p-10 rounded-3xl border shadow-lg shadow-primary/10 max-w-xs w-full"
        key={i}
        aria-hidden={ariaHidden || undefined}
      >
        <div>{text}</div>
        <div className="flex items-center gap-2 mt-5">
          {image ? (
            <div className="relative h-10 w-10 shrink-0">
              <Image
                width={40}
                height={40}
                src={image}
                alt={name}
                draggable={false}
                onContextMenu={(e) => e.preventDefault()}
                className="h-10 w-10 rounded-full object-cover select-none"
              />
              <div className="absolute inset-0 rounded-full" style={{ pointerEvents: 'none' }} />
            </div>
          ) : (
            <div className={`h-10 w-10 rounded-full flex items-center justify-center text-white text-sm font-semibold shrink-0 ${getColour(name)}`}>
              {getInitials(name)}
            </div>
          )}
          <div className="flex flex-col">
            <div className="font-medium tracking-tight leading-5">{name}</div>
            {role && <div className="leading-5 opacity-60 tracking-tight text-sm">{role}</div>}
          </div>
        </div>
      </div>
    ));

  return (
    <div className={props.className}>
      <motion.div
        animate={shouldReduceMotion ? undefined : { translateY: "-50%" }}
        transition={shouldReduceMotion ? undefined : {
          duration: props.duration || 10,
          repeat: Infinity,
          ease: "linear",
          repeatType: "loop",
        }}
        className="flex flex-col gap-6 pb-6 bg-background"
      >
        {/* Visible cards */}
        {renderCards()}
        {/* Clone for seamless loop — hidden from assistive technology */}
        {!shouldReduceMotion && renderCards(true)}
      </motion.div>
    </div>
  );
};
