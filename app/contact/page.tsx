'use client';

import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { useLanguage } from '../context/LanguageContext';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';
import { Mail, MapPin, Languages, Clock, ArrowRight } from 'lucide-react';

interface CollaborationItem {
  id: string;
  title: string;
  titleZh: string;
  description: string;
  descriptionZh: string;
}

interface Profile {
  location: string;
  email: string;
  languages: string;
}

export default function ContactPage() {
  const { language } = useLanguage();
  const [items, setItems] = useState<CollaborationItem[]>([]);
  const [profile, setProfile] = useState<Profile | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    Promise.all([
      fetch('/api/collaboration').then(res => res.json()),
      fetch('/api/profile').then(res => res.json()),
    ]).then(([itemsData, profileData]) => {
      setItems(itemsData);
      setProfile(profileData);
      setLoading(false);
    });
  }, []);

  const content = {
    en: {
      title: 'Work With Ray',
      subtitle: 'Open to strategic partnerships, venture building, and cross-border opportunities.',
      collaboration: 'Collaboration Areas',
      contactInfo: 'Contact Info',
      response: 'Usually responds within 24-48 hours',
      cta: 'Get in Touch',
    },
    zh: {
      title: '与Ray合作',
      subtitle: '开放战略合作、创业构建和跨境机会。',
      collaboration: '合作方向',
      contactInfo: '联系方式',
      response: '通常在24-48小时内回复',
      cta: '取得联系',
    },
  };

  const t = content[language];

  return (
    <main className="min-h-screen">
      <Navigation />
      
      <section className="pt-32 pb-20 px-4">
        <div className="max-w-4xl mx-auto">
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
            <div className="grid md:grid-cols-2 gap-8">
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                className="glass rounded-xl p-6"
              >
                <h3 className="text-xl font-bold mb-4">{t.collaboration}</h3>
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
                animate={{ opacity: 1, x: 0 }}
                className="glass rounded-xl p-6"
              >
                <h3 className="text-xl font-bold mb-4">{t.contactInfo}</h3>
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
                      <span>{t.response}</span>
                    </div>
                  </div>
                )}
                
                <a
                  href={`mailto:${profile?.email}`}
                  className="mt-6 w-full bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg font-medium flex items-center justify-center gap-2 transition-all hover:scale-105"
                >
                  {t.cta}
                  <ArrowRight size={18} />
                </a>
              </motion.div>
            </div>
          )}
        </div>
      </section>

      <Footer />
    </main>
  );
}
