
import React from 'react';

export interface Service {
  id: string;
  title: string;
  description: string;
  icon: React.ReactNode;
  imageUrl: string;
}

export interface AIQuoteResponse {
  estimatedComplexity: 'Low' | 'Medium' | 'High';
  suggestedServices: string[];
  description: string;
  estimatedPriceRange: string;
}

export enum AppRoute {
  Home = '/',
  Services = '/services',
  Gallery = '/gallery',
  Quote = '/quote',
  Contact = '/contact'
}
