import fcHero from "../../../assets/case-studies/fc-hero.webp";
import fcProduct from "../../../assets/case-studies/fc-product.webp";
import { CaseImage, CaseShell } from "./CaseStudyLayout.jsx";

export default function FcMotivateCaseStudy({ onBack }) {
  return (
    <CaseShell
      className="case-fc"
      eyebrow="Mobile product · Sport"
      hero={fcHero}
      onBack={onBack}
      title="FC Motivate"
    >
      <main className="case-content">
        <section className="case-fc-summary case-reveal">
          <span className="case-store-pill">Open on App Store <b aria-hidden="true">→</b></span>
          <dl className="case-meta">
            <div>
              <dt>Categories</dt>
              <dd>Sport <i>•</i> Training</dd>
            </div>
            <div>
              <dt>Client</dt>
              <dd>VizhGroup</dd>
            </div>
          </dl>
        </section>

        <section className="case-copy case-reveal" id="case-overview" data-case-anchor="overview">
          <SectionTitle>Overview</SectionTitle>
          <p>
            FC Motivate - a soccer training app that seamlessly combines cutting-edge technology with targeted
            workouts to enhance players&apos; technical abilities.
          </p>
          <p>
            implemented a user-friendly interface, incorporating video tutorials, interactive drills, and real-time
            feedback mechanisms.
          </p>
          <p>
            FC Motivate utilizes position-specific algorithms to tailor training regimens for goalkeepers, defenders,
            midfielders, and forwards. The app analyzes player data and adapts workouts to address the specific
            technical requirements of each position on the field.
          </p>
        </section>

        <figure className="case-figure case-reveal" id="case-product" data-case-anchor="product">
          <CaseImage src={fcProduct} alt="FC Motivate mobile application screens" />
        </figure>
      </main>
    </CaseShell>
  );
}
