'use client';

import { motion } from 'framer-motion';
import { useLanguage } from '../context/LanguageContext';
import { content } from '../data/content';

export default function Footer() {
  const { language } = useLanguage();
  const t = content[language].footer;
  const nav = content[language].nav;

  const year = new Date().getFullYear();

  return (
    <footer className="py-8 border-t border-slate-800">
      <div className="container-custom">
        <div className="flex flex-col md:flex-row justify-between items-center gap-4">
          <div className="text-slate-400 text-sm">
            © {year} Ray Deng. {t.rights}
          </div>
          <nav className="flex flex-wrap justify-center gap-6">
            {Object.entries(nav).map(([key, label]) => (
              <a
                key={key}
                href={key === 'home' ? '#' : `#${key}`}
                className="text-slate-400 hover:text-blue-400 text-sm transition-colors"
              >
                {label}
              </a>
            ))}
          </nav>
        </div>
      </div>
    </footer>
  );
}
