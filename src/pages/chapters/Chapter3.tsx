import { useState } from "react";
import {
  FileText,
  Clock,
  TrendingUp,
  CheckCircle,
  Settings2,
  Bug,
  Users,
  MessageSquare,
  Briefcase,
  Search,
  Wrench,
  Calendar,
  Building2,
  Clock3,
  GraduationCap,
  Monitor,
  User,
  Activity,
  Award,
  Brain,
  Building,
  Globe,
  ShieldCheck,
  Sparkles,
  Target,
  UserCheck,
  Cable,
  FolderKanban,
  HardHat,
  Network,
  Package,
  Printer,
  Wifi,
} from "lucide-react";
import { FadeInSection } from "@/components/Animations";

import dtrImg from "@/assets/appendix/dtr1.png";
import dtrImg1 from "@/assets/appendix/dtr2.png";
import dtrImg2 from "@/assets/appendix/dtr3.png";
import progressImg from "@/assets/OJT2.jpg";

import feb16 from "@/assets/feb16-1.jfif";
import feb161 from "@/assets/feb16.jfif";
import feb162 from "@/assets/feb16-2.jfif";
import feb163 from "@/assets/feb16-3.jfif";
import feb164 from "@/assets/feb16-4.jfif";

import feb123 from "@/assets/feb23.jfif";

import march from "@/assets/march.jfif";
import march1 from "@/assets/march1.jfif";
import march3 from "@/assets/march3.jfif";
import march4 from "@/assets/march4.jfif";
import march5 from "@/assets/march5.jfif";
import march6 from "@/assets/march6.jfif";

import march22 from "@/assets/march22.jfif";
import march222 from "@/assets/march222.jfif";
import march2222 from "@/assets/march2222.jfif";

import march33 from "@/assets/march33.jfif";
import march333 from "@/assets/march333.jfif";

import march3333 from "@/assets/march3333.jfif";

import march44 from "@/assets/march44.jfif";
import march444 from "@/assets/march444.jfif";
import march4444 from "@/assets/maarch4444.jfif";

import april1 from "@/assets/april.jpg";
import april2 from "@/assets/april2.jpg";
import april3 from "@/assets/april3.jpg";
import april4 from "@/assets/april4.jpg";
import april5 from "@/assets/april1.jpg";
import april6 from "@/assets/april5.jpg";
import april7 from "@/assets/april6.jpg";
import april8 from "@/assets/april7.jpg";
import april9 from "@/assets/april8.jpg";
import april10 from "@/assets/april9.jpg";
import april11 from "@/assets/april10.jpg";
import april12 from "@/assets/april11.jpg";
import april13 from "@/assets/arpil12.jpg";
import april14 from "@/assets/april14.jpg";
import april16 from "@/assets/april15.jpg";
import april17 from "@/assets/april16.jpg";
import april18 from "@/assets/april17.jpg";

