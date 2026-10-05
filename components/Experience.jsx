import Section from "./Section";
import { experience } from "@/data/profile";

export default function Experience() {
  return (
    <Section id="experience" title="Experience">
      <ol className="space-y-10">
        {experience.map((e) => (
          <li key={e.role + e.org} className="grid gap-2 sm:grid-cols-[170px_1fr] sm:gap-6">
            <p className="text-sm text-muted">{e.period}</p>
            <div>
              <h3 className="font-display text-lg font-semibold">{e.role}</h3>
              <p className="text-muted">{e.org}</p>
              <ul className="mt-3 list-disc space-y-1 pl-5 marker:text-filament">
                {e.points.map((pt) => <li key={pt}>{pt}</li>)}
              </ul>
            </div>
          </li>
        ))}
      </ol>
    </Section>
  );
}
