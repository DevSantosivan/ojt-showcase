import { useState } from "react";
import { X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import {
  FadeInSection,
  StaggerContainer,
  StaggerItem,
} from "@/components/Animations";

/* =========================
   📸 IMPORT YOUR IMAGES HERE
   ========================= */

import imgA1 from "@/assets/appendix/A.jpg";

import imgB1 from "@/assets/appendix/B.jpg";
import imgC1 from "@/assets/LS-Logo.png";

import imgD1 from "@/assets/appendix/D.jpg";
import imgE1 from "@/assets/LS-Logo.png";
import imgF1 from "@/assets/appendix/F.jpg";
import imgG1 from "@/assets/appendix/G.jpg";
import imgH1 from "@/assets/LS-Logo.png";
import imgI1 from "@/assets/LS-Logo.png";
import imgJ1 from "@/assets/LS-Logo.png";
import imgK1 from "@/assets/LS-Logo.png";
import imgL1 from "@/assets/LS-Logo.png";
import imgM1 from "@/assets/LS-Logo.png";
import imgN1 from "@/assets/LS-Logo.png";
import imgO1 from "@/assets/LS-Logo.png";
import imgP1 from "@/assets/LS-Logo.png";
import imgQ1 from "@/assets/LS-Logo.png";

/* =========================
   TYPES
   ========================= */

interface ImageItem {
  id: number;
  src: string;
  alt: string;
}

interface AppendixPageProps {
  label: string;
  title: string;
  images: ImageItem[];
}

/* =========================
   MAIN COMPONENT
   ========================= */

function AppendixPage({ label, title, images }: AppendixPageProps) {
  const [lightbox, setLightbox] = useState<number | null>(null);

  const selectedImage = images.find((img) => img.id === lightbox);

  return (
    <div className="space-y-6">
      <FadeInSection>
        <div>
          <p className="text-xs uppercase tracking-wider text-muted-foreground mb-1">
            {label}
          </p>
          <h1 className="font-heading text-2xl font-bold tracking-tight">
            {title}
          </h1>
        </div>
      </FadeInSection>

      {/* GRID */}
      <StaggerContainer className="grid grid-cols-2 gap-3">
        {images.map((img) => (
          <StaggerItem key={img.id}>
            <button
              onClick={() => setLightbox(img.id)}
              className="overflow-hidden rounded-lg border border-border bg-card aspect-[3/4] hover:border-primary/40 transition"
            >
              <img
                src={img.src}
                alt={img.alt}
                className="w-full h-full object-cover"
              />
            </button>
          </StaggerItem>
        ))}
      </StaggerContainer>

      {/* LIGHTBOX */}
      <AnimatePresence>
        {lightbox !== null && selectedImage && (
          <motion.div
            className="fixed inset-0 bg-black/80 z-50 flex items-center justify-center p-4"
            onClick={() => setLightbox(null)}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <motion.div
              className="relative max-w-3xl w-full"
              onClick={(e) => e.stopPropagation()}
              initial={{ scale: 0.9 }}
              animate={{ scale: 1 }}
              exit={{ scale: 0.9 }}
            >
              <button
                onClick={() => setLightbox(null)}
                className="absolute top-2 right-2 bg-white p-2 rounded"
              >
                <X />
              </button>

              <img
                src={selectedImage.src}
                alt={selectedImage.alt}
                className="w-full rounded-lg"
              />
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

/* =========================
   APPENDIX DATA (A → Q)
   ========================= */

const appendices = [
  {
    label: "Appendix A",
    title: "Evaluation Form",
    images: [{ id: 1, src: imgA1, alt: "Evaluation Form" }],
  },
  {
    label: "Appendix B",
    title: "Photocopy Registration Form",
    images: [{ id: 1, src: imgB1, alt: "Registration Form" }],
  },
  {
    label: "Appendix C",
    title: "Photocopy Validated ID",
    images: [{ id: 1, src: imgC1, alt: "Validated ID" }],
  },
  {
    label: "Appendix D",
    title: "Parent's Consent",
    images: [{ id: 1, src: imgD1, alt: "Parent Consent" }],
  },
  {
    label: "Appendix E",
    title: "Medical Certificate",
    images: [{ id: 1, src: imgE1, alt: "Medical Certificate" }],
  },
  {
    label: "Appendix F",
    title: "Certificate of Good Moral Character ",
    images: [{ id: 1, src: imgF1, alt: "Good Moral Character" }],
  },
  {
    label: "Appendix G",
    title: "Application Letter",
    images: [{ id: 1, src: imgG1, alt: "Application Letter" }],
  },
  {
    label: "Appendix H",
    title: "Endorsement Letter",
    images: [{ id: 1, src: imgH1, alt: "Endorsement Letter" }],
  },
  {
    label: "Appendix I",
    title: "Memorandum of Agreement",
    images: [{ id: 1, src: imgI1, alt: "MOA" }],
  },
  {
    label: "Appendix J",
    title: "Daily Time Record (Time Card)",
    images: [{ id: 1, src: imgJ1, alt: "DTR" }],
  },
  {
    label: "Appendix K",
    title: "Certificate of Completion",
    images: [{ id: 1, src: imgK1, alt: "Completion Certificate" }],
  },
  {
    label: "Appendix L",
    title: "Certificate of Clearance",
    images: [{ id: 1, src: imgL1, alt: "Clearance" }],
  },

  {
    label: "Appendix Q",
    title: "Curriculum Vitae",
    images: [{ id: 1, src: imgQ1, alt: "Portfolio Evaluation" }],
  },
];
/* =========================
   EXPORT PER PAGE (OPTIONAL)
   ========================= */

export const AppendixA = () => <AppendixPage {...appendices[0]} />;
export const AppendixB = () => <AppendixPage {...appendices[1]} />;
export const AppendixC = () => <AppendixPage {...appendices[2]} />;
export const AppendixD = () => <AppendixPage {...appendices[3]} />;
export const AppendixE = () => <AppendixPage {...appendices[4]} />;
export const AppendixF = () => <AppendixPage {...appendices[5]} />;
export const AppendixG = () => <AppendixPage {...appendices[6]} />;
export const AppendixH = () => <AppendixPage {...appendices[7]} />;
export const AppendixI = () => <AppendixPage {...appendices[8]} />;
export const AppendixJ = () => <AppendixPage {...appendices[9]} />;
export const AppendixK = () => <AppendixPage {...appendices[10]} />;
export const AppendixL = () => <AppendixPage {...appendices[11]} />;

export const AppendixQ = () => <AppendixPage {...appendices[12]} />;
