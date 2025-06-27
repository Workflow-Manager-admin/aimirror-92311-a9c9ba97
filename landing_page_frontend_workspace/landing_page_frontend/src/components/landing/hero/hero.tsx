import { component$ } from "@builder.io/qwik";
import styles from "./hero.module.css";

// PUBLIC_INTERFACE
export const HeroBanner = component$(() => {
  return (
    <section class={styles.hero} id="hero">
      <div class={styles.bgEffect}></div>
      <div class={styles.inner}>
        <h1>
          Build the <span class={styles.accent}>Future</span> with AI Mirror
        </h1>
        <p class={styles.subtitle}>
          Experience the next generation AI platform for your business and imagination.
        </p>
        <div class={styles.ctaGroup}>
          <a href="#features" class={styles.ctaButton}>
            Explore Features
          </a>
          <a href="#contact" class={styles.ctaButtonSecondary}>
            Contact Us
          </a>
        </div>
      </div>
      <div class={styles.bubbles}>
        <div class={styles.bubble1}></div>
        <div class={styles.bubble2}></div>
        <div class={styles.bubble3}></div>
      </div>
    </section>
  );
});
