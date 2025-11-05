import { GradientCard } from "@/components/ui/gradient-card";
import { DollarSign, Clock, AlertTriangle } from "lucide-react";
import { motion } from "framer-motion";

export const ProblemSection = () => {
  return (
    <section className="relative py-32 px-6 md:px-10 lg:px-16 overflow-hidden">
      {/* Section background with gradient accent */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-black/20 to-transparent" />
      
      <div className="max-w-7xl mx-auto relative z-10">
        {/* Header with animation */}
        <div className="text-center mb-20">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <span className="inline-block px-4 py-2 mb-6 text-sm font-light tracking-wider text-white/70 border border-white/10 rounded-full backdrop-blur-sm">
              THE BROKEN HIRING PROCESS
            </span>
            <h2 className="text-5xl md:text-6xl font-extralight text-white mb-6 tracking-tight">
              Why Hiring <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-500 to-orange-500">Fails</span> Today
            </h2>
            <p className="text-xl text-white/60 max-w-3xl mx-auto leading-relaxed">
              Hiring is still driven by <span className="text-white/90 font-medium">subjective judgment</span>. 
              Recruiters drown in AI-generated resumes and unstructured interviews, 
              leading to costly mistakes and missed opportunities.
            </p>
          </motion.div>
        </div>

        {/* Cards with stagger animation */}
        <motion.div 
          className="flex flex-wrap justify-center gap-8 lg:gap-10"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={{
            visible: {
              transition: {
                staggerChildren: 0.2
              }
            }
          }}
        >
          <GradientCard
            icon={<DollarSign />}
            title="Bad Hire Cost"
            value="$240K"
            description="Average cost of a bad technical hire including recruitment, onboarding, productivity loss, and team disruption"
            accentColor="#ef4444"
          />
          <GradientCard
            icon={<Clock />}
            title="Time to Hire"
            value="44 Days"
            description="Average time-to-hire for technical positions, causing project delays and lost market opportunities"
            accentColor="#f59e0b"
          />
          <GradientCard
            icon={<AlertTriangle />}
            title="Bad Hires"
            value="74%"
            description="Employers who admit to making at least one bad hire in the past year—a systemic failure"
            accentColor="#dc2626"
          />
        </motion.div>

        {/* Bottom callout */}
        <motion.div
          className="mt-20 text-center"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.8 }}
        >
          <p className="text-white/50 text-sm tracking-wide">
            Traditional hiring methods are no longer sufficient in the age of AI
          </p>
        </motion.div>
      </div>
    </section>
  );
};
