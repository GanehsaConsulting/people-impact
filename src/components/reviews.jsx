"use client"
import { useState } from 'react';
import { FaStar } from "react-icons/fa6";
import { IoIosArrowBack } from "react-icons/io";
import { Button } from './ui/button';
import { Title } from './ui/title';

const clientReviews = [
    {
        name: "Sarah Wibowo",
        company: "PT Astra Graphia",
        rating: 5,
        review: "People Impact helped us unlock the full potential of our leadership team. Their approach was practical, insightful, and transformative.",
    },
    {
        name: "Budi Santoso",
        company: "Bank Mandiri",
        rating: 4,
        review: "Their tailored strategies fit perfectly with our organizational goals. Very professional and responsive team.",
    },
    {
        name: "Intan Prameswari",
        company: "Gojek Indonesia",
        rating: 5,
        review: "We saw real, measurable results after partnering with People Impact. Highly recommended for companies going through change.",
    },
    {
        name: "Ahmad Rizal",
        company: "Telkom Indonesia",
        rating: 5,
        review: "They truly understand how to optimize human capital. Great insights and impactful delivery.",
    },
    {
        name: "Cynthia Halim",
        company: "Shopee Indonesia",
        rating: 4,
        review: "Our experience with People Impact was seamless. Their team brought clarity and structure to our leadership journey.",
    },
    {
        name: "James Tanuwijaya",
        company: "Traveloka",
        rating: 5,
        review: "A partner that listens and delivers. Their custom approach made a huge difference in our transformation efforts.",
    },
    {
        name: "Devi Rahmadani",
        company: "Bank BCA",
        rating: 4,
        review: "Professional team with a deep understanding of organizational dynamics. Great experience overall.",
    },
    {
        name: "Hendro Wijaya",
        company: "Bukalapak",
        rating: 5,
        review: "We appreciated their attention to detail and strong facilitation during our leadership development program.",
    },
    {
        name: "Maria Kristanti",
        company: "Pertamina",
        rating: 5,
        review: "Exceptional service and results. People Impact brought energy and innovation to our HR initiatives.",
    },
    {
        name: "Yusuf Kurniawan",
        company: "Indofood",
        rating: 4,
        review: "Their training was engaging, relevant, and impactful. Our team benefited greatly.",
    },
    {
        name: "Rina Agustina",
        company: "Danone Indonesia",
        rating: 5,
        review: "People Impact is a valuable partner in building future-ready leaders. Their approach is grounded and effective.",
    },
    {
        name: "Kevin Wijaya",
        company: "Unilever Indonesia",
        rating: 4,
        review: "Strong content and excellent facilitation. Would definitely work with them again.",
    },
    {
        name: "Dewi Kartika",
        company: "CIMB Niaga",
        rating: 5,
        review: "They go beyond surface-level training—what we got was a real shift in mindset and behavior.",
    },
    {
        name: "Agus Rahmat",
        company: "PLN",
        rating: 5,
        review: "Professional, adaptive, and effective. They helped us through an important transition period with clarity and confidence.",
    },
    {
        name: "Sinta Marlina",
        company: "Grab Indonesia",
        rating: 4,
        review: "Collaborative, client-focused, and always prepared. The People Impact team exceeded our expectations.",
    },
];

