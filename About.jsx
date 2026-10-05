import Section from "./Section";
import { about } from "@/data/profile";

export default function About() {
  return (
    <Section id="about" title="About">
      <div className="max-w-2xl space-y-4 text-lg leading-relaxed">
        {about.map((p) => <p key={p}>{p}</p>)}
      </div>
    </Section>
  );
}
