import { FadeInSection } from "@/components/Animations";
import logo from "@/assets/LS-Logo.png";
import {
  Building2,
  Globe,
  History,
  MapPin,
  Users,
  Network,
} from "lucide-react";

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
            <MapPin className="w-5 h-5" />
            Office Locations
          </h3>

          <div className="grid md:grid-cols-3 gap-4">
            <div className="h-40 rounded-2xl border bg-muted flex items-center justify-center text-sm">
              Main Office
            </div>

            <div className="h-40 rounded-2xl border bg-muted flex items-center justify-center text-sm">
              Branch Office 1
            </div>

            <div className="h-40 rounded-2xl border bg-muted flex items-center justify-center text-sm">
              Branch Office 2
            </div>
          </div>
        </section>
      </FadeInSection>

      {/* ORGANIZATIONAL STRUCTURE */}
      <FadeInSection delay={0.45}>
        <section className="space-y-6">
          <div className="flex items-center gap-2 text-violet-500">
            <Network className="w-5 h-5" />

            <h2 className="text-2xl font-bold">4. Organizational Structure</h2>
          </div>

          {/* ORG CHART (CLEAN VERSION) */}
          <div className="text-center space-y-6">
            <p className="text-sm text-muted-foreground">
              Organizational Chart of L&S Cable TV, Inc.
            </p>

            <div className="flex flex-col items-center space-y-4">
              {/* TOP */}
              <div className="px-6 py-2 rounded-xl bg-violet-500 text-white font-semibold shadow-sm">
                General Manager
              </div>

              {/* LINE */}
              <div className="w-px h-6 bg-muted-foreground/40" />

              {/* BOTTOM GRID */}
              <div className="grid grid-cols-2 gap-6">
                <div className="px-4 py-2 text-sm text-muted-foreground">
                  Operations Manager
                </div>

                <div className="px-4 py-2 text-sm text-muted-foreground">
                  Technical Head
                </div>

                <div className="px-4 py-2 text-sm text-muted-foreground">
                  Finance Dept.
                </div>

                <div className="px-4 py-2 text-sm text-muted-foreground">
                  IT Support Team
                </div>
              </div>
            </div>
          </div>
        </section>
      </FadeInSection>
    </div>
  );
}
