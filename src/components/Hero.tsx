import { Button } from "@/components/ui/button";
import { FileText, Linkedin } from "lucide-react";

const Hero = () => {
  return (
    <section className="min-h-screen flex items-center justify-center px-6 py-20 bg-gradient-to-br from-[hsl(var(--hero-gradient-from))] to-[hsl(var(--hero-gradient-to))]">
      <div className="max-w-4xl mx-auto text-center">
        <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 tracking-tight">
          Data Annotation & Quality Specialist
        </h1>
        <p className="text-xl md:text-2xl text-white/90 mb-12 max-w-3xl mx-auto leading-relaxed">
          Dedicated to delivering pixel-perfect annotations with unwavering accuracy 
          and meticulous process adherence. Building reliable datasets that power 
          next-generation AI systems.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button 
            size="lg" 
            variant="secondary"
            className="gap-2 text-lg px-8 py-6 shadow-lg hover:shadow-xl transition-all"
          >
            <FileText className="w-5 h-5" />
            Download CV
          </Button>
          <Button 
            size="lg" 
            variant="outline"
            className="gap-2 text-lg px-8 py-6 bg-white/10 backdrop-blur-sm text-white border-white/30 hover:bg-white/20 shadow-lg hover:shadow-xl transition-all"
          >
            <Linkedin className="w-5 h-5" />
            LinkedIn Profile
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Hero;
