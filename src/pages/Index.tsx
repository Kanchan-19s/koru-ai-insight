import Hero from "@/components/ui/neural-network-hero";
import { ProblemSection } from "@/components/sections/ProblemSection";
import { FeaturesSectionWithHoverEffects } from "@/components/ui/feature-section-with-hover-effects";
import { OrbitalTechStack } from "@/components/ui/orbital-tech-stack";
import { FooterSection } from "@/components/sections/FooterSection";
import InteractiveNeuralVortex from "@/components/ui/interactive-neural-vortex-background";
import { motion } from "framer-motion";

const Index = () => {
  return (
    <div className="relative w-full overflow-x-hidden">
      <InteractiveNeuralVortex />
      
      <Hero
        title="AI Interview Intelligence That Hiring Teams Trust"
        description="KORU transforms candidate assessment with explainable AI, real-time transcription, and objective scoring. Make data-driven hiring decisions with confidence."
        badgeText="AI-Powered Assessment"
        badgeLabel="New"
        ctaButtons={[
          { text: "Start Free Trial", href: "#get-started", primary: true },
          { text: "Watch Demo", href: "#demo" }
        ]}
        microDetails={["Voice Analysis", "Real-time Scoring", "Full Transparency"]}
      />

      <ProblemSection />

      <section className="py-24 px-6">
        <div className="max-w-7xl mx-auto text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <span className="inline-block px-4 py-2 mb-6 text-sm font-light tracking-wider text-white/70 border border-white/10 rounded-full backdrop-blur-sm">
              THE SOLUTION
            </span>
            <h2 className="text-5xl md:text-6xl font-extralight text-white mb-6 tracking-tight">
              The KORU <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500">Solution</span>
            </h2>
            <p className="text-xl text-white/60 max-w-2xl mx-auto leading-relaxed">
              Enterprise-grade AI that brings objectivity, speed, and transparency to every interview.
            </p>
          </motion.div>
        </div>
        <FeaturesSectionWithHoverEffects />
      </section>

      <section className="py-32 px-6">
        <div className="max-w-7xl mx-auto text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <span className="inline-block px-4 py-2 mb-6 text-sm font-light tracking-wider text-white/70 border border-white/10 rounded-full backdrop-blur-sm">
              POWERED BY
            </span>
            <h2 className="text-5xl md:text-6xl font-extralight text-white mb-6 tracking-tight">
              Built on <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500">Advanced</span> Technology
            </h2>
            <p className="text-xl text-white/60 max-w-3xl mx-auto leading-relaxed">
              Powered by cutting-edge AI models, modern frameworks, and scalable cloud infrastructure 
              to deliver unmatched interview intelligence.
            </p>
          </motion.div>
        </div>
        <OrbitalTechStack />
      </section>

      <FooterSection />
    </div>
  );
};

export default Index;
