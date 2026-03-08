'use client';

import { motion } from 'framer-motion';
import { useLanguage } from '../context/LanguageContext';
import { content } from '../data/content';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Menu, X } from 'lucide-react';
import { useState } from 'react';

export default function Navigation() {
  const { language, toggleLanguage } = useLanguage();
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();

  const navItems = {
    en: [
      { label: 'Home', href: '/' },
      { label: 'Gallery', href: '/#gallery' },
      { label: 'Media', href: '/#media' },
      { label: 'Contact', href: '/#contact' },
    ],
    zh: [
      { label: '首页', href: '/' },
      { label: '图册', href: '/#gallery' },
      { label: '媒体', href: '/#media' },
      { label: '联系', href: '/#contact' },
    ],
  };

  const items = navItems[language];

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 glass">
      <div className="container-custom">
        <div className="flex justify-between items-center h-16">
          <a href="/" className="text-xl font-bold gradient-text">Ray Deng</a>
          
          <div className="hidden md:flex items-center gap-6">
            {items.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className={`text-sm transition-colors ${
                  pathname === item.href
                    ? 'text-blue-400'
                    : 'text-slate-300 hover:text-blue-400'
                }`}
              >
                {item.label}
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
            {items.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className={`block py-2 transition-colors ${
                  pathname === item.href
                    ? 'text-blue-400'
                    : 'text-slate-300 hover:text-blue-400'
                }`}
                onClick={() => setIsOpen(false)}
              >
                {item.label}
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