const weeklyReports = [
  {
    date: "February 16 - 20, 2026",
    items: [
      {
        activity: "Assist and encode client inquiries and documents",
        type: "Office",
        problem: "None",
        remark: "Accomplished",
      },
      {
        activity: "Encode digital documents",
        type: "Office",
        problem: "None",
        remark: "Accomplished",
      },
      {
        activity: "Printing and scanning documents",
        type: "Office",
        problem: "None",
        remark: "Accomplished",
      },
      {
        activity: "Organizing receipts and filing",
        type: "Office",
        problem: "None",
        remark: "Accomplished",
      },
      {
        activity: "Assisting internet activation",
        type: "Office",
        problem: "None",
        remark: "Accomplished",
      },
      {
        activity: "Inventory management and workstation cleaning",
        type: "Office",
        problem: "None",
        remark: "Accomplished",
      },
    ],
  },

  {
    date: "February 23 - 27, 2026",
    items: [
      {
        activity: "Printing and scanning documents",
        type: "Office",
        problem: "None",
        remark: "Accomplished",
      },
      {
        activity: "Assisting internet activation",
        type: "Office",
        problem: "None",
        remark: "Accomplished",
      },
      {
        activity: "Encode client inquiries and documents",
        type: "Office",
        problem: "None",
        remark: "Accomplished",
      },
      {
        activity: "Stock supply organization",
        type: "Office",
        problem: "None",
        remark: "Accomplished",
      },
      {
        activity: "Encoding digital documents",
        type: "Office",
        problem: "None",
        remark: "Accomplished",
      },
      {
        activity: "Organizing receipts and cleaning workstation",
        type: "Office",
        problem: "None",
        remark: "Accomplished",
      },
    ],
  },

  {
    date: "March 2 - 6, 2026",
    items: [
      {
        activity: "Observing safety procedures",
        type: "Field",
        problem: "None",
        remark: "Accomplished",
      },
      {
        activity: "Cable assisting, splicing, troubleshooting",
        type: "Field",
        problem: "None",
        remark: "Accomplished",
      },
      {
        activity: "Assisting senior linemen in troubleshooting",
        type: "Field",
        problem: "None",
        remark: "Accomplished",
      },
      {
        activity: "Learning signal distribution principles",
        type: "Field",
        problem: "None",
        remark: "Accomplished",
      },
      {
        activity: "Fiber installation assistance",
        type: "Field",
        problem: "None",
        remark: "Accomplished",
      },
      {
        activity: "Preparing materials before and after tasks",
        type: "Field",
        problem: "None",
        remark: "Accomplished",
      },
    ],
  },

  {
    date: "March 9 - 13, 2026",
    items: [
      {
        activity: "Supporting senior linemen in technical activities",
        type: "Field",
        problem: "None",
        remark: "Accomplished",
      },
      {
        activity: "Cable assisting, splicing, troubleshooting",
        type: "Field",
        problem: "None",
        remark: "Accomplished",
      },
      {
        activity: "Observing actual installation procedures",
        type: "Field",
        problem: "None",
        remark: "Accomplished",
      },
      {
        activity: "Fiber installation assistance",
        type: "Field",
        problem: "None",
        remark: "Accomplished",
      },
      {
        activity: "Material preparation and cleanup",
        type: "Field",
        problem: "None",
        remark: "Accomplished",
      },
    ],
  },

  {
    date: "March 16 - 20, 2026",
    items: [
      {
        activity: "Field technical support",
        type: "Field",
        problem: "None",
        remark: "Accomplished",
      },
      {
        activity: "Cable assisting and troubleshooting",
        type: "Field",
        problem: "None",
        remark: "Accomplished",
      },
      {
        activity: "Installation procedure observation",
        type: "Field",
        problem: "None",
        remark: "Accomplished",
      },
      {
        activity: "Fiber installation assistance",
        type: "Field",
        problem: "None",
        remark: "Accomplished",
      },
      {
        activity: "Material handling support",
        type: "Field",
        problem: "None",
        remark: "Accomplished",
      },
    ],
  },

  {
    date: "March 23 - 31, 2026",
    items: [
      {
        activity: "Field installation support",
        type: "Field",
        problem: "None",
        remark: "Accomplished",
      },
      {
        activity: "Cable assisting and splicing",
        type: "Field",
        problem: "None",
        remark: "Accomplished",
      },
      {
        activity: "Troubleshooting assistance",
        type: "Field",
        problem: "None",
        remark: "Accomplished",
      },
      {
        activity: "Fiber installation",
        type: "Field",
        problem: "None",
        remark: "Accomplished",
      },
      {
        activity: "Material preparation and support",
        type: "Field",
        problem: "None",
        remark: "Accomplished",
      },
      {
        activity: "Technical assistance to senior linemen",
        type: "Field",
        problem: "None",
        remark: "Accomplished",
      },
    ],
  },

  {
    date: "April 6 - 10, 2026",
    items: [
      {
        activity: "Observing installation procedures",
        type: "Field",
        problem: "None",
        remark: "Accomplished",
      },
      {
        activity: "Fiber installation for new clients",
        type: "Field",
        problem: "None",
        remark: "Accomplished",
      },
      {
        activity: "Troubleshooting assistance",
        type: "Field",
        problem: "None",
        remark: "Accomplished",
      },
      {
        activity: "Technical support work",
        type: "Field",
        problem: "None",
        remark: "Accomplished",
      },
      {
        activity: "Material preparation",
        type: "Field",
        problem: "None",
        remark: "Accomplished",
      },
    ],
  },

  {
    date: "April 13 - 17, 2026",
    items: [
      {
        activity: "Installation observation",
        type: "Field",
        problem: "None",
        remark: "Accomplished",
      },
      {
        activity: "Fiber installation assistance",
        type: "Field",
        problem: "None",
        remark: "Accomplished",
      },
      {
        activity: "Troubleshooting support",
        type: "Field",
        problem: "None",
        remark: "Accomplished",
      },
      {
        activity: "Technical field support",
        type: "Field",
        problem: "None",
        remark: "Accomplished",
      },
      {
        activity: "Material handling",
        type: "Field",
        problem: "None",
        remark: "Accomplished",
      },
    ],
  },

  {
    date: "April 20 - 24, 2026",
    items: [
      {
        activity: "Fiber installation assistance",
        type: "Field",
        problem: "None",
        remark: "Accomplished",
      },
      {
        activity: "Cable assisting and troubleshooting",
        type: "Field",
        problem: "None",
        remark: "Accomplished",
      },
      {
        activity: "Technical support",
        type: "Field",
        problem: "None",
        remark: "Accomplished",
      },
      {
        activity: "Installation observation",
        type: "Field",
        problem: "None",
        remark: "Accomplished",
      },
      {
        activity: "Material preparation",
        type: "Field",
        problem: "None",
        remark: "Accomplished",
      },
    ],
  },

  {
    date: "April 27 - 30, 2026",
    items: [
      {
        activity: "Final installation observation",
        type: "Field",
        problem: "None",
        remark: "Accomplished",
      },
      {
        activity: "Fiber installation assistance",
        type: "Field",
        problem: "None",
        remark: "Accomplished",
      },
      {
        activity: "Troubleshooting support",
        type: "Field",
        problem: "None",
        remark: "Accomplished",
      },
      {
        activity: "Material preparation and cleanup",
        type: "Field",
        problem: "None",
        remark: "Accomplished",
      },
    ],
  },
];

