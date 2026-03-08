'use client';

import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { Clock, CheckCircle } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';

interface TimelineItem {
  id: string;
  period: string;
  periodZh: string;
  event: string;
  eventZh: string;
}

export default function Timeline() {
  const { language } = useLanguage();
  const [items, setItems] = useState<TimelineItem[]>([]);

  useEffect(() => {
    fetch('/api/timeline')
      .then(res => res.json())
      .then(data => setItems(data));
  }, []);

  const title = language === 'en' ? 'Selected Timeline' : '发展历程';

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
        </motion.div>
        
        <div className="max-w-3xl mx-auto">
          {items.map((item, i) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="flex gap-4 mb-8 last:mb-0"
            >
              <div className="flex flex-col items-center">
                <div className="w-10 h-10 rounded-full bg-blue-500/20 flex items-center justify-center">
                  {i === items.length - 1 ? (
                    <CheckCircle className="text-blue-400" size={20} />
                  ) : (
                    <Clock className="text-blue-400" size={20} />
                  )}
                </div>
                {i < items.length - 1 && <div className="w-0.5 h-full bg-slate-700 mt-2" />}
              </div>
              <div className="glass rounded-xl p-4 flex-1">
                <p className="text-blue-400 text-sm font-medium mb-1">
                  {language === 'en' ? item.period : item.periodZh}
                </p>
                <p className="text-slate-300">
                  {language === 'en' ? item.event : item.eventZh}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
