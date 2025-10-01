import Image from "next/image";
import { Poppins } from "next/font/google";
import styles from "./page.module.css";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "600", "700", "800"],
});

export const metadata = { title: "Tarun Thakur – Codoxy Solutions" };

export default function TarunThakur() {
  return (
    <main className={`${styles.wrap} ${poppins.className}`}>
      {/* Top row */}
      <section className={styles.grid}>
        {/* LEFT */}
        <aside className={styles.leftCol}>
          <div className={styles.photoCard}>
            <Image
              src="/team/Tarun.png" // put your image here: /public/tarun.jpg
              alt="Tarun Thakur"
              width={500}
              height={500}
              className={styles.photo}
              priority
            />
          </div>

          <div className={styles.quickCard}>
            <h3 className={styles.quickTitle}>
              <span className={styles.accent} />
              Quick Contact
            </h3>

            <ul className={styles.quickList}>
              <li className={styles.quickItem}>
                <MailIcon />
                <div>
                  <div className={styles.quickLabel}>tarun.thakur@codoxysolutions.com</div>
                </div>
              </li>
              <li className={styles.quickItem}>
                <PhoneIcon />
                <div>
                  <div className={styles.quickLabel}>(+91) 9993408372</div>
                </div>
              </li>
              <li className={styles.quickItem}>
                <LinkedInIcon />
                <div className={styles.quickLabel}></div>
              </li>
            </ul>
          </div>
        </aside>

        {/* RIGHT */}
        <section className={styles.rightCol}>
          <p className={styles.role}>Technology Lead</p>
          <h1 className={styles.name}>Tarun Thakur</h1>
          <p className={styles.summary}>
            Experienced Software Engineer with 8+ years in ReactJS and front-end technologies.
            Skilled in Agile methodology, developing scalable components, and managing deliverables
            in tight deadlines.
          </p>

          <h2 className={styles.sectionTitle}>Professional Skills</h2>

          <div className={styles.skillsGrid}>
            <Skill label="Planning" value={80} />
            <Skill label="Consulting" value={95} />
            <Skill label="Management" value={89} />
            <Skill label="Development" value={90} />
          </div>

          <h2 className={styles.sectionTitle}>Experience & Activities</h2>

          <div className={styles.bodyText}>
            <p>
              An accomplished Software Engineer with over 8 years of extensive experience in software
              development, focusing on ReactJS and front-end technologies. Adept at developing scalable
              and agile-based functional components and modules that ensure a smooth end-user experience.
              Proficient in Agile methodology, actively participating in Scrum calls and engaging in
              regular client interactions. Demonstrated expertise in planning, tracking, and managing
              deliverables for over 15 short-term sprints and more than 10 long-term deployments,
              consistently meeting tight deadlines. Experienced in creating and extending REST APIs for
              seamless integration with third-party applications.
            </p>
            <p>
              Proficient in a range of programming languages and frameworks, including ReactJS,
              JavaScript, AJAX, jQuery, Node.js, MVC, SQL, REST web services, microservices, and AWS.
              Utilizes a variety of tools and utilities such as Visual Studio Code, AWS Cloud9, AWS
              Workspace, and Excel. Well-versed in technologies like Bootstrap, HTML5, and CSS3, and
              experienced in working with databases like MySQL and DynamoDB. Committed to Agile
              development methodologies, particularly Scrum, ensuring efficient and effective project
              execution.
            </p>
          </div>
        </section>
      </section>
    </main>
  );
}

/* ---------- small inline SVG icons ---------- */
function MailIcon() {
  return (
    <svg width="22" height="22" viewBox="0 0 24 24" aria-hidden="true">
      <rect x="3" y="5" width="18" height="14" rx="3" fill="none" stroke="#000" strokeWidth="2" />
      <path d="M4 7l8 6 8-6" fill="none" stroke="#000" strokeWidth="2" strokeLinecap="round" />
    </svg>
  );
}
function PhoneIcon() {
  return (
    <svg width="22" height="22" viewBox="0 0 24 24" aria-hidden="true">
      <path
        d="M6 4l4 4-2 2c1.7 3 4.3 5.6 7.3 7.3l2-2 4 4-2 2c-1.2 1.2-3 1.6-4.6.7C9.7 20.3 3.7 14.3 2.1 7.3c-.4-1.6 0-3.4 1.2-4.6L6 2l0 0z"
        fill="none"
        stroke="#000"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}
function LinkedInIcon() {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" aria-hidden="true">
      <path d="M4.98 3.5C4.98 4.88 3.86 6 2.5 6S0 4.88 0 3.5 1.12 1 2.5 1 4.98 2.12 4.98 3.5zM.5 8h4V23h-4V8zm7.5 0h3.8v2.1h.1c.5-1 1.8-2.1 3.7-2.1 4 0 4.7 2.6 4.7 6V23h-4v-7.2c0-1.7 0-3.8-2.3-3.8s-2.6 1.8-2.6 3.7V23H8V8z" fill="#eb5a0a"/>
    </svg>
  );
}

/* ---------- small Skill component ---------- */
function Skill({ label, value }: { label: string; value: number }) {
  return (
    <div className={styles.skill}>
      <div className={styles.skillTop}>
        <span>{label}</span>
        <span>{value}%</span>
      </div>
      <div className={styles.progress}>
        <div className={styles.progressFill} style={{ width: `${value}%` }}>
          <span className={styles.knob} />
        </div>
      </div>
    </div>
  );
}
