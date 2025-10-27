import { useTranslation } from '../hooks/useTranslation';

export default function About({ isDarkMode }: { isDarkMode: boolean }) {
  const { t } = useTranslation();

  return (
    <section id="about" className="relative pt-32 z-10 px-6">
      <div className="w-full max-w-[725px] mx-auto">
        <div className="w-full">
          <div className="space-y-12 relative animate-fade-in">
            <div className={`absolute left-8 md:left-1/2 top-0 bottom-0 w-px ${isDarkMode ? 'bg-slate-800' : 'bg-slate-200'} md:transform md:-translate-x-1/2`}></div>

            {t.about.timeline.map((item, index) => {
              const isLeft = index % 2 === 0;
              const isLast = index === t.about.timeline.length - 1;
              const animationClass = isLeft ? 'animate-slide-in-left' : 'animate-slide-in-right';
              const delayClass = `animate-delay-${(index + 1) * 100}`;

              return (
                <div key={index} className={`flex group relative ${animationClass} ${delayClass}`}>
                  {isLeft && (
                    <div className="hidden md:block flex-1 pb-8 text-right pr-12">
                      <div className={`${isDarkMode ? 'text-slate-500' : 'text-slate-500'} text-sm mb-2 font-medium`}>{item.period}</div>
                      <h3 className={`${isDarkMode ? 'text-white' : 'text-slate-900'} text-xl font-semibold mb-2`}>{item.title}</h3>
                      <p className={`${isDarkMode ? 'text-slate-400' : 'text-slate-600'} text-sm mb-2`}>{item.company}</p>
                      <p className={`${isDarkMode ? 'text-slate-400' : 'text-slate-600'} leading-relaxed`}>{item.description}</p>
                    </div>
                  )}
                  {!isLeft && <div className="hidden md:block flex-1 pb-8"></div>}
                  <div className="absolute left-[30px] md:left-1/2 top-0 md:transform md:-translate-x-1/2 z-10">
                    <div className={`w-4 h-4 rounded-full ${isLast ? (isDarkMode ? 'bg-slate-700 border-2 border-slate-600' : 'bg-slate-300 border-2 border-slate-400') : (isDarkMode ? 'bg-orange-500 border-2 border-orange-400' : 'bg-slate-900 border-2 border-slate-800')} transition-all`}></div>
                  </div>
                  <div className={`flex-1 pb-8 ${isLeft ? 'pl-16 md:pl-0' : 'pl-16 md:pl-12'}`}>
                    {isLeft && (
                      <div className="md:hidden">
                        <div className={`${isDarkMode ? 'text-slate-500' : 'text-slate-500'} text-sm mb-2 font-medium`}>{item.period}</div>
                        <h3 className={`${isDarkMode ? 'text-white' : 'text-slate-900'} text-xl font-semibold mb-2`}>{item.title}</h3>
                        <p className={`${isDarkMode ? 'text-slate-400' : 'text-slate-600'} text-sm mb-2`}>{item.company}</p>
                        <p className={`${isDarkMode ? 'text-slate-400' : 'text-slate-600'} leading-relaxed`}>{item.description}</p>
                      </div>
                    )}
                    {!isLeft && (
                      <div>
                        <div className={`${isDarkMode ? 'text-slate-500' : 'text-slate-500'} text-sm mb-2 font-medium`}>{item.period}</div>
                        <h3 className={`${isDarkMode ? 'text-white' : 'text-slate-900'} text-xl font-semibold mb-2`}>{item.title}</h3>
                        <p className={`${isDarkMode ? 'text-slate-400' : 'text-slate-600'} text-sm mb-2`}>{item.company}</p>
                        <p className={`${isDarkMode ? 'text-slate-400' : 'text-slate-600'} leading-relaxed`}>{item.description}</p>
                      </div>
                    )}
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
