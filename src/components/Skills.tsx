import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Box, FileCheck, GitBranch, ListChecks } from "lucide-react";

const Skills = () => {
  const technicalTools = [
    { name: "CVAT", icon: Box },
    { name: "YOLO Format", icon: FileCheck },
    { name: "COCO Format", icon: FileCheck },
  ];

  const coreSkills = [
    { name: "Process Documentation", icon: ListChecks },
    { name: "QA Methodologies", icon: FileCheck },
    { name: "Occlusion Handling", icon: Box },
    { name: "Consistency Management", icon: GitBranch },
  ];

  return (
    <section className="py-20 px-6 bg-[hsl(var(--section-bg))]">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-4 text-foreground">
          Expertise
        </h2>
        <p className="text-center text-muted-foreground mb-12 text-lg">
          Technical proficiency and quality-focused methodologies
        </p>

        <div className="grid md:grid-cols-2 gap-8">
          <Card className="border-2 hover:border-primary transition-colors duration-300">
            <CardHeader>
              <CardTitle className="text-2xl">Technical Tools</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="flex flex-wrap gap-3">
                {technicalTools.map((tool) => (
                  <Badge 
                    key={tool.name} 
                    variant="secondary" 
                    className="text-base py-2 px-4 gap-2"
                  >
                    <tool.icon className="w-4 h-4" />
                    {tool.name}
                  </Badge>
                ))}
              </div>
            </CardContent>
          </Card>

          <Card className="border-2 hover:border-accent transition-colors duration-300">
            <CardHeader>
              <CardTitle className="text-2xl">Core Skills</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="flex flex-wrap gap-3">
                {coreSkills.map((skill) => (
                  <Badge 
                    key={skill.name} 
                    variant="secondary" 
                    className="text-base py-2 px-4 gap-2"
                  >
                    <skill.icon className="w-4 h-4" />
                    {skill.name}
                  </Badge>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default Skills;
