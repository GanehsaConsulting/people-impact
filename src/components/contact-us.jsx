"use client"

import React, { useState } from 'react';
import { FaBuilding } from 'react-icons/fa6';
import { FiPhone, FiMail, FiMapPin, FiSend, FiUser, FiMessageSquare, FiClock, FiArrowRight, FiAlertCircle } from 'react-icons/fi';

export const ContactUs = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        company: '',
        phone: '',
        subject: '',
        message: ''
    });
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [isSubmitted, setIsSubmitted] = useState(false);
    const [error, setError] = useState('');

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData(prev => ({
            ...prev,
            [name]: value
        }));
        // Clear error when user starts typing
        if (error) setError('');
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setIsSubmitting(true);
        setError('');

        try {
            const response = await fetch('/api/contact', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(formData),
            });

            const data = await response.json();

            if (!response.ok) {
                throw new Error(data.error || 'Failed to send message');
            }

            setIsSubmitted(true);
            
            // Reset form after 5 seconds
            setTimeout(() => {
                setIsSubmitted(false);
                setFormData({
                    name: '',
                    email: '',
                    company: '',
                    phone: '',
                    subject: '',
                    message: ''
                });
            }, 5000);

        } catch (err) {
            setError(err.message || 'Failed to send message. Please try again.');
        } finally {
            setIsSubmitting(false);
        }
    };

    const contactInfo = [
        {
            icon: FiPhone,
            label: "Phone",
            value: "+62 812 9777 0201",
            href: "tel:+6281297770201",
            color: "text-main-1"
        },
        {
            icon: FiMail,
            label: "Email",
            value: "support@peopleimpact.co.id",
            href: "mailto:support@peopleimpact.co.id",
            color: "text-main-3"
        },
        {
            icon: FiMapPin,
            label: "Address",
            value: "PT People Impact Consulting\nEpicentrum Walk, Lt. 3 A306\nJl. HR. Rasuna Said, Kuningan\nJakarta Selatan 12940",
            href: "https://maps.google.com/?q=Epicentrum Walk Jakarta",
            color: "text-sec-3"
        }
    ];

    return (
        <section className="margin spacing">
            <div className="">
                {/* Header */}
                <div className="text-center mb-16">
                    <h1 className="text-2xl md:text-5xl font-bold text-darkColor dark:text-lightColor mb-6">
                        Get in touch with <span className="text-main-1">us!</span>
                    </h1>
                    <p className="md:text-lg text-darkColor/80 dark:text-lightColor/80 max-w-3xl mx-auto leading-relaxed">
                        At People Impact, we are here to assist you with all your HR consulting needs. Whether you have
                        questions about our services, want to discuss a potential project, or need further information,
                        feel free to reach out to us.
                    </p>
                </div>

                {/* Main Content */}
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
                    {/* Left Column - Contact Info */}
                    <div className="space-y-8">
                        {/* Hero Image */}
                        <div className="relative rounded-main overflow-hidden" style={{ boxShadow: 'var(--shadow-mainShadow)' }}>
                            <img
                                src="https://images.unsplash.com/photo-1600880292203-757bb62b4baf?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                                alt="Human Resources Consulting"
                                className="w-full h-80 object-cover"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-main-2/60 to-transparent"></div>

                            {/* Floating elements */}
                            <div className="absolute top-3 md:p-6 left-6 bg-white dark:bg-secondaryDark rounded-secondary p-3 shadow-secondaryShadow">
                                <FaBuilding className="w-6 h-6 text-main-1" />
                            </div>
                            <div className="absolute bottom-6 right-6 bg-white dark:bg-secondaryDark rounded-secondary p-3 shadow-secondaryShadow">
                                <FiMessageSquare className="w-6 h-6 text-main-3" />
                            </div>
                        </div>

                        {/* Contact Information */}
                        <div className="bg-white dark:bg-secondaryDark rounded-main md:p-3 md:p-6 p-4 border border-secondaryLight dark:border-secondaryDark" style={{ boxShadow: 'var(--shadow-mainShadow)' }}>
                            <h2 className="text-2xl font-bold text-darkColor dark:text-lightColor mb-6">
                                Contact Information
                            </h2>

                            <div className="space-y-6">
                                {contactInfo.map((item, index) => {
                                    const IconComponent = item.icon;
                                    return (
                                        <div key={index} className="group">
                                            <a
                                                href={item.href}
                                                target={item.label === "Address" ? "_blank" : undefined}
                                                rel={item.label === "Address" ? "noopener noreferrer" : undefined}
                                                className="flex items-start gap-4 md:p-4 rounded-secondary hover:bg-secondaryGray dark:hover:bg-darkColor transition-colors duration-200"
                                            >
                                                <div className={`w-12 h-12 rounded-secondary bg-main-1/10 dark:bg-main-1/20 flex items-center justify-center flex-shrink-0`}>
                                                    <IconComponent className={`w-6 h-6 ${item.color}`} />
                                                </div>
                                                <div className="flex-1 min-w-0">
                                                    <h3 className="font-semibold text-darkColor dark:text-lightColor mb-1">
                                                        {item.label}
                                                    </h3>
                                                    <p className="text-sm text-darkColor/70 dark:text-lightColor/70 whitespace-pre-line leading-relaxed">
                                                        {item.value}
                                                    </p>
                                                </div>
                                                <FiArrowRight className="w-3 md:w-5 h-3 md:h-5 text-darkColor/40 dark:text-lightColor/40 group-hover:text-main-1 group-hover:translate-x-1 transition-all duration-200" />
                                            </a>
                                        </div>
                                    );
                                })}
                            </div>
                        </div>

                        {/* Business Hours */}
                        <div className="bg-main-1/5 dark:bg-main-1/10 rounded-secondary p-3 md:p-6 border border-main-1/30">
                            <div className="flex items-center gap-3 mb-4">
                                <FiClock className="w-6 h-6 text-main-1" />
                                <h3 className="font-semibold text-darkColor dark:text-lightColor">Business Hours</h3>
                            </div>
                            <div className="space-y-2 text-sm text-darkColor/80 dark:text-lightColor/80">
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

                    {/* Right Column - Contact Form */}
                    <div className="bg-white dark:bg-secondaryDark rounded-main p-4 md:p-8 border border-secondaryLight dark:border-secondaryDark" style={{ boxShadow: 'var(--shadow-mainShadow)' }}>
                        <div className="mb-8">
                            <h2 className="text-2xl font-bold text-darkColor dark:text-lightColor mb-3">
                                Send us a message!
                            </h2>
                            <p className="text-darkColor/70 dark:text-lightColor/70">
                                Have a question or want to schedule a consultation? Fill out the form below, and one of our
                                team members will get back to you as soon as possible.
                            </p>
                        </div>

                        {/* Error Message */}
                        {error && (
                            <div className="mb-6 p-4 bg-red-50 dark:bg-red-900/20 border border-red-200 dark:border-red-700 rounded-secondary">
                                <div className="flex items-center gap-2 text-red-600 dark:text-red-400">
                                    <FiAlertCircle className="w-5 h-5" />
                                    <p className="text-sm font-medium">{error}</p>
                                </div>
                            </div>
                        )}

                        {isSubmitted ? (
                            <div className="text-center py-12">
                                <div className="w-16 h-16 bg-main-1/10 dark:bg-main-1/20 rounded-full flex items-center justify-center mx-auto mb-4">
                                    <FiSend className="w-8 h-8 text-main-1" />
                                </div>
                                <h3 className="text-xl font-semibold text-darkColor dark:text-lightColor mb-2">
                                    Message Sent Successfully!
                                </h3>
                                <p className="text-darkColor/70 dark:text-lightColor/70 mb-4">
                                    Thank you for reaching out. We'll get back to you within 24 hours.
                                </p>
                                <p className="text-sm text-darkColor/60 dark:text-lightColor/60">
                                    You should also receive a confirmation email shortly.
                                </p>
                            </div>
                        ) : (
                            <form onSubmit={handleSubmit} className="space-y-6">
                                <div className="grid md:grid-cols-2 gap-4">
                                    {/* Name */}
                                    <div>
                                        <label className="block text-sm font-medium text-darkColor dark:text-lightColor mb-2">
                                            Full Name *
                                        </label>
                                        <div className="relative">
                                            <FiUser className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-darkColor/40 dark:text-lightColor/40" />
                                            <input
                                                type="text"
                                                name="name"
                                                value={formData.name}
                                                onChange={handleInputChange}
                                                required
                                                className="w-full pl-10 pr-4 py-3 rounded-secondary border border-secondaryLight dark:border-secondaryDark bg-white dark:bg-darkColor text-darkColor dark:text-lightColor placeholder-darkColor/50 dark:placeholder-lightColor/50 focus:outline-none focus:ring-2 focus:ring-main-1 focus:border-transparent transition-all duration-200"
                                                placeholder="Enter your full name"
                                            />
                                        </div>
                                    </div>

                                    {/* Email */}
                                    <div>
                                        <label className="block text-sm font-medium text-darkColor dark:text-lightColor mb-2">
                                            Email Address *
                                        </label>
                                        <div className="relative">
                                            <FiMail className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-darkColor/40 dark:text-lightColor/40" />
                                            <input
                                                type="email"
                                                name="email"
                                                value={formData.email}
                                                onChange={handleInputChange}
                                                required
                                                className="w-full pl-10 pr-4 py-3 rounded-secondary border border-secondaryLight dark:border-secondaryDark bg-white dark:bg-darkColor text-darkColor dark:text-lightColor placeholder-darkColor/50 dark:placeholder-lightColor/50 focus:outline-none focus:ring-2 focus:ring-main-1 focus:border-transparent transition-all duration-200"
                                                placeholder="Enter your email"
                                            />
                                        </div>
                                    </div>
                                </div>

                                <div className="grid md:grid-cols-2 gap-4">
                                    {/* Company */}
                                    <div>
                                        <label className="block text-sm font-medium text-darkColor dark:text-lightColor mb-2">
                                            Company
                                        </label>
                                        <div className="relative">
                                            <FaBuilding className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-darkColor/40 dark:text-lightColor/40" />
                                            <input
                                                type="text"
                                                name="company"
                                                value={formData.company}
                                                onChange={handleInputChange}
                                                className="w-full pl-10 pr-4 py-3 rounded-secondary border border-secondaryLight dark:border-secondaryDark bg-white dark:bg-darkColor text-darkColor dark:text-lightColor placeholder-darkColor/50 dark:placeholder-lightColor/50 focus:outline-none focus:ring-2 focus:ring-main-1 focus:border-transparent transition-all duration-200"
                                                placeholder="Enter your company"
                                            />
                                        </div>
                                    </div>

                                    {/* Phone */}
                                    <div>
                                        <label className="block text-sm font-medium text-darkColor dark:text-lightColor mb-2">
                                            Phone Number
                                        </label>
                                        <div className="relative">
                                            <FiPhone className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-darkColor/40 dark:text-lightColor/40" />
                                            <input
                                                type="tel"
                                                name="phone"
                                                value={formData.phone}
                                                onChange={handleInputChange}
                                                className="w-full pl-10 pr-4 py-3 rounded-secondary border border-secondaryLight dark:border-secondaryDark bg-white dark:bg-darkColor text-darkColor dark:text-lightColor placeholder-darkColor/50 dark:placeholder-lightColor/50 focus:outline-none focus:ring-2 focus:ring-main-1 focus:border-transparent transition-all duration-200"
                                                placeholder="Enter your phone number"
                                            />
                                        </div>
                                    </div>
                                </div>

                                {/* Subject */}
                                <div>
                                    <label className="block text-sm font-medium text-darkColor dark:text-lightColor mb-2">
                                        Subject *
                                    </label>
                                    <select
                                        name="subject"
                                        value={formData.subject}
                                        onChange={handleInputChange}
                                        required
                                        className="w-full px-4 py-3 rounded-secondary border border-secondaryLight dark:border-secondaryDark bg-white dark:bg-darkColor text-darkColor dark:text-lightColor focus:outline-none focus:ring-2 focus:ring-main-1 focus:border-transparent transition-all duration-200 pr-2"
                                    >
                                        <option value="">Select a subject</option>
                                        <option value="general">General Inquiry</option>
                                        <option value="services">Services Information</option>
                                        <option value="consultation">Schedule Consultation</option>
                                        <option value="partnership">Partnership Opportunity</option>
                                        <option value="support">Support Request</option>
                                    </select>
                                </div>

                                {/* Message */}
                                <div>
                                    <label className="block text-sm font-medium text-darkColor dark:text-lightColor mb-2">
                                        Message *
                                    </label>
                                    <textarea
                                        name="message"
                                        value={formData.message}
                                        onChange={handleInputChange}
                                        required
                                        rows={6}
                                        className="w-full px-4 py-3 rounded-secondary border border-secondaryLight dark:border-secondaryDark bg-white dark:bg-darkColor text-darkColor dark:text-lightColor placeholder-darkColor/50 dark:placeholder-lightColor/50 focus:outline-none focus:ring-2 focus:ring-main-1 focus:border-transparent transition-all duration-200 resize-none"
                                        placeholder="Tell us about your needs or questions..."
                                    />
                                </div>

                                {/* Submit Button */}
                                <button
                                    type="submit"
                                    disabled={isSubmitting}
                                    className="w-full bg-main-1 hover:bg-main-2 disabled:bg-main-1/50 text-white font-semibold py-4 px-6 rounded-secondary transition-colors duration-200 flex items-center justify-center gap-3 group"
                                >
                                    {isSubmitting ? (
                                        <>
                                            <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin"></div>
                                            Sending Message...
                                        </>
                                    ) : (
                                        <>
                                            <span>Send Message</span>
                                            <FiSend className="w-5 h-5 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform duration-200" />
                                        </>
                                    )}
                                </button>
                            </form>
                        )}
                    </div>
                </div>
            </div>
        </section>
    );
};