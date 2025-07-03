"use client"

import React from 'react';
import { useParams } from 'next/navigation';
import Link from 'next/link';
import { FiArrowLeft, FiCheck, FiArrowRight } from 'react-icons/fi';
import { servicesData } from '@/lib/servicesData';
import { IoIosArrowForward } from 'react-icons/io';

export default function ServicePage() {
    const params = useParams();
    const serviceSlug = params.service;
    const serviceData = servicesData[serviceSlug];

    // If service not found, show 404
    if (!serviceData) {
        return (
            <div className="min-h-screen flex items-center justify-center px-4">
                <div className="text-center max-w-md mx-auto">
                    <h1 className="text-2xl md:text-3xl lg:text-4xl font-bold text-darkColor dark:text-lightColor mb-4">
                        Service Not Found
                    </h1>
                    <p className="text-sm md:text-base text-darkColor/70 dark:text-lightColor/70 mb-6 md:mb-8">
                        The service you're looking for doesn't exist.
                    </p>
                    <Link
                        href="/services"
                        className="inline-flex items-center gap-2 bg-main-1 text-white px-4 md:px-6 py-2 md:py-3 rounded-secondary hover:bg-main-2 transition-colors duration-200 text-sm md:text-base"
                    >
                        <FiArrowLeft className="w-4 h-4" />
                        Back to Services
                    </Link>
                </div>
            </div>
        );
    }

    return (
        <div className="margin spacing">
            {/* Breadcrumb - Responsive */}
            <div className="mb-6 md:mb-8">
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

                        <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold text-darkColor dark:text-lightColor leading-tight">
                            {serviceData.title}
                        </h1>

                        <h2 className="text-base md:text-lg lg:text-xl text-main-3 font-medium leading-relaxed">
                            {serviceData.subtitle}
                        </h2>

                        <p className="text-sm md:text-base text-darkColor/80 dark:text-lightColor/80 leading-relaxed">
                            {serviceData.description}
                        </p>

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

                    {/* Hero Image - Responsive */}
                    <div className="relative order-1 lg:order-2">
                        <div className="relative rounded-main overflow-hidden" style={{ boxShadow: 'var(--shadow-mainShadow)' }}>
                            <img
                                src={serviceData.heroImage}
                                alt={serviceData.title}
                                className="w-full h-48 sm:h-64 md:h-80 lg:h-96 xl:h-[500px] object-cover"
                                loading="lazy"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-main-2/60 to-transparent"></div>

                            {/* Floating Badge - Responsive */}
                            <div className="absolute bottom-3 left-3 md:bottom-4 lg:bottom-6 md:left-4 lg:left-6 bg-white dark:bg-secondaryDark rounded-secondary p-2 md:p-3 lg:p-4" style={{ boxShadow: 'var(--shadow-secondaryShadow)' }}>
                                <div className="flex items-center gap-2 md:gap-3">
                                    <div className="w-2 h-2 md:w-3 md:h-3 bg-main-1 rounded-full flex-shrink-0"></div>
                                    <span className="text-xs md:text-sm font-medium text-darkColor dark:text-lightColor whitespace-nowrap">
                                        Expert Solutions
                                    </span>
                                </div>
                            </div>
                        </div>

                        {/* Decorative element - hidden on small screens */}
                        <div className="hidden lg:block absolute -bottom-4 -right-4 w-24 h-24 bg-gradient-to-br from-main-1/20 to-main-2/20 rounded-main -z-10"></div>
                    </div>
                </div>
            </section>

            {/* Services Section - Responsive Grid */}
            <section className="mb-12 md:mb-16">
                <div className="text-center mb-8 md:mb-12">
                    <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-darkColor dark:text-lightColor mb-3 md:mb-4">
                        Our {serviceData.title} Services
                    </h2>
                    <p className="text-sm md:text-base text-darkColor/70 dark:text-lightColor/70 max-w-3xl mx-auto leading-relaxed px-4">
                        Comprehensive solutions designed to address your specific needs and drive meaningful results
                    </p>
                </div>

                {/* Responsive Grid based on number of services */}
                <div className={`grid gap-3 md:gap-4 lg:gap-6
                    ${serviceData.services.length <= 2 
                        ? "grid-cols-1 md:grid-cols-2" 
                        : serviceData.services.length === 3
                        ? "grid-cols-1 md:grid-cols-3"
                        : "grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4"
                    }`}>
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
                                    <h3 className="text-lg md:text-xl font-semibold text-darkColor dark:text-lightColor leading-tight group-hover:text-main-1 transition-colors duration-200">
                                        {service.title}
                                    </h3>
                                    <p className="text-sm md:text-base text-darkColor/70 dark:text-lightColor/70 leading-relaxed">
                                        {service.description}
                                    </p>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </section>

            {/* CTA Section - Responsive */}
            <section>
                <div className="bg-gradient-to-br from-main-1/10 to-main-3/10 dark:from-main-1/20 dark:to-main-3/20 rounded-main p-6 md:p-8 lg:p-12 text-center border border-main-1/20">
                    <h2 className="text-xl md:text-2xl lg:text-3xl xl:text-4xl font-bold text-darkColor dark:text-lightColor mb-3 md:mb-4">
                        {serviceData.ctaText}
                    </h2>
                    <p className="text-sm md:text-base lg:text-lg text-darkColor/80 dark:text-lightColor/80 max-w-3xl mx-auto mb-6 md:mb-8 leading-relaxed px-4">
                        {serviceData.ctaDescription}
                    </p>

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