import { profile } from "@/data/profile";
import PrintingModel from "./PrintingModel";

export default function Hero() {
  return (
    <section id="top" className="mx-auto grid max-w-6xl items-center gap-10 px-6 py-16 md:grid-cols-[1.2fr_0.8fr] md:py-28">
      <div>
        <p className="text-muted">{profile.name} · {profile.location}</p>
        <h1 className="mt-4 font-display text-4xl font-semibold leading-tight tracking-tight sm:text-5xl lg:text-6xl">
          {profile.headline}
        </h1>
        <p className="mt-6 max-w-xl text-lg leading-relaxed text-muted">{profile.tagline}</p>
        <div className="mt-8 flex flex-wrap gap-3">
          <a href="#projects" className="rounded-md bg-accent px-5 py-2.5 font-medium text-white transition-opacity hover:opacity-90 dark:text-bg">
            View projects
          </a>
          <a href={profile.resume} className="rounded-md border border-line px-5 py-2.5 font-medium transition-colors hover:border-accent hover:text-accent">
            Download resume
          </a>
          <a href="#contact" className="px-3 py-2.5 font-medium text-muted underline-offset-4 transition-colors hover:text-ink hover:underline">
            Contact
          </a>
        </div>
      </div>
      <PrintingModel />
    </section>
  );
}
