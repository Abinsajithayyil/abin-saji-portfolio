import Section from "./Section";
import { education, certifications } from "@/data/profile";

export default function Credentials() {
  return (
    <Section id="education" title="Education and certifications">
      <div className="space-y-10">
        <div>
          <h3 className="font-display text-lg font-semibold">{education.degree}</h3>
          <p className="text-muted">{education.school}</p>
          <p className="text-muted">{education.period}{education.cgpa ? ` · CGPA ${education.cgpa}` : ""}</p>
        </div>
        <ul className="list-disc space-y-1 pl-5 marker:text-filament">
          {certifications.map((c) => <li key={c}>{c}</li>)}
        </ul>
      </div>
    </Section>
  );
}
