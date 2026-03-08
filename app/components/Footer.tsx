'use client';

import { useLanguage } from '../context/LanguageContext';
import { content } from '../data/content';

export default function Footer() {
  const { language } = useLanguage();
  const t = content[language].footer;

  return (
    <footer className="py-8 border-t border-slate-800">
      <div className="container-custom">
        <div className="flex flex-col md:flex-row justify-between items-center gap-4">
          <div className="text-slate-500 text-sm">
            © {new Date().getFullYear()} Ray Deng. {t.rights}
          </div>
          <div className="flex items-center gap-4">
            <a
              href="mailto:ray@workvisas.work"
              className="text-slate-500 hover:text-blue-400 transition-colors text-sm"
            >
              ray@workvisas.work
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
