import { Instagram, Youtube, Linkedin, Mail, Github, Sun, Moon, Languages } from 'lucide-react';
import { useState, useEffect } from 'react';
import { TranslationProvider, useTranslation } from './hooks/useTranslation';

function AppContent({ language, setLanguage, isDarkMode, setIsDarkMode }: { language: 'en' | 'de', setLanguage: (lang: 'en' | 'de') => void, isDarkMode: boolean, setIsDarkMode: (value: boolean) => void }) {
  const { t } = useTranslation();
  const [activeTab, setActiveTab] = useState('about');
  const [selectedProject, setSelectedProject] = useState<number | null>(null);
  const [isTransitioning, setIsTransitioning] = useState(false);
  const [isLanguageDropdownOpen, setIsLanguageDropdownOpen] = useState(false);

  useEffect(() => {
    localStorage.setItem('theme', isDarkMode ? 'dark' : 'light');
  }, [isDarkMode]);

  useEffect(() => {
    localStorage.setItem('language', language);
  }, [language]);

  const handleTabChange = (tab: string) => {
    setIsTransitioning(true);
    setTimeout(() => {
      setActiveTab(tab);
      setIsTransitioning(false);
    }, 300);
  };

  const handleProjectSelect = (id: number) => {
    setIsTransitioning(true);
    setTimeout(() => {
      setSelectedProject(id);
      setIsTransitioning(false);
    }, 300);
  };

  const handleBackToProjects = () => {
    setIsTransitioning(true);
    setTimeout(() => {
      setSelectedProject(null);
      setIsTransitioning(false);
    }, 300);
  };

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, [activeTab, selectedProject]);

  const projects = t.projects.items.map((project, index) => ({
    id: index + 1,
    title: project.title,
    description: project.description,
    longDescription: project.longDescription,
    tags: index === 0 ? ['React', 'Python', 'TensorFlow'] :
          index === 1 ? ['Next.js', 'TypeScript', 'Tailwind'] :
          index === 2 ? ['Vue.js', 'Node.js', 'MongoDB'] :
          ['React', 'Stripe', 'PostgreSQL'],
    github: `https://github.com/example/${project.title.toLowerCase().replace(/\s+/g, '-')}`,
    live: `https://${project.title.toLowerCase().replace(/\s+/g, '-')}.demo`,
    features: project.features
  }));
  return (
    <div className={`relative min-h-screen w-full overflow-hidden ${isDarkMode ? 'bg-gradient-to-br from-gray-950 via-gray-900 to-custom-brown' : 'bg-gradient-to-br from-gray-100 via-slate-50 to-gray-100'} font-mono transition-colors duration-500`}>
      <div
        className="absolute top-0 left-0 w-full h-[300px] z-0 transition-opacity duration-500"
        style={{
          backgroundImage: "url('./wallpaperflare-cropped.jpg')",
          backgroundSize: "cover",
          backgroundPosition: "center",
          maskImage: "linear-gradient(to bottom, rgba(0,0,0,1) 0%, rgba(0,0,0,0) 100%)",
          WebkitMaskImage: "linear-gradient(to bottom, rgba(0,0,0,1) 0%, rgba(0,0,0,0) 100%)",
          zIndex: "1",
          opacity: isDarkMode ? 1 : 1,
        }}
      ></div>

      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className={`absolute top-20 left-[10%] w-96 h-96 bg-gradient-to-br ${isDarkMode ? 'from-orange-500/20 via-amber-500/10' : 'from-blue-500/12 via-blue-400/8'} to-transparent rounded-full blur-3xl transition-colors duration-500`}></div>
        <div className={`absolute top-40 right-[15%] w-[500px] h-[500px] bg-gradient-to-bl ${isDarkMode ? 'from-orange-500/12 via-amber-600/8' : 'from-blue-400/10 via-blue-300/6'} to-transparent rounded-full blur-3xl transition-colors duration-500`}></div>
        <div className={`absolute bottom-40 left-[20%] w-[450px] h-[450px] bg-gradient-to-tr ${isDarkMode ? 'from-amber-500/6 via-orange-600/3' : 'from-blue-300/8 via-blue-400/5'} to-transparent rounded-full blur-3xl transition-colors duration-500`}></div>
      </div>

      <div
        style={{
          width: "100%",
          height: "100%",
          backgroundImage: isDarkMode
            ? "radial-gradient(rgba(251, 146, 60, 0.15) 0.8px, transparent 0.8px)"
            : "radial-gradient(rgba(71, 85, 105, 0.18) 0.8px, transparent 0.8px)",
          backgroundSize: "24px 24px",
          backgroundPosition: "center center",
          position: "absolute",
          top: 0,
          left: 0,
        }}
      ></div>

      <div className="fixed top-8 left-0 right-0 z-50 flex justify-center px-6">
        <div className="w-full md:w-4/5 max-w-[1250px] flex justify-end gap-3">
          <div className="relative">
            <button
              onClick={() => setIsLanguageDropdownOpen(!isLanguageDropdownOpen)}
              className={`p-3 rounded-lg ${isDarkMode ? 'bg-orange-500/10 text-orange-300/60 hover:text-orange-200 hover:bg-orange-500/20' : 'bg-slate-800/90 text-slate-100 hover:text-white hover:bg-slate-900/95'} transition-all duration-300 hover:scale-110 hover:rotate-12 border ${isDarkMode ? 'border-orange-500/20' : 'border-slate-700'}`}
              aria-label="Toggle language"
            >
              <Languages size={24} strokeWidth={1.5} />
            </button>
            {isLanguageDropdownOpen && (
              <div className={`absolute top-full mt-2 right-0 ${isDarkMode ? 'bg-gray-900/95 border-orange-500/20' : 'bg-white/95 border-slate-300'} border rounded-lg shadow-lg backdrop-blur-sm overflow-hidden min-w-[120px]`}>
                <button
                  onClick={() => {
                    setLanguage('en');
                    setIsLanguageDropdownOpen(false);
                  }}
                  className={`w-full px-4 py-3 text-left font-mono text-sm font-semibold transition-colors ${language === 'en' ? (isDarkMode ? 'bg-orange-500/20 text-orange-200' : 'bg-[#273447] text-white') : (isDarkMode ? 'text-orange-300/60 hover:bg-orange-500/10 hover:text-orange-200' : 'text-slate-700 hover:bg-slate-100 hover:text-slate-900')}`}
                >
                  English
                </button>
                <button
                  onClick={() => {
                    setLanguage('de');
                    setIsLanguageDropdownOpen(false);
                  }}
                  className={`w-full px-4 py-3 text-left font-mono text-sm font-semibold transition-colors ${language === 'de' ? (isDarkMode ? 'bg-orange-500/20 text-orange-200' : 'bg-[#273447] text-white') : (isDarkMode ? 'text-orange-300/60 hover:bg-orange-500/10 hover:text-orange-200' : 'text-slate-700 hover:bg-slate-100 hover:text-slate-900')}`}
                >
                  Deutsch
                </button>
              </div>
            )}
          </div>
          <button
            onClick={() => setIsDarkMode(!isDarkMode)}
            className={`p-3 rounded-lg ${isDarkMode ? 'bg-orange-500/10 text-orange-300/60 hover:text-orange-200 hover:bg-orange-500/20' : 'bg-slate-800/90 text-slate-100 hover:text-white hover:bg-slate-900/95'} transition-all duration-300 hover:scale-110 hover:rotate-12 border ${isDarkMode ? 'border-orange-500/20' : 'border-slate-700'}`}
            aria-label="Toggle theme"
          >
            {isDarkMode ? <Sun size={24} strokeWidth={1.5} /> : <Moon size={24} strokeWidth={1.5} />}
          </button>
        </div>
      </div>

      {(activeTab === 'about' || (activeTab === 'projects' && !selectedProject) || activeTab === 'photography' || activeTab === 'skills') && (
      <section id="hero" className="relative pt-32 md:pt-60 pb-12 z-10 flex items-center justify-center px-6">
        <div className="w-full max-w-[1250px] flex flex-col lg:flex-row gap-8 lg:gap-16 relative">
          <div className="absolute left-[-185px] top-0 hidden xl:block">
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-br from-white/10 to-white/5 blur-md rounded-[18px]"></div>
              <img
                src="https://profile-images.xing.com/images/b4547c89e9a533fb14c3c3ab66c76d66-3/ante-leventic.256x256.jpg"
                alt="Ante Leventic"
                className={`relative w-36 h-36 object-cover rounded-[18px] border-2 ${isDarkMode ? 'border-white/20' : 'border-[#273447]'} transform rotate-[-3deg]`}
              />
            </div>
          </div>

          <div className="flex-1 text-center lg:text-left">
            <div className="xl:hidden flex justify-center lg:justify-start mb-4">
              <div className="relative">
                <div className="absolute inset-0 bg-gradient-to-br from-white/10 to-white/5 blur-md rounded-[18px]"></div>
                <img
                  src="https://profile-images.xing.com/images/b4547c89e9a533fb14c3c3ab66c76d66-3/ante-leventic.256x256.jpg"
                  alt="Ante Leventic"
                  className={`relative w-24 h-24 sm:w-32 sm:h-32 object-cover rounded-[18px] border-2 ${isDarkMode ? 'border-white/20' : 'border-[#273447]'} transform rotate-[-3deg]`}
                />
              </div>
            </div>

            <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-3 mb-2">
              <div className={`inline-block px-3 py-1 bg-gradient-to-r ${isDarkMode ? 'from-orange-500/20 to-amber-500/20' : 'from-slate-800/15 to-slate-700/15'} backdrop-blur-sm rounded-md border ${isDarkMode ? 'border-orange-500/30' : 'border-slate-700/50'} leading-none`}>
                <span className={`relative ${isDarkMode ? 'text-orange-300' : 'text-slate-800'} text-xs font-semibold tracking-[0.2em] uppercase leading-none transition-colors duration-500`}>
                  &lt;lewi/&gt;
                </span>
              </div>
              <div className="flex items-center gap-2">
                <div className="relative flex items-center justify-center">
                  <div className="w-2 h-2 bg-green-400 rounded-full"></div>
                  <div className="absolute w-2 h-2 bg-green-400 rounded-full animate-ping"></div>
                </div>
                <span className={`${isDarkMode ? 'text-orange-200/70' : 'text-slate-700'} text-sm transition-colors duration-500`}>
                  available for freelance
                </span>
              </div>
            </div>

            <h1 className={`text-transparent bg-clip-text ${isDarkMode ? 'bg-gradient-to-r from-orange-200 via-amber-100 to-orange-300' : 'bg-gradient-to-r from-slate-900 via-slate-800 to-slate-900'} text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-black tracking-tight mb-6 transition-colors duration-500`}>
              {t.name}
            </h1>

            <div className="flex flex-wrap items-center justify-center lg:justify-start gap-4 sm:gap-6">
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className={`${isDarkMode ? 'text-orange-300/60 hover:text-orange-200' : 'text-slate-700 hover:text-slate-900'} transition-all duration-300 hover:scale-110 hover:rotate-6`}
                aria-label="Instagram"
              >
                <Instagram size={24} strokeWidth={1.5} />
              </a>

              <a
                href="https://youtube.com"
                target="_blank"
                rel="noopener noreferrer"
                className={`${isDarkMode ? 'text-orange-300/60 hover:text-orange-200' : 'text-slate-700 hover:text-slate-900'} transition-all duration-300 hover:scale-110 hover:rotate-6`}
                aria-label="YouTube"
              >
                <Youtube size={24} strokeWidth={1.5} />
              </a>

              <a
                href="https://xing.com"
                target="_blank"
                rel="noopener noreferrer"
                className={`${isDarkMode ? 'text-orange-300/60 hover:text-orange-200' : 'text-slate-700 hover:text-slate-900'} transition-all duration-300 hover:scale-110 hover:rotate-6`}
                aria-label="Xing"
              >
                <svg
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M3.06 6.5h3.72L9 11.28 5.78 17H2.06l3.22-5.72L3.06 6.5zm8.16-4.5h4.5l7.28 12.96L17.94 22h-4.5l5.06-7.54L11.22 2z" />
                </svg>
              </a>

              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                className={`${isDarkMode ? 'text-orange-300/60 hover:text-orange-200' : 'text-slate-700 hover:text-slate-900'} transition-all duration-300 hover:scale-110 hover:rotate-6`}
                aria-label="LinkedIn"
              >
                <Linkedin size={24} strokeWidth={1.5} />
              </a>

              <a
                href="https://github.com"
                target="_blank"
                rel="noopener noreferrer"
                className={`${isDarkMode ? 'text-orange-300/60 hover:text-orange-200' : 'text-slate-700 hover:text-slate-900'} transition-all duration-300 hover:scale-110 hover:rotate-6`}
                aria-label="GitHub"
              >
                <Github size={24} strokeWidth={1.5} />
              </a>

              <a
                href="mailto:contact@example.com"
                className={`${isDarkMode ? 'text-orange-300/60 hover:text-orange-200' : 'text-slate-700 hover:text-slate-900'} transition-all duration-300 hover:scale-110 hover:rotate-6`}
                aria-label="Email"
              >
                <Mail size={24} strokeWidth={1.5} />
              </a>
            </div>
              <div className="mt-8 md:mt-14 flex flex-wrap justify-center lg:justify-start gap-3">
                <button
                  onClick={() => handleTabChange('about')}
                  className={`px-4 lg:px-5 py-2 lg:py-2.5 text-[0.65rem] lg:text-xs font-bold tracking-[0.2em] uppercase transition-all duration-300 rounded-lg relative overflow-hidden group transform hover:scale-105 hover:-translate-y-0.5 ${
                    activeTab === 'about'
                      ? isDarkMode
                        ? 'bg-gradient-to-r from-orange-500 to-amber-500 text-gray-900 shadow-lg shadow-orange-500/30'
                        : 'bg-[#273447] text-white shadow-lg shadow-[#273447]/30'
                      : isDarkMode
                        ? 'bg-orange-500/10 text-orange-300/70 hover:bg-orange-500/20 hover:text-orange-200 border border-orange-500/20 hover:shadow-md hover:shadow-orange-500/20'
                        : 'bg-slate-800/15 text-slate-800 hover:bg-slate-800/25 hover:text-slate-900 border border-slate-700/50 hover:shadow-md hover:shadow-slate-300'
                  }`}
                >
                  <span className="relative z-10">{t.tabs.about}</span>
                  {activeTab === 'about' && <div className={`absolute inset-0 ${isDarkMode ? 'bg-gradient-to-r from-orange-400 to-amber-400' : 'bg-[#273447]'} opacity-0 group-hover:opacity-20 transition-opacity`}></div>}
                </button>
                <button
                  onClick={() => handleTabChange('projects')}
                  className={`px-4 lg:px-5 py-2 lg:py-2.5 text-[0.65rem] lg:text-xs font-bold tracking-[0.2em] uppercase transition-all duration-300 rounded-lg relative overflow-hidden group transform hover:scale-105 hover:-translate-y-0.5 ${
                    activeTab === 'projects'
                      ? isDarkMode
                        ? 'bg-gradient-to-r from-orange-500 to-amber-500 text-gray-900 shadow-lg shadow-orange-500/30'
                        : 'bg-[#273447] text-white shadow-lg shadow-[#273447]/30'
                      : isDarkMode
                        ? 'bg-orange-500/10 text-orange-300/70 hover:bg-orange-500/20 hover:text-orange-200 border border-orange-500/20 hover:shadow-md hover:shadow-orange-500/20'
                        : 'bg-slate-800/15 text-slate-800 hover:bg-slate-800/25 hover:text-slate-900 border border-slate-700/50 hover:shadow-md hover:shadow-slate-300'
                  }`}
                >
                  <span className="relative z-10">{t.tabs.projects}</span>
                  {activeTab === 'projects' && <div className={`absolute inset-0 ${isDarkMode ? 'bg-gradient-to-r from-orange-400 to-amber-400' : 'bg-[#273447]'} opacity-0 group-hover:opacity-20 transition-opacity`}></div>}
                </button>
                <button
                  onClick={() => handleTabChange('photography')}
                  className={`px-4 lg:px-5 py-2 lg:py-2.5 text-[0.65rem] lg:text-xs font-bold tracking-[0.2em] uppercase transition-all duration-300 rounded-lg relative overflow-hidden group transform hover:scale-105 hover:-translate-y-0.5 ${
                    activeTab === 'photography'
                      ? isDarkMode
                        ? 'bg-gradient-to-r from-orange-500 to-amber-500 text-gray-900 shadow-lg shadow-orange-500/30'
                        : 'bg-[#273447] text-white shadow-lg shadow-[#273447]/30'
                      : isDarkMode
                        ? 'bg-orange-500/10 text-orange-300/70 hover:bg-orange-500/20 hover:text-orange-200 border border-orange-500/20 hover:shadow-md hover:shadow-orange-500/20'
                        : 'bg-slate-800/15 text-slate-800 hover:bg-slate-800/25 hover:text-slate-900 border border-slate-700/50 hover:shadow-md hover:shadow-slate-300'
                  }`}
                >
                  <span className="relative z-10">{t.tabs.photography}</span>
                  {activeTab === 'photography' && <div className={`absolute inset-0 ${isDarkMode ? 'bg-gradient-to-r from-orange-400 to-amber-400' : 'bg-[#273447]'} opacity-0 group-hover:opacity-20 transition-opacity`}></div>}
                </button>
                <button
                  onClick={() => handleTabChange('skills')}
                  className={`px-4 lg:px-5 py-2 lg:py-2.5 text-[0.65rem] lg:text-xs font-bold tracking-[0.2em] uppercase transition-all duration-300 rounded-lg relative overflow-hidden group transform hover:scale-105 hover:-translate-y-0.5 ${
                    activeTab === 'skills'
                      ? isDarkMode
                        ? 'bg-gradient-to-r from-orange-500 to-amber-500 text-gray-900 shadow-lg shadow-orange-500/30'
                        : 'bg-[#273447] text-white shadow-lg shadow-[#273447]/30'
                      : isDarkMode
                        ? 'bg-orange-500/10 text-orange-300/70 hover:bg-orange-500/20 hover:text-orange-200 border border-orange-500/20 hover:shadow-md hover:shadow-orange-500/20'
                        : 'bg-slate-800/15 text-slate-800 hover:bg-slate-800/25 hover:text-slate-900 border border-slate-700/50 hover:shadow-md hover:shadow-slate-300'
                  }`}
                >
                  <span className="relative z-10">{t.tabs.skills}</span>
                  {activeTab === 'skills' && <div className={`absolute inset-0 ${isDarkMode ? 'bg-gradient-to-r from-orange-400 to-amber-400' : 'bg-[#273447]'} opacity-0 group-hover:opacity-20 transition-opacity`}></div>}
                </button>
              </div>

          </div>

          <div className="flex flex-col lg:flex-row items-center lg:items-start gap-4 lg:gap-8 w-full lg:w-auto">
            <div className={`hidden lg:block h-px w-12 bg-gradient-to-r ${isDarkMode ? 'from-orange-500/50' : 'from-slate-400/50'} to-transparent mt-2`}></div>
            <div className="w-full max-w-2xl lg:max-w-xs text-center lg:text-left px-4 lg:px-0">
              <p className={`${isDarkMode ? 'text-orange-100/80' : 'text-slate-700'} text-sm sm:text-base leading-relaxed mb-6 lg:mb-8 transition-colors duration-500`}>
                {t.hero.description}
              </p>
              <div className="hidden lg:flex justify-center lg:justify-start gap-6 sm:gap-8 mb-8">
                <div className="group cursor-default">
                  <div className={`text-transparent bg-clip-text ${isDarkMode ? 'bg-gradient-to-br from-orange-300 to-amber-400' : 'bg-gradient-to-br from-slate-800 to-slate-700'} text-3xl sm:text-4xl font-black mb-1 group-hover:scale-110 transition-transform`}>10+</div>
                  <div className={`${isDarkMode ? 'text-orange-300/60' : 'text-slate-600'} text-xs uppercase tracking-[0.2em]`}>{t.hero.yearsExperience}</div>
                </div>
                <div className="group cursor-default">
                  <div className={`text-transparent bg-clip-text ${isDarkMode ? 'bg-gradient-to-br from-orange-300 to-amber-400' : 'bg-gradient-to-br from-slate-800 to-slate-700'} text-3xl sm:text-4xl font-black mb-1 group-hover:scale-110 transition-transform`}>50+</div>
                  <div className={`${isDarkMode ? 'text-orange-300/60' : 'text-slate-600'} text-xs uppercase tracking-[0.2em]`}>{t.hero.projects}</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      )}

      {activeTab === 'about' && (
      <section id="about" className={`relative z-10 px-6 transition-opacity duration-300 ${isTransitioning ? 'opacity-0' : 'opacity-100'}`}>
        <div className="w-full max-w-[1250px] mx-auto">
          <div className="w-full">
            <div className="space-y-12 relative animate-fade-in">
              <div className={`absolute left-8 md:left-1/2 top-0 bottom-0 w-px bg-gradient-to-b ${isDarkMode ? 'from-orange-500/30 via-orange-500/20' : 'from-slate-400/40 via-slate-400/20'} to-transparent md:transform md:-translate-x-1/2`}></div>

              {t.about.timeline.map((item, index) => {
                const isLeft = index % 2 === 0;
                const isLast = index === t.about.timeline.length - 1;
                const animationClass = isLeft ? 'animate-slide-in-left' : 'animate-slide-in-right';
                const delayClass = `animate-delay-${(index + 1) * 100}`;

                return (
                  <div key={index} className={`flex group relative ${animationClass} ${delayClass}`}>
                    {isLeft && (
                      <div className="hidden md:block flex-1 pb-8 text-right pr-12">
                        <div className={`${isDarkMode ? 'text-orange-400/70' : 'text-slate-600'} text-sm mb-2 font-mono`}>{item.period}</div>
                        <h3 className={`${isDarkMode ? 'text-orange-100' : 'text-slate-900'} text-xl font-bold mb-2`}>{item.title}</h3>
                        <p className={`${isDarkMode ? 'text-orange-300/60' : 'text-slate-600'} text-sm mb-2 font-mono`}>{item.company}</p>
                        <p className={`${isDarkMode ? 'text-orange-100/70' : 'text-slate-700'} leading-relaxed`}>{item.description}</p>
                      </div>
                    )}
                    {!isLeft && <div className="hidden md:block flex-1 pb-8"></div>}
                    <div className="absolute left-[30px] md:left-1/2 top-0 md:transform md:-translate-x-1/2 z-10">
                      <div className={`w-4 h-4 rounded-full ${isLast ? (isDarkMode ? 'bg-white/20 border-2 border-white/40 group-hover:bg-white/40' : 'bg-slate-400/40 border-2 border-slate-500/60 group-hover:bg-slate-500/60 shadow-lg shadow-slate-500/20') : (isDarkMode ? 'bg-orange-500/30 border-2 border-orange-400/50 group-hover:bg-orange-400/50 shadow-lg shadow-orange-500/30' : 'bg-slate-400/40 border-2 border-slate-500/60 group-hover:bg-slate-500/60 shadow-lg shadow-slate-500/20')} group-hover:scale-125 transition-all`}></div>
                    </div>
                    <div className={`flex-1 pb-8 ${isLeft ? 'pl-16 md:pl-0' : 'pl-16 md:pl-12'}`}>
                      {isLeft && (
                        <div className="md:hidden">
                          <div className={`${isDarkMode ? 'text-orange-400/70' : 'text-slate-600'} text-sm mb-2 font-mono`}>{item.period}</div>
                          <h3 className={`${isDarkMode ? 'text-orange-100' : 'text-slate-900'} text-xl font-bold mb-2`}>{item.title}</h3>
                          <p className={`${isDarkMode ? 'text-orange-300/60' : 'text-slate-600'} text-sm mb-2 font-mono`}>{item.company}</p>
                          <p className={`${isDarkMode ? 'text-orange-100/70' : 'text-slate-700'} leading-relaxed`}>{item.description}</p>
                        </div>
                      )}
                      {!isLeft && (
                        <div>
                          <div className={`${isDarkMode ? 'text-orange-400/70' : 'text-slate-600'} text-sm mb-2 font-mono`}>{item.period}</div>
                          <h3 className={`${isDarkMode ? 'text-orange-100' : 'text-slate-900'} text-xl font-bold mb-2`}>{item.title}</h3>
                          <p className={`${isDarkMode ? 'text-orange-300/60' : 'text-slate-600'} text-sm mb-2 font-mono`}>{item.company}</p>
                          <p className={`${isDarkMode ? 'text-orange-100/70' : 'text-slate-700'} leading-relaxed`}>{item.description}</p>
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
      )}

      {activeTab === 'projects' && !selectedProject && (
      <section id="projects" className={`relative z-10 px-6 transition-opacity duration-300 ${isTransitioning ? 'opacity-0' : 'opacity-100'}`}>
        <div className="w-full max-w-[1250px] mx-auto">
          <div className="w-full">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 animate-fade-in">
              {projects.map((project, index) => (
                <div
                  key={project.id}
                  onClick={() => handleProjectSelect(project.id)}
                  className={`group relative overflow-hidden rounded-lg ${isDarkMode ? 'bg-gradient-to-br from-orange-500/10 to-amber-500/5 border-orange-500/20 hover:border-orange-400/40 hover:shadow-orange-500/10' : 'bg-white/80 border-slate-300 hover:border-slate-400 hover:shadow-slate-200'} backdrop-blur-sm border p-6 transition-all duration-300 hover:shadow-lg cursor-pointer hover:scale-105 hover:-translate-y-1 animate-fade-in-up`}
                  style={{ animationDelay: `${index * 100}ms` }}
                >
                  <h3 className={`${isDarkMode ? 'text-orange-100' : 'text-slate-900'} text-xl font-bold mb-2`}>{project.title}</h3>
                  <p className={`${isDarkMode ? 'text-orange-200/60' : 'text-slate-600'} text-sm mb-4`}>{project.description}</p>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.tags.map((tag, index) => (
                      <span key={index} className={`px-2 py-1 ${isDarkMode ? 'bg-orange-500/20 text-orange-300' : 'bg-slate-200 text-slate-700'} rounded text-xs font-mono`}>{tag}</span>
                    ))}
                  </div>
                  <div className={`${isDarkMode ? 'text-orange-400 hover:text-orange-300' : 'text-slate-700 hover:text-slate-900'} text-sm transition-colors font-mono`}>View Project →</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
      )}

      {activeTab === 'projects' && selectedProject && (
      <>
        <div
          className="absolute top-0 left-0 w-full h-[300px] z-0"
          style={{
            backgroundImage: "url('./wallpaperflare-cropped.jpg')",
            backgroundSize: "cover",
            backgroundPosition: "center",
            maskImage: "linear-gradient(to bottom, rgba(0,0,0,1) 0%, rgba(0,0,0,0) 100%)",
            WebkitMaskImage: "linear-gradient(to bottom, rgba(0,0,0,1) 0%, rgba(0,0,0,0) 100%)",
            zIndex: "1",
          }}
        ></div>

        <section id="project-detail" className={`relative z-10 px-6 pt-60 transition-opacity duration-300 ${isTransitioning ? 'opacity-0' : 'opacity-100'}`}>
          <div className="w-full max-w-[1250px] mx-auto">
            <div className="w-full md:w-[80%] mx-auto">
              <button
                onClick={handleBackToProjects}
                className={`mb-12 ${isDarkMode ? 'text-orange-400 hover:text-orange-300' : 'text-slate-700 hover:text-slate-900'} transition-all duration-200 flex items-center gap-2 group hover:scale-105 animate-fade-in`}
              >
                <span className="group-hover:-translate-x-1 transition-transform">←</span> {t.projects.backToProjects}
              </button>
            {projects.filter(p => p.id === selectedProject).map((project) => (
              <div key={project.id} className="space-y-6">
                <div className="animate-fade-in-up">
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.tags.map((tag, index) => (
                      <span key={index} className={`px-2.5 py-1 ${isDarkMode ? 'bg-orange-500/20 text-orange-300' : 'bg-slate-200 text-slate-700'} rounded text-xs font-mono`}>{tag}</span>
                    ))}
                  </div>

                  <h2 className={`${isDarkMode ? 'text-orange-100' : 'text-slate-900'} text-3xl font-bold mb-6`}>{project.title}</h2>

                  <div className="grid grid-cols-3 gap-3 mb-6">
                    <img
                      src="https://images.pexels.com/photos/1181671/pexels-photo-1181671.jpeg?auto=compress&cs=tinysrgb&w=800"
                      alt="Project screenshot 1"
                      className={`w-full h-48 object-cover rounded-lg border ${isDarkMode ? 'border-orange-500/20' : 'border-slate-300'}`}
                    />
                    <img
                      src="https://images.pexels.com/photos/546819/pexels-photo-546819.jpeg?auto=compress&cs=tinysrgb&w=800"
                      alt="Project screenshot 2"
                      className={`w-full h-48 object-cover rounded-lg border ${isDarkMode ? 'border-orange-500/20' : 'border-slate-300'}`}
                    />
                    <img
                      src="https://images.pexels.com/photos/1181244/pexels-photo-1181244.jpeg?auto=compress&cs=tinysrgb&w=800"
                      alt="Project screenshot 3"
                      className={`w-full h-48 object-cover rounded-lg border ${isDarkMode ? 'border-orange-500/20' : 'border-slate-300'}`}
                    />
                  </div>

                  <p className={`${isDarkMode ? 'text-orange-200/80' : 'text-slate-700'} text-base leading-relaxed mb-6`}>{project.longDescription}</p>

                  <div>
                    <h3 className={`${isDarkMode ? 'text-orange-100' : 'text-slate-900'} text-xl font-bold mb-4`}>{t.projects.keyFeatures}</h3>
                    <ul className="space-y-2 mb-8">
                      {project.features.map((feature, index) => (
                        <li key={index} className="flex items-start gap-3">
                          <span className={`${isDarkMode ? 'text-orange-400' : 'text-slate-600'} mt-1`}>▸</span>
                          <span className={`${isDarkMode ? 'text-orange-200/70' : 'text-slate-700'}`}>{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="flex gap-4">
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={`px-6 py-2.5 ${isDarkMode ? 'bg-gradient-to-r from-orange-500 to-amber-500 text-gray-900 hover:shadow-orange-500/30' : 'bg-[#273447] text-white hover:shadow-[#273447]/30'} font-bold text-sm rounded-lg hover:shadow-lg transition-all`}
                    >
                      {t.projects.viewOnGithub}
                    </a>
                    <a
                      href={project.live}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={`px-6 py-2.5 ${isDarkMode ? 'bg-orange-500/10 text-orange-300 border-orange-500/20 hover:bg-orange-500/20 hover:border-orange-400/40' : 'bg-slate-100 text-slate-800 border-slate-300 hover:bg-slate-200 hover:border-slate-400'} font-bold text-sm rounded-lg border transition-all`}
                    >
                      {t.projects.viewLive}
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
      </>
      )}

      {activeTab === 'photography' && (
      <section id="photography" className={`relative z-10 px-6 transition-opacity duration-300 ${isTransitioning ? 'opacity-0' : 'opacity-100'}`}>
        <div className="w-full max-w-[1250px] mx-auto">
          <div className="w-full">
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 auto-rows-[150px] gap-3 animate-fade-in">
              <div className="col-span-1 row-span-1 overflow-hidden rounded-lg group">
                <img
                  src="https://images.pexels.com/photos/1906658/pexels-photo-1906658.jpeg?auto=compress&cs=tinysrgb&w=800"
                  alt="Photography"
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                />
              </div>

              <div className="col-span-2 md:col-span-2 lg:col-span-2 row-span-2 overflow-hidden rounded-lg group">
                <img
                  src="https://images.pexels.com/photos/1308940/pexels-photo-1308940.jpeg?auto=compress&cs=tinysrgb&w=600"
                  alt="Photography"
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                />
              </div>

              <div className="col-span-1 md:col-span-1 lg:col-span-1 row-span-2 overflow-hidden rounded-lg group">
                <img
                  src="https://images.pexels.com/photos/1366919/pexels-photo-1366919.jpeg?auto=compress&cs=tinysrgb&w=600"
                  alt="Photography"
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                />
              </div>

              <div className="col-span-1 md:col-span-1 lg:col-span-1 row-span-2 overflow-hidden rounded-lg group">
                <img
                  src="https://images.pexels.com/photos/1450360/pexels-photo-1450360.jpeg?auto=compress&cs=tinysrgb&w=800"
                  alt="Photography"
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                />
              </div>

              <div className="col-span-2 md:col-span-2 lg:col-span-2 row-span-1 overflow-hidden rounded-lg group">
                <img
                  src="https://images.pexels.com/photos/1212487/pexels-photo-1212487.jpeg?auto=compress&cs=tinysrgb&w=1200"
                  alt="Photography"
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                />
              </div>

              <div className="col-span-1 row-span-1 overflow-hidden rounded-lg group">
                <img
                  src="https://images.pexels.com/photos/1252500/pexels-photo-1252500.jpeg?auto=compress&cs=tinysrgb&w=800"
                  alt="Photography"
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                />
              </div>

              <div className="col-span-1 md:col-span-1 lg:col-span-1 row-span-2 overflow-hidden rounded-lg group">
                <img
                  src="https://images.pexels.com/photos/1456291/pexels-photo-1456291.jpeg?auto=compress&cs=tinysrgb&w=600"
                  alt="Photography"
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                />
              </div>

              <div className="col-span-1 row-span-1 overflow-hidden rounded-lg group">
                <img
                  src="https://images.pexels.com/photos/2662116/pexels-photo-2662116.jpeg?auto=compress&cs=tinysrgb&w=600"
                  alt="Photography"
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                />
              </div>

              <div className="col-span-2 md:col-span-2 lg:col-span-2 row-span-2 overflow-hidden rounded-lg group">
                <img
                  src="https://images.pexels.com/photos/1007427/pexels-photo-1007427.jpeg?auto=compress&cs=tinysrgb&w=1200"
                  alt="Photography"
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                />
              </div>

              <div className="col-span-1 row-span-1 overflow-hidden rounded-lg group">
                <img
                  src="https://images.pexels.com/photos/1496372/pexels-photo-1496372.jpeg?auto=compress&cs=tinysrgb&w=600"
                  alt="Photography"
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                />
              </div>

              <div className="col-span-1 md:col-span-1 lg:col-span-1 row-span-2 overflow-hidden rounded-lg group">
                <img
                  src="https://images.pexels.com/photos/1525041/pexels-photo-1525041.jpeg?auto=compress&cs=tinysrgb&w=600"
                  alt="Photography"
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                />
              </div>

              <div className="col-span-2 md:col-span-2 lg:col-span-2 row-span-1 overflow-hidden rounded-lg group">
                <img
                  src="https://images.pexels.com/photos/1323550/pexels-photo-1323550.jpeg?auto=compress&cs=tinysrgb&w=1200"
                  alt="Photography"
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                />
              </div>
            </div>
          </div>
        </div>
      </section>
      )}

      {activeTab === 'skills' && (
      <section id="skills" className={`relative z-10 px-6 transition-opacity duration-300 ${isTransitioning ? 'opacity-0' : 'opacity-100'}`}>
        <div className="w-full max-w-[1250px] mx-auto">
          <div className="w-full">
            <div className="flex flex-wrap gap-3 animate-fade-in">
              <span className={`px-4 py-2 ${isDarkMode ? 'bg-gradient-to-r from-orange-500/10 to-amber-500/10 border-orange-500/30 text-orange-200 hover:border-orange-400/50 hover:shadow-orange-500/20' : 'bg-white/80 border-slate-300 text-slate-800 hover:border-slate-400 hover:shadow-slate-200'} backdrop-blur-sm rounded-lg border text-base font-mono hover:shadow-lg hover:scale-105 transition-all cursor-default`}>React</span>
              <span className={`px-4 py-2 ${isDarkMode ? 'bg-gradient-to-r from-orange-500/10 to-amber-500/10 border-orange-500/30 text-orange-200 hover:border-orange-400/50 hover:shadow-orange-500/20' : 'bg-white/80 border-slate-300 text-slate-800 hover:border-slate-400 hover:shadow-slate-200'} backdrop-blur-sm rounded-lg border text-base font-mono hover:shadow-lg hover:scale-105 transition-all cursor-default`}>TypeScript</span>
              <span className={`px-4 py-2 ${isDarkMode ? 'bg-gradient-to-r from-orange-500/10 to-amber-500/10 border-orange-500/30 text-orange-200 hover:border-orange-400/50 hover:shadow-orange-500/20' : 'bg-white/80 border-slate-300 text-slate-800 hover:border-slate-400 hover:shadow-slate-200'} backdrop-blur-sm rounded-lg border text-base font-mono hover:shadow-lg hover:scale-105 transition-all cursor-default`}>Node.js</span>
              <span className={`px-4 py-2 ${isDarkMode ? 'bg-gradient-to-r from-orange-500/10 to-amber-500/10 border-orange-500/30 text-orange-200 hover:border-orange-400/50 hover:shadow-orange-500/20' : 'bg-white/80 border-slate-300 text-slate-800 hover:border-slate-400 hover:shadow-slate-200'} backdrop-blur-sm rounded-lg border text-base font-mono hover:shadow-lg hover:scale-105 transition-all cursor-default`}>AI/ML</span>
              <span className={`px-4 py-2 ${isDarkMode ? 'bg-gradient-to-r from-orange-500/10 to-amber-500/10 border-orange-500/30 text-orange-200 hover:border-orange-400/50 hover:shadow-orange-500/20' : 'bg-white/80 border-slate-300 text-slate-800 hover:border-slate-400 hover:shadow-slate-200'} backdrop-blur-sm rounded-lg border text-base font-mono hover:shadow-lg hover:scale-105 transition-all cursor-default`}>Photography</span>
              <span className={`px-4 py-2 ${isDarkMode ? 'bg-gradient-to-r from-orange-500/10 to-amber-500/10 border-orange-500/30 text-orange-200 hover:border-orange-400/50 hover:shadow-orange-500/20' : 'bg-white/80 border-slate-300 text-slate-800 hover:border-slate-400 hover:shadow-slate-200'} backdrop-blur-sm rounded-lg border text-base font-mono hover:shadow-lg hover:scale-105 transition-all cursor-default`}>UI/UX Design</span>
            </div>
          </div>
        </div>
      </section>
      )}

      {activeTab === 'privacy' && (
      <>
        <div
          className="absolute top-0 left-0 w-full h-[300px] z-0"
          style={{
            backgroundImage: "url('./wallpaperflare-cropped.jpg')",
            backgroundSize: "cover",
            backgroundPosition: "center",
            maskImage: "linear-gradient(to bottom, rgba(0,0,0,1) 0%, rgba(0,0,0,0) 100%)",
            WebkitMaskImage: "linear-gradient(to bottom, rgba(0,0,0,1) 0%, rgba(0,0,0,0) 100%)",
            zIndex: "1",
          }}
        ></div>

        <section id="privacy" className={`relative z-10 px-6 pt-60 transition-opacity duration-300 ${isTransitioning ? 'opacity-0' : 'opacity-100'}`}>
          <div className="w-full max-w-[1250px] mx-auto">
            <button
              onClick={() => handleTabChange('about')}
              className={`mb-12 ${isDarkMode ? 'text-orange-400 hover:text-orange-300' : 'text-slate-700 hover:text-slate-900'} transition-all duration-200 flex items-center gap-2 group hover:scale-105`}
            >
              <span className="group-hover:-translate-x-1 transition-transform">←</span> Back
            </button>
            <div className="w-full">
              <div className="space-y-6 animate-fade-in-up">
                <h2 className={`${isDarkMode ? 'text-orange-100' : 'text-slate-900'} text-3xl font-bold mb-6`}>Privacy Policy</h2>

                <div className="space-y-4">
                  <div>
                    <h3 className={`${isDarkMode ? 'text-orange-100' : 'text-slate-900'} text-xl font-bold mb-2`}>Information Collection</h3>
                    <p className={`${isDarkMode ? 'text-orange-200/70' : 'text-slate-700'} leading-relaxed`}>
                      We collect information you provide directly to us, including name, email address, and any other information you choose to provide when using our services.
                    </p>
                  </div>

                  <div>
                    <h3 className={`${isDarkMode ? 'text-orange-100' : 'text-slate-900'} text-xl font-bold mb-2`}>Use of Information</h3>
                    <p className={`${isDarkMode ? 'text-orange-200/70' : 'text-slate-700'} leading-relaxed`}>
                      We use the information we collect to provide, maintain, and improve our services, to communicate with you, and to protect our users and services.
                    </p>
                  </div>

                  <div>
                    <h3 className={`${isDarkMode ? 'text-orange-100' : 'text-slate-900'} text-xl font-bold mb-2`}>Data Security</h3>
                    <p className={`${isDarkMode ? 'text-orange-200/70' : 'text-slate-700'} leading-relaxed`}>
                      We take reasonable measures to help protect your personal information from loss, theft, misuse, unauthorized access, disclosure, alteration, and destruction.
                    </p>
                  </div>

                  <div>
                    <h3 className={`${isDarkMode ? 'text-orange-100' : 'text-slate-900'} text-xl font-bold mb-2`}>Your Rights</h3>
                    <p className={`${isDarkMode ? 'text-orange-200/70' : 'text-slate-700'} leading-relaxed`}>
                      You have the right to access, update, or delete your personal information at any time. Contact us if you wish to exercise these rights.
                    </p>
                  </div>

                  <div>
                    <h3 className={`${isDarkMode ? 'text-orange-100' : 'text-slate-900'} text-xl font-bold mb-2`}>Contact</h3>
                    <p className={`${isDarkMode ? 'text-orange-200/70' : 'text-slate-700'} leading-relaxed`}>
                      If you have any questions about this Privacy Policy, please contact us at privacy@anteleventic.com
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </>
      )}

      {activeTab === 'terms' && (
      <>
        <div
          className="absolute top-0 left-0 w-full h-[300px] z-0"
          style={{
            backgroundImage: "url('./wallpaperflare-cropped.jpg')",
            backgroundSize: "cover",
            backgroundPosition: "center",
            maskImage: "linear-gradient(to bottom, rgba(0,0,0,1) 0%, rgba(0,0,0,0) 100%)",
            WebkitMaskImage: "linear-gradient(to bottom, rgba(0,0,0,1) 0%, rgba(0,0,0,0) 100%)",
            zIndex: "1",
          }}
        ></div>

        <section id="terms" className={`relative z-10 px-6 pt-60 transition-opacity duration-300 ${isTransitioning ? 'opacity-0' : 'opacity-100'}`}>
          <div className="w-full max-w-[1250px] mx-auto">
            <button
              onClick={() => handleTabChange('about')}
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
      </>
      )}

      <footer className="relative z-10 mt-24 pb-12 px-6">
        <div className="w-full max-w-[1250px] mx-auto">
          <div className={`border-t ${isDarkMode ? 'border-orange-500/20' : 'border-slate-300'} pt-8`}>
            <div className="flex flex-col md:flex-row justify-between items-center gap-4">
              <p className={`${isDarkMode ? 'text-orange-300/50' : 'text-slate-600'} text-sm font-mono`}>
                {t.footer.copyright}
              </p>
              <div className="flex items-center gap-6">
                <button onClick={() => handleTabChange('privacy')} className={`${isDarkMode ? 'text-orange-300/50 hover:text-orange-200' : 'text-slate-600 hover:text-slate-900'} transition-all duration-200 text-sm font-mono hover:translate-x-1`}>{t.footer.privacy}</button>
                <button onClick={() => handleTabChange('terms')} className={`${isDarkMode ? 'text-orange-300/50 hover:text-orange-200' : 'text-slate-600 hover:text-slate-900'} transition-all duration-200 text-sm font-mono hover:translate-x-1`}>{t.footer.terms}</button>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}

function App() {
  const [language, setLanguage] = useState<'en' | 'de'>(() => {
    const savedLanguage = localStorage.getItem('language') as 'en' | 'de' | null;
    if (savedLanguage) {
      return savedLanguage;
    }
    const browserLanguage = navigator.language.toLowerCase();
    return browserLanguage.startsWith('de') ? 'de' : 'en';
  });

  const [isDarkMode, setIsDarkMode] = useState(() => {
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme) {
      return savedTheme === 'dark';
    }
    const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
    return prefersDark;
  });

  return (
    <TranslationProvider language={language}>
      <AppContent language={language} setLanguage={setLanguage} isDarkMode={isDarkMode} setIsDarkMode={setIsDarkMode} />
    </TranslationProvider>
  );
}

export default App;
