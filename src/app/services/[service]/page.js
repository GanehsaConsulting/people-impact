"use client";

import React from 'react';
import { useParams } from 'next/navigation';
import Link from 'next/link';
import {
  FiArrowLeft,
  FiCheck,
  FiArrowRight,
} from 'react-icons/fi';
import {
  HiOutlineUsers,
  HiOutlineChartBar,
  HiOutlineHeart,
  HiOutlineCurrencyDollar,
  HiOutlineCalculator,
  HiOutlineDocumentText,
  HiOutlineLightBulb,
  HiOutlineShieldCheck,
  HiOutlineDesktopComputer,
  HiOutlineSparkles,
  HiOutlineCog,
} from 'react-icons/hi';
import { IoIosArrowForward } from 'react-icons/io';
import { servicesData } from '@/lib/servicesData';
import { PiPersonArmsSpreadFill } from "react-icons/pi";

// Icon mapping
const SERVICE_ICONS = {
  'talent-acquisition-recruitment': HiOutlineUsers,
  'performance-management': HiOutlineChartBar,
  'employee-engagement-retention': HiOutlineHeart,
  'training-development': PiPersonArmsSpreadFill,
  'compensation-benefits': HiOutlineCurrencyDollar,
  'payroll-services': HiOutlineCalculator,
  'hr-policies-procedures': HiOutlineDocumentText,
  'organizational-development': HiOutlineLightBulb,
  'compliance-support': HiOutlineShieldCheck,
  'hr-technology-implementation': HiOutlineDesktopComputer,
  'diversity-equity-inclusion': HiOutlineSparkles,
  'custom-services': HiOutlineCog,
};

const CARD_ICONS = [
  FiCheck,
  HiOutlineLightBulb,
  HiOutlineShieldCheck,
  HiOutlineSparkles,
];

const COLOR_SCHEMES = [
  {
    bgColor: 'bg-blue-50 dark:bg-blue-900/20',
    borderColor: 'border-blue-200 dark:border-blue-700',
    gradientColor: 'from-blue-500 to-blue-600',
    iconBg: 'bg-white dark:bg-gray-800',
    iconColor: 'text-blue-500',
    decorativeColor: 'from-blue-500/5',
  },
  {
    bgColor: 'bg-emerald-50 dark:bg-emerald-900/20',
    borderColor: 'border-emerald-200 dark:border-emerald-700',
    gradientColor: 'from-emerald-500 to-emerald-600',
    iconBg: 'bg-white dark:bg-gray-800',
    iconColor: 'text-emerald-500',
    decorativeColor: 'from-emerald-500/5',
  },
];

// Helper
const getGridColumns = (serviceCount) =>
  serviceCount <= 2
    ? 'grid-cols-1 md:grid-cols-2'
    : serviceCount === 3
    ? 'grid-cols-1 md:grid-cols-3'
    : 'grid-cols-1 sm:grid-cols-2';

// Reusable components
const Breadcrumb = ({ serviceTitle }) => (
  <nav className="flex items-center gap-1 md:gap-2 text-xs md:text-sm overflow-x-auto">
    <Link href="/" className="text-darkColor/60 dark:text-lightColor/60 hover:text-main-1 transition-colors whitespace-nowrap">
      Home
    </Link>
    <IoIosArrowForward className="text-darkColor/40 dark:text-lightColor/40 flex-shrink-0" />
    <Link href="/services" className="text-darkColor/60 dark:text-lightColor/60 hover:text-main-1 transition-colors whitespace-nowrap">
      Services
    </Link>
    <IoIosArrowForward className="text-darkColor/40 dark:text-lightColor/40 flex-shrink-0" />
    <span className="text-main-1 font-medium truncate">{serviceTitle}</span>
  </nav>
);

const ServiceBadge = () => (
  <div className="inline-flex items-center gap-2 px-3 md:px-4 py-1.5 md:py-2 bg-main-1/10 dark:bg-main-1/20 rounded-full text-main-1 text-xs md:text-sm font-medium">
    <span className="w-1.5 h-1.5 md:w-2 md:h-2 bg-main-1 rounded-full flex-shrink-0" />
    <span className="whitespace-nowrap">Professional HR Services</span>
  </div>
);

const CTAButton = ({ href, children, variant = 'primary', className = '' }) => {
  const base =
    'inline-flex items-center justify-center gap-2 md:gap-3 font-semibold px-6 md:px-8 py-3 md:py-4 rounded-secondary transition-colors duration-200 text-sm md:text-base';
  const styles = {
    primary: 'bg-main-1 hover:bg-main-2 text-white group',
    secondary:
      'bg-white dark:bg-secondaryDark border border-main-1 text-main-1 hover:bg-main-1 hover:text-white dark:hover:bg-main-1',
  };
  return (
    <Link href={href} className={`${base} ${styles[variant]} ${className}`}>
      {children}
    </Link>
  );
};

