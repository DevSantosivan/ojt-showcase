import {
  CheckCircle,
  GraduationCap,
  User,
  IdCard,
  BookOpen,
  Calendar,
  CalendarCheck,
  Building2,
  Layers,
  UserCheck,
  Briefcase,
} from "lucide-react";

import { FadeInSection } from "@/components/Animations";

import eva1 from "@/assets/eva1.jpg";
import eva2 from "@/assets/eva2.jpg";
import eva3 from "@/assets/eva4.jpg";
import eva4 from "@/assets/eva6.jpg";
export function Chapter4() {
  const images = [eva1, eva2, eva3, eva4];

  const titles = ["OJT Page 1", "OJT Page 2", "OJT Page 3", "OJT Page 4"];

  const colors = [
    "bg-sky-500",
    "bg-teal-500",
    "bg-orange-500",
    "bg-violet-500",
  ];
  const color = [
    "text-sky-500",
    "text-teal-500",
    "text-orange-500",
    "text-violet-500",
  ];
  const scores = [
    { label: "SR - Self Rating", value: 285 },
    { label: "PR - Peer Rating", value: 283 },
    { label: "SICR", value: 0 },
    { label: "ASR", value: 285 },
  ];

  const maxScore = 285;

  return (
    <div className="space-y-10">
      {/* HEADER */}
      <FadeInSection>
        <div>
          <p className="text-xs uppercase tracking-[0.3em] text-muted-foreground">
            Chapter 4
          </p>

          <h1 className="text-3xl md:text-4xl font-bold text-sky-500">
            Assessment of the Practicum Program
          </h1>

          <div className="w-20 h-1 bg-sky-500 rounded-full mt-2" />
        </div>
      </FadeInSection>

      {/* TITLE */}
      <FadeInSection delay={0.1}>
        <div className="flex items-center gap-2 text-sky-500 font-semibold text-lg">
          <CheckCircle className="w-5 h-5" />
          A. Student Internship Evaluation Form
        </div>
      </FadeInSection>

      {/* INFO CARD */}
      <FadeInSection delay={0.15}>
        <div className="bg-background border rounded-3xl shadow-sm p-8 space-y-8">
          {/* HEADER */}
          <div className="text-center space-y-2">
            <h2 className="text-xl font-bold uppercase text-sky-500 flex items-center justify-center gap-2">
              <GraduationCap className="w-5 h-5" />
              Student Internship Performance Evaluation
            </h2>
            <p className="text-sm text-muted-foreground">
              L&S × Occidental Mindoro State College
            </p>
          </div>

          {/* INFO GRID */}
          <div className="grid md:grid-cols-2 gap-6 text-sm">
            <Info
              icon={<User className="w-4 h-4 text-sky-500" />}
              label="Student Name"
              value="Ivan F. Santos"
            />
            <Info
              icon={<IdCard className="w-4 h-4 text-teal-500" />}
              label="Student ID"
              value="MA-21-IT-01185"
            />
            <Info
              icon={<BookOpen className="w-4 h-4 text-orange-500" />}
              label="Course"
              value="BS Information Technology"
            />
            <Info
              icon={<Calendar className="w-4 h-4 text-violet-500" />}
              label="Academic Year"
              value="2026-2026"
            />
            <Info
              icon={<CalendarCheck className="w-4 h-4 text-sky-500" />}
              label="Start Date"
              value="Jan 20, 2026"
            />
            <Info
              icon={<CalendarCheck className="w-4 h-4 text-sky-500" />}
              label="End Date"
              value="Apr 25, 2026"
            />
            <Info
              icon={<Building2 className="w-4 h-4 text-teal-500" />}
              label="Company"
              value="L&S"
            />
            <Info
              icon={<Layers className="w-4 h-4 text-orange-500" />}
              label="Department"
              value="PMO"
            />
            <Info
              icon={<UserCheck className="w-4 h-4 text-violet-500" />}
              label="Supervisor"
              value="Sir Dan Patric"
            />
            <Info
              icon={<Briefcase className="w-4 h-4 text-sky-500" />}
              label="Position"
              value="Office & Field Line Man"
            />
          </div>
        </div>
      </FadeInSection>

      {/* PERFORMANCE TEXT */}
      <FadeInSection delay={0.2}>
        <div className="space-y-2">
          <h3 className="text-lg font-semibold border-l-4 border-sky-500 pl-3">
            Performance Evaluation
          </h3>
          <p className="text-sm text-muted-foreground">
            Official evaluation documentation from L&S and OMSC.
          </p>
        </div>
      </FadeInSection>

      {/* IMAGE CARDS */}
      <FadeInSection delay={0.25}>
        <div className="grid md:grid-cols-2 gap-6">
          {images.map((img, index) => (
            <div
              key={index}
              className="border rounded-3xl overflow-hidden shadow-sm bg-white hover:shadow-md transition"
            >
              <div className="p-3 border-b bg-card">
                <p className={`text-sm font-semibold ${color[index]}`}>
                  {titles[index]}
                </p>
              </div>

              <img
                src={img}
                className="h-[580px] w-full object-contain bg-black/5"
              />
            </div>
          ))}
        </div>
      </FadeInSection>

      {/* PROGRESS SECTION (NEW DASHBOARD STYLE) */}
      <FadeInSection delay={0.3}>
        <div className="bg-background border rounded-3xl shadow-sm p-8 space-y-6">
          <div className="flex items-center gap-2 text-orange-500 font-semibold text-lg">
            <GraduationCap className="w-5 h-5" />
            Performance Evaluation Summary
          </div>

          <div className="grid gap-5">
            {scores.map((s, i) => {
              const maxValue = Math.max(...scores.map((x) => x.value)) || 1;
              const percent = (s.value / maxValue) * 100;

              return (
                <div key={i} className="flex items-center gap-4">
                  {/* LABEL */}
                  <div className="w-52 text-sm text-muted-foreground">
                    {s.label}
                  </div>

                  {/* BAR */}
                  <div className="flex-1 h-3 bg-muted rounded-full overflow-hidden">
                    <div
                      className={`${colors[i]} h-full rounded-full transition-all duration-700`}
                      style={{ width: `${percent}%` }}
                    />
                  </div>

                  {/* VALUE + PERCENT */}
                  <div className="w-28 text-right text-sm font-semibold">
                    {s.value === 0 ? (
                      <span className="text-muted-foreground">No Data</span>
                    ) : (
                      <>
                        <span className={`${color[i]}`}>{s.value}</span>
                        <span className="text-muted-foreground ml-1">
                          ({percent.toFixed(0)}%)
                        </span>
                      </>
                    )}
                  </div>
                </div>
              );
            })}
          </div>

          {/* OVERALL */}
          <div className="text-center p-6 border rounded-xl bg-card space-y-2">
            <p className="text-muted-foreground text-sm">Overall Performance</p>
            <p className="text-3xl font-bold text-orange-500">96%</p>
          </div>
        </div>
      </FadeInSection>
    </div>
  );
}

/* REUSABLE INFO CARD */
function Info({ icon, label, value }) {
  return (
    <div className="p-4 border rounded-xl bg-card space-y-2">
      <p className="flex items-center gap-2 text-muted-foreground">
        {icon}
        {label}
      </p>
      <p className="font-medium">{value}</p>
    </div>
  );
}
