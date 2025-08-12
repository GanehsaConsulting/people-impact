"use client"

import React from 'react';
import { useParams } from 'next/navigation';
import Link from 'next/link';
import { 
  FiArrowLeft, 
  FiCheck, 
  FiArrowRight 
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
  HiOutlineCog
} from 'react-icons/hi';
import { IoIosArrowForward } from 'react-icons/io';
import { servicesData } from '@/lib/servicesData';

const SERVICE_ICONS = {
  "talent-acquisition-recruitment": HiOutlineUsers,
  "performance-management": HiOutlineChartBar,
  "employee-engagement-retention": HiOutlineHeart,
  "compensation-benefits": HiOutlineCurrencyDollar,
  "payroll-services": HiOutlineCalculator,
  "hr-policies-procedures": HiOutlineDocumentText,
  "organizational-development": HiOutlineLightBulb,
  "compliance-support": HiOutlineShieldCheck,
  "hr-technology-implementation": HiOutlineDesktopComputer,
  "diversity-equity-inclusion": HiOutlineSparkles,
  "custom-services": HiOutlineCog
};

const CARD_ICONS = [
  FiCheck,
  HiOutlineLightBulb,
  HiOutlineShieldCheck,
  HiOutlineSparkles
];

const COLOR_SCHEMES = [
  {
    bgColor: "bg-blue-50 dark:bg-blue-900/20",
    borderColor: "border-blue-200 dark:border-blue-700",
    gradientColor: "from-blue-500 to-blue-600",
    iconBg: "bg-white dark:bg-gray-800",
    iconColor: "text-blue-500",
    decorativeColor: "from-blue-500/5"
  },
  {
    bgColor: "bg-emerald-50 dark:bg-emerald-900/20",
    borderColor: "border-emerald-200 dark:border-emerald-700",
    gradientColor: "from-emerald-500 to-emerald-600",
    iconBg: "bg-white dark:bg-gray-800",
    iconColor: "text-emerald-500",
    decorativeColor: "from-emerald-500/5"
  },
];

// Helper Functions
const getGridColumns = (serviceCount) => {
  return "grid-cols-1 sm:grid-cols-2";
};

// Components
const Breadcrumb = ({ serviceTitle }) => (
  <nav className="flex items-center gap-1 md:gap-2 text-xs md:text-sm overflow-x-auto">
    <Link
      href="/"
      className="text-darkColor/60 dark:text-lightColor/60 hover:text-main-1 transition-colors duration-200 whitespace-nowrap"
    >
      Home
    </Link>
    <span className="text-darkColor/40 dark:text-lightColor/40 flex-shrink-0">
      <IoIosArrowForward />
    </span>
    <Link
      href="/services"
      className="text-darkColor/60 dark:text-lightColor/60 hover:text-main-1 transition-colors duration-200 whitespace-nowrap"
    >
      Services
    </Link>
    <span className="text-darkColor/40 dark:text-lightColor/40 flex-shrink-0">
      <IoIosArrowForward />
    </span>
    <span className="text-main-1 font-medium truncate">{serviceTitle}</span>
  </nav>
);

const ServiceBadge = () => (
  <div className="inline-flex items-center gap-2 px-3 md:px-4 py-1.5 md:py-2 bg-main-1/10 dark:bg-main-1/20 rounded-full text-main-1 text-xs md:text-sm font-medium">
    <span className="w-1.5 h-1.5 md:w-2 md:h-2 bg-main-1 rounded-full flex-shrink-0"></span>
    <span className="whitespace-nowrap">Professional HR Services</span>
  </div>
);

const CTAButton = ({ href, children, variant = "primary", className = "" }) => {
  const baseClasses = "inline-flex items-center justify-center gap-2 md:gap-3 font-semibold px-6 md:px-8 py-3 md:py-4 rounded-secondary transition-colors duration-200 text-sm md:text-base";
  
  const variants = {
    primary: "bg-main-1 hover:bg-main-2 text-white group",
    secondary: "bg-white dark:bg-secondaryDark border border-main-1 text-main-1 hover:bg-main-1 hover:text-white dark:hover:bg-main-1"
  };

  return (
    <Link href={href} className={`${baseClasses} ${variants[variant]} ${className}`}>
      {children}
    </Link>
  );
};

