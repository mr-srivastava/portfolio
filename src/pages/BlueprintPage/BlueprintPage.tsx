import { Hero } from "./sections/Hero";
import { Projects } from "./sections/Projects";
import { TechStack } from "./sections/TechStack";
import { Contact } from "./sections/Contact";
import { GridBackground } from "./components/GridBackground";
import { blueprintData } from "../../app/blueprint/data";

export const BlueprintPage = () => {
  return (
    <div className="min-h-screen bg-background text-foreground relative">
      <GridBackground />
      <Hero data={blueprintData.hero} />
      <Projects projects={blueprintData.projects} />
      <TechStack
        skills={blueprintData.techStack.skills}
        devEnvironment={blueprintData.techStack.devEnvironment}
      />
      <Contact data={blueprintData.contact} />
    </div>
  );
};

export default BlueprintPage;
