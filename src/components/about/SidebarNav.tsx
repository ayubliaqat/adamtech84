export default function SidebarNav() {
  const sections = ["Introduction", "Work Experience", "Studies", "Technical skills"];

  return (
    <aside className="hidden md:block w-56 sticky top-32 h-fit">
      <nav aria-label="About section navigation">
        <ul className="space-y-4">
          {sections.map((item, index) => (
            <li key={item} className="group flex items-center gap-4 cursor-pointer">
              {/* The active line indicator from the screenshot */}
              <div className={`h-[1px] transition-all duration-300 ${index === 0 ? 'w-6 bg-black' : 'w-0 bg-zinc-300 group-hover:w-4'}`} />
              <span className={`text-sm font-medium transition-colors ${index === 0 ? 'text-black' : 'text-zinc-400 group-hover:text-zinc-600'}`}>
                {item}
              </span>
            </li>
          ))}
        </ul>
      </nav>
    </aside>
  );
}