// Simplified Hero Banner with Custom Color Palette and Wave Patterns
const HeroBanner = ({ IconComponent, serviceCount }) => (
  <div className="relative rounded-main overflow-hidden min-h-[320px] md:min-h-[420px] lg:min-h-[480px]" style={{ boxShadow: 'var(--shadow-mainShadow)' }}>
    {/* Custom Color Background Gradient */}
    <div className="absolute inset-0" style={{
      background: `linear-gradient(135deg, 
        var(--color-sec-1) 0%, 
        var(--color-main-1) 30%, 
        var(--color-sec-2) 70%, 
        var(--color-main-2) 100%
      )`
    }}></div>
    
    {/* Simple Wave Patterns */}
    <SoothingWavePatterns />
    
    {/* Clean Floating Elements */}
    <CleanFloatingElements />
    
    {/* Main Icon */}
    <div className="absolute inset-0 flex items-center justify-center z-10">
      <div className="relative">
        {/* Soft Glow Effect */}
        <div className="absolute inset-0 rounded-full blur-2xl scale-150" style={{
          background: `linear-gradient(45deg, 
            var(--color-main-1, #119bd3)20, 
            var(--color-sec-1, #7ecff4)15
          )`
        }}></div>
        
        {/* Main Icon Container */}
        <div className="relative w-24 h-24 md:w-32 md:h-32 lg:w-40 lg:h-40 bg-white/90 dark:bg-[var(--color-main-2)]/80 backdrop-blur-sm rounded-full flex items-center justify-center shadow-lg" style={{
          border: `1px solid var(--color-sec-1, #7ecff4)40`
        }}>
          <div className="w-16 h-16 md:w-20 md:h-20 lg:w-24 lg:h-24 rounded-full flex items-center justify-center" style={{
            background: `linear-gradient(135deg, 
              var(--color-sec-1, #7ecff4)20, 
              var(--color-main-1, #119bd3)10
            )`
          }}>
            <IconComponent className="w-8 h-8 md:w-10 md:h-10 lg:w-12 lg:h-12" style={{
              color: 'var(--color-main-2, #1c305d)'
            }} />
          </div>
        </div>
        
        {/* Subtle Rotating Ring */}
        <div className="absolute inset-0 rounded-full animate-spin" style={{ 
          animationDuration: '12s',
          border: `1px solid var(--color-sec-1, #7ecff4)30`
        }}></div>
      </div>
    </div>

    {/* Clean Service Count Badge */}
    <div className="absolute top-6 right-6 md:top-8 md:right-8 bg-white/95 dark:bg-[var(--color-main-2)]/90 backdrop-blur-sm rounded-xl px-3 py-2 md:px-4 md:py-2 shadow-sm z-20" style={{
      border: `1px solid var(--color-sec-1, #7ecff4)30`
    }}>
      <span className="text-xs md:text-sm font-medium" style={{
        color: 'var(--color-main-2, #1c305d)'
      }}>
        {serviceCount} Services
      </span>
    </div>
    
    {/* Status Badge */}
    <div className="absolute bottom-6 left-6 md:bottom-8 md:left-8 bg-white/95 dark:bg-[var(--color-main-2)]/90 backdrop-blur-sm rounded-xl p-3 md:p-4 shadow-sm z-20" style={{
      border: `1px solid var(--color-sec-1, #7ecff4)30`
    }}>
      <div className="flex items-center gap-2">
        <div className="w-2 h-2 rounded-full animate-pulse" style={{
          backgroundColor: 'var(--color-main-3, #8dbb3f)'
        }}></div>
        <span className="text-xs md:text-sm font-medium" style={{
          color: 'var(--color-main-2, #1c305d)'
        }}>
          Expert Solutions
        </span>
      </div>
    </div>
  </div>
);

// Simplified Wave Patterns with Custom Colors
const SoothingWavePatterns = () => (
  <div className="absolute inset-0">
    {/* Bottom Wave */}
    <svg className="absolute bottom-0 w-full h-32 md:h-40" viewBox="0 0 1200 120" preserveAspectRatio="none">
      <path 
        d="M0,60 C300,100 600,20 900,60 C1000,80 1100,40 1200,60 L1200,120 L0,120 Z" 
        fill="var(--color-main-2)"
        fillOpacity="0.15"
        className="animate-pulse"
        style={{ animationDuration: '4s' }}
      />
    </svg>
    
    {/* Top Wave */}
    <svg className="absolute top-0 w-full h-24 md:h-32" viewBox="0 0 1200 120" preserveAspectRatio="none">
      <path 
        d="M0,40 C400,80 800,20 1200,50 L1200,0 L0,0 Z" 
        fill="var(--color-sec-1)"
        fillOpacity="0.12"
        className="animate-pulse"
        style={{ animationDuration: '6s', animationDelay: '1s' }}
      />
    </svg>
    
    {/* Middle Subtle Wave */}
    <svg className="absolute top-1/2 w-full h-20 md:h-24 transform -translate-y-1/2" viewBox="0 0 1200 120" preserveAspectRatio="none">
      <path 
        d="M0,50 C200,20 400,80 600,50 C800,20 1000,80 1200,50 L1200,70 L0,70 Z" 
        fill="var(--color-main-1)"
        fillOpacity="0.08"
        className="animate-pulse"
        style={{ animationDuration: '8s', animationDelay: '2s' }}
      />
    </svg>
  </div>
);

