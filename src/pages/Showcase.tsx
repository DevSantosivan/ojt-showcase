import { FadeInSection, StaggerContainer, StaggerItem } from "@/components/Animations";
import { Globe, Smartphone, Award, Palette } from "lucide-react";

interface TechItem {
  name: string;
  years: string;
}

const webTech: TechItem[] = [
  { name: "Angular", years: "1 year" },
  { name: "React", years: "1 year" },
  { name: "Tailwind CSS", years: "1 year" },
  { name: "JavaScript", years: "2 years" },
  { name: "Bootstrap", years: "2 years" },
  { name: "PHP", years: "1 year" },
  { name: "Node.js", years: "1 year" },
  { name: "MySQL", years: "1 year" },
  { name: "Supabase", years: "1 year" },
  { name: "Firebase", years: "1 year" },
  { name: "Git", years: "2 years" },
  { name: "GitHub", years: "2 years" },
  { name: "Postman", years: "1 year" },
];

const mobileTech: TechItem[] = [
  { name: "Flutter", years: "1 year" },
  { name: "Dart", years: "1 year" },
];

const designTools: TechItem[] = [
  { name: "Canva", years: "2 years" },
  { name: "Figma", years: "1 year" },
];

const certificates = [
  "Web Development Fundamentals",
  "React & Angular Certification",
  "Mobile App Development with Flutter",
  "UI/UX Design Basics",
];

function TechCard({ item }: { item: TechItem }) {
  return (
    <div className="card-clean rounded-lg border border-border bg-card p-3.5 flex items-center justify-between hover:border-primary/40 transition-colors">
      <span className="text-sm font-medium">{item.name}</span>
      <span className="text-xs text-muted-foreground bg-muted px-2 py-0.5 rounded-full">{item.years}</span>
    </div>
  );
}

export default function Showcase() {
  return (
    <div className="space-y-10">
      <FadeInSection>
        <h1 className="font-heading text-2xl font-bold tracking-tight">Showcase</h1>
        <p className="text-muted-foreground text-sm leading-relaxed mt-2">
          My tech stack, tools, and certifications acquired throughout my academic journey and OJT internship.
        </p>
      </FadeInSection>

      {/* Web Tech Stack */}
      <FadeInSection delay={0.05}>
        <section className="space-y-4">
          <h2 className="font-heading text-lg font-semibold flex items-center gap-2">
            <Globe className="h-5 w-5 text-primary" />
            Web Tech Stack
          </h2>
          <StaggerContainer className="grid grid-cols-2 sm:grid-cols-3 gap-2">
            {webTech.map((item) => (
              <StaggerItem key={item.name}>
                <TechCard item={item} />
              </StaggerItem>
            ))}
          </StaggerContainer>
        </section>
      </FadeInSection>

      {/* Mobile Tech Stack */}
      <FadeInSection delay={0.1}>
        <section className="space-y-4">
          <h2 className="font-heading text-lg font-semibold flex items-center gap-2">
            <Smartphone className="h-5 w-5 text-primary" />
            Mobile Tech Stack
          </h2>
          <StaggerContainer className="grid grid-cols-2 sm:grid-cols-3 gap-2">
            {mobileTech.map((item) => (
              <StaggerItem key={item.name}>
                <TechCard item={item} />
              </StaggerItem>
            ))}
          </StaggerContainer>
        </section>
      </FadeInSection>

      {/* Design Tools */}
      <FadeInSection delay={0.15}>
        <section className="space-y-4">
          <h2 className="font-heading text-lg font-semibold flex items-center gap-2">
            <Palette className="h-5 w-5 text-primary" />
            Design Tools
          </h2>
          <StaggerContainer className="grid grid-cols-2 sm:grid-cols-3 gap-2">
            {designTools.map((item) => (
              <StaggerItem key={item.name}>
                <TechCard item={item} />
              </StaggerItem>
            ))}
          </StaggerContainer>
        </section>
      </FadeInSection>

      {/* Certificates */}
      <FadeInSection delay={0.2}>
        <section className="space-y-4">
          <h2 className="font-heading text-lg font-semibold flex items-center gap-2">
            <Award className="h-5 w-5 text-primary" />
            Certificates
          </h2>
          <StaggerContainer className="grid gap-2 sm:grid-cols-2">
            {certificates.map((cert) => (
              <StaggerItem key={cert}>
                <div className="card-clean rounded-lg border border-border bg-card p-4 flex items-start gap-3 hover:border-primary/40 transition-colors">
                  <Award className="h-4 w-4 text-primary mt-0.5 shrink-0" />
                  <span className="text-sm">{cert}</span>
                </div>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </section>
      </FadeInSection>
    </div>
  );
}
