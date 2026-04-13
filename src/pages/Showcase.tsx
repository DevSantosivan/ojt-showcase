import { useState } from "react";
import {
  FadeInSection,
  StaggerContainer,
  StaggerItem,
} from "@/components/Animations";
import {
  Globe,
  Smartphone,
  Award,
  Palette,
  Code2,
  Database,
  GitBranch,
  Server,
} from "lucide-react";

/* OJT IMAGES */
import ojt1 from "@/assets/OJT1.jpg";
import ojt2 from "@/assets/OJT2.jpg";
import ojt3 from "@/assets/OJT3.jpg";
import ojt4 from "@/assets/OJT4.jpg";

interface TechItem {
  name: string;
  years: string;
  icon: React.ReactNode;
  color: string;
}

interface CertificateItem {
  title: string;
  image: string;
  year: string;
}

/* ICON STYLE */
const iconStyle = (color: string) => ({
  color,
});

/* WEB TECH */
const webTech: TechItem[] = [
  { name: "Angular", years: "1 year", icon: <Code2 />, color: "#DD0031" },
  { name: "React", years: "1 year", icon: <Code2 />, color: "#61DAFB" },
  {
    name: "Tailwind CSS",
    years: "1 year",
    icon: <Palette />,
    color: "#38BDF8",
  },
  { name: "JavaScript", years: "2 years", icon: <Code2 />, color: "#F7DF1E" },
  { name: "Bootstrap", years: "2 years", icon: <Palette />, color: "#7952B3" },
  { name: "PHP", years: "1 year", icon: <Server />, color: "#777BB4" },
  { name: "Node.js", years: "1 year", icon: <Server />, color: "#68A063" },
  { name: "MySQL", years: "1 year", icon: <Database />, color: "#00758F" },
  { name: "Firebase", years: "1 year", icon: <Database />, color: "#FFCA28" },
  { name: "Supabase", years: "1 year", icon: <Database />, color: "#3ECF8E" },
  { name: "Git", years: "2 years", icon: <GitBranch />, color: "#F1502F" },
  { name: "GitHub", years: "2 years", icon: <GitBranch />, color: "#ffffff" },
];

/* MOBILE TECH */
const mobileTech: TechItem[] = [
  { name: "Flutter", years: "1 year", icon: <Smartphone />, color: "#02569B" },
  { name: "Dart", years: "1 year", icon: <Smartphone />, color: "#0175C2" },
];

/* DESIGN TOOLS */
const designTools: TechItem[] = [
  { name: "Canva", years: "2 years", icon: <Palette />, color: "#00C4CC" },
  { name: "Figma", years: "1 year", icon: <Palette />, color: "#F24E1E" },
];

/* CERTIFICATES */
const certificates: CertificateItem[] = [
  {
    title: "Champion – IT Day Web Design Competition",
    image: ojt1,
    year: "2025",
  },
  {
    title: "1st Place – IT Skills Competition (Team Entry)",
    image: ojt2,
    year: "2025",
  },
  {
    title: "Participation Certificate – Technical Challenge",
    image: ojt3,
    year: "2025",
  },
  {
    title: "Achievement Award – OJT Recognition",
    image: ojt4,
    year: "2025",
  },
];

/* TECH CARD */
function TechCard({ item }: { item: TechItem }) {
  return (
    <div className="flex items-center justify-between rounded-xl border border-border bg-card p-3 hover:border-primary/40 transition">
      <div className="flex items-center gap-2">
        <span style={iconStyle(item.color)}>{item.icon}</span>
        <span className="text-sm font-medium">{item.name}</span>
      </div>

      <span className="text-xs text-muted-foreground bg-muted px-2 py-0.5 rounded-full">
        {item.years}
      </span>
    </div>
  );
}

/* CERT CARD */
function CertificateCard({
  cert,
  onClick,
}: {
  cert: CertificateItem;
  onClick: () => void;
}) {
  return (
    <div
      onClick={onClick}
      className="cursor-pointer rounded-xl border border-border bg-card overflow-hidden hover:scale-[1.02] transition"
    >
      <img
        src={cert.image}
        className="h-44 w-full object-cover"
        alt={cert.title}
      />

      <div className="p-3 space-y-1">
        <div className="flex items-center gap-2">
          <Award className="text-primary h-4 w-4" />
          <span className="text-sm font-medium">{cert.title}</span>
        </div>

        <p className="text-xs text-muted-foreground">{cert.year}</p>
      </div>
    </div>
  );
}

/* MAIN */
export default function Showcase() {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  return (
    <div className="space-y-12">
      {/* HEADER */}
      <FadeInSection>
        <h1 className="text-2xl font-bold">Showcase</h1>
        <p className="text-sm text-muted-foreground">
          Tech stack, tools, and achievements from projects and competitions.
        </p>
      </FadeInSection>

      {/* WEB */}
      <section className="space-y-3">
        <h2 className="text-lg font-semibold flex items-center gap-2">
          <Globe className="text-primary" /> Web Development
        </h2>

        <StaggerContainer className="grid grid-cols-2 md:grid-cols-3 gap-2">
          {webTech.map((item) => (
            <StaggerItem key={item.name}>
              <TechCard item={item} />
            </StaggerItem>
          ))}
        </StaggerContainer>
      </section>

      {/* MOBILE */}
      <section className="space-y-3">
        <h2 className="text-lg font-semibold flex items-center gap-2">
          <Smartphone className="text-primary" /> Mobile Development
        </h2>

        <StaggerContainer className="grid grid-cols-2 md:grid-cols-3 gap-2">
          {mobileTech.map((item) => (
            <StaggerItem key={item.name}>
              <TechCard item={item} />
            </StaggerItem>
          ))}
        </StaggerContainer>
      </section>

      {/* DESIGN */}
      <section className="space-y-3">
        <h2 className="text-lg font-semibold flex items-center gap-2">
          <Palette className="text-primary" /> Design Tools
        </h2>

        <StaggerContainer className="grid grid-cols-2 md:grid-cols-3 gap-2">
          {designTools.map((item) => (
            <StaggerItem key={item.name}>
              <TechCard item={item} />
            </StaggerItem>
          ))}
        </StaggerContainer>
      </section>

      {/* CERTIFICATES */}
      <section className="space-y-3">
        <h2 className="text-lg font-semibold flex items-center gap-2">
          <Award className="text-primary" /> Achievements
        </h2>

        <StaggerContainer className="grid grid-cols-1 sm:grid-cols-2 gap-3">
          {certificates.map((cert) => (
            <StaggerItem key={cert.title}>
              <div
                onClick={() => setSelectedImage(cert.image)}
                className="cursor-pointer"
              >
                <CertificateCard
                  cert={cert}
                  onClick={function (): void {
                    throw new Error("Function not implemented.");
                  }}
                />
              </div>
            </StaggerItem>
          ))}
        </StaggerContainer>
      </section>

      {/* IMAGE MODAL */}
      {selectedImage && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/80"
          onClick={() => setSelectedImage(null)}
        >
          <img
            src={selectedImage}
            className="max-h-[90%] max-w-[90%] rounded-lg shadow-lg"
            alt="Preview"
          />
        </div>
      )}
    </div>
  );
}
