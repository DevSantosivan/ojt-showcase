import { useNavigate } from "react-router-dom";
import { Mail, FileDown, BookOpen, Paperclip } from "lucide-react";
import { Button } from "@/components/ui/button";
import profileImg from "@/assets/profile-placeholder.jpg";

const chapters = [
  { title: "Chapter 1 — Introduction", url: "/chapters/1" },
  { title: "Chapter 2 — Practicum Experience", url: "/chapters/2" },
  { title: "Chapter 3 — Assessment", url: "/chapters/3" },
  { title: "Chapter 4 — Summary & Recommendations", url: "/chapters/4" },
];

const appendices = [
  { title: "Appendix A", url: "/appendices/a" },
  { title: "Appendix B", url: "/appendices/b" },
  { title: "Appendix C", url: "/appendices/c" },
  { title: "Appendix D", url: "/appendices/d" },
];

export default function QuickOverview() {
  const navigate = useNavigate();

  return (
    <div className="space-y-8">
      {/* Profile Card */}
      <div className="card-clean rounded-lg border border-border bg-card p-6 sm:p-8">
        <div className="flex flex-col sm:flex-row items-center sm:items-start gap-6">
          <img
            src={profileImg}
            alt="Ivan Francisco Santos"
            width={128}
            height={128}
            className="w-28 h-28 sm:w-32 sm:h-32 rounded-full object-cover border-2 border-border"
          />
          <div className="text-center sm:text-left flex-1">
            <h1 className="font-heading text-2xl sm:text-3xl font-bold tracking-tight">
              Ivan Francisco Santos
            </h1>
            <p className="text-muted-foreground mt-1 text-sm sm:text-base">
              Bachelor of Science in Information Technology
            </p>
            <div className="flex flex-wrap gap-3 mt-4 justify-center sm:justify-start">
              <Button variant="default" size="sm" className="gap-2">
                <FileDown className="h-4 w-4" />
                View Resume
              </Button>
              <Button
                variant="outline"
                size="sm"
                className="gap-2"
                onClick={() => window.location.href = "mailto:ivan.santos@email.com"}
              >
                <Mail className="h-4 w-4" />
                Email Me
              </Button>
            </div>
          </div>
        </div>
      </div>

      {/* Introduction */}
      <section>
        <h2 className="font-heading text-lg font-semibold mb-3">Introduction</h2>
        <p className="text-muted-foreground leading-relaxed text-sm sm:text-base">
          This portfolio is created to showcase the skills, knowledge, and various projects I have
          developed throughout my On-the-Job Training (OJT) internship. It reflects the experiences,
          challenges, and learnings I gained while working in a professional environment, highlighting
          my growth as an aspiring professional.
        </p>
      </section>

      {/* Chapters */}
      <section>
        <h2 className="font-heading text-lg font-semibold mb-3 flex items-center gap-2">
          <BookOpen className="h-5 w-5 text-primary" />
          Chapters
        </h2>
        <div className="grid gap-2">
          {chapters.map((ch) => (
            <button
              key={ch.url}
              onClick={() => navigate(ch.url)}
              className="card-clean rounded-lg border border-border bg-card p-3.5 text-left text-sm hover:border-primary/40 hover:bg-accent/50 transition-colors"
            >
              {ch.title}
            </button>
          ))}
        </div>
      </section>

      {/* Appendices */}
      <section>
        <h2 className="font-heading text-lg font-semibold mb-3 flex items-center gap-2">
          <Paperclip className="h-5 w-5 text-primary" />
          Appendices
        </h2>
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
          {appendices.map((a) => (
            <button
              key={a.url}
              onClick={() => navigate(a.url)}
              className="card-clean rounded-lg border border-border bg-card p-3.5 text-center text-sm hover:border-primary/40 hover:bg-accent/50 transition-colors"
            >
              {a.title}
            </button>
          ))}
        </div>
      </section>
    </div>
  );
}
