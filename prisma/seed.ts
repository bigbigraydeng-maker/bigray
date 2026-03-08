import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

async function main() {
  console.log('Start seeding...');

  // Clear existing data
  await prisma.stat.deleteMany();
  await prisma.collaborationItem.deleteMany();
  await prisma.capability.deleteMany();
  await prisma.timelineItem.deleteMany();
  await prisma.searchKeyword.deleteMany();
  await prisma.publicLink.deleteMany();
  await prisma.mediaMention.deleteMany();
  await prisma.honor.deleteMany();
  await prisma.venture.deleteMany();
  await prisma.profile.deleteMany();

  // Seed Profile
  await prisma.profile.create({
    data: {
      nameEn: 'Ray Pengyu Deng',
      nameZh: '大瑞',
      titleEn: 'Founder · Operator · Cross-border Builder',
      titleZh: '创始人 · 操盘者 · 跨境构建者',
      subtitleEn: 'Building ventures across China, New Zealand & Australia',
      subtitleZh: '构建跨越中国、新西兰和澳大利亚的创业项目',
      descriptionEn: '20+ years in New Zealand. Building AI-enabled systems, workforce mobility platforms, and cross-border commerce infrastructure.',
      descriptionZh: '在新西兰20余年。专注于AI赋能系统、劳动力流动平台和跨境商业基础设施建设。',
      location: 'Auckland, New Zealand',
      email: 'ray@workvisas.work',
      languages: 'English, Chinese',
      linkedinUrl: 'https://www.linkedin.com/in/raydeng/',
    },
  });

  // Seed Stats
  await prisma.stat.createMany({
    data: [
      { value: '20+', labelEn: 'Years in New Zealand', labelZh: '年新西兰经验', order: 1 },
      { value: '15+', labelEn: 'Years in Business', labelZh: '年商业经验', order: 2 },
      { value: '3', labelEn: 'Markets: CN/NZ/AU', labelZh: '市场: 中/新/澳', order: 3 },
      { value: 'AI', labelEn: 'Systems Focus', labelZh: '系统聚焦', order: 4 },
    ],
  });

  // Seed Ventures
  await prisma.venture.createMany({
    data: [
      {
        name: 'WorkVisas.work',
        nameZh: 'WorkVisas.work',
        tag: 'Workforce Mobility',
        tagZh: '劳动力流动',
        summaryEn: 'Immigration and workforce solutions platform connecting talent with opportunities across Australia and New Zealand.',
        summaryZh: '连接人才与澳大利亚和新西兰机会的移民和劳动力解决方案平台。',
        status: 'Live',
        statusZh: '已上线',
        link: 'https://workvisas.work',
        order: 1,
      },
      {
        name: 'Compass',
        nameZh: 'Compass',
        tag: 'Property Tech',
        tagZh: '房产科技',
        summaryEn: 'AI-driven property investment platform for Chinese investors in Brisbane. Smart property analysis and opportunity discovery.',
        summaryZh: '面向布里斯班华人投资者的AI驱动房产投资平台。智能房产分析和机会发现。',
        status: 'Live',
        statusZh: '已上线',
        link: 'https://compass-1-kvdb.onrender.com/',
        order: 2,
      },
      {
        name: 'MoveHub',
        nameZh: 'MoveHub',
        tag: 'Relocation Services',
        tagZh: '搬迁服务',
        summaryEn: 'Comprehensive relocation and settlement platform for individuals and families moving across borders.',
        summaryZh: '为跨境搬迁的个人和家庭提供全面的搬迁和定居平台。',
        status: 'In Development',
        statusZh: '开发中',
        link: '#',
        order: 3,
      },
      {
        name: 'Magic Lamp / Aladdin',
        nameZh: 'Magic Lamp / Aladdin',
        tag: 'AI Systems',
        tagZh: 'AI系统',
        summaryEn: 'AI-enabled ecommerce and business automation systems for cross-border trade.',
        summaryZh: '用于跨境贸易的AI赋能电商和业务自动化系统。',
        status: 'Live',
        statusZh: '已上线',
        link: '#',
        order: 4,
      },
      {
        name: 'Apapaya / Camigina',
        nameZh: 'Apapaya / Camigina',
        tag: 'Ecommerce',
        tagZh: '电商',
        summaryEn: 'Cross-border ecommerce brands and digital commerce infrastructure.',
        summaryZh: '跨境电商品牌和数字商业基础设施。',
        status: 'Live',
        statusZh: '已上线',
        link: '#',
        order: 5,
      },
      {
        name: 'BetKing Pro / StockQueen',
        nameZh: 'BetKing Pro / StockQueen',
        tag: 'Fintech',
        tagZh: '金融科技',
        summaryEn: 'Financial technology and trading platforms for retail investors.',
        summaryZh: '面向散户投资者的金融科技和交易平台。',
        status: 'Internal',
        statusZh: '内部',
        link: '#',
        order: 6,
      },
    ],
  });

  // Seed Capabilities
  await prisma.capability.createMany({
    data: [
      {
        title: 'Cross-border Venture Building',
        titleZh: '跨境创业构建',
        description: 'End-to-end venture development across China, New Zealand, and Australia markets.',
        descriptionZh: '横跨中国、新西兰和澳大利亚市场的端到端创业开发。',
        icon: 'Globe',
        order: 1,
      },
      {
        title: 'Workforce & Migration Systems',
        titleZh: '劳动力与移民系统',
        description: 'Technology platforms connecting talent with opportunities across borders.',
        descriptionZh: '连接跨境人才与机会的技术平台。',
        icon: 'Users',
        order: 2,
      },
      {
        title: 'Ecommerce Infrastructure',
        titleZh: '电商基础设施',
        description: 'Digital commerce systems and cross-border trade enablement.',
        descriptionZh: '数字商业系统和跨境贸易赋能。',
        icon: 'ShoppingBag',
        order: 3,
      },
      {
        title: 'AI-enabled Operations',
        titleZh: 'AI赋能运营',
        description: 'Artificial intelligence systems for business automation and optimization.',
        descriptionZh: '用于业务自动化和优化的人工智能系统。',
        icon: 'Cpu',
        order: 4,
      },
      {
        title: 'Brand & Content Execution',
        titleZh: '品牌与内容执行',
        description: 'Strategic brand development and content marketing at scale.',
        descriptionZh: '战略性品牌开发和大规模内容营销。',
        icon: 'PenTool',
        order: 5,
      },
      {
        title: 'Market Entry Strategy',
        titleZh: '市场准入策略',
        description: 'China-NZ-AU business strategy and market entry execution.',
        descriptionZh: '中-新-澳商业战略和市场准入执行。',
        icon: 'Target',
        order: 6,
      },
    ],
  });

  // Seed Honors
  await prisma.honor.createMany({
    data: [
      {
        title: 'Top 50 Cross-Border Ecommerce Leaders',
        titleZh: '中国跨境电商50强领袖',
        year: '2021',
        organization: 'Industry Recognition',
        organizationZh: '行业认可',
        subtitle: 'Leading cross-border ecommerce innovation',
        subtitleZh: '引领跨境电商创新',
        order: 1,
      },
      {
        title: 'Best Use of Ecommerce in Exporting to China',
        titleZh: '对华出口最佳电商应用奖',
        year: '2016',
        organization: 'NZCTA',
        organizationZh: '新西兰中国贸易协会',
        subtitle: 'Excellence in China-NZ trade',
        subtitleZh: '新中贸易卓越奖',
        order: 2,
      },
      {
        title: 'Winner',
        titleZh: '获奖者',
        year: '2017',
        organization: 'NZCTA',
        organizationZh: '新西兰中国贸易协会',
        subtitle: 'Cross-border business excellence',
        subtitleZh: '跨境商业卓越奖',
        order: 3,
      },
      {
        title: 'Finalist',
        titleZh: '入围者',
        year: '2017',
        organization: 'NZCTA',
        organizationZh: '新西兰中国贸易协会',
        subtitle: 'Recognition for business innovation',
        subtitleZh: '商业创新认可',
        order: 4,
      },
    ],
  });

  // Seed Media Mentions
  await prisma.mediaMention.createMany({
    data: [
      {
        title: 'Building Bridges: NZ-China Business Relations',
        titleZh: '构建桥梁：新中商业关系',
        source: 'NZ Herald',
        sourceZh: '新西兰先驱报',
        date: '2024',
        summaryEn: 'Feature on cross-border entrepreneurship and business ecosystem development.',
        summaryZh: '关于跨境创业和商业生态系统发展的专题报道。',
        link: 'https://www.nzherald.co.nz',
        order: 1,
      },
      {
        title: 'Chinese Herald Interview',
        titleZh: '中文先驱报专访',
        source: 'Chinese Herald',
        sourceZh: '中文先驱报',
        date: '2023',
        summaryEn: 'In-depth interview on cross-border business journey and insights.',
        summaryZh: '关于跨境商业之旅和见解的深度专访。',
        link: 'https://www.chineseherald.co.nz',
        order: 2,
      },
      {
        title: 'The Future of Cross-border Ecommerce',
        titleZh: '跨境电商的未来',
        source: '10100 / 大数跨境',
        sourceZh: '10100 / 大数跨境',
        date: '2023',
        summaryEn: 'Insights on international trade and digital commerce infrastructure.',
        summaryZh: '关于国际贸易和数字商业基础设施的见解。',
        link: 'https://www.10100.com',
        order: 3,
      },
      {
        title: 'New Zealand as a Gateway Market',
        titleZh: '新西兰作为门户市场',
        source: '21 Finance',
        sourceZh: '21财经',
        date: '2022',
        summaryEn: 'Analysis of New Zealand\'s role in China-Australia business corridors.',
        summaryZh: '分析新西兰在中澳商业走廊中的作用。',
        link: 'https://www.21jingji.com',
        order: 4,
      },
      {
        title: 'Xinhua Feature',
        titleZh: '新华社报道',
        source: 'Xinhua',
        sourceZh: '新华社',
        date: '2021',
        summaryEn: 'Coverage of cross-border business achievements and contributions.',
        summaryZh: '关于跨境商业成就和贡献的报道。',
        link: 'https://www.xinhuanet.com',
        order: 5,
      },
    ],
  });

  // Seed Public Links
  await prisma.publicLink.createMany({
    data: [
      {
        title: 'LinkedIn Profile',
        titleZh: 'LinkedIn 个人资料',
        url: 'https://www.linkedin.com/in/raydeng/',
        type: 'linkedin',
        description: 'Professional profile and network',
        descriptionZh: '专业资料和社交网络',
        order: 1,
      },
      {
        title: 'WorkVisas.work',
        titleZh: 'WorkVisas.work',
        url: 'https://workvisas.work',
        type: 'company',
        description: 'Workforce mobility platform',
        descriptionZh: '劳动力流动平台',
        order: 2,
      },
      {
        title: 'Compass',
        titleZh: 'Compass',
        url: 'https://compass-1-kvdb.onrender.com/',
        type: 'company',
        description: 'AI-driven property investment platform',
        descriptionZh: 'AI驱动房产投资平台',
        order: 3,
      },
      {
        title: 'BizDB Company Record',
        titleZh: 'BizDB 公司记录',
        url: 'https://www.bizdb.co.nz',
        type: 'company',
        description: 'Official business registration',
        descriptionZh: '官方商业注册',
        order: 4,
      },
      {
        title: 'Chinese Herald',
        titleZh: '中文先驱报',
        url: 'https://www.chineseherald.co.nz',
        type: 'media',
        description: 'Media coverage and interviews',
        descriptionZh: '媒体报道和专访',
        order: 5,
      },
    ],
  });

  // Seed Search Keywords
  await prisma.searchKeyword.createMany({
    data: [
      { keyword: 'Ray Deng', keywordZh: '大瑞', category: 'name', order: 1 },
      { keyword: 'Ray Pengyu Deng', keywordZh: '邓蓬宇', category: 'name', order: 2 },
      { keyword: 'WorkVisas.work', keywordZh: 'WorkVisas.work', category: 'project', order: 3 },
      { keyword: 'Compass Property', keywordZh: 'Compass 房产', category: 'project', order: 4 },
      { keyword: 'Aladdin Ecommerce', keywordZh: 'Aladdin 电商', category: 'project', order: 5 },
      { keyword: 'Cross-border NZ China', keywordZh: '跨境 新西兰 中国', category: 'company', order: 6 },
      { keyword: 'Auckland Entrepreneur', keywordZh: '奥克兰 创业者', category: 'company', order: 7 },
    ],
  });

  // Seed Timeline
  await prisma.timelineItem.createMany({
    data: [
      {
        period: 'Early 2000s',
        periodZh: '2000年代初',
        event: 'Arrived in New Zealand, began business journey',
        eventZh: '抵达新西兰，开启商业之旅',
        order: 1,
      },
      {
        period: '2010s',
        periodZh: '2010年代',
        event: 'Built early ecommerce and cross-border operations',
        eventZh: '建立早期电商和跨境运营',
        order: 2,
      },
      {
        period: '2015-2020',
        periodZh: '2015-2020',
        event: 'Developed Magic Lamp / Aladdin ecosystem',
        eventZh: '发展 Magic Lamp / Aladdin 生态系统',
        order: 3,
      },
      {
        period: '2020-2023',
        periodZh: '2020-2023',
        event: 'Expanded into workforce mobility and consulting',
        eventZh: '扩展到劳动力流动和咨询领域',
        order: 4,
      },
      {
        period: '2024+',
        periodZh: '2024+',
        event: 'AI-led multi-venture phase with WorkVisas.work and Compass',
        eventZh: '以 WorkVisas.work 和 Compass 为核心的AI多项目阶段',
        order: 5,
      },
    ],
  });

  // Seed Collaboration Items
  await prisma.collaborationItem.createMany({
    data: [
      {
        title: 'Venture Building',
        titleZh: '创业构建',
        description: 'End-to-end venture development and scaling',
        descriptionZh: '端到端创业开发和扩展',
        order: 1,
      },
      {
        title: 'Strategic Partnerships',
        titleZh: '战略合作',
        description: 'Cross-border business partnerships and alliances',
        descriptionZh: '跨境商业合作伙伴关系',
        order: 2,
      },
      {
        title: 'Cross-border Market Entry',
        titleZh: '跨境市场准入',
        description: 'China-NZ-AU market entry strategy and execution',
        descriptionZh: '中-新-澳市场准入战略和执行',
        order: 3,
      },
      {
        title: 'Workforce Mobility Solutions',
        titleZh: '劳动力流动解决方案',
        description: 'Immigration and workforce platform development',
        descriptionZh: '移民和劳动力平台开发',
        order: 4,
      },
      {
        title: 'AI-enabled Business Systems',
        titleZh: 'AI赋能业务系统',
        description: 'AI automation and business optimization',
        descriptionZh: 'AI自动化和业务优化',
        order: 5,
      },
    ],
  });

  console.log('Seeding finished.');
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
