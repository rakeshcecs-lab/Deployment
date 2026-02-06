import Link from "next/link";
import { AuthShell } from "@/components/auth/AuthShell";
import { ROUTES } from "@/lib/constants";

export default function ForgotPasswordPage() {
  return (
    <AuthShell
      title="Reset your password"
      subtitle="We will send a secure reset link to your email address."
      footer={
        <p className="text-sm text-muted-foreground">
          Remembered it?{" "}
          <Link href={ROUTES.LOGIN} className="font-semibold text-foreground">
            Back to sign in
          </Link>
        </p>
      }
    >
      <div className="flex flex-col gap-6">
        <div>
          <h2 className="text-xl font-semibold text-foreground">
            Forgot password
          </h2>
          <p className="mt-2 text-sm text-muted-foreground">
            Enter your work email and we will send instructions.
          </p>
        </div>

        <form className="flex flex-col gap-4">
          <label className="flex flex-col gap-2 text-sm font-medium text-foreground">
            Email address
            <input
              type="email"
              placeholder="you@company.com"
              className="h-11 rounded-xl border border-border bg-white px-4 text-sm text-foreground shadow-sm outline-none transition focus:border-foreground"
            />
          </label>
          <button
            type="button"
            className="mt-2 h-11 rounded-full bg-foreground text-sm font-semibold text-background shadow-lg shadow-black/10 transition hover:-translate-y-0.5 hover:shadow-xl"
          >
            Send reset link
          </button>
        </form>

        <div className="rounded-2xl border border-border bg-white/80 p-4 text-xs text-muted-foreground">
          Security tip: If you have multiple accounts, use the email tied to
          your Sales workspace.
        </div>
      </div>
    </AuthShell>
  );
}
