'use client';

import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { useLanguage } from '../context/LanguageContext';

interface Stat {
  id: string;
  value: string;
  labelEn: string;
  labelZh: string;
}

export default function Founder() {
  const { language } = useLanguage();
  const [stats, setStats] = useState<Stat[]>([]);

  useEffect(() => {
    fetch('/api/stats')
      .then(res => res.json())
      .then(data => setStats(data));
  }, []);

  const title = language === 'en' ? 'Founder Snapshot' : '创始人简介';
  const description = language === 'en' 
    ? 'Cross-border business builder with deep expertise in ecommerce, workforce systems, education, and AI-enabled operations.'
    : '跨境商业构建者，在电商、劳动力系统、教育和AI赋能运营方面拥有深厚专业知识。';

  return (
    <section className="section bg-gradient-to-b from-transparent to-slate-900/50">
      <div className="container-custom">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">{title}</h2>
          <p className="text-slate-400 max-w-2xl mx-auto">{description}</p>
        </motion.div>
        
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {stats.map((stat, i) => (
            <motion.div
              key={stat.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="glass rounded-xl p-6 text-center hover:border-blue-500/30 transition-all"
            >
              <div className="text-4xl md:text-5xl font-bold gradient-text mb-2">{stat.value}</div>
              <div className="text-slate-400 text-sm">
                {language === 'en' ? stat.labelEn : stat.labelZh}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
