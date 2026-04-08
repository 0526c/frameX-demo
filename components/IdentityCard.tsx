"use client";

import { motion } from "framer-motion";

interface IdentityCardProps {
  icon: string;
  name: string;
  description: string;
  selected: boolean;
  onClick: () => void;
}

export default function IdentityCard({ 
  icon, 
  name, 
  description, 
  selected, 
  onClick 
}: IdentityCardProps) {
  return (
    <motion.div
      onClick={onClick}
      className={`relative p-5 rounded-2xl border cursor-pointer transition-all duration-300 ${
        selected
          ? "border-gold bg-gold-dim shadow-lg shadow-gold-glow"
          : "border-border bg-gradient-to-b from-white/[0.03] to-white/[0.01] hover:border-gold/30"
      }`}
      whileHover={{ 
        y: -8, 
        scale: 1.02,
        boxShadow: "0 20px 40px rgba(0,0,0,0.3), 0 0 30px rgba(212,168,75,0.1)"
      }}
      whileTap={{ scale: 0.98 }}
    >
      {/* Selected indicator */}
      {selected && (
        <motion.div
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          className="absolute top-3 right-3 w-6 h-6 bg-gold rounded-full flex items-center justify-center"
        >
          <svg className="w-4 h-4 text-void" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
          </svg>
        </motion.div>
      )}

      {/* Icon */}
      <div className="text-4xl mb-4">{icon}</div>

      {/* Content */}
      <h3 className={`font-semibold mb-1 ${selected ? "text-gold" : "text-cream"}`}>
        {name}
      </h3>
      <p className="text-xs text-cream-dim leading-relaxed">
        {description}
      </p>

      {/* Hover glow overlay */}
      <div className="absolute inset-0 rounded-2xl bg-gradient-to-t from-gold/5 to-transparent opacity-0 hover:opacity-100 transition-opacity pointer-events-none" />
    </motion.div>
  );
}
