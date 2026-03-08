'use client';

import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { Mail, MapPin, Languages, Clock, ArrowRight } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';

interface CollaborationItem {
  id: string;
  title: string;
  titleZh: string;
}

interface Profile {
  location: string;
  email: string;
  languages: string;
}

export default function Contact() {
  const { language } = useLanguage();
  const [items, setItems] = useState<CollaborationItem[]>([]);
  const [profile, setProfile] = useState<Profile | null>(null);

  useEffect(() => {
    Promise.all([
      fetch('/api/collaboration').then(res => res.json()),
      fetch('/api/profile').then(res => res.json()),
    ]).then(([itemsData, profileData]) => {
      setItems(itemsData);
      setProfile(profileData);
    });
  }, []);

  const title = language === 'en' ? 'Work With Ray' : '与Ray合作';
  const description = language === 'en' 
    ? 'Open to strategic partnerships, venture building, and cross-border opportunities.'
    : '开放战略合作、创业构建和跨境机会。';
  const collaborationTitle = language === 'en' ? 'Collaboration Areas' : '合作方向';
  const contactTitle = language === 'en' ? 'Contact Info' : '联系方式';
  const response = language === 'en' ? 'Usually responds within 24-48 hours' : '通常在24-48小时内回复';
  const cta = language === 'en' ? 'Get in Touch' : '取得联系';

  return (
    <section id="contact" className="section bg-gradient-to-b from-slate-900/50 to-transparent">
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
        
        <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="glass rounded-xl p-6"
          >
            <h3 className="text-xl font-bold mb-4">{collaborationTitle}</h3>
            <ul className="space-y-3">
              {items.map((item) => (
                <li key={item.id} className="flex items-center gap-3 text-slate-300">
                  <div className="w-2 h-2 rounded-full bg-blue-500" />
                  {language === 'en' ? item.title : item.titleZh}
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
            <h3 className="text-xl font-bold mb-4">{contactTitle}</h3>
            {profile && (
              <div className="space-y-4">
                <div className="flex items-center gap-3 text-slate-300">
                  <MapPin className="text-blue-400" size={20} />
                  <span>{profile.location}</span>
                </div>
                <div className="flex items-center gap-3 text-slate-300">
                  <Languages className="text-blue-400" size={20} />
                  <span>{profile.languages}</span>
                </div>
                <div className="flex items-center gap-3 text-slate-300">
                  <Mail className="text-blue-400" size={20} />
                  <a href={`mailto:${profile.email}`} className="hover:text-blue-400 transition-colors">
                    {profile.email}
                  </a>
                </div>
                <div className="flex items-center gap-3 text-slate-400 text-sm">
                  <Clock className="text-blue-400" size={20} />
                  <span>{response}</span>
                </div>
              </div>
            )}
            
            <a
              href={`mailto:${profile?.email}`}
              className="mt-6 w-full bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg font-medium flex items-center justify-center gap-2 transition-all hover:scale-105"
            >
              {cta}
              <ArrowRight size={18} />
            </a>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
