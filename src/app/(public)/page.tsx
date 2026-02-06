import Link from "next/link";
import { ROUTES } from "@/lib/constants";

export default function Home() {
  return (
    <main className="relative min-h-screen overflow-hidden">
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute -left-24 top-20 h-72 w-72 rounded-full bg-sky-200/40 blur-3xl" />
        <div className="absolute right-10 top-32 h-64 w-64 rounded-full bg-amber-200/50 blur-3xl" />
        <div className="absolute bottom-10 left-1/3 h-72 w-72 rounded-full bg-emerald-200/40 blur-3xl" />
      </div>

      <div className="relative mx-auto flex min-h-screen max-w-6xl flex-col gap-16 px-6 py-20 lg:px-12">
        <header className="flex flex-col items-start gap-8">
          <span className="inline-flex items-center gap-2 rounded-full border border-border bg-white/80 px-4 py-1 text-xs font-semibold uppercase tracking-[0.2em] text-muted-foreground shadow-sm">
            Modern Sales Suite
          </span>

          <div className="flex flex-col gap-6">
            <h1 className="max-w-2xl text-4xl font-semibold leading-tight text-foreground sm:text-5xl lg:text-6xl">
              Sales Management System that feels calm, fast, and delightful.
            </h1>
            <p className="max-w-2xl text-lg text-muted-foreground sm:text-xl">
              Organize leads, unify teams, and track revenue with a clean
              dashboard, realtime notifications, and role-based access you can
              trust.
            </p>
          </div>

          <div className="flex flex-wrap gap-4">
            <Link
              href={ROUTES.LOGIN}
              className="inline-flex items-center gap-2 rounded-full bg-foreground px-6 py-3 text-sm font-semibold text-background shadow-lg shadow-black/10 transition hover:-translate-y-0.5 hover:shadow-xl"
            >
              Sign in
              <span className="text-xs">-&gt;</span>
            </Link>
            <Link
              href={ROUTES.REGISTER}
              className="inline-flex items-center gap-2 rounded-full border border-border bg-white/80 px-6 py-3 text-sm font-semibold text-foreground shadow-sm transition hover:-translate-y-0.5 hover:bg-white"
            >
              Create account
              <span className="text-xs">-&gt;</span>
            </Link>
          </div>
        </header>

        <section className="grid gap-6 md:grid-cols-3">
          {[
            {
              title: "Login",
              description: "Access your dashboard in one click.",
              href: ROUTES.LOGIN,
              meta: "Secure access",
            },
            {
              title: "Register",
              description: "Create a new account for your team.",
              href: ROUTES.REGISTER,
              meta: "Start in minutes",
            },
            {
              title: "About",
              description: "See how the platform keeps sales on track.",
              href: ROUTES.ABOUT,
              meta: "Product tour",
            },
          ].map((card) => (
            <Link
              key={card.title}
              href={card.href}
              className="group relative flex h-full flex-col gap-6 rounded-3xl border border-border bg-white/90 p-6 shadow-sm transition hover:-translate-y-1 hover:shadow-xl"
            >
              <div className="flex items-center justify-between">
                <span className="rounded-full bg-secondary px-3 py-1 text-xs font-semibold text-secondary-foreground">
                  {card.meta}
                </span>
                <span className="text-sm font-semibold text-muted-foreground transition group-hover:text-foreground">
                  Explore -&gt;
                </span>
              </div>
              <div className="flex flex-col gap-2">
                <h2 className="text-2xl font-semibold text-foreground">
                  {card.title}
                </h2>
                <p className="text-sm text-muted-foreground">
                  {card.description}
                </p>
              </div>
              <div className="mt-auto rounded-2xl bg-accent/60 px-4 py-3 text-xs font-semibold uppercase tracking-[0.2em] text-accent-foreground">
                Always in sync
              </div>
            </Link>
          ))}
        </section>

        <section className="grid gap-6 rounded-3xl border border-border bg-white/80 p-8 shadow-sm lg:grid-cols-3">
          {[
            {
              value: "98%",
              label: "data accuracy across your sales pipeline",
            },
            {
              value: "24h",
              label: "average time to onboard a new team",
            },
            {
              value: "3x",
              label: "faster reporting with unified dashboards",
            },
          ].map((stat) => (
            <div key={stat.value} className="flex flex-col gap-2">
              <span className="text-3xl font-semibold text-foreground">
                {stat.value}
              </span>
              <span className="text-sm text-muted-foreground">{stat.label}</span>
            </div>
          ))}
        </section>
      </div>
    </main>
  );
}
