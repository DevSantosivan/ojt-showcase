import { FadeInSection, StaggerContainer, StaggerItem } from "@/components/Animations";

export default function Showcase() {
  return (
    <div className="space-y-6">
      <FadeInSection>
        <h1 className="font-heading text-2xl font-bold tracking-tight">Showcase</h1>
        <p className="text-muted-foreground text-sm leading-relaxed mt-2">
          A collection of projects, outputs, and accomplishments completed during the OJT internship period.
        </p>
      </FadeInSection>
      <StaggerContainer className="grid gap-4 sm:grid-cols-2">
        {["Project Documentation", "System Development", "Technical Support", "Administrative Tasks"].map((item) => (
          <StaggerItem key={item}>
            <div className="card-clean rounded-lg border border-border bg-card p-5">
              <h3 className="font-heading text-sm font-semibold mb-1">{item}</h3>
              <p className="text-muted-foreground text-xs">Details and documentation will be added here.</p>
            </div>
          </StaggerItem>
        ))}
      </StaggerContainer>
    </div>
  );
}
