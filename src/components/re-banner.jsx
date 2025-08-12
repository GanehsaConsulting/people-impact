import { Button } from "./ui/button"

export const ReBanner = ({
    title,
    subtitle,
    className = "",
    titleClassName = "",
    contentClassName = "",
    children,
    renderContent
}) => {
    const defaultContent = (
        <div className={`m-5 text-white space-y-2 md:space-y-5 ${contentClassName}`}>
            <h1 className={`text-center text-3xl md:text-5xl font-medium tracking-tighter drop-shadow-2xl ${titleClassName}`}>
                {title}
            </h1>
            {subtitle && (
                <p className="text-center text-sm md:text-lg font-light drop-shadow-lg opacity-90 max-w-2xl">
                    {subtitle}
                </p>
            )}
            {children}
        </div>
    )

    return (
        <main className={`mt-4 ${className}`}>
            <section className="relative w-full overflow-hidden">
                {/* Background dengan gradient dan pattern */}
                <div className="w-full min-h-[35vh] md:max-h-[35vh] bg-gradient-to-br from-main-1 via-main-2 to-main-5 relative">
                    {/* Pattern overlay - Geometric circles */}
                    <div className="absolute inset-0 opacity-20">
                        <div className="absolute top-0 right-0 w-96 h-96 bg-sec-1 rounded-full blur-3xl transform translate-x-1/2 -translate-y-1/2"></div>
                        <div className="absolute bottom-0 left-0 w-80 h-80 bg-main-3 rounded-full blur-2xl transform -translate-x-1/2 translate-y-1/2"></div>
                        <div className="absolute top-1/2 left-1/3 w-64 h-64 bg-sec-4 rounded-full blur-xl opacity-60"></div>
                    </div>
                  </div>

                {/* Content overlay */}
                <div className="absolute inset-0 flex items-center justify-center bg-gradient-to-t from-main-5/30 via-transparent to-transparent">
                    {renderContent ? renderContent({ title, subtitle }) : defaultContent}
                </div>
            </section>
        </main>
    )
}