import { useState } from "react";
import { X, ChevronLeft, ChevronRight } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import {
  FadeInSection,
  StaggerContainer,
  StaggerItem,
} from "@/components/Animations";

/* =========================
   📸 IMAGES
   ========================= */

import imgA1 from "@/assets/appendix/A.jpg";

import imgB1 from "@/assets/appendix/ENROLLS.png";
import imgC1 from "@/assets/appendix/valid-id1.jpg";
import imgC2 from "@/assets/appendix/valid-id2.jpg";

import imgD1 from "@/assets/appendix/D.jpg";
import imgE1 from "@/assets/appendix/MEDCERT.jpg";
import imgF1 from "@/assets/appendix/F.jpg";
import imgG1 from "@/assets/appendix/G.jpg";
import imgH1 from "@/assets/appendix/G.jpg";
import imgI1 from "@/assets/appendix/moa1.jfif";
import imgI2 from "@/assets/appendix/moa2.jfif";
import imgI3 from "@/assets/appendix/moa3.jfif";
import imgI4 from "@/assets/appendix/moa4.jfif";
import imgI5 from "@/assets/appendix/moa5.jfif";

import imgJ1 from "@/assets/appendix/dtr1.png";
import imgJ2 from "@/assets/appendix/dtr2.png";
import imgJ3 from "@/assets/appendix/dtr3.png";
import imgK1 from "@/assets/appendix/CERTOFCOMPLETION.jfif";
import imgL1 from "@/assets/LS-Logo.png";
import imgQ1 from "@/assets/appendix/Q1.jpg";
import imgQ2 from "@/assets/appendix/Q-2.jpg";

import codeofethics from "@/assets/appendix/APPENDIX-0.png";
import preservice from "@/assets/appendix/PRE-SEM.jpg";
import evaluation from "@/assets/appendix/APPENDIXQ.jfif";
import CLEARANCE from "@/assets/appendix/CERTOFCLEARANCE.png";
import oficework from "@/assets/appendix/image-works/1.jfif";
import oficework1 from "@/assets/appendix/image-works/2.jfif";
import oficework2 from "@/assets/appendix/image-works/3.jfif";
import oficework3 from "@/assets/appendix/image-works/4.jfif";
import oficework4 from "@/assets/appendix/image-works/5.jfif";
import oficework5 from "@/assets/appendix/image-works/6.jfif";
import oficework6 from "@/assets/appendix/image-works/7.jfif";
import oficework7 from "@/assets/appendix/image-works/8.jfif";
import oficework8 from "@/assets/appendix/image-works/9.jfif";
import oficework9 from "@/assets/appendix/image-works/10.jfif";
import oficework10 from "@/assets/appendix/image-works/11.jfif";
import oficework11 from "@/assets/appendix/image-works/12.jfif";
import oficework12 from "@/assets/appendix/image-works/13.jfif";
import oficework13 from "@/assets/appendix/image-works/14.jfif";

/* =========================
   TYPES
   ========================= */

interface ImageItem {
  id: number;
  src: string;
  alt: string;
}

interface Appendix {
  label: string;
  title: string;
  images: ImageItem[];
}

/* =========================
   DATA
   ========================= */
const appendices: Appendix[] = [
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
    images: [
      { id: 1, src: imgC1, alt: "Validated ID Front" },
      { id: 2, src: imgC2, alt: "Validated ID Back" },
    ],
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
    title: "Certificate of Good Moral Character",
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
    images: [
      { id: 1, src: imgI1, alt: "MOA" },
      { id: 2, src: imgI2, alt: "MOA" },
      { id: 3, src: imgI3, alt: "MOA" },
      { id: 4, src: imgI4, alt: "MOA" },
      { id: 5, src: imgI5, alt: "MOA" },
    ],
  },
  {
    label: "Appendix J",
    title: "Daily Time Record (DTR)",
    images: [
      { id: 1, src: imgJ1, alt: "DTR" },
      { id: 2, src: imgJ2, alt: "DTR" },
      { id: 3, src: imgJ3, alt: "DTR" },
    ],
  },
  {
    label: "Appendix K",
    title: "Certificate of Completion",
    images: [{ id: 1, src: imgK1, alt: "Completion Certificate" }],
  },
  {
    label: "Appendix L",
    title: "Certificate of Clearance",
    images: [{ id: 1, src: CLEARANCE, alt: "Clearance" }],
  },

  /* =========================
     🔥 ADDED MISSING ONES
     ========================= */

  {
    label: "Appendix M",
    title: "Pre-Service Seminar Pictures",
    images: [{ id: 1, src: preservice, alt: "pre-service seminar" }],
  },
  {
    label: "Appendix N",
    title: "Office/Field Works Documentation",
    images: [
      { id: 1, src: oficework13, alt: "Office Work 1" },
      { id: 2, src: oficework2, alt: "Office Work 2" },
      { id: 3, src: oficework3, alt: "Office Work 3" },
      { id: 4, src: oficework4, alt: "Office Work 4" },
      { id: 5, src: oficework5, alt: "Office Work 5" },
      { id: 6, src: oficework6, alt: "Office Work 6" },
      { id: 7, src: oficework7, alt: "Office Work 7" },
      { id: 8, src: oficework8, alt: "Office Work 8" },
      { id: 9, src: oficework9, alt: "Office Work 9" },
      { id: 10, src: oficework10, alt: "Office Work 10" },
      { id: 11, src: oficework11, alt: "Office Work 11" },
      { id: 12, src: oficework12, alt: "Office Work 12" },
      { id: 13, src: oficework1, alt: "Office Work 13" },
    ],
  },

  {
    label: "Appendix O",
    title: "Code of Ethics for CAST Internship",
    images: [{ id: 1, src: codeofethics, alt: "Code of Ethics" }], // TEXT ONLY (handled below UI mo)
  },

  {
    label: "Appendix P",
    title: "Curriculum Vitae",
    images: [
      { id: 1, src: imgQ1, alt: "CV 1" },
      { id: 2, src: imgQ2, alt: "CV 2" },
    ],
  },

  {
    label: "Appendix Q",
    title: "OJT Portfolio Evaluation Form",
    images: [{ id: 1, src: evaluation, alt: "Evaluation Form " }],
  },
];

