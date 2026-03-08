'use client';

import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Globe, Cpu, Users, Rocket } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';

interface Profile {
  nameEn: string;
  nameZh: string;
  titleEn: string;
  titleZh: string;
  subtitleEn: string;
  subtitleZh: string;
  descriptionEn: string;
  descriptionZh: string;
}

export default function Hero() {
  const { language } = useLanguage();
  const [profile, setProfile] = useState<Profile | null>(null);

  useEffect(() => {
    fetch('/api/profile')
      .then(res => res.json())
      .then(data => setProfile(data));
  }, []);

  const tags = language === 'en' 
    ? ['China × NZ × AU', 'AI Systems', 'Workforce Mobility', 'Venture Building']
    : ['中国 × 新西兰 × 澳大利亚', 'AI系统', '劳动力流动', '创业构建'];

  const cta = language === 'en'
    ? { ventures: 'Explore Ventures', contact: 'Work With Ray' }
    : { ventures: '探索项目', contact: '合作洽谈' };

  const icons = [Globe, Cpu, Users, Rocket];

  if (!profile) return null;

  return (
    <section className="min-h-screen flex items-center justify-center relative overflow-hidden pt-16">
      <div className="absolute inset-0 bg-gradient-to-br from-blue-600/10 via-transparent to-purple-600/10" />
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-blue-500/20 rounded-full blur-3xl" />
      <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-purple-500/20 rounded-full blur-3xl" />
      
      <div className="container-custom relative z-10 text-center py-20">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h1 className="text-5xl md:text-7xl font-bold mb-4 gradient-text">
            {language === 'en' ? profile.nameEn : profile.nameZh}
          </h1>
          <p className="text-xl md:text-2xl text-slate-300 mb-6">
            {language === 'en' ? profile.titleEn : profile.titleZh}
          </p>
          <p className="text-lg text-slate-400 mb-4">
            {language === 'en' ? profile.subtitleEn : profile.subtitleZh}
          </p>
          <p className="text-base text-slate-500 max-w-2xl mx-auto mb-8">
            {language === 'en' ? profile.descriptionEn : profile.descriptionZh}
          </p>
          
          <div className="flex flex-wrap justify-center gap-3 mb-10">
            {tags.map((tag, i) => {
              const Icon = icons[i] || Globe;
              return (
                <span key={i} className="glass px-4 py-2 rounded-full text-sm text-slate-300 flex items-center gap-2">
                  <Icon size={14} />
                  {tag}
                </span>
              );
            })}
          </div>
          
          <div className="flex flex-wrap justify-center gap-4">
            <a href="/ventures" className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-lg font-medium flex items-center gap-2 transition-all hover:scale-105">
              {cta.ventures}
              <ArrowRight size={18} />
            </a>
            <a href="/contact" className="glass hover:bg-slate-800 text-white px-8 py-3 rounded-lg font-medium transition-all hover:scale-105">
              {cta.contact}
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
