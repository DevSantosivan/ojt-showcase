import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";

import logo1 from "@/assets/School-logo.png";
import logo2 from "@/assets/cast.jpg";
import logo3 from "@/assets/LS-Logo.png";

export default function Welcome() {
  const navigate = useNavigate();

  const [text, setText] = useState("");
  const [loading, setLoading] = useState(false);
  const [darkMode, setDarkMode] = useState(false);

  const fullText = "INTERNSHIP PORTFOLIO";

  /* =========================
     THEME
  ========================= */
  useEffect(() => {
    const savedTheme = localStorage.getItem("theme");

    if (savedTheme === "dark") {
      document.documentElement.classList.add("dark");
      setDarkMode(true);
    } else {
      document.documentElement.classList.remove("dark");
      setDarkMode(false);
    }
  }, []);

  const toggleTheme = () => {
    const next = !darkMode;
    setDarkMode(next);

    if (next) {
      document.documentElement.classList.add("dark");
      localStorage.setItem("theme", "dark");
    } else {
      document.documentElement.classList.remove("dark");
      localStorage.setItem("theme", "light");
    }
  };

  /* =========================
     TYPING EFFECT
  ========================= */
  useEffect(() => {
    let i = 0;

    const interval = setInterval(() => {
      setText(fullText.slice(0, i + 1));
      i++;

      if (i === fullText.length) clearInterval(interval);
    }, 80);

    return () => clearInterval(interval);
  }, []);

  const handleEnter = () => {
    setLoading(true);

    setTimeout(() => {
      navigate("/dashboard");
    }, 1200);
  };

  return (
    <div className="relative min-h-screen overflow-hidden bg-background text-foreground flex items-center justify-center px-6">
      {/* ================= BACKGROUND GRID ================= */}
      <div className="absolute inset-0 -z-20">
        <div
          className="absolute inset-0 opacity-[0.12] dark:opacity-[0.18]"
          style={{
            backgroundImage: `
              linear-gradient(to right, hsl(var(--border)) 1px, transparent 1px),
              linear-gradient(to bottom, hsl(var(--border)) 1px, transparent 1px)
            `,
            backgroundSize: "42px 42px",
          }}
        />

        <div className="absolute inset-0 bg-background/90 dark:bg-background/95" />
      </div>

      {/* ================= BLUR CIRCLES ================= */}
      <div className="absolute top-10 left-10 w-72 h-72 rounded-full bg-sky-500/10 blur-3xl -z-10" />
      <div className="absolute bottom-10 right-10 w-72 h-72 rounded-full bg-violet-500/10 blur-3xl -z-10" />
      <div className="absolute top-1/2 left-1/2 w-72 h-72 rounded-full bg-teal-500/10 blur-3xl -translate-x-1/2 -translate-y-1/2 -z-10" />

      {/* ================= THEME BUTTON ================= */}
      <button
        onClick={toggleTheme}
        className="absolute top-5 right-5 z-30 px-4 py-2 rounded-full border bg-background/70 backdrop-blur-md text-sm transition hover:bg-muted"
      >
        {darkMode ? "☀ Light Mode" : "🌙 Dark Mode"}
      </button>

      {/* ================= MAIN CARD ================= */}
      <motion.div
        initial={{ opacity: 0, y: 35 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="
          relative
          w-full
          max-w-6xl
          rounded-[40px]
          border
          bg-background/70
          backdrop-blur-2xl
          p-8
          md:p-14
          overflow-hidden
        "
      >
        {/* TOP LINE */}
        <div className="absolute top-0 left-0 w-full h-[2px] bg-gradient-to-r from-sky-500 via-violet-500 to-teal-400" />

        <div className="grid lg:grid-cols-2 gap-14 items-center">
          {/* ================= LEFT CONTENT ================= */}
          <div>
            {/* MINI BADGE */}
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border text-xs tracking-[3px] uppercase mb-6 bg-muted/50">
              OJT Digital Portfolio
            </div>

            {/* TITLE */}
            <h1 className="text-4xl md:text-6xl font-black leading-tight tracking-tight">
              {text}
              <span className="animate-pulse text-primary">|</span>
            </h1>

            {/* DESCRIPTION */}
            <p className="mt-6 text-muted-foreground leading-relaxed text-base md:text-lg max-w-xl">
              A modern internship portfolio designed to present training
              experiences, completed projects, technical competencies, work
              accomplishments, evaluations, and learning progress in a clean and
              professional digital environment.
            </p>

            {/* FEATURE CARDS */}
            <div className="grid grid-cols-2 gap-4 mt-8">
              {/* CARD 1 */}
              <motion.div
                whileHover={{ y: -5 }}
                className="rounded-3xl border p-5 bg-muted/30 backdrop-blur-xl"
              >
                <h3 className="text-xl font-bold">Training Records</h3>

                <p className="text-sm text-muted-foreground mt-2 leading-relaxed">
                  Track attendance, assigned tasks, completed activities, and
                  daily internship progress digitally.
                </p>
              </motion.div>

              {/* CARD 2 */}
              <motion.div
                whileHover={{ y: -5 }}
                className="rounded-3xl border p-5 bg-muted/30 backdrop-blur-xl"
              >
                <h3 className="text-xl font-bold">Internship Milestones</h3>

                <p className="text-sm text-muted-foreground mt-2 leading-relaxed">
                  Showcase acquired skills, completed projects, certifications,
                  and internship accomplishments.
                </p>
              </motion.div>
            </div>

            {/* ================= BUTTONS ================= */}
            <div className="flex flex-wrap gap-4 mt-10">
              {/* MAIN CTA */}
              <motion.button
                onClick={handleEnter}
                whileHover={{
                  scale: 1.05,
                  boxShadow: "0px 0px 35px rgba(59,130,246,0.45)",
                }}
                whileTap={{ scale: 0.95 }}
                animate={{
                  y: [0, -4, 0],
                }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                }}
                className="
                  relative
                  overflow-hidden
                  group
                  px-10
                  py-5
                  rounded-2xl
                  bg-primary
                  text-primary-foreground
                  font-bold
                  tracking-wide
                  shadow-2xl
                "
              >
                {/* SHINE EFFECT */}
                <span
                  className="
                    absolute
                    inset-0
                    -translate-x-full
                    group-hover:translate-x-full
                    transition-transform
                    duration-1000
                    bg-gradient-to-r
                    from-transparent
                    via-white/30
                    to-transparent
                  "
                />

                {/* PULSE */}
                <span className="absolute inset-0 rounded-2xl animate-ping bg-primary/20" />

                <span className="relative flex items-center gap-2">
                  Explore My OJT Portfolio
                  <motion.span
                    animate={{ x: [0, 6, 0] }}
                    transition={{
                      duration: 1,
                      repeat: Infinity,
                    }}
                  >
                    🚀
                  </motion.span>
                </span>
              </motion.button>

              {/* SECOND BUTTON */}
              {/* <motion.button
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.96 }}
                className="
                  px-8
                  py-5
                  rounded-2xl
                  border
                  font-semibold
                  bg-background/50
                  backdrop-blur-xl
                  hover:bg-muted/50
                  transition
                "
              >
                View Internship Journey
              </motion.button> */}
            </div>
          </div>

          {/* ================= RIGHT SIDE ================= */}
          <div className="relative flex items-center justify-center">
            {/* CIRCLE DESIGN */}
            <div className="absolute w-[420px] h-[420px] rounded-full border opacity-40" />
            <div className="absolute w-[320px] h-[320px] rounded-full border opacity-30" />

            {/* LOGO CARD */}
            <motion.div
              animate={{
                y: [0, -12, 0],
              }}
              transition={{
                duration: 5,
                repeat: Infinity,
              }}
              className="
                relative
                rounded-[38px]
                border
                bg-background/70
                backdrop-blur-xl
                p-8
                max-w-lg
              "
            >
              {/* TITLE */}
              <div className="text-center mb-6">
                <h2 className="text-2xl font-bold">
                  Internship Partner Institutions
                </h2>

                <p className="text-sm text-muted-foreground mt-2 leading-relaxed">
                  Organizations and institutions connected to my internship
                  journey and professional training experience.
                </p>
              </div>

              {/* LOGOS */}
              <div className="grid grid-cols-3 gap-5 items-center">
                <motion.img
                  whileHover={{ scale: 1.08 }}
                  src={logo1}
                  className="w-24 md:w-28 object-contain mx-auto"
                />

                <motion.img
                  whileHover={{ scale: 1.08 }}
                  src={logo2}
                  className="w-28 md:w-36 object-contain mx-auto"
                />

                <motion.img
                  whileHover={{ scale: 1.08 }}
                  src={logo3}
                  className="w-24 md:w-28 object-contain mx-auto"
                />
              </div>

              {/* STATUS */}
              <div className="mt-8 rounded-2xl border px-5 py-4 bg-muted/30">
                <div className="flex items-center justify-between">
                  <span className="text-sm text-muted-foreground">
                    Portfolio Status
                  </span>

                  <span className="flex items-center gap-2 text-sm font-medium">
                    <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
                    Ready for Review
                  </span>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </motion.div>

      {/* ================= LOADING SCREEN ================= */}
      <AnimatePresence>
        {loading && (
          <motion.div
            initial={{ opacity: 0, backdropFilter: "blur(0px)" }}
            animate={{ opacity: 1, backdropFilter: "blur(10px)" }}
            exit={{ opacity: 0 }}
            className="
              absolute
              inset-0
              z-50
              flex
              flex-col
              items-center
              justify-center
              bg-background/90
            "
          >
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-3xl md:text-5xl font-black tracking-[6px]"
            >
              ENTERING
            </motion.div>

            <div className="w-[220px] h-[2px] bg-muted mt-8 rounded-full overflow-hidden">
              <motion.div
                initial={{ width: 0 }}
                animate={{ width: "100%" }}
                transition={{ duration: 1 }}
                className="h-full bg-primary"
              />
            </div>

            <p className="mt-5 text-muted-foreground text-sm tracking-[3px] uppercase">
              Loading Internship Portfolio
            </p>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
