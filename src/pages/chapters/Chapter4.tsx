import { CheckCircle, Lightbulb } from "lucide-react";
import { FadeInSection } from "@/components/Animations";

import evaluationImg from "@/assets/OJT4.jpg";

export function Chapter4() {
  return (
    <div className="space-y-8">
      {/* HEADER */}
      <FadeInSection>
        <div>
          <p className="text-xs uppercase text-muted-foreground">Chapter 4</p>
          <h1 className="text-2xl font-bold">
            Assessment of the Practicum Program
          </h1>
        </div>
      </FadeInSection>

      {/* ===================== */}
      {/* EVALUATION FORM IMAGE */}
      {/* ===================== */}
      <FadeInSection delay={0.1}>
        <div className="space-y-4">
          <div className="flex items-center gap-2">
            <CheckCircle className="w-5 h-5 text-muted-foreground" />
            <h2 className="text-lg font-semibold">
              Student Internship Evaluation Form
            </h2>
          </div>

          <div className="border rounded-xl overflow-hidden bg-background/50">
            <img
              src={evaluationImg}
              alt="Student Internship Evaluation Form"
              className="w-full object-cover"
            />
          </div>
        </div>
      </FadeInSection>
    </div>
  );
}
