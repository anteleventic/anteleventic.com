import { useNavigate } from 'react-router-dom';

export default function Privacy({ isDarkMode }: { isDarkMode: boolean }) {
  const navigate = useNavigate();

  return (
    <section id="privacy" className="relative z-10 px-6 pt-32">
      <div className="w-full max-w-[725px] mx-auto">
        <button
          onClick={() => navigate('/about')}
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
  );
}
