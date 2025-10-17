import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { CheckCircle2 } from "lucide-react";

interface Project {
  title: string;
  subtitle: string;
  challenge: string;
  technique: string;
  outcome: string;
  tags: string[];
}

const projects: Project[] = [
  {
    title: "Cyclist Tracking",
    subtitle: "Efficiency and Keyframe Interpolation",
    challenge: "High-volume cyclist detection across extended video sequences requiring consistent tracking IDs",
    technique: "Strategic keyframe selection combined with automated interpolation workflows to maintain annotation quality while maximizing throughput",
    outcome: "Reduced annotation time by 40% while maintaining 98%+ tracking accuracy across complex urban scenarios",
    tags: ["Tracking", "Interpolation", "Efficiency"]
  },
  {
    title: "Top-View Traffic MOT",
    subtitle: "Quality Assurance & Track ID Consistency",
    challenge: "Managing multiple simultaneous vehicle tracks in dense traffic scenarios with frequent occlusions and overlapping bounding boxes",
    technique: "Implemented systematic QA checkpoints with cross-frame validation protocols to ensure track ID consistency throughout the sequence",
    outcome: "Achieved 99.5% track ID consistency across 50,000+ frames with zero identity switches in final deliverables",
    tags: ["Multi-Object Tracking", "QA", "Consistency"]
  }
];

const Projects = () => {
  return (
    <section className="py-20 px-6 bg-background">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-4 text-foreground">
          Case Studies
        </h2>
        <p className="text-center text-muted-foreground mb-12 text-lg">
          Real-world projects demonstrating quality and precision
        </p>

        <div className="space-y-8">
          {projects.map((project, index) => (
            <Card 
              key={index} 
              className="border-2 hover:border-primary transition-all duration-300 hover:shadow-xl"
            >
              <CardHeader>
                <div className="flex flex-wrap gap-2 mb-3">
                  {project.tags.map((tag) => (
                    <Badge key={tag} variant="outline" className="text-sm">
                      {tag}
                    </Badge>
                  ))}
                </div>
                <CardTitle className="text-3xl mb-2">{project.title}</CardTitle>
                <CardDescription className="text-lg text-primary">
                  {project.subtitle}
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                <div>
                  <h4 className="font-semibold text-lg mb-2 flex items-center gap-2">
                    <span className="text-primary">Challenge</span>
                  </h4>
                  <p className="text-muted-foreground leading-relaxed">{project.challenge}</p>
                </div>
                <div>
                  <h4 className="font-semibold text-lg mb-2 flex items-center gap-2">
                    <span className="text-accent">Technique Used</span>
                  </h4>
                  <p className="text-muted-foreground leading-relaxed">{project.technique}</p>
                </div>
                <div>
                  <h4 className="font-semibold text-lg mb-2 flex items-center gap-2">
                    <CheckCircle2 className="w-5 h-5 text-accent" />
                    <span>Quality Outcome</span>
                  </h4>
                  <p className="text-foreground font-medium leading-relaxed">{project.outcome}</p>
                </div>
              </CardContent>
            </Card>
          ))}

          {/* Template Card - Comment out or remove in production */}
          <Card className="border-2 border-dashed border-muted opacity-50">
            <CardHeader>
              <div className="flex flex-wrap gap-2 mb-3">
                <Badge variant="outline" className="text-sm">Tag 1</Badge>
                <Badge variant="outline" className="text-sm">Tag 2</Badge>
              </div>
              <CardTitle className="text-3xl mb-2">New Project Title</CardTitle>
              <CardDescription className="text-lg text-primary">
                Focus area or specialty
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              <div>
                <h4 className="font-semibold text-lg mb-2 flex items-center gap-2">
                  <span className="text-primary">Challenge</span>
                </h4>
                <p className="text-muted-foreground leading-relaxed">
                  Describe the problem or complexity of the project
                </p>
              </div>
              <div>
                <h4 className="font-semibold text-lg mb-2 flex items-center gap-2">
                  <span className="text-accent">Technique Used</span>
                </h4>
                <p className="text-muted-foreground leading-relaxed">
                  Explain the methodology, tools, or approach applied
                </p>
              </div>
              <div>
                <h4 className="font-semibold text-lg mb-2 flex items-center gap-2">
                  <CheckCircle2 className="w-5 h-5 text-accent" />
                  <span>Quality Outcome</span>
                </h4>
                <p className="text-foreground font-medium leading-relaxed">
                  Quantify the results and impact on quality metrics
                </p>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default Projects;
