import Hero from "@/components/ui/neural-network-hero";
import { ProblemSection } from "@/components/sections/ProblemSection";
import { FeaturesSectionWithHoverEffects } from "@/components/ui/feature-section-with-hover-effects";
import { TechStack } from "@/components/ui/tech-stack";
import { FooterSection } from "@/components/sections/FooterSection";
import InteractiveNeuralVortex from "@/components/ui/interactive-neural-vortex-background";

const Index = () => {
  const techStack = [
    { name: 'React', url: 'https://react.dev/', color: '#61DAFB' },
    { name: 'TypeScript', url: 'https://www.typescriptlang.org/', color: '#3178C6' },
    { name: 'Python', url: 'https://www.python.org/', color: '#3776AB' },
    { name: 'TensorFlow', url: 'https://www.tensorflow.org/', color: '#FF6F00' },
    { name: 'OpenAI', url: 'https://openai.com/', color: '#10A37F' },
    { name: 'PostgreSQL', url: 'https://www.postgresql.org/', color: '#4169E1' },
    { name: 'Docker', url: 'https://www.docker.com/', color: '#2496ED' },
    { name: 'AWS', url: 'https://aws.amazon.com/', color: '#FF9900' },
  ];

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

      <section className="py-24 px-6 bg-background">
        <div className="max-w-7xl mx-auto text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-light text-foreground mb-6">
            The KORU Solution
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            Enterprise-grade AI that brings objectivity, speed, and transparency to every interview.
          </p>
        </div>
        <FeaturesSectionWithHoverEffects />
      </section>

      <section className="py-24 px-6 bg-background">
        <div className="max-w-7xl mx-auto text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-light text-foreground mb-6">
            Built on Industry-Leading Technology
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            Powered by cutting-edge AI and scalable cloud infrastructure.
          </p>
        </div>
        <TechStack techStack={techStack} />
      </section>

      <FooterSection />
    </div>
  );
};

export default Index;
