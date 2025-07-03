import { Montserrat, Mulish, Ubuntu } from "next/font/google";
import "./globals.css";
import { Navbar } from "@/components/navbar";
import { CustomScrollbar } from "@/components/custom-scrollbar";
import { ThemeProvider } from "next-themes";
import { Footer } from "@/components/footer";
import { MobileNavbar } from "@/components/mobile-navbar";

const montserrat = Montserrat({
  variable: "--font-montserrat", // hanya untuk class tertentu
  subsets: ["latin"],
});

const nunito = Mulish({
  variable: "--font-nunito",     // digunakan sebagai default
  subsets: ["latin"],
  display: "swap",
});

export const metadata = {
  // Basic Metadata
  title: {
    default: "People Impact - Expert HR Consulting & Strategic Workforce Solutions",
    template: "%s | People Impact - HR Consulting Experts"
  },
  description: "Transform your organization with People Impact's comprehensive HR consulting services. We specialize in talent acquisition, performance management, employee engagement, and strategic workforce solutions. Trusted by 500+ organizations worldwide.",
  
  // Keywords for SEO
  keywords: [
    "HR consulting",
    "human resources consulting", 
    "talent acquisition",
    "performance management",
    "employee engagement",
    "workforce solutions",
    "organizational development",
    "HR strategy",
    "leadership development",
    "people management",
    "HR services",
    "business transformation",
    "workplace culture",
    "talent management",
    "HR technology implementation",
    "compliance support",
    "diversity equity inclusion",
    "payroll services",
    "training development",
    "compensation benefits"
  ],
  
  // Authors and Creator
  authors: [{ name: "People Impact" }],
  creator: "People Impact",
  publisher: "People Impact",
  
  // App Configuration
  manifest: "/manifest.json",
  
  // Open Graph / Facebook
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://peopleimpact.com",
    siteName: "People Impact",
    title: "People Impact - Expert HR Consulting & Strategic Workforce Solutions",
    description: "Transform your organization with comprehensive HR consulting services. Specializing in talent acquisition, performance management, and strategic workforce solutions. Trusted by 500+ organizations.",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "People Impact - HR Consulting Experts",
        type: "image/jpeg",
      },
      {
        url: "/og-image-square.jpg", 
        width: 1200,
        height: 1200,
        alt: "People Impact - Strategic HR Solutions",
        type: "image/jpeg",
      }
    ],
  },
  
  // Twitter Card
  twitter: {
    card: "summary_large_image",
    site: "@peopleimpact",
    creator: "@peopleimpact", 
    title: "People Impact - Expert HR Consulting & Strategic Workforce Solutions",
    description: "Transform your organization with comprehensive HR consulting services. Trusted by 500+ organizations worldwide.",
    images: ["/twitter-card.jpg"],
  },
  
  // Robots and Indexing
  robots: {
    index: true,
    follow: true,
    nocache: false,
    googleBot: {
      index: true,
      follow: true,
      noimageindex: false,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  
  // Verification Tags
  verification: {
    google: "your-google-verification-code",
    yandex: "your-yandex-verification-code", 
    yahoo: "your-yahoo-verification-code",
    other: {
      "facebook-domain-verification": "your-facebook-verification-code",
    },
  },
  
  // Geographic and Business Info
  other: {
    "geo.region": "US",
    "geo.placename": "Washington, DC",
    "geo.position": "38.9072;-77.0369",
    "ICBM": "38.9072, -77.0369",
    "business.contact_data.street_address": "Your Business Address",
    "business.contact_data.locality": "Washington",
    "business.contact_data.region": "DC", 
    "business.contact_data.postal_code": "20001",
    "business.contact_data.country_name": "United States",
    "business.contact_data.phone_number": "+1-XXX-XXX-XXXX",
    "business.contact_data.website": "https://peopleimpact.com",
    "business.contact_data.email": "info@peopleimpact.com",
    
    // Schema.org structured data
    "application-name": "People Impact",
    "apple-mobile-web-app-title": "People Impact",
    "theme-color": "#2563eb",
    "msapplication-TileColor": "#2563eb",
    "msapplication-config": "/browserconfig.xml",
    
    // Additional SEO
    "rating": "General",
    "distribution": "Global",
    "language": "English",
    "copyright": "© 2025 People Impact. All rights reserved.",
    "classification": "Business, HR Consulting, Professional Services",
  },
  
  // App-specific metadata
  applicationName: "People Impact",
  referrer: "origin-when-cross-origin",
  
  // Apple-specific
  appleWebApp: {
    capable: true,
    title: "People Impact",
    statusBarStyle: "default",
  },
  
  // Microsoft-specific
  msApplication: {
    TileColor: "#2563eb",
    config: "/browserconfig.xml",
  },
  
  // Alternates for different languages/regions (if applicable)
  alternates: {
    canonical: "https://peopleimpact.com",
    languages: {
      "en-US": "https://peopleimpact.com",
    },
  },
  
  // Categories
  category: "Business Services",
  
  // Additional structured data that could be useful
  archives: [],
  assets: [],
  bookmarks: [],
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" suppressHydrationWarning className="scroll-smooth">
      <head>
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <title>People Impact</title>
        <meta name="description" content="Your Swift Reliable Solutions" />
      </head>
      <body
        className={`${nunito.className} ${montserrat.variable}  antialiased`}
      >
        <ThemeProvider enableSystem attribute={'class'}>
          <MobileNavbar />
          <Navbar>
            {children}
          </Navbar>
          <Footer />
          <CustomScrollbar />
        </ThemeProvider>
      </body>
    </html>
  );
}
