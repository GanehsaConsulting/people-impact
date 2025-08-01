"use client"
import Link from "next/link";
import { useState, useEffect } from "react";
import { FiPhone, FiMail, FiMapPin, FiExternalLink, FiX, FiChevronLeft, FiChevronRight } from "react-icons/fi";
import Image from "next/image";

// Configuration for document images
const DOCUMENTS = {
    terms: {
        title: 'Terms & Conditions',
        images: [
            '/TC/tc1.webp',
            '/TC/tc2.webp',
            '/TC/tc3.webp',
            '/TC/tc4.webp',
            '/TC/tc5.webp'
        ]
    },
    privacy: {
        title: 'Privacy Policy',
        images: [
            '/PP/pp1.webp',
            '/PP/pp2.webp',
            '/PP/pp3.webp'
        ]
    }
};

// Simple Image Viewer Component
const ImageViewer = ({ document: documentData, onClose }) => {
    const [currentPage, setCurrentPage] = useState(0);

    // Keyboard navigation
    useEffect(() => {
        const handleKeyDown = (e) => {
            switch (e.key) {
                case 'Escape':
                    onClose();
                    break;
                case 'ArrowLeft':
                    if (currentPage > 0) setCurrentPage(currentPage - 1);
                    break;
                case 'ArrowRight':
                    if (currentPage < documentData.images.length - 1) setCurrentPage(currentPage + 1);
                    break;
            }
        };

        document.addEventListener('keydown', handleKeyDown);
        return () => document.removeEventListener('keydown', handleKeyDown);
    }, [currentPage, documentData.images.length, onClose]);

    return (
        <div className="fixed inset-0 z-50 bg-black/90 flex items-center justify-center p-4">
            {/* Close button */}
            <button
                onClick={onClose}
                className="absolute top-4 right-4 z-10 p-2 rounded-full bg-white/20 hover:bg-white/30 text-white transition-all duration-300"
            >
                <FiX className="w-6 h-6" />
            </button>

            {/* Title and page counter */}
            <div className="absolute top-4 left-4 z-10 text-white">
                <h3 className="text-lg font-semibold">{documentData.title}</h3>
                <p className="text-sm opacity-80">Page {currentPage + 1} of {documentData.images.length}</p>
            </div>

            {/* Navigation arrows */}
            {documentData.images.length > 1 && (
                <>
                    <button
                        onClick={() => setCurrentPage(Math.max(0, currentPage - 1))}
                        disabled={currentPage === 0}
                        className={`absolute left-4 top-1/2 -translate-y-1/2 z-100 p-3 rounded-full transition-all duration-300 ${currentPage === 0
                            ? 'bg-gray-500/30 text-gray-400 cursor-not-allowed'
                            : 'bg-main-1/30 hover:bg-main-1/100 text-white'
                            }`}
                    >
                        <FiChevronLeft className="w-6 h-6" />
                    </button>

                    <button
                        onClick={() => setCurrentPage(Math.min(documentData.images.length - 1, currentPage + 1))}
                        disabled={currentPage === documentData.images.length - 1}
                        className={`absolute right-4 top-1/2 -translate-y-1/2 z-100 p-3 rounded-full transition-all duration-300 ${currentPage === documentData.images.length - 1
                            ? 'bg-gray-500/30 text-gray-400 cursor-not-allowed'
                            : 'bg-main-1/30 hover:bg-main-1/100 text-white'
                            }`}
                    >
                        <FiChevronRight className="w-6 h-6" />
                    </button>
                </>
            )}

            {/* Image - A4 proportions optimized */}
            <div
                className="w-full h-full flex items-center justify-center cursor-pointer"
                onClick={onClose}
            >
                <Image
                    src={documentData.images[currentPage]}
                    alt={`${documentData.title} - Page ${currentPage + 1}`}
                    width={794}  // A4 width in pixels at 96 DPI
                    height={1123} // A4 height in pixels at 96 DPI
                    className="max-w-full max-h-full object-contain"
                    priority={currentPage === 0}
                    quality={95}
                />
            </div>
        </div>
    );
};

