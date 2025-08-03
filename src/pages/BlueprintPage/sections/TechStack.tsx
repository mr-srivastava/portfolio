import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import { Settings, Terminal } from "lucide-react";
import { SkillData, DevEnvironmentData } from "../../../app/blueprint/types";

interface TechStackProps {
  skills: SkillData[];
  devEnvironment: DevEnvironmentData;
}

export const TechStack = ({ skills, devEnvironment }: TechStackProps) => (
  <section className="py-20 relative">
    <div className="container mx-auto px-6">
      {/* Section Header */}
      <div className="text-center mb-16">
        <div className="inline-flex items-center space-x-2 bg-secondary/50 backdrop-blur-sm border border-blueprint-primary/30 rounded-lg px-4 py-2 mb-6">
          <Settings className="w-4 h-4 text-blueprint-primary animate-pulse" />
          <span className="text-sm font-mono font-medium text-blueprint-primary">
            TECH.SPECIFICATIONS
          </span>
        </div>
        <h2 className="text-4xl md:text-6xl font-extrabold mb-4">
          <span className="bg-gradient-to-r from-blueprint-primary to-blueprint-secondary bg-clip-text text-transparent">
            TECH STACK
          </span>
        </h2>
        <p className="text-xl text-blueprint-muted font-mono font-medium">
          Core Technologies & Development Tools
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
        {/* Skills */}
        <div className="space-y-8">
          <h3 className="text-2xl font-bold text-blueprint-primary font-mono mb-6 flex items-center space-x-2">
            <Terminal className="w-6 h-6" />
            <span>CORE_SKILLS.EXE</span>
          </h3>
          {skills.map((skill) => (
            <div key={skill.category} className="space-y-4">
              <div className="flex items-center justify-between">
                <h4 className="text-lg font-mono font-semibold text-blueprint-primary">
                  {skill.category.toUpperCase()}
                </h4>
                <span className="text-sm font-mono font-medium text-blueprint-muted">
                  {skill.level}%
                </span>
              </div>
              <Progress value={skill.level} className="h-2" />
              <div className="flex flex-wrap gap-2">
                {skill.items.map((item) => (
                  <Badge
                    key={item}
                    variant="secondary"
                    className="font-mono font-medium bg-secondary/50 hover:bg-blueprint-primary/20 transition-colors border border-blueprint-grid"
                  >
                    {item}
                  </Badge>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Development Environment */}
        <div className="space-y-8">
          <h3 className="text-2xl font-bold text-blueprint-primary font-mono mb-6">
            DEV_ENVIRONMENT.CFG
          </h3>

          {/* System Info */}
          <div className="bg-secondary/20 border border-blueprint-grid rounded-lg p-6 font-mono text-sm space-y-2">
            <div className="flex justify-between">
              <span className="text-blueprint-primary font-semibold">OS:</span>
              <span className="text-foreground font-medium">
                {devEnvironment.system.os}
              </span>
            </div>
            <div className="flex justify-between">
              <span className="text-blueprint-primary font-semibold">IDE:</span>
              <span className="text-foreground font-medium">
                {devEnvironment.system.ide}
              </span>
            </div>
            <div className="flex justify-between">
              <span className="text-blueprint-primary font-semibold">
                Terminal:
              </span>
              <span className="text-foreground font-medium">
                {devEnvironment.system.terminal}
              </span>
            </div>
            <div className="flex justify-between">
              <span className="text-blueprint-primary font-semibold">
                Version Control:
              </span>
              <span className="text-foreground font-medium">
                {devEnvironment.system.versionControl}
              </span>
            </div>
            <div className="flex justify-between">
              <span className="text-blueprint-primary font-semibold">
                Package Manager:
              </span>
              <span className="text-foreground font-medium">
                {devEnvironment.system.packageManager}
              </span>
            </div>
          </div>

          {/* Tools */}
          <div>
            <h4 className="text-lg font-mono font-semibold text-blueprint-primary mb-4">
              TOOLS.LIBRARY
            </h4>
            <div className="grid grid-cols-2 gap-3">
              {devEnvironment.tools.map((tool) => (
                <div
                  key={tool}
                  className="bg-secondary/20 border border-blueprint-grid rounded-lg p-3 text-center font-mono text-sm font-medium hover:border-blueprint-primary transition-colors group"
                >
                  <span className="group-hover:text-blueprint-primary transition-colors">
                    {tool}
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* Current Focus */}
          <div className="bg-blueprint-primary/10 border border-blueprint-primary/30 rounded-lg p-6">
            <h4 className="text-lg font-mono font-semibold text-blueprint-primary mb-3">
              CURRENT_FOCUS.MD
            </h4>
            <ul className="space-y-2 font-mono text-sm text-foreground font-medium">
              {devEnvironment.currentFocus.map((focus, index) => (
                <li key={index} className="flex items-center space-x-2">
                  <div className="w-1 h-1 bg-blueprint-primary rounded-full"></div>
                  <span>{focus}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  </section>
);
