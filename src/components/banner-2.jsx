"use client"
import { Button } from "./ui/button"
import { MdArrowDownward, MdArrowOutward } from "react-icons/md";
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
            <main className="mx-0 my-0 md:my-4 h-[60vh] sm:h-[70vh] md:h-[90vh] h-90vh relative overflow-hidden flex flex-col group">
                {/* Background Image with Enhanced Effects */}
                <div className="absolute inset-0 rounded-none overflow-hidden">
                    <img
                        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                        src="https://images.unsplash.com/photo-1686771416282-3888ddaf249b?q=80&w=2071&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                        alt="Professional team collaboration representing organizational transformation"
                        loading="eager"
                    />

                    {/* Enhanced Gradient Overlays */}
                    <div className="absolute inset-0 bg-gradient-to-t from-main-5/60 via-main-2/50 to-transparent" />
                    <div className="absolute inset-0 bg-gradient-to-r from-black/30 via-transparent to-transparent" />
                </div>

                {/* Main Content - Enhanced Responsive Positioning */}
                <div className="absolute bottom-4 sm:bottom-6 md:bottom-8 lg:bottom-12 xl:bottom-17 left-2 sm:left-3 md:left-4 lg:left-8 xl:left-15 right-2 sm:right-3 md:right-4 lg:right-8 xl:right-15">
                    <div className="max-w-4xl text-white space-y-2 sm:space-y-3 md:space-y-4 lg:space-y-6">
                        {/* Main Heading with Enhanced Responsive Typography */}
                        <h1 className="text-xl xs:text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-medium tracking-tight drop-shadow-2xl leading-tight">
                            <span className="block">Empowering People</span>
                            <span className="block bg-gradient-to-r from-white via-sky-200 to-white bg-clip-text text-transparent">
                                Transforming Organizations
                            </span>
                        </h1>

                        {/* Description with Better Responsive Typography and Spacing */}
                        <div className="max-w-2xl sm:max-w-3xl">
                            <p className="text-xs sm:text-sm md:text-base lg:text-lg leading-relaxed text-white/90 backdrop-blur-sm">
                                <span className="">
                                    At People Impact, we recognized that every organization is distinct, which is why we adopt a tailored approach for each engagement. By gaining a thorough understanding of your goals, challenges, and opportunities, we create customized solutions that align perfectly with your vision for success. 
                                    <span className="hidden sm:inline"> Our comprehensive methodology integrates business strategy, leadership development, and process optimization, empowering our clients to flourish in a competitive environment.</span>
                                </span>
                            </p>
                        </div>

                        {/* Enhanced Responsive Action Buttons */}
                        <div className="flex sm:flex-row flex-col xs:flex-row gap-2 sm:gap-3 md:gap-4 pt-1 sm:pt-2 w-full max-w-md xs:max-w-none">
                            <Button
                                onClick={handleEnrollNow}
                                disabled={isEnrolling}
                                className="bg-white dark:bg-black dark:text-white hover:bg-gray-100 text-darkColor font-semibold px-3 xs:px-4 sm:px-6 py-2 xs:py-2.5 sm:py-3 transition-all duration-300 transform hover:scale-105 hover:shadow-xl group flex items-center justify-center gap-1.5 xs:gap-2 min-w-[120px] xs:min-w-[140px] sm:min-w-[160px] text-xs xs:text-sm sm:text-base"
                            >
                                {isEnrolling ? (
                                    <>
                                        <div className="w-3 h-3 sm:w-4 sm:h-4 border-2 border-main-1 border-t-transparent rounded-full animate-spin"></div>
                                        <span className="text-xs sm:text-sm">Opening Form...</span>
                                    </>
                                ) : (
                                    <>
                                        <span>Enquire Now</span>
                                        <MdArrowOutward className="w-3 h-3 sm:w-4 sm:h-4 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform duration-300" />
                                    </>
                                )}
                            </Button>

                            <Button
                                onClick={scrollToExplore}
                                variant="glass"
                                className="bg-white/10 hover:bg-white/20 backdrop-blur-md border border-white/30 text-white font-semibold px-3 xs:px-4 sm:px-6 py-2 xs:py-2.5 sm:py-3 transition-all duration-300 transform hover:scale-105 group flex items-center justify-center gap-1.5 xs:gap-2 text-xs xs:text-sm sm:text-base"
                            >
                                <span>Explore Services</span>
                                <MdArrowDownward className="w-3 h-3 sm:w-4 sm:h-4 group-hover:translate-y-1 transition-transform duration-300" />
                            </Button>
                        </div>
                    </div>
                </div>
            </main>
        </>
    )
}