// Clean Floating Elements with Custom Colors
const CleanFloatingElements = () => (
  <div className="absolute inset-0 opacity-60">
    {/* Subtle Floating Dots */}
    <div className="absolute top-[20%] left-[10%] w-1.5 h-1.5 rounded-full animate-pulse" 
         style={{ 
           backgroundColor: 'var(--color-sec-2)',
           opacity: '0.4',
           animationDuration: '3s' 
         }}></div>
    <div className="absolute top-[70%] right-[15%] w-1 h-1 rounded-full animate-pulse" 
         style={{ 
           backgroundColor: 'var(--color-main-3)',
           opacity: '0.3',
           animationDuration: '4s', 
           animationDelay: '1s' 
         }}></div>
    <div className="absolute top-[40%] right-[25%] w-2 h-2 rounded-full animate-pulse" 
         style={{ 
           backgroundColor: 'var(--color-sec-4)',
           opacity: '0.25',
           animationDuration: '5s', 
           animationDelay: '2s' 
         }}></div>
    <div className="absolute bottom-[40%] left-[20%] w-1.5 h-1.5 rounded-full animate-pulse" 
         style={{ 
           backgroundColor: 'var(--color-sec-1)',
           opacity: '0.35',
           animationDuration: '3.5s', 
           animationDelay: '0.5s' 
         }}></div>
    
    {/* Gentle Geometric Shapes */}
    <div className="absolute top-[15%] right-[8%] w-16 h-16 md:w-20 md:h-20 rounded-full" 
         style={{ 
           border: `1px solid var(--color-sec-1)`, 
           opacity: '0.2' 
         }}></div>
    <div className="absolute bottom-[25%] left-[8%] w-12 h-12 md:w-16 md:h-16 rounded-full" 
         style={{ 
           border: `1px solid var(--color-main-3)`, 
           opacity: '0.15' 
         }}></div>
  </div>
);

const ServiceCard = ({ service, index }) => {
  const IconComponent = CARD_ICONS[index % CARD_ICONS.length];
  const scheme = COLOR_SCHEMES[index % COLOR_SCHEMES.length];

  return (
    <div className={`group relative overflow-hidden rounded-2xl border ${scheme.borderColor} ${scheme.bgColor} p-6 md:p-8 transition-all ease-in-out duration-500 hover:shadow-2xl hover:-translate-y-2 hover:border-main-1/40 dark:hover:border-main-1/40`}>
      {/* Background Gradient Effect */}
      <div className={`absolute inset-0 bg-gradient-to-br ${scheme.gradientColor} opacity-0 group-hover:opacity-5 transition-opacity duration-500`}></div>

      {/* Icon Container */}
      <div className={`relative mb-6 inline-flex items-center justify-center w-16 h-16 md:w-20 md:h-20 rounded-2xl ${scheme.iconBg} shadow-lg group-hover:shadow-xl transition-all duration-500 group-hover:scale-110`}>
        <IconComponent className={`w-8 h-8 md:w-10 md:h-10 ${scheme.iconColor} transition-all duration-500 group-hover:scale-110`} />
        <div className={`absolute inset-0 rounded-2xl bg-gradient-to-br ${scheme.gradientColor} opacity-0 group-hover:opacity-20 transition-opacity duration-500`}></div>
      </div>

      {/* Content */}
      <div className="relative space-y-4">
        <h3 className="text-xl md:text-2xl font-bold text-darkColor dark:text-lightColor group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-main-1 group-hover:to-main-3 transition-all duration-500 leading-tight">
          {service.title}
        </h3>
        <p className="text-darkColor/70 dark:text-lightColor/70 leading-relaxed text-sm md:text-base group-hover:text-darkColor/80 dark:group-hover:text-lightColor/80 transition-colors duration-300">
          {service.description}
        </p>
        <div className="flex items-center space-x-2 opacity-0 group-hover:opacity-100 transition-all duration-500 transform translate-x-[-10px] group-hover:translate-x-0">
          <span className={`text-sm font-medium bg-gradient-to-r ${scheme.gradientColor} bg-clip-text text-transparent`}>
            Learn More
          </span>
          <FiArrowRight className={`w-4 h-4 ${scheme.iconColor} transition-transform duration-300 group-hover:translate-x-1`} />
        </div>
      </div>

      {/* Decorative Elements */}
      <div className="absolute top-0 right-0 w-20 h-20 bg-gradient-to-bl from-white/10 dark:from-lightColor/10 to-transparent rounded-bl-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
      <div className={`absolute bottom-0 left-0 w-16 h-16 bg-gradient-to-tr ${scheme.decorativeColor} to-transparent rounded-tr-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500`}></div>
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

// Main Component
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
          {/* Content */}
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

          {/* Hero Banner */}
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