/* =========================
   COMPONENT
   ========================= */

function AppendixPage({
  index,
  setIndex,
}: {
  index: number;
  setIndex: (i: number) => void;
}) {
  const [lightbox, setLightbox] = useState<number | null>(null);

  const current = appendices[index];
  const selectedImage = current.images.find((img) => img.id === lightbox);

  const next = () => {
    if (index < appendices.length - 1) setIndex(index + 1);
  };

  const prev = () => {
    if (index > 0) setIndex(index - 1);
  };

  return (
    <div className="space-y-6">
      {/* TITLE */}
      <FadeInSection>
        <div>
          <p className="text-xs uppercase tracking-wider text-muted-foreground mb-1">
            {current.label}
          </p>
          <h1 className="font-heading text-2xl font-bold tracking-tight">
            {current.title}
          </h1>
        </div>
      </FadeInSection>

      {/* GRID */}
      <StaggerContainer className="grid grid-cols-3 gap-4">
        {current.images.map((img) => (
          <StaggerItem key={img.id}>
            <button
              onClick={() => setLightbox(img.id)}
              className="group relative overflow-hidden rounded-lg border bg-card h-[460px] hover:border-primary/40 transition"
            >
              {/* IMAGE (SAME SIZE) */}
              <img
                src={img.src}
                alt={img.alt}
                className="w-full h-full object-cover"
              />

              {/* HOVER TEXT ONLY */}
              <div className="absolute inset-0 flex items-center justify-center bg-black/0 group-hover:bg-black/30 transition">
                <span className="text-white text-xs opacity-0 group-hover:opacity-100 transition">
                  Click to view full
                </span>
              </div>
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

      {/* NAVIGATION BUTTONS (BOTTOM) */}
      <div className="flex items-center justify-between pt-6 border-t mt-8">
        <button
          onClick={prev}
          disabled={index === 0}
          className="flex items-center gap-2 px-5 py-2 border rounded-lg bg-card disabled:opacity-40"
        >
          <ChevronLeft size={18} />
          Previous
        </button>

        <div className="text-sm text-muted-foreground">
          {index + 1} / {appendices.length}
        </div>

        <button
          onClick={next}
          disabled={index === appendices.length - 1}
          className="flex items-center gap-2 px-5 py-2 border rounded-lg bg-card disabled:opacity-40"
        >
          Next
          <ChevronRight size={18} />
        </button>
      </div>
    </div>
  );
}

/* =========================
   EXPORTS (HINDI NABUBURA)
   ========================= */

export const AppendixA = () => {
  const [index, setIndex] = useState(0);
  return <AppendixPage index={index} setIndex={setIndex} />;
};

export const AppendixB = () => {
  const [index, setIndex] = useState(1);
  return <AppendixPage index={index} setIndex={setIndex} />;
};

export const AppendixC = () => {
  const [index, setIndex] = useState(2);
  return <AppendixPage index={index} setIndex={setIndex} />;
};

export const AppendixD = () => {
  const [index, setIndex] = useState(3);
  return <AppendixPage index={index} setIndex={setIndex} />;
};

export const AppendixE = () => {
  const [index, setIndex] = useState(4);
  return <AppendixPage index={index} setIndex={setIndex} />;
};

export const AppendixF = () => {
  const [index, setIndex] = useState(5);
  return <AppendixPage index={index} setIndex={setIndex} />;
};

export const AppendixG = () => {
  const [index, setIndex] = useState(6);
  return <AppendixPage index={index} setIndex={setIndex} />;
};

export const AppendixH = () => {
  const [index, setIndex] = useState(7);
  return <AppendixPage index={index} setIndex={setIndex} />;
};

export const AppendixI = () => {
  const [index, setIndex] = useState(8);
  return <AppendixPage index={index} setIndex={setIndex} />;
};

export const AppendixJ = () => {
  const [index, setIndex] = useState(9);
  return <AppendixPage index={index} setIndex={setIndex} />;
};

export const AppendixK = () => {
  const [index, setIndex] = useState(10);
  return <AppendixPage index={index} setIndex={setIndex} />;
};

export const AppendixL = () => {
  const [index, setIndex] = useState(11);
  return <AppendixPage index={index} setIndex={setIndex} />;
};

export const AppendixM = () => {
  const [index, setIndex] = useState(12);
  return <AppendixPage index={index} setIndex={setIndex} />;
};

export const AppendixN = () => {
  const [index, setIndex] = useState(13);
  return <AppendixPage index={index} setIndex={setIndex} />;
};

export const AppendixO = () => {
  const [index, setIndex] = useState(14);
  return <AppendixPage index={index} setIndex={setIndex} />;
};

export const AppendixP = () => {
  const [index, setIndex] = useState(15);
  return <AppendixPage index={index} setIndex={setIndex} />;
};

export const AppendixQ = () => {
  const [index, setIndex] = useState(16);
  return <AppendixPage index={index} setIndex={setIndex} />;
};
