import { Button } from "@/components/ui/button";
import { FileText, Linkedin, Mail } from "lucide-react";

const Footer = () => {
  return (
    <footer className="py-16 px-6 bg-[hsl(var(--section-bg))] border-t border-border">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-4 text-foreground">
          Let's Connect
        </h2>
        <p className="text-muted-foreground mb-8 text-lg">
          Ready to discuss how precision annotation can elevate your AI projects
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
          <Button 
            size="lg" 
            className="gap-2 text-lg px-8 py-6 shadow-lg hover:shadow-xl transition-all"
          >
            <FileText className="w-5 h-5" />
            Download CV
          </Button>
          <Button 
            size="lg" 
            variant="outline"
            className="gap-2 text-lg px-8 py-6 shadow-lg hover:shadow-xl transition-all"
          >
            <Linkedin className="w-5 h-5" />
            LinkedIn Profile
          </Button>
          <Button 
            size="lg" 
            variant="outline"
            className="gap-2 text-lg px-8 py-6 shadow-lg hover:shadow-xl transition-all"
          >
            <Mail className="w-5 h-5" />
            Email
          </Button>
        </div>
        <div className="text-sm text-muted-foreground">
          © 2025 Data Annotation & Quality Specialist. All rights reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