export function Chapter3() {
  const [selectedDoc, setSelectedDoc] = useState(null);

  const [activeImage, setActiveImage] = useState<string | null>(null);
  const [selectedImage, setSelectedImage] = useState(null);

  const [selectedWeek, setSelectedWeek] = useState(null);
  const [activeImg, setActiveImg] = useState(null);
  const weeklyDocumentary = [
    {
      date: "February 16 - 20, 2026",
      images: [feb16, feb162, feb163],
    },
    {
      date: "February 23 - 27, 2026",
      images: [feb123, feb161, feb164],
    },
    {
      date: "March 2 - 6, 2026",
      images: [march, march1, march3, march4, march5, march6],
    },
    {
      date: "March 9 - 13, 2026",
      images: [march22, march222, march2222],
    },
    {
      date: "March 16 - 20, 2026",
      images: [march33, march333, march3333],
    },
    {
      date: "March 23 - 31, 2026",
      images: [march44, march444, march4444],
    },
    {
      date: "April 6 - 10, 2026",
      images: [april1, april2, april3, april18],
    },
    {
      date: "April 13 - 17, 2026",
      images: [april4, april5, april6, april18],
    },
    {
      date: "April 20 - 24, 2026",
      images: [april7, april8, april9, april13, april14],
    },
    {
      date: "April 27 - 30, 2026",
      images: [april10, april11, april12, april16, april17],
    },
  ];

  const [docIndex, setDocIndex] = useState(0);

  const nextDoc = () => {
    setDocIndex((prev) => (prev + 1) % weeklyDocumentary.length);
  };

  const prevDoc = () => {
    setDocIndex((prev) =>
      prev === 0 ? weeklyDocumentary.length - 1 : prev - 1,
    );
  };
  const dtrMonths = [
    {
      title: "February 2025",
      img: dtrImg,
      hours: "163.75 Hours",
      progress: 99,
    },
    {
      title: "March 2025",
      img: dtrImg1,
      hours: "187.70 Hours",
      progress: 95,
    },
    {
      title: "April 2025",
      img: dtrImg2,
      hours: "137.55 Hours", // +2.75
      progress: 100,
    },
  ];
  return (
    <div className="space-y-10">
      {/* HEADER */}
      <FadeInSection>
        <div>
          <p className="text-xs uppercase tracking-[0.3em] text-muted-foreground">
            Chapter 3
          </p>

          <h1 className="text-3xl md:text-4xl font-bold text-sky-500">
            Work Experience
          </h1>

          <div className="w-20 h-1 bg-sky-500 rounded-full mt-2" />
        </div>
      </FadeInSection>

      {/* ================= TABLE ================= */}
      <FadeInSection delay={0.1}>
        <section className="space-y-6">
          <div className="flex items-center gap-2 text-sky-500">
            <FileText className="w-5 h-5" />
            <h2 className="text-2xl font-bold">Weekly Accomplishment Report</h2>
          </div>

          <div className="w-16 h-1 bg-sky-500 rounded-full" />

          <div className="rounded-3xl overflow-hidden border bg-background shadow-sm">
            <table className="w-full text-sm">
              <thead className="bg-sky-500/10 text-sky-500">
                <tr>
                  <th className="p-4 text-left">Date</th>
                  <th className="p-4 text-left">Type</th>
                  <th className="p-4 text-left">Activities</th>
                  <th className="p-4 text-left">Problems</th>
                  <th className="p-4 text-left">Remarks</th>
                  <th className="p-4 text-left">Documentation</th> {/* NEW */}
                </tr>
              </thead>
              <tbody>
                {weeklyReports.map((week, i) => {
                  const doc = weeklyDocumentary.find(
                    (d) => d.date === week.date,
                  );

                  return week.items.map((item, j) => (
                    <tr key={`${i}-${j}`} className="border-t border-muted/40">
                      <td className="p-4 text-muted-foreground">
                        {j === 0 ? week.date : ""}
                      </td>

                      <td className="p-4">{item.type}</td>
                      <td className="p-4">{item.activity}</td>
                      <td className="p-4 text-muted-foreground">
                        {item.problem}
                      </td>
                      <td className="p-4 font-medium text-green-600">
                        {item.remark}
                      </td>

                      {/* DOCUMENTATION BUTTON */}
                      <td className="p-4">
                        {j === 0 && doc ? (
                          <button
                            onClick={() => setSelectedWeek(doc)}
                            className="group relative inline-flex items-center gap-2 px-4 py-1.5 text-xs font-semibold rounded-full
      bg-sky-500/10 text-sky-600 border border-sky-500/20
      hover:bg-sky-500 hover:text-white
      hover:shadow-lg hover:shadow-sky-500/30
      hover:-translate-y-1 active:scale-95
      transition-all duration-300"
                          >
                            {/* 👀 blinking eyes effect */}
                            <span className="relative flex items-center">
                              <span className="text-base animate-bounce">
                                👀
                              </span>

                              {/* small sparkle / attention dot */}
                            </span>

                            <span className="tracking-wide">View Docs</span>
                            <span className="absolute -top-1 -right-2 flex h-2 w-2">
                              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-orange-400 opacity-75"></span>
                              <span className="relative inline-flex h-2 w-2 rounded-full bg-orange-500"></span>
                            </span>
                            {/* subtle hint text on hover */}
                            <span className="absolute -top-6 left-1/2 -translate-x-1/2 opacity-0 group-hover:opacity-100 transition text-[10px] text-sky-500">
                              Click to view 👇
                            </span>
                          </button>
                        ) : null}
                      </td>
                    </tr>
                  ));
                })}
              </tbody>
            </table>
          </div>
        </section>
      </FadeInSection>
      <FadeInSection delay={0.15}>
        <div className="mt-10 space-y-6">
          <h3 className="text-lg font-semibold text-sky-500">Documentary</h3>

          {/* ================= WEEK FOLDER VIEW ================= */}
          <FadeInSection delay={0.2}>
            <div className="grid md:grid-cols-2 gap-4">
              {weeklyDocumentary.map((week, i) => (
                <div
                  key={i}
                  onClick={() => setSelectedWeek(week)}
                  className="group relative cursor-pointer rounded-3xl border bg-card p-6
  overflow-hidden transition-all duration-500
  hover:-translate-y-2 hover:shadow-2xl"
                >
                  {/* ambient glow background */}
                  <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition duration-500">
                    <div className="absolute -top-10 -right-10 h-40 w-40 rounded-full bg-sky-400/20 blur-3xl" />
                    <div className="absolute -bottom-10 -left-10 h-40 w-40 rounded-full bg-violet-400/20 blur-3xl" />
                  </div>

                  {/* CONTENT */}
                  <div className="relative z-10">
                    <h4 className="font-bold text-sky-600 text-base group-hover:text-sky-500 transition">
                      {week.date}
                    </h4>

                    <p className="text-xs text-muted-foreground mt-1">
                      {week.images?.length || 0} photos available
                    </p>

                    {/* PREVIEW STACK */}
                    <div className="flex gap-2 mt-4">
                      {week.images?.slice(0, 3).map((img, idx) => (
                        <img
                          key={idx}
                          src={img}
                          className="w-14 h-14 object-cover rounded-xl border
          transition duration-300
          group-hover:scale-110 group-hover:rotate-1"
                        />
                      ))}
                    </div>

                    {/* CTA AREA */}
                    <div className="mt-5 flex items-center justify-between">
                      <span className="text-[11px] text-muted-foreground">
                        Hover to preview
                      </span>

                      <div
                        className="flex items-center gap-2 text-sky-600 text-xs font-semibold
      opacity-0 group-hover:opacity-100 transition"
                      >
                        <span className="animate-pulse">👁</span>
                        View Documentation
                      </div>
                    </div>
                  </div>

                  {/* HOVER LAYER */}
                  <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition">
                    <div className="absolute inset-0 bg-black/5 backdrop-blur-[2px]" />

                    <div className="relative flex flex-col items-center gap-2">
                      <div className="text-3xl animate-bounce">📁</div>

                      <span
                        className="px-4 py-1 rounded-full text-xs font-semibold
      bg-sky-500 text-white shadow-lg
      animate-pulse"
                      >
                        Click to Open
                      </span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </FadeInSection>

          {selectedWeek && (
            <div
              className="fixed inset-0 z-50 flex items-center justify-center bg-black/75 p-4 backdrop-blur-sm"
              onClick={() => setSelectedWeek(null)}
            >
              <div
                className="flex max-h-[92vh] w-full max-w-7xl flex-col overflow-hidden rounded-3xl border bg-background shadow-2xl"
                onClick={(e) => e.stopPropagation()}
              >
                {/* HEADER */}
                <div className="shrink-0 border-b bg-gradient-to-r from-sky-500/10 via-background to-violet-500/10 px-6 py-4">
                  <div className="flex items-center justify-between">
                    <div>
                      <h4 className="text-lg font-bold text-sky-600">
                        {selectedWeek.date}
                      </h4>

                      <p className="text-xs text-muted-foreground">
                        Documentary Gallery • {selectedWeek.images?.length || 0}{" "}
                        photos
                      </p>
                    </div>

                    <button
                      onClick={() => setSelectedWeek(null)}
                      className="rounded-full bg-red-500/10 px-3 py-1 text-sm font-semibold text-red-500 transition hover:bg-red-500 hover:text-white"
                    >
                      Close
                    </button>
                  </div>
                </div>

                {/* CONTENT (LARGE IMAGES DIRECT) */}
                <div className="flex-1 overflow-y-auto p-6">
                  <div className="grid gap-6 sm:grid-cols-1 md:grid-cols-2">
                    {selectedWeek.images?.map((img, i) => (
                      <div
                        key={i}
                        className="overflow-hidden rounded-2xl border bg-muted shadow-md"
                      >
                        <img
                          src={img}
                          alt={`doc-${i}`}
                          className="h-[450px] w-full object-cover md:h-[520px]"
                        />
                      </div>
                    ))}
                  </div>
                </div>

                {/* FOOTER */}
                <div className="shrink-0 border-t bg-muted/30 px-6 py-3 text-xs text-muted-foreground">
                  💡 Scroll to view all images • No click needed • Full preview
                  mode
                </div>
              </div>
            </div>
          )}
        </div>
      </FadeInSection>
      <FadeInSection delay={0.2}>
        <section className="space-y-6">
          {/* HEADER */}
          <div className="flex items-center gap-2 text-teal-500">
            <Clock className="w-5 h-5" />
            <h2 className="text-2xl font-bold">Daily Time Record</h2>
          </div>

          <div className="w-16 h-1 bg-teal-500 rounded-full" />

          {/* ================= MONTH CARDS ================= */}
          <div className="grid md:grid-cols-3 gap-6">
            {dtrMonths.map((item, i) => (
              <div
                key={i}
                onClick={() => setSelectedImage(item)}
                className="cursor-pointer group rounded-3xl overflow-hidden border bg-white shadow-sm hover:shadow-xl hover:-translate-y-1 transition duration-300"
              >
                {/* IMAGE */}
                <div className="relative overflow-hidden">
                  <img
                    src={item.img}
                    className="w-full h-44 object-cover group-hover:scale-105 transition duration-300"
                  />

                  {/* HOURS BADGE */}
                  <div className="absolute top-3 right-3 px-3 py-1 rounded-full bg-black/70 backdrop-blur text-white text-xs font-semibold shadow">
                    {item.hours}
                  </div>
                </div>

                {/* CONTENT */}
                <div className="p-4 space-y-3">
                  <div className="text-center">
                    <h3 className="text-lg font-semibold text-teal-600">
                      {item.title}
                    </h3>

                    <p className="text-xs text-muted-foreground">
                      Daily Time Record
                    </p>
                  </div>

                  {/* MINI PROGRESS */}
                  <div className="space-y-1">
                    <div className="flex justify-between text-[11px] text-muted-foreground">
                      <span>Completion</span>
                      <span>{item.progress}%</span>
                    </div>

                    <div className="h-2 bg-muted rounded-full overflow-hidden">
                      <div
                        className={`h-full rounded-full transition-all duration-1000 ${
                          i === 0
                            ? "bg-teal-500"
                            : i === 1
                              ? "bg-sky-500"
                              : "bg-orange-500"
                        }`}
                        style={{ width: `${item.progress}%` }}
                      />
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* ================= SUMMARY (INSIDE DTR) ================= */}
          <div className="space-y-4 pt-4">
            <h3 className="text-lg font-semibold text-teal-500">
              Internship Time Summary
            </h3>

            <div className="grid md:grid-cols-3 gap-4">
              <div className="rounded-2xl border bg-teal-500/5 p-4 text-center">
                <p className="text-2xl font-bold text-teal-600">489</p>
                <p className="text-xs text-muted-foreground">Total Hours</p>
              </div>

              <div className="rounded-2xl border bg-sky-500/5 p-4 text-center">
                <p className="text-2xl font-bold text-sky-600">57</p>
                <p className="text-xs text-muted-foreground">Working Days</p>
              </div>

              <div className="rounded-2xl border bg-orange-500/5 p-4 text-center">
                <p className="text-2xl font-bold text-orange-500">8.58</p>
                <p className="text-xs text-muted-foreground">Avg Hours/Day</p>
              </div>
            </div>

            {/* PROGRESS BARS */}
            <div className="rounded-2xl border p-5 space-y-4 bg-background">
              <h4 className="text-sm font-semibold text-muted-foreground">
                Hours by Activity Type
              </h4>

              {/* Activities */}
              <div>
                <div className="flex justify-between text-xs mb-1">
                  <span>Activities</span>
                  <span>60%</span>
                </div>

                <div className="h-2 bg-muted rounded-full overflow-hidden">
                  <div className="h-full w-[60%] bg-teal-500 rounded-full transition-all duration-1000" />
                </div>
              </div>

              {/* Meetings */}
              <div>
                <div className="flex justify-between text-xs mb-1">
                  <span>Meetings</span>
                  <span>17%</span>
                </div>

                <div className="h-2 bg-muted rounded-full overflow-hidden">
                  <div className="h-full w-[17%] bg-sky-500 rounded-full transition-all duration-1000" />
                </div>
              </div>

              {/* Testing */}
              <div>
                <div className="flex justify-between text-xs mb-1">
                  <span>Testing</span>
                  <span>23%</span>
                </div>

                <div className="h-2 bg-muted rounded-full overflow-hidden">
                  <div className="h-full w-[23%] bg-orange-500 rounded-full transition-all duration-1000" />
                </div>
              </div>
            </div>
          </div>

          {/* ================= MODAL ================= */}
          {selectedImage && (
            <div
              className="fixed inset-0 bg-black/70 flex items-center justify-center z-50"
              onClick={() => setSelectedImage(null)}
            >
              <div
                className="bg-white rounded-2xl overflow-hidden max-w-4xl w-full mx-4"
                onClick={(e) => e.stopPropagation()}
              >
                <div className="flex justify-between items-center px-4 py-3 border-b">
                  <div>
                    <h3 className="font-semibold text-teal-600">
                      {selectedImage.title} DTR
                    </h3>

                    <p className="text-xs text-muted-foreground">
                      Total Hours: {selectedImage.hours}
                    </p>
                  </div>

                  <button
                    onClick={() => setSelectedImage(null)}
                    className="text-red-500 font-bold"
                  >
                    ✕
                  </button>
                </div>

                <img
                  src={selectedImage.img}
                  className="w-full max-h-[80vh] object-contain bg-black"
                />
              </div>
            </div>
          )}
        </section>
      </FadeInSection>

      {/* ================= PROGRESS ================= */}
      <FadeInSection delay={0.3}>
        {/* HEADER */}
        <div className="flex items-center gap-2 text-orange-500">
          <TrendingUp className="w-5 h-5" />

          <h2 className="text-2xl font-bold">Internship Progress Report</h2>
        </div>

        <div className="w-16 h-1 bg-orange-500 rounded-full" />

        {/* ================= OVERVIEW ================= */}

        <br />
        <div className="rounded-3xl border bg-background p-6 space-y-3 shadow-sm">
          <h3 className="font-semibold text-orange-500 text-lg">
            Internship Overview
          </h3>

          <p className="text-sm text-muted-foreground leading-7">
            Complete record of internship details, objectives, and
            accomplishments during the internship training period.
          </p>
        </div>
        <br />
        {/* ================= DETAILS GRID ================= */}
        <div className="grid md:grid-cols-2 gap-4 text-sm">
          {[
            {
              icon: <User className="w-5 h-5 text-orange-500" />,
              label: "Name",
              value: "Santos, Ivan F.",
            },
            {
              icon: <GraduationCap className="w-5 h-5 text-sky-500" />,
              label: "Course",
              value: "Bachelor of Science in Information Technology",
            },
            {
              icon: <Building2 className="w-5 h-5 text-teal-500" />,
              label: "Agency",
              value: "L & S Cable Television Inc.",
            },
            {
              icon: <Calendar className="w-5 h-5 text-violet-500" />,
              label: "Period Covered",
              value: "Feb3, 2025 to April 29, 2025",
            },
            {
              icon: <Clock3 className="w-5 h-5 text-orange-500" />,
              label: "Total Hours",
              value: "489 hours",
            },
            {
              icon: <Monitor className="w-5 h-5 text-sky-500" />,
              label: "Platform",
              value: "Field and Office Work",
            },
          ].map((item, i) => (
            <div
              key={i}
              className="rounded-2xl border bg-card p-5 hover:shadow-md transition"
            >
              <div className="flex items-center gap-3 mb-3">
                <div className="w-10 h-10 rounded-xl bg-muted flex items-center justify-center">
                  {item.icon}
                </div>

                <div>
                  <p className="text-xs uppercase tracking-wide text-muted-foreground">
                    {item.label}
                  </p>

                  <p className="font-semibold leading-6">{item.value}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
        <br />
        <div className="space-y-4">
          <div className="flex items-center gap-2 text-orange-500">
            <CheckCircle className="w-5 h-5" />

            <h3 className="font-semibold text-lg">
              Internship Objectives & Status
            </h3>
          </div>

          <div className="grid gap-4">
            {[
              {
                title:
                  "To assist users with online applications and document processing.",
                icon: <FileText className="w-5 h-5 text-orange-500" />,
              },
              {
                title: "To organize and encode digital documents.",
                icon: <FolderKanban className="w-5 h-5 text-sky-500" />,
              },
              {
                title: "To manage printing and scanning requests efficiently.",
                icon: <Printer className="w-5 h-5 text-teal-500" />,
              },
              {
                title:
                  "To maintain cleanliness and orderliness of workstations.",
                icon: <Sparkles className="w-5 h-5 text-violet-500" />,
              },
              {
                title: "To assist in inventory tracking of office supplies.",
                icon: <Package className="w-5 h-5 text-orange-500" />,
              },
              {
                title:
                  "To observe and follow safety procedures and proper use of tools and equipment.",
                icon: <ShieldCheck className="w-5 h-5 text-green-500" />,
              },
              {
                title:
                  "To support senior linemen in completing field tasks efficiently and safely.",
                icon: <HardHat className="w-5 h-5 text-yellow-500" />,
              },
              {
                title:
                  "To understand basic principles of network infrastructure and signal distribution.",
                icon: <Network className="w-5 h-5 text-sky-500" />,
              },
              {
                title:
                  "To develop skills in cable handling, splicing, and line troubleshooting.",
                icon: <Cable className="w-5 h-5 text-red-500" />,
              },
              {
                title:
                  "To improve physical coordination, technical skills, and teamwork in field operations.",
                icon: <Users className="w-5 h-5 text-violet-500" />,
              },
              {
                title:
                  "To assist in ensuring stable and reliable network connectivity for clients.",
                icon: <Wifi className="w-5 h-5 text-teal-500" />,
              },
              {
                title:
                  "To improve problem-solving skills in identifying and resolving line-related issues.",
                icon: <Search className="w-5 h-5 text-orange-500" />,
              },
              {
                title:
                  "To acquire hands-on experience in the installation, maintenance, and troubleshooting of telecommunication and internet lines.",
                icon: <Wrench className="w-5 h-5 text-sky-500" />,
              },
            ].map((item, i) => (
              <div
                key={i}
                className="rounded-2xl border bg-card p-5 hover:shadow-md transition duration-300"
              >
                <div className="flex items-start justify-between gap-4">
                  {/* LEFT */}
                  <div className="flex gap-4">
                    <div className="w-12 h-12 rounded-2xl bg-muted flex items-center justify-center shrink-0">
                      {item.icon}
                    </div>

                    <div className="space-y-3">
                      <h4 className="font-semibold text-foreground leading-7">
                        {item.title}
                      </h4>

                      <div className="flex flex-wrap gap-2">
                        <span className="px-3 py-1 rounded-full text-xs font-medium bg-green-500/10 text-green-600">
                          Accomplished
                        </span>

                        <span className="px-3 py-1 rounded-full text-xs font-medium bg-muted text-muted-foreground">
                          NONE
                        </span>
                      </div>
                    </div>
                  </div>

                  {/* RIGHT STATUS */}
                  <div className="hidden md:flex items-center gap-2 text-green-600 text-sm font-medium">
                    <CheckCircle className="w-4 h-4 fill-green-600" />
                    Completed
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* ================= FOOTER REPORT ================= */}
          <div className="rounded-3xl border bg-background p-6 md:p-8 space-y-6">
            <div className="space-y-3">
              <h3 className="text-lg font-semibold text-orange-500">
                Internship Report Confirmation
              </h3>

              <p className="text-sm leading-7 text-muted-foreground">
                The following report accurately describes the internship
                activities completed to date.
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-4">
              <div className="rounded-2xl border bg-card p-5">
                <p className="text-xs uppercase tracking-wide text-muted-foreground">
                  Intern
                </p>

                <p className="mt-2 text-lg font-semibold">IVAN F. SANTOS</p>

                <div className="mt-6 border-t pt-3 text-sm text-muted-foreground">
                  Date: May 4, 2026
                </div>
              </div>

              <div className="rounded-2xl border bg-card p-5">
                <p className="text-xs uppercase tracking-wide text-muted-foreground">
                  Site Supervisor
                </p>

                <p className="mt-2 text-lg font-semibold">
                  DAN PATRICK D. SEBASTIAN
                </p>

                <div className="mt-6 border-t pt-3 text-sm text-muted-foreground">
                  Date: May 4, 2026
                </div>
              </div>
            </div>
          </div>
        </div>
      </FadeInSection>

      {/* ================= INTERNSHIP ANALYSIS REPORT ================= */}
      <FadeInSection delay={0.4}>
        <section className="space-y-6">
          {/* HEADER */}
          <div className="flex items-center gap-2 text-violet-500">
            <FileText className="w-5 h-5" />

            <h2 className="text-2xl font-bold">Internship Analysis Report</h2>
          </div>

          <div className="w-16 h-1 bg-violet-500 rounded-full" />

          {/* MAIN CARD */}
          <div className="rounded-3xl border bg-background p-6 md:p-8 shadow-sm space-y-10">
            {/* TOP INFO */}
            <div className="grid md:grid-cols-3 gap-4">
              {[
                {
                  icon: <User className="w-5 h-5 text-violet-500" />,
                  label: "Name",
                  value: "Ivan F. Santos",
                },
                {
                  icon: <Building2 className="w-5 h-5 text-sky-500" />,
                  label: "Internship Site",
                  value: "L&S Cable Television Incorporated",
                },
                {
                  icon: <Calendar className="w-5 h-5 text-orange-500" />,
                  label: "Date",
                  value: "May 1, 2026",
                },
              ].map((item, i) => (
                <div
                  key={i}
                  className="rounded-2xl border bg-card p-5 hover:shadow-lg transition duration-300"
                >
                  <div className="flex items-center gap-3 mb-3">
                    <div className="w-10 h-10 rounded-2xl bg-muted flex items-center justify-center">
                      {item.icon}
                    </div>

                    <div>
                      <p className="text-xs uppercase tracking-wide text-muted-foreground">
                        {item.label}
                      </p>

                      <p className="font-semibold leading-6">{item.value}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* ================= SECTION 1 ================= */}
            <div className="space-y-5">
              <div className="flex items-center gap-3 text-violet-500">
                <div className="w-10 h-10 rounded-2xl bg-violet-500/10 flex items-center justify-center">
                  <Building className="w-5 h-5" />
                </div>

                <h3 className="text-xl font-bold">1. Setting</h3>
              </div>

              <div className="grid gap-4">
                {[
                  {
                    title: "The setting was good because…",
                    content:
                      "The setting was good because we were surrounded by good people or workmates who helped us gain experience during our training.",
                  },
                  {
                    title: "The setting was limited by…",
                    content:
                      "It was limited by fewer opportunities to explore other departments. The organization appears reliable and customer-focused.",
                  },
                  {
                    title:
                      "My initial analysis of the agency or organization was…",
                    content:
                      "L&S Cable TV is a community-focused service provider that prioritizes customer satisfaction and reliable cable/internet services.",
                  },
                ].map((item, i) => (
                  <div
                    key={i}
                    className="rounded-2xl border bg-card p-5 hover:shadow-lg hover:-translate-y-1 transition duration-300"
                  >
                    <div className="flex items-start gap-3 mb-3">
                      <div className="w-8 h-8 rounded-xl bg-violet-500/10 flex items-center justify-center shrink-0">
                        <Sparkles className="w-4 h-4 text-violet-500" />
                      </div>

                      <h4 className="font-semibold leading-6">{item.title}</h4>
                    </div>

                    <p className="text-sm leading-7 text-muted-foreground">
                      {item.content}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            {/* ================= SECTION 2 ================= */}
            <div className="space-y-5">
              <div className="flex items-center gap-3 text-sky-500">
                <div className="w-10 h-10 rounded-2xl bg-sky-500/10 flex items-center justify-center">
                  <UserCheck className="w-5 h-5" />
                </div>

                <h3 className="text-xl font-bold">2. Site Supervisor</h3>
              </div>

              <div className="grid gap-4">
                {[
                  {
                    title:
                      "The greatest contribution made by the site supervisor…",
                    content:
                      "The greatest contribution made by the site supervisor was providing guidance and practical knowledge about the company’s operations, especially in handling customer concerns and basic technical troubleshooting.",
                  },
                  {
                    title: "The general level of supervision was…",
                    content:
                      "The general level of supervision was supportive and moderately hands-on. The supervisor ensured that I understood my tasks while also allowing me to perform them independently.",
                  },
                  {
                    title: "I needed more from the supervisor in the way of…",
                    content:
                      "I needed more from the supervisor in the way of deeper technical training and more structured feedback regarding my performance to further improve my skills.",
                  },
                ].map((item, i) => (
                  <div
                    key={i}
                    className="rounded-2xl border bg-card p-5 hover:shadow-lg hover:-translate-y-1 transition duration-300"
                  >
                    <div className="flex items-start gap-3 mb-3">
                      <div className="w-8 h-8 rounded-xl bg-sky-500/10 flex items-center justify-center shrink-0">
                        <ShieldCheck className="w-4 h-4 text-sky-500" />
                      </div>

                      <h4 className="font-semibold leading-6">{item.title}</h4>
                    </div>

                    <p className="text-sm leading-7 text-muted-foreground">
                      {item.content}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            {/* ================= SECTION 3 ================= */}
            <div className="space-y-5">
              <div className="flex items-center gap-3 text-orange-500">
                <div className="w-10 h-10 rounded-2xl bg-orange-500/10 flex items-center justify-center">
                  <Globe className="w-5 h-5" />
                </div>

                <h3 className="text-xl font-bold">
                  3. Environmental Conditions or Events
                </h3>
              </div>

              <div className="grid gap-4">
                {[
                  {
                    title:
                      "The one event/characteristic that really influenced my internship was…",
                    content:
                      "Experiencing actual customer service situations, especially handling complaints and service interruptions. This helped me develop patience and communication skills.",
                  },
                  {
                    title:
                      "A trend/issue which really impacted this organization was…",
                    content:
                      "The increasing demand for stable internet connection and competition with larger telecom providers, which pushes the company to continuously improve its services.",
                  },
                  {
                    title:
                      "Diversity of co-workers or target audiences provided an opportunity to…",
                    content:
                      "Learn how to communicate with different types of customers, adapt to various personalities, and work effectively within a team.",
                  },
                ].map((item, i) => (
                  <div
                    key={i}
                    className="rounded-2xl border bg-card p-5 hover:shadow-lg hover:-translate-y-1 transition duration-300"
                  >
                    <div className="flex items-start gap-3 mb-3">
                      <div className="w-8 h-8 rounded-xl bg-orange-500/10 flex items-center justify-center shrink-0">
                        <Activity className="w-4 h-4 text-orange-500" />
                      </div>

                      <h4 className="font-semibold leading-6">{item.title}</h4>
                    </div>

                    <p className="text-sm leading-7 text-muted-foreground">
                      {item.content}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            {/* ================= SECTION 4 ================= */}
            <div className="space-y-5">
              <div className="flex items-center gap-3 text-teal-500">
                <div className="w-10 h-10 rounded-2xl bg-teal-500/10 flex items-center justify-center">
                  <Brain className="w-5 h-5" />
                </div>

                <h3 className="text-xl font-bold">4. Self-Assessment</h3>
              </div>

              <div className="grid gap-4">
                {[
                  {
                    title: "The most important thing I learned is…",
                    content:
                      "The most important thing I learned is how to apply communication, responsibility, and adaptability in a real work environment, especially when dealing with customers and technical concerns.",
                  },
                  {
                    title: "I contributed to the organization by…",
                    content:
                      "Assisting in daily office tasks, supporting customer service operations, and helping with basic technical or administrative duties when needed.",
                  },
                  {
                    title: "I still need more experience in the area of…",
                    content:
                      "Advanced technical troubleshooting, network systems, and professional communication in more complex situations.",
                  },
                  {
                    title: "If I were to repeat this experience I would…",
                    content:
                      "Take more initiative in asking questions, seek more hands-on technical exposure, and improve my time management skills.",
                  },
                ].map((item, i) => (
                  <div
                    key={i}
                    className="rounded-2xl border bg-card p-5 hover:shadow-lg hover:-translate-y-1 transition duration-300"
                  >
                    <div className="flex items-start gap-3 mb-3">
                      <div className="w-8 h-8 rounded-xl bg-teal-500/10 flex items-center justify-center shrink-0">
                        <Target className="w-4 h-4 text-teal-500" />
                      </div>

                      <h4 className="font-semibold leading-6">{item.title}</h4>
                    </div>

                    <p className="text-sm leading-7 text-muted-foreground">
                      {item.content}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            {/* ================= SECTION 5 ================= */}
            <div className="space-y-5">
              <div className="flex items-center gap-3 text-pink-500">
                <div className="w-10 h-10 rounded-2xl bg-pink-500/10 flex items-center justify-center">
                  <Award className="w-5 h-5" />
                </div>

                <h3 className="text-xl font-bold">5. General</h3>
              </div>

              <div className="grid gap-4">
                {[
                  {
                    title: "The internship experience can be strengthened by…",
                    content:
                      "Providing interns with a structured training plan, clearer task assignments, and more exposure to different departments within the organization.",
                  },
                  {
                    title: "Future interns should…",
                    content:
                      "Be proactive, willing to learn, respectful to supervisors and co-workers, and open to handling both technical and administrative tasks.",
                  },
                ].map((item, i) => (
                  <div
                    key={i}
                    className="rounded-2xl border bg-card p-5 hover:shadow-lg hover:-translate-y-1 transition duration-300"
                  >
                    <div className="flex items-start gap-3 mb-3">
                      <div className="w-8 h-8 rounded-xl bg-pink-500/10 flex items-center justify-center shrink-0">
                        <CheckCircle className="w-4 h-4 text-pink-500" />
                      </div>

                      <h4 className="font-semibold leading-6">{item.title}</h4>
                    </div>

                    <p className="text-sm leading-7 text-muted-foreground">
                      {item.content}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>
      </FadeInSection>
    </div>
  );
}
