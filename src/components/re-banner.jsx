import Image from "next/image"
import { Button } from "./ui/button"
export const ReBanner = ({
    title,
    imageSrc,
    subtitle,
    imageAlt = "",
    className = "",
    titleClassName = "",
    contentClassName = "",
    imageWidth = 1920,
    imageHeight = 1080,
    priority = false,
    children,
    renderContent
}) => {
    const defaultContent = (
        <div className={`m-5 text-white space-y-5 ${contentClassName}`}>
            <h1 className={`text-4xl md:text-5xl font-medium tracking-tighter drop-shadow-2xl ${titleClassName}`}>
                {title}
            </h1>
            {subtitle && (
                <p className="text-lg md:text-xl font-light drop-shadow-lg opacity-90">
                    {subtitle}
                </p>
            )}
            {children}
        </div>
    )

    return (
        <main className={`min-h-[80vh] mx-2 mt-4 ${className}`}>
            <section className="relative w-full rounded-main overflow-hidden">
                <Image
                    width={imageWidth}
                    height={imageHeight}
                    className="w-full h-[60vh] object-cover rounded-main"
                    src={imageSrc}
                    alt={imageAlt}
                    priority={priority}
                />
                <div className="absolute bottom-0 right-0 left-0 rounded-b-main w-full h-[50%] bg-gradient-to-t from-main-5/80 via-main-2/40 to-transparent" />
                <div className="absolute bottom-2 left-2">
                    {renderContent ? renderContent({ title, subtitle }) : defaultContent}
                </div>
            </section>
        </main>
    )
}
