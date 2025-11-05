import React, { useRef } from "react";
import { motion } from "framer-motion";
import { Database, Cpu, Cloud, Brain, Layers, Code } from "lucide-react";

interface TechItem {
  name: string;
  icon: React.ReactNode;
  color: string;
  radius: number;
  duration: number;
}

export const OrbitalTechStack = () => {
  const technologies: TechItem[] = [
    { 
      name: "RAG Model", 
      icon: <Brain className="w-6 h-6" />, 
      color: "#8b5cf6", 
      radius: 140, 
      duration: 20 
    },
    { 
      name: "Next.js", 
      icon: <Code className="w-6 h-6" />, 
      color: "#ffffff", 
      radius: 180, 
      duration: 25 
    },
    { 
      name: "Node.js", 
      icon: <Layers className="w-6 h-6" />, 
      color: "#68a063", 
      radius: 160, 
      duration: 22 
    },
    { 
      name: "AI", 
      icon: <Cpu className="w-6 h-6" />, 
      color: "#06b6d4", 
      radius: 200, 
      duration: 28 
    },
    { 
      name: "Postgres", 
      icon: <Database className="w-6 h-6" />, 
      color: "#336791", 
      radius: 120, 
      duration: 18 
    },
    { 
      name: "Cloud", 
      icon: <Cloud className="w-6 h-6" />, 
      color: "#ff9900", 
      radius: 190, 
      duration: 26 
    },
  ];

  return (
    <div className="flex justify-center items-center py-20 min-h-[600px]">
      <div className="relative w-full max-w-[500px] h-[500px]">
        {/* Central core */}
        <motion.div
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-20"
          initial={{ scale: 0, opacity: 0 }}
          whileInView={{ scale: 1, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <div className="relative">
            {/* Glowing core */}
            <motion.div
              className="w-24 h-24 rounded-full bg-gradient-to-br from-purple-500 to-cyan-500 blur-xl opacity-60"
              animate={{
                scale: [1, 1.2, 1],
                opacity: [0.6, 0.8, 0.6],
              }}
              transition={{
                duration: 3,
                repeat: Infinity,
                ease: "easeInOut",
              }}
            />
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="w-20 h-20 rounded-full bg-gradient-to-br from-purple-600 to-cyan-600 flex items-center justify-center border-2 border-white/20 backdrop-blur-sm">
                <span className="text-white font-bold text-sm">KORU</span>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Orbital rings */}
        {[120, 160, 200].map((radius, idx) => (
          <motion.div
            key={radius}
            className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 rounded-full border border-white/10"
            style={{
              width: radius * 2,
              height: radius * 2,
            }}
            initial={{ scale: 0, opacity: 0 }}
            whileInView={{ scale: 1, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.3 + idx * 0.1 }}
          />
        ))}

        {/* Orbiting tech icons */}
        {technologies.map((tech, index) => (
          <motion.div
            key={tech.name}
            className="absolute top-1/2 left-1/2"
            style={{
              width: tech.radius * 2,
              height: tech.radius * 2,
              marginLeft: -tech.radius,
              marginTop: -tech.radius,
            }}
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.5 + index * 0.1 }}
          >
            <motion.div
              className="relative w-full h-full"
              animate={{
                rotate: 360,
              }}
              transition={{
                duration: tech.duration,
                repeat: Infinity,
                ease: "linear",
              }}
            >
              {/* Tech item positioned on orbit */}
              <motion.div
                className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2"
                whileHover={{ scale: 1.3, zIndex: 50 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <div className="relative group cursor-pointer">
                  {/* Glow effect */}
                  <motion.div
                    className="absolute inset-0 rounded-full blur-xl opacity-0 group-hover:opacity-70 transition-opacity"
                    style={{ backgroundColor: tech.color }}
                    animate={{
                      scale: [1, 1.2, 1],
                    }}
                    transition={{
                      duration: 2,
                      repeat: Infinity,
                    }}
                  />
                  
                  {/* Icon container */}
                  <motion.div
                    className="relative w-16 h-16 rounded-full border-2 backdrop-blur-md flex items-center justify-center"
                    style={{
                      borderColor: tech.color,
                      backgroundColor: `${tech.color}20`,
                    }}
                    animate={{
                      boxShadow: [
                        `0 0 20px ${tech.color}40`,
                        `0 0 30px ${tech.color}60`,
                        `0 0 20px ${tech.color}40`,
                      ],
                    }}
                    transition={{
                      duration: 2,
                      repeat: Infinity,
                    }}
                  >
                    <div style={{ color: tech.color }}>
                      {tech.icon}
                    </div>
                  </motion.div>

                  {/* Label */}
                  <motion.div
                    className="absolute top-full mt-2 left-1/2 -translate-x-1/2 whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity"
                    initial={{ y: -10 }}
                    whileHover={{ y: 0 }}
                  >
                    <div 
                      className="px-3 py-1 rounded-full text-xs font-medium border backdrop-blur-sm"
                      style={{
                        color: tech.color,
                        borderColor: `${tech.color}60`,
                        backgroundColor: `${tech.color}10`,
                      }}
                    >
                      {tech.name}
                    </div>
                  </motion.div>
                </div>
              </motion.div>
            </motion.div>
          </motion.div>
        ))}

        {/* Animated connection lines */}
        <svg className="absolute inset-0 w-full h-full pointer-events-none" style={{ overflow: 'visible' }}>
          <defs>
            <linearGradient id="lineGradient" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="#8b5cf6" stopOpacity="0" />
              <stop offset="50%" stopColor="#06b6d4" stopOpacity="0.3" />
              <stop offset="100%" stopColor="#8b5cf6" stopOpacity="0" />
            </linearGradient>
          </defs>
          {technologies.map((_, index) => {
            const nextIndex = (index + 1) % technologies.length;
            return (
              <motion.line
                key={`line-${index}`}
                x1="50%"
                y1="50%"
                x2="50%"
                y2="50%"
                stroke="url(#lineGradient)"
                strokeWidth="1"
                initial={{ pathLength: 0, opacity: 0 }}
                whileInView={{ pathLength: 1, opacity: 0.3 }}
                viewport={{ once: true }}
                transition={{ duration: 1.5, delay: 1 + index * 0.1 }}
              />
            );
          })}
        </svg>
      </div>
    </div>
  );
};
