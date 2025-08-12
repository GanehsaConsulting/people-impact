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
    <div className={`relative z-10 text-center space-y-4 md:space-y-6 px-6 ${contentClassName}`}>
      <h1
        className={`text-4xl md:text-6xl lg:text-7xl font-bold bg-gradient-to-br from-main-1 via-main-4 to-sec-3 dark:from-main-1 dark:via-main-3 dark:to-sec-1 text-transparent bg-clip-text pb-2 tracking-tight ${titleClassName}`}
      >
        {title}
      </h1>
      {subtitle && (
        <p className="text-lg md:text-xl text-darkColor/70 dark:text-lightColor/70 font-light max-w-3xl mx-auto leading-relaxed">
          {subtitle}
        </p>
      )}
      {children}
    </div>
  );

  return (
    <main className={`min-h-[20vh] md:min-h-[30vh] ${className}`}>
      <section className="relative w-full h-full bg-white dark:bg-black overflow-hidden">
        {/* Geometric Patterns */}
        <div className="absolute inset-0 overflow-hidden">
          {/* Large Circle - Top Right */}
          <div className="absolute -top-20 -right-20 w-80 h-80 rounded-full border border-main-1/5 dark:border-main-1/5"></div>
          <div className="absolute -top-10 -right-10 w-60 h-60 rounded-full border border-main-2/10 dark:border-main-2/10"></div>

          {/* Large Circle - Bottom Left */}
          <div className="absolute -bottom-20 -left-20 w-80 h-80 rounded-full border border-sec-3/5 dark:border-main-3/5"></div>
          <div className="absolute -bottom-10 -left-10 w-60 h-60 rounded-full border border-main-4/10 dark:border-main-4/10"></div>

          {/* Small Circles - Scattered */}
          <div className="absolute top-1/4 left-1/4 w-4 h-4 rounded-full bg-main-1/5 dark:bg-main-1/5"></div>
          <div className="absolute top-1/3 right-1/3 w-6 h-6 rounded-full bg-main-2/10 dark:bg-main-2/10"></div>
          <div className="absolute bottom-1/4 left-1/3 w-3 h-3 rounded-full bg-main-3/15 dark:bg-main-3/15"></div>
          <div className="absolute bottom-1/3 right-1/4 w-5 h-5 rounded-full bg-main-4/8 dark:bg-main-4/8"></div>

          {/* Diagonal Lines */}
          <div className="absolute top-0 left-0 w-full h-full">
            <svg className="w-full h-full" viewBox="0 0 1000 600" fill="none">
              {/* Subtle diagonal lines */}
              <line x1="0" y1="0" x2="200" y2="200" stroke="currentColor" strokeWidth="1" className="text-main-1/5 dark:text-main-1/5" />
              <line x1="800" y1="0" x2="1000" y2="200" stroke="currentColor" strokeWidth="1" className="text-main-2/5 dark:text-main-2/5" />
              <line x1="0" y1="400" x2="200" y2="600" stroke="currentColor" strokeWidth="1" className="text-main-3/5 dark:text-main-3/5" />
              <line x1="800" y1="400" x2="1000" y2="600" stroke="currentColor" strokeWidth="1" className="text-main-4/5 dark:text-main-4/5" />

              {/* Curved paths */}
              <path d="M0 300 Q250 100 500 300 T1000 300" stroke="currentColor" strokeWidth="1" fill="none" className="text-sec-1/8 dark:text-sec-1/8" />
              <path d="M0 200 Q250 400 500 200 T1000 200" stroke="currentColor" strokeWidth="1" fill="none" className="text-sec-1/6 dark:text-sec-2/6" />
            </svg>
          </div>

          {/* Grid Pattern */}
          <div className="absolute inset-0 opacity-30">
            <div className="w-full h-full" style={{
              backgroundImage: `
                linear-gradient(currentColor 1px, transparent 1px),
                linear-gradient(90deg, currentColor 1px, transparent 1px)
              `,
              backgroundSize: '60px 60px',
              color: 'rgb(0 0 0 / 0.02)'
            }}></div>
          </div>

          {/* Floating Geometric Shapes */}
          <div className="absolute top-20 left-20 w-8 h-8 border border-main-1/10 dark:border-main-1/10 rotate-45"></div>
          <div className="absolute top-32 right-32 w-6 h-6 border border-main-2/15 dark:border-main-2/15 rotate-12"></div>
          <div className="absolute bottom-20 right-20 w-10 h-10 border border-main-3/8 dark:border-main-3/8 rotate-45"></div>
          <div className="absolute bottom-32 left-32 w-4 h-4 border border-main-4/12 dark:border-main-4/12 rotate-12"></div>

          {/* Triangle shapes */}
          <div className="absolute top-40 left-1/2 transform -translate-x-1/2">
            <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
              <path d="M10 0 L20 20 L0 20 Z" fill="currentColor" className="text-main-1/5 dark:text-main-2/5" />
            </svg>
          </div>
          <div className="absolute bottom-40 left-1/3">
            <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
              <path d="M8 0 L16 16 L0 16 Z" stroke="currentColor" strokeWidth="1" fill="none" className="text-main-1/5 dark:text-main-2/5" />
            </svg>
          </div>
        </div>



        {/* Content */}
        <div className="relative z-20 flex items-center justify-center min-h-[20vh] md:min-h-[30vh] px-4">
          {renderContent ? renderContent({ title, subtitle }) : defaultContent}
        </div>

        {/* Animated Elements */}
        <div className="absolute inset-0 pointer-events-none">
          {/* Floating dots with subtle animation */}
          <div className="absolute top-1/4 left-1/5 w-2 h-2 bg-darkColor/20 dark:bg-lightColor/20 rounded-full animate-pulse"></div>
          <div className="absolute top-2/3 right-1/5 w-1.5 h-1.5 bg-darkColor/15 dark:bg-lightColor/15 rounded-full animate-pulse" style={{ animationDelay: '1s' }}></div>
          <div className="absolute bottom-1/4 left-2/3 w-1 h-1 bg-darkColor/25 dark:bg-lightColor/25 rounded-full animate-pulse" style={{ animationDelay: '2s' }}></div>
        </div>
      </section>
    </main>
  );
};