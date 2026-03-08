'use client';

import { motion } from 'framer-motion';
import { Mail, MapPin, Languages, Clock } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';
import { content } from '../data/content';

export default function Contact() {
  const { language } = useLanguage();
  const t = content[language].contact;

  return (
    <section id="contact" className="py-20 relative">
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

        <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="glass rounded-xl p-6"
          >
            <h3 className="text-xl font-bold text-white mb-4">
              {language === 'en' ? 'Collaboration Areas' : '合作方向'}
            </h3>
            <ul className="space-y-3">
              {t.directions.map((direction, index) => (
                <li key={index} className="flex items-center gap-2 text-slate-300">
                  <div className="w-2 h-2 rounded-full bg-blue-500" />
                  {direction}
                </li>
              ))}
            </ul>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="glass rounded-xl p-6"
          >
            <h3 className="text-xl font-bold text-white mb-4">
              {language === 'en' ? 'Contact Information' : '联系信息'}
            </h3>
            <div className="space-y-4">
              <div className="flex items-center gap-3 text-slate-300">
                <MapPin className="w-5 h-5 text-blue-400" />
                <span>{t.info.location}</span>
              </div>
              <div className="flex items-center gap-3 text-slate-300">
                <Languages className="w-5 h-5 text-blue-400" />
                <span>{t.info.languages}</span>
              </div>
              <div className="flex items-center gap-3 text-slate-300">
                <Mail className="w-5 h-5 text-blue-400" />
                <a href={`mailto:${t.info.email}`} className="hover:text-blue-400 transition-colors">
                  {t.info.email}
                </a>
              </div>
              <div className="flex items-center gap-3 text-slate-300">
                <Clock className="w-5 h-5 text-blue-400" />
                <span>{t.info.response}</span>
              </div>
            </div>
            
            <motion.a
              href={`mailto:${t.info.email}`}
              className="btn-primary w-full mt-6 text-center block"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              {t.cta}
            </motion.a>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
