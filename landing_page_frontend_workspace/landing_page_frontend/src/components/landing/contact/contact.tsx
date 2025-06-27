import { component$, useSignal } from "@builder.io/qwik";
import styles from "./contact.module.css";

// PUBLIC_INTERFACE
export const ContactSection = component$(() => {
  const submitted = useSignal(false);
  // PUBLIC_INTERFACE
  /**
   * Displays a contact form using mailto. Validates required fields client-side.
   */
  return (
    <section class={styles.section} id="contact">
      <h2>
        Let's <span class={styles.accent}>Connect</span>
      </h2>
      <form
        class={styles.form}
        method="POST"
        action="mailto:hello@aimirror.ai"
        onSubmit$={(e) => {
          e.preventDefault();
          const form = e.target as HTMLFormElement;
          const formData = new FormData(form);
          if (
            !formData.get("name") ||
            !formData.get("email") ||
            !formData.get("message")
          ) {
            alert("Please fill in all required fields.");
            return;
          }
          window.open(
            `mailto:hello@aimirror.ai?subject=Contact%20from%20AI%20Mirror&body=${encodeURIComponent(
              `Name: ${formData.get("name")}\nEmail: ${formData.get(
                "email"
              )}\n\nMessage:\n${formData.get("message") || ""}`
            )}`
          );
          submitted.value = true;
        }}
      >
        <div class={styles.inputs}>
          <input
            type="text"
            name="name"
            placeholder="Your Name"
            required
            class={styles.input}
          />
          <input
            type="email"
            name="email"
            placeholder="Your Email"
            required
            class={styles.input}
          />
        </div>
        <textarea
          name="message"
          placeholder="Your Message"
          rows={5}
          required
          class={styles.textarea}
        ></textarea>
        <button type="submit" class={styles.button}>
          Send Message
        </button>
        {submitted.value && (
          <div class={styles.confirmation}>
            Thank you! We'll be in touch soon.
          </div>
        )}
      </form>
    </section>
  );
});
