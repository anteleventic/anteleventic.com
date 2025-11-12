import { useTranslation } from '../hooks/useTranslation';
import { useParams, useNavigate } from 'react-router-dom';
import { ChevronLeftCircle } from 'lucide-react';
import projectImageSource  from '../images/projects/default.png';

export default function ProjectDetail({ isDarkMode }: { isDarkMode: boolean }) {
  const { t } = useTranslation();
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();

  const projects = t.projects.items.map((project, index) => ({
    id: index + 1,
    title: project.title,
    description: project.longDescription,
    skills: project.skills,
    github: project.github,
    live: project.link,
    features: project.features,
    logos: project.logos.map((logo) => ({
      dark: projectImageSource.replace('default.png', logo.dark),
      light: projectImageSource.replace('default.png', logo.light)
    })),
    images: project.images.map((img) => ({
      source: projectImageSource.replace('default.png', img)
    }))
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
          <div className="space-y-6">
            <div className="animate-fade-in-up">
              <button
                title={t.projects.backToProjects}
                onClick={() => navigate('/projects')}
                className={`text-xs mb-12 ${isDarkMode ? 'text-orange-400 hover:text-orange-300' : 'text-slate-700 hover:text-slate-900'}  flex items-center gap-2 group animate-fade-in`}
              >
                <span className='group-hover:-left-1 relative left-0 transition-all duration-200'><ChevronLeftCircle /></span>  {t.projects.backToProjects}
              </button>

              <div className="mb-16 relative">
                  {project.logos.map((logo, index) => (
                    <img
                      key={index}
                      src={isDarkMode ? logo.dark : logo.light}
                      alt={"Project - " + project.title}
                      className={`w-1/2 mx-auto`}
                    />
                  ))}
              </div>

              <h2 className={`${isDarkMode ? 'text-white' : 'text-slate-900'} text-3xl font-semibold mb-6 relative`}>
                {project.title}
              </h2>


              <p className={`${isDarkMode ? 'text-slate-400' : 'text-slate-600'} text-base leading-relaxed mb-6`}>{project.longDescription}</p>

              <div className="grid grid-cols-3 gap-3 mb-6">
                  {project.images.map((image, index) => (
                    <img
                      key={index}
                      src={image.source}
                      alt={"Project - " + project.title}
                      className={`w-full h-48 object-cover rounded-xl border ${isDarkMode ? 'border-orange-800/40' : 'border-slate-800'} shadow-lg`}
                    />
                  ))}
              </div>

              <div className='mb-20'>
                <h3 className={`${isDarkMode ? 'text-white' : 'text-slate-900'} text-xl font-semibold mb-4`}>{t.projects.keyFeatures}</h3>
                <ul className="space-y-2 mb-8">
                  {project.features.map((feature, index) => (
                    <li key={index} className="flex items-start gap-3">
                      <span className={`${isDarkMode ? 'text-orange-400' : 'text-slate-600'}`}>▸</span>
                      <span className={`${isDarkMode ? 'text-slate-400' : 'text-slate-600'}`}>{feature}</span>
                    </li>
                  ))}
                </ul>
                <h3 className={`${isDarkMode ? 'text-white' : 'text-slate-900'} text-xl font-semibold mb-4`}>{t.projects.skills}</h3>
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.skills.map((skill, index) => (
                      <span key={index}  className={`px-2 py-0.25 leading-1 text-[10px] 
                        ${isDarkMode ? 
                          'bg-orange-900/50 border-orange-800 text-white' :
                          'bg-slate-900 border-slate-200 text-white'} backdrop-blur-sm rounded-md border text-base font-medium transition-all cursor-default
                        `}>{skill}</span>
                    ))}
                </div>
              </div>

              <div className="flex gap-4">
                {project.github ? (
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`px-6 py-2.5 ${isDarkMode ? 'bg-orange-500 text-white hover:shadow-orange-500/20' : 'bg-slate-900 text-white hover:shadow-slate-900/20'} font-semibold text-sm rounded-xl hover:shadow-lg transition-all`}
                  >
                    {t.projects.viewOnGithub}
                  </a>
                ) : ''}
                {project.live ? (
                  <a
                    href={project.live}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`px-6 py-2.5 ${isDarkMode ? 'bg-slate-900/50 text-slate-300 border-slate-800 hover:bg-slate-900/80' : 'bg-slate-100 text-slate-800 border-slate-200 hover:bg-slate-200'} font-semibold text-sm rounded-xl border transition-all`}
                  >
                    {t.projects.viewLive}
                  </a>
                ) : ''}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
