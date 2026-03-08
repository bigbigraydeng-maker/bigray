'use client';

import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { Globe, Users, ShoppingBag, Cpu, PenTool, Target } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';

interface Capability {
  id: string;
  title: string;
  titleZh: string;
  description: string;
  descriptionZh: string;
  icon: string;
}

export default function Capabilities() {
  const { language } = useLanguage();
  const [capabilities, setCapabilities] = useState<Capability[]>([]);

  useEffect(() => {
    fetch('/api/capabilities')
      .then(res => res.json())
      .then(data => setCapabilities(data));
  }, []);

  const title = language === 'en' ? 'What Ray Builds' : '核心能力';
  const description = language === 'en' 
    ? 'Core competencies and focus areas for venture building and business operations.'
    : '创业构建和业务运营的核心竞争力和重点领域。';

  const iconMap: { [key: string]: React.ElementType } = {
    Globe,
    Users,
    ShoppingBag,
    Cpu,
    PenTool,
    Target,
  };

  return (
    <section className="section bg-gradient-to-b from-slate-900/50 to-transparent">
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
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {capabilities.map((cap, i) => {
            const Icon = iconMap[cap.icon] || Globe;
            return (
              <motion.div
                key={cap.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="glass rounded-xl p-6 hover:border-blue-500/30 transition-all group"
              >
                <div className="w-12 h-12 rounded-lg bg-blue-500/20 flex items-center justify-center mb-4 group-hover:bg-blue-500/30 transition-colors">
                  <Icon className="text-blue-400" size={24} />
                </div>
                <h3 className="text-lg font-bold mb-2">
                  {language === 'en' ? cap.title : cap.titleZh}
                </h3>
                <p className="text-slate-400 text-sm">
                  {language === 'en' ? cap.description : cap.descriptionZh}
                </p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
