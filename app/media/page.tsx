'use client';

import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { useLanguage } from '../context/LanguageContext';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';
import { Newspaper, ExternalLink } from 'lucide-react';

interface MediaItem {
  id: string;
  title: string;
  titleZh: string;
  source: string;
  sourceZh: string | null;
  date: string;
  summaryEn: string;
  summaryZh: string;
  link: string | null;
}

export default function MediaPage() {
  const { language } = useLanguage();
  const [media, setMedia] = useState<MediaItem[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch('/api/media')
      .then(res => res.json())
      .then(data => {
        setMedia(data);
        setLoading(false);
      });
  }, []);

  const content = {
    en: {
      title: 'Media Coverage',
      subtitle: 'Selected media appearances and coverage.',
    },
    zh: {
      title: '媒体报道',
      subtitle: '精选媒体露面与报道。',
    },
  };

  const t = content[language];

  return (
    <main className="min-h-screen">
      <Navigation />
      
      <section className="pt-32 pb-20 px-4">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center mb-12"
          >
            <h1 className="text-4xl md:text-5xl font-bold mb-4 gradient-text">{t.title}</h1>
            <p className="text-slate-400 max-w-2xl mx-auto">{t.subtitle}</p>
          </motion.div>

          {loading ? (
            <div className="text-center text-slate-400">Loading...</div>
          ) : (
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {media.map((item, i) => (
                <motion.div
                  key={item.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: i * 0.1 }}
                  className="glass rounded-xl p-6 hover:border-blue-500/30 transition-all"
                >
                  <div className="flex items-center gap-3 mb-4">
                    <Newspaper className="text-blue-400" size={20} />
                    <span className="text-slate-500 text-sm">{item.date}</span>
                  </div>
                  <h3 className="text-lg font-bold mb-2">
                    {language === 'en' ? item.title : item.titleZh}
                  </h3>
                  <p className="text-blue-400 text-sm mb-3">
                    {language === 'en' ? item.source : (item.sourceZh || item.source)}
                  </p>
                  <p className="text-slate-400 text-sm mb-4">
                    {language === 'en' ? item.summaryEn : item.summaryZh}
                  </p>
                  {item.link && (
                    <a
                      href={item.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 text-blue-400 hover:text-blue-300 text-sm"
                    >
                      Read More <ExternalLink size={14} />
                    </a>
                  )}
                </motion.div>
              ))}
            </div>
          )}
        </div>
      </section>

      <Footer />
    </main>
  );
}
