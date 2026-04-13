import {
  FadeInSection,
  StaggerContainer,
  StaggerItem,
} from "@/components/Animations";

interface ContentPageProps {
  title: string;
  children?: React.ReactNode;
}

function ContentPage({ title, children }: ContentPageProps) {
  return (
    <div className="space-y-6">
      <FadeInSection>
        <h1 className="font-heading text-2xl font-bold tracking-tight">
          {title}
        </h1>
      </FadeInSection>
      <FadeInSection delay={0.1}>
        {children || (
          <div className="card-clean rounded-lg border border-border bg-card p-6 text-center">
            <p className="text-muted-foreground text-sm">
              Content will be added here.
            </p>
          </div>
        )}
      </FadeInSection>
    </div>
  );
}

export function TitlePage() {
  return (
    <ContentPage title="Title Page">
      <div className="card-clean rounded-lg border border-border bg-card p-8 text-center space-y-4">
        <p className="text-xs uppercase tracking-wider text-muted-foreground">
          On-the-Job Training Portfolio
        </p>
        <h2 className="font-heading text-xl font-bold">
          Ivan Francisco Santos
        </h2>
        <p className="text-muted-foreground text-sm">
          Bachelor of Science in Information Technology
        </p>
        <div className="h-px bg-border w-16 mx-auto" />
        <p className="text-muted-foreground text-xs">
          OMSC, SJ Campus — Campus Director's Office
          <br />
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
        I would like to express my sincere gratitude to everyone who has
        contributed to the completion of this On-the-Job Training. To my OJT
        coordinator, for the guidance and support throughout the program. To the
        staff of OMSC SJ Campus Director's Office, for welcoming me and
        providing a conducive learning environment. And to my family and
        friends, for their unwavering encouragement and support.
      </p>
    </ContentPage>
  );
}

export function TraineePrayer() {
  return (
    <ContentPage title="Student Trainee Prayer">
      <div className="card-clean rounded-lg border border-border bg-card p-6 italic text-muted-foreground text-sm leading-relaxed text-center">
        <p>
          Dear Lord, guide me as I embark on this journey of learning and
          growth. Grant me the wisdom to absorb every lesson, the patience to
          overcome challenges, and the humility to learn from those around me.
          May this training mold me into a better professional and a better
          person. Amen.
        </p>
      </div>
    </ContentPage>
  );
}

export function PersonalPhilosophy() {
  return (
    <ContentPage title="Personal Philosophy">
      <p className="text-muted-foreground text-sm leading-relaxed">
        I believe that continuous learning and dedication are the foundations of
        success. Every challenge is an opportunity to grow, and every experience
        — whether good or bad — shapes us into who we are meant to become. As an
        aspiring IT professional, I strive to use technology as a tool for
        positive change and to always approach my work with integrity and
        passion.
      </p>
    </ContentPage>
  );
}

export function CareerPlan() {
  return (
    <ContentPage title="Career Plan">
      <div className="card-clean rounded-lg border border-border bg-card p-6">
        <p className="text-muted-foreground text-sm leading-relaxed">
          My career goal as a BSIT graduate is to become a Mobile and Web
          Developer who builds modern, responsive, and user-friendly
          applications. In the short term, I aim to complete my degree and
          further strengthen my skills in both mobile and web development
          through hands-on projects and continuous learning of modern frameworks
          and tools.
          <br />
          <br />
          In the mid-term, I plan to work in a professional environment as a
          developer, where I can contribute to real-world projects, improve my
          technical expertise, and enhance my skills in building efficient and
          scalable applications.
          <br />
          <br />
          In the long term, I aspire to become a senior Mobile and Web Developer
          or Full-Stack Developer, where I can lead projects, mentor aspiring
          developers, and contribute to creating innovative digital solutions
          that provide value to users and organizations.
        </p>
      </div>
    </ContentPage>
  );
}
