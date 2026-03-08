'use client';

import { motion } from 'framer-motion';
import { Globe, Users, ShoppingBag, Cpu, PenTool, Target } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';
import { content } from '../data/content';

export default function Capabilities() {
  const { language } = useLanguage();
  const t = content[language].capabilities;

  const icons = [Globe, Users, ShoppingBag, Cpu, PenTool, Target];

  return (
    <section className="section bg-gradient-to-b from-slate-900/50 to-transparent">
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
          {t.items.map((item, i) => {
            const Icon = icons[i];
            return (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="glass rounded-xl p-6 hover:border-blue-500/30 transition-all group"
              >
                <div className="w-12 h-12 rounded-lg bg-blue-500/20 flex items-center justify-center mb-4 group-hover:bg-blue-500/30 transition-colors">
                  <Icon className="text-blue-400" size={24} />
                </div>
                <h3 className="text-lg font-bold mb-2">{item.title}</h3>
                <p className="text-slate-400 text-sm">{item.description}</p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
