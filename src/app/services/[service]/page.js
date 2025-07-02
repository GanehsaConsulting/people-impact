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
            <div className="min-h-screen flex items-center justify-center">
                <div className="text-center">
                    <h1 className="text-4xl font-bold text-darkColor dark:text-lightColor mb-4">
                        Service Not Found
                    </h1>
                    <p className="text-darkColor/70 dark:text-lightColor/70 mb-8">
                        The service you're looking for doesn't exist.
                    </p>
                    <Link
                        href="/services"
                        className="inline-flex items-center gap-2 bg-main-1 text-white px-6 py-3 rounded-secondary hover:bg-main-2 transition-colors duration-200"
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
            {/* Breadcrumb */}
            <div className="mb-8">
                <nav className="flex items-center gap-2 text-sm">
                    <Link
                        href="/"
                        className="text-darkColor/60 dark:text-lightColor/60 hover:text-main-1 transition-colors duration-200"
                    >
                        Home
                    </Link>
                    <span className="text-darkColor/40 dark:text-lightColor/40">
                        <IoIosArrowForward />
                    </span>
                    <Link
                        href="/services"
                        className="text-darkColor/60 dark:text-lightColor/60 hover:text-main-1 transition-colors duration-200"
                    >
                        Services
                    </Link>
                    <span className="text-darkColor/40 dark:text-lightColor/40">
                        <IoIosArrowForward />
                    </span>
                    <span className="text-main-1 font-medium">{serviceData.title}</span>
                </nav>
            </div>

            {/* Hero Section */}
            <section className=" mb-16">
                <div className="grid lg:grid-cols-2 gap-12 items-center">
                    {/* Content */}
                    <div className="space-y-6">
                        <div className="inline-flex items-center gap-2 px-4 py-2 bg-main-1/10 dark:bg-main-1/20 rounded-full text-main-1 text-sm font-medium">
                            <span className="w-2 h-2 bg-main-1 rounded-full"></span>
                            Professional HR Services
                        </div>

                        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-darkColor dark:text-lightColor leading-tight">
                            {serviceData.title}
                        </h1>

                        <h2 className="text-xl md:text-xl text-main-3 font-medium">
                            {serviceData.subtitle}
                        </h2>

                        <p className="text-darkColor/80 dark:text-lightColor/80 leading-relaxed">
                            {serviceData.description}
                        </p>

                        {/* CTA Button */}
                        <div className="pt-4">
                            <Link
                                href="/contact"
                                className="inline-flex items-center gap-3 bg-main-1 hover:bg-main-2 text-white font-semibold px-8 py-4 rounded-secondary transition-colors duration-200 group"
                            >
                                <span>Get Started Today</span>
                                <FiArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-200" />
                            </Link>
                        </div>
                    </div>

                    {/* Hero Image */}
                    <div className="relative">
                        <div className="relative rounded-main overflow-hidden" style={{ boxShadow: 'var(--shadow-mainShadow)' }}>
                            <img
                                src={serviceData.heroImage}
                                alt={serviceData.title}
                                className="w-full h-96 lg:h-[500px] object-cover"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-main-2/60 to-transparent"></div>

                            {/* Floating Badge */}
                            <div className="absolute bottom-6 left-6 bg-white dark:bg-secondaryDark rounded-secondary p-4" style={{ boxShadow: 'var(--shadow-secondaryShadow)' }}>
                                <div className="flex items-center gap-3">
                                    <div className="w-3 h-3 bg-main-1 rounded-full"></div>
                                    <span className="text-sm font-medium text-darkColor dark:text-lightColor">
                                        Expert Solutions
                                    </span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Services Section */}
            <section className=" mb-16">
                <div className="text-center mb-12">
                    <h2 className="text-3xl md:text-4xl font-bold text-darkColor dark:text-lightColor mb-4">
                        Our {serviceData.title} Services
                    </h2>
                    <p className="text-darkColor/70 dark:text-lightColor/70 max-w-3xl mx-auto">
                        Comprehensive solutions designed to address your specific needs and drive meaningful results
                    </p>
                </div>
                <div className={`${serviceData.services.length <= 2 ? "grid-cols-2" : "grid-cols-4"}  grid gap-3`}>
                    {serviceData.services.map((service, index) => (
                        <div
                            key={index}
                            className="bg-lightColor dark:bg-secondaryDark rounded-main p-5 border border-secondaryLight dark:border-secondaryDark hover:border-main-1/30 dark:hover:border-main-1/30 transition-colors duration-200"
                        >
                            <div className="flex flex-col justify-between items-start gap-4">
                                <div className="w-8 h-8 rounded-secondary bg-main-1/25 dark:bg-main-1/20 flex items-center justify-center flex-shrink-0 mt-1">
                                    <FiCheck className="w-5 h-5 text-main-1" />
                                </div>
                                <div className="space-y-3">
                                    <h3 className="text-xl font-semibold text-darkColor dark:text-lightColor leading-tight">
                                        {service.title}
                                    </h3>
                                    <p className="text-darkColor/70 dark:text-lightColor/70 leading-relaxed">
                                        {service.description}
                                    </p>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </section>

            {/* CTA Section */}
            <section className="">
                <div className="bg-gradient-to-br from-main-1/10 to-main-3/10 dark:from-main-1/20 dark:to-main-3/20 rounded-main p-12 text-center border border-main-1/20">
                    <h2 className="text-3xl md:text-4xl font-bold text-darkColor dark:text-lightColor mb-4">
                        {serviceData.ctaText}
                    </h2>
                    <p className="text-lg text-darkColor/80 dark:text-lightColor/80 max-w-3xl mx-auto mb-8 leading-relaxed">
                        {serviceData.ctaDescription}
                    </p>

                    <div className="flex flex-col sm:flex-row gap-4 justify-center">
                        <Link
                            href="/contact"
                            className="inline-flex items-center justify-center gap-3 bg-main-1 hover:bg-main-2 text-white font-semibold px-8 py-4 rounded-secondary transition-colors duration-200 group"
                        >
                            <span>Get in Touch</span>
                            <FiArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-200" />
                        </Link>

                        <Link
                            href="/services"
                            className="inline-flex items-center justify-center gap-3 bg-white dark:bg-secondaryDark border border-main-1 text-main-1 hover:bg-main-1 hover:text-white dark:hover:bg-main-1 font-semibold px-8 py-4 rounded-secondary transition-colors duration-200"
                        >
                            View All Services
                        </Link>
                    </div>
                </div>
            </section>
        </div>
    );
}