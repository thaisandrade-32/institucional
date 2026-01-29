import { motion } from "framer-motion";

export function TechBackground() {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {/* Grid pattern */}
      <div 
        className="absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage: `
            linear-gradient(hsl(142 76% 45%) 1px, transparent 1px),
            linear-gradient(90deg, hsl(142 76% 45%) 1px, transparent 1px)
          `,
          backgroundSize: '60px 60px',
        }}
      />

      {/* Circuit lines - horizontal */}
      <svg className="absolute inset-0 w-full h-full opacity-[0.08]" xmlns="http://www.w3.org/2000/svg">
        <defs>
          <pattern id="circuit-h" x="0" y="0" width="200" height="200" patternUnits="userSpaceOnUse">
            {/* Horizontal lines with nodes */}
            <line x1="0" y1="50" x2="80" y2="50" stroke="hsl(142 76% 45%)" strokeWidth="1"/>
            <circle cx="80" cy="50" r="3" fill="hsl(142 76% 45%)"/>
            <line x1="86" y1="50" x2="120" y2="50" stroke="hsl(142 76% 45%)" strokeWidth="1"/>
            <line x1="120" y1="50" x2="120" y2="100" stroke="hsl(142 76% 45%)" strokeWidth="1"/>
            <circle cx="120" cy="100" r="4" fill="none" stroke="hsl(142 76% 45%)" strokeWidth="1"/>
            
            <line x1="150" y1="0" x2="150" y2="80" stroke="hsl(142 76% 45%)" strokeWidth="1"/>
            <circle cx="150" cy="80" r="3" fill="hsl(142 76% 45%)"/>
            <line x1="150" y1="86" x2="150" y2="120" stroke="hsl(142 76% 45%)" strokeWidth="1"/>
            <line x1="150" y1="120" x2="200" y2="120" stroke="hsl(142 76% 45%)" strokeWidth="1"/>
            
            <line x1="0" y1="150" x2="60" y2="150" stroke="hsl(142 76% 45%)" strokeWidth="1"/>
            <line x1="60" y1="150" x2="60" y2="180" stroke="hsl(142 76% 45%)" strokeWidth="1"/>
            <circle cx="60" cy="180" r="5" fill="none" stroke="hsl(142 76% 45%)" strokeWidth="1"/>
            <circle cx="60" cy="180" r="2" fill="hsl(142 76% 45%)"/>
          </pattern>
        </defs>
        <rect width="100%" height="100%" fill="url(#circuit-h)"/>
      </svg>

      {/* Animated glowing orbs */}
      <motion.div
        animate={{ 
          scale: [1, 1.2, 1],
          opacity: [0.15, 0.3, 0.15],
        }}
        transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
        className="absolute -top-40 -right-40 w-[600px] h-[600px] rounded-full bg-secondary/20 blur-[100px]"
      />
      <motion.div
        animate={{ 
          scale: [1.2, 1, 1.2],
          opacity: [0.1, 0.25, 0.1],
        }}
        transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
        className="absolute -bottom-60 -left-40 w-[500px] h-[500px] rounded-full bg-secondary/10 blur-[100px]"
      />
      <motion.div
        animate={{ 
          scale: [1, 1.15, 1],
          opacity: [0.08, 0.2, 0.08],
        }}
        transition={{ duration: 12, repeat: Infinity, ease: "easeInOut", delay: 2 }}
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[400px] h-[400px] rounded-full bg-secondary/15 blur-[80px]"
      />

      {/* Floating tech elements */}
      <motion.div
        animate={{ 
          y: [0, -20, 0],
          rotate: [0, 5, 0],
        }}
        transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
        className="absolute top-20 right-[20%] w-16 h-16 border border-secondary/20 rounded-lg"
      />
      <motion.div
        animate={{ 
          y: [0, 15, 0],
          rotate: [0, -5, 0],
        }}
        transition={{ duration: 8, repeat: Infinity, ease: "easeInOut", delay: 1 }}
        className="absolute bottom-40 left-[15%] w-12 h-12 border border-secondary/15 rounded-full"
      />
      <motion.div
        animate={{ 
          y: [0, -10, 0],
          x: [0, 10, 0],
        }}
        transition={{ duration: 7, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
        className="absolute top-1/3 left-[10%] w-8 h-8 bg-secondary/10 rounded-sm rotate-45"
      />

      {/* Data flow lines */}
      <svg className="absolute inset-0 w-full h-full" xmlns="http://www.w3.org/2000/svg">
        <defs>
          <linearGradient id="lineGradient" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="hsl(142 76% 45%)" stopOpacity="0"/>
            <stop offset="50%" stopColor="hsl(142 76% 45%)" stopOpacity="0.3"/>
            <stop offset="100%" stopColor="hsl(142 76% 45%)" stopOpacity="0"/>
          </linearGradient>
        </defs>
        <motion.line
          x1="0%"
          y1="30%"
          x2="100%"
          y2="30%"
          stroke="url(#lineGradient)"
          strokeWidth="1"
          initial={{ pathLength: 0, opacity: 0 }}
          animate={{ pathLength: 1, opacity: [0, 0.5, 0] }}
          transition={{ duration: 3, repeat: Infinity, ease: "linear", repeatDelay: 2 }}
        />
        <motion.line
          x1="0%"
          y1="70%"
          x2="100%"
          y2="70%"
          stroke="url(#lineGradient)"
          strokeWidth="1"
          initial={{ pathLength: 0, opacity: 0 }}
          animate={{ pathLength: 1, opacity: [0, 0.4, 0] }}
          transition={{ duration: 4, repeat: Infinity, ease: "linear", repeatDelay: 1, delay: 1.5 }}
        />
      </svg>

      {/* Binary/data dots */}
      <div className="absolute inset-0">
        {[...Array(20)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-1 h-1 rounded-full bg-secondary/30"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            animate={{
              opacity: [0.2, 0.6, 0.2],
              scale: [1, 1.5, 1],
            }}
            transition={{
              duration: 2 + Math.random() * 2,
              repeat: Infinity,
              ease: "easeInOut",
              delay: Math.random() * 2,
            }}
          />
        ))}
      </div>
    </div>
  );
}
