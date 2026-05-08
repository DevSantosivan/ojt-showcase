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
      <div className="bg-background rounded-3xl p-6 md:p-10">
        {/* HEADER (same as other pages) */}
        <div className="mb-8 space-y-2">
          <p className="text-xs uppercase tracking-[0.3em] text-muted-foreground">
            Internship Portfolio
          </p>

          <h1 className="text-3xl md:text-4xl font-bold text-primary">
            Title Page
          </h1>

          <div className="w-20 h-1 rounded-full bg-primary" />
        </div>

        {/* IMAGE (LEFT ALIGNED, NOT CENTERED) */}
        <div className="flex justify-start">
          <img
            src={coverImg}
            alt="Title Page"
            className="h-[650px] object-contain bg-white rounded-2xl"
          />
        </div>
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
      <div className="bg-background rounded-3xl p-6 md:p-10">
        {/* HEADER */}
        <div className="mb-8 space-y-2">
          <p className="text-xs uppercase tracking-[0.3em] text-muted-foreground">
            Internship Portfolio
          </p>

          <h1 className="text-3xl md:text-4xl font-bold text-sky-500">
            Acknowledgement
          </h1>

          <div className="w-20 h-1 rounded-full bg-sky-500" />
        </div>

        {/* CONTENT */}
        <div className="text-[15px] md:text-base leading-9 text-justify text-muted-foreground space-y-6">
          <p>
            I would like to express my sincere gratitude to all the individuals
            and organizations who made my{" "}
            <span className="font-semibold text-sky-500">
              On-the-Job Training
            </span>{" "}
            experience meaningful and possible.
          </p>

          <p>
            First and foremost, I thank{" "}
            <span className="font-semibold text-sky-500">Almighty God</span> for
            His guidance, wisdom, and constant presence throughout this journey.
          </p>

          <p>
            I am deeply grateful to the instructors and staff of{" "}
            <span className="font-semibold text-sky-500">
              Occidental Mindoro State College
            </span>
            , especially our SIP Coordinator and Program Head,{" "}
            <span className="font-semibold text-sky-500">
              Ms. Marites D. Escultor
            </span>
            , for her continuous support, guidance, and encouragement.
          </p>

          <p>
            I also extend my appreciation to{" "}
            <span className="font-semibold text-sky-500">
              LandS Cable Television Inc.
            </span>{" "}
            for giving me the opportunity to undergo my training. My heartfelt
            thanks go to my supervisor,{" "}
            <span className="font-semibold text-sky-500">
              Sir Dan Patrick D. Sebastian
            </span>
            , and to all the staff for their mentorship, guidance, and trust
            that helped me grow in the skills I wanted to learn.
          </p>

          <p>
            Lastly, I am thankful to my{" "}
            <span className="font-semibold text-sky-500">family</span> for their
            love, encouragement, and unwavering support. They have been my
            greatest source of strength and inspiration.
          </p>

          <p className="font-medium text-foreground">
            Thank you all for being part of this meaningful journey.
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
      <div className="bg-background rounded-3xl p-6 md:p-10">
        {/* HEADER */}
        <div className="mb-8 space-y-2">
          <div className="flex items-center gap-2 text-teal-500">
            <span className="text-xl">✝</span>

            <h1 className="text-3xl md:text-4xl font-bold text-teal-500">
              Student Trainee Prayer
            </h1>
          </div>

          <p className="text-xs uppercase tracking-[0.3em] text-muted-foreground">
            Internship Portfolio
          </p>

          <div className="w-20 h-1 rounded-full bg-teal-500" />
        </div>

        {/* CONTENT */}
        <div className="text-[15px] md:text-base leading-9 text-justify text-muted-foreground italic space-y-6">
          <p>
            <span className="font-semibold text-teal-500 not-italic">
              Hallelujah, Lord God,
            </span>
          </p>

          <p>
            As I begin this training journey, I ask for Your{" "}
            <span className="font-semibold text-teal-500 not-italic">
              guidance
            </span>{" "}
            and{" "}
            <span className="font-semibold text-teal-500 not-italic">
              wisdom
            </span>
            .
          </p>

          <p>
            Help me learn well and give my best in every task. May I represent
            my school and community with pride and use this opportunity to grow
            and serve with excellence.
          </p>

          <p>
            Guide me to become a{" "}
            <span className="font-semibold text-teal-500 not-italic">
              responsible
            </span>{" "}
            and{" "}
            <span className="font-semibold text-teal-500 not-italic">
              effective professional
            </span>
            , and may all my efforts glorify You.
          </p>

          <p>Thank You, Lord, for all Your blessings.</p>

          <div className="pt-2 space-y-1">
            <p className="font-medium text-foreground not-italic">
              In Jesus’ name, I pray,
            </p>

            <p className="text-teal-500 font-bold text-lg not-italic">Amen.</p>
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
      <div className="bg-background rounded-3xl p-6 md:p-10">
        {/* HEADER */}
        <div className="mb-8 space-y-2">
          <p className="text-xs uppercase tracking-[0.3em] text-muted-foreground">
            Internship Portfolio
          </p>

          <h1 className="text-3xl md:text-4xl font-bold text-orange-500">
            Personal Philosophy
          </h1>

          <div className="w-20 h-1 rounded-full bg-orange-500" />
        </div>

        {/* QUOTE */}
        <div className="mb-10 rounded-2xl bg-orange-500/5 border border-orange-500/10 p-6 md:p-8">
          <p className="text-xl md:text-2xl leading-relaxed italic font-medium text-foreground">
            “If you have not made mistakes, it only means you have not truly
            begun to act.”
          </p>
        </div>

        {/* CONTENT */}
        <div className="text-[15px] md:text-base leading-9 text-justify text-muted-foreground space-y-6">
          <p>
            Mistakes aren’t something I should be afraid of. It is a natural
            part of{" "}
            <span className="font-semibold text-orange-500">trying</span>. If I
            never make mistakes, it probably means I’m holding myself back and
            not really taking chances.
          </p>

          <p>
            Real growth starts when I step out of my{" "}
            <span className="font-semibold text-orange-500">comfort zone</span>{" "}
            and accept that failure can happen.
          </p>

          <p>
            For me, mistakes are{" "}
            <span className="font-semibold text-orange-500">lessons</span>. They
            help me understand what I need to improve and make me stronger and
            more confident.
          </p>

          <p>
            Instead of seeing them as something negative, I try to learn from
            them and move forward.
          </p>

          <p>
            This way of thinking reminds me that I don’t have to be{" "}
            <span className="font-semibold text-orange-500">perfect</span>. What
            matters is that I keep trying, keep learning, and keep improving.
          </p>

          <p>
            In the end, my mistakes are proof that I’m growing and doing
            something to become better.
          </p>
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
      <div className="bg-background rounded-3xl p-6 md:p-10">
        {/* HEADER */}
        <div className="mb-8 space-y-2">
          <p className="text-xs uppercase tracking-[0.3em] text-muted-foreground">
            Internship Portfolio
          </p>

          <h1 className="text-3xl md:text-4xl font-bold text-violet-500">
            Career Plan
          </h1>

          <div className="w-20 h-1 rounded-full bg-violet-500" />
        </div>

        {/* INTRO */}
        <div className="text-[15px] md:text-base leading-9 text-justify text-muted-foreground space-y-6">
          <p>
            After graduation, I plan to pursue a career as a{" "}
            <span className="font-semibold text-violet-500">
              Mobile Developer
            </span>{" "}
            and{" "}
            <span className="font-semibold text-violet-500">Web Developer</span>
            . I want to create modern, responsive, and user-friendly
            applications that can help people and improve daily experiences
            through technology.
          </p>

          <p>
            I aim to secure an entry-level position where I can apply the
            knowledge and skills I gained from my studies and internship
            experience. I will continue improving my abilities in{" "}
            <span className="font-semibold text-violet-500">programming</span>,{" "}
            <span className="font-semibold text-violet-500">
              mobile application development
            </span>
            ,{" "}
            <span className="font-semibold text-violet-500">
              web development
            </span>
            , database management, and UI/UX design.
          </p>

          <p>
            I also plan to build more projects and strengthen my portfolio to
            showcase my creativity, technical skills, and problem-solving
            abilities. Learning new frameworks, tools, and technologies will
            help me become more competitive and prepared for real-world
            development environments.
          </p>
        </div>

        {/* GOALS */}
        <div className="mt-12 grid gap-6">
          {/* SHORT TERM */}
          <div className="rounded-2xl border bg-violet-500/5 p-6 space-y-3">
            <div className="flex items-center gap-2">
              <div className="w-3 h-3 rounded-full bg-violet-500" />
              <h3 className="text-violet-500 font-semibold text-lg">
                Short-Term Goal
              </h3>
            </div>

            <p className="text-muted-foreground leading-8 text-justify">
              My short-term goal is to complete my degree and gain experience as
              a junior mobile and web developer. I want to improve my coding
              skills using technologies such as{" "}
              <span className="font-semibold text-violet-500">Flutter</span>,{" "}
              <span className="font-semibold text-violet-500">Angular</span>,
              Firebase, and modern web technologies. I also plan to earn
              certifications and participate in projects that will enhance my
              technical and professional growth.
            </p>
          </div>

          {/* MID TERM */}
          <div className="rounded-2xl border bg-violet-500/5 p-6 space-y-3">
            <div className="flex items-center gap-2">
              <div className="w-3 h-3 rounded-full bg-violet-500" />
              <h3 className="text-violet-500 font-semibold text-lg">
                Mid-Term Goal
              </h3>
            </div>

            <p className="text-muted-foreground leading-8 text-justify">
              Within the next few years, I aim to become a skilled and reliable
              developer capable of handling larger projects and
              responsibilities. I want to gain hands-on experience in building
              scalable mobile and web applications while continuously learning
              advanced development practices.
            </p>
          </div>

          {/* LONG TERM */}
          <div className="rounded-2xl border bg-violet-500/5 p-6 space-y-3">
            <div className="flex items-center gap-2">
              <div className="w-3 h-3 rounded-full bg-violet-500" />
              <h3 className="text-violet-500 font-semibold text-lg">
                Long-Term Goal
              </h3>
            </div>

            <p className="text-muted-foreground leading-8 text-justify">
              In the long run, I aspire to become an expert mobile and web
              developer and potentially take leadership roles in the IT
              industry. I also dream of creating my own software solutions or
              technology company that can contribute positively to society.
            </p>
          </div>
        </div>
      </div>
    </ContentPage>
  );
}
