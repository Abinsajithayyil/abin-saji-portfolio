import Section from "./Section";
import { projects } from "@/data/profile";

const rows = [["Problem", "problem"], ["Solution", "solution"], ["My contribution", "contribution"], ["Outcome", "outcome"]];

export default function Projects() {
  return (
    <Section id="projects" title="Projects">
      <div className="space-y-14">
        {projects.map((p, idx) => (
          <article key={p.name} className={idx === 0 ? "border-l-4 border-filament pl-6" : "border-l-4 border-line pl-6"}>
            <p className="text-sm text-muted">{p.kind}</p>
            <h3 className="mt-1 font-display text-xl font-semibold sm:text-2xl">{p.name}</h3>
            <dl className="mt-5 space-y-3">
              {rows.map(([label, key]) => (
                <div key={key} className="grid gap-1 sm:grid-cols-[150px_1fr] sm:gap-4">
                  <dt className="font-medium">{label}</dt>
                  <dd className="text-muted">{p[key]}</dd>
                </div>
              ))}
            </dl>
            <ul className="mt-5 flex flex-wrap gap-2">
              {p.tech.map((t) => (
                <li key={t} className="rounded-full border border-line px-3 py-1 text-sm text-muted">{t}</li>
              ))}
            </ul>
            {p.link && (
              <a href={p.link} className="mt-4 inline-block font-medium text-accent underline-offset-4 hover:underline">View source</a>
            )}
          </article>
        ))}
      </div>
    </Section>
  );
}
