import { ReactNode } from "react";
import Link from "next/link";
import { ROUTES } from "@/lib/constants";

type AuthShellProps = {
  title: string;
  subtitle: string;
  children: ReactNode;
  footer?: ReactNode;
};

export function AuthShell({ title, subtitle, children, footer }: AuthShellProps) {
  return (
    <main className="relative min-h-screen overflow-hidden">
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute -left-16 top-24 h-60 w-60 rounded-full bg-sky-200/40 blur-3xl" />
        <div className="absolute right-12 top-10 h-72 w-72 rounded-full bg-amber-200/50 blur-3xl" />
        <div className="absolute bottom-16 left-1/3 h-64 w-64 rounded-full bg-emerald-200/30 blur-3xl" />
      </div>

      <div className="relative mx-auto flex min-h-screen max-w-6xl flex-col gap-10 px-6 py-16 lg:flex-row lg:items-center lg:gap-16 lg:px-12">
        <section className="flex-1">
          <Link
            href={ROUTES.HOME}
            className="inline-flex items-center gap-2 text-sm font-semibold text-muted-foreground transition hover:text-foreground"
          >
            {"<- Back to home"}
          </Link>
          <h1 className="mt-6 text-4xl font-semibold text-foreground sm:text-5xl">
            {title}
          </h1>
          <p className="mt-4 max-w-lg text-lg text-muted-foreground">
            {subtitle}
          </p>
          <div className="mt-10 hidden rounded-3xl border border-border bg-white/70 p-6 text-sm text-muted-foreground shadow-sm lg:block">
            <div className="text-xs font-semibold uppercase tracking-[0.2em] text-muted-foreground">
              Why teams choose us
            </div>
            <ul className="mt-4 space-y-3">
              <li>Clean pipelines, easy handoffs, clear ownership.</li>
              <li>Realtime insights that keep forecasts honest.</li>
              <li>Security and permissions built into every workflow.</li>
            </ul>
          </div>
        </section>

        <section className="w-full max-w-lg rounded-3xl border border-border bg-white/90 p-8 shadow-xl shadow-black/5">
          {children}
          {footer ? <div className="mt-6">{footer}</div> : null}
        </section>
      </div>
    </main>
  );
}
