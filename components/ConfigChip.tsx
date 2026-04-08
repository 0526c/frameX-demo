"use client";

import { motion } from "framer-motion";
import { ReactNode } from "react";

interface ConfigChipProps {
  label: string;
  selected: boolean;
  onClick: () => void;
}

export default function ConfigChip({ label, selected, onClick }: ConfigChipProps) {
  return (
    <motion.button
      onClick={onClick}
      className={`px-4 py-2 rounded-full text-sm font-medium transition-all ${
        selected
          ? "bg-gold text-void"
          : "bg-white/5 text-cream-dim border border-border hover:border-gold/30 hover:text-cream"
      }`}
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
    >
      {label}
    </motion.button>
  );
}

// Config section wrapper
export function ConfigSection({ 
  title, 
  subtitle, 
  children 
}: { 
  title: string; 
  subtitle: string; 
  children: ReactNode 
}) {
  return (
    <div className="p-5 rounded-2xl border border-border bg-gradient-to-b from-white/[0.03] to-white/[0.01]">
      <div className="mb-4">
        <h3 className="text-xs font-medium text-gold tracking-wider uppercase">{title}</h3>
        <p className="text-xs text-cream-dim mt-1">{subtitle}</p>
      </div>
      <div className="flex flex-wrap gap-2">
        {children}
      </div>
    </div>
  );
}
