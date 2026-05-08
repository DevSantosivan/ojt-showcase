import { useState } from "react";
import { useNavigate } from "react-router-dom";
import {
  Mail,
  FileDown,
  BookOpen,
  Paperclip,
  Github,
  File,
  ArrowRight,
  Building2,
} from "lucide-react";

import { Button } from "@/components/ui/button";
import {
  FadeInSection,
  StaggerContainer,
  StaggerItem,
  ScaleIn,
} from "@/components/Animations";

import resumeImg from "@/assets/resume.png";

import profileImg from "@/assets/profile-placeholder.jpg";
import logo from "@/assets/LS-Logo.png";

/* OJT IMAGES */
import ojt1 from "@/assets/OJT1.jpg";
import ojt2 from "@/assets/OJT2.jpg";
import ojt3 from "@/assets/OJT3.jpg";
import ojt4 from "@/assets/OJT4.jpg";

/* CHAPTERS */
const chapters = [
  { title: "Chapter 1 — Introduction", url: "/chapters/1" },
  { title: "Chapter 2 — Company Profile", url: "/chapters/2" },
  { title: "Chapter 3 — Work Experience", url: "/chapters/3" },
  {
    title: "Chapter 4 — Assessment of the Practicum Program",
    url: "/chapters/4",
  },
];

/* APPENDICES */
const appendices = [
  { title: "Appendix A", url: "/appendices/a" },
  { title: "Appendix B", url: "/appendices/b" },
  { title: "Appendix C", url: "/appendices/c" },
  { title: "Appendix D", url: "/appendices/d" },
  { title: "Appendix E", url: "/appendices/e" },
  { title: "Appendix F", url: "/appendices/f" },
  { title: "Appendix G", url: "/appendices/g" },
  { title: "Appendix H", url: "/appendices/h" },
  { title: "Appendix I", url: "/appendices/i" },
  { title: "Appendix J", url: "/appendices/j" },
  { title: "Appendix K", url: "/appendices/k" },
  { title: "Appendix L", url: "/appendices/l" },
  { title: "Appendix M", url: "/appendices/m" },
  { title: "Appendix N", url: "/appendices/n" },
  { title: "Appendix O", url: "/appendices/o" },
  { title: "Appendix P", url: "/appendices/p" },
  { title: "Appendix Q", url: "/appendices/q" },
];

/* CONTENTS */
const contents = [
  { title: "Title Page", url: "/contents/title-page" },
  { title: "Acknowledgement", url: "/contents/acknowledgement" },
  { title: "Student Trainee Prayer", url: "/contents/trainee-prayer" },
  { title: "Personal Philosophy", url: "/contents/personal-philosophy" },
  { title: "Career Plan", url: "/contents/career-plan" },
];

/* OJT EXPERIENCE */
const ojtExperience = [
  { title: "Office Documentation Work", image: ojt1 },
  { title: "System Development Tasks", image: ojt2 },
  { title: "Team Collaboration & Meetings", image: ojt3 },
  { title: "Hands-on Technical Training", image: ojt4 },
];

