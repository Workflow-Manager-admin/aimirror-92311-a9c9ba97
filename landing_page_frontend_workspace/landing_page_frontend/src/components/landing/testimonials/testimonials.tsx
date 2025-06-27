import { component$ } from "@builder.io/qwik";
import styles from "./testimonials.module.css";

// PUBLIC_INTERFACE
export const TestimonialsSection = component$(() => {
  // PUBLIC_INTERFACE
  /**
   * Showcases testimonials from fictional users (placeholder text/avatars).
   */
  const testimonials = [
    {
      avatar: "👩‍💼",
      name: "Emily Chen, CTO",
      company: "SiliconCo",
      quote:
        "AI Mirror transformed our workflow! It's an indispensable part of our tech stack now.",
    },
    {
      avatar: "🧑🏻‍🚀",
      name: "Alex R.",
      company: "Freelancer",
      quote:
        "Snappy, intuitive, and beautifully designed. My projects move faster with AI Mirror.",
    },
    {
      avatar: "👨🏾‍💻",
      name: "Malik O.",
      company: "TechNova",
      quote:
        "Highly secure and so easy for our devs. Support is top-notch!",
    },
  ];

  return (
    <section class={styles.section} id="testimonials">
      <h2>
        Trusted by <span class={styles.accent}>Innovators</span>
      </h2>
      <div class={styles.grid}>
        {testimonials.map((t, i) => (
          <figure class={styles.card} key={i}>
            <div class={styles.avatar}>{t.avatar}</div>
            <blockquote>{`"${t.quote}"`}</blockquote>
            <figcaption>
              <span class={styles.reviewer}>{t.name}</span>
              <span class={styles.company}>{t.company}</span>
            </figcaption>
          </figure>
        ))}
      </div>
    </section>
  );
});
