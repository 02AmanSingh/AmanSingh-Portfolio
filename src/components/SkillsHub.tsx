import { resumeData } from "../data";

export default function SkillsHub() {
  return (
    <section id="skills" className="py-20 border-b border-black/10 dark:border-stone-800 bg-[#FFFDF2] dark:bg-[#000000] transition-colors duration-200">
      <div className="max-w-5xl mx-auto space-y-12 text-left px-4 sm:px-6">
        
        {/* Section Header */}
        <div className="space-y-2">
          <p className="text-xs font-semibold text-blue-600 dark:text-blue-400 uppercase tracking-wider">
            Technical Competencies
          </p>
          <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-black dark:text-[#FFFDF2]">
            Skills Inventory by Functional Discipline
          </h2>
          <p className="text-sm text-stone-700 dark:text-stone-300 max-w-2xl leading-relaxed">
            Technologies and methodologies verified through commercial client support, enterprise incident resolution, and hands-on analytical projects.
          </p>
        </div>

        {/* 4 Primary Functional Discipline Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {resumeData.skills.map((group) => (
            <div
              key={group.category}
              className="p-6 rounded-lg bg-white dark:bg-[#0D0D0D] border border-black/10 dark:border-stone-800 shadow-2xs space-y-4 text-left"
            >
              <div className="space-y-1 pb-3 border-b border-black/5 dark:border-stone-800">
                <div className="flex items-center justify-between">
                  <h3 className="text-base font-bold text-black dark:text-[#FFFDF2] tracking-tight">
                    {group.category}
                  </h3>
                  <span className="text-xs font-mono text-stone-500 dark:text-stone-400 tabular-nums">
                    {group.skills.length} skills
                  </span>
                </div>
                {group.description && (
                  <p className="text-xs text-stone-600 dark:text-stone-400 leading-normal">
                    {group.description}
                  </p>
                )}
              </div>

              {/* Skills Tags */}
              <div className="flex flex-wrap gap-2 pt-1">
                {group.skills.map((skill, sIdx) => (
                  <span
                    key={sIdx}
                    className="px-2.5 py-1 text-xs font-medium text-stone-800 dark:text-stone-300 bg-[#FAF7EC] dark:bg-[#161616] hover:bg-stone-200 dark:hover:bg-[#202020] rounded border border-black/10 dark:border-stone-800 transition-colors"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Spoken Languages & Communication Strip */}
        <div className="p-5 rounded-lg bg-[#FAF7EC] dark:bg-[#0D0D0D] border border-black/10 dark:border-stone-800 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
          <div className="space-y-0.5">
            <h4 className="text-xs font-bold text-black dark:text-[#FFFDF2] uppercase tracking-wider">
              Communication & Languages
            </h4>
            <p className="text-xs text-stone-700 dark:text-stone-300">
              Languages for cross-functional collaboration, customer engineering, and stakeholder documentation
            </p>
          </div>

          <div className="flex flex-wrap gap-2 text-xs font-medium">
            {resumeData.languages.map((lang, lIdx) => (
              <span
                key={lIdx}
                className="px-3 py-1 rounded bg-white dark:bg-[#181818] border border-black/10 dark:border-stone-800 text-black dark:text-[#FFFDF2] text-xs shadow-2xs"
              >
                {lang}
              </span>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}
