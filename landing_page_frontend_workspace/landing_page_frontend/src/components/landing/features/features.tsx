import { component$ } from "@builder.io/qwik";
import styles from "./features.module.css";

// PUBLIC_INTERFACE
export const FeaturesGrid = component$(() => {
  // PUBLIC_INTERFACE
  /**
   * Renders a responsive feature showcase.
   */
  const features = [
    {
      icon: "🤖",
      title: "Smart Automation",
      description:
        "AI-powered workflows to automate tedious business processes reliably.",
    },
    {
      icon: "⚡",
      title: "Blazing Fast",
      description:
        "Real-time AI responses and insights for your team or users.",
    },
    {
      icon: "🔒",
      title: "Enterprise Secure",
      description:
        "All data encrypted. Compliance and privacy are first-class features.",
    },
    {
      icon: "🌎",
      title: "Global Scalability",
      description:
        "Built to scale worldwide, seamless integration with cloud infrastructure.",
    },
    {
      icon: "🛠️",
      title: "Developer Friendly",
      description:
        "Extensive API and plugin system for easy customization.",
    },
    {
      icon: "🎨",
      title: "Modern UI/UX",
      description:
        "Minimal, professional, adaptive interface for all devices.",
    },
  ];

  return (
    <section class={styles.section} id="features">
      <h2>
        Key <span class={styles.accent}>Features</span>
      </h2>
      <div class={styles.grid}>
        {features.map((f, i) => (
          <div class={styles.card} key={f.title + i}>
            <span class={styles.icon}>{f.icon}</span>
            <h3>{f.title}</h3>
            <p>{f.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
});
