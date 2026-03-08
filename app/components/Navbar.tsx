'use client';

import { useLanguage } from '../context/LanguageContext';
import { content } from '../data/content';
import { Globe } from 'lucide-react';
import { motion } from 'framer-motion';

export default function Navbar() {
  const { language, toggleLanguage } = useLanguage();
  const t = content[language];

  const navItems = [
    { label: t.nav.home, href: '#home' },
    { label: t.nav.ventures, href: '#ventures' },
    { label: t.nav.media, href: '#media' },
    { label: t.nav.honors, href: '#honors' },
    { label: t.nav.contact, href: '#contact' },
  ];

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className="fixed top-0 left-0 right-0 z-50 glass"
    >
      <div className="container-custom">
        <div className="flex items-center justify-between h-16 md:h-20">
          <a href="#home" className="text-xl font-bold gradient-text">
            Ray Deng
          </a>

          <div className="hidden md:flex items-center gap-8">
            {navItems.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className="text-sm text-slate-300 hover:text-white transition-colors"
              >
                {item.label}
              </a>
            ))}
          </div>

          <button
            onClick={toggleLanguage}
            className="flex items-center gap-2 px-4 py-2 rounded-full glass hover:bg-white/10 transition-colors"
          >
            <Globe className="w-4 h-4" />
            <span className="text-sm font-medium">
              {language === 'en' ? 'EN' : '中文'}
            </span>
          </button>
        </div>
      </div>
    </motion.nav>
  );
}
