'use client';

import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { Newspaper } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';

interface MediaItem {
  id: string;
  title: string;
  titleZh: string;
  source: string;
  sourceZh: string | null;
  date: string;
  summaryEn: string;
  summaryZh: string;
}

export default function Media() {
  const { language } = useLanguage();
  const [media, setMedia] = useState<MediaItem[]>([]);

  useEffect(() => {
    fetch('/api/media')
      .then(res => res.json())
      .then(data => setMedia(data));
  }, []);

  const title = language === 'en' ? 'Media Coverage' : '媒体报道';
  const description = language === 'en' 
    ? 'Selected media appearances and coverage.'
    : '精选媒体露面与报道。';

  return (
    <section className="section bg-gradient-to-b from-transparent to-slate-900/50">
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
        
        <div className="grid md:grid-cols-3 gap-6">
          {media.slice(0, 3).map((item, i) => (
            <motion.div
              key={item.id}
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
              <h3 className="text-lg font-bold mb-2">
                {language === 'en' ? item.title : item.titleZh}
              </h3>
              <p className="text-blue-400 text-sm mb-3">
                {language === 'en' ? item.source : (item.sourceZh || item.source)}
              </p>
              <p className="text-slate-400 text-sm">
                {language === 'en' ? item.summaryEn : item.summaryZh}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