export const Footer = () => {
    const [showDocument, setShowDocument] = useState(null);

    const openDocument = (documentType) => {
        setShowDocument(DOCUMENTS[documentType]);
    };

    const closeDocument = () => {
        setShowDocument(null);
    };

    return (
        <footer className="relative">
            {/* Thicker Wave Effect that flows into footer background */}
            <div className="relative h-48 overflow-hidden">
                <svg
                    className="absolute bottom-0 w-full h-full"
                    viewBox="0 0 1200 200"
                    preserveAspectRatio="none"
                >
                    <defs>
                        <linearGradient id="waveToFooter" x1="0%" y1="0%" x2="100%" y2="0%">
                            <stop offset="0%" stopColor="#119bd3" stopOpacity="0.4" />
                            <stop offset="50%" stopColor="#1c305d" stopOpacity="0.6" />
                            <stop offset="100%" stopColor="#8dbb3f" stopOpacity="0.5" />
                        </linearGradient>
                    </defs>
                    {/* First decorative wave layer */}
                    <path
                        d="M0,100 C300,200 900,0 1200,100 L1200,200 L0,200 Z"
                        fill="url(#waveToFooter)"
                    />
                    {/* Second decorative wave layer */}
                    <path
                        d="M0,130 C300,60 900,180 1200,130 L1200,200 L0,200 Z"
                        fill="url(#waveToFooter)"
                        fillOpacity="0.3"
                    />
                    {/* Solid footer background wave - seamlessly connects */}
                    <path
                        d="M0,150 C300,80 900,200 1200,150 L1200,200 L0,200 Z"
                        className="fill-lightColor dark:fill-darkColor"
                    />
                </svg>
            </div>

            {/* Main Footer Content - seamlessly connected */}
            <div className="bg-lightColor dark:bg-darkColor relative -mt-1">
                <div className="relative py-16 px-4 sm:px-6 lg:px-8">
                    <div className="max-w-7xl mx-auto">
                        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 lg:gap-16">

                            {/* Left Side - Logo & Social Media */}
                            <div className="space-y-8">
                                <div className="space-y-4">
                                    <Link href="/" className="inline-block group">
                                        <Image
                                            width={150}
                                            height={150}
                                            src="/icon.png"
                                            alt="Ganapatih Logo"
                                            className="dark:brightness-125 -ml-10"
                                        />
                                        <h1 className="font-[850] font-montserrat tracking-widest uppercase text-[22px] -ml-1 bg-gradient-to-br from-main-1 dark:from-white from-10% dark:from-5% via-baseColorDark dark:via-baseColorLight via-40% dark:via-60% to-main-3 dark:to-main-1 to-99% bg-clip-text text-transparent">
                                            People Impact
                                        </h1>
                                    </Link>
                                    <p className="text-darkColor/70 dark:text-lightColor/70 leading-relaxed text-lg">
                                        Empowering people, transforming organizations through innovative HR solutions.
                                    </p>
                                </div>

                                <div className="space-y-4">
                                    <h4 className="text-sm font-semibold text-darkColor dark:text-lightColor uppercase tracking-wider flex items-center gap-2">
                                        <div className="w-8 h-0.5 bg-gradient-to-r from-main-1 to-main-3 rounded-full"></div>
                                        Follow Us
                                    </h4>
                                    <div className="flex space-x-4">
                                        <a
                                            href="https://instagram.com/peopleimpact_consulting"
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="group relative bg-white/80 dark:bg-white/10 backdrop-blur-sm hover:bg-gradient-to-r hover:from-sec-2 hover:to-main-2 text-darkColor dark:text-lightColor hover:text-white p-4 rounded-2xl transition-all duration-300 shadow-lg hover:shadow-xl hover:scale-110 hover:-translate-y-1"
                                            aria-label="Follow us on Instagram"
                                        >
                                            <svg className="w-5 h-5 relative z-10" fill="currentColor" viewBox="0 0 24 24">
                                                <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.40s-.644-1.44-1.439-1.44z" />
                                            </svg>
                                        </a>

                                        <a
                                            href="https://linkedin.com/company/people-impact-consulting"
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="group relative bg-white/80 dark:bg-white/10 backdrop-blur-sm hover:bg-gradient-to-r hover:from-main-1 hover:to-main-2 text-darkColor dark:text-lightColor hover:text-white p-4 rounded-2xl transition-all duration-300 shadow-lg hover:shadow-xl hover:scale-110 hover:-translate-y-1"
                                            aria-label="Follow us on LinkedIn"
                                        >
                                            <svg className="w-5 h-5 relative z-10" fill="currentColor" viewBox="0 0 24 24">
                                                <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                                            </svg>
                                        </a>

                                        <a
                                            href="https://youtube.com/@PeopleImpact_Consulting"
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="group relative bg-white/80 dark:bg-white/10 backdrop-blur-sm hover:bg-gradient-to-r hover:from-main-4 hover:to-main-5 text-darkColor dark:text-lightColor hover:text-white p-4 rounded-2xl transition-all duration-300 shadow-lg hover:shadow-xl hover:scale-110 hover:-translate-y-1"
                                            aria-label="Subscribe to our YouTube channel"
                                        >
                                            <svg className="w-5 h-5 relative z-10" fill="currentColor" viewBox="0 0 24 24">
                                                <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
                                            </svg>
                                        </a>
                                    </div>
                                </div>
                            </div>

                            {/* Middle - Contact Details */}
                            <div className="space-y-8">
                                <h4 className="text-xl font-semibold text-darkColor dark:text-lightColor flex items-center gap-3">
                                    <div className="w-8 h-0.5 bg-gradient-to-r from-main-1 to-main-3 rounded-full"></div>
                                    Contact Details
                                </h4>

                                <div className="space-y-6">
                                    <a
                                        href="tel:+6281297770201"
                                        className="group flex items-start space-x-4 text-darkColor/70 dark:text-lightColor/70 hover:text-main-1 dark:hover:text-main-1 transition-all duration-300 p-4 rounded-2xl hover:bg-white/50 dark:hover:bg-white/5 backdrop-blur-sm"
                                    >
                                        <div className="bg-gradient-to-r from-main-3 to-sec-4 p-3 rounded-xl text-white group-hover:scale-110 transition-transform duration-300">
                                            <FiPhone className="w-5 h-5" />
                                        </div>
                                        <div>
                                            <p className="font-medium text-darkColor dark:text-lightColor">Phone</p>
                                            <p className="text-sm">+62 812 9777 0201</p>
                                        </div>
                                    </a>

                                    <a
                                        href="mailto:support@peopleimpact.co.id"
                                        className="group flex items-start space-x-4 text-darkColor/70 dark:text-lightColor/70 hover:text-main-1 dark:hover:text-main-1 transition-all duration-300 p-4 rounded-2xl hover:bg-white/50 dark:hover:bg-white/5 backdrop-blur-sm"
                                    >
                                        <div className="bg-gradient-to-r from-main-1 to-sec-1 p-3 rounded-xl text-white group-hover:scale-110 transition-transform duration-300">
                                            <FiMail className="w-5 h-5" />
                                        </div>
                                        <div>
                                            <p className="font-medium text-darkColor dark:text-lightColor">Email</p>
                                            <p className="text-sm">support@peopleimpact.co.id</p>
                                        </div>
                                    </a>

                                    <a
                                        href="https://maps.google.com/?q=Epicentrum Walk Jakarta"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="group flex items-start space-x-4 text-darkColor/70 dark:text-lightColor/70 hover:text-main-1 dark:hover:text-main-1 transition-all duration-300 p-4 rounded-2xl hover:bg-white/50 dark:hover:bg-white/5 backdrop-blur-sm"
                                    >
                                        <div className="bg-gradient-to-r from-main-2 to-sec-3 p-3 rounded-xl text-white group-hover:scale-110 transition-transform duration-300">
                                            <FiMapPin className="w-5 h-5" />
                                        </div>
                                        <div className="text-sm">
                                            <p className="font-medium text-darkColor dark:text-lightColor mb-1">PT People Impact Consulting</p>
                                            <p>Epicentrum Walk, Lt. 3 A306</p>
                                            <p>Jl. HR. Rasuna Said, Kuningan</p>
                                            <p>Jakarta Selatan 12940</p>
                                        </div>
                                    </a>
                                </div>
                            </div>

                            {/* Right Side - Quick Links & Location */}
                            <div className="space-y-8">
                                <h4 className="text-xl font-semibold text-darkColor dark:text-lightColor flex items-center gap-3">
                                    <div className="w-8 h-0.5 bg-gradient-to-r from-main-1 to-main-3 rounded-full"></div>
                                    Quick Links
                                </h4>

                                <div className="grid grid-cols-2 gap-6">
                                    <div className="space-y-3">
                                        <Link href="/about-us" className="block text-darkColor/70 dark:text-lightColor/70 hover:text-main-1 dark:hover:text-main-1 transition-all duration-300 py-2 px-3 rounded-lg hover:bg-white/30 dark:hover:bg-white/5 backdrop-blur-sm">
                                            About Us
                                        </Link>
                                        <Link href="/services" className="block text-darkColor/70 dark:text-lightColor/70 hover:text-main-1 dark:hover:text-main-1 transition-all duration-300 py-2 px-3 rounded-lg hover:bg-white/30 dark:hover:bg-white/5 backdrop-blur-sm">
                                            Our Services
                                        </Link>
                                        <Link href="/contact" className="block text-darkColor/70 dark:text-lightColor/70 hover:text-main-1 dark:hover:text-main-1 transition-all duration-300 py-2 px-3 rounded-lg hover:bg-white/30 dark:hover:bg-white/5 backdrop-blur-sm">
                                            Contact Us
                                        </Link>
                                    </div>
                                    <div className="space-y-3">
                                        <Link href="/job-board" className="block text-darkColor/70 dark:text-lightColor/70 hover:text-main-1 dark:hover:text-main-1 transition-all duration-300 py-2 px-3 rounded-lg hover:bg-white/30 dark:hover:bg-white/5 backdrop-blur-sm">
                                            Job Board
                                        </Link>
                                        <Link href="/blog" className="block text-darkColor/70 dark:text-lightColor/70 hover:text-main-1 dark:hover:text-main-1 transition-all duration-300 py-2 px-3 rounded-lg hover:bg-white/30 dark:hover:bg-white/5 backdrop-blur-sm">
                                            Resources
                                        </Link>
                                        <Link href="/services/custom-services" className="block text-darkColor/70 dark:text-lightColor/70 hover:text-main-1 dark:hover:text-main-1 transition-all duration-300 py-2 px-3 rounded-lg hover:bg-white/30 dark:hover:bg-white/5 backdrop-blur-sm">
                                            Custom Solutions
                                        </Link>
                                    </div>
                                </div>

                                {/* Location Map */}
                                <div className="space-y-4">
                                    <h5 className="text-sm font-semibold text-darkColor dark:text-lightColor uppercase tracking-wider flex items-center gap-2">
                                        <div className="w-6 h-0.5 bg-gradient-to-r from-main-1 to-main-3 rounded-full"></div>
                                        Our Location
                                    </h5>
                                    <div className="bg-white/60 dark:bg-white/10 backdrop-blur-sm rounded-3xl overflow-hidden border border-white/20 dark:border-white/10 shadow-xl hover:shadow-2xl transition-all duration-500 group">
                                        <iframe
                                            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3966.264754392871!2d106.83070!3d-6.2297!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e69f39c9c2c2c2c%3A0x2c2c2c2c2c2c2c2c!2sEpicentrum%20Walk!5e0!3m2!1sen!2sid!4v1635000000000!5m2!1sen!2sid"
                                            width="100%"
                                            height="180"
                                            style={{ border: 0 }}
                                            allowFullScreen=""
                                            loading="lazy"
                                            referrerPolicy="no-referrer-when-downgrade"
                                            className="grayscale group-hover:grayscale-0 transition-all duration-700 dark:invert dark:hue-rotate-180 group-hover:scale-105"
                                            title="People Impact Office Location"
                                        ></iframe>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Bottom Section - Copyright & Links */}
                        <div className="border-t border-white/20 dark:border-white/10 mt-16 pt-8 pb-0">
                            <div className="flex flex-col md:flex-row justify-between items-center space-y-6 md:space-y-0">
                                <p className="text-darkColor/60 dark:text-lightColor/60 text-center md:text-left">
                                    Copyright ©2025 People Impact - Human Resources Consultant. All Rights Reserved.
                                </p>

                                <div className="flex space-x-8">
                                    <button
                                        onClick={() => openDocument('terms')}
                                        className="text-darkColor/60 dark:text-lightColor/60 hover:text-main-1 dark:hover:text-main-1 transition-all duration-300 inline-flex items-center gap-2 group"
                                    >
                                        Terms & Conditions
                                        <FiExternalLink className="w-3 h-3 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform duration-300" />
                                    </button>
                                    <button
                                        onClick={() => openDocument('privacy')}
                                        className="text-darkColor/60 dark:text-lightColor/60 hover:text-main-1 dark:hover:text-main-1 transition-all duration-300 inline-flex items-center gap-2 group"
                                    >
                                        Privacy Policy
                                        <FiExternalLink className="w-3 h-3 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform duration-300" />
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Image Viewer Modal */}
            {showDocument && (
                <ImageViewer
                    document={showDocument}
                    onClose={closeDocument}
                />
            )}
        </footer>
    )
}