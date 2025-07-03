"use client"
import { Button } from "./ui/button"
import { MdArrowDownward, MdArrowOutward } from "react-icons/md";
import { FiUsers, FiTrendingUp, FiCheckCircle } from "react-icons/fi";
import Link from "next/link";
import { useState } from "react";

export const BannerTwo = () => {
    const [isEnrolling, setIsEnrolling] = useState(false);

    const handleEnrollNow = () => {
        setIsEnrolling(true);
        // Open Google Form in new tab
        window.open(
            'https://docs.google.com/forms/d/e/1FAIpQLSdAF8d7IHa6hM0UjzDQ0f6hzOBbCuPsKewngojLdrhsW-5CkQ/viewform?usp=sharing&ouid=114444863748514946835',
            '_blank',
            'noopener,noreferrer'
        );

        // Reset loading state after a short delay
        setTimeout(() => {
            setIsEnrolling(false);
        }, 2000);
    };

    const scrollToExplore = () => {
        window.scrollBy({
            top: window.innerHeight * 0.8,
            behavior: 'smooth'
        });
    };

    return (
        <>
            <main className="mx-2 my-2 md:my-4 h-[70vh] md:h-[90vh] relative overflow-hidden flex flex-col group">
                {/* Background Image with Enhanced Effects */}
                <div className="absolute inset-0 rounded-main overflow-hidden">
                    <img
                        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                        src="https://images.unsplash.com/photo-1604328698692-f76ea9498e76?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                        alt="Professional team collaboration representing organizational transformation"
                        loading="eager"
                    />

                    {/* Enhanced Gradient Overlays */}
                    <div className="absolute inset-0 bg-gradient-to-t from-main-5/90 via-main-2/50 to-transparent" />
                    <div className="absolute inset-0 bg-gradient-to-r from-black/30 via-transparent to-transparent" />

                    {/* Animated dots pattern */}
                    <div className="absolute inset-0 opacity-10">
                        <div className="absolute top-20 left-20 w-2 h-2 bg-white rounded-full animate-pulse"></div>
                        <div className="absolute top-32 right-32 w-1 h-1 bg-white/60 rounded-full animate-pulse" style={{ animationDelay: '1s' }}></div>
                        <div className="absolute bottom-40 left-40 w-1.5 h-1.5 bg-white/80 rounded-full animate-pulse" style={{ animationDelay: '2s' }}></div>
                    </div>
                </div>

                {/* Stats Cards - Mobile Hidden, Desktop Visible */}
                <div className="hidden  lg:block absolute bottom-6 right-6 space-y-3">
                    <div className="flex items-center gap-2">
                        <div className="min-w-[30vh] bg-white/10 backdrop-blur-md rounded-xl p-4 text-white border border-white/20">
                            <div className="flex items-center gap-3">
                                <div className="p-2 bg-sec-2/30 rounded-lg">
                                    <FiUsers className="w-5 h-5" />
                                </div>
                                <div>
                                    <div className="text-sm opacity-90">Organizations Served</div>
                                    <div className="text-xl font-bold">500+</div>
                                </div>
                            </div>
                        </div>

                        <div className="min-w-[30vh] bg-white/10 backdrop-blur-md rounded-xl p-4 text-white border border-white/20">
                            <div className="flex items-center gap-3">
                                <div className="p-2 bg-sec-4/30 rounded-lg">
                                    <FiTrendingUp className="w-5 h-5" />
                                </div>
                                <div>
                                    <div className="text-sm opacity-90">Success Rate</div>
                                    <div className="text-xl font-bold">98%</div>
                                </div>
                            </div>
                        </div>
                    </div>

                </div>

                {/* Main Content */}
                <div className="absolute bottom-4 md:bottom-6 left-4 md:left-6 right-4 md:right-6">
                    <div className="max-w-4xl text-white space-y-4 md:space-y-6">
                        {/* Badge */}
                        <div className="inline-flex items-center gap-2 px-3 py-1.5 bg-white/10 backdrop-blur-md rounded-full border border-white/20 text-sm font-medium">
                            <FiCheckCircle className="w-4 h-4 text-green-400" />
                            <span>Trusted by Industry Leaders</span>
                        </div>

                        {/* Main Heading with Animation */}
                        <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-medium tracking-tight drop-shadow-2xl leading-tight">
                            <span className="block">Empowering People</span>
                            <span className="block bg-gradient-to-r from-white via-emerald-100 to-white bg-clip-text text-transparent">
                                Transforming Organizations
                            </span>
                        </h1>

                        {/* Description with Better Typography */}
                        <div className="max-w-3xl">
                            <p className="text-sm md:text-base leading-relaxed text-white/90 backdrop-blur-sm">
                                <span className="hidden md:block">
                                    At People Impact, we recognize that every organization is unique. Our tailored approach combines deep understanding of your goals with strategic solutions that drive meaningful transformation. Through integrated business strategy, leadership development, and process optimization, we empower organizations to thrive in today's competitive landscape.
                                </span>
                                <span className="block md:hidden">
                                    People Impact delivers tailored HR solutions that align with your unique goals—combining strategy, leadership development, and optimization to drive sustainable success.
                                </span>
                            </p>
                        </div>

                        {/* Enhanced Action Buttons */}
                        <div className="flex flex-row gap-3 sm:gap-4 pt-2">
                            <Button
                                onClick={handleEnrollNow}
                                disabled={isEnrolling}
                                className="bg-white dark:bg-black dark:text-white hover:bg-gray-100 text-darkColor  font-semibold px-6 py-3 transition-all duration-300 transform hover:scale-105 hover:shadow-xl group flex items-center justify-center gap-2 min-w-[160px]"
                            >
                                {isEnrolling ? (
                                    <>
                                        <div className="w-4 h-4 border-2 border-main-1 border-t-transparent rounded-full animate-spin"></div>
                                        <span>Opening Form...</span>
                                    </>
                                ) : (
                                    <>
                                        <span>Enroll Now</span>
                                        <MdArrowOutward className="w-4 h-4 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform duration-300" />
                                    </>
                                )}
                            </Button>

                            <Button
                                onClick={scrollToExplore}
                                variant="glass"
                                className="bg-white/10 hover:bg-white/20 backdrop-blur-md border border-white/30 text-white font-semibold px-6 py-3 transition-all duration-300 transform hover:scale-105 group flex items-center justify-center gap-2"
                            >
                                <span>Explore Services</span>
                                <MdArrowDownward className="w-4 h-4 group-hover:translate-y-1 transition-transform duration-300" />
                            </Button>
                        </div>
                    </div>
                </div>


            </main>
        </>
    )
}