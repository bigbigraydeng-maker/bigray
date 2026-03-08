'use client';

import { motion } from 'framer-motion';
import { useLanguage } from '../context/LanguageContext';
import { content } from '../data/content';
import { Menu, X } from 'lucide-react';
import { useState } from 'react';

export default function Navigation() {
  const { language, toggleLanguage } = useLanguage();
  const t = content[language].nav;
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 glass">
      <div className="container-custom">
        <div className="flex justify-between items-center h-16">
          <a href="#" className="text-xl font-bold gradient-text">Ray Deng</a>
          
          <div className="hidden md:flex items-center gap-8">
            {Object.entries(t).map(([key, label]) => (
              <a
                key={key}
                href={key === 'home' ? '#' : `#${key}`}
                className="text-slate-300 hover:text-blue-400 text-sm transition-colors"
              >
                {label}
              </a>
            ))}
            <button
              onClick={toggleLanguage}
              className="glass px-3 py-1 rounded text-sm text-slate-300 hover:text-blue-400 transition-colors"
            >
              {language === 'en' ? '中文' : 'EN'}
            </button>
          </div>
          
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden text-slate-300"
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
        
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            className="md:hidden py-4 border-t border-slate-700"
          >
            {Object.entries(t).map(([key, label]) => (
              <a
                key={key}
                href={key === 'home' ? '#' : `#${key}`}
                className="block py-2 text-slate-300 hover:text-blue-400 transition-colors"
                onClick={() => setIsOpen(false)}
              >
                {label}
              </a>
            ))}
            <button
              onClick={toggleLanguage}
              className="mt-4 w-full glass px-3 py-2 rounded text-sm text-slate-300 hover:text-blue-400 transition-colors"
            >
              {language === 'en' ? '切换到中文' : 'Switch to English'}
            </button>
          </motion.div>
        )}
      </div>
    </nav>
  );
}
