"use client";

import React from "react";
import { useParams } from "next/navigation";
import Link from "next/link";
import { FiArrowLeft, FiCheck, FiArrowRight } from "react-icons/fi";
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
} from "react-icons/hi";
import { servicesData } from "@/lib/servicesData";
import { IoIosArrowForward } from "react-icons/io";

// Icon mapping untuk setiap service
const serviceIcons = {
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
  "custom-services": HiOutlineCog,
};

// Hero Banner dengan background gambar + overlay gradient
const HeroBanner = ({ IconComponent, serviceCount }) => (
  <div className="relative rounded-main overflow-hidden min-h-[320px] md:min-h-[420px] lg:min-h-[480px]" style={{ boxShadow: "var(--shadow-mainShadow)" }}>
    {/* Background Image + Gradient Overlay */}
    <div
      className="absolute inset-0 bg-cover bg-center"
      style={{
        backgroundImage: "url('https://images.pexels.com/photos/6340692/pexels-photo-6340692.jpeg')",
      }}
    >
      <div
        className="absolute inset-0"
        style={{
          background: "linear-gradient(135deg, var(--color-main-1) 0%, var(--color-main-2) 100%)",
          opacity: 0.5,
        }}
      />
    </div>

    {/* Icon utama tetap di tengah */}
    <div className="absolute inset-0 flex items-center justify-center z-10">
      <div className="relative">
        <div className="absolute inset-0 rounded-full blur-2xl scale-150 bg-white/20"></div>
        <div className="relative w-28 h-28 md:w-36 md:h-36 lg:w-44 lg:h-44 bg-white/20 backdrop-blur-md rounded-full flex items-center justify-center border border-white/30">
          <div className="w-20 h-20 md:w-24 md:h-24 lg:w-32 lg:h-32 bg-white/10 rounded-full flex items-center justify-center">
            <IconComponent className="w-10 h-10 md:w-12 md:h-12 lg:w-16 lg:h-16 text-white drop-shadow-2xl" />
          </div>
        </div>
      </div>
    </div>

    {/* Badge jumlah service */}
    <div className="absolute top-4 right-4 md:top-6 md:right-6 lg:top-8 lg:right-8 bg-white/80 backdrop-blur-md rounded-full px-3 py-1.5 md:px-4 md:py-2 text-xs md:text-sm font-bold text-darkColor">{serviceCount} Services</div>

    {/* Badge Expert Solutions */}
    <div className="absolute bottom-4 left-4 md:bottom-6 md:left-6 lg:bottom-8 lg:left-8 bg-white/80 backdrop-blur-md rounded-xl p-3 md:p-4">
      <div className="flex items-center gap-2">
        <div className="w-2 h-2 md:w-3 md:h-3 bg-main-1 rounded-full animate-pulse"></div>
        <span className="text-xs md:text-sm font-semibold text-darkColor">Expert Solutions</span>
      </div>
    </div>
  </div>
);

