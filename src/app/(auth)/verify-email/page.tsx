import Link from "next/link";
import { AuthShell } from "@/components/auth/AuthShell";
import { ROUTES } from "@/lib/constants";

export default function VerifyEmailPage() {
  return (
    <AuthShell
      title="Verify your email"
      subtitle="We have sent a confirmation link to your inbox."
      footer={
        <p className="text-sm text-muted-foreground">
          Already verified?{" "}
          <Link href={ROUTES.LOGIN} className="font-semibold text-foreground">
            Continue to sign in
          </Link>
        </p>
      }
    >
      <div className="flex flex-col gap-6">
        <div>
          <h2 className="text-xl font-semibold text-foreground">
            Check your inbox
          </h2>
          <p className="mt-2 text-sm text-muted-foreground">
            Click the link we sent to complete your setup.
          </p>
        </div>

        <div className="rounded-2xl border border-border bg-white/80 p-4 text-sm text-muted-foreground">
          Did not receive it? Check spam or request a new email.
        </div>

        <div className="flex flex-col gap-3 sm:flex-row">
          <button
            type="button"
            className="h-11 flex-1 rounded-full bg-foreground text-sm font-semibold text-background shadow-lg shadow-black/10 transition hover:-translate-y-0.5 hover:shadow-xl"
          >
            Resend email
          </button>
          <Link
            href={ROUTES.CONTACT}
            className="flex h-11 flex-1 items-center justify-center rounded-full border border-border bg-white text-sm font-semibold text-foreground transition hover:-translate-y-0.5 hover:shadow-md"
          >
            Contact support
          </Link>
        </div>
      </div>
    </AuthShell>
  );
}
