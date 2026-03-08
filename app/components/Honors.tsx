'use client';

import { motion } from 'framer-motion';
import { Award, ExternalLink } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';
import { content } from '../data/content';

export default function Honors() {
  const { language } = useLanguage();
  const t = content[language].honors;

  return (
    <section className="section">
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
        
        <div className="grid md:grid-cols-3 gap-6">
          {t.items.map((honor, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="glass rounded-xl p-6 hover:border-blue-500/30 transition-all text-center"
            >
              <div className="w-16 h-16 rounded-full bg-blue-500/20 flex items-center justify-center mx-auto mb-4">
                <Award className="text-blue-400" size={28} />
              </div>
              <h3 className="text-lg font-bold mb-2">{honor.title}</h3>
              <p className="text-blue-400 text-sm mb-2">{honor.organization}</p>
              <p className="text-slate-500 text-xs mb-2">{honor.year}</p>
              <p className="text-slate-400 text-sm">{honor.subtitle}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
