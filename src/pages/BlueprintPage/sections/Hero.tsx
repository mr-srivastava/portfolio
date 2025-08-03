import { Button } from "@/components/ui/button";
import { ChevronDown, Monitor, Server, Cloud } from "lucide-react";
import { HeroData } from "../../../app/blueprint/types";

const CircuitPattern = () => (
  <div className="absolute inset-0 opacity-20">
    <svg
      className="w-full h-full"
      viewBox="0 0 800 600"
      xmlns="http://www.w3.org/2000/svg"
    >
      <g stroke="hsl(var(--blueprint-primary))" strokeWidth="2" fill="none">
        {/* Circuit-like paths */}
        <path d="M100,100 L200,100 L200,200 L300,200" />
        <path d="M300,200 L400,200 L400,300 L500,300" />
        <path d="M500,300 L600,300 L600,400" />
        <circle cx="200" cy="100" r="4" fill="hsl(var(--blueprint-primary))" />
        <circle
          cx="300"
          cy="200"
          r="4"
          fill="hsl(var(--blueprint-secondary))"
        />
        <circle cx="500" cy="300" r="4" fill="hsl(var(--blueprint-accent))" />

        {/* More circuit elements */}
        <path d="M700,50 L700,150 L600,150 L600,250" />
        <path d="M150,400 L250,400 L250,500 L350,500" />
        <rect
          x="190"
          y="90"
          width="20"
          height="20"
          fill="none"
          stroke="hsl(var(--blueprint-primary))"
        />
        <rect
          x="590"
          y="290"
          width="20"
          height="20"
          fill="none"
          stroke="hsl(var(--blueprint-secondary))"
        />
      </g>
    </svg>
  </div>
);

const StatusIndicator = ({
  isOnline,
  message,
}: {
  isOnline: boolean;
  message: string;
}) => (
  <div className="inline-flex items-center space-x-2 bg-secondary/50 backdrop-blur-sm border border-blueprint-primary/30 rounded-lg px-4 py-2">
    <div
      className={`w-2 h-2 rounded-full ${isOnline ? "bg-status-online" : "bg-status-inactive"} animate-pulse`}
    ></div>
    <span className="text-sm font-mono font-medium text-blueprint-primary">
      {message}
    </span>
  </div>
);

const MainHeading = ({ name }: { name: { first: string; last: string } }) => (
  <div className="space-y-4">
    <h1 className="text-6xl md:text-8xl font-extrabold bg-gradient-to-r from-blueprint-primary to-blueprint-secondary bg-clip-text text-transparent">
      {name.first}
    </h1>
    <h2 className="text-3xl md:text-5xl font-bold text-foreground">
      {name.last}
    </h2>
    <div className="h-1 w-32 bg-gradient-to-r from-blueprint-primary to-blueprint-secondary mx-auto"></div>
  </div>
);

const TechStackIcons = ({
  techStack,
}: {
  techStack: Array<{ icon: string; label: string }>;
}) => {
  const iconMap: Record<string, React.ComponentType<any>> = {
    Monitor,
    Server,
    Cloud,
  };

  return (
    <div className="flex justify-center space-x-8 py-8">
      {techStack.map(({ icon, label }) => {
        const IconComponent = iconMap[icon];
        return (
          <div
            key={label}
            className="flex flex-col items-center space-y-2 group"
          >
            <div className="p-4 border border-blueprint-grid rounded-lg group-hover:border-blueprint-primary transition-colors">
              <IconComponent className="w-8 h-8 text-blueprint-primary" />
            </div>
            <span className="text-sm font-mono font-medium text-blueprint-muted">
              {label}
            </span>
          </div>
        );
      })}
    </div>
  );
};

const CTAButton = () => (
  <div className="pt-8">
    <Button
      size="lg"
      className="bg-blueprint-primary hover:bg-blueprint-secondary text-background font-mono font-semibold transition-all duration-300 shadow-[0_0_20px_hsl(var(--blueprint-primary)/0.5)] hover:shadow-[0_0_30px_hsl(var(--blueprint-secondary)/0.7)]"
    >
      VIEW PROJECTS
      <ChevronDown className="ml-2 w-4 h-4" />
    </Button>
  </div>
);

const ScrollIndicator = () => (
  <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2">
    <div className="w-6 h-10 border-2 border-blueprint-primary rounded-full flex justify-center">
      <div className="w-1 h-3 bg-blueprint-primary rounded-full mt-2 animate-bounce"></div>
    </div>
  </div>
);

interface HeroProps {
  data: HeroData;
}

export const Hero = ({ data }: HeroProps) => (
  <section className="min-h-screen flex items-center justify-center relative overflow-hidden">
    <CircuitPattern />

    <div className="container mx-auto px-6 text-center z-10">
      <div className="space-y-8">
        <StatusIndicator
          isOnline={data.status.isOnline}
          message={data.status.message}
        />
        <MainHeading name={data.name} />

        <p className="text-xl md:text-2xl text-blueprint-muted font-mono font-medium">
          {data.role}
        </p>

        <TechStackIcons techStack={data.techStack} />
        <CTAButton />
      </div>
    </div>

    <ScrollIndicator />
  </section>
);
