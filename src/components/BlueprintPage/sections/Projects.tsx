import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ExternalLink, Github, Activity } from "lucide-react";
import { ProjectData } from "../../../app/blueprint/types";

interface ProjectsProps {
  projects: ProjectData[];
}

export default function Projects({ projects }: ProjectsProps) {
  return (
    <section className="py-20 relative">
      <div className="container mx-auto px-6">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center space-x-2 bg-secondary/50 backdrop-blur-sm border border-blueprint-primary/30 rounded-lg px-4 py-2 mb-6">
            <Activity className="w-4 h-4 text-blueprint-primary animate-pulse" />
            <span className="text-sm font-mono font-medium text-blueprint-primary">
              PROJECT.DATABASE
            </span>
          </div>
          <h2 className="text-4xl md:text-6xl font-extrabold mb-4">
            <span className="bg-gradient-to-r from-blueprint-primary to-blueprint-secondary bg-clip-text text-transparent">
              PROJECTS
            </span>
          </h2>
          <p className="text-xl text-blueprint-muted font-mono font-medium">
            Engineered Solutions & Digital Innovations
          </p>
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {projects.map((project) => (
            <Card
              key={project.id}
              className="group relative overflow-hidden border-blueprint-grid hover:border-blueprint-primary transition-all duration-300 bg-secondary/20 backdrop-blur-sm"
            >
              {/* Project ID Corner */}
              <div className="absolute top-0 right-0 bg-blueprint-primary text-background font-mono text-sm font-bold px-3 py-1 rounded-bl-lg">
                {project.id}
              </div>

              <CardHeader className="pb-4">
                <div className="flex items-center justify-between mb-2">
                  <Badge
                    variant="outline"
                    className="text-xs font-mono font-medium border-blueprint-primary text-blueprint-primary"
                  >
                    {project.type}
                  </Badge>
                  <span className="text-xs font-mono font-medium text-blueprint-muted">
                    {project.year}
                  </span>
                </div>
                <CardTitle className="text-xl font-bold group-hover:text-blueprint-primary transition-colors">
                  {project.title}
                </CardTitle>
                <CardDescription className="text-sm text-blueprint-muted font-medium">
                  {project.description}
                </CardDescription>
              </CardHeader>

              <CardContent className="space-y-4">
                {/* Tech Stack */}
                <div className="space-y-2">
                  <h4 className="text-sm font-mono font-semibold text-blueprint-primary">
                    TECH_STACK:
                  </h4>
                  <div className="flex flex-wrap gap-2">
                    {project.tech.map((tech) => (
                      <Badge
                        key={tech}
                        variant="secondary"
                        className="text-xs font-mono font-medium bg-blueprint-grid/30 hover:bg-blueprint-primary/20 transition-colors"
                      >
                        {tech}
                      </Badge>
                    ))}
                  </div>
                </div>

                {/* Status */}
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-2">
                    <div
                      className={`w-2 h-2 rounded-full ${
                        project.status === "Production"
                          ? "bg-status-online"
                          : project.status === "Active"
                            ? "bg-blueprint-primary"
                            : project.status === "Maintenance"
                              ? "bg-status-warning"
                              : "bg-status-inactive"
                      }`}
                    ></div>
                    <span className="text-xs font-mono font-medium text-blueprint-muted">
                      STATUS: {project.status.toUpperCase()}
                    </span>
                  </div>
                </div>

                {/* Action Buttons */}
                <div className="flex space-x-2 pt-2">
                  <Button
                    size="sm"
                    variant="outline"
                    className="flex-1 font-mono font-semibold border-blueprint-primary text-blueprint-primary hover:bg-blueprint-primary hover:text-background"
                  >
                    <Github className="w-4 h-4 mr-2" />
                    CODE
                  </Button>
                  <Button
                    size="sm"
                    className="flex-1 font-mono font-semibold bg-blueprint-primary hover:bg-blueprint-secondary"
                  >
                    <ExternalLink className="w-4 h-4 mr-2" />
                    DEMO
                  </Button>
                </div>
              </CardContent>

              {/* Hover effect overlay */}
              <div className="absolute inset-0 bg-gradient-to-br from-blueprint-primary/5 to-blueprint-secondary/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"></div>
            </Card>
          ))}
        </div>

        {/* Archive Access */}
        <div className="text-center mt-16">
          <Button
            variant="outline"
            className="font-mono font-semibold border-blueprint-primary text-blueprint-primary hover:bg-blueprint-primary hover:text-background"
          >
            ACCESS_ARCHIVE.DB
            <ExternalLink className="ml-2 w-4 h-4" />
          </Button>
        </div>
      </div>
    </section>
  );
}
