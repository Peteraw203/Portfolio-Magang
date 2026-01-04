import { Inter } from "next/font/google";
import ToasterContext from "./context/ToastContext";
import "./globals.css";
import Header from "@/components/Layout/Header";
import Footer from "@/components/Layout/Footer";
import { ThemeProvider } from "next-themes";
import ScrollToTop from '@/components/ScrollToTop';
import Aoscompo from "@/utils/aos";
import NextTopLoader from 'nextjs-toploader';
import Chatbot from "@/components/Chatbot";
import { Metadata } from "next"; // 1. Import Metadata

const inter = Inter({ subsets: ["latin"] });

// 2. GANTI URL INI dengan domain Vercel kamu yang sebenarnya (penting!)
const baseUrl = process.env.NEXT_PUBLIC_BASE_URL || 'https://peterabednegowijaya.vercel.app';

// 3. Konfigurasi Metadata Global
export const metadata: Metadata = {
  metadataBase: new URL(baseUrl),
  title: {
    default: 'Peter Portfolio', // Judul default jika halaman lain tidak punya judul
    template: '%s | Peter Portfolio' // Template judul, misal halaman about jadi "About | Peter Portfolio"
  },
  description: 'Portfolio profesional Peter Abednego Wijaya.',
  openGraph: {
    title: 'Peter Portfolio',
    description: 'Lihat karya dan pengalaman saya di sini.',
    url: baseUrl,
    siteName: 'Peter Portfolio',
    locale: 'id_ID',
    type: 'website',
  },
  robots: {
    index: true,
    follow: true,
  },
  // Tempat verifikasi Google Search Console (nanti diisi)
  verification: {
    google: process.env.GOOGLE_VERIFICATION_CODE,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={inter.className}>
        <NextTopLoader />
        <ThemeProvider
          attribute="class"
          enableSystem={true}
          defaultTheme="system"
        >
          <Aoscompo>
            <Header />
            {children}
            <Footer />
          </Aoscompo>
          <ScrollToTop />
          <Chatbot />
        </ThemeProvider>
      </body>
    </html>
  );
}