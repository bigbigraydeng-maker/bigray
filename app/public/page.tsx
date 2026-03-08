'use client';

import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { useLanguage } from '../context/LanguageContext';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';
import { Newspaper, Award, Linkedin, Building2, Users, Search, ExternalLink } from 'lucide-react';

interface PublicLink {
  id: string;
  title: string;
  titleZh: string;
  url: string;
  type: string;
  description: string;
  descriptionZh: string;
}

interface SearchKeyword {
  id: string;
  keyword: string;
  keywordZh: string | null;
  category: string;
}

export default function PublicPage() {
  const { language } = useLanguage();
  const [links, setLinks] = useState<PublicLink[]>([]);
  const [keywords, setKeywords] = useState<SearchKeyword[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    Promise.all([
      fetch('/api/public-links').then(res => res.json()),
      fetch('/api/search-keywords').then(res => res.json()),
    ]).then(([linksData, keywordsData]) => {
      setLinks(linksData);
      setKeywords(keywordsData);
      setLoading(false);
    });
  }, []);

  const content = {
    en: {
      title: 'Public Footprint',
      subtitle: 'Media coverage, professional profiles, and public presence.',
      sections: {
        media: 'Media Coverage',
        profiles: 'Professional Profiles',
        companies: 'Company Records',
        search: 'Search Footprint',
      },
    },
    zh: {
      title: '公开足迹',
      subtitle: '媒体报道、专业资料和公开存在。',
      sections: {
        media: '媒体报道',
        profiles: '专业资料',
        companies: '公司记录',
        search: '搜索足迹',
      },
    },
  };

  const t = content[language];

  const getIcon = (type: string) => {
    switch (type) {
      case 'linkedin':
        return Linkedin;
      case 'company':
        return Building2;
      case 'media':
        return Newspaper;
      default:
        return ExternalLink;
    }
  };

  const mediaLinks = links.filter(l => l.type === 'media');
  const profileLinks = links.filter(l => l.type === 'linkedin');
  const companyLinks = links.filter(l => l.type === 'company');

  return (
    <main className="min-h-screen">
      <Navigation />
      
      <section className="pt-32 pb-20 px-4">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center mb-16"
          >
            <h1 className="text-4xl md:text-5xl font-bold mb-4 gradient-text">{t.title}</h1>
            <p className="text-slate-400 max-w-2xl mx-auto">{t.subtitle}</p>
          </motion.div>

          {loading ? (
            <div className="text-center text-slate-400">Loading...</div>
          ) : (
            <div className="space-y-16">
              {/* Professional Profiles */}
              <section>
                <h2 className="text-2xl font-bold mb-6 flex items-center gap-3">
                  <Linkedin className="text-blue-400" />
                  {t.sections.profiles}
                </h2>
                <div className="grid md:grid-cols-2 gap-4">
                  {profileLinks.map((link) => {
                    const Icon = getIcon(link.type);
                    return (
                      <a
                        key={link.id}
                        href={link.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="glass rounded-xl p-6 hover:border-blue-500/30 transition-all group"
                      >
                        <div className="flex items-start gap-4">
                          <div className="w-12 h-12 rounded-lg bg-blue-500/20 flex items-center justify-center group-hover:bg-blue-500/30 transition-colors">
                            <Icon className="text-blue-400" size={24} />
                          </div>
                          <div>
                            <h3 className="font-bold group-hover:text-blue-400 transition-colors">
                              {language === 'en' ? link.title : link.titleZh}
                            </h3>
                            <p className="text-slate-400 text-sm mt-1">
                              {language === 'en' ? link.description : link.descriptionZh}
                            </p>
                          </div>
                        </div>
                      </a>
                    );
                  })}
                </div>
              </section>

              {/* Company Records */}
              <section>
                <h2 className="text-2xl font-bold mb-6 flex items-center gap-3">
                  <Building2 className="text-blue-400" />
                  {t.sections.companies}
                </h2>
                <div className="grid md:grid-cols-2 gap-4">
                  {companyLinks.map((link) => {
                    const Icon = getIcon(link.type);
                    return (
                      <a
                        key={link.id}
                        href={link.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="glass rounded-xl p-6 hover:border-blue-500/30 transition-all group"
                      >
                        <div className="flex items-start gap-4">
                          <div className="w-12 h-12 rounded-lg bg-blue-500/20 flex items-center justify-center group-hover:bg-blue-500/30 transition-colors">
                            <Icon className="text-blue-400" size={24} />
                          </div>
                          <div>
                            <h3 className="font-bold group-hover:text-blue-400 transition-colors">
                              {language === 'en' ? link.title : link.titleZh}
                            </h3>
                            <p className="text-slate-400 text-sm mt-1">
                              {language === 'en' ? link.description : link.descriptionZh}
                            </p>
                          </div>
                        </div>
                      </a>
                    );
                  })}
                </div>
              </section>

              {/* Media Coverage */}
              <section>
                <h2 className="text-2xl font-bold mb-6 flex items-center gap-3">
                  <Newspaper className="text-blue-400" />
                  {t.sections.media}
                </h2>
                <div className="grid md:grid-cols-2 gap-4">
                  {mediaLinks.map((link) => {
                    const Icon = getIcon(link.type);
                    return (
                      <a
                        key={link.id}
                        href={link.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="glass rounded-xl p-6 hover:border-blue-500/30 transition-all group"
                      >
                        <div className="flex items-start gap-4">
                          <div className="w-12 h-12 rounded-lg bg-blue-500/20 flex items-center justify-center group-hover:bg-blue-500/30 transition-colors">
                            <Icon className="text-blue-400" size={24} />
                          </div>
                          <div>
                            <h3 className="font-bold group-hover:text-blue-400 transition-colors">
                              {language === 'en' ? link.title : link.titleZh}
                            </h3>
                            <p className="text-slate-400 text-sm mt-1">
                              {language === 'en' ? link.description : link.descriptionZh}
                            </p>
                          </div>
                        </div>
                      </a>
                    );
                  })}
                </div>
              </section>

              {/* Search Footprint */}
              <section>
                <h2 className="text-2xl font-bold mb-6 flex items-center gap-3">
                  <Search className="text-blue-400" />
                  {t.sections.search}
                </h2>
                <div className="glass rounded-xl p-6">
                  <div className="flex flex-wrap gap-3">
                    {keywords.map((keyword) => (
                      <span
                        key={keyword.id}
                        className="px-4 py-2 rounded-full bg-slate-800 text-slate-300 text-sm border border-slate-700"
                      >
                        {language === 'en' ? keyword.keyword : (keyword.keywordZh || keyword.keyword)}
                      </span>
                    ))}
                  </div>
                </div>
              </section>
            </div>
          )}
        </div>
      </section>

      <Footer />
    </main>
  );
}
