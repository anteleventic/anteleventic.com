export default function Skills({ isDarkMode }: { isDarkMode: boolean }) {
  return (
    <section id="skills" className="relative pt-32 z-10 px-6">
      <div className="w-full max-w-[725px] mx-auto">
        <div className="w-full">
          <div className="flex flex-wrap gap-3 animate-fade-in">
            <span className={`px-4 py-2 ${isDarkMode ? 'bg-slate-900/50 border-slate-800 text-white' : 'bg-white border-slate-200 text-slate-800'} backdrop-blur-sm rounded-xl border text-base font-medium transition-all cursor-default`}>React</span>
            <span className={`px-4 py-2 ${isDarkMode ? 'bg-slate-900/50 border-slate-800 text-white' : 'bg-white border-slate-200 text-slate-800'} backdrop-blur-sm rounded-xl border text-base font-medium transition-all cursor-default`}>TypeScript</span>
            <span className={`px-4 py-2 ${isDarkMode ? 'bg-slate-900/50 border-slate-800 text-white' : 'bg-white border-slate-200 text-slate-800'} backdrop-blur-sm rounded-xl border text-base font-medium transition-all cursor-default`}>Node.js</span>
            <span className={`px-4 py-2 ${isDarkMode ? 'bg-slate-900/50 border-slate-800 text-white' : 'bg-white border-slate-200 text-slate-800'} backdrop-blur-sm rounded-xl border text-base font-medium transition-all cursor-default`}>AI/ML</span>
            <span className={`px-4 py-2 ${isDarkMode ? 'bg-slate-900/50 border-slate-800 text-white' : 'bg-white border-slate-200 text-slate-800'} backdrop-blur-sm rounded-xl border text-base font-medium transition-all cursor-default`}>Photography</span>
            <span className={`px-4 py-2 ${isDarkMode ? 'bg-slate-900/50 border-slate-800 text-white' : 'bg-white border-slate-200 text-slate-800'} backdrop-blur-sm rounded-xl border text-base font-medium transition-all cursor-default`}>UI/UX Design</span>
          </div>
        </div>
      </div>
    </section>
  );
}
