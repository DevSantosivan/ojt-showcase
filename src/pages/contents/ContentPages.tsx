interface ContentPageProps {
  title: string;
  children?: React.ReactNode;
}

function ContentPage({ title, children }: ContentPageProps) {
  return (
    <div className="space-y-6">
      <h1 className="font-heading text-2xl font-bold tracking-tight">{title}</h1>
      {children || (
        <div className="card-clean rounded-lg border border-border bg-card p-6 text-center">
          <p className="text-muted-foreground text-sm">Content will be added here.</p>
        </div>
      )}
    </div>
  );
}

export function TitlePage() {
  return (
    <ContentPage title="Title Page">
      <div className="card-clean rounded-lg border border-border bg-card p-8 text-center space-y-4">
        <p className="text-xs uppercase tracking-wider text-muted-foreground">On-the-Job Training Portfolio</p>
        <h2 className="font-heading text-xl font-bold">Ivan Francisco Santos</h2>
        <p className="text-muted-foreground text-sm">Bachelor of Science in Information Technology</p>
        <div className="h-px bg-border w-16 mx-auto" />
        <p className="text-muted-foreground text-xs">
          OMSC, SJ Campus — Campus Director's Office<br />
          January 21, 2025 – April 06, 2025
        </p>
      </div>
    </ContentPage>
  );
}

export function Acknowledgement() {
  return (
    <ContentPage title="Acknowledgement">
      <p className="text-muted-foreground text-sm leading-relaxed">
        I would like to express my sincere gratitude to everyone who has contributed to the completion
        of this On-the-Job Training. To my OJT coordinator, for the guidance and support throughout
        the program. To the staff of OMSC SJ Campus Director's Office, for welcoming me and providing
        a conducive learning environment. And to my family and friends, for their unwavering
        encouragement and support.
      </p>
    </ContentPage>
  );
}

export function TraineePrayer() {
  return (
    <ContentPage title="Student Trainee Prayer">
      <div className="card-clean rounded-lg border border-border bg-card p-6 italic text-muted-foreground text-sm leading-relaxed text-center">
        <p>
          Dear Lord, guide me as I embark on this journey of learning and growth.
          Grant me the wisdom to absorb every lesson, the patience to overcome challenges,
          and the humility to learn from those around me. May this training mold me into
          a better professional and a better person. Amen.
        </p>
      </div>
    </ContentPage>
  );
}

export function PersonalPhilosophy() {
  return (
    <ContentPage title="Personal Philosophy">
      <p className="text-muted-foreground text-sm leading-relaxed">
        I believe that continuous learning and dedication are the foundations of success.
        Every challenge is an opportunity to grow, and every experience — whether good or bad —
        shapes us into who we are meant to become. As an aspiring IT professional, I strive
        to use technology as a tool for positive change and to always approach my work with
        integrity and passion.
      </p>
    </ContentPage>
  );
}

export function CareerPlan() {
  return (
    <ContentPage title="Career Plan">
      <div className="space-y-4">
        {[
          { period: "Short-term (1-2 years)", goal: "Complete my degree and gain additional certifications in web development and IT support. Seek entry-level positions in IT." },
          { period: "Mid-term (3-5 years)", goal: "Advance to a mid-level developer or systems administrator role. Continue professional development through workshops and training." },
          { period: "Long-term (5+ years)", goal: "Become a senior IT professional or team lead. Contribute to the community by mentoring aspiring IT professionals." },
        ].map((item) => (
          <div key={item.period} className="card-clean rounded-lg border border-border bg-card p-4">
            <h3 className="font-heading text-sm font-semibold mb-1">{item.period}</h3>
            <p className="text-muted-foreground text-xs leading-relaxed">{item.goal}</p>
          </div>
        ))}
      </div>
    </ContentPage>
  );
}
