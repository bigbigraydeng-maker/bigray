'use client';

import { motion } from 'framer-motion';
import { useLanguage } from '../context/LanguageContext';
import { content } from '../data/content';

export default function Timeline() {
  const { language } = useLanguage();
  const t = content[language].timeline;

  return (
    <section id="timeline" className="py-20 relative">
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
        </motion.div>

        <div className="max-w-3xl mx-auto">
          <div className="relative">
            <div className="absolute left-4 md:left-1/2 transform md:-translate-x-1/2 h-full w-0.5 bg-gradient-to-b from-blue-500 to-purple-500" />
            
            {t.items.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="relative pl-12 md:pl-0 md:w-1/2 mb-8 md:mb-12"
              >
                <div className="absolute left-0 md:left-auto md:right-0 transform md:translate-x-1/2 w-8 h-8 rounded-full bg-slate-800 border-2 border-blue-500 flex items-center justify-center">
                  <div className="w-3 h-3 rounded-full bg-blue-500" />
                </div>
                <div className={`glass rounded-xl p-4 ${index % 2 === 0 ? 'md:mr-8' : 'md:ml-8 md:text-right'}`}>
                  <p className="text-sm text-blue-400 font-medium mb-1">
                    {item.period}
                  </p>
                  <p className="text-slate-300">
                    {item.event}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