// Hero Banner dengan background gambar + overlay gradient
const HeroBanner = ({ IconComponent, serviceCount }) => (
  <div
    className="relative rounded-main overflow-hidden min-h-[320px] md:min-h-[420px] lg:min-h-[480px]"
    style={{ boxShadow: 'var(--shadow-mainShadow)' }}
  >
    {/* Background Image + Gradient Overlay */}
    <div
      className="absolute inset-0 bg-cover bg-center"
      style={{
        backgroundImage:
          "url('https://images.pexels.com/photos/6340692/pexels-photo-6340692.jpeg')",
      }}
    >
      <div
        className="absolute inset-0"
        style={{
          background:
            'linear-gradient(135deg, var(--color-main-1) 0%, var(--color-main-2) 100%)',
          opacity: 0.5,
        }}
      />
    </div>

    {/* Icon utama tetap di tengah */}
    <div className="absolute inset-0 flex items-center justify-center z-10">
      <div className="relative">
        <div className="absolute inset-0 rounded-full blur-2xl scale-150 bg-white/20" />
        <div className="relative w-28 h-28 md:w-36 md:h-36 lg:w-44 lg:h-44 bg-white/20 backdrop-blur-md rounded-full flex items-center justify-center border border-white/30">
          <div className="w-20 h-20 md:w-24 md:h-24 lg:w-32 lg:h-32 bg-white/10 rounded-full flex items-center justify-center">
            <IconComponent className="w-10 h-10 md:w-12 md:h-12 lg:w-16 lg:h-16 text-white drop-shadow-2xl" />
          </div>
        </div>
        <div
          className="absolute inset-0 rounded-full border-2 border-transparent border-t-white/30 border-r-white/20 animate-spin"
          style={{ animationDuration: '8s' }}
        />
      </div>
    </div>

    {/* Badge jumlah service */}
    <div className="absolute top-4 right-4 md:top-6 md:right-6 lg:top-8 lg:right-8 bg-white/80 backdrop-blur-md rounded-full px-3 py-1.5 md:px-4 md:py-2 text-xs md:text-sm font-bold text-darkColor">
      {serviceCount} Services
    </div>

    {/* Badge Expert Solutions */}
    <div className="absolute bottom-4 left-4 md:bottom-6 md:left-6 lg:bottom-8 lg:left-8 bg-white/80 backdrop-blur-md rounded-xl p-3 md:p-4">
      <div className="flex items-center gap-2">
        <div className="w-2 h-2 md:w-3 md:h-3 bg-main-1 rounded-full animate-pulse" />
        <span className="text-xs md:text-sm font-semibold text-darkColor">Expert Solutions</span>
      </div>
    </div>
  </div>
);

const ServiceCard = ({ service, index }) => {
  const IconComponent = CARD_ICONS[index % CARD_ICONS.length];
  const scheme = COLOR_SCHEMES[index % COLOR_SCHEMES.length];

  return (
    <div
      className={`group relative overflow-hidden rounded-2xl border ${scheme.borderColor} ${scheme.bgColor} p-6 md:p-8 transition-all ease-in-out duration-500 hover:shadow-2xl hover:-translate-y-2 hover:border-main-1/40 dark:hover:border-main-1/40`}
    >
      <div
        className={`absolute inset-0 bg-gradient-to-br ${scheme.gradientColor} opacity-0 group-hover:opacity-5 transition-opacity duration-500`}
      />
      {/* Icon Container */}
      <div
        className={`relative mb-6 inline-flex items-center justify-center w-16 h-16 md:w-20 md:h-20 rounded-2xl ${scheme.iconBg} shadow-lg group-hover:shadow-xl group-hover:scale-110 transition-all`}
      >
        <IconComponent
          className={`w-8 h-8 md:w-10 md:h-10 ${scheme.iconColor} transition-all duration-500 group-hover:scale-110`}
        />
      </div>

      {/* Content */}
      <div className="relative space-y-4">
        <h3 className="text-xl md:text-2xl font-bold text-darkColor dark:text-lightColor group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-main-1 group-hover:to-main-3 transition-all leading-tight">
          {service.title}
        </h3>
        <p className="text-darkColor/70 dark:text-lightColor/70 leading-relaxed text-sm md:text-base group-hover:text-darkColor/80 dark:group-hover:text-lightColor/80">
          {service.description}
        </p>
      </div>

      {/* Decorative Elements */}
      <div className="absolute top-0 right-0 w-20 h-20 bg-gradient-to-bl from-white/10 dark:from-lightColor/10 to-transparent rounded-bl-3xl opacity-0 group-hover:opacity-100 transition-opacity" />
      <div
        className={`absolute bottom-0 left-0 w-16 h-16 bg-gradient-to-tr ${scheme.decorativeColor} to-transparent rounded-tr-3xl opacity-0 group-hover:opacity-100 transition-opacity`}
      />
    </div>
  );
};

