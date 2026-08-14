import novaAfter from "../../../assets/case-studies/nova-after.webp";
import novaBefore from "../../../assets/case-studies/nova-before.webp";
import novaHero from "../../../assets/case-studies/nova-hero.webp";
import novaIconAtomic from "../../../assets/case-studies/nova-icon-atomic.webp";
import novaIconConflicts from "../../../assets/case-studies/nova-icon-conflicts.webp";
import novaIconFindings from "../../../assets/case-studies/nova-icon-findings.webp";
import novaIconInspiration from "../../../assets/case-studies/nova-icon-inspiration.webp";
import novaIconOverview from "../../../assets/case-studies/nova-icon-overview.webp";
import novaIconPain from "../../../assets/case-studies/nova-icon-pain.webp";
import novaIconSolution from "../../../assets/case-studies/nova-icon-solution.webp";
import novaIconStep from "../../../assets/case-studies/nova-icon-step.webp";
import novaIconTesting from "../../../assets/case-studies/nova-icon-testing.webp";
import novaIconValidation from "../../../assets/case-studies/nova-icon-validation.webp";
import novaInspirationOne from "../../../assets/case-studies/nova-inspiration-one.webp";
import novaInspirationTwo from "../../../assets/case-studies/nova-inspiration-two.webp";
import novaObjectives from "../../../assets/case-studies/nova-personas.webp";
import novaPersonas from "../../../assets/case-studies/nova-redundancy.webp";
import novaResearch from "../../../assets/case-studies/nova-research.webp";
import novaTesting from "../../../assets/case-studies/nova-testing.webp";
import { CaseImage, CaseShell, SectionTitle } from "./CaseStudyLayout.jsx";

export default function NovaCaseStudy({ onBack }) {
  return (
    <CaseShell
      className="case-nova"
      eyebrow="Enterprise product · Design system"
      hero={novaHero}
      onBack={onBack}
      title="Nova Design System"
    >
      <main className="case-content">
        <section className="case-copy case-reveal" id="case-overview" data-case-anchor="overview">
          <SectionTitle icon={novaIconOverview}>Overview</SectionTitle>
          <p>
            The Nova project is a data-driven CRM application designed with a focus on seamless and intuitive user
            experience. The system includes single-entity and multi-entity forms for data entry and management, and
            each product has an individual dashboard with visualized data, enabling users to quickly analyze the
            information they need. All products are connected through a central reference portal, where access and
            permissions are managed centrally, allowing users to interact with the system through clear and
            predictable workflows.
          </p>
        </section>

        <figure className="case-figure case-reveal">
          <CaseImage src={novaResearch} alt="Nova design system visual language" />
        </figure>

        <section className="case-copy case-reveal">
          <SectionTitle icon={novaIconStep} eyebrow="Step 1">
            The objective of building the design system.
          </SectionTitle>
        </section>

        <figure className="case-figure case-reveal">
          <CaseImage src={novaObjectives} alt="Nova technical constraints and design system objectives" />
        </figure>

        <section className="case-copy case-reveal" id="case-research" data-case-anchor="research">
          <SectionTitle icon={novaIconPain}>User Research &amp; System Analysis for Unified Design System</SectionTitle>
          <p>
            To understand existing systems and design a unified design system, I conducted user interviews with active
            system users. This helped me gain insight into user mental models, real usage scenarios, and usability
            challenges.
          </p>
          <h3>Bringing our research to life through 2 user personas.</h3>
          <p>
            The research revealed multiple user personas with significantly different contexts. These included office
            users working in administrative environments, industrial users operating in factory settings using
            handheld devices, and users with low-vision needs.
          </p>
          <p>This diversity highlighted the importance of flexibility and accessibility in the system design.</p>
        </section>

        <figure className="case-figure case-reveal">
          <CaseImage src={novaPersonas} alt="Two Nova user personas" />
        </figure>

        <section className="case-copy case-reveal">
          <SectionTitle icon={novaIconFindings}>Pain Points and Business Insights</SectionTitle>
          <p>
            By asking users to walk through their daily workflows, I identified key system pain points. In parallel, I
            spoke with team managers to better understand business data and operational logic, as system behavior
            varied across teams.
          </p>
          <p>
            For example, Human Resources workflows benefited from step-by-step forms focused on accuracy, while
            Logistics and Sales teams required fast and frictionless form submission due to time-sensitive operations
            in factory environments. These insights directly informed design decisions aligned with both user needs
            and business goals.
          </p>
        </section>

        <section className="case-findings case-reveal" id="case-findings" data-case-anchor="findings">
          <SectionTitle icon={novaIconConflicts}>Findings</SectionTitle>
          <div className="case-finding-grid">
            <article>
              <span>01</span>
              <h3>Inconsistency</h3>
              <p>
                Eight different teams were simultaneously developing their own applications, which created significant
                challenges in maintaining design consistency. Our product faced notable inconsistencies in colors,
                components, and design guidelines, leading to reduced visual cohesion, increased cognitive load for
                users, and confusion when interacting with different parts of the system. These issues were
                particularly detrimental to the product&apos;s scalability and the overall user experience across
                multiple modules.
              </p>
            </article>
            <article>
              <span>02</span>
              <h3>Redundancy</h3>
              <p>
                Without a centralized component library, designers often had to recreate components for different
                pages, resulting in repetitive work. This issue also extended to the implementation phase, as
                developers needed to spend additional time and effort rebuilding components. Additionally, the cost of
                redesigning each page posed a significant financial challenge for the organization.
              </p>
            </article>
            <article>
              <span>03</span>
              <h3>Conflicts</h3>
              <p>
                The guidelines and direction not defined so there was many conflicts in user experiences.; Also we
                faced many issues in communicating between design team and technical team
              </p>
            </article>
          </div>
        </section>

        <section className="case-copy case-reveal" id="case-testing" data-case-anchor="testing">
          <SectionTitle icon={novaIconTesting}>Usability Testing and UX Findings</SectionTitle>
          <p>
            To uncover additional usability issues in the existing system, we conducted usability testing with active
            users. Participants were asked to complete a specific task using the current system while their behavior
            and interactions were observed.
          </p>
        </section>

        <figure className="case-figure case-reveal">
          <CaseImage src={novaTesting} alt="Nova usability testing findings and proposed solution" />
        </figure>

        <section className="case-copy case-reveal" id="case-design-system" data-case-anchor="design-system">
          <SectionTitle icon={novaIconAtomic}>Atomic Design</SectionTitle>
          <p>We, as designers, use atomic design philosophy to approach design systems and products.</p>
          <ol className="case-steps">
            <li>Atoms</li>
            <li>Molecules</li>
            <li>Organisms</li>
            <li>Templates</li>
            <li>Pages</li>
          </ol>
        </section>

        <section className="case-copy case-reveal">
          <SectionTitle icon={novaIconInspiration}>Design System Inspiration and Customization</SectionTitle>
          <p>
            With a clear plan, we started extensive research on Design Systems, and since our product is an ERP, we
            focused on those tailored for it.
          </p>
          <ul className="case-list case-list-nova">
            <li>Universal theme</li>
            <li>SAP</li>
            <li>Odoo</li>
            <li>Redwood Oracle</li>
          </ul>
          <p>
            The primary source of inspiration for the design system was the Oracle Universal Theme. I aimed to leverage
            its existing components while adapting and customizing them to align with the Nova design system and
            project requirements.
          </p>
          <p>
            Through continuous testing and evaluation, I customized components to support different user flows while
            maintaining visual consistency and usability across the system. This approach allowed me to introduce new
            design patterns without compromising scalability.
          </p>
        </section>

        <div className="case-image-grid case-reveal">
          <CaseImage src={novaInspirationOne} alt="Nova light and dark design tokens" />
          <CaseImage src={novaInspirationTwo} alt="Nova typography scale" />
        </div>

        <section className="case-copy case-reveal" id="case-validation" data-case-anchor="validation">
          <SectionTitle icon={novaIconValidation}>Validation, Collaboration, and QA Process</SectionTitle>
          <p>
            To ensure correctness and usability, I conducted A/B testing with five users. This helped validate design
            decisions and compare interaction patterns in real usage scenarios.
          </p>
          <p>
            For complex areas such as the sidebar, I created multiple layered prototypes, allowing users to test and
            compare different navigation structures. Feedback from these sessions played a key role in refining the
            final solution.
          </p>
          <h3>Collaboration and QA Process</h3>
          <p>
            Throughout the process, I worked closely with the Project Manager to review progress and evaluate
            decisions. In parallel, I held continuous sessions with different teams, including presentation meetings,
            alignment discussions, and quality assurance reviews.
          </p>
          <p>
            During QA sessions, I reviewed new flows and design updates step by step with system owners from each team.
            This ensured that each change was validated from both a user experience and system logic perspective,
            allowing the project to progress incrementally from a strong foundation.
          </p>
        </section>

        <section className="case-copy case-reveal" id="case-outcome" data-case-anchor="outcome">
          <SectionTitle icon={novaIconSolution}>From Problem to Solution</SectionTitle>
          <p>
            The redesigned screen improves task clarity and interaction flow by making primary actions more visible
            and accessible. As a result, users can identify the correct path faster and complete their tasks with fewer
            errors and less reliance on support.
          </p>
        </section>

        <div className="case-compare case-reveal">
          <figure>
            <figcaption>Before</figcaption>
            <CaseImage src={novaBefore} alt="Nova interface before redesign" />
          </figure>
          <figure>
            <figcaption>After</figcaption>
            <CaseImage src={novaAfter} alt="Nova interface after redesign" />
          </figure>
        </div>
      </main>
    </CaseShell>
  );
}
