import { ReactNode } from "react";

type PublicPageShellProps = {
  eyebrow: string;
  title: string;
  subtitle: string;
  children?: ReactNode;
};

export function PublicPageShell({
  eyebrow,
  title,
  subtitle,
  children,
}: PublicPageShellProps) {
  return (
    <main className="relative min-h-screen overflow-hidden">
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute -left-20 top-24 h-60 w-60 rounded-full bg-sky-200/40 blur-3xl" />
        <div className="absolute right-10 top-36 h-60 w-60 rounded-full bg-amber-200/40 blur-3xl" />
        <div className="absolute bottom-10 left-1/3 h-72 w-72 rounded-full bg-emerald-200/30 blur-3xl" />
      </div>

      <div className="relative mx-auto flex min-h-screen max-w-6xl flex-col gap-12 px-6 py-16 lg:px-12">
        <header className="flex flex-col gap-4">
          <span className="inline-flex w-fit items-center rounded-full border border-gray-200 bg-white/80 px-4 py-1 text-xs font-semibold uppercase tracking-[0.2em] text-gray-600 shadow-sm">
            {eyebrow}
          </span>
          <h1 className="max-w-2xl text-4xl font-semibold leading-tight text-gray-900 sm:text-5xl">
            {title}
          </h1>
          <p className="max-w-2xl text-lg text-gray-600 sm:text-xl">
            {subtitle}
          </p>
        </header>

        <div className="flex flex-col gap-10">{children}</div>
      </div>
    </main>
  );
}
