type SectionHeadingProps = {
  title: string;
  subtitle?: string;
};

export function SectionHeading({ title, subtitle }: SectionHeadingProps) {
  return (
    <div className="mb-8 space-y-2">
      <div className="flex items-center gap-4">
        <h2 className="text-3xl font-bold tracking-tight md:text-[2.5rem]">{title}</h2>
        <span className="h-px flex-1 bg-[var(--border)]" />
      </div>
      {subtitle ? <p className="max-w-2xl text-[var(--text-secondary)]">{subtitle}</p> : null}
    </div>
  );
}
