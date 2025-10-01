import Image from "next/image";
import styles from "./page.module.css";

export const metadata = { title: "Rajiv Shrivastava – Profile" };

export default function RajivShrivastavaPage() {
  return (
    <main className={styles.wrap}>
      <section className={styles.grid}>
        {/* LEFT */}
        <aside className={styles.leftCol}>
          <div className={styles.photoCard}>
            <Image
              src="/team/rajiv.webp"  // put your image at /public/rajiv.jpg
              alt="Rajiv Shrivastava"
              width={520}
              height={520}
              className={styles.photo}
              priority
            />
          </div>

          <div className={styles.quickCard}>
            <h3 className={styles.quickTitle}>
              <span className={styles.accentBar} />
              Quick Contact
            </h3>

            <ul className={styles.quickList}>
              <li className={styles.quickItem}>
                <LinkedInIcon />
                <span className={styles.quickValue}>in</span>
              </li>
            </ul>
          </div>
        </aside>

        {/* RIGHT */}
        <section className={styles.rightCol}>
          <p className={styles.role}>Sr. Associate Technology</p>
          <h1 className={styles.name}>Rajiv Shrivastava</h1>

          <p className={styles.summary}>
            I love application programming and web development. I’m passionate about travel, a food lover,
            and a yoga enthusiast.
          </p>

          <h2 className={styles.sectionTitle}>Experience & Activities</h2>

          <div className={styles.bodyText}>
            <p>
              <strong>Senior Associate – Technology with 8.5 years of experience in application programming and web development.</strong>{" "}
              Skilled in JavaScript, React, UI design, HTML, CSS, Git and CI/CD pipelines, Rajiv excels at
              building responsive, scalable, and user-focused solutions. Adept at collaborating in Agile environments,
              he brings a strong track record of delivering high-quality features on time while aligning with business
              requirements.
            </p>
            <p>
              Rajiv has extensive experience designing and implementing intuitive user interfaces, integrating
              modern JavaScript frameworks, and optimizing front-end performance. Proficient in using version control
              and deployment tools, he ensures streamlined development workflows and reliable releases. His deep
              understanding of software development practices enables him to drive projects from concept to production
              with precision and efficiency.
            </p>
            <p>
              A dedicated professional who thrives in dynamic environments, Rajiv combines technical expertise with
              excellent problem-solving skills and attention to detail. Outside of work, he is passionate about travel,
              a food lover, and a yoga enthusiast — always eager to explore new cultures, cuisines, and ways to stay
              balanced.
            </p>
          </div>
        </section>
      </section>
    </main>
  );
}

/* ---------- small inline icon ---------- */
function LinkedInIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" aria-hidden="true">
      <path
        d="M4.98 3.5C4.98 4.88 3.86 6 2.5 6S0 4.88 0 3.5 1.12 1 2.5 1 4.98 2.12 4.98 3.5zM.5 8h4v15h-4V8zm7.5 0h3.8v2.1h.1c.5-1 1.8-2.1 3.7-2.1 4 0 4.7 2.6 4.7 6V23h-4v-7.2c0-1.7 0-3.8-2.3-3.8s-2.6 1.8-2.6 3.7V23H8V8z"
        fill="#eb5a0a"
      />
    </svg>
  );
}
