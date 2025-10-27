import { useTranslation } from '../hooks/useTranslation';
import { useParams, useNavigate } from 'react-router-dom';

export default function ProjectDetail({ isDarkMode }: { isDarkMode: boolean }) {
  const { t } = useTranslation();
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();

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

  const project = projects.find(p => p.id === Number(id));

  if (!project) {
    navigate('/projects');
    return null;
  }

  return (
    <section id="project-detail" className="relative z-10 px-6 pt-32">
      <div className="w-full max-w-[725px] mx-auto">
        <div className="w-full md:w-[80%] mx-auto">
          <button
            onClick={() => navigate('/projects')}
            className={`mb-12 ${isDarkMode ? 'text-orange-400 hover:text-orange-300' : 'text-slate-700 hover:text-slate-900'} transition-all duration-200 flex items-center gap-2 group hover:scale-105 animate-fade-in`}
          >
            <span className="group-hover:-translate-x-1 transition-transform">←</span> {t.projects.backToProjects}
          </button>
          <div className="space-y-6">
            <div className="animate-fade-in-up">
              <div className="flex flex-wrap gap-2 mb-4">
                {project.tags.map((tag, index) => (
                  <span key={index} className={`px-2.5 py-1 ${isDarkMode ? 'bg-orange-500/10 text-orange-400' : 'bg-slate-100 text-slate-700'} rounded-lg text-xs font-medium`}>{tag}</span>
                ))}
              </div>

              <h2 className={`${isDarkMode ? 'text-white' : 'text-slate-900'} text-3xl font-semibold mb-6`}>{project.title}</h2>

              <div className="grid grid-cols-3 gap-3 mb-6">
                <img
                  src="https://images.pexels.com/photos/1181671/pexels-photo-1181671.jpeg?auto=compress&cs=tinysrgb&w=800"
                  alt="Project screenshot 1"
                  className={`w-full h-48 object-cover rounded-xl border ${isDarkMode ? 'border-slate-800' : 'border-slate-200'} shadow-lg`}
                />
                <img
                  src="https://images.pexels.com/photos/546819/pexels-photo-546819.jpeg?auto=compress&cs=tinysrgb&w=800"
                  alt="Project screenshot 2"
                  className={`w-full h-48 object-cover rounded-xl border ${isDarkMode ? 'border-slate-800' : 'border-slate-200'} shadow-lg`}
                />
                <img
                  src="https://images.pexels.com/photos/1181244/pexels-photo-1181244.jpeg?auto=compress&cs=tinysrgb&w=800"
                  alt="Project screenshot 3"
                  className={`w-full h-48 object-cover rounded-xl border ${isDarkMode ? 'border-slate-800' : 'border-slate-200'} shadow-lg`}
                />
              </div>

              <p className={`${isDarkMode ? 'text-slate-400' : 'text-slate-600'} text-base leading-relaxed mb-6`}>{project.longDescription}</p>

              <div>
                <h3 className={`${isDarkMode ? 'text-white' : 'text-slate-900'} text-xl font-semibold mb-4`}>{t.projects.keyFeatures}</h3>
                <ul className="space-y-2 mb-8">
                  {project.features.map((feature, index) => (
                    <li key={index} className="flex items-start gap-3">
                      <span className={`${isDarkMode ? 'text-orange-400' : 'text-slate-600'} mt-1`}>▸</span>
                      <span className={`${isDarkMode ? 'text-slate-400' : 'text-slate-600'}`}>{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="flex gap-4">
                <a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`px-6 py-2.5 ${isDarkMode ? 'bg-orange-500 text-white hover:shadow-orange-500/20' : 'bg-slate-900 text-white hover:shadow-slate-900/20'} font-semibold text-sm rounded-xl hover:shadow-lg transition-all`}
                >
                  {t.projects.viewOnGithub}
                </a>
                <a
                  href={project.live}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`px-6 py-2.5 ${isDarkMode ? 'bg-slate-900/50 text-slate-300 border-slate-800 hover:bg-slate-900/80' : 'bg-slate-100 text-slate-800 border-slate-200 hover:bg-slate-200'} font-semibold text-sm rounded-xl border transition-all`}
                >
                  {t.projects.viewLive}
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
