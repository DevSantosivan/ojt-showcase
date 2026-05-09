import { FadeInSection } from "@/components/Animations";
import logo from "@/assets/LS-Logo.png";
import {
  Building2,
  Globe,
  History,
  MapPin,
  Users,
  Network,
  ImageIcon,
} from "lucide-react";

import mainOfficeImg from "@/assets/appendix/office1.jfif";
import branch1Img from "@/assets/appendix/office2.jfif";
import branch2Img from "@/assets/appendix/office3.jfif";

export function Chapter2() {
  return (
    <div className="space-y-10">
      {/* HEADER */}
      <FadeInSection>
        <div className="flex items-center gap-4">
          <img
            src={logo}
            alt="LS Cable TV Logo"
            className="h-14 w-14 object-contain rounded-xl border bg-white p-2 shadow-sm"
          />

          <div className="space-y-1">
            <p className="text-xs uppercase tracking-[0.3em] text-muted-foreground">
              Chapter 2
            </p>

            <h1 className="text-3xl md:text-4xl font-bold text-sky-500">
              Company Profile
            </h1>

            <div className="w-20 h-1 rounded-full bg-sky-500" />
          </div>
        </div>
      </FadeInSection>

      {/* NATURE */}
      <FadeInSection delay={0.1}>
        <section className="bg-background rounded-3xl p-6 md:p-10 space-y-6">
          <div className="flex items-center gap-2 text-sky-500">
            <Globe className="w-5 h-5" />

            <h2 className="text-2xl font-bold">1. Nature of the Agency</h2>
          </div>

          <div className="text-[15px] md:text-base leading-9 text-justify text-muted-foreground space-y-6">
            <p>
              <span className="font-semibold text-sky-500">
                L & S Cable Television Inc.
              </span>{" "}
              is a private telecommunications company in Occidental Mindoro that
              provides cable television and internet services. It focuses on
              delivering reliable entertainment and connectivity to its
              subscribers through its network infrastructure.
            </p>

            <p>
              The company is engaged in wired telecommunications, including the
              distribution of cable TV signals and internet access to local
              communities. It plays an important role in supporting
              communication, media access, and digital connectivity within its
              service areas.
            </p>
          </div>
        </section>
      </FadeInSection>

      {/* MISSION / VISION */}
      <FadeInSection delay={0.2}>
        <section className="bg-background rounded-3xl p-6 md:p-10 space-y-8">
          <div className="flex items-center gap-2 text-teal-500">
            <Building2 className="w-5 h-5" />

            <h2 className="text-2xl font-bold">2. Mission and Vision</h2>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            <div className="rounded-2xl border bg-teal-500/5 p-6 space-y-3">
              <h3 className="flex items-center gap-2 text-lg font-semibold text-teal-500">
                <Users className="w-4 h-4" />
                Mission
              </h3>

              <p className="text-[15px] leading-8 text-muted-foreground text-justify">
                To be the leader in providing fast and reliable cable TV and
                internet service that will be beneficial not only for the
                company but also for our Mindoro clientele;{" "}
                <span className="font-semibold text-teal-500">
                  “10,000 happy subscribers by December 2030”
                </span>
                .
              </p>
            </div>

            <div className="rounded-2xl border bg-teal-500/5 p-6 space-y-3">
              <h3 className="flex items-center gap-2 text-lg font-semibold text-teal-500">
                <Globe className="w-4 h-4" />
                Vision
              </h3>

              <p className="text-[15px] leading-8 text-muted-foreground text-justify">
                To be dynamic in addressing the fast-changing needs of the
                modern era. To be customer-oriented and provide services at par
                or even better than other Cable TV and Internet Service
                Providers in the Philippines. To partner with LGUs in
                interconnecting municipalities and towns of Occidental Mindoro.
              </p>
            </div>
          </div>
        </section>
      </FadeInSection>

      {/* HISTORY */}
      <FadeInSection delay={0.3}>
        <section className="bg-background rounded-3xl p-6 md:p-10 space-y-6">
          <div className="flex items-center gap-2 text-orange-500">
            <History className="w-5 h-5" />

            <h2 className="text-2xl font-bold">
              3. History / Background of the Agency
            </h2>
          </div>

          <div className="text-[15px] md:text-base leading-9 text-justify text-muted-foreground space-y-6">
            <p>
              <span className="font-semibold text-orange-500">
                L & S Cable Television Inc.
              </span>{" "}
              is a family corporation with roots from San Jose, Occidental
              Mindoro. It was founded by Engr. Leon P. Sebastian with the help
              of his seven children.
            </p>

            <p>
              The corporation has been in existence for almost three decades
              providing Cable TV services. In 2019, it partnered with Terraserv
              Technologies Inc. expanding into internet, software development,
              CCTV, wireless connection, system integration, fiber optics,
              IP-PBX, VoIP, and IT consultancy.
            </p>

            <p>
              The main office is located at Rajah Soliman St., Brgy. 4,
              Occidental Mindoro with multiple satellite branches. The company
              also supports schools and churches through annual donations and
              expands rural connectivity.
            </p>
          </div>
        </section>
      </FadeInSection>

      {/* OFFICE IMAGES */}
      <FadeInSection delay={0.35}>
        <section className="space-y-4">
          <h3 className="flex items-center gap-2 text-lg font-semibold text-muted-foreground">
            <ImageIcon className="w-5 h-5" />
            Main Office Pictures
          </h3>

          <div className="grid md:grid-cols-3 gap-4">
            {/* MAIN OFFICE */}
            <div className="h-40 rounded-2xl border bg-muted overflow-hidden relative">
              <img
                src={mainOfficeImg}
                alt="Main Office"
                className="w-full h-full object-cover"
              />
              <div className="absolute bottom-0 w-full bg-black/50 text-white text-sm p-2 text-center">
                Employee's Main Office
              </div>
            </div>

            {/* BRANCH 1 */}
            <div className="h-40 rounded-2xl border bg-muted overflow-hidden relative">
              <img
                src={branch1Img}
                alt="Branch Office 1"
                className="w-full h-full object-cover"
              />
              <div className="absolute bottom-0 w-full bg-black/50 text-white text-sm p-2 text-center">
                General Manager's Office
              </div>
            </div>

            {/* BRANCH 2 */}
            <div className="h-40 rounded-2xl border bg-muted overflow-hidden relative">
              <img
                src={branch2Img}
                alt="Branch Office 2"
                className="w-full h-full object-cover"
              />
              <div className="absolute bottom-0 w-full bg-black/50 text-white text-sm p-2 text-center">
                Waiting Area
              </div>
            </div>
          </div>
        </section>
      </FadeInSection>

      {/* ORGANIZATIONAL STRUCTURE */}
      <FadeInSection delay={0.45}>
        <section className="bg-background rounded-3xl p-6 md:p-10 space-y-6">
          <div className="flex items-center gap-2 text-violet-500">
            <Network className="w-5 h-5" />

            <h2 className="text-2xl font-bold">4. Organizational Structure</h2>
          </div>

          {/* ORG CHART */}
          <div className="text-center space-y-6">
            <p className="text-sm text-muted-foreground">
              Organizational Chart of L&S Cable TV, Inc.
            </p>

            <div className="flex flex-col items-center space-y-4">
              {/* PRESIDENT */}
              <div className="px-8 py-4 rounded-2xl bg-gradient-to-r from-violet-500 to-fuchsia-500 text-white shadow-lg">
                <h3 className="font-bold text-lg">President</h3>

                <p className="text-sm text-white/80">
                  Engr. Danilo S. Sebastian
                </p>
              </div>

              {/* LINE */}
              <div className="w-px h-6 bg-muted-foreground/40" />

              {/* GRID */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                {/* DIRECTOR */}
                <div className="rounded-2xl bg-sky-500/10 border border-sky-500/20 p-5 shadow-sm">
                  <div className="flex items-center gap-2 mb-2 text-sky-500">
                    <Users className="w-4 h-4" />

                    <h3 className="font-bold text-lg">Director</h3>
                  </div>

                  <p className="text-sm text-muted-foreground">
                    Dr. Thelma S. Sarmiento
                  </p>
                </div>

                {/* TECHNICAL HEAD */}
                <div className="rounded-2xl bg-emerald-500/10 border border-emerald-500/20 p-5 shadow-sm">
                  <div className="flex items-center gap-2 mb-2 text-emerald-500">
                    <Globe className="w-4 h-4" />

                    <h3 className="font-bold text-lg">Technical Head</h3>
                  </div>

                  <p className="text-sm text-muted-foreground">
                    Engr. Leon P. Sebastian, Jr.
                  </p>
                </div>

                {/* FINANCE */}
                <div className="rounded-2xl bg-amber-500/10 border border-amber-500/20 p-5 shadow-sm">
                  <div className="flex items-center gap-2 mb-2 text-amber-500">
                    <Building2 className="w-4 h-4" />

                    <h3 className="font-bold text-lg">Finance Department</h3>
                  </div>

                  <p className="text-sm text-muted-foreground">
                    Dr. Felixberto Sarmiento
                  </p>
                </div>

                {/* GENERAL MANAGER */}
                <div className="rounded-2xl bg-rose-500/10 border border-rose-500/20 p-5 shadow-sm">
                  <div className="flex items-center gap-2 mb-2 text-rose-500">
                    <Network className="w-4 h-4" />

                    <h3 className="font-bold text-lg">General Manager</h3>
                  </div>

                  <p className="text-sm text-muted-foreground">
                    Dan Patric D. Sebastian
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
      </FadeInSection>
    </div>
  );
}