export default function QuickOverview() {
  const handleResumeDownload = () => {
    const link = document.createElement("a");
    link.href = resumeImg;
    link.download = "Ivan-Santos-Resume.png";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };
  const navigate = useNavigate();
  const [selectedImage, setSelectedImage] = useState<string | null>(null);
  console.log("GIT REAL TEST 123");
  return (
    <div className="space-y-8">
      {/* PROFILE */}
      <ScaleIn>
        <div className="rounded-lg   p-1 sm:p-2">
          <div className="flex flex-col sm:flex-row items-center sm:items-start gap-6">
            <img
              src={profileImg}
              alt="Ivan Francisco Santos"
              className="w-42 h-42 sm:w-40 sm:h-50 rounded-full object-cover border-2 border-border"
            />

            <div className="text-center sm:text-left flex-1">
              <p className="text-xs font-medium bg-gradient-to-r from-sky-500 to-violet-500 text-transparent bg-clip-text">
                On-the-Job Training (OJT) Student Trainee
              </p>

              <h1 className="text-2xl sm:text-3xl font-bold">
                Ivan Francisco Santos
              </h1>

              <p className="text-muted-foreground mt-1 text-sm">
                Bachelor of Science in Information Technology
              </p>

              <div className="flex flex-wrap gap-3 mt-4 justify-center sm:justify-start">
                <Button onClick={handleResumeDownload}>
                  <FileDown className="h-4 w-4 mr-2" />
                  Resume
                </Button>

                <Button
                  variant="outline"
                  onClick={() =>
                    (window.location.href = "mailto:ivansantos.bsit@gmail.com")
                  }
                >
                  <Mail className="h-4 w-4 mr-2" />
                  Email
                </Button>

                <Button
                  variant="outline"
                  onClick={() =>
                    window.open("https://github.com/DevSantosivan", "_blank")
                  }
                >
                  <Github className="h-4 w-4 mr-2" />
                  GitHub
                </Button>
              </div>
            </div>
          </div>
        </div>
      </ScaleIn>

      {/* COMPANY */}
      <FadeInSection delay={0.12}>
        <section>
          <h2 className="text-lg font-semibold mb-3 flex items-center gap-2">
            <Building2 className="h-5 w-5 text-primary" />
            Company
          </h2>

          {/* COMPANY CARD */}
          <div className="  p-5 rounded-lg space-y-4">
            {/* LOGO + NAME */}
            <div className="flex items-center gap-4">
              <img
                src={logo}
                alt="LS Cable TV Logo"
                className="h-14 w-14 object-contain rounded-xl border bg-white p-2"
              />

              <div>
                <p className="text-xs text-muted-foreground">
                  Internship Company
                </p>
                <p className="text-sm font-semibold">L&S Cable TV, Inc.</p>
              </div>
            </div>

            {/* MAP */}
            <div className="rounded-lg overflow-hidden border">
              <iframe
                src="https://www.google.com/maps/embed?pb=!3m2!1sen!2sph!4v1776112644636!5m2!1sen!2sph!6m8!1m7!1sG7SwIHKi02Ln0iJm1Z_HLA!2m2!1d12.34925592847829!2d121.0706911972708!3f288.4641406572949!4f-10.160971052619175!5f0.7820865974627469"
                className="w-full h-64 sm:h-72"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              ></iframe>
            </div>
          </div>
        </section>
      </FadeInSection>

      {/* INTRO */}
      <FadeInSection delay={0.1}>
        <section>
          <h2 className="text-lg font-semibold mb-3">Introduction</h2>
          <p className="text-muted-foreground text-sm">
            This portfolio is created to showcase the skills, knowledge, and
            various projects I have developed throughout my On-the-Job Training
            (OJT) internship. It reflects the experiences, challenges, and
            learnings I gained while working in a professional environment,
            highlighting my growth as an aspiring professional.
          </p>
        </section>
      </FadeInSection>

      {/* CONTENTS */}
      <FadeInSection delay={0.15}>
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
                  className="flex items-center justify-between p-3 rounded-lg border bg-card hover:bg-accent/50 transition w-full"
                >
                  <span className="text-sm">{item.title}</span>
                  <ArrowRight className="h-4 w-4  opacity-70" />
                </button>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </section>
      </FadeInSection>

      {/* CHAPTERS */}
      <FadeInSection delay={0.2}>
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
                  className="flex justify-between items-center p-3 rounded-lg border bg-card hover:bg-accent/50 transition w-full"
                >
                  <span className="text-sm">{ch.title}</span>
                  <ArrowRight className="h-4 w-4 opacity-70" />
                </button>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </section>
      </FadeInSection>

      {/* APPENDICES */}
      <FadeInSection delay={0.25}>
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
                  className="flex justify-between items-center p-3 rounded-lg border bg-card hover:bg-accent/50 transition w-full"
                >
                  <span className="text-sm">{a.title}</span>
                  <ArrowRight className="h-4 w-4  opacity-70" />
                </button>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </section>
      </FadeInSection>

      {/* OJT GALLERY */}
      <FadeInSection delay={0.3}>
        <section>
          <h2 className="text-lg font-semibold mb-3">OJT Experience</h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {ojtExperience.map((item, i) => (
              <div
                key={i}
                onClick={() => setSelectedImage(item.image)}
                className="rounded-lg border bg-card overflow-hidden cursor-pointer"
              >
                <img
                  src={item.image}
                  className="w-full h-48 object-cover hover:scale-105 transition"
                />
                <div className="p-3">
                  <p className="text-sm font-medium">{item.title}</p>
                </div>
              </div>
            ))}
          </div>
        </section>
      </FadeInSection>

      {/* LIGHTBOX */}
      {selectedImage && (
        <div
          className="fixed inset-0 bg-black/80 flex items-center justify-center"
          onClick={() => setSelectedImage(null)}
        >
          <img
            src={selectedImage}
            className="max-w-4xl max-h-[90vh] rounded-lg"
          />
        </div>
      )}
    </div>
  );
}
