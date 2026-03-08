'use client';

import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { Award } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';

interface Honor {
  id: string;
  title: string;
  titleZh: string;
  year: string;
  organization: string;
  organizationZh: string;
  subtitle: string;
  subtitleZh: string;
}

export default function Honors() {
  const { language } = useLanguage();
  const [honors, setHonors] = useState<Honor[]>([]);

  useEffect(() => {
    fetch('/api/honors')
      .then(res => res.json())
      .then(data => setHonors(data));
  }, []);

  const title = language === 'en' ? 'Honors & Recognition' : '荣誉与认可';
  const description = language === 'en' 
    ? 'Selected awards and recognition from industry and media.'
    : '来自行业和媒体的精选奖项和认可。';

  return (
    <section className="section">
      <div className="container-custom">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">{title}</h2>
          <p className="text-slate-400 max-w-2xl mx-auto">{description}</p>
        </motion.div>
        
        <div className="grid md:grid-cols-4 gap-6">
          {honors.map((honor, i) => (
            <motion.div
              key={honor.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="glass rounded-xl p-6 hover:border-blue-500/30 transition-all text-center"
            >
              <div className="w-16 h-16 rounded-full bg-blue-500/20 flex items-center justify-center mx-auto mb-4">
                <Award className="text-blue-400" size={28} />
              </div>
              <h3 className="text-lg font-bold mb-2">
                {language === 'en' ? honor.title : honor.titleZh}
              </h3>
              <p className="text-blue-400 text-sm mb-2">
                {language === 'en' ? honor.organization : honor.organizationZh}
              </p>
              <p className="text-slate-500 text-xs mb-2">{honor.year}</p>
              <p className="text-slate-400 text-sm">
                {language === 'en' ? honor.subtitle : honor.subtitleZh}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
