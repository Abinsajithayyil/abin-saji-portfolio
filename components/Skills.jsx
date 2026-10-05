import Section from "./Section";
import { skills } from "@/data/profile";

export default function Skills() {
  return (
    <Section id="skills" title="Skills">
      <dl className="divide-y divide-line">
        {skills.map((s) => (
          <div key={s.group} className="grid gap-1 py-4 first:pt-0 sm:grid-cols-[150px_1fr] sm:gap-6">
            <dt className="font-medium">{s.group}</dt>
            <dd className="text-muted">{s.items.join(", ")}</dd>
          </div>
        ))}
      </dl>
    </Section>
  );
}
