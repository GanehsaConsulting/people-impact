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

const HeroBanner = ({ IconComponent, serviceCount }) => (
  <div className="relative rounded-main overflow-hidden min-h-[320px] md:min-h-[420px] lg:min-h-[520px]" style={{ boxShadow: 'var(--shadow-mainShadow)' }}>
    {/* Main Background */}
    <div className="absolute inset-0 bg-gradient-to-br from-main-1 via-main-2 to-main-5"></div>
    
    {/* Wave Layers */}
    <WaveLayers />
    
    {/* Animated SVG Waves */}
    <AnimatedWaves />
    
    {/* Floating Particles */}
    <FloatingParticles />
    
    {/* Geometric Patterns */}
    <GeometricPatterns />
    
    {/* Main Icon */}
    <div className="absolute inset-0 flex items-center justify-center z-10">
      <div className="relative">
        <div className="absolute inset-0 bg-white/10 rounded-full blur-xl scale-150"></div>
        <div className="relative w-28 h-28 md:w-36 md:h-36 lg:w-44 lg:h-44 bg-white/15 backdrop-blur-md rounded-full flex items-center justify-center border-2 border-white/20 shadow-2xl">
          <div className="w-20 h-20 md:w-24 md:h-24 lg:w-32 lg:h-32 bg-white/10 rounded-full flex items-center justify-center border border-white/30">
            <IconComponent className="w-10 h-10 md:w-12 md:h-12 lg:w-16 lg:h-16 text-white drop-shadow-2xl" />
          </div>
        </div>
        <div className="absolute inset-0 rounded-full border-2 border-transparent border-t-white/30 border-r-white/20 animate-spin" style={{ animationDuration: '8s' }}></div>
      </div>
    </div>

    {/* Floating Badges */}
    <FloatingBadges serviceCount={serviceCount} />
    
    {/* Decorative Elements */}
    <div className="hidden lg:block absolute -bottom-6 -right-6 w-24 h-24 bg-gradient-to-br from-main-1/20 to-main-2/20 rounded-full -z-10"></div>
    <div className="hidden lg:block absolute -top-4 -left-4 w-16 h-16 bg-gradient-to-br from-sec-1/20 to-main-3/20 rounded-full -z-10"></div>
  </div>
);

const WaveLayers = () => (
  <div className="absolute inset-0">
    <div className="absolute bottom-0 left-0 w-full h-32 md:h-40 bg-main-5/80" 
         style={{ clipPath: 'polygon(0 60%, 100% 40%, 100% 100%, 0% 100%)' }}>
    </div>
    <div className="absolute bottom-0 left-0 w-full h-24 md:h-32 bg-main-4/60" 
         style={{ clipPath: 'polygon(0 70%, 100% 50%, 100% 100%, 0% 100%)' }}>
    </div>
    <div className="absolute top-0 left-0 w-full h-20 md:h-24 bg-sec-1/20" 
         style={{ clipPath: 'polygon(0 0, 100% 0, 100% 60%, 0 40%)' }}>
    </div>
  </div>
);

const AnimatedWaves = () => (
  <div className="absolute inset-0 opacity-30">
    <svg className="absolute bottom-0 w-full h-32 md:h-40" viewBox="0 0 1200 120" preserveAspectRatio="none">
      <path d="M0,60 C200,100 300,20 600,60 C900,100 1000,20 1200,60 L1200,120 L0,120 Z" 
            fill="rgba(255,255,255,0.1)" 
            className="animate-pulse">
      </path>
    </svg>
    <svg className="absolute bottom-0 w-full h-24 md:h-32" viewBox="0 0 1200 120" preserveAspectRatio="none">
      <path d="M0,80 C300,40 400,100 600,80 C800,60 900,120 1200,80 L1200,120 L0,120 Z" 
            fill="rgba(255,255,255,0.05)" 
            className="animate-pulse delay-1000">
      </path>
    </svg>
  </div>
);

const FloatingParticles = () => (
  <div className="absolute inset-0">
    <div className="absolute top-[20%] left-[15%] w-2 h-2 bg-white/20 rounded-full animate-pulse"></div>
    <div className="absolute top-[60%] right-[20%] w-1.5 h-1.5 bg-sec-1/40 rounded-full animate-pulse delay-500"></div>
    <div className="absolute top-[40%] left-[70%] w-1 h-1 bg-main-3/30 rounded-full animate-pulse delay-1000"></div>
    <div className="absolute bottom-[30%] left-[25%] w-2.5 h-2.5 bg-white/15 rounded-full animate-pulse delay-700"></div>
    <div className="absolute top-[80%] right-[40%] w-1.5 h-1.5 bg-sec-4/30 rounded-full animate-pulse delay-300"></div>
  </div>
);

const GeometricPatterns = () => (
  <div className="absolute inset-0 opacity-10">
    <div className="absolute top-[10%] right-[10%] w-20 h-20 md:w-28 md:h-28 border border-white/20 rounded-full"></div>
    <div className="absolute bottom-[20%] left-[5%] w-16 h-16 md:w-20 md:h-20 border border-white/15 rounded-full"></div>
    <div className="absolute top-[50%] left-[5%] w-12 h-12 md:w-16 md:h-16 border border-white/25 rounded-full"></div>
  </div>
);

const FloatingBadges = ({ serviceCount }) => (
  <>
    <div className="absolute bottom-4 left-4 md:bottom-6 md:left-6 lg:bottom-8 lg:left-8 bg-white/90 dark:bg-secondaryDark/90 backdrop-blur-md rounded-xl p-3 md:p-4 border border-white/30 shadow-xl z-20">
      <div className="flex items-center gap-2 md:gap-3">
        <div className="w-2.5 h-2.5 md:w-3 md:h-3 bg-main-1 rounded-full flex-shrink-0 animate-pulse"></div>
        <span className="text-xs md:text-sm font-semibold text-darkColor dark:text-lightColor whitespace-nowrap">
          Expert Solutions
        </span>
      </div>
    </div>
    <div className="absolute top-4 right-4 md:top-6 md:right-6 lg:top-8 lg:right-8 bg-main-1/90 backdrop-blur-md rounded-full px-3 py-1.5 md:px-4 md:py-2 border border-white/20 shadow-lg z-20">
      <span className="text-xs md:text-sm font-bold text-white whitespace-nowrap">
        {serviceCount} Services
      </span>
    </div>
  </>
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