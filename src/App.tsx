import { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { TranslationProvider } from "./hooks/useTranslation";
import Layout from "./components/Layout";
import Home from "./pages/Home";
import About from "./pages/About";
import Projects from "./pages/Projects";
import ProjectDetail from "./pages/ProjectDetail";
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
        const prefersDark = window.matchMedia(
            "(prefers-color-scheme: dark)",
        ).matches;
        return prefersDark;
    });

    return (
        <BrowserRouter>
            <TranslationProvider language={language}>
                <Layout
                    language={language}
                    setLanguage={setLanguage}
                    isDarkMode={isDarkMode}
                    setIsDarkMode={setIsDarkMode}
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
