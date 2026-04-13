import { FileText, Clock, TrendingUp } from "lucide-react";
import { FadeInSection } from "@/components/Animations";

import docImg1 from "@/assets/OJT1.jpg";
import docImg2 from "@/assets/OJT2.jpg";

import dtrImg from "@/assets/OJT1.jpg";
import progressImg from "@/assets/OJT2.jpg";

const accomplishments = [
  {
    date: "June 10, 2025",
    activities: "Assisted in system development and UI improvements",
    problems: "API delays and missing endpoints",
    documentationImg: docImg1,
  },
  {
    date: "June 12, 2025",
    activities: "Bug fixing and troubleshooting",
    problems: "State management issues",
    documentationImg: docImg2,
  },
];

export function Chapter3() {
  return (
    <div className="space-y-12">
      {/* HEADER */}
      <FadeInSection>
        <div>
          <p className="text-xs uppercase text-muted-foreground">Chapter 3</p>
          <h1 className="text-2xl font-bold">Work Experience</h1>
        </div>
      </FadeInSection>

      {/* ===================== */}
      {/* ACCOMPLISHMENT REPORT (TABLE STYLE) */}
      {/* ===================== */}
      <FadeInSection delay={0.1}>
        <div className="space-y-4">
          <div className="flex items-center gap-2">
            <FileText className="w-5 h-5 text-muted-foreground" />
            <h2 className="text-lg font-semibold">Accomplishment Report</h2>
          </div>

          {/* SINGLE CONTAINER */}
          <div className="border rounded-xl overflow-hidden bg-background/50">
            <table className="w-full text-sm">
              {/* HEADER */}
              <thead className="bg-muted/30 border-b">
                <tr className="text-left">
                  <th className="p-3">Date</th>
                  <th className="p-3">Activities</th>
                  <th className="p-3">Problems Met</th>
                  <th className="p-3">Documentation</th>
                </tr>
              </thead>

              {/* BODY */}
              <tbody>
                {accomplishments.map((item, i) => (
                  <tr key={i} className="border-b last:border-none">
                    {/* DATE */}
                    <td className="p-3 text-muted-foreground align-top">
                      {item.date}
                    </td>

                    {/* ACTIVITIES */}
                    <td className="p-3 align-top">{item.activities}</td>

                    {/* PROBLEMS */}
                    <td className="p-3 text-muted-foreground align-top">
                      {item.problems}
                    </td>

                    {/* DOCUMENTATION IMAGE */}
                    <td className="p-3 align-top">
                      <img
                        src={item.documentationImg}
                        alt="Documentation"
                        className="w-24 h-16 object-cover rounded-md border"
                      />
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </FadeInSection>

      {/* ===================== */}
      {/* DAILY TIME RECORD */}
      {/* ===================== */}
      <FadeInSection delay={0.2}>
        <div className="space-y-4">
          <div className="flex items-center gap-2">
            <Clock className="w-5 h-5 text-muted-foreground" />
            <h2 className="text-lg font-semibold">Daily Time Record</h2>
          </div>

          <img
            src={dtrImg}
            alt="Daily Time Record"
            className="w-full rounded-xl border"
          />
        </div>
      </FadeInSection>

      {/* ===================== */}
      {/* INTERNSHIP PROGRESS */}
      {/* ===================== */}
      <FadeInSection delay={0.3}>
        <div className="space-y-4">
          <div className="flex items-center gap-2">
            <TrendingUp className="w-5 h-5 text-muted-foreground" />
            <h2 className="text-lg font-semibold">
              Internship Progress Report
            </h2>
          </div>

          <img
            src={progressImg}
            alt="Internship Progress Report"
            className="w-full rounded-xl border"
          />
        </div>
      </FadeInSection>
    </div>
  );
}
