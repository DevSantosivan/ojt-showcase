import React from "react";
import {
  FadeInSection,
  StaggerContainer,
  StaggerItem,
} from "@/components/Animations";
import coverImg from "@/assets/tittle.jfif";

/* =========================
   CONTENT PAGE (UPDATED)
========================= */
interface ContentPageProps {
  title: string;
  children?: React.ReactNode;
}

function ContentPage({ title, children }: ContentPageProps) {
  return (
    <div className="space-y-8">
      <FadeInSection>
        <h1 className="font-heading text-3xl font-bold tracking-tight">
          {title}
        </h1>
      </FadeInSection>

      <FadeInSection delay={0.1}>
        {children || (
          <div className="bg-background border rounded-2xl shadow-sm p-10 md:p-12 text-center">
            <p className="text-muted-foreground text-base">
              Content will be added here.
            </p>
          </div>
        )}
      </FadeInSection>
    </div>
  );
}

/* =========================
   TITLE PAGE
========================= */
export function TitlePage() {
  return (
    <ContentPage title="Title Page">
      <div className="rounded-lg border border-border overflow-hidden">
        <img src={coverImg} alt="Title Page" className="w-full h-auto block" />
      </div>
    </ContentPage>
  );
}

/* =========================
   ACKNOWLEDGEMENT
========================= */
export function Acknowledgement() {
  return (
    <ContentPage title="Acknowledgement">
      <div className="bg-background border rounded-2xl shadow-sm p-10 md:p-12">
        <div className="text-muted-foreground text-base leading-8 space-y-6 text-justify">
          <p>
            I would like to express my sincere gratitude to everyone who made my
            on-the-job training experience meaningful and impactful.
          </p>

          <p>
            First, I thank God for granting me wisdom, knowledge, and strength
            each day, for all the graces and blessings, and for the continuous
            guidance and good health that enabled me to perform my tasks and
            successfully complete my On-the-Job Training.
          </p>

          <p>
            I am profoundly grateful to{" "}
            <span className="text-primary font-semibold">
              Occidental Mindoro State College
            </span>{" "}
            for their continued support.
          </p>

          <p>
            To{" "}
            <span className="text-primary font-semibold">
              Ms. Marites D. Escultor
            </span>
            , my OJT instructor, for guidance and support.
          </p>

          <p>
            To{" "}
            <span className="text-primary font-semibold">
              Mr. Dan Patrick Sebastian
            </span>
            , Manager General of{" "}
            <span className="text-primary font-semibold">L&S</span>, and staff,
            thank you for mentorship and knowledge sharing.
          </p>

          <p>
            To my family, friends, and classmates, thank you for your support
            and encouragement.
          </p>

          <p>
            To all who contributed to this journey, your support is deeply
            appreciated.
          </p>
        </div>
      </div>
    </ContentPage>
  );
}

/* =========================
   TRAINEE PRAYER
========================= */
export function TraineePrayer() {
  return (
    <ContentPage title="Student Trainee Prayer">
      <div className="flex justify-center">
        <div className="w-full max-w-4xl bg-background border rounded-2xl shadow-md p-12 md:p-16">
          <div className="text-muted-foreground text-base leading-9 italic text-center space-y-6">
            <div className="space-y-2">
              <div className="flex items-center justify-center gap-2 text-primary">
                <span className="text-xl">✝</span>
                <h2 className="font-semibold not-italic text-lg">
                  Student Trainee Prayer
                </h2>
              </div>
              <div className="h-px w-20 bg-primary/40 mx-auto" />
            </div>

            <p>
              Dear Lord, I come before You with a grateful heart as I begin and
              continue this journey of learning and growth through my On-the-Job
              Training.
            </p>

            <p>
              Guide me with Your wisdom so that I may understand every lesson
              given to me.
            </p>

            <p>
              Help me remain humble, disciplined, and dedicated in all tasks.
            </p>

            <p>
              May I always act with integrity and give my best in everything I
              do.
            </p>

            <p className="text-primary font-semibold not-italic">Amen.</p>
          </div>
        </div>
      </div>
    </ContentPage>
  );
}

/* =========================
   PERSONAL PHILOSOPHY
========================= */
export function PersonalPhilosophy() {
  return (
    <ContentPage title="Personal Philosophy">
      <div className="bg-background border rounded-2xl shadow-sm p-10 md:p-12">
        <div className="text-muted-foreground text-base leading-8 space-y-6 text-justify">
          <p>
            I believe that continuous learning and dedication are the
            foundations of success.
          </p>

          <p>
            As an IT student, I commit myself to lifelong learning and
            improvement.
          </p>

          <p>
            Success is built through discipline, patience, and perseverance.
          </p>

          <p>I aim to use technology for innovation and positive change.</p>

          <p>Integrity and passion guide me in everything I do.</p>
        </div>
      </div>
    </ContentPage>
  );
}

/* =========================
   CAREER PLAN
========================= */
export function CareerPlan() {
  return (
    <ContentPage title="Career Plan">
      <div className="bg-background border rounded-2xl shadow-sm p-10 md:p-12">
        <div className="text-muted-foreground text-base leading-8 space-y-10 text-justify">
          <p>My career goal is to become a Mobile and Web Developer.</p>

          <div className="space-y-2">
            <h3 className="text-primary font-semibold text-lg">
              Short-Term Goal
            </h3>
            <p>Complete my degree and improve my development skills.</p>
          </div>

          <div className="space-y-2">
            <h3 className="text-primary font-semibold text-lg">
              Mid-Term Goal
            </h3>
            <p>Work as a professional developer in real projects.</p>
          </div>

          <div className="space-y-2">
            <h3 className="text-primary font-semibold text-lg">
              Long-Term Goal
            </h3>
            <p>Become a senior developer and mentor others in the field.</p>
          </div>
        </div>
      </div>
    </ContentPage>
  );
}
