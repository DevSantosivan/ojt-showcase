import {
  FadeInSection,
  StaggerContainer,
  StaggerItem,
} from "@/components/Animations";

interface ChapterPageProps {
  number: number;
  title: string;
  description: string;
}

function ChapterPage({ number, title, description }: ChapterPageProps) {
  return (
    <div className="space-y-6">
      <FadeInSection>
        <div>
          <p className="text-xs uppercase tracking-wider text-muted-foreground mb-1">
            Chapter {number}
          </p>
          <h1 className="font-heading text-2xl font-bold tracking-tight">
            {title}
          </h1>
        </div>
      </FadeInSection>
      <FadeInSection delay={0.1}>
        <p className="text-muted-foreground text-sm leading-relaxed">
          {description}
        </p>
      </FadeInSection>
      <FadeInSection delay={0.2}>
        <div className="card-clean rounded-lg border border-border bg-card p-6 text-center">
          <p className="text-muted-foreground text-sm">
            Content for this chapter will be added here.
          </p>
        </div>
      </FadeInSection>
    </div>
  );
}
