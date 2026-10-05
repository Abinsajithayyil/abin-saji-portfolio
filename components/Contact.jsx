import Section from "./Section";
import { profile } from "@/data/profile";

export default function Contact() {
  const items = [
    ["Email", profile.email, `mailto:${profile.email}`],
    ["Phone", profile.phone, `tel:${profile.phone}`],
    ["LinkedIn", "abin-saji-b8a0b3284", profile.linkedin],
    ["GitHub", "Abinsajithayyil", profile.github],
  ];
  return (
    <Section id="contact" title="Contact">
      <p className="max-w-xl text-lg">I'm open to entry-level roles in software development, AI/ML and data science. The quickest way to reach me is email.</p>
      <dl className="mt-8 divide-y divide-line">
        {items.map(([label, text, href]) => (
          <div key={label} className="grid gap-1 py-3 sm:grid-cols-[150px_1fr] sm:gap-6">
            <dt className="text-muted">{label}</dt>
            <dd><a href={href} className="font-medium underline-offset-4 transition-colors hover:text-accent hover:underline">{text}</a></dd>
          </div>
        ))}
      </dl>
    </Section>
  );
}
