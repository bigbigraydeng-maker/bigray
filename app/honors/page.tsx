'use client';

import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { useLanguage } from '../context/LanguageContext';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';
import { Award, Trophy } from 'lucide-react';

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

export default function HonorsPage() {
  const { language } = useLanguage();
  const [honors, setHonors] = useState<Honor[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch('/api/honors')
      .then(res => res.json())
      .then(data => {
        setHonors(data);
        setLoading(false);
      });
  }, []);

  const content = {
    en: {
      title: 'Honors & Recognition',
      subtitle: 'Selected awards and recognition from industry and media.',
    },
    zh: {
      title: '荣誉与认可',
      subtitle: '来自行业和媒体的精选奖项和认可。',
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
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {honors.map((honor, i) => (
                <motion.div
                  key={honor.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: i * 0.1 }}
                  className="glass rounded-xl p-6 text-center hover:border-blue-500/30 transition-all"
                >
                  <div className="w-16 h-16 rounded-full bg-blue-500/20 flex items-center justify-center mx-auto mb-4">
                    <Trophy className="text-blue-400" size={28} />
                  </div>
                  <div className="text-3xl font-bold gradient-text mb-2">{honor.year}</div>
                  <h3 className="text-lg font-bold mb-2">
                    {language === 'en' ? honor.title : honor.titleZh}
                  </h3>
                  <p className="text-blue-400 text-sm mb-2">
                    {language === 'en' ? honor.organization : honor.organizationZh}
                  </p>
                  <p className="text-slate-400 text-sm">
                    {language === 'en' ? honor.subtitle : honor.subtitleZh}
                  </p>
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
