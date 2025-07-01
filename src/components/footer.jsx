export const Footer = () => {
    return (
        <footer className="py-12">
            <div className="margin">
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 lg:gap-12">

                    {/* Left Side - Logo & Social Media */}
                    <div className="space-y-6">
                        <div>
                            <h3 className="text-xl font-bold  mb-2">People Impact</h3>
                            <p className="text-sm leading-relaxed">
                                Empowering people, transforming organizations.
                            </p>
                        </div>

                        <div className="flex space-x-4">
                            <a
                                href="https://instagram.com/peopleimpact_consulting"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="bg-lightColor dark:bg-darkColor hover:bg-slate-600 p-3 rounded-full transition-colors duration-200"
                            >
                                <span className="sr-only">Instagram</span>
                                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                                    <path d="M12.017 0C5.396 0 .029 5.367.029 11.987c0 6.621 5.367 11.988 11.988 11.988s11.987-5.367 11.987-11.988C24.004 5.367 18.637.001 12.017.001zM8.449 16.988c-1.297 0-2.448-.49-3.321-1.297C4.198 14.553 3.708 13.402 3.708 12.105s.49-2.448 1.42-3.321c.873-.873 2.024-1.297 3.321-1.297s2.448.49 3.321 1.297c.93.873 1.42 2.024 1.42 3.321s-.49 2.448-1.42 3.321c-.873.873-2.024 1.297-3.321 1.297zm7.599 0c-1.297 0-2.448-.49-3.321-1.297-.93-.873-1.42-2.024-1.42-3.321s.49-2.448 1.42-3.321c.873-.873 2.024-1.297 3.321-1.297s2.448.49 3.321 1.297c.93.873 1.42 2.024 1.42 3.321s-.49 2.448-1.42 3.321c-.873.873-2.024 1.297-3.321 1.297z" />
                                </svg>
                            </a>

                            <a
                                href="https://linkedin.com/company/people-impact-consulting"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="bg-lightColor dark:bg-darkColor hover:bg-slate-600 p-3 rounded-full transition-colors duration-200"
                            >
                                <span className="sr-only">LinkedIn</span>
                                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                                    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                                </svg>
                            </a>

                            <a
                                href="https://youtube.com/@PeopleImpact_Consulting"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="bg-lightColor dark:bg-darkColor hover:bg-slate-600 p-3 rounded-full transition-colors duration-200"
                            >
                                <span className="sr-only">YouTube</span>
                                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                                    <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
                                </svg>
                            </a>
                        </div>
                    </div>

                    {/* Middle - Contact Details */}
                    <div className="space-y-6">
                        <h4 className="text-lg font-semibold ">Contact Details</h4>

                        <div className="space-y-4 text-sm">
                            <div className="flex items-start space-x-3">
                                <svg className="w-5 h-5 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                                </svg>
                                <span>+62 812 9777 0201</span>
                            </div>

                            <div className="flex items-start space-x-3">
                                <svg className="w-5 h-5 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                                </svg>
                                <span>support@peopleimpact.co.id</span>
                            </div>

                            <div className="flex items-start space-x-3">
                                <svg className="w-5 h-5 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                                </svg>
                                <div>
                                    <p className="font-medium">PT People Impact Consulting</p>
                                    <p>Epicentrum Walk, Lt. 3 A306</p>
                                    <p>Jl. HR. Rasuna Said, Kuningan</p>
                                    <p>Jakarta Selatan 12940</p>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Right Side - Location Map */}
                    <div className="space-y-6">
                        <h4 className="text-lg font-semibold ">Our Location</h4>

                        <div className="bg-lightColor dark:bg-darkColor rounded-lg overflow-hidden">
                            <iframe
                                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3966.2647543928707!2d106.8307!3d-6.2297!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e69f1c9c2c2c2c2%3A0x2c2c2c2c2c2c2c2c!2sEpicentrum%20Walk!5e0!3m2!1sen!2sid!4v1635000000000!5m2!1sen!2sid"
                                width="100%"
                                height="200"
                                style={{ border: 0 }}
                                allowFullScreen=""
                                loading="lazy"
                                referrerPolicy="no-referrer-when-downgrade"
                                className="grayscale hover:grayscale-0 transition-all duration-300 dark:invert"
                            ></iframe>
                        </div>
                    </div>
                </div>

                {/* Bottom Section - Copyright & Links */}
                <div className="border-t border-neutral-300  dark:border-neutral-700 mt-12 pt-8">
                    <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
                        <p className="text-sm">
                            Copyright ©2025 People Impact - Human Resources Consultant. All Rights Reserved.
                        </p>

                        <div className="flex space-x-6 text-sm">
                            <a
                                href="/terms-conditions"
                                className="hover: transition-colors duration-200"
                            >
                                Terms & Conditions
                            </a>
                            <a
                                href="/privacy-policy"
                                className="hover: transition-colors duration-200"
                            >
                                Privacy Policy
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    )
}