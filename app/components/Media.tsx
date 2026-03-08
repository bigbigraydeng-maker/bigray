'use client';

import { motion } from 'framer-motion';
import { ExternalLink, Image as ImageIcon } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';
import { content } from '../data/content';

export default function Media() {
  const { language } = useLanguage();
  const t = content[language].media;

  return (
    <section id="media" className="py-20 relative">
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
          {t.items.map((item, index) => (
            <motion.a
              key={index}
              href={item.link}
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="glass rounded-xl p-6 hover:border-blue-500/50 transition-all block group"
            >
              <div className="flex items-start gap-4 mb-4">
                <div className="w-20 h-16 bg-gradient-to-br from-blue-600/20 to-purple-600/20 rounded-lg flex items-center justify-center flex-shrink-0">
                  <ImageIcon className="w-6 h-6 text-slate-400" />
                </div>
                <div className="flex-1">
                  <div className="flex justify-between items-start mb-2">
                    <h3 className="text-lg font-bold text-white group-hover:text-blue-400 transition-colors">
                      {item.title}
                    </h3>
                    <ExternalLink className="w-5 h-5 text-slate-500 group-hover:text-blue-400 transition-colors" />
                  </div>
                  <p className="text-sm text-blue-400 mb-2">
                    {item.source} · {item.date}
                  </p>
                  <p className="text-sm text-slate-400">
                    {item.summary}
                  </p>
                </div>
              </div>
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  );
}
