import { Link } from "@/lib/i18n/navigation";

export default function NotFound() {
  return (
    <main className="flex min-h-screen items-center justify-center px-4">
      <div className="w-full max-w-xl rounded-3xl border border-[var(--border)] bg-[var(--bg-secondary)] p-8 text-center">
        <p className="mb-2 font-mono text-sm text-[var(--accent)]">404</p>
        <h1 className="mb-3 text-3xl font-bold">Page not found</h1>
        <p className="mb-6 text-[var(--text-secondary)]">
          The page you are trying to access does not exist or was moved.
        </p>
        <Link
          href="/"
          className="inline-flex rounded-xl border border-[var(--accent)] bg-[var(--accent)] px-4 py-2 text-sm font-medium text-[var(--bg-primary)] transition-colors hover:bg-[var(--accent-hover)]"
        >
          Go to home
        </Link>
      </div>
    </main>
  );
}
