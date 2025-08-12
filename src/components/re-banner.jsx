import { Button } from "./ui/button";

export const ReBanner = ({
  title,
  subtitle,
  className = "",
  titleClassName = "",
  contentClassName = "",
  children,
  renderContent,
}) => {
  const defaultContent = (
    <div className={`m-5 text-white space-y-2 md:space-y-5 ${contentClassName}`}>
      <h1
        className={`text-center text-3xl md:text-5xl font-medium tracking-tighter drop-shadow-2xl ${titleClassName}`}
      >
        {title}
      </h1>
      {subtitle && (
        <p className="text-center text-sm md:text-lg font-light drop-shadow-lg opacity-90 max-w-2xl">
          {subtitle}
        </p>
      )}
      {children}
    </div>
  );

  return (
    <main className={`min-h-[50vh] md:min-h-[50vh] mx-2 mt-4 ${className}`}>
      <section className="relative w-full rounded-main overflow-hidden">
        {/* BACKGROUND IMAGE + GRADIENT OVERLAY */}
        <div className="w-full min-h-[50vh] md:max-h-[50vh] relative">
          <img
            src="https://images.pexels.com/photos/5699475/pexels-photo-5699475.jpeg"
            alt="hero"
            className="absolute inset-0 w-full h-full object-cover"
          />
          {/* Gradient overlay on top of the image */}
          <div className="absolute inset-0 bg-black/70 mix-blend-multiply" />
        </div>

        {/* Content overlay */}
        <div className="absolute inset-0 flex items-center justify-center bg-gradient-to-t from-main-5/50 via-transparent to-transparent">
          {renderContent ? renderContent({ title, subtitle }) : defaultContent}
        </div>
      </section>
    </main>
  );
};