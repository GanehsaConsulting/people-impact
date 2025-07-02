"use client"

import React, { useState } from 'react';
import Link from 'next/link';
import { FiArrowRight, FiSearch } from 'react-icons/fi';
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
                <section className="mb-6">
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
                                    className="w-full pl-10 pr-4 py-3 rounded-main border border-secondaryLight dark:border-secondaryDark bg-secondaryGray dark:bg-darkColor text-darkColor dark:text-lightColor placeholder-darkColor/50 dark:placeholder-lightColor/50 focus:outline-none focus:ring-2 focus:ring-main-1 focus:border-transparent transition-all duration-200"
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
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
                        {filteredServices.map((service) => (
                            <Link href={`/services/${service.slug}`} key={service.slug} className="group">
                                <div className="h-120 relative overflow-hidden rounded-main bg-white dark:bg-gray-800 transition-transform transform hover:-translate-y-4 duration-300 ease-in-out cursor-pointer">
                                    <img
                                        className="w-full h-full object-cover rounded-main"
                                        src={service.heroImage}
                                        alt={service.title}
                                    />

                                    {/* Gradient Overlay */}
                                    <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-main-2 to-transparent w-full h-80"></div>

                                    {/* Content */}
                                    <div className="min-h-50 flex justify-between flex-col absolute bottom-0 left-0 right-0 p-6 rounded-b-main text-white drop-shadow">
                                        <h3 className="text-xl font-semibold leading-tight mb-3 line-clamp-2">
                                            {service.title}
                                        </h3>
                                        <p className="leading-5 text-sm opacity-90 line-clamp-3 mb-4">
                                            {service.description}
                                        </p>

                                        {/* Services count indicator */}
                                        <div className="flex items-center justify-between text-xs opacity-80">
                                            <span>{service.services.length} Services</span>
                                            <FiArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-200" />
                                        </div>
                                    </div>
                                </div>
                            </Link>
                        ))}
                    </div>
                </section>

                {/* No Results */}
                {filteredServices.length === 0 && (
                    <div className="text-center py-16">
                        <div className="w-24 h-24 bg-main-1/10 dark:bg-main-1/20 rounded-full flex items-center justify-center mx-auto mb-6">
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
                            className="bg-main-1 hover:bg-main-2 text-white font-medium px-6 py-3 rounded-secondary transition-colors duration-200"
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
                            className="inline-flex items-center justify-center gap-3 bg-main-1 hover:bg-main-2 text-white font-semibold px-8 py-4 rounded-secondary transition-colors duration-200 group"
                        >
                            <span>Discuss Your Needs</span>
                            <FiArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-200" />
                        </Link>

                        <Link
                            href="/services/custom-services"
                            className="inline-flex items-center justify-center gap-3 bg-white dark:bg-secondaryDark border border-main-1 text-main-1 hover:bg-main-1 hover:text-white dark:hover:bg-main-1 font-semibold px-8 py-4 rounded-secondary transition-colors duration-200"
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