import { MapPin, Clock, Calendar, Building2, Timer } from "lucide-react";
import { FadeInSection, StaggerContainer, StaggerItem } from "@/components/Animations";

export default function Chapter1() {
  return (
    <div className="space-y-8">
      <FadeInSection>
        <div>
          <p className="text-xs uppercase tracking-wider text-muted-foreground mb-1">Chapter 1</p>
          <h1 className="font-heading text-2xl font-bold tracking-tight">Introduction</h1>
        </div>
      </FadeInSection>

      <FadeInSection delay={0.1}>
        <section className="space-y-4">
          <h2 className="font-heading text-lg font-semibold">Importance of Internship</h2>
          <p className="text-muted-foreground text-sm leading-relaxed">
            The On-the-Job Training (OJT) program serves as a vital bridge between academic learning
            and professional practice. It provides students with hands-on experience, allowing them to
            apply theoretical knowledge in a real-world work environment. Through this program, students
            gain industry exposure, develop professional skills, and build valuable networks that will
            contribute to their career growth.
          </p>
        </section>
      </FadeInSection>

      <FadeInSection delay={0.15}>
        <section className="space-y-4">
          <h2 className="font-heading text-lg font-semibold">Objectives of OJT</h2>
          <ul className="space-y-2 text-sm text-muted-foreground list-disc list-inside">
            <li>Apply academic knowledge in a professional work setting</li>
            <li>Develop technical and interpersonal skills relevant to the IT industry</li>
            <li>Gain practical experience in system development, documentation, and technical support</li>
            <li>Build professional work ethics and discipline</li>
            <li>Establish connections with professionals in the field</li>
          </ul>
        </section>
      </FadeInSection>

      <FadeInSection delay={0.2}>
        <section className="space-y-4">
          <h2 className="font-heading text-lg font-semibold">Time and Place of OJT</h2>

          <div className="card-clean rounded-lg border border-border overflow-hidden">
            <iframe
              title="OJT Location Map"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3872.0!2d120.73!3d12.35!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2sSan+Jose+Occidental+Mindoro!5e0!3m2!1sen!2sph!4v1700000000000!5m2!1sen!2sph"
              width="100%"
              height="250"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              className="w-full"
            />
          </div>

          <StaggerContainer className="grid gap-3 sm:grid-cols-2">
            {[
              { icon: Building2, label: "Agency", value: "OMSC, SJ Campus - Campus Director's Office" },
              { icon: MapPin, label: "Address", value: "Rizal Street, San Jose, Occidental Mindoro" },
              { icon: Clock, label: "Office Hours", value: "8:00 AM – 12:00 PM and 1:00 PM – 5:00 PM" },
              { icon: Timer, label: "Duration", value: "486 Hours" },
              { icon: Calendar, label: "Date Started", value: "January 21, 2025" },
              { icon: Calendar, label: "Date Ended", value: "April 06, 2025" },
            ].map(({ icon: Icon, label, value }) => (
              <StaggerItem key={label}>
                <div className="card-clean rounded-lg border border-border bg-card p-3.5 flex items-start gap-3">
                  <Icon className="h-4 w-4 text-primary mt-0.5 shrink-0" />
                  <div>
                    <p className="text-xs text-muted-foreground">{label}</p>
                    <p className="text-sm font-medium mt-0.5">{value}</p>
                  </div>
                </div>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </section>
      </FadeInSection>
    </div>
  );
}
