import { Instagram, Youtube, Linkedin, Mail, Github } from "lucide-react";
import { useTranslation } from "../hooks/useTranslation";

export default function Home({ isDarkMode }: { isDarkMode: boolean }) {
    const { t } = useTranslation();

    return (
        <section
            id="home"
            className="relative pt-32 md:pt-60 pb-12 z-10 flex items-center justify-center px-6"
        >
            <div className="w-full max-w-[725px] flex flex-col gap-8 relative">
                <div className="flex flex-col items-center text-center">
                    <div className="flex justify-center mb-6">
                        <div className="relative">
                            <img
                                src="https://profile-images.xing.com/images/b4547c89e9a533fb14c3c3ab66c76d66-3/ante-leventic.256x256.jpg"
                                alt="Ante Leventic"
                                className={`relative w-32 h-32 sm:w-40 sm:h-40 object-cover rounded-2xl border-2 ${isDarkMode ? "border-orange-500/40" : "border-slate-200"} shadow-xl`}
                            />
                        </div>
                    </div>

                    <div className="flex flex-col sm:flex-row items-center justify-center gap-3 mb-2">
                        <div
                            className={`inline-block px-3 py-1.5 ${isDarkMode ? "bg-orange-500/5" : "bg-slate-100"} backdrop-blur-sm rounded-lg border ${isDarkMode ? "border-orange-500/20" : "border-slate-200"} leading-none`}
                        >
                            <span
                                className={`relative ${isDarkMode ? "text-orange-400" : "text-slate-700"} text-xs font-medium tracking-wider uppercase leading-none transition-colors duration-500`}
                            >
                                &lt;lewi/&gt;
                            </span>
                        </div>
                        <div className="flex items-center gap-2">
                            <div className="relative flex items-center justify-center">
                                <div className="w-2 h-2 bg-green-400 rounded-full"></div>
                                <div className="absolute w-2 h-2 bg-green-400 rounded-full animate-ping"></div>
                            </div>
                            <span
                                className={`${isDarkMode ? "text-slate-400" : "text-slate-600"} text-sm font-medium transition-colors duration-500`}
                            >
                                available for freelance
                            </span>
                        </div>
                    </div>

                    <h1
                        className={`${isDarkMode ? "text-white" : "text-slate-900"} text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-bold tracking-tight mb-6 transition-colors duration-500`}
                    >
                        {t.name}
                    </h1>

                    <p
                        className={`${isDarkMode ? "text-slate-400" : "text-slate-600"} text-sm sm:text-base leading-relaxed mb-6 max-w-2xl transition-colors duration-500`}
                    >
                        {t.hero.description}
                    </p>

                    <div className="flex flex-wrap items-center justify-center gap-4 sm:gap-6 mb-8">
                        <a
                            href="https://www.instagram.com/lewi.mp4"
                            target="_blank"
                            rel="noopener noreferrer"
                            className={`${isDarkMode ? "text-slate-500 hover:text-orange-400" : "text-slate-400 hover:text-slate-900"} transition-all duration-200`}
                            aria-label="Instagram"
                        >
                            <Instagram size={24} strokeWidth={1.5} />
                        </a>
                        {/*
                        <a
                            href="https://youtube.com"
                            target="_blank"
                            rel="noopener noreferrer"
                            className={`${isDarkMode ? "text-slate-500 hover:text-orange-400" : "text-slate-400 hover:text-slate-900"} transition-all duration-200`}
                            aria-label="YouTube"
                        >
                            <Youtube size={24} strokeWidth={1.5} />
                        </a>
                        */}
                        <a
                            href="https://www.xing.com/profile/Ante_Leventic/"
                            target="_blank"
                            rel="noopener noreferrer"
                            className={`${isDarkMode ? "text-slate-500 hover:text-orange-400" : "text-slate-400 hover:text-slate-900"} transition-all duration-200`}
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
                            href="https://www.linkedin.com/in/ante-leventic-ab8588238"
                            target="_blank"
                            rel="noopener noreferrer"
                            className={`${isDarkMode ? "text-slate-500 hover:text-orange-400" : "text-slate-400 hover:text-slate-900"} transition-all duration-200`}
                            aria-label="LinkedIn"
                        >
                            <Linkedin size={24} strokeWidth={1.5} />
                        </a>
                        <a
                            href="https://github.com/anteleventic"
                            target="_blank"
                            rel="noopener noreferrer"
                            className={`${isDarkMode ? "text-slate-500 hover:text-orange-400" : "text-slate-400 hover:text-slate-900"} transition-all duration-200`}
                            aria-label="GitHub"
                        >
                            <Github size={24} strokeWidth={1.5} />
                        </a>
                        <a
                            href="mailto:ante.leventic@icloud.com"
                            className={`${isDarkMode ? "text-slate-500 hover:text-orange-400" : "text-slate-400 hover:text-slate-900"} transition-all duration-200`}
                            aria-label="Email"
                        >
                            <Mail size={24} strokeWidth={1.5} />
                        </a>
                    </div>

                    <div className="flex justify-center gap-6 sm:gap-8 mb-8">
                        <div className="group cursor-default">
                            <div
                                className={`${isDarkMode ? "text-white" : "text-slate-900"} text-3xl sm:text-4xl font-bold mb-1 transition-transform`}
                            >
                                10+
                            </div>
                            <div
                                className={`${isDarkMode ? "text-slate-500" : "text-slate-600"} text-xs font-medium uppercase tracking-wider`}
                            >
                                {t.hero.yearsExperience}
                            </div>
                        </div>
                        <div className="group cursor-default">
                            <div
                                className={`${isDarkMode ? "text-white" : "text-slate-900"} text-3xl sm:text-4xl font-bold mb-1 transition-transform`}
                            >
                                50+
                            </div>
                            <div
                                className={`${isDarkMode ? "text-slate-500" : "text-slate-600"} text-xs font-medium uppercase tracking-wider`}
                            >
                                {t.hero.projects}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
