import { GradientCard } from "@/components/ui/gradient-card";
import { DollarSign, Clock, AlertTriangle } from "lucide-react";

export const ProblemSection = () => {
  return (
    <section className="relative py-24 px-6 md:px-10 lg:px-16 bg-background">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-light text-foreground mb-6">
            Why Hiring Fails Today
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            Hiring is still driven by subjective judgment. Recruiters drown in AI-generated 
            resumes and unstructured interviews.
          </p>
        </div>

        <div className="flex flex-wrap justify-center gap-8">
          <GradientCard
            icon={<DollarSign />}
            title="Bad Hire Cost"
            value="$240K"
            description="Average cost of a bad technical hire including recruitment, onboarding, and lost productivity"
          />
          <GradientCard
            icon={<Clock />}
            title="Time to Hire"
            value="44 Days"
            description="Average time-to-hire for technical positions, delaying critical projects"
          />
          <GradientCard
            icon={<AlertTriangle />}
            title="Bad Hires"
            value="74%"
            description="Employers who admit to making at least one bad hire in the past year"
          />
        </div>
      </div>
    </section>
  );
};
