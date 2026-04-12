import { useState } from "react";
import { useNavigate } from "react-router-dom";
import {
  Mail,
  FileDown,
  BookOpen,
  Paperclip,
  Github,
  File,
  FileText,
  GraduationCap,
  Heart,
  Target,
} from "lucide-react";

import { Button } from "@/components/ui/button";
import {
  FadeInSection,
  StaggerContainer,
  StaggerItem,
  ScaleIn,
} from "@/components/Animations";

import profileImg from "@/assets/profile-placeholder.jpg";

/* OJT IMAGES */
import ojt1 from "@/assets/OJT1.jpg";
import ojt2 from "@/assets/OJT2.jpg";
import ojt3 from "@/assets/OJT3.jpg";
import ojt4 from "@/assets/OJT4.jpg";

/* CHAPTERS */
const chapters = [
  { title: "Chapter 1 — Introduction", url: "/chapters/1" },
  { title: "Chapter 2 — Practicum Experience", url: "/chapters/2" },
  { title: "Chapter 3 — Assessment", url: "/chapters/3" },
  { title: "Chapter 4 — Summary & Recommendations", url: "/chapters/4" },
];

/* APPENDICES */
const appendices = [
  { title: "Appendix A", url: "/appendices/a" },
  { title: "Appendix B", url: "/appendices/b" },
  { title: "Appendix C", url: "/appendices/c" },
  { title: "Appendix D", url: "/appendices/d" },
];

/* CONTENTS */
const contents = [
  { title: "Title Page", url: "/contents/title-page", icon: FileText },
  { title: "Acknowledgement", url: "/contents/acknowledgement", icon: Heart },
  {
    title: "Student Trainee Prayer",
    url: "/contents/trainee-prayer",
    icon: BookOpen,
  },
  {
    title: "Personal Philosophy",
    url: "/contents/personal-philosophy",
    icon: GraduationCap,
  },
  { title: "Career Plan", url: "/contents/career-plan", icon: Target },
];

/* OJT EXPERIENCE */
const ojtExperience = [
  {
    title: "Office Documentation Work",
    image: ojt1,
  },
  {
    title: "System Development Tasks",
    image: ojt2,
  },
  {
    title: "Team Collaboration & Meetings",
    image: ojt3,
  },
  {
    title: "Hands-on Technical Training",
    image: ojt4,
  },
];

export default function QuickOverview() {
  const navigate = useNavigate();
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  return (
    <div className="space-y-8">
      {/* PROFILE */}
      <ScaleIn>
        <div className="rounded-lg border border-border bg-card p-6 sm:p-8">
          <div className="flex flex-col sm:flex-row items-center sm:items-start gap-6">
            <img
              src={profileImg}
              alt="Ivan Francisco Santos"
              className="w-28 h-28 sm:w-32 sm:h-32 rounded-full object-cover border-2 border-border"
            />

            <div className="text-center sm:text-left flex-1">
              <h1 className="text-2xl sm:text-3xl font-bold">
                Ivan Francisco Santos
              </h1>

              <p className="text-muted-foreground mt-1">
                Bachelor of Science in Information Technology
              </p>

              <div className="flex flex-wrap gap-3 mt-4 justify-center sm:justify-start">
                <Button className="gap-2" onClick={() => navigate("/resume")}>
                  <FileDown className="h-4 w-4" />
                  View Resume
                </Button>

                <Button
                  variant="outline"
                  className="gap-2"
                  onClick={() =>
                    (window.location.href = "mailto:ivan.santos@email.com")
                  }
                >
                  <Mail className="h-4 w-4" />
                  Email Me
                </Button>

                <Button
                  variant="outline"
                  className="gap-2"
                  onClick={() =>
                    window.open("https://github.com/DevSantosivan", "_blank")
                  }
                >
                  <Github className="h-4 w-4" />
                  GitHub
                </Button>
              </div>
            </div>
          </div>
        </div>
      </ScaleIn>

      {/* INTRODUCTION */}
      <FadeInSection delay={0.1}>
        <section>
          <h2 className="text-lg font-semibold mb-3">Introduction</h2>

          <p className="text-muted-foreground leading-relaxed">
            This portfolio showcases my OJT experience, skills, and projects. It
            highlights my growth as an Information Technology student during my
            internship journey.
          </p>
        </section>
      </FadeInSection>

      {/* CONTENTS */}
      <FadeInSection delay={0.12}>
        <section>
          <h2 className="text-lg font-semibold mb-3 flex items-center gap-2">
            <File className="h-5 w-5 text-primary" />
            Contents
          </h2>

          <StaggerContainer className="grid gap-2">
            {contents.map((item) => (
              <StaggerItem key={item.url}>
                <button
                  onClick={() => navigate(item.url)}
                  className="flex items-center justify-between p-3 rounded-lg border border-border bg-card hover:bg-accent/50 transition w-full"
                >
                  <span className="flex items-center gap-2 text-sm">
                    <item.icon className="h-4 w-4 text-primary" />
                    {item.title}
                  </span>
                  <span className="text-xs text-muted-foreground">→</span>
                </button>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </section>
      </FadeInSection>

      {/* CHAPTERS */}
      <FadeInSection delay={0.15}>
        <section>
          <h2 className="text-lg font-semibold mb-3 flex items-center gap-2">
            <BookOpen className="h-5 w-5 text-primary" />
            Chapters
          </h2>

          <StaggerContainer className="grid gap-2">
            {chapters.map((ch) => (
              <StaggerItem key={ch.url}>
                <button
                  onClick={() => navigate(ch.url)}
                  className="p-3 text-left rounded-lg border border-border bg-card hover:bg-accent/50 w-full transition"
                >
                  {ch.title}
                </button>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </section>
      </FadeInSection>

      {/* APPENDICES */}
      <FadeInSection delay={0.2}>
        <section>
          <h2 className="text-lg font-semibold mb-3 flex items-center gap-2">
            <Paperclip className="h-5 w-5 text-primary" />
            Appendices
          </h2>

          <StaggerContainer className="grid grid-cols-2 sm:grid-cols-4 gap-2">
            {appendices.map((a) => (
              <StaggerItem key={a.url}>
                <button
                  onClick={() => navigate(a.url)}
                  className="p-3 text-center rounded-lg border border-border bg-card hover:bg-accent/50 w-full transition"
                >
                  {a.title}
                </button>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </section>
      </FadeInSection>

      {/* OJT EXPERIENCE GALLERY */}
      <FadeInSection delay={0.25}>
        <section>
          <h2 className="text-lg font-semibold mb-3">
            On-the-Job Training Experience
          </h2>

          <p className="text-muted-foreground mb-4 text-sm">
            A glimpse of my tasks, learnings, and real-world experience during
            my internship journey.
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {ojtExperience.map((item, index) => (
              <div
                key={index}
                onClick={() => setSelectedImage(item.image)}
                className="rounded-lg border border-border bg-card overflow-hidden cursor-pointer hover:shadow-md transition"
              >
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-48 object-cover hover:scale-105 transition-transform duration-300"
                />
                <div className="p-3">
                  <h3 className="text-sm font-medium">{item.title}</h3>
                </div>
              </div>
            ))}
          </div>
        </section>
      </FadeInSection>

      {/* LIGHTBOX */}
      {selectedImage && (
        <div
          className="fixed inset-0 z-50 bg-black/80 flex items-center justify-center p-4"
          onClick={() => setSelectedImage(null)}
        >
          <img
            src={selectedImage}
            alt="Preview"
            className="max-w-4xl max-h-[90vh] rounded-lg shadow-lg"
          />
        </div>
      )}
    </div>
  );
}
