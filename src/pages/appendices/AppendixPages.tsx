import { useState } from "react";
import { X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { FadeInSection, StaggerContainer, StaggerItem } from "@/components/Animations";

interface AppendixPageProps {
  label: string;
  title: string;
}

function AppendixPage({ label, title }: AppendixPageProps) {
  const [lightbox, setLightbox] = useState<number | null>(null);

  const images = [1, 2, 3, 4].map((i) => ({
    id: i,
    alt: `${label} - Document ${i}`,
  }));

  return (
    <div className="space-y-6">
      <FadeInSection>
        <div>
          <p className="text-xs uppercase tracking-wider text-muted-foreground mb-1">{label}</p>
          <h1 className="font-heading text-2xl font-bold tracking-tight">{title}</h1>
        </div>
      </FadeInSection>

      <StaggerContainer className="grid grid-cols-2 gap-3">
        {images.map((img) => (
          <StaggerItem key={img.id}>
            <button
              onClick={() => setLightbox(img.id)}
              className="card-clean rounded-lg border border-border bg-card aspect-[3/4] flex items-center justify-center hover:border-primary/40 transition-colors cursor-pointer w-full"
            >
              <div className="text-center">
                <div className="w-12 h-16 bg-muted rounded mx-auto mb-2" />
                <p className="text-xs text-muted-foreground">{img.alt}</p>
              </div>
            </button>
          </StaggerItem>
        ))}
      </StaggerContainer>

      <AnimatePresence>
        {lightbox !== null && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-0 bg-background/80 backdrop-blur-sm z-50 flex items-center justify-center p-4"
            onClick={() => setLightbox(null)}
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              transition={{ duration: 0.25, ease: "easeOut" }}
              className="relative max-w-lg w-full card-clean rounded-lg border border-border bg-card aspect-[3/4] flex items-center justify-center"
              onClick={(e) => e.stopPropagation()}
            >
              <button
                onClick={() => setLightbox(null)}
                className="absolute top-3 right-3 h-8 w-8 rounded-md bg-muted flex items-center justify-center hover:bg-accent transition-colors"
              >
                <X className="h-4 w-4" />
              </button>
              <p className="text-muted-foreground text-sm">
                {label} - Document {lightbox}
              </p>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

export function AppendixA() {
  return <AppendixPage label="Appendix A" title="Application Letter & Endorsement" />;
}

export function AppendixB() {
  return <AppendixPage label="Appendix B" title="Daily Time Records" />;
}

export function AppendixC() {
  return <AppendixPage label="Appendix C" title="Performance Evaluation" />;
}

export function AppendixD() {
  return <AppendixPage label="Appendix D" title="Photo Documentation" />;
}
