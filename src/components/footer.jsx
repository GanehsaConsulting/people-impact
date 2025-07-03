import Link from "next/link";
import { FiPhone, FiMail, FiMapPin, FiExternalLink } from "react-icons/fi";

export const Footer = () => {
    return (
        <footer className="py-12 bg-lightColor dark:bg-darkColor border-t border-secondaryLight dark:border-secondaryDark">
            <div className="margin">
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 lg:gap-12">

                    {/* Left Side - Logo & Social Media */}
                    <div className="space-y-6">
                        <div>
                            <Link href="/" className="inline-block">
                                <h3 className="text-2xl font-bold text-darkColor dark:text-lightColor mb-2 hover:text-main-1 transition-colors duration-200">
                                    People Impact
                                </h3>
                            </Link>
                            <p className="text-darkColor/80 dark:text-lightColor/80 leading-relaxed">
                                Empowering people, transforming organizations through innovative HR solutions.
                            </p>
                        </div>

                        <div>
                            <h4 className="text-sm font-semibold text-darkColor dark:text-lightColor mb-3 uppercase tracking-wide">
                                Follow Us
                            </h4>
                            <div className="flex space-x-3">
                                 <a
                                    href="https://instagram.com/peopleimpact_consulting"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="bg-white dark:bg-secondaryDark hover:bg-main-1 dark:hover:bg-main-1 text-darkColor dark:text-lightColor hover:text-white p-3 rounded-secondary transition-all duration-200 group shadow-secondaryShadow"
                                    aria-label="Follow us on Instagram"
                                >
                                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                                        <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                                    </svg>
                                </a>

                                 <a
                                    href="https://linkedin.com/company/people-impact-consulting"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="bg-white dark:bg-secondaryDark hover:bg-main-1 dark:hover:bg-main-1 text-darkColor dark:text-lightColor hover:text-white p-3 rounded-secondary transition-all duration-200 group shadow-secondaryShadow"
                                    aria-label="Follow us on LinkedIn"
                                >
                                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                                        <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                                    </svg>
                                </a>

                                <a
                                    href="https://youtube.com/@PeopleImpact_Consulting"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="bg-white dark:bg-secondaryDark hover:bg-main-1 dark:hover:bg-main-1 text-darkColor dark:text-lightColor hover:text-white p-3 rounded-secondary transition-all duration-200 group shadow-secondaryShadow"
                                    aria-label="Subscribe to our YouTube channel"
                                >
                                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                                        <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
                                    </svg>
                                </a>
                            </div>
                        </div>
                    </div>

                    {/* Middle - Contact Details */}
                    <div className="space-y-6">
                        <h4 className="text-lg font-semibold text-darkColor dark:text-lightColor">Contact Details</h4>

                        <div className="space-y-4">
                            <a
                                href="tel:+6281297770201"
                                className="flex items-start space-x-3 text-darkColor/80 dark:text-lightColor/80 hover:text-main-1 dark:hover:text-main-1 transition-colors duration-200 group"
                            >
                                <FiPhone className="w-5 h-5 mt-0.5 flex-shrink-0 group-hover:scale-110 transition-transform duration-200" />
                                <span className="text-sm">+62 812 9777 0201</span>
                            </a>
<a
                            
                                href="mailto:support@peopleimpact.co.id"
                                className="flex items-start space-x-3 text-darkColor/80 dark:text-lightColor/80 hover:text-main-1 dark:hover:text-main-1 transition-colors duration-200 group"
                            >
                                <FiMail className="w-5 h-5 mt-0.5 flex-shrink-0 group-hover:scale-110 transition-transform duration-200" />
                                <span className="text-sm">support@peopleimpact.co.id</span>
                            </a>

                             <a
                                href="https://maps.google.com/?q=Epicentrum Walk Jakarta"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="flex items-start space-x-3 text-darkColor/80 dark:text-lightColor/80 hover:text-main-1 dark:hover:text-main-1 transition-colors duration-200 group"
                            >
                                <FiMapPin className="w-5 h-5 mt-0.5 flex-shrink-0 group-hover:scale-110 transition-transform duration-200" />
                                <div className="text-sm">
                                    <p className="font-medium text-darkColor dark:text-lightColor">PT People Impact Consulting</p>
                                    <p>Epicentrum Walk, Lt. 3 A306</p>
                                    <p>Jl. HR. Rasuna Said, Kuningan</p>
                                    <p>Jakarta Selatan 12940</p>
                                </div>
                            </a>
                        </div>

                        {/* Business Hours */}
                        <div>
                            <h5 className="text-sm font-semibold text-darkColor dark:text-lightColor mb-2 uppercase tracking-wide">
                                Business Hours
                            </h5>
                            <div className="text-sm text-darkColor/70 dark:text-lightColor/70 space-y-1">
                                <div className="flex justify-between">
                                    <span>Monday - Friday:</span>
                                    <span>9:00 AM - 6:00 PM</span>
                                </div>
                                <div className="flex justify-between">
                                    <span>Saturday:</span>
                                    <span>9:00 AM - 1:00 PM</span>
                                </div>
                                <div className="flex justify-between">
                                    <span>Sunday:</span>
                                    <span>Closed</span>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Right Side - Quick Links & Location */}
                    <div className="space-y-6">
                        <h4 className="text-lg font-semibold text-darkColor dark:text-lightColor">Quick Links</h4>
                        
                        <div className="grid grid-cols-2 gap-4 text-sm">
                            <div className="space-y-2">
                                <Link href="/about-us" className="block text-darkColor/80 dark:text-lightColor/80 hover:text-main-1 dark:hover:text-main-1 transition-colors duration-200">
                                    About Us
                                </Link>
                                <Link href="/services" className="block text-darkColor/80 dark:text-lightColor/80 hover:text-main-1 dark:hover:text-main-1 transition-colors duration-200">
                                    Our Services
                                </Link>
                                <Link href="/contact" className="block text-darkColor/80 dark:text-lightColor/80 hover:text-main-1 dark:hover:text-main-1 transition-colors duration-200">
                                    Contact Us
                                </Link>
                            </div>
                            <div className="space-y-2">
                                <Link href="/job-board" className="block text-darkColor/80 dark:text-lightColor/80 hover:text-main-1 dark:hover:text-main-1 transition-colors duration-200">
                                    Job Board
                                </Link>
                                <Link href="/blog" className="block text-darkColor/80 dark:text-lightColor/80 hover:text-main-1 dark:hover:text-main-1 transition-colors duration-200">
                                    Resources
                                </Link>
                                <Link href="/services/custom-services" className="block text-darkColor/80 dark:text-lightColor/80 hover:text-main-1 dark:hover:text-main-1 transition-colors duration-200">
                                    Custom Solutions
                                </Link>
                            </div>
                        </div>

                        {/* Location Map */}
                        <div>
                            <h5 className="text-sm font-semibold text-darkColor dark:text-lightColor mb-3 uppercase tracking-wide">
                                Our Location
                            </h5>
                            <div className="bg-white dark:bg-secondaryDark rounded-secondary overflow-hidden border border-secondaryLight dark:border-secondaryDark" style={{ boxShadow: 'var(--shadow-secondaryShadow)' }}>
                                <iframe
                                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3966.264754392871!2d106.83070!3d-6.2297!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e69f39c9c2c2c2c%3A0x2c2c2c2c2c2c2c2c!2sEpicentrum%20Walk!5e0!3m2!1sen!2sid!4v1635000000000!5m2!1sen!2sid"
                                    width="100%"
                                    height="150"
                                    style={{ border: 0 }}
                                    allowFullScreen=""
                                    loading="lazy"
                                    referrerPolicy="no-referrer-when-downgrade"
                                    className="grayscale hover:grayscale-0 transition-all duration-500 dark:invert dark:hue-rotate-180"
                                    title="People Impact Office Location"
                                ></iframe>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Bottom Section - Copyright & Links */}
                <div className="border-t border-secondaryLight dark:border-secondaryDark mt-12 pt-8">
                    <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
                        <p className="text-sm text-darkColor/70 dark:text-lightColor/70">
                            Copyright ©2025 People Impact - Human Resources Consultant. All Rights Reserved.
                        </p>

                        <div className="flex space-x-6 text-sm">
                            <a
                                href="https://drive.google.com/file/d/1s3exhzFUEeAA3hsJWX_pFC5WMDPnsERI/view"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="text-darkColor/70 dark:text-lightColor/70 hover:text-main-1 dark:hover:text-main-1 transition-colors duration-200 inline-flex items-center gap-1"
                            >
                                Terms & Conditions
                                <FiExternalLink className="w-3 h-3" />
                            </a>
                            <a
                                href="https://drive.google.com/file/d/135-A84FwECePBlW225FYhhsDWRW1YvmH/view"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="text-darkColor/70 dark:text-lightColor/70 hover:text-main-1 dark:hover:text-main-1 transition-colors duration-200 inline-flex items-center gap-1"
                            >
                                Privacy Policy
                                <FiExternalLink className="w-3 h-3" />
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    )
}