
export type Language = 'en' | 'ar';

export interface NavLink {
  id: string;
  label: string;
}

export interface Project {
  title: string;
  image: string;
  description: string;
  demoLink?: string;
  codeLink?: string;
  codeLabel?: string;
  doiLink?: string;
}

export interface Publication {
  title: string;
  meta: string;
  description: string;
  doi: string;
}

export interface Service {
  title: string;
  description: string;
  iconPath: string; // SVG path d attribute
}

export interface ExperienceItem {
  role: string;
  company: string;
  period: string;
  location: string;
  description: string[];
}

export interface CertificationItem {
  title: string;
  issuer: string;
  date: string;
  link: string;
}

export interface Content {
  nav: NavLink[];
  hero: {
    greeting: string;
    namePrefix: string;
    name: string;
    role: string[];
    description: string;
    btnAbout: string;
    btnProjects: string;
  };
  about: {
    title: string;
    p1: string;
    p2: string; // Using HTML string for bolding
    btnLinkedin: string;
  };
  experience: {
    title: string;
    items: ExperienceItem[];
  };
  certifications: {
    title: string;
    items: CertificationItem[];
  };
  services: {
    title: string;
    items: Service[];
  };
  projects: {
    title: string;
    items: Project[];
    viewAll: string;
  };
  publications: {
    title: string;
    items: Publication[];
  };
  contact: {
    title: string;
    placeholders: {
      name: string;
      email: string;
      phone: string;
      subject: string;
      message: string;
    };
    btnSend: string;
  };
  footer: {
    col1Title: string;
    col1Text: string;
    col2Title: string;
    col3Title: string;
    copyright: string;
    contactInfo: {
      phone: string;
      email: string;
      location: string;
    }
  };
}
