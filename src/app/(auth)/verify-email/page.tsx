import Link from "next/link";
import { AuthShell } from "@/components/auth/AuthShell";
import { ROUTES } from "@/lib/constants";

export default function VerifyEmailPage() {
  return (
    <AuthShell
      title="Verify your email"
      subtitle="We have sent a confirmation link to your inbox."
      footer={
        <p className="text-sm text-gray-600">
          Already verified?{" "}
          <Link href={ROUTES.LOGIN} className="font-semibold text-gray-900">
            Continue to sign in
          </Link>
        </p>
      }
    >
      <div className="flex flex-col gap-6">
        <div>
          <h2 className="text-xl font-semibold text-gray-900">
            Check your inbox
          </h2>
          <p className="mt-2 text-sm text-gray-600">
            Click the link we sent to complete your setup.
          </p>
        </div>

        <div className="rounded-2xl border border-gray-200 bg-white/80 p-4 text-sm text-gray-600">
          Did not receive it? Check spam or request a new email.
        </div>

        <div className="flex flex-col gap-3 sm:flex-row">
          <button
            type="button"
            className="h-11 flex-1 rounded-full bg-gray-900 text-sm font-semibold text-white shadow-lg shadow-black/10 transition hover:-translate-y-0.5 hover:shadow-xl"
          >
            Resend email
          </button>
          <Link
            href={ROUTES.CONTACT}
            className="flex h-11 flex-1 items-center justify-center rounded-full border border-gray-200 bg-white text-sm font-semibold text-gray-900 transition hover:-translate-y-0.5 hover:shadow-md"
          >
            Contact support
          </Link>
        </div>
      </div>
    </AuthShell>
  );
}
