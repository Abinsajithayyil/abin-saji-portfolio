import Section from "./Section";
import { about, profile } from "@/data/profile";

export default function About() {
  return (
    <Section id="about" title="About">
      <div className="grid items-start gap-8 md:grid-cols-[1fr_220px]">
        <div className="max-w-2xl space-y-4 text-lg leading-relaxed">
          {about.map((p) => <p key={p}>{p}</p>)}
        </div>
        {profile.photo && (
          <img
            src={profile.photo}
            alt={`Portrait of ${profile.name}`}
            className="aspect-square w-48 rounded-md object-cover md:w-full"
          />
        )}
      </div>
    </Section>
  );
}