export default function ServicePage() {
  const params = useParams();
  const serviceSlug = params.service;
  const serviceData = servicesData[serviceSlug];

  // If service not found, show 404
  if (!serviceData) {
    return (
      <div className="min-h-screen flex items-center justify-center px-4">
        <div className="text-center max-w-md mx-auto">
          <h1 className="text-2xl md:text-3xl lg:text-4xl font-bold text-darkColor dark:text-lightColor mb-4">Service Not Found</h1>
          <p className="text-sm md:text-base text-darkColor/70 dark:text-lightColor/70 mb-6 md:mb-8">The service you're looking for doesn't exist.</p>
          <Link href="/services" className="inline-flex items-center gap-2 bg-main-1 text-white px-4 md:px-6 py-2 md:py-3 rounded-secondary hover:bg-main-2 transition-colors duration-200 text-sm md:text-base">
            <FiArrowLeft className="w-4 h-4" />
            Back to Services
          </Link>
        </div>
      </div>
    );
  }

  const IconComponent = serviceIcons[serviceSlug] || HiOutlineCog;

  return (
    <div className="margin spacing">
      {/* Breadcrumb - Responsive */}
      <div className="mb-6 md:mb-8">
        <nav className="flex items-center gap-1 md:gap-2 text-xs md:text-sm overflow-x-auto">
          <Link href="/" className="text-darkColor/60 dark:text-lightColor/60 hover:text-main-1 transition-colors duration-200 whitespace-nowrap">
            Home
          </Link>
          <span className="text-darkColor/40 dark:text-lightColor/40 flex-shrink-0">
            <IoIosArrowForward />
          </span>
          <Link href="/services" className="text-darkColor/60 dark:text-lightColor/60 hover:text-main-1 transition-colors duration-200 whitespace-nowrap">
            Services
          </Link>
          <span className="text-darkColor/40 dark:text-lightColor/40 flex-shrink-0">
            <IoIosArrowForward />
          </span>
          <span className="text-main-1 font-medium truncate">{serviceData.title}</span>
        </nav>
      </div>

      {/* Hero Section - Responsive */}
      <section className="mb-12 md:mb-16">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-10 lg:gap-12 items-center">
          {/* Content */}
          <div className="space-y-4 md:space-y-6 order-2 lg:order-1">
            <div className="inline-flex items-center gap-2 px-3 md:px-4 py-1.5 md:py-2 bg-main-1/10 dark:bg-main-1/20 rounded-full text-main-1 text-xs md:text-sm font-medium">
              <span className="w-1.5 h-1.5 md:w-2 md:h-2 bg-main-1 rounded-full flex-shrink-0"></span>
              <span className="whitespace-nowrap">Professional HR Services</span>
            </div>

            <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold text-darkColor dark:text-lightColor leading-tight">{serviceData.title}</h1>

            <h2 className="text-base md:text-lg lg:text-xl text-main-3 font-medium leading-relaxed">{serviceData.subtitle}</h2>

            <p className="text-sm md:text-base text-darkColor/80 dark:text-lightColor/80 leading-relaxed">{serviceData.description}</p>

            {/* CTA Button - Responsive */}
            <div className="pt-2 md:pt-4">
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 md:gap-3 bg-main-1 hover:bg-main-2 text-white font-semibold px-6 md:px-8 py-3 md:py-4 rounded-secondary transition-colors duration-200 group text-sm md:text-base w-full sm:w-auto justify-center sm:justify-start"
              >
                <span>Get Started Today</span>
                <FiArrowRight className="w-4 h-4 md:w-5 md:h-5 group-hover:translate-x-1 transition-transform duration-200" />
              </Link>
            </div>
          </div>

          {/* Hero Banner */}
          <div className="relative order-1 lg:order-2">
            <HeroBanner IconComponent={IconComponent} serviceCount={serviceData.services.length} />
          </div>
        </div>
      </section>

      {/* Services Section - Responsive Grid */}
      <section className="mb-12 md:mb-16">
        <div className="text-center mb-8 md:mb-12">
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-darkColor dark:text-lightColor mb-3 md:mb-4">Our {serviceData.title} Services</h2>
          <p className="text-sm md:text-base text-darkColor/70 dark:text-lightColor/70 max-w-3xl mx-auto leading-relaxed px-4">Comprehensive solutions designed to address your specific needs and drive meaningful results</p>
        </div>

        {/* Responsive Grid based on number of services */}
        <div
          className={`grid gap-3 md:gap-4 lg:gap-6
            ${serviceData.services.length <= 2 ? "grid-cols-1 md:grid-cols-2" : serviceData.services.length === 3 ? "grid-cols-1 md:grid-cols-3" : "grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4"}`}
        >
          {serviceData.services.map((service, index) => (
            <div
              key={index}
              className="bg-lightColor dark:bg-secondaryDark rounded-main p-4 md:p-5 lg:p-6 border border-secondaryLight dark:border-secondaryDark hover:border-main-1/30 dark:hover:border-main-1/30 transition-all duration-200 hover:shadow-lg group"
            >
              <div className="flex flex-col justify-between items-start gap-3 md:gap-4 h-full">
                <div className="w-7 h-7 md:w-8 md:h-8 rounded-secondary bg-main-1/25 dark:bg-main-1/20 flex items-center justify-center flex-shrink-0 group-hover:bg-main-1/40 transition-colors duration-200">
                  <FiCheck className="w-4 h-4 md:w-5 md:h-5 text-main-1" />
                </div>
                <div className="space-y-2 md:space-y-3 flex-1">
                  <h3 className="text-lg md:text-xl font-semibold text-darkColor dark:text-lightColor leading-tight group-hover:text-main-1 transition-colors duration-200">{service.title}</h3>
                  <p className="text-sm md:text-base text-darkColor/70 dark:text-lightColor/70 leading-relaxed">{service.description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* CTA Section - Responsive */}
      <section>
        <div className="bg-gradient-to-br from-main-1/10 to-main-3/10 dark:from-main-1/20 dark:to-main-3/20 rounded-main p-6 md:p-8 lg:p-12 text-center border border-main-1/20">
          <h2 className="text-xl md:text-2xl lg:text-3xl xl:text-4xl font-bold text-darkColor dark:text-lightColor mb-3 md:mb-4">{serviceData.ctaText}</h2>
          <p className="text-sm md:text-base lg:text-lg text-darkColor/80 dark:text-lightColor/80 max-w-3xl mx-auto mb-6 md:mb-8 leading-relaxed px-4">{serviceData.ctaDescription}</p>

          <div className="flex flex-col sm:flex-row gap-3 md:gap-4 justify-center max-w-md sm:max-w-none mx-auto">
            <Link
              href="/contact"
              className="inline-flex items-center justify-center gap-2 md:gap-3 bg-main-1 hover:bg-main-2 text-white font-semibold px-6 md:px-8 py-3 md:py-4 rounded-secondary transition-colors duration-200 group text-sm md:text-base flex-1 sm:flex-initial"
            >
              <span>Get in Touch</span>
              <FiArrowRight className="w-4 h-4 md:w-5 md:h-5 group-hover:translate-x-1 transition-transform duration-200" />
            </Link>

            <Link
              href="/services"
              className="inline-flex items-center justify-center gap-2 md:gap-3 bg-white dark:bg-secondaryDark border border-main-1 text-main-1 hover:bg-main-1 hover:text-white dark:hover:bg-main-1 font-semibold px-6 md:px-8 py-3 md:py-4 rounded-secondary transition-colors duration-200 text-sm md:text-base flex-1 sm:flex-initial"
            >
              View All Services
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
