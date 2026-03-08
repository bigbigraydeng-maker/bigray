'use client';

import { motion } from 'framer-motion';
import { Newspaper, ExternalLink } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';
import { content } from '../data/content';

export default function Media() {
  const { language } = useLanguage();
  const t = content[language].media;

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
        
        <div className="grid md:grid-cols-3 gap-6">
          {t.items.map((item, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="glass rounded-xl p-6 hover:border-blue-500/30 transition-all"
            >
              <div className="flex items-center gap-2 mb-4">
                <Newspaper className="text-blue-400" size={20} />
                <span className="text-slate-500 text-sm">{item.date}</span>
              </div>
              <h3 className="text-lg font-bold mb-2">{item.title}</h3>
              <p className="text-blue-400 text-sm mb-3">{item.source}</p>
              <p className="text-slate-400 text-sm">{item.summary}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
