import { Inter } from "next/font/google";
import "./globals.css";
import ThemeProvider from "@/components/providers/ThemeProvider";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import { site } from "@/data/site";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

export const metadata = {
  metadataBase: new URL("https://example.com"),
  title: {
    // default: `${site.name} — ${site.role}`,
    default: `${site.name} — Software Engineer Enthusiastic`,
    template: `%s | ${site.name}`,
  },
  description:
    "Full Stack Developer building modern web applications, APIs and AI-powered products.",
  openGraph: {
    title: `${site.name} — ${site.role}`,
    description:
      "Full Stack Developer building modern web applications, APIs and AI-powered products.",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: `${site.name} — ${site.role}`,
    description:
      "Full Stack Developer building modern web applications, APIs and AI-powered products.",
  },
  icons: {
    icon: "/favicon.ico",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${inter.variable} font-sans antialiased`}>
        <ThemeProvider>
          <Navbar />
          <main className="min-h-screen pt-16 md:pt-18">{children}</main>
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  );
}
