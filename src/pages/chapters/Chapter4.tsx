import { CheckCircle, GraduationCap } from "lucide-react";
import { FadeInSection } from "@/components/Animations";

import img1 from "@/assets/OJT1.jpg";
import img2 from "@/assets/OJT2.jpg";
import img3 from "@/assets/OJT3.jpg";
import img4 from "@/assets/OJT4.jpg";

export function Chapter4() {
  const images = [img1, img2, img3, img4];

  return (
    <div className="space-y-10">
      {/* HEADER */}
      <FadeInSection>
        <div>
          <p className="text-xs uppercase text-muted-foreground">Chapter 4</p>
          <h1 className="text-2xl font-bold">
            Assessment of the Practicum Program
          </h1>
        </div>
      </FadeInSection>

      {/* TOP SECTION TITLE */}
      <FadeInSection delay={0.1}>
        <div className="flex items-center gap-2 text-primary font-semibold text-lg">
          <CheckCircle className="w-5 h-5" />
          A. Student Internship Evaluation Form
        </div>
      </FadeInSection>

      {/* MAIN CARD */}
      <FadeInSection delay={0.15}>
        <div className="bg-background border rounded-2xl shadow-sm p-8 space-y-8 transition-colors">
          {/* HEADER INSIDE CARD */}
          <div className="text-center space-y-2">
            <h2 className="text-xl font-bold uppercase text-primary">
              Student Internship Performance Evaluation
            </h2>

            <p className="text-sm text-muted-foreground">
              L&S × Occidental Mindoro State College
            </p>
          </div>

          {/* INFO GRID */}
          <div className="grid md:grid-cols-2 gap-6 text-sm">
            <div className="p-3 rounded-lg border bg-card">
              <p className="text-muted-foreground">Student Name:</p>
              <p className="font-medium">Ivan F. Santos</p>
            </div>

            <div className="p-3 rounded-lg border bg-card">
              <p className="text-muted-foreground">Student ID:</p>
              <p className="font-medium">MA-21-IT-01185</p>
            </div>

            <div className="p-3 rounded-lg border bg-card">
              <p className="text-muted-foreground">Program/Course:</p>
              <p className="font-medium">BS Information Technology</p>
            </div>

            <div className="p-3 rounded-lg border bg-card">
              <p className="text-muted-foreground">Academic Year:</p>
              <p className="font-medium">2026-2026</p>
            </div>

            <div className="p-3 rounded-lg border bg-card">
              <p className="text-muted-foreground">Internship Start Date:</p>
              <p className="font-medium">January 20, 2026</p>
            </div>

            <div className="p-3 rounded-lg border bg-card">
              <p className="text-muted-foreground">Internship End Date:</p>
              <p className="font-medium">April 25, 2026</p>
            </div>

            <div className="p-3 rounded-lg border bg-card">
              <p className="text-muted-foreground">Company:</p>
              <p className="font-medium">L&S</p>
            </div>

            <div className="p-3 rounded-lg border bg-card">
              <p className="text-muted-foreground">Department:</p>
              <p className="font-medium">Project Management Office</p>
            </div>

            <div className="p-3 rounded-lg border bg-card">
              <p className="text-muted-foreground">Supervisor:</p>
              <p className="font-medium">General Manager (Sir Dan Patric)</p>
            </div>

            <div className="p-3 rounded-lg border bg-card">
              <p className="text-muted-foreground">Position:</p>
              <p className="font-medium">Office and Field Line Man</p>
            </div>
          </div>
        </div>
      </FadeInSection>

      {/* PERFORMANCE EVALUATION TEXT */}
      <FadeInSection delay={0.2}>
        <div className="space-y-2">
          <h3 className="text-lg font-semibold border-l-4 border-primary pl-3">
            Performance Evaluation
          </h3>
          <p className="text-sm text-muted-foreground">
            Official evaluation documentation from L&S and Occidental Mindoro
            State College.
          </p>
        </div>
      </FadeInSection>

      {/* IMAGE CARDS (LARGER HEIGHT + TITLE) */}
      <FadeInSection delay={0.25}>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {images.map((img, index) => {
            const titles = [
              "OJT Documentation 1",
              "OJT Documentation 2",
              "OJT Documentation 3",
              "OJT Documentation 4",
            ];

            return (
              <div
                key={index}
                className="border rounded-2xl overflow-hidden shadow-sm bg-white hover:shadow-md transition"
              >
                {/* TITLE */}
                <div className="p-3 border-b bg-card">
                  <p className="text-sm font-semibold text-primary">
                    {titles[index]}
                  </p>
                </div>

                {/* IMAGE (LARGER HEIGHT) */}
                <img
                  src={img}
                  className="h-[380px] w-full object-cover"
                  alt={`evaluation-${index}`}
                />
              </div>
            );
          })}
        </div>
      </FadeInSection>

      {/* PERFORMANCE EVALUATION SUMMARY */}
      <FadeInSection delay={0.3}>
        <div className="bg-background border rounded-2xl shadow-sm p-8 space-y-6 transition-colors">
          <div className="flex items-center gap-2 text-primary font-semibold text-lg">
            <GraduationCap className="w-5 h-5" />
            Performance Evaluation Summary
          </div>

          <div className="grid md:grid-cols-2 gap-4 text-sm">
            <div className="p-4 rounded-lg border bg-card">
              <p className="text-muted-foreground">SR — Student Self-Rating</p>
              <p className="text-xl font-bold">285</p>
            </div>

            <div className="p-4 rounded-lg border bg-card">
              <p className="text-muted-foreground">PR — Peer Rating</p>
              <p className="text-xl font-bold">285</p>
            </div>

            <div className="p-4 rounded-lg border bg-card">
              <p className="text-muted-foreground">
                SICR — Student Internship Coordinator Rating
              </p>
              <p className="text-xl font-bold">277</p>
            </div>

            <div className="p-4 rounded-lg border bg-card">
              <p className="text-muted-foreground">
                ASR — Agency Supervisor Rating
              </p>
              <p className="text-xl font-bold">274</p>
            </div>
          </div>

          <div className="text-center p-6 rounded-xl border bg-card space-y-2">
            <p className="text-muted-foreground text-sm">Overall Rating</p>
            <p className="text-3xl font-bold text-primary">4.86</p>
          </div>

          <div className="space-y-2">
            <h4 className="font-semibold text-primary">
              General Comments on Student's Overall Performance
            </h4>
            <p className="text-sm text-muted-foreground leading-relaxed">
              Ivan demonstrates strong resourcefulness and a collaborative
              spirit. He proactively shares his knowledge with peers and
              consistently offers support without hesitation. He approaches
              assigned tasks with a positive attitude and completes them with
              accuracy and responsibility.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-4 text-sm">
            <div className="p-4 rounded-lg border bg-card">
              <p className="text-muted-foreground">Student Intern</p>
              <p className="font-medium">Ivan F. Santos</p>
              <p className="text-xs text-muted-foreground">May 5, 2026</p>
            </div>

            <div className="p-4 rounded-lg border bg-card">
              <p className="text-muted-foreground">Peer</p>
              <p className="font-medium">Mary Felle Malayas</p>
              <p className="text-xs text-muted-foreground">May 5, 2026</p>
            </div>

            <div className="p-4 rounded-lg border bg-card">
              <p className="text-muted-foreground">
                Student Internship Coordinator
              </p>
              <p className="font-medium">Marites D. Escultor</p>
              <p className="text-xs text-muted-foreground">May 5, 2026</p>
            </div>

            <div className="p-4 rounded-lg border bg-card">
              <p className="text-muted-foreground">Agency Supervisor</p>
              <p className="font-medium"> General Manager (Sir Dan Patric)</p>
              <p className="text-xs text-muted-foreground">May 5, 2026</p>
            </div>
          </div>
        </div>
      </FadeInSection>
    </div>
  );
}
