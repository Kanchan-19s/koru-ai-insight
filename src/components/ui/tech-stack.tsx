import React, { useState } from 'react';
import { motion, useMotionValue, useTransform } from 'framer-motion';
import { FileCode } from 'lucide-react';

interface Tech {
  name: string;
  url: string;
  color: string;
}

interface TechStackProps {
  techStack: Tech[];
}

export const TechStack: React.FC<TechStackProps> = ({ techStack }) => {
  const [isHovered, setIsHovered] = useState(false);
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const lightSize = 80; 

  const lightX = useTransform(x, (value) => value - lightSize / 2);
  const lightY = useTransform(y, (value) => value - lightSize / 2);

  const handleMouseMove = (event: React.MouseEvent) => {
    const rect = event.currentTarget.getBoundingClientRect();
    x.set(event.clientX - rect.left);
    y.set(event.clientY - rect.top);
  };

  return (
    <div className='flex justify-center items-center py-20'>
      <div
        className="relative bg-card/50 overflow-hidden w-96 h-60 pb-3 rounded-lg"
        style={{
          boxShadow: 'var(--shadow-card)'
        }}
        onMouseMove={handleMouseMove}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        <div className="absolute inset-0 bg-card/50 rounded-lg border border-border backdrop-blur-xl"></div>

        {isHovered && (
          <motion.div
            className="absolute rounded-full pointer-events-none"
            style={{
              width: lightSize,
              height: lightSize,
              background: 'rgba(255, 255, 255, 0.2)',
              filter: 'blur(30px)',
              x: lightX,
              y: lightY,
            }}
          ></motion.div>
        )}

        <div className="relative z-10 flex flex-col justify-between p-6">
          <div className="flex justify-between">
            <div className="flex items-center gap-2 mb-2 text-sm text-foreground">
              <FileCode className="w-5 h-5 mb-4" />
              <p className="font-medium mb-3 text-base">Tech Stack</p>
            </div>
          </div>
          <div className="flex flex-wrap gap-1.5">
            {techStack.map((tech, index) => (
              <a key={index} target="_blank" rel="noopener noreferrer" href={tech.url}>
                <div className="inline-flex items-center rounded-full border border-border px-2.5 py-0.5 text-xs transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 text-foreground hover:bg-accent">
                  <div className="w-2 h-2 mr-2 rounded-full" style={{ backgroundColor: tech.color }}></div>
                  {tech.name}
                </div>
              </a>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};
