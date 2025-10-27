import { useNavigate } from 'react-router-dom';

export default function Terms({ isDarkMode }: { isDarkMode: boolean }) {
  const navigate = useNavigate();

  return (
    <section id="terms" className="relative z-10 px-6 pt-32">
      <div className="w-full max-w-[725px] mx-auto">
        <button
          onClick={() => navigate('/about')}
          className={`mb-12 ${isDarkMode ? 'text-orange-400 hover:text-orange-300' : 'text-slate-700 hover:text-slate-900'} transition-all duration-200 flex items-center gap-2 group hover:scale-105`}
        >
          <span className="group-hover:-translate-x-1 transition-transform">←</span> Back
        </button>
        <div className="w-full">
          <div className="space-y-6 animate-fade-in-up">
            <h2 className={`${isDarkMode ? 'text-orange-100' : 'text-slate-900'} text-3xl font-bold mb-6`}>Terms of Service</h2>

            <div className="space-y-4">
              <div>
                <h3 className={`${isDarkMode ? 'text-orange-100' : 'text-slate-900'} text-xl font-bold mb-2`}>Acceptance of Terms</h3>
                <p className={`${isDarkMode ? 'text-orange-200/70' : 'text-slate-700'} leading-relaxed`}>
                  By accessing and using this website, you accept and agree to be bound by the terms and provision of this agreement.
                </p>
              </div>

              <div>
                <h3 className={`${isDarkMode ? 'text-orange-100' : 'text-slate-900'} text-xl font-bold mb-2`}>Use License</h3>
                <p className={`${isDarkMode ? 'text-orange-200/70' : 'text-slate-700'} leading-relaxed`}>
                  Permission is granted to temporarily download one copy of the materials on this website for personal, non-commercial transitory viewing only.
                </p>
              </div>

              <div>
                <h3 className={`${isDarkMode ? 'text-orange-100' : 'text-slate-900'} text-xl font-bold mb-2`}>Disclaimer</h3>
                <p className={`${isDarkMode ? 'text-orange-200/70' : 'text-slate-700'} leading-relaxed`}>
                  The materials on this website are provided on an 'as is' basis. We make no warranties, expressed or implied, and hereby disclaim and negate all other warranties.
                </p>
              </div>

              <div>
                <h3 className={`${isDarkMode ? 'text-orange-100' : 'text-slate-900'} text-xl font-bold mb-2`}>Limitations</h3>
                <p className={`${isDarkMode ? 'text-orange-200/70' : 'text-slate-700'} leading-relaxed`}>
                  In no event shall we or our suppliers be liable for any damages arising out of the use or inability to use the materials on this website.
                </p>
              </div>

              <div>
                <h3 className={`${isDarkMode ? 'text-orange-100' : 'text-slate-900'} text-xl font-bold mb-2`}>Modifications</h3>
                <p className={`${isDarkMode ? 'text-orange-200/70' : 'text-slate-700'} leading-relaxed`}>
                  We may revise these terms of service at any time without notice. By using this website you are agreeing to be bound by the current version of these terms.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
