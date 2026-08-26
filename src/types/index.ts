// Core Type Definitions for Nael Technology Solutions Website

export interface NavItem {
  label: string;
  href: string;
  isExternal?: boolean;
}

export interface ServiceItem {
  id: string;
  title: string;
  category: string;
  excerpt: string;
  description: string;
  features: string[];
  tags: string[];
  image?: string;
}

export interface ProductItem {
  id: string;
  title: string;
  category: string;
  excerpt: string;
  description: string;
  features: string[];
  tags: string[];
  image?: string;
}

export interface SolutionItem {
  id: string;
  title: string;
  category: string;
  excerpt: string;
  description: string;
  features: string[];
  tags: string[];
  image?: string;
}

export interface ContactInfo {
  email: string;
  phones: string[];
  address: string;
  workingHours: string;
}
