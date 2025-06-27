import { component$ } from "@builder.io/qwik";
import type { DocumentHead } from "@builder.io/qwik-city";

import { MainNavigation } from "../components/landing/navigation/navigation";
import { HeroBanner } from "../components/landing/hero/hero";
import { FeaturesGrid } from "../components/landing/features/features";
import { AboutSection } from "../components/landing/about/about";
import { TestimonialsSection } from "../components/landing/testimonials/testimonials";
import { ContactSection } from "../components/landing/contact/contact";

export default component$(() => {
  // PUBLIC_INTERFACE
  /** Main landing page entry
   * Renders all landing page sections in a single page, with smooth navigation.
   */
  return (
    <>
      <MainNavigation />
      <HeroBanner />
      <FeaturesGrid />
      <AboutSection />
      <TestimonialsSection />
      <ContactSection />
    </>
  );
});

// PUBLIC_INTERFACE
export const head: DocumentHead = {
  title: "AI Mirror – Next Generation AI Project",
  meta: [
    {
      name: "description",
      content:
        "A sleek, modern, and responsive landing page for an AI project, featuring showcase, testimonials, and contact.",
    },
  ],
};
