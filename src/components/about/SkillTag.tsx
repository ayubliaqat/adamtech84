export default function SkillTag({ label }: { label: string }) {
  return (
    <span className="px-5 py-3 rounded-xl bg-card border border-border-subtle text-[12px] text-foreground font-bold hover:border-cyan-600 hover:text-cyan-600 transition-all duration-300 cursor-default">
      {label}
    </span>
  );
}