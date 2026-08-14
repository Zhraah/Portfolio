import sportsFlow from "../../../assets/case-studies/sports-flow.webp";
import sportsHero from "../../../assets/case-studies/sports-hero.webp";
import sportsIconConstraints from "../../../assets/case-studies/sports-icon-constraints.webp";
import sportsIconContext from "../../../assets/case-studies/sports-icon-context.webp";
import sportsIconProblem from "../../../assets/case-studies/sports-icon-problem.webp";
import sportsMonitoring from "../../../assets/case-studies/sports-monitoring.webp";
import sportsOverview from "../../../assets/case-studies/sports-overview.webp";
import sportsVerification from "../../../assets/case-studies/sports-verification.webp";
import { CaseImage, CaseShell, SectionTitle } from "./CaseStudyLayout.jsx";

export default function SportsAutomationCaseStudy({ onBack }) {
  return (
    <CaseShell
      className="case-sports"
      eyebrow="Mobile product · Operations"
      hero={sportsHero}
      onBack={onBack}
      title="Sports Automation System"
    >
      <main className="case-content">
        <figure className="case-figure case-reveal" id="case-overview" data-case-anchor="overview">
          <CaseImage src={sportsOverview} alt="Sports Automation System outcomes" />
        </figure>

        <section className="case-copy case-reveal" id="case-context" data-case-anchor="context">
          <SectionTitle icon={sportsIconContext}>Background &amp; Context</SectionTitle>
          <p>
            This application was designed to manage and reserve sports facilities in high-traffic environments such as
            stadiums and large complexes. The primary users include operators, supervisors, and staff members with a
            wide range of technical proficiency and age diversity.
          </p>
        </section>

        <section className="case-split case-reveal">
          <article>
            <SectionTitle icon={sportsIconConstraints}>Key Constraints</SectionTitle>
            <ul className="case-list">
              <li>Usage in crowded and time-sensitive environments</li>
              <li>Limitations caused by outdated hardware and handheld devices</li>
              <li>Requirement to preserve the Mobarakeh Steel visual identity</li>
              <li>High sensitivity regarding employee data security</li>
            </ul>
          </article>
          <article>
            <SectionTitle icon={sportsIconContext}>Research Methods</SectionTitle>
            <ul className="case-list">
              <li>Field research conducted in real usage environments</li>
              <li>Interviews with operators and supervisors</li>
              <li>Structured questionnaires</li>
            </ul>
          </article>
        </section>

        <section className="case-copy case-reveal" id="case-problem" data-case-anchor="problem">
          <SectionTitle icon={sportsIconProblem}>Problem Definition</SectionTitle>
          <h3>Complex Facility Registration Flow</h3>
          <p>
            The processes for registering and managing sports facilities in the previous version of the system were
            highly complex. Users often became confused at different stages, as task flows were neither clear nor
            predictable. This directly led to slower operation times and an increase in user errors.
          </p>
          <h3>Designed for High-Traffic Environments</h3>
          <p>
            This application was designed for high-traffic environments such as stadiums and large sports complexes.
            In these settings, the top priority was enabling fast, seamless reservations without causing delays for
            spectators—something that could only be achieved through a well-structured user experience and optimized
            interaction flows.
          </p>
        </section>

        <figure className="case-figure case-reveal">
          <CaseImage src={sportsFlow} alt="Sports Automation System solution and reservation screens" />
        </figure>

        <section className="case-copy case-reveal" id="case-solution" data-case-anchor="solution">
          <h3>Legacy Handheld Devices</h3>
          <p>
            One of the biggest challenges was the widespread use of outdated handheld devices by operators and
            supervisors. The design needed to remain compatible with modern design principles while accommodating
            hardware limitations, ensuring smooth and reliable performance across these devices.
          </p>
          <h3 className="case-accent-heading">Solution</h3>
          <ul className="case-list">
            <li>Light weight UI with no heavy visual elements</li>
            <li>Avoidance of resource-intensive animations</li>
            <li>Design optimized for low-resolution displays</li>
          </ul>
          <h3>Reporting &amp; Monitoring Improvements</h3>
          <p>
            One of the main issues for supervisors was the poor readability of reports in the previous structure.
            Reports were presented in a tabular format, making analysis and review time-consuming and difficult.
          </p>
        </section>

        <figure className="case-figure case-reveal">
          <CaseImage src={sportsMonitoring} alt="Sports reporting and monitoring improvements" />
        </figure>

        <section className="case-copy case-reveal" id="case-validation" data-case-anchor="validation">
          <h3>Verification Status</h3>
          <p>
            Personnel verification needed to be fast and error-free, allowing supervisors to easily identify the
            status.
          </p>
        </section>

        <figure className="case-figure case-reveal">
          <CaseImage src={sportsVerification} alt="Sports personnel verification before and after redesign" />
        </figure>

        <section className="case-takeaways case-reveal" id="case-outcome" data-case-anchor="outcome">
          <p>
            Throughout the design and redesign of this application, all key challenges and project constraints were
            carefully considered:
          </p>
          <ul>
            <li>
              The user age range was very broad, making the system usable for everyone from young users to retirees.
            </li>
            <li>
              RFID technology was implemented clearly and intuitively, ensuring error-free interaction with sports
              cards.
            </li>
            <li>
              Privacy and security of staff information were strictly maintained, with sensitive data remaining
              protected and access appropriately restricted.
            </li>
          </ul>
        </section>
      </main>
    </CaseShell>
  );
}
