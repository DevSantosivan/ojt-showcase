import { FadeInSection } from "@/components/Animations";
import logo from "@/assets/ls-logo.png";

export function Chapter2() {
  return (
    <div className="space-y-8">
      {/* HEADER WITH LOGO */}
      <FadeInSection>
        <div className="flex items-center gap-4">
          {/* LOGO */}
          <img
            src={logo}
            alt="LS Cable TV Logo"
            className="h-14 w-14 object-contain rounded-xl border bg-white p-2 shadow-sm"
          />

          {/* TITLE */}
          <div>
            <p className="text-xs uppercase text-muted-foreground">Chapter 2</p>
            <h1 className="text-2xl font-bold">Company Profile</h1>
          </div>
        </div>
      </FadeInSection>

      {/* Nature */}
      <FadeInSection delay={0.1}>
        <section className="space-y-3">
          <h2 className="text-lg font-semibold">Nature of the Agency</h2>
          <p className="text-sm text-muted-foreground">
            L&S Cable TV, Inc. provides cable television and internet services
            to local communities, ensuring reliable communication and access to
            information.
          </p>
        </section>
      </FadeInSection>

      {/* Mission & Vision */}
      <FadeInSection delay={0.2}>
        <section className="space-y-4">
          <h2 className="text-lg font-semibold">Mission and Vision</h2>

          <div className="grid gap-4 md:grid-cols-2">
            {/* Vision */}
            <div className="card-clean border rounded-lg p-5">
              <h3 className="font-medium mb-2">Vision</h3>
              <p className="text-sm text-muted-foreground">
                A premier institution producing globally competitive
                professionals.
              </p>
            </div>

            {/* Mission */}
            <div className="card-clean border rounded-lg p-5">
              <h3 className="font-medium mb-2">Mission</h3>
              <p className="text-sm text-muted-foreground">
                To provide quality education, research, and community service.
              </p>
            </div>
          </div>
        </section>
      </FadeInSection>

      {/* Goals Statement */}
      <FadeInSection delay={0.3}>
        <section className="space-y-3">
          <h2 className="text-lg font-semibold">Goals Statement</h2>

          <div className="card-clean border rounded-lg p-5">
            <ul className="list-disc pl-5 text-sm text-muted-foreground space-y-1">
              <li>Provide excellent academic program</li>
              <li>Good board performance</li>
              <li>Enhance student development program</li>
              <li>Strengthen faculty competence</li>
              <li>Produce quality research</li>
              <li>Provide need-based technical advisory services</li>
              <li>Increase revenue generation</li>
              <li>Improve organizational system</li>
              <li>Ensure transparency and good governance</li>
              <li>Develop human resources</li>
            </ul>
          </div>
        </section>
      </FadeInSection>

      {/* History with Images */}
      <FadeInSection delay={0.4}>
        <section className="space-y-3">
          <h2 className="text-lg font-semibold">
            History Background of the Agency
          </h2>

          <div className="card-clean border rounded-lg p-5 space-y-4">
            <p className="text-sm text-muted-foreground">
              L&S Cable TV, Inc. was established to provide quality cable and
              internet services to the community. Over the years, it has
              expanded its services and improved its technology to better serve
              its customers.
            </p>

            {/* Images */}
            <div className="grid grid-cols-2 gap-3">
              <div className="h-32 bg-muted rounded-md flex items-center justify-center text-xs">
                Image 1
              </div>
              <div className="h-32 bg-muted rounded-md flex items-center justify-center text-xs">
                Image 2
              </div>
            </div>
          </div>
        </section>
      </FadeInSection>

      {/* Organizational Chart */}
      <FadeInSection delay={0.5}>
        <section>
          <h2 className="text-lg font-semibold mb-3">Organizational Chart</h2>

          <div className="card-clean border rounded-lg p-6 text-center">
            Insert organizational chart image here
          </div>
        </section>
      </FadeInSection>
    </div>
  );
}
