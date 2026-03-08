'use client';

import { motion } from 'framer-motion';
import { useLanguage } from '../context/LanguageContext';
import { content } from '../data/content';

export default function Founder() {
  const { language } = useLanguage();
  const t = content[language].founder;

  return (
    <section className="section bg-gradient-to-b from-transparent to-slate-900/50">
      <div className="container-custom">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">{t.title}</h2>
          <p className="text-slate-400 max-w-2xl mx-auto">{t.description}</p>
        </motion.div>
        
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {t.stats.map((stat, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="glass rounded-xl p-6 text-center hover:border-blue-500/30 transition-all"
            >
              <div className="text-4xl md:text-5xl font-bold gradient-text mb-2">{stat.value}</div>
              <div className="text-slate-400 text-sm">{stat.label}</div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
