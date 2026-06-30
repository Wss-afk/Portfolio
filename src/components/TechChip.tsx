type TechChipProps = {
  label: string;
};

export function TechChip({ label }: TechChipProps) {
  return (
    <span className="rounded-full border border-white/10 bg-white/5 px-3 py-1.5 text-sm text-[var(--text)]">
      {label}
    </span>
  );
}