const NotFoundPage = () => (
  <div className="min-h-screen flex items-center justify-center px-4">
    <div className="text-center max-w-md mx-auto">
      <h1 className="text-2xl md:text-3xl lg:text-4xl font-bold text-darkColor dark:text-lightColor mb-4">
        Service Not Found
      </h1>
      <p className="text-sm md:text-base text-darkColor/70 dark:text-lightColor/70 mb-6 md:mb-8">
        The service you're looking for doesn't exist.
      </p>
      <CTAButton href="/services" className="w-full sm:w-auto">
        <FiArrowLeft className="w-4 h-4" />
        <span>Back to Services</span>
      </CTAButton>
    </div>
  </div>
);

// Main Page
export default function ServicePage() {
  const params = useParams();
  const serviceSlug = params.service;
  const serviceData = servicesData[serviceSlug];

  if (!serviceData) {
    return <NotFoundPage />;
  }

  const IconComponent = SERVICE_ICONS[serviceSlug] || HiOutlineCog;

  return (
    <div className="margin spacing">
      {/* Breadcrumb */}
      <div className="mb-6 md:mb-8">
        <Breadcrumb serviceTitle={serviceData.title} />
      </div>

      {/* Hero Section */}
      <section className="mb-12 md:mb-16">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-10 lg:gap-12 items-center">
          <div className="space-y-4 md:space-y-6 order-2 lg:order-1">
            <ServiceBadge />
            <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold text-darkColor dark:text-lightColor leading-tight">
              {serviceData.title}
            </h1>
            <h2 className="text-base md:text-lg lg:text-xl text-main-3 font-medium leading-relaxed">
              {serviceData.subtitle}
            </h2>
            <p className="text-sm md:text-base text-darkColor/80 dark:text-lightColor/80 leading-relaxed">
              {serviceData.description}
            </p>
            <div className="pt-2 md:pt-4">
              <CTAButton href="/contact" className="w-full sm:w-auto justify-center sm:justify-start">
                <span>Get Started Today</span>
                <FiArrowRight className="w-4 h-4 md:w-5 md:h-5 group-hover:translate-x-1 transition-transform duration-200" />
              </CTAButton>
            </div>
          </div>

          <div className="relative order-1 lg:order-2">
            <HeroBanner IconComponent={IconComponent} serviceCount={serviceData.services.length} />
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="mb-12 md:mb-16">
        <div className="text-center mb-8 md:mb-12">
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-darkColor dark:text-lightColor mb-3 md:mb-4">
            Our {serviceData.title} Services
          </h2>
          <p className="text-sm md:text-base text-darkColor/70 dark:text-lightColor/70 max-w-3xl mx-auto leading-relaxed px-4">
            Comprehensive solutions designed to address your specific needs and drive meaningful results
          </p>
        </div>

        <div className={`grid gap-6 md:gap-8 ${getGridColumns(serviceData.services.length)}`}>
          {serviceData.services.map((service, index) => (
            <ServiceCard key={index} service={service} index={index} />
          ))}
        </div>
      </section>

      {/* CTA Section */}
      <section>
        <div className="bg-gradient-to-br from-main-1/10 to-main-3/10 dark:from-main-1/20 dark:to-main-3/20 rounded-main p-6 md:p-8 lg:p-12 text-center border border-main-1/20">
          <h2 className="text-xl md:text-2xl lg:text-3xl xl:text-4xl font-bold text-darkColor dark:text-lightColor mb-3 md:mb-4">
            {serviceData.ctaText}
          </h2>
          <p className="text-sm md:text-base lg:text-lg text-darkColor/80 dark:text-lightColor/80 max-w-3xl mx-auto mb-6 md:mb-8 leading-relaxed px-4">
            {serviceData.ctaDescription}
          </p>
          <div className="flex flex-col sm:flex-row gap-3 md:gap-4 justify-center max-w-md sm:max-w-none mx-auto">
            <CTAButton href="/contact" className="flex-1 sm:flex-initial">
              <span>Get in Touch</span>
              <FiArrowRight className="w-4 h-4 md:w-5 md:h-5 group-hover:translate-x-1 transition-transform duration-200" />
            </CTAButton>
            <CTAButton href="/services" variant="secondary" className="flex-1 sm:flex-initial">
              View All Services
            </CTAButton>
          </div>
        </div>
      </section>
    </div>
  );
}