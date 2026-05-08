import {
  MapPin,
  Clock,
  Calendar,
  Building2,
  Timer,
  Target,
  Briefcase,
} from "lucide-react";
import {
  FadeInSection,
  StaggerContainer,
  StaggerItem,
} from "@/components/Animations";

export default function Chapter1() {
  return (
    <div className="space-y-10">
      {/* HEADER */}
      <FadeInSection>
        <div className="space-y-2">
          <p className="text-xs uppercase tracking-[0.3em] text-muted-foreground">
            Chapter 1
          </p>

          <h1 className="text-3xl md:text-4xl font-bold text-cyan-500">
            Introduction
          </h1>

          <div className="w-20 h-1 rounded-full bg-cyan-500" />
        </div>
      </FadeInSection>

      {/* IMPORTANCE */}
      <FadeInSection delay={0.1}>
        <section className="bg-background rounded-3xl p-6 md:p-10 space-y-6">
          <div className="flex items-center gap-2">
            <Briefcase className="w-5 h-5 text-cyan-500" />

            <h2 className="text-2xl font-bold text-cyan-500">
              A. Importance of Internship
            </h2>
          </div>

          <div className="text-[15px] md:text-base leading-9 text-justify text-muted-foreground space-y-6">
            <p>
              <span className="font-semibold text-cyan-500">
                On-the-Job Training
              </span>{" "}
              is an essential part of many fields and a required component of
              college curricula, especially for graduating fourth-year students
              as they prepare for their future careers.
            </p>

            <p>
              It provides hands-on or online experience where trainees can apply
              what they have learned in school to real tasks and projects.
              Through this, students develop practical skills, gain valuable
              industry knowledge, and grow professionally, helping them become
              better prepared for the workplace.
            </p>

            <p>
              Internship programs also help students build{" "}
              <span className="font-semibold text-cyan-500">confidence</span>,
              improve communication skills, and understand professional work
              ethics and responsibilities in a real working environment.
            </p>
          </div>
        </section>
      </FadeInSection>

      {/* OBJECTIVES */}
      <FadeInSection delay={0.15}>
        <section className="bg-background rounded-3xl p-6 md:p-10 space-y-8">
          <div className="flex items-center gap-2">
            <Target className="w-5 h-5 text-teal-500" />

            <h2 className="text-2xl font-bold text-teal-500">
              B. Objectives of Internship
            </h2>
          </div>

          <div className="grid gap-4">
            {[
              "Develop practical skills in a real-world setting by applying knowledge and comprehension gained from academic education.",
              "Create and maintain professional connections with industry professionals, mentors, and fellow interns for future career growth.",
              "Acquire and embrace professional attitudes, work ethics, and behaviors necessary for workplace success.",
              "Improve interpersonal and technical abilities in teamwork, problem-solving, office productivity, and time management.",
            ].map((item, index) => (
              <div
                key={index}
                className="rounded-2xl border bg-teal-500/5 p-5 flex gap-4"
              >
                <div className="w-8 h-8 rounded-full bg-teal-500 text-white flex items-center justify-center text-sm font-bold shrink-0">
                  {String.fromCharCode(97 + index)}
                </div>

                <p className="text-[15px] md:text-base leading-8 text-muted-foreground text-justify">
                  {item}
                </p>
              </div>
            ))}
          </div>
        </section>
      </FadeInSection>

      {/* TIME & PLACE */}
      <FadeInSection delay={0.2}>
        <section className="bg-background rounded-3xl p-6 md:p-10 space-y-8">
          <div className="flex items-center gap-2">
            <MapPin className="w-5 h-5 text-orange-500" />

            <h2 className="text-2xl font-bold text-orange-500">
              C. Time and Place of Internship
            </h2>
          </div>

          {/* MAP */}
          <div className="rounded-2xl overflow-hidden border">
            <iframe
              src="https://www.google.com/maps/embed?pb=!3m2!1sen!2sph!4v1776112644636!5m2!1sen!2sph!6m8!1m7!1sG7SwIHKi02Ln0iJm1Z_HLA!2m2!1d12.34925592847829!2d121.0706911972708!3f288.4641406572949!4f-10.160971052619175!5f0.7820865974627469"
              width="600"
              height="450"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              className="w-full"
            ></iframe>
          </div>

          {/* INFO CARDS */}
          <StaggerContainer className="grid gap-4 sm:grid-cols-2">
            {[
              {
                icon: Building2,
                label: "Agency",
                value: "LandS Cable Television Incorporated",
              },
              {
                icon: MapPin,
                label: "Address",
                value:
                  "L&S Marketing, Rajah Soliman St, San Jose, Occidental Mindoro",
              },
              {
                icon: Clock,
                label: "Office Hours",
                value: "8:00 AM – 5:00 PM",
              },
              {
                icon: Timer,
                label: "Duration",
                value: "486 Hours",
              },
              {
                icon: Calendar,
                label: "Date Started",
                value: "February 2, 2026",
              },
              {
                icon: Calendar,
                label: "Date Ended",
                value: "April 30, 2026",
              },
            ].map(({ icon: Icon, label, value }) => (
              <StaggerItem key={label}>
                <div className="rounded-2xl border bg-orange-500/5 p-5 flex items-start gap-4 hover:shadow-md transition">
                  <div className="w-10 h-10 rounded-xl bg-orange-500/10 flex items-center justify-center shrink-0">
                    <Icon className="h-5 w-5 text-orange-500" />
                  </div>

                  <div>
                    <p className="text-sm text-muted-foreground">{label}</p>

                    <p className="text-[15px] md:text-base font-medium mt-1 leading-7">
                      {value}
                    </p>
                  </div>
                </div>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </section>
      </FadeInSection>
    </div>
  );
}
