'use client';

import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { useLanguage } from '../context/LanguageContext';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';
import { ArrowUpRight } from 'lucide-react';

interface Venture {
  id: string;
  name: string;
  nameZh: string;
  tag: string;
  tagZh: string;
  summaryEn: string;
  summaryZh: string;
  status: string;
  statusZh: string;
  link: string;
}

export default function VenturesPage() {
  const { language } = useLanguage();
  const [ventures, setVentures] = useState<Venture[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch('/api/ventures')
      .then(res => res.json())
      .then(data => {
        setVentures(data);
        setLoading(false);
      });
  }, []);

  const content = {
    en: {
      title: 'Ventures',
      subtitle: 'Active projects across workforce mobility, property tech, AI systems, and cross-border commerce.',
    },
    zh: {
      title: '项目',
      subtitle: '活跃于劳动力流动、房产科技、AI系统和跨境商业领域的项目。',
    },
  };

  const t = content[language];

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'Live':
      case '已上线':
        return 'bg-green-500/20 text-green-400 border-green-500/30';
      case 'In Development':
      case '开发中':
        return 'bg-yellow-500/20 text-yellow-400 border-yellow-500/30';
      case 'Internal':
      case '内部':
        return 'bg-slate-500/20 text-slate-400 border-slate-500/30';
      default:
        return 'bg-blue-500/20 text-blue-400 border-blue-500/30';
    }
  };

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
              {ventures.map((venture, i) => (
                <motion.div
                  key={venture.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: i * 0.1 }}
                  className="glass rounded-xl p-6 hover:border-blue-500/30 transition-all group"
                >
                  <div className="flex justify-between items-start mb-4">
                    <span className={`text-xs px-3 py-1 rounded-full border ${getStatusColor(language === 'en' ? venture.status : venture.statusZh)}`}>
                      {language === 'en' ? venture.status : venture.statusZh}
                    </span>
                    {venture.link !== '#' && (
                      <a href={venture.link} target="_blank" rel="noopener noreferrer" className="text-slate-400 hover:text-blue-400 transition-colors">
                        <ArrowUpRight size={18} />
                      </a>
                    )}
                  </div>
                  <h3 className="text-xl font-bold mb-2 group-hover:text-blue-400 transition-colors">
                    {language === 'en' ? venture.name : venture.nameZh}
                  </h3>
                  <p className="text-blue-400 text-sm mb-3">
                    {language === 'en' ? venture.tag : venture.tagZh}
                  </p>
                  <p className="text-slate-400 text-sm">
                    {language === 'en' ? venture.summaryEn : venture.summaryZh}
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