export const Reviews = () => {
    const [carouselRef, setCarouselRef] = useState(null);
    const [isAtStart, setIsAtStart] = useState(true);
    const [isAtEnd, setIsAtEnd] = useState(false);

    const updateCarouselPosition = () => {
        if (carouselRef) {
            const { scrollLeft, scrollWidth, clientWidth } = carouselRef;
            setIsAtStart(scrollLeft <= 0);
            setIsAtEnd(scrollLeft + clientWidth >= scrollWidth - 5);
        }
    };

    const scrollAmount = () => {
        if (typeof window !== 'undefined') {
            if (window.innerWidth < 640) return 280; // mobile
            if (window.innerWidth < 1024) return 350; // tablet
            return 300; // desktop
        }
        return 300;
    };

    return (
        <main className="space-y-5 spacing">
            <div className="margin mb-10">
                <Title>
                    What Our Clients Say
                </Title>
            </div>

            {/* Container untuk carousel dan arrows */}
            <div className="relative group">
                {/* Left Arrow - responsive positioning */}
                <Button
                    size={"icon"}
                    variant={"glassColor"}
                    onClick={() => carouselRef?.scrollBy({ left: -scrollAmount(), behavior: "smooth" })}
                    disabled={isAtStart}
                    className={`
                        absolute left-2 sm:left-4 lg:left-15 top-1/2 transform -translate-y-1/2 z-15 backdrop-blur-md 
                        ${isAtStart ? '!opacity-5 cursor-not-allowed' : 'group-hover:!opacity-100 !opacity-20 cursor-pointer'} 
                        rounded-full shadow-lg w-8 h-8 sm:w-10 sm:h-10
                    `}
                >
                    <IoIosArrowBack className="w-4 h-4 sm:w-5 sm:h-5" />
                </Button>

                {/* Right Arrow - responsive positioning */}
                <Button
                    size={"icon"}
                    variant={"glassColor"}
                    className={`
                        absolute right-2 sm:right-4 lg:right-15 top-1/2 transform -translate-y-1/2 z-10 rotate-180 backdrop-blur-md
                        ${isAtEnd ? '!opacity-5 cursor-not-allowed' : 'opacity-20 cursor-pointer group-hover:!opacity-100'} 
                        rounded-full shadow-lg w-8 h-8 sm:w-10 sm:h-10
                    `}
                    onClick={() => carouselRef?.scrollBy({ left: scrollAmount(), behavior: "smooth" })}
                    disabled={isAtEnd}
                >
                    <IoIosArrowBack className="w-4 h-4 sm:w-5 sm:h-5" />
                </Button>

                {/* Carousel Section - responsive padding */}
                <section
                    ref={ref => setCarouselRef(ref)}
                    onScroll={updateCarouselPosition}
                    className="carousel w-full gap-3 sm:gap-4 px-4 sm:px-8 lg:px-12"
                >
                    {clientReviews.map((el, idx) => (
                        <div
                            key={idx}
                            className={`
                            ${idx == 0 && "ml-0"} ${clientReviews.length - 1 == idx && "mr-0"}
                            min-w-[calc(85%-12px)] w-[calc(85%-12px)] 
                            sm:min-w-[calc(60%-12px)] sm:w-[calc(60%-12px)]
                            md:min-w-[calc(45%-12px)] md:w-[calc(45%-12px)]
                            lg:min-w-[calc(33.333%-12px)] lg:w-[calc(33.333%-12px)]
                            xl:min-w-[calc(25%-12px)] xl:w-[calc(25%-12px)]
                            p-3 sm:p-4 rounded-main bg-lightColor dark:bg-darkColor flex flex-col
                            `}>
                            <div className="flex items-start mb-3 sm:mb-4">
                                {[...Array(el.rating)].map((_, i) => (
                                    <span key={i} className="text-yellow-500 text-sm sm:text-base">
                                        <FaStar />
                                    </span>
                                ))}
                                {[...Array(5 - el.rating)].map((_, i) => (
                                    <span key={i} className="text-baseColorDark/30 dark:text-baseColorLight/40 text-sm sm:text-base">
                                        <FaStar />
                                    </span>
                                ))}
                            </div>
                            <div className="text-main-2 dark:text-main-1 flex items-center gap-2 mb-2">
                                <h2 className="text-base sm:text-lg font-semibold">{el.name}</h2>
                            </div>
                            <p className="text-xs sm:text-sm opacity-70 mb-2">{el.company}</p>
                            <p className="text-sm sm:text-[15px] leading-5 sm:leading-5.5">{el.review}</p>
                        </div>
                    ))}
                </section>
            </div>
        </main>
    );
};