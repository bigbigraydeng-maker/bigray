'use client';

import { motion } from 'framer-motion';
import { ExternalLink, ArrowUpRight } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';
import { content } from '../data/content';

export default function Ventures() {
  const { language } = useLanguage();
  const t = content[language].ventures;

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'Live':
      case '已上线':
        return 'bg-green-500/20 text-green-400 border-green-500/30';
      case 'In Development':
      case '开发中':
        return 'bg-yellow-500/20 text-yellow-400 border-yellow-500/30';
      case 'Internal':
      case '内部':
        return 'bg-slate-500/20 text-slate-400 border-slate-500/30';
      default:
        return 'bg-blue-500/20 text-blue-400 border-blue-500/30';
    }
  };

  return (
    <section id="ventures" className="section">
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
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {t.items.map((venture, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="glass rounded-xl p-6 hover:border-blue-500/30 transition-all group"
            >
              <div className="flex justify-between items-start mb-4">
                <span className={`text-xs px-3 py-1 rounded-full border ${getStatusColor(venture.status)}`}>
                  {venture.status}
                </span>
                {venture.link !== '#' && (
                  <a href={venture.link} target="_blank" rel="noopener noreferrer" className="text-slate-400 hover:text-blue-400 transition-colors">
                    <ArrowUpRight size={18} />
                  </a>
                )}
              </div>
              <h3 className="text-xl font-bold mb-2 group-hover:text-blue-400 transition-colors">{venture.name}</h3>
              <p className="text-blue-400 text-sm mb-3">{venture.tag}</p>
              <p className="text-slate-400 text-sm">{venture.summary}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
