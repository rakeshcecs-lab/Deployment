import Link from "next/link";
import { PublicPageShell } from "@/components/public/PublicPageShell";
import { ROUTES } from "@/lib/constants";

export default function ProductsPage() {
  return (
    <PublicPageShell
      eyebrow="Products"
      title="Everything your revenue team needs, connected by design."
      subtitle="Track pipeline, manage accounts, and forecast revenue with modules that feel unified and fast."
    >
      <section className="grid gap-6 md:grid-cols-3">
        {[
          {
            title: "Pipeline",
            copy: "Kanban-ready stages, automated alerts, and quick updates.",
          },
          {
            title: "Accounts",
            copy: "Centralize customer context, notes, and next steps.",
          },
          {
            title: "Forecasting",
            copy: "Predict revenue with confidence using live data.",
          },
          {
            title: "Activities",
            copy: "Never miss a follow-up with reminders and priorities.",
          },
          {
            title: "Playbooks",
            copy: "Keep every team aligned with curated workflows.",
          },
          {
            title: "Insights",
            copy: "Beautiful dashboards that surface the right metrics.",
          },
        ].map((item) => (
          <div
            key={item.title}
            className="rounded-3xl border border-border bg-white/90 p-6 shadow-sm"
          >
            <h2 className="text-lg font-semibold text-foreground">{item.title}</h2>
            <p className="mt-3 text-sm text-muted-foreground">{item.copy}</p>
          </div>
        ))}
      </section>

      <section className="grid gap-6 rounded-3xl border border-border bg-white/80 p-8 shadow-sm lg:grid-cols-2">
        <div>
          <h3 className="text-xl font-semibold text-foreground">
            Built for every stage of growth
          </h3>
          <p className="mt-3 text-sm text-muted-foreground">
            From new revenue teams to global organizations, configure workflows
            without losing visibility or speed.
          </p>
        </div>
        <div className="grid gap-4 text-sm text-muted-foreground">
          <span>Unified customer timeline</span>
          <span>Realtime alerts and approvals</span>
          <span>Role-based access built in</span>
          <span>Custom fields and automation</span>
        </div>
      </section>

      <section className="flex flex-wrap items-center justify-between gap-4 rounded-3xl border border-border bg-white/90 p-6 shadow-sm">
        <div>
          <h4 className="text-lg font-semibold text-foreground">
            See the platform in action
          </h4>
          <p className="text-sm text-muted-foreground">
            Book a personalized walkthrough for your team.
          </p>
        </div>
        <Link
          href={ROUTES.CONTACT}
          className="rounded-full bg-foreground px-5 py-2 text-sm font-semibold text-background transition hover:-translate-y-0.5 hover:shadow-lg"
        >
          Schedule a demo
        </Link>
      </section>
    </PublicPageShell>
  );
}
