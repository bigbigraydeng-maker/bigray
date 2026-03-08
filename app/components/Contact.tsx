'use client';

import { motion } from 'framer-motion';
import { Mail, MapPin, Languages, Clock, ArrowRight } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';
import { content } from '../data/content';

export default function Contact() {
  const { language } = useLanguage();
  const t = content[language].contact;

  return (
    <section id="contact" className="section bg-gradient-to-b from-slate-900/50 to-transparent">
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
        
        <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="glass rounded-xl p-6"
          >
            <h3 className="text-xl font-bold mb-4">{language === 'en' ? 'Collaboration Areas' : '合作方向'}</h3>
            <ul className="space-y-3">
              {t.directions.map((dir, i) => (
                <li key={i} className="flex items-center gap-3 text-slate-300">
                  <div className="w-2 h-2 rounded-full bg-blue-500" />
                  {dir}
                </li>
              ))}
            </ul>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="glass rounded-xl p-6"
          >
            <h3 className="text-xl font-bold mb-4">{language === 'en' ? 'Contact Info' : '联系方式'}</h3>
            <div className="space-y-4">
              <div className="flex items-center gap-3 text-slate-300">
                <MapPin className="text-blue-400" size={20} />
                <span>{t.info.location}</span>
              </div>
              <div className="flex items-center gap-3 text-slate-300">
                <Languages className="text-blue-400" size={20} />
                <span>{t.info.languages}</span>
              </div>
              <div className="flex items-center gap-3 text-slate-300">
                <Mail className="text-blue-400" size={20} />
                <a href={`mailto:${t.info.email}`} className="hover:text-blue-400 transition-colors">{t.info.email}</a>
              </div>
              <div className="flex items-center gap-3 text-slate-400 text-sm">
                <Clock className="text-blue-400" size={20} />
                <span>{t.info.response}</span>
              </div>
            </div>
            
            <a
              href={`mailto:${t.info.email}`}
              className="mt-6 w-full bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg font-medium flex items-center justify-center gap-2 transition-all hover:scale-105"
            >
              {t.cta}
              <ArrowRight size={18} />
            </a>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
