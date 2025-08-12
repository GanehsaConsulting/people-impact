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
          <div className="absolute inset-0 bg-gradient-to-br from-main-1 via-main-2 to-main-5 mix-blend-multiply" />

          {/* Pattern overlays (kept untouched) */}
          <div className="absolute inset-0 opacity-20">
            <div className="absolute top-0 right-0 w-96 h-96 bg-sec-1 rounded-full blur-3xl transform translate-x-1/2 -translate-y-1/2"></div>
            <div className="absolute bottom-0 left-0 w-80 h-80 bg-main-3 rounded-full blur-2xl transform -translate-x-1/2 translate-y-1/2"></div>
            <div className="absolute top-1/2 left-1/3 w-64 h-64 bg-sec-4 rounded-full blur-xl opacity-60"></div>
          </div>

          {/* Dot & diagonal patterns */}
          <div
            className="absolute inset-0 opacity-10"
            style={{
              backgroundImage: `radial-gradient(circle at 2px 2px, white 1px, transparent 0)`,
              backgroundSize: "40px 40px",
            }}
          ></div>
          <div
            className="absolute inset-0 opacity-5"
            style={{
              backgroundImage: `repeating-linear-gradient(
                45deg,
                transparent,
                transparent 10px,
                white 10px,
                white 11px
              )`,
            }}
          ></div>
        </div>

        {/* Content overlay */}
        <div className="absolute inset-0 flex items-center justify-center bg-gradient-to-t from-main-5/30 via-transparent to-transparent">
          {renderContent ? renderContent({ title, subtitle }) : defaultContent}
        </div>
      </section>
    </main>
  );
};