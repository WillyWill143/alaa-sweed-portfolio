import { Content } from './types';

// --- Links & Contact Info ---
export const links = {
  github: 'https://github.com/WillyWill143',
  linkedin: 'https://www.linkedin.com/in/alaa-sweed-390a38267',
  kaggle: 'https://www.kaggle.com/alaasweed',
  portfolio: 'https://www.datascienceportfol.io/alaasweed',
  email: 'alaamsweed143@gmail.com',
  phone: '+20 111 035 8631',
  certificationsDrive: 'https://drive.google.com/drive/folders/1TbJYKHYkNMr_Qnwdx-n0jMRlYzisjaXS?usp=sharing'
};

export const contentEn: Content = {
  nav: [
    { id: 'home', label: 'Home' },
    { id: 'about', label: 'About' },
    { id: 'experience', label: 'Experience' },
    { id: 'projects', label: 'Projects' },
    { id: 'publications', label: 'Publications' },
    { id: 'certifications', label: 'Certifications' },
    { id: 'contact', label: 'Contact' },
  ],
  hero: {
    greeting: 'Hello,',
    namePrefix: "I'm",
    name: 'Alaa Sweed',
    role: ['Data Scientist', 'Data Analyst', 'Machine Learning Expert', 'Youth Leader'],
    description: 'Ultra-competitive problem solver and inquisitive learner thriving in fast-paced environments. I build data-driven solutions that drive business value by increasing revenue and enhancing decision-making.',
    btnAbout: 'About Me',
    btnProjects: 'View Projects',
  },
  about: {
    title: 'About Me',
    p1: 'I am a Data Scientist & Analyst based in Alexandria, Egypt, with over 2 years of experience. My expertise spans programming, research, data visualization, and management tools.',
    p2: 'I have a proven track record of designing interactive dashboards, automating data pipelines, and developing predictive models using Python, SQL, and Power BI. Whether it is teaching Machine Learning or predicting market trends, I bring analytical rigor and self-driven motivation to every challenge.',
    btnLinkedin: 'View LinkedIn Profile',
  },
  experience: {
    title: 'Professional Experience',
    items: [
      {
        role: 'Machine Learning Instructor',
        company: 'MLX Labs',
        period: 'Sep 2025 – Present',
        location: 'Alexandria, Egypt',
        description: [
          'Teaching advanced Machine Learning concepts and guiding students through practical implementations.',
          'Mentoring students on capstone projects and research methodologies.'
        ]
      },
      {
        role: 'Prompt Engineer',
        company: 'Data Annotation',
        period: 'Mar 2025 – Sep 2025',
        location: 'Remote',
        description: [
          'Worked on fine-tuning and evaluating AI models via high-quality data annotation.',
          'Ensured accuracy and relevance in LLM outputs through rigorous testing.'
        ]
      },
      {
        role: 'Data Analyst',
        company: 'Trimble Investments Group, LLC',
        period: 'Feb 2023 – Mar 2025',
        location: 'Remote (Texas, US)',
        description: [
          'Automated Python/SQL data pipelines, reducing manual data preparation time by 44%.',
          'Designed interactive Power BI dashboards to track ROI and market trends.',
          'Developed predictive models using Scikit-learn/TensorFlow, improving efficiency by 53%.'
        ]
      },
      {
        role: 'English Language Teacher',
        company: 'A.T Academy',
        period: 'Apr 2025 – Jun 2025',
        location: 'Remote (Saudi Arabia)',
        description: [
          'Delivered engaging English language curriculum to diverse student groups.',
          'Managed classroom dynamics and tracked student progress.'
        ]
      },
      {
        role: 'Sales Representative',
        company: 'Trimble Investments Group, LLC',
        period: 'Mar 2022 – Feb 2023',
        location: 'Remote (Texas, US)',
        description: [
          'Handled client relations and sales strategies.',
          'Leveraged data insights to identify potential leads and optimize sales pitches.'
        ]
      }
    ]
  },
  certifications: {
    title: 'Certifications',
    items: [
      {
        title: 'IBM Data Analyst Professional Certificate',
        issuer: 'IBM',
        date: '2024',
        link: 'https://www.coursera.org/account/accomplishments/professional-cert/4HHKS66VY8TE'
      },
      {
        title: 'Machine Learning Specialization',
        issuer: 'Stanford Online',
        date: '2024',
        link: 'https://www.coursera.org/account/accomplishments/specialization/7UFZNWMHVFFS'
      },
      {
        title: 'Deep Learning Specialization',
        issuer: 'DeepLearning.AI',
        date: '2024',
        link: 'https://www.coursera.org/account/accomplishments/specialization/ANQ2PRO3C0LE'
      },
      {
        title: 'Mathematics for Machine Learning',
        issuer: 'DeepLearning.AI',
        date: '2024',
        link: 'https://www.coursera.org/account/accomplishments/specialization/HMGAZVGVFJFK'
      },
      {
        title: 'Snowflake Data Engineering',
        issuer: 'Snowflake',
        date: '2024',
        link: 'https://www.coursera.org/account/accomplishments/professional-cert/TRQAARGIM2Z0'
      },
      {
        title: 'Microsoft Power BI Data Analyst',
        issuer: 'Microsoft',
        date: '2024',
        link: 'https://www.coursera.org/account/accomplishments/professional-cert/K2CANJ7KDSAC'
      },
      {
        title: 'CS50: Python',
        issuer: 'Harvard University',
        date: '2024',
        link: 'https://certificates.cs50.io/b7db7bc3-30d4-4a21-a033-e519e8488dba.pdf?size=letter'
      },
      {
        title: 'CS50: SQL',
        issuer: 'Harvard University',
        date: '2024',
        link: 'https://certificates.cs50.io/cf85c681-3366-48c3-8ba9-d40c393d7fab.pdf?size=letter'
      },
      {
        title: 'Excel for Business Essentials',
        issuer: 'Macquarie University',
        date: '2024',
        link: 'https://www.coursera.org/account/accomplishments/specialization/I4WFL61JK0CZ'
      },
    ]
  },
  services: {
    title: 'Skills & Expertise',
    items: [
      {
        title: 'Data Science & ML',
        description: 'Scikit-learn, TensorFlow, PyTorch, XGBoost, Keras, CNNs, Predictive Modeling, Statistical Analysis.',
        iconPath: 'M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z'
      },
      {
        title: 'Data Analysis & BI',
        description: 'Power BI (DAX, Power Query), Excel (Advanced), Tableau, Data Storytelling, Dashboard Design.',
        iconPath: 'M7 12l3-3 3 3 4-4M8 21l4-4 4 4M3 4h18M4 4h16v12a1 1 0 01-1 1H5a1 1 0 01-1-1V4z'
      },
      {
        title: 'Programming & DBs',
        description: 'Python (Pandas, NumPy, Polars), SQL (MySQL, PostgreSQL, Snowflake), Docker, Flask, Streamlit, FastAPI.',
        iconPath: 'M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4'
      },
      {
        title: 'Cloud & Big Data',
        description: 'Snowflake, Palantir Foundry, Microsoft Azure, Databricks, Data Warehousing, ETL Pipelines.',
        iconPath: 'M3 15a4 4 0 004 4h9a5 5 0 10-.1-9.999 5.002 5.002 0 10-9.78 2.096A4.001 4.001 0 003 15z'
      },
      {
        title: 'Data Wrangling',
        description: 'Web Scraping, Data Mining, Cleaning, Transformation, Feature Engineering, EDA.',
        iconPath: 'M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z'
      },
      {
        title: 'Soft Skills',
        description: 'Communication, Attention to Detail, Strategic Thinking, Leadership (Youth Leader), Problem Solving.',
        iconPath: 'M17 20h5v-2a3 3 0 00-5.356-1.857M17 20v-2c0-.656-.126-1.283-.356-1.857M9 20H4v-2a3 3 0 015-2.236M9 20v-2c0-.656-.126-1.283-.356-1.857m-4.735-3.143A8 8 0 0112 12c.706 0 1.378.163 1.996.444M12 12c-3.197 0-6.236-.884-8-2.5m16 2.5a8 8 0 00-8-8 8 8 0 00-8 8'
      }
    ]
  },
  projects: {
    title: 'Featured Projects',
    viewAll: 'View All Projects on GitHub',
    items: [
      {
        title: 'US Southern Real Estate Market Analysis',
        image: 'https://images.unsplash.com/photo-1560518883-ce09059eeffa?auto=format&fit=crop&q=80&w=800',
        description: 'Designed a full Python data pipeline (scraping, mining, preprocessing) and interactive Power BI dashboards. Developed predictive models to forecast housing prices and identify key trends.',
        demoLink: 'https://drive.google.com/drive/u/1/folders/19Ezc0qV7C_ak_zGsS0s7455we2CZUOYQ',
        codeLink: 'https://github.com/WillyWill143/Southern-housing-market/blob/main/us-southern-real-estate-market.ipynb',
      },
      {
        title: 'Churn Analysis',
        image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&q=80&w=800',
        description: 'Conducted comprehensive exploratory data analysis to identify key churn drivers such as contract type and payment methods, and developed high-accuracy predictive models using Random Forest and XGBoost to forecast customer attrition.',
        codeLink: 'https://github.com/WillyWill143/Telecom-Churn-Analysis/blob/main/customer-churn-eda-prediction.ipynb',
        demoLink: links.portfolio // Added a fallback link since demoLink was missing in your edit but is often expected by the UI
      },
      {
        title: 'Predicting Optimal Fertilizers',
        image: 'https://images.unsplash.com/photo-1625246333195-78d9c38ad449?auto=format&fit=crop&q=80&w=800',
        description: 'Built and tuned ensemble models (XGBoost, LightGBM) using advanced techniques like StratifiedKFold. Created a scalable pipeline to provide actionable data-driven prescriptions for farmers.',
        demoLink: 'https://www.kaggle.com/code/alaasweed/s5e6-let-s-farm-guys',
        codeLink: 'https://github.com/WillyWill143/Predicting-Optimal-Fertilizers/blob/main/s5e6-let-s-farm-guys.ipynb',
      }
    ]
  },
  publications: {
    title: 'Research & Case Studies',
    items: [
      {
        title: 'Weakly Supervised Road Extraction from Satellite Imagery using Partial Focal Loss and Stratified Point Supervision',
        meta: '2025 — Computer Vision & Remote Sensing', 
        description: 'Developed a cost-effective road extraction framework utilizing sparse point annotations. Introduced Stratified Point Supervision and Partial Focal Loss to effectively handle label sparsity and class imbalance in satellite imagery.',
        doi: 'https://doi.org/10.5281/zenodo.17818891'
      }
    ]
  },
  contact: {
    title: 'Get In Touch',
    btnSend: 'Send Message',
    placeholders: {
      name: 'Name',
      email: 'Email',
      phone: 'Phone (Optional)',
      subject: 'Subject (Optional)',
      message: 'Message'
    }
  },
  footer: {
    col1Title: "Alaa Sweed",
    col1Text: 'Data Scientist & Analyst. Transforming raw data into actionable insights. Let’s collaborate on meaningful impact.',
    col2Title: 'Quick Links',
    col3Title: 'Contact Info',
    copyright: '© 2025 Alaa Sweed. All rights reserved.',
    contactInfo: {
      phone: links.phone,
      email: links.email,
      location: 'Alexandria, Egypt'
    }
  }
};

