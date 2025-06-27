import { component$ } from "@builder.io/qwik";
import styles from "./about.module.css";

// PUBLIC_INTERFACE
export const AboutSection = component$(() => (
  <section class={styles.section} id="about">
    <div class={styles.inner}>
      <h2>
        About <span class={styles.accent}>AI Mirror</span>
      </h2>
      <p>
        AI Mirror is a cutting-edge platform leveraging artificial intelligence to empower innovation in businesses and creative initiatives. 
        <br />
        <br />
        Our mission is to provide users with intuitive, secure, and scalable tools to harness the power of AI—unlocking efficiency, insight, and creativity for everyone.
      </p>
    </div>
  </section>
));
