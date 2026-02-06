import Link from "next/link";
import { PublicPageShell } from "@/components/public/PublicPageShell";
import { ROUTES } from "@/lib/constants";

export default function AboutPage() {
  return (
    <PublicPageShell
      eyebrow="About"
      title="A calm workspace for high-performing revenue teams."
      subtitle="We build tools that make sales operations clear, collaborative, and measurable without overwhelming your team."
    >
      <section className="grid gap-6 md:grid-cols-2">
        {[
          {
            title: "Mission",
            copy: "Give sales teams a single source of truth that feels effortless to use every day.",
          },
          {
            title: "Vision",
            copy: "A future where every revenue decision is backed by real-time clarity and shared ownership.",
          },
          {
            title: "What we value",
            copy: "Transparency, thoughtful automation, and experiences that respect focus.",
          },
          {
            title: "Who it's for",
            copy: "Leaders and reps who want predictable pipelines and less time spent chasing updates.",
          },
        ].map((item) => (
          <div
            key={item.title}
            className="rounded-3xl border border-border bg-white/90 p-6 shadow-sm"
          >
            <h2 className="text-xl font-semibold text-foreground">{item.title}</h2>
            <p className="mt-3 text-sm text-muted-foreground">{item.copy}</p>
          </div>
        ))}
      </section>

      <section className="grid gap-6 rounded-3xl border border-border bg-white/80 p-8 shadow-sm lg:grid-cols-3">
        {[
          { value: "10+", label: "industry templates ready on day one" },
          { value: "40%", label: "less time spent on manual reporting" },
          { value: "5min", label: "average setup time for new teams" },
        ].map((stat) => (
          <div key={stat.value} className="flex flex-col gap-2">
            <span className="text-3xl font-semibold text-foreground">
              {stat.value}
            </span>
            <span className="text-sm text-muted-foreground">{stat.label}</span>
          </div>
        ))}
      </section>

      <section className="flex flex-col items-start gap-4 rounded-3xl border border-border bg-white/90 p-6 shadow-sm">
        <h3 className="text-xl font-semibold text-foreground">
          Ready to see the system in action?
        </h3>
        <p className="text-sm text-muted-foreground">
          Walk through a curated demo or speak with our team about your goals.
        </p>
        <Link
          href={ROUTES.CONTACT}
          className="rounded-full bg-foreground px-5 py-2 text-sm font-semibold text-background transition hover:-translate-y-0.5 hover:shadow-lg"
        >
          Contact sales
        </Link>
      </section>
    </PublicPageShell>
  );
}
