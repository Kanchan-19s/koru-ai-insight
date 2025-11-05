import React from "react";
import { motion } from "framer-motion";
import { Database, Cpu, Cloud, Brain, Layers, Code } from "lucide-react";

interface TechItem {
  name: string;
  icon: React.ReactNode;
  color: string;
  category: string;
}

export const OrbitalTechStack = () => {
  const technologies: TechItem[] = [
    { 
      name: "RAG Model", 
      icon: <Brain className="w-8 h-8" />, 
      color: "#8b5cf6",
      category: "Intelligence"
    },
    { 
      name: "Next.js", 
      icon: <Code className="w-8 h-8" />, 
      color: "#ffffff",
      category: "Frontend"
    },
    { 
      name: "Node.js", 
      icon: <Layers className="w-8 h-8" />, 
      color: "#68a063",
      category: "Backend"
    },
    { 
      name: "AI Engine", 
      icon: <Cpu className="w-8 h-8" />, 
      color: "#06b6d4",
      category: "ML Engine"
    },
    { 
      name: "PostgreSQL", 
      icon: <Database className="w-8 h-8" />, 
      color: "#336791",
      category: "Database"
    },
    { 
      name: "AWS", 
      icon: <Cloud className="w-8 h-8" />, 
      color: "#ff9900",
      category: "Infrastructure"
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.12,
        delayChildren: 0.3,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { 
        duration: 0.7, 
        ease: "easeOut" as const
      },
    },
  };

  return (
    <div className="w-full py-12 px-4">
      <div className="w-full max-w-7xl mx-auto">
        {/* Timeline Container */}
        <motion.div
          className="relative w-full"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={containerVariants}
        >
          {/* Animated Timeline Line - Horizontal */}
          <div className="absolute left-0 right-0 top-20 h-1 -translate-y-1/2 z-0">
            <motion.div
              className="h-full w-full bg-gradient-to-r from-transparent via-purple-500/40 to-transparent"
              initial={{ scaleX: 0, opacity: 0 }}
              whileInView={{ scaleX: 1, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 1, ease: "easeInOut", delay: 0.2 }}
              style={{ transformOrigin: "left" }}
            />
          </div>

          {/* Tech Items - Horizontal Layout */}
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-6 md:gap-8 relative z-10">
            {technologies.map((tech, index) => (
              <motion.div
                key={tech.name}
                variants={itemVariants}
                className="flex flex-col items-center group relative z-20"
              >
                {/* Tech Icon Container */}
                <motion.div
                  className="relative mb-6 md:mb-8 z-20"
                  whileHover={{ scale: 1.15, y: -5 }}
                  transition={{ type: "spring", stiffness: 300, damping: 20 }}
                >
                  {/* Animated Glow Background */}
                  <motion.div
                    className="absolute inset-0 rounded-full blur-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                    style={{ 
                      backgroundColor: tech.color,
                      width: "120%",
                      height: "120%",
                      left: "-10%",
                      top: "-10%"
                    }}
                    animate={{
                      scale: [1, 1.2, 1],
                      opacity: [0, 0.6, 0],
                    }}
                    transition={{
                      duration: 2.5,
                      repeat: Infinity,
                      ease: "easeInOut",
                      delay: index * 0.15,
                    }}
                  />

                  {/* Icon Circle with Border */}
                  <motion.div
                    className="relative w-20 h-20 md:w-24 md:h-24 rounded-full border-2 backdrop-blur-md flex items-center justify-center z-20"
                    style={{
                      borderColor: tech.color,
                      backgroundColor: `${tech.color}12`,
                    }}
                    animate={{
                      boxShadow: [
                        `0 0 10px ${tech.color}20, inset 0 0 10px ${tech.color}05`,
                        `0 0 20px ${tech.color}40, inset 0 0 15px ${tech.color}15`,
                        `0 0 10px ${tech.color}20, inset 0 0 10px ${tech.color}05`,
                      ],
                    }}
                    transition={{
                      duration: 2.5,
                      repeat: Infinity,
                      ease: "easeInOut",
                      delay: index * 0.15,
                    }}
                  >
                    <div style={{ color: tech.color }} className="z-30 flex items-center justify-center">
                      {tech.icon}
                    </div>
                  </motion.div>

                  {/* Timeline Connection Dot */}
                  <motion.div
                    className="absolute -bottom-8 left-1/2 -translate-x-1/2 w-3 h-3 rounded-full border-2"
                    style={{ 
                      borderColor: tech.color,
                      backgroundColor: `${tech.color}30`
                    }}
                    animate={{
                      scale: [1, 1.6, 1],
                      opacity: [0.6, 1, 0.6],
                    }}
                    transition={{
                      duration: 2.5,
                      repeat: Infinity,
                      ease: "easeInOut",
                      delay: index * 0.15,
                    }}
                  />
                </motion.div>

                {/* Tech Name & Category */}
                <motion.div
                  className="text-center mt-8 md:mt-12"
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.5 + index * 0.08 }}
                >
                  <div className="text-sm md:text-base font-semibold text-white mb-1 group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-purple-400 group-hover:to-cyan-400 transition-all duration-300">
                    {tech.name}
                  </div>
                  <motion.div
                    className="text-xs md:text-sm font-light opacity-50 group-hover:opacity-100 transition-opacity duration-300"
                    style={{ color: tech.color }}
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    transition={{ delay: 0.6 + index * 0.08 }}
                  >
                    {tech.category}
                  </motion.div>
                </motion.div>

                {/* Hover Indicator Line */}
                <motion.div
                  className="absolute bottom-0 left-1/2 -translate-x-1/2 h-0.5 w-0 group-hover:w-8 transition-all duration-300"
                  style={{ backgroundColor: tech.color }}
                />
              </motion.div>
            ))}
          </div>

          {/* Bottom Decorative Line */}
          <motion.div
            className="mt-16 md:mt-20 h-px bg-gradient-to-r from-transparent via-cyan-500/20 to-transparent"
            initial={{ opacity: 0, scaleX: 0 }}
            whileInView={{ opacity: 1, scaleX: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.8, duration: 0.8 }}
            style={{ transformOrigin: "center" }}
          />
        </motion.div>
      </div>
    </div>
  );
};