export const contentAr: Content = {
  nav: [
    { id: 'home', label: 'الرئيسية' },
    { id: 'about', label: 'نبذة' },
    { id: 'experience', label: 'الخبرات' },
    { id: 'projects', label: 'المشاريع' },
    { id: 'publications', label: 'الأبحاث' }, 
    { id: 'certifications', label: 'الشهادات' },
    { id: 'contact', label: 'تواصل' },
  ],
  hero: {
    greeting: 'مرحباً،',
    namePrefix: 'أنا',
    name: 'علاء سويد',
    role: ['عالم بيانات', 'محلل بيانات', 'خبير تعلم الآلة', 'قائد شبابي'],
    description: 'محبّ لحلّ المشكلات ودائم التعلّم، وأتأقلم بسرعة في البيئات السريعة. أعمل على بناء حلول معتمدة على البيانات تساعد الشركات على تحسين قراراتها وزيادة إيراداتها.',
    btnAbout: 'عني',
    btnProjects: 'عرض المشاريع',
  },
  about: {
    title: 'نبذة عني',
    p1: 'أنا عالم بيانات ومحلل بيانات مقيم في الإسكندرية، مصر، ولديّ خبرة تزيد عن سنتين. تمتد خبرتي لتشمل البرمجة، والبحث، وتصور البيانات، وأدوات الإدارة.',
    p2: 'لديّ سجل مثبت في تصميم لوحات معلومات تفاعلية، وأتمتة خطوط معالجة البيانات، وتطوير نماذج تنبؤية باستخدام بايثون، إس كيو إل، وباور بي آي. سواء كان الأمر تدريس تعلّم الآلة أو التنبؤ باتجاهات السوق، فإنني أتعامل مع كل تحدٍ بعقلية تحليلية قوية ودافع ذاتي عالٍ.',
    btnLinkedin: 'عرض ملف لينكد إن',
  },
  experience: {
    title: 'الخبرات المهنية',
    items: contentEn.experience.items
  },
  certifications: {
    title: 'الشهادات',
    items: contentEn.certifications.items
  },
  services: {
    title: 'المهارات والخبرات',
    items: contentEn.services.items 
  },
  projects: {
    title: 'مشاريع مختارة',
    viewAll: 'عرض جميع المشاريع على GitHub',
    items: contentEn.projects.items 
  },
  publications: {
    title: 'الأبحاث ودراسات الحالة',
    items: contentEn.publications.items 
  },
  contact: {
    title: 'تواصل معي',
    btnSend: 'إرسال الرسالة',
    placeholders: {
      name: 'الاسم',
      email: 'البريد الإلكتروني',
      phone: 'الهاتف (اختياري)',
      subject: 'الموضوع (اختياري)',
      message: 'الرسالة'
    }
  },
  footer: {
    col1Title: "علاء سويد",
    col1Text: 'عالم ومحلل بيانات. لبناء عالم رقمي افضل.',
    col2Title: 'روابط سريعة',
    col3Title: 'معلومات الاتصال',
    copyright: '© 2025 علاء سويد. جميع الحقوق محفوظة.',
    contactInfo: {
      phone: links.phone,
      email: links.email,
      location: 'الإسكندرية، مصر'
    }
  }
};
