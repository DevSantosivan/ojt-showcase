interface ChapterPageProps {
  number: number;
  title: string;
  description: string;
}

function ChapterPage({ number, title, description }: ChapterPageProps) {
  return (
    <div className="space-y-6">
      <div>
        <p className="text-xs uppercase tracking-wider text-muted-foreground mb-1">Chapter {number}</p>
        <h1 className="font-heading text-2xl font-bold tracking-tight">{title}</h1>
      </div>
      <p className="text-muted-foreground text-sm leading-relaxed">{description}</p>
      <div className="card-clean rounded-lg border border-border bg-card p-6 text-center">
        <p className="text-muted-foreground text-sm">Content for this chapter will be added here.</p>
      </div>
    </div>
  );
}

export function Chapter2() {
  return <ChapterPage number={2} title="Practicum Experience" description="This chapter documents the day-to-day experiences, tasks performed, and skills acquired during the OJT internship period." />;
}

export function Chapter3() {
  return <ChapterPage number={3} title="Assessment" description="This chapter provides a comprehensive assessment of the internship experience, including self-evaluation, supervisor feedback, and competency analysis." />;
}

export function Chapter4() {
  return <ChapterPage number={4} title="Summary & Recommendations" description="This chapter summarizes the overall OJT experience and provides recommendations for future interns and the host organization." />;
}
