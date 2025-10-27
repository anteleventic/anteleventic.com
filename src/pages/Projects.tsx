import { useTranslation } from '../hooks/useTranslation';
import { useNavigate } from 'react-router-dom';

export default function Projects({ isDarkMode }: { isDarkMode: boolean }) {
  const { t } = useTranslation();
  const navigate = useNavigate();

  const projects = t.projects.items.map((project, index) => ({
    id: index + 1,
    title: project.title,
    description: project.description,
    tags: index === 0 ? ['React', 'Python', 'TensorFlow'] :
          index === 1 ? ['Next.js', 'TypeScript', 'Tailwind'] :
          index === 2 ? ['Vue.js', 'Node.js', 'MongoDB'] :
          ['React', 'Stripe', 'PostgreSQL'],
  }));

  return (
    <section id="projects" className="relative pt-32 z-10 px-6">
      <div className="w-full max-w-[725px] mx-auto">
        <div className="w-full">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 animate-fade-in">
            {projects.map((project, index) => (
              <div
                key={project.id}
                onClick={() => navigate(`/projects/${project.id}`)}
                className={`group relative overflow-hidden rounded-2xl ${isDarkMode ? 'bg-slate-900/50 border-slate-800 hover:border-orange-500/40' : 'bg-white border-slate-200 hover:border-slate-300'} backdrop-blur-sm border p-6 transition-all duration-200 hover:shadow-xl cursor-pointer animate-fade-in-up`}
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <h3 className={`${isDarkMode ? 'text-white' : 'text-slate-900'} text-xl font-semibold mb-2`}>{project.title}</h3>
                <p className={`${isDarkMode ? 'text-slate-400' : 'text-slate-600'} text-sm mb-4`}>{project.description}</p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tags.map((tag, index) => (
                    <span key={index} className={`px-2.5 py-1 ${isDarkMode ? 'bg-orange-500/10 text-orange-400' : 'bg-slate-100 text-slate-700'} rounded-lg text-xs font-medium`}>{tag}</span>
                  ))}
                </div>
                <div className={`${isDarkMode ? 'text-orange-400 hover:text-orange-300' : 'text-slate-700 hover:text-slate-900'} text-sm transition-colors font-medium`}>View Project →</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
