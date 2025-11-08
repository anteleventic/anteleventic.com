import { useState, useEffect } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { TranslationProvider } from "./hooks/useTranslation";
import Layout from "./components/Layout";
import Home from "./pages/Home";
import About from "./pages/About";
import Projects from "./pages/Projects";
import ProjectDetail from "./pages/ProjectDetail";
import Skills from "./pages/Skills";
import Privacy from "./pages/Privacy";
import Terms from "./pages/Terms";

function App() {
    const [language, setLanguage] = useState<"en" | "de">(() => {
        const savedLanguage = localStorage.getItem("language") as
            | "en"
            | "de"
            | null;
        if (savedLanguage) {
            return savedLanguage;
        }
        const browserLanguage = navigator.language.toLowerCase();
        return browserLanguage.startsWith("de") ? "de" : "en";
    });

    const [isDarkMode, setIsDarkMode] = useState(() => {
        const savedTheme = localStorage.getItem("theme");

        if (savedTheme) {
        return savedTheme === "dark";
        }

        // Determine system preference
        const prefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
        return prefersDark;
    });

    useEffect(() => {
        const root = document.documentElement;

        if (isDarkMode) {
            root.classList.add("dark");
            localStorage.setItem("theme", "dark");
        } else {
            root.classList.remove("dark");
            localStorage.setItem("theme", "light");
        }
    }, [isDarkMode]);

    useEffect(() => {
        setIsDarkMode(window.matchMedia("(prefers-color-scheme: dark)").matches);
    }, []);

    const toggleTheme = () => {
        setIsDarkMode(!isDarkMode);
    };

    return (
        <BrowserRouter>
            <TranslationProvider language={language}>
                <Layout
                    language={language}
                    setLanguage={setLanguage}
                    isDarkMode={isDarkMode}
                    toggleTheme={toggleTheme}
                >
                    <Routes>
                        <Route
                            path="/"
                            element={<Home isDarkMode={isDarkMode} />}
                        />
                        <Route
                            path="/about"
                            element={<About isDarkMode={isDarkMode} />}
                        />
                        <Route
                            path="/projects"
                            element={<Projects isDarkMode={isDarkMode} />}
                        />
                        <Route
                            path="/projects/:id"
                            element={<ProjectDetail isDarkMode={isDarkMode} />}
                        />
                        <Route
                            path="/skills"
                            element={<Skills isDarkMode={isDarkMode} />}
                        />
                        <Route
                            path="/privacy"
                            element={<Privacy isDarkMode={isDarkMode} />}
                        />
                        <Route
                            path="/terms"
                            element={<Terms isDarkMode={isDarkMode} />}
                        />
                    </Routes>
                </Layout>
            </TranslationProvider>
        </BrowserRouter>
    );
}

export default App;
