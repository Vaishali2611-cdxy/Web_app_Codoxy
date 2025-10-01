import Image from "next/image";
import styles from "./page.module.css";

export const metadata = { title: "Pankaj Sharma – Profile" };

export default function PankajSharmaPage() {
  return (
    <main className={styles.wrap}>
      <section className={styles.grid}>
        {/* LEFT */}
        <aside className={styles.leftCol}>
          <div className={styles.photoCard}>
            <Image
              src="/team/Pankaj.png"   // put your image at /public/pankaj.jpg
              alt="Pankaj Sharma"
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
                <span className={styles.quickValue}>pankaj.s987@gmail.com</span>
              </li>
              <li className={styles.quickItem}>
                <LinkedInIcon />
                <span className={styles.quickValue}></span>
              </li>
            </ul>
          </div>
        </aside>

        {/* RIGHT */}
        <section className={styles.rightCol}>
          <p className={styles.role}>Global Delivery Manager</p>
          <h1 className={styles.name}>Pankaj Sharma</h1>
          <p className={styles.summary}>
            Experienced IT Consultant with 15 years of expertise in project management, agile
            implementation, and QA automation. Passionate about technology and fostering inclusive
            work environments.
          </p>

          <h2 className={styles.sectionTitle}>Experience & Activities</h2>

          <div className={styles.bodyText}>
            <p>
              As an IT Consultant with 15 years of experience, I bring a wealth of expertise in
              project management, people management, agile implementation, end-to-end project
              deliveries, and QA automation. My passion for technology is complemented by a strong
              dedication to connecting with others, embracing the philosophy of empathy over
              judgment.
            </p>
            <p>
              Project management and QA automation are the cornerstones of my leadership approach. I
              thrive on creating inclusive and supportive work environments, recognizing that a
              motivated workforce is crucial for success. By prioritizing understanding individual
              needs and aspirations, I ensure that team members are not only productive but also
              engaged and satisfied in their roles.
            </p>
            <p>
              My extensive experience includes leading diverse teams through complex projects,
              implementing agile methodologies to enhance efficiency and adaptability, and ensuring
              the highest standards of quality through robust QA automation practices. I excel in
              fostering collaboration, driving innovation, and delivering results that exceed
              expectations.
            </p>
            <p>
              With a deep commitment to both technological excellence and human connection, I strive
              to create environments where every team member feels valued and empowered to contribute
              their best work. My holistic approach to IT consulting combines technical expertise
              with a compassionate leadership style, resulting in successful projects and thriving
              teams.
            </p>
          </div>
        </section>
      </section>
    </main>
  );
}

/* ---------- icons ---------- */
function MailIcon() {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" aria-hidden="true">
      <rect x="3" y="5" width="18" height="14" rx="3" fill="none" stroke="#111" strokeWidth="2" />
      <path d="M4 7l8 6 8-6" fill="none" stroke="#111" strokeWidth="2" strokeLinecap="round" />
    </svg>
  );
}
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
