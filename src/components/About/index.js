import styles from "./about.module.css";
import Skills from "../Skills";

function About() {
  return (
    <>
      <div className={styles.title_section}>
        <h1 className={styles.title}>&lt;About Me/&gt;</h1>
        <span />
      </div>
      <div className={styles.content}>
        <div className={styles.text_section}>
          <p className={styles.about_text}>
          Ever since I wrote my first line of code, I’ve been hooked on the thrill of building things that work. 
          To me, coding is not just a skill but a creative medium that helps me solve real-world problems, both big and small. 
          </p>
          <p className={styles.about_text2}>
          Over the years, I’ve enjoyed working on a range of projects from personal projects that solved my day-to-day problems to solving enterprise-level problems. 
          </p>
          <p className={styles.about_text2}>
          I am also someone who loves the journey as much as the result, whether debugging a tricky issue, designing scalable distributed systems, or playing around with deep learning architectures. I also love to deep dive into the systems to understand how things work under the hood, and find ways to make things better. 
          </p>
          <p className={styles.about_text2}>
          Beyond the code, I'm someone who loves learning, collaboration, and building tech that actually helps people. I'm always up for a good engineering challenge, especially if it means working with great people and creating something meaningful.
          </p>
        </div>
        <Skills />
      </div>
    </>
  );
}

export default About;
