import React, { useRef, useState } from "react";
import { motion, useMotionValue, useSpring } from "framer-motion";

interface GradientCardProps {
  icon: React.ReactNode;
  title: string;
  value: string;
  description: string;
  accentColor: string;
}

export const GradientCard: React.FC<GradientCardProps> = ({ icon, title, value, description, accentColor }) => {
  const cardRef = useRef<HTMLDivElement>(null);
  const [isHovered, setIsHovered] = useState(false);
  
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);
  
  const rotateX = useSpring(0, { stiffness: 300, damping: 30 });
  const rotateY = useSpring(0, { stiffness: 300, damping: 30 });

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (cardRef.current) {
      const rect = cardRef.current.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;
      
      mouseX.set(x);
      mouseY.set(y);

      const centerX = rect.width / 2;
      const centerY = rect.height / 2;
      const rotateXValue = ((y - centerY) / centerY) * -10;
      const rotateYValue = ((x - centerX) / centerX) * 10;

      rotateX.set(rotateXValue);
      rotateY.set(rotateYValue);
    }
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
    rotateX.set(0);
    rotateY.set(0);
  };

  return (
    <motion.div
      ref={cardRef}
      className="relative rounded-3xl overflow-hidden cursor-pointer group"
      style={{
        width: "360px",
        height: "440px",
        transformStyle: "preserve-3d",
        rotateX,
        rotateY,
      }}
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      whileHover={{ scale: 1.02 }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={handleMouseLeave}
      onMouseMove={handleMouseMove}
    >
      {/* Backdrop with glass effect */}
      <div className="absolute inset-0 bg-black/40 backdrop-blur-xl border border-white/10 rounded-3xl" />
      
      {/* Animated gradient background */}
      <motion.div
        className="absolute inset-0 opacity-30"
        style={{
          background: `radial-gradient(circle at 50% 50%, ${accentColor}, transparent 70%)`,
        }}
        animate={{
          scale: isHovered ? 1.2 : 1,
          opacity: isHovered ? 0.5 : 0.3,
        }}
        transition={{ duration: 0.3 }}
      />

      {/* Interactive spotlight effect */}
      <motion.div
        className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
        style={{
          background: `radial-gradient(600px circle at var(--mouse-x) var(--mouse-y), ${accentColor}40, transparent 40%)`,
          '--mouse-x': `${mouseX.get()}px`,
          '--mouse-y': `${mouseY.get()}px`,
        } as React.CSSProperties}
      />

      {/* Glowing border effect */}
      <motion.div
        className="absolute inset-0 rounded-3xl"
        style={{
          boxShadow: isHovered 
            ? `0 0 40px ${accentColor}80, inset 0 0 40px ${accentColor}20`
            : `0 0 20px ${accentColor}40, inset 0 0 20px ${accentColor}10`,
        }}
        transition={{ duration: 0.3 }}
      />

      {/* Animated particles */}
      <div className="absolute inset-0 overflow-hidden">
        {[...Array(5)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-1 h-1 rounded-full"
            style={{
              background: accentColor,
              left: `${20 + i * 15}%`,
              top: `${30 + i * 10}%`,
            }}
            animate={{
              y: [0, -20, 0],
              opacity: [0.3, 0.8, 0.3],
              scale: [1, 1.5, 1],
            }}
            transition={{
              duration: 3 + i * 0.5,
              repeat: Infinity,
              delay: i * 0.3,
            }}
          />
        ))}
      </div>

      {/* Content */}
      <div className="relative z-10 h-full flex flex-col justify-between p-8">
        {/* Icon with pulsing effect */}
        <motion.div 
          className="flex justify-center mb-6"
          animate={{
            scale: isHovered ? 1.1 : 1,
          }}
          transition={{ duration: 0.3 }}
        >
          <motion.div 
            className="relative"
            animate={{
              rotate: isHovered ? 360 : 0,
            }}
            transition={{ duration: 0.8, ease: "easeInOut" }}
          >
            <div 
              className="absolute inset-0 blur-2xl opacity-50"
              style={{ color: accentColor }}
            >
              {icon}
            </div>
            <div className="relative text-6xl" style={{ color: accentColor }}>
              {icon}
            </div>
          </motion.div>
        </motion.div>
        
        {/* Text content */}
        <div className="flex flex-col items-center text-center space-y-4">
          <motion.h3 
            className="text-white text-xl font-light tracking-wide"
            animate={{
              color: isHovered ? accentColor : "#ffffff",
            }}
            transition={{ duration: 0.3 }}
          >
            {title}
          </motion.h3>
          
          <motion.div 
            className="text-6xl font-bold tracking-tight"
            style={{ color: accentColor }}
            animate={{
              scale: isHovered ? 1.1 : 1,
            }}
            transition={{ duration: 0.3 }}
          >
            {value}
          </motion.div>
          
          <motion.p 
            className="text-white/70 text-sm leading-relaxed max-w-xs"
            animate={{
              color: isHovered ? "#ffffff" : "rgba(255,255,255,0.7)",
            }}
            transition={{ duration: 0.3 }}
          >
            {description}
          </motion.p>

          {/* Progress bar indicator */}
          <motion.div 
            className="w-full h-1 bg-white/10 rounded-full overflow-hidden mt-4"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
          >
            <motion.div
              className="h-full rounded-full"
              style={{ background: accentColor }}
              initial={{ width: "0%" }}
              whileInView={{ width: "100%" }}
              viewport={{ once: true }}
              transition={{ duration: 1.5, delay: 0.3 }}
            />
          </motion.div>
        </div>
      </div>

      {/* Corner accent */}
      <div 
        className="absolute top-0 right-0 w-32 h-32 opacity-20"
        style={{
          background: `radial-gradient(circle at top right, ${accentColor}, transparent 70%)`,
        }}
      />
    </motion.div>
  );
};
