import { component$, $, useSignal } from "@builder.io/qwik";
import styles from "./navigation.module.css";

// PUBLIC_INTERFACE
export const MainNavigation = component$(() => {
  const isOpen = useSignal(false);

  // PUBLIC_INTERFACE
  const scrollToSection = $((id: string) => {
    const section = document.getElementById(id);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
      isOpen.value = false;
    }
  });

  return (
    <nav class={styles.navbar}>
      <div class={styles.brand} onClick$={() => scrollToSection("hero")}>
        <span class={styles.logo}>AI Mirror</span>
      </div>
      <button
        class={styles.hamburger}
        aria-label="Open navigation"
        onClick$={() => (isOpen.value = !isOpen.value)}
      >
        <span />
        <span />
        <span />
      </button>
      <ul class={[styles.menu, isOpen.value ? styles.open : ""]}>
        <li>
          <a href="#features" onClick$={() => scrollToSection("features")}>Features</a>
        </li>
        <li>
          <a href="#about" onClick$={() => scrollToSection("about")}>About</a>
        </li>
        <li>
          <a href="#testimonials" onClick$={() => scrollToSection("testimonials")}>Testimonials</a>
        </li>
        <li>
          <a href="#contact" onClick$={() => scrollToSection("contact")}>Contact</a>
        </li>
      </ul>
    </nav>
  );
});
