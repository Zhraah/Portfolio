import bagitCover from "../../../assets/behance/bagit.jpg";
import dannaiCover from "../../../assets/behance/dannai.png";
import fcHero from "../../../assets/case-studies/fc-hero.webp";
import fcProduct from "../../../assets/case-studies/fc-product.webp";
import "../../../styles/project-case-studies.css";

const APP_STORE_URL = "https://apps.apple.com/us/app/fc-motivate/id6448851857";

const moreWorks = [
  {
    title: "Dannai",
    tags: ["Chat Bot", "Landing"],
    image: dannaiCover,
    href: "https://www.behance.net/gallery/217380391/Dannai-Ai-Chatbot",
  },
  {
    title: "Bagit",
    tags: ["Application", "Social Media"],
    image: bagitCover,
    href: "https://www.behance.net/gallery/232703025/Bagit-App-UIUX-Project",
  },
];

export default function FcMotivateCaseStudy({ onBack }) {
  return (
    <article className="project-case-study case-fc case-fc-reference">
      <header className="fc-reference-hero" id="case-cover" data-case-anchor="cover">
        <img src={fcHero} alt="FC Motivate football training application" />
      </header>

      <main className="fc-reference-sheet">
        <button type="button" className="fc-reference-close" onClick={onBack} aria-label="Close FC Motivate project">
          <span aria-hidden="true">×</span>
        </button>

        <div className="fc-reference-inner">
          <section className="fc-reference-summary case-reveal">
            <h1>FC Motivate</h1>

            <a className="fc-reference-store" href={APP_STORE_URL} target="_blank" rel="noreferrer">
              <span>Open on App Store</span>
              <span aria-hidden="true">→</span>
            </a>

            <dl className="fc-reference-meta">
              <div>
                <dt>Categories</dt>
                <dd>
                  <span>Sport</span>
                  <i aria-hidden="true">•</i>
                  <span>Training</span>
                </dd>
              </div>
              <div>
                <dt>Client</dt>
                <dd>VizhGroup</dd>
              </div>
            </dl>
          </section>

          <section className="fc-reference-overview case-reveal" id="case-overview" data-case-anchor="overview">
            <h2>Overview</h2>
            <div>
              <p>
                FC Motivate - a soccer training app that seamlessly combines cutting-edge technology with targeted
                workouts to enhance players&apos; technical abilities.
              </p>
              <p>
                implemented a user-friendly interface, incorporating video tutorials, interactive drills, and
                real-time feedback mechanisms.
              </p>
              <p>
                FC Motivate utilizes position-specific algorithms to tailor training regimens for goalkeepers,
                defenders, midfielders, and forwards. The app analyzes player data and adapts workouts to address the
                specific technical requirements of each position on the field.
              </p>
            </div>
          </section>

          <figure className="fc-reference-product case-reveal" id="case-product" data-case-anchor="product">
            <img src={fcProduct} alt="FC Motivate mobile application screens" loading="lazy" />
          </figure>
        </div>
      </main>

      <section
        className="fc-reference-more"
        id="case-more-works"
        data-case-anchor="more-works"
        aria-labelledby="fc-more-works-title"
      >
        <div className="fc-reference-inner">
          <h2 id="fc-more-works-title">More works</h2>

          <div className="fc-reference-more-grid">
            {moreWorks.map((item) => (
              <a key={item.title} href={item.href} target="_blank" rel="noreferrer" className="fc-reference-work-card">
                <img src={item.image} alt={`${item.title} project cover`} loading="lazy" />
                <span className="fc-reference-work-shade" aria-hidden="true" />
                <span className="fc-reference-work-copy">
                  <strong>{item.title}</strong>
                  <span>
                    {item.tags.map((tag) => (
                      <em key={tag}>{tag}</em>
                    ))}
                  </span>
                </span>
              </a>
            ))}
          </div>
        </div>
      </section>
    </article>
  );
}
