"use client"

import React, { useState } from 'react';
import Link from 'next/link';
import { FiArrowRight, FiSearch } from 'react-icons/fi';
import { HiOutlineCog } from 'react-icons/hi';
import { servicesData } from '@/lib/servicesData';

export const AllServicesPage = () => {
    const [searchTerm, setSearchTerm] = useState('');

    // Convert services data to array
    const servicesArray = Object.entries(servicesData).map(([slug, data]) => ({
        slug,
        ...data
    }));

    // Filter services based on search
    const filteredServices = servicesArray.filter(service => {
        const matchesSearch = service.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
            service.subtitle.toLowerCase().includes(searchTerm.toLowerCase()) ||
            service.description.toLowerCase().includes(searchTerm.toLowerCase());

        return matchesSearch;
    });

    const handleSearch = (e) => {
        setSearchTerm(e.target.value);
    };

    return (
        <div className="margin spacing">
            <div className="">

                {/* Search Section */}
                <section className="mb-8">
                    <div >
                        <div className="flex flex-col lg:flex-row gap-6 md:items-center justify-between">
                            {/* Search */}
                            <div className="relative flex-1 max-w-xl">
                                <FiSearch className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-darkColor/40 dark:text-lightColor/40" />
                                <input
                                    type="text"
                                    placeholder="Search services..."
                                    value={searchTerm}
                                    onChange={handleSearch}
                                    className="w-full pl-10 pr-4 py-3 rounded-main border border-secondaryLight dark:border-secondaryDark bg-lightColor dark:bg-darkColor text-darkColor dark:text-lightColor placeholder-darkColor/50 dark:placeholder-lightColor/50 focus:outline-none focus:ring-2 focus:ring-main-1 focus:border-transparent transition-all duration-200"
                                />
                            </div>

                            {/* Results Count */}
                            <div className="text-sm text-darkColor/60 dark:text-lightColor/60">
                                {filteredServices.length} of {servicesArray.length} services
                            </div>
                        </div>
                    </div>
                </section>

                {/* Services Grid */}
                <section className="mb-16">
                    {/* Mobile & Tablet Layout */}
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:hidden gap-6 mb-8">
                        {filteredServices.map((service) => {
                            // Use the first service's icon as the main icon for the service card
                            const IconComponent = service.services[0]?.icon || HiOutlineCog;

                            return (
                                <Link href={`/services/${service.slug}`} key={service.slug} className="group">
                                    <div className="relative overflow-hidden bg-lightColor rounded-main p-6 dark:bg-darkColor text-secondaryDark dark:text-secondaryLight hover:shadow-lg transition-all duration-300 ease-in-out hover:-translate-y-2 border border-secondaryLight dark:border-secondaryDark">
                                        <div className='absolute -top-20 -left-20 w-40 h-40 bg-sec-5/40 rounded-full blur-3xl'></div>
                                        <div className='absolute bottom-0 -right-30 w-50 h-50 bg-main-1/30 rounded-full blur-3xl'></div>

                                        {/* Icon */}
                                        <div className="mb-6 p-4 rounded-full dark:bg-black bg-white w-fit shadow-sm border border-secondaryLight dark:border-secondaryDark">
                                            <IconComponent className="w-8 h-8 text-main-2 dark:text-main-1" />
                                        </div>

                                        {/* Title */}
                                        <h3 className="text-xl font-semibold text-main-2 dark:text-main-1 mb-4 line-clamp-2 min-h-[3.5rem]">
                                            {service.title}
                                        </h3>

                                        {/* Description */}
                                        <p className="text-sm leading-relaxed opacity-80 line-clamp-3 mb-4">
                                            {service.description}
                                        </p>

                                        {/* Services count indicator */}
                                        <div className="flex items-center justify-between text-xs opacity-70 pt-4 border-t border-secondaryLight dark:border-secondaryDark">
                                            <span>{service.services.length} Services Available</span>
                                            <FiArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-200" />
                                        </div>
                                    </div>
                                </Link>
                            );
                        })}
                    </div>

                    {/* Desktop Layout */}
                    <div className="hidden lg:grid grid-cols-4 gap-6">
                        {filteredServices.map((service) => {
                            // Use the first service's icon as the main icon for the service card
                            const IconComponent = service.services[0]?.icon || HiOutlineCog;

                            return (
                                <Link href={`/services/${service.slug}`} key={service.slug} className="group">
                                    <div className="overflow-hidden relative bg-lightColor rounded-main p-6 dark:bg-darkColor text-secondaryDark dark:text-secondaryLight hover:shadow-xl transition-all duration-300 ease-in-out hover:-translate-y-3 border border-secondaryLight dark:border-secondaryDark min-h-[28rem] flex flex-col">
                                        <div className='absolute -top-20 -left-20 w-40 h-40 bg-sec-5/40 rounded-full blur-3xl'></div>
                                        <div className='absolute bottom-0 -right-30 w-50 h-50 bg-main-1/30 rounded-full blur-3xl'></div>

                                        {/* Icon */}
                                        <div className="mb-6 p-4 rounded-full dark:bg-black bg-white w-fit shadow-sm border border-secondaryLight dark:border-secondaryDark">
                                            <IconComponent className="w-10 h-10 text-main-2 dark:text-main-1" />
                                        </div>

                                        {/* Title */}
                                        <h3 className="text-2xl font-semibold text-main-2 dark:text-main-1 mb-4 flex-grow min-h-[8rem] flex items-start">
                                            {service.title}
                                        </h3>

                                        {/* Description */}
                                        <div className="flex-grow flex flex-col justify-between">
                                            <p className="text-sm leading-relaxed opacity-80 line-clamp-4 mb-6">
                                                {service.description}
                                            </p>

                                            {/* Services count indicator */}
                                            <div className="flex items-center justify-between text-xs opacity-70 pt-4 border-t border-secondaryLight dark:border-secondaryDark mt-auto">
                                                <span className="font-medium">{service.services.length} Services</span>
                                                <div className="flex items-center gap-2 text-main-2 dark:text-main-1">
                                                    <span className="text-xs font-medium">Learn More</span>
                                                    <FiArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-200" />
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </Link>
                            );
                        })}
                    </div>
                </section>

                {/* No Results */}
                {filteredServices.length === 0 && (
                    <div className="text-center py-16">
                        <div className="w-24 h-24 bg-main-1/10 dark:bg-main-1/20 rounded-full flex items-center justify-center mx-auto mb-6 border border-main-1/20">
                            <FiSearch className="w-12 h-12 text-main-1" />
                        </div>
                        <h3 className="text-2xl font-semibold text-darkColor dark:text-lightColor mb-4">
                            No services found
                        </h3>
                        <p className="text-darkColor/60 dark:text-lightColor/60 mb-8">
                            Try adjusting your search terms or browse all our services.
                        </p>
                        <button
                            onClick={() => setSearchTerm('')}
                            className="bg-main-1 hover:bg-main-2 text-white font-medium px-6 py-3 rounded-main transition-colors duration-200 shadow-sm"
                        >
                            Clear Search
                        </button>
                    </div>
                )}

                {/* CTA Section */}
                <section className="bg-gradient-to-br from-main-1/10 to-main-3/10 dark:from-main-1/20 dark:to-main-3/20 rounded-main p-12 text-center border border-main-1/20">
                    <h2 className="text-3xl md:text-4xl font-bold text-darkColor dark:text-lightColor mb-4">
                        Need a Custom Solution?
                    </h2>
                    <p className="text-lg text-darkColor/80 dark:text-lightColor/80 max-w-3xl mx-auto mb-8 leading-relaxed">
                        Can't find exactly what you're looking for? We offer custom HR solutions
                        tailored to your unique business needs and challenges.
                    </p>

                    <div className="flex flex-col sm:flex-row gap-4 justify-center">
                        <Link
                            href="/contact"
                            className="inline-flex items-center justify-center gap-3 bg-main-1 hover:bg-main-2 text-white font-semibold px-8 py-4 rounded-main transition-all duration-200 group shadow-sm hover:shadow-md"
                        >
                            <span>Discuss Your Needs</span>
                            <FiArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-200" />
                        </Link>

                        <Link
                            href="/services/custom-services"
                            className="inline-flex items-center justify-center gap-3 bg-lightColor dark:bg-secondaryDark border border-main-1 text-main-1 hover:bg-main-1 hover:text-white dark:hover:bg-main-1 font-semibold px-8 py-4 rounded-main transition-all duration-200 shadow-sm hover:shadow-md"
                        >
                            Learn About Custom Services
                        </Link>
                    </div>
                </section>
            </div>
        </div>
    );
};

export default AllServicesPage;