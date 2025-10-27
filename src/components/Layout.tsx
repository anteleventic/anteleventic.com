import { Sun, Moon, Languages, Menu, X } from 'lucide-react';
import { useState, useEffect, ReactNode } from 'react';
import { useTranslation } from '../hooks/useTranslation';
import { useNavigate, useLocation } from 'react-router-dom';

interface LayoutProps {
  children: ReactNode;
  language: 'en' | 'de';
  setLanguage: (lang: 'en' | 'de') => void;
  isDarkMode: boolean;
  setIsDarkMode: (value: boolean) => void;
}

export default function Layout({ children, language, setLanguage, isDarkMode, setIsDarkMode }: LayoutProps) {
  const { t } = useTranslation();
  const navigate = useNavigate();
  const location = useLocation();
  const [isLanguageDropdownOpen, setIsLanguageDropdownOpen] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    localStorage.setItem('theme', isDarkMode ? 'dark' : 'light');
  }, [isDarkMode]);

  useEffect(() => {
    localStorage.setItem('language', language);
  }, [language]);

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
    setIsMobileMenuOpen(false);
  }, [location.pathname]);

  const getActiveTab = () => {
    if (location.pathname === '/') return 'home';
    if (location.pathname.startsWith('/projects')) return 'projects';
    return location.pathname.slice(1);
  };

  const activeTab = getActiveTab();

  return (
    <div className={`relative min-h-screen w-full overflow-hidden ${isDarkMode ? 'bg-slate-950' : 'bg-white'} transition-colors duration-500`}>
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className={`absolute top-0 left-1/2 -translate-x-1/2 w-[1000px] h-[800px] ${isDarkMode ? 'bg-orange-500/10' : 'bg-slate-300/30'} rounded-full blur-3xl transition-colors duration-500`}></div>
        <div className={`absolute top-[30%] right-[10%] w-[600px] h-[600px] ${isDarkMode ? 'bg-orange-400/5' : 'bg-blue-300/20'} rounded-full blur-3xl transition-colors duration-500`}></div>
        <div className={`absolute bottom-[10%] left-[5%] w-[700px] h-[700px] ${isDarkMode ? 'bg-orange-600/5' : 'bg-slate-200/30'} rounded-full blur-3xl transition-colors duration-500`}></div>
      </div>

      <div className="absolute inset-0 pointer-events-none" style={{
        backgroundImage: isDarkMode
          ? 'radial-gradient(circle at 2px 2px, rgba(148, 163, 184, 0.15) 1px, transparent 0)'
          : 'radial-gradient(circle at 2px 2px, rgba(100, 116, 139, 0.25) 1px, transparent 0)',
        backgroundSize: '40px 40px',
      }}></div>

      <div className="absolute inset-0 pointer-events-none">
        <div className={`absolute top-24 right-[12%] w-[500px] h-px ${isDarkMode ? 'bg-gradient-to-r from-transparent via-slate-700/60 to-transparent' : 'bg-gradient-to-r from-transparent via-slate-300/80 to-transparent'} rotate-12`}></div>
        <div className={`absolute top-[35%] left-[8%] w-[400px] h-px ${isDarkMode ? 'bg-gradient-to-r from-transparent via-orange-500/20 to-transparent' : 'bg-gradient-to-r from-transparent via-blue-300/60 to-transparent'} -rotate-6`}></div>
        <div className={`absolute bottom-40 right-[20%] w-[450px] h-px ${isDarkMode ? 'bg-gradient-to-r from-transparent via-slate-700/60 to-transparent' : 'bg-gradient-to-r from-transparent via-slate-300/80 to-transparent'} rotate-6`}></div>
        <div className={`absolute top-[60%] left-[15%] w-[350px] h-px ${isDarkMode ? 'bg-gradient-to-r from-transparent via-orange-500/20 to-transparent' : 'bg-gradient-to-r from-transparent via-slate-300/60 to-transparent'} -rotate-12`}></div>
      </div>

      <nav className="fixed top-6 left-0 right-0 z-50 flex justify-center px-6">
        <div className={`w-full md:w-auto max-w-[725px] ${isDarkMode ? 'bg-slate-900/80 border-slate-800' : 'bg-white/80 border-slate-200'} backdrop-blur-xl border rounded-2xl shadow-2xl transition-all duration-300`}>
          <div className="flex items-center justify-between gap-2 p-2">
            <div className="hidden md:flex flex-wrap gap-1">
              <button
                onClick={() => navigate('/')}
                className={`px-4 py-2 text-xs font-semibold tracking-wide uppercase transition-all duration-200 rounded-xl ${
                  activeTab === 'home'
                    ? isDarkMode
                      ? 'bg-orange-500 text-white shadow-lg shadow-orange-500/30'
                      : 'bg-slate-900 text-white shadow-lg shadow-slate-900/20'
                    : isDarkMode
                      ? 'text-slate-400 hover:text-white hover:bg-slate-800/50'
                      : 'text-slate-600 hover:text-slate-900 hover:bg-slate-100'
                }`}
              >
                {t.tabs.home}
              </button>
              <button
                onClick={() => navigate('/about')}
                className={`px-4 py-2 text-xs font-semibold tracking-wide uppercase transition-all duration-200 rounded-xl ${
                  activeTab === 'about'
                    ? isDarkMode
                      ? 'bg-orange-500 text-white shadow-lg shadow-orange-500/30'
                      : 'bg-slate-900 text-white shadow-lg shadow-slate-900/20'
                    : isDarkMode
                      ? 'text-slate-400 hover:text-white hover:bg-slate-800/50'
                      : 'text-slate-600 hover:text-slate-900 hover:bg-slate-100'
                }`}
              >
                {t.tabs.about}
              </button>
              <button
                onClick={() => navigate('/projects')}
                className={`px-4 py-2 text-xs font-semibold tracking-wide uppercase transition-all duration-200 rounded-xl ${
                  activeTab === 'projects'
                    ? isDarkMode
                      ? 'bg-orange-500 text-white shadow-lg shadow-orange-500/30'
                      : 'bg-slate-900 text-white shadow-lg shadow-slate-900/20'
                    : isDarkMode
                      ? 'text-slate-400 hover:text-white hover:bg-slate-800/50'
                      : 'text-slate-600 hover:text-slate-900 hover:bg-slate-100'
                }`}
              >
                {t.tabs.projects}
              </button>
              <button
                onClick={() => navigate('/photography')}
                className={`px-4 py-2 text-xs font-semibold tracking-wide uppercase transition-all duration-200 rounded-xl ${
                  activeTab === 'photography'
                    ? isDarkMode
                      ? 'bg-orange-500 text-white shadow-lg shadow-orange-500/30'
                      : 'bg-slate-900 text-white shadow-lg shadow-slate-900/20'
                    : isDarkMode
                      ? 'text-slate-400 hover:text-white hover:bg-slate-800/50'
                      : 'text-slate-600 hover:text-slate-900 hover:bg-slate-100'
                }`}
              >
                {t.tabs.photography}
              </button>
              <button
                onClick={() => navigate('/skills')}
                className={`px-4 py-2 text-xs font-semibold tracking-wide uppercase transition-all duration-200 rounded-xl ${
                  activeTab === 'skills'
                    ? isDarkMode
                      ? 'bg-orange-500 text-white shadow-lg shadow-orange-500/30'
                      : 'bg-slate-900 text-white shadow-lg shadow-slate-900/20'
                    : isDarkMode
                      ? 'text-slate-400 hover:text-white hover:bg-slate-800/50'
                      : 'text-slate-600 hover:text-slate-900 hover:bg-slate-100'
                }`}
              >
                {t.tabs.skills}
              </button>
            </div>

            <div className={`hidden md:flex gap-1 ml-2 pl-2 ${isDarkMode ? 'border-l border-slate-800' : 'border-l border-slate-200'}`}>
              <div className="relative">
                <button
                  onClick={() => setIsLanguageDropdownOpen(!isLanguageDropdownOpen)}
                  className={`p-2 rounded-lg transition-all duration-200 ${
                    isDarkMode
                      ? 'text-slate-400 hover:text-orange-400 hover:bg-slate-800/50'
                      : 'text-slate-600 hover:text-slate-900 hover:bg-slate-100'
                  }`}
                  aria-label="Toggle language"
                >
                  <Languages size={20} strokeWidth={1.5} />
                </button>
                {isLanguageDropdownOpen && (
                  <div className={`absolute top-full mt-2 right-0 ${isDarkMode ? 'bg-slate-900/95 border-slate-800' : 'bg-white border-slate-200'} border rounded-xl shadow-2xl backdrop-blur-sm overflow-hidden min-w-[120px]`}>
                    <button
                      onClick={() => {
                        setLanguage('en');
                        setIsLanguageDropdownOpen(false);
                      }}
                      className={`w-full px-4 py-2.5 text-left text-sm font-medium transition-colors ${language === 'en' ? (isDarkMode ? 'bg-orange-500/10 text-orange-400' : 'bg-slate-100 text-slate-900') : (isDarkMode ? 'text-slate-400 hover:bg-slate-800/50 hover:text-slate-200' : 'text-slate-600 hover:bg-slate-50 hover:text-slate-900')}`}
                    >
                      English
                    </button>
                    <button
                      onClick={() => {
                        setLanguage('de');
                        setIsLanguageDropdownOpen(false);
                      }}
                      className={`w-full px-4 py-2.5 text-left text-sm font-medium transition-colors ${language === 'de' ? (isDarkMode ? 'bg-orange-500/10 text-orange-400' : 'bg-slate-100 text-slate-900') : (isDarkMode ? 'text-slate-400 hover:bg-slate-800/50 hover:text-slate-200' : 'text-slate-600 hover:bg-slate-50 hover:text-slate-900')}`}
                    >
                      Deutsch
                    </button>
                  </div>
                )}
              </div>
              <button
                onClick={() => setIsDarkMode(!isDarkMode)}
                className={`p-2 rounded-lg transition-all duration-200 ${
                  isDarkMode
                    ? 'text-slate-400 hover:text-orange-400 hover:bg-slate-800/50'
                    : 'text-slate-600 hover:text-slate-900 hover:bg-slate-100'
                }`}
                aria-label="Toggle theme"
              >
                {isDarkMode ? <Sun size={20} strokeWidth={1.5} /> : <Moon size={20} strokeWidth={1.5} />}
              </button>
            </div>

            <div className="flex md:hidden items-center justify-between w-full">
              <button
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                className={`p-2 rounded-lg transition-all duration-200 ${
                  isDarkMode
                    ? 'text-slate-400 hover:text-orange-400 hover:bg-slate-800/50'
                    : 'text-slate-600 hover:text-slate-900 hover:bg-slate-100'
                }`}
                aria-label="Toggle menu"
              >
                {isMobileMenuOpen ? <X size={20} strokeWidth={1.5} /> : <Menu size={20} strokeWidth={1.5} />}
              </button>
              <div className="flex items-center gap-2">
                <div className="relative">
                  <button
                    onClick={() => setIsLanguageDropdownOpen(!isLanguageDropdownOpen)}
                    className={`p-2 rounded-lg transition-all duration-200 ${
                      isDarkMode
                        ? 'text-slate-400 hover:text-orange-400 hover:bg-slate-800/50'
                        : 'text-slate-600 hover:text-slate-900 hover:bg-slate-100'
                    }`}
                    aria-label="Toggle language"
                  >
                    <Languages size={20} strokeWidth={1.5} />
                  </button>
                  {isLanguageDropdownOpen && (
                    <div className={`absolute top-full mt-2 right-0 ${isDarkMode ? 'bg-slate-900/95 border-slate-800' : 'bg-white border-slate-200'} border rounded-xl shadow-2xl backdrop-blur-sm overflow-hidden min-w-[120px] z-50`}>
                      <button
                        onClick={() => {
                          setLanguage('en');
                          setIsLanguageDropdownOpen(false);
                        }}
                        className={`w-full px-4 py-2.5 text-left text-sm font-medium transition-colors ${language === 'en' ? (isDarkMode ? 'bg-orange-500/10 text-orange-400' : 'bg-slate-100 text-slate-900') : (isDarkMode ? 'text-slate-400 hover:bg-slate-800/50 hover:text-slate-200' : 'text-slate-600 hover:bg-slate-50 hover:text-slate-900')}`}
                      >
                        English
                      </button>
                      <button
                        onClick={() => {
                          setLanguage('de');
                          setIsLanguageDropdownOpen(false);
                        }}
                        className={`w-full px-4 py-2.5 text-left text-sm font-medium transition-colors ${language === 'de' ? (isDarkMode ? 'bg-orange-500/10 text-orange-400' : 'bg-slate-100 text-slate-900') : (isDarkMode ? 'text-slate-400 hover:bg-slate-800/50 hover:text-slate-200' : 'text-slate-600 hover:bg-slate-50 hover:text-slate-900')}`}
                      >
                        Deutsch
                      </button>
                    </div>
                  )}
                </div>
                <button
                  onClick={() => setIsDarkMode(!isDarkMode)}
                  className={`p-2 rounded-lg transition-all duration-200 ${
                    isDarkMode
                      ? 'text-slate-400 hover:text-orange-400 hover:bg-slate-800/50'
                      : 'text-slate-600 hover:text-slate-900 hover:bg-slate-100'
                  }`}
                  aria-label="Toggle theme"
                >
                  {isDarkMode ? <Sun size={20} strokeWidth={1.5} /> : <Moon size={20} strokeWidth={1.5} />}
                </button>
              </div>
            </div>
          </div>

          <div
            className={`md:hidden overflow-hidden transition-all duration-300 ease-in-out ${
              isMobileMenuOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
            }`}
          >
            <div className={`border-t ${isDarkMode ? 'border-slate-800' : 'border-slate-200'} p-2 space-y-1`}>
              <button
                onClick={() => navigate('/')}
                className={`w-full px-4 py-2.5 text-xs font-semibold tracking-wide uppercase transition-all duration-200 rounded-xl text-left ${
                  activeTab === 'home'
                    ? isDarkMode
                      ? 'bg-orange-500 text-white shadow-lg shadow-orange-500/30'
                      : 'bg-slate-900 text-white shadow-lg shadow-slate-900/20'
                    : isDarkMode
                      ? 'text-slate-400 hover:text-white hover:bg-slate-800/50'
                      : 'text-slate-600 hover:text-slate-900 hover:bg-slate-100'
                }`}
              >
                {t.tabs.home}
              </button>
              <button
                onClick={() => navigate('/about')}
                className={`w-full px-4 py-2.5 text-xs font-semibold tracking-wide uppercase transition-all duration-200 rounded-xl text-left ${
                  activeTab === 'about'
                    ? isDarkMode
                      ? 'bg-orange-500 text-white shadow-lg shadow-orange-500/30'
                      : 'bg-slate-900 text-white shadow-lg shadow-slate-900/20'
                    : isDarkMode
                      ? 'text-slate-400 hover:text-white hover:bg-slate-800/50'
                      : 'text-slate-600 hover:text-slate-900 hover:bg-slate-100'
                }`}
              >
                {t.tabs.about}
              </button>
              <button
                onClick={() => navigate('/projects')}
                className={`w-full px-4 py-2.5 text-xs font-semibold tracking-wide uppercase transition-all duration-200 rounded-xl text-left ${
                  activeTab === 'projects'
                    ? isDarkMode
                      ? 'bg-orange-500 text-white shadow-lg shadow-orange-500/30'
                      : 'bg-slate-900 text-white shadow-lg shadow-slate-900/20'
                    : isDarkMode
                      ? 'text-slate-400 hover:text-white hover:bg-slate-800/50'
                      : 'text-slate-600 hover:text-slate-900 hover:bg-slate-100'
                }`}
              >
                {t.tabs.projects}
              </button>
              <button
                onClick={() => navigate('/photography')}
                className={`w-full px-4 py-2.5 text-xs font-semibold tracking-wide uppercase transition-all duration-200 rounded-xl text-left ${
                  activeTab === 'photography'
                    ? isDarkMode
                      ? 'bg-orange-500 text-white shadow-lg shadow-orange-500/30'
                      : 'bg-slate-900 text-white shadow-lg shadow-slate-900/20'
                    : isDarkMode
                      ? 'text-slate-400 hover:text-white hover:bg-slate-800/50'
                      : 'text-slate-600 hover:text-slate-900 hover:bg-slate-100'
                }`}
              >
                {t.tabs.photography}
              </button>
              <button
                onClick={() => navigate('/skills')}
                className={`w-full px-4 py-2.5 text-xs font-semibold tracking-wide uppercase transition-all duration-200 rounded-xl text-left ${
                  activeTab === 'skills'
                    ? isDarkMode
                      ? 'bg-orange-500 text-white shadow-lg shadow-orange-500/30'
                      : 'bg-slate-900 text-white shadow-lg shadow-slate-900/20'
                    : isDarkMode
                      ? 'text-slate-400 hover:text-white hover:bg-slate-800/50'
                      : 'text-slate-600 hover:text-slate-900 hover:bg-slate-100'
                }`}
              >
                {t.tabs.skills}
              </button>
            </div>
          </div>
        </div>
      </nav>

      {children}

      <footer className="relative z-10 mt-24 pb-12 px-6">
        <div className="w-full max-w-[725px] mx-auto">
          <div className={`border-t ${isDarkMode ? 'border-slate-800' : 'border-slate-200'} pt-8`}>
            <div className="flex flex-col md:flex-row justify-between items-center gap-4">
              <p className={`${isDarkMode ? 'text-slate-500' : 'text-slate-500'} text-sm`}>
                {t.footer.copyright}
              </p>
              <div className="flex items-center gap-6">
                <button onClick={() => navigate('/privacy')} className={`${isDarkMode ? 'text-slate-500 hover:text-orange-400' : 'text-slate-500 hover:text-slate-900'} transition-all duration-200 text-sm`}>{t.footer.privacy}</button>
                <button onClick={() => navigate('/terms')} className={`${isDarkMode ? 'text-slate-500 hover:text-orange-400' : 'text-slate-500 hover:text-slate-900'} transition-all duration-200 text-sm`}>{t.footer.terms}</button>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
