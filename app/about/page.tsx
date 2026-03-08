'use client';

import { motion } from 'framer-motion';
import { useLanguage } from '../context/LanguageContext';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';
import { Globe, Users, Target, Award } from 'lucide-react';

export default function AboutPage() {
  const { language } = useLanguage();

  const content = {
    en: {
      title: 'About Ray Deng',
      subtitle: 'Founder · Operator · Cross-border Builder',
      sections: [
        {
          title: 'Who is Ray Deng',
          content: 'Ray Deng is a cross-border entrepreneur and venture builder with over 20 years of experience in New Zealand. He has built and operated businesses across ecommerce, workforce mobility, property technology, and AI systems.',
        },
        {
          title: 'What He Builds',
          content: 'Ray focuses on creating technology-enabled platforms that bridge markets between China, New Zealand, and Australia. His ventures include WorkVisas.work for workforce mobility, Compass for property investment, and various AI-powered business systems.',
        },
        {
          title: 'Markets & Domains',
          content: 'Operating across three key markets - China, New Zealand, and Australia - Ray brings deep local knowledge combined with cross-border execution capabilities. His expertise spans workforce mobility, property technology, ecommerce infrastructure, and AI-enabled business operations.',
        },
        {
          title: 'Recognition',
          content: 'Ray has been recognized by NZCTA for excellence in cross-border trade, featured in NZ Herald and Chinese media, and acknowledged as a leader in the cross-border ecommerce space.',
        },
      ],
    },
    zh: {
      title: '关于大瑞',
      subtitle: '创始人 · 操盘者 · 跨境构建者',
      sections: [
        {
          title: '大瑞是谁',
          content: '大瑞是一位跨境创业者和创业构建者，在新西兰拥有超过20年的经验。他在电商、劳动力流动、房产科技和AI系统领域建立并运营了多家企业。',
        },
        {
          title: '他构建什么',
          content: '大瑞专注于创建技术赋能平台，连接中国、新西兰和澳大利亚之间的市场。他的创业项目包括用于劳动力流动的WorkVisas.work、用于房产投资的Compass，以及各种AI驱动的业务系统。',
        },
        {
          title: '市场与领域',
          content: '在三个关键市场运营——中国、新西兰和澳大利亚——大瑞将深厚的本地知识与跨境执行能力相结合。他的专业领域涵盖劳动力流动、房产科技、电商基础设施和AI赋能业务运营。',
        },
        {
          title: '认可与荣誉',
          content: '大瑞因跨境贸易卓越表现获得NZCTA认可，被新西兰先驱报和中文媒体报道，并被公认为跨境电商领域的领导者。',
        },
      ],
    },
  };

  const t = content[language];
  const icons = [Globe, Target, Users, Award];

  return (
    <main className="min-h-screen">
      <Navigation />
      
      <section className="pt-32 pb-20 px-4">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center mb-16"
          >
            <h1 className="text-4xl md:text-5xl font-bold mb-4 gradient-text">{t.title}</h1>
            <p className="text-xl text-slate-400">{t.subtitle}</p>
          </motion.div>

          <div className="space-y-8">
            {t.sections.map((section, i) => {
              const Icon = icons[i];
              return (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: i * 0.1 }}
                  className="glass rounded-xl p-8"
                >
                  <div className="flex items-center gap-4 mb-4">
                    <div className="w-12 h-12 rounded-lg bg-blue-500/20 flex items-center justify-center">
                      <Icon className="text-blue-400" size={24} />
                    </div>
                    <h2 className="text-2xl font-bold">{section.title}</h2>
                  </div>
                  <p className="text-slate-400 leading-relaxed">{section.content}</p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
