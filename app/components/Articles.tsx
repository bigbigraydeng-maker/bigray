'use client';

import { motion } from 'framer-motion';
import { ExternalLink, Tag } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';
import { content } from '../data/content';

export default function Articles() {
  const { language } = useLanguage();
  const t = content[language].articles;

  const getCategoryColor = (category: string) => {
    switch (category) {
      case 'Ecommerce':
      case '电商':
        return 'bg-blue-500/20 text-blue-400 border-blue-500/30';
      case 'Technology':
      case '技术':
        return 'bg-green-500/20 text-green-400 border-green-500/30';
      case 'Business':
      case '商业':
        return 'bg-purple-500/20 text-purple-400 border-purple-500/30';
      case 'AI':
        return 'bg-orange-500/20 text-orange-400 border-orange-500/30';
      default:
        return 'bg-slate-500/20 text-slate-400 border-slate-500/30';
    }
  };

  return (
    <section id="articles" className="py-20 relative">
      <div className="container-custom">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4 gradient-text">
            {t.title}
          </h2>
          <p className="text-slate-400 max-w-2xl mx-auto">
            {t.description}
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
          {t.items.map((article, index) => (
            <motion.a
              key={index}
              href={article.link}
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="glass rounded-xl p-6 hover:border-blue-500/50 transition-all block group"
            >
              <div className="flex justify-between items-start mb-3">
                <span className={`px-3 py-1 rounded-full text-xs border ${getCategoryColor(article.category)}`}>
                  {article.category}
                </span>
                <ExternalLink className="w-5 h-5 text-slate-500 group-hover:text-blue-400 transition-colors" />
              </div>
              <h3 className="text-lg font-bold text-white mb-2 group-hover:text-blue-400 transition-colors">
                {article.title}
              </h3>
              <p className="text-sm text-blue-400 mb-2">
                {article.source} · {article.date}
              </p>
              <p className="text-sm text-slate-400 line-clamp-3">
                {article.summary}
              </p>
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  );
}
