import { Space_Grotesk, Inter, JetBrains_Mono } from "next/font/google";
import "./globals.css";
import { SettingsProvider } from "@/context/SettingsContext";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import CustomCursor from "@/components/CustomCursor";
import { site } from "@/lib/site";

const display = Space_Grotesk({
  subsets: ["latin"],
  weight: ["500", "700"],
  variable: "--font-display",
});
const body = Inter({ subsets: ["latin"], variable: "--font-body" });
const mono = JetBrains_Mono({
  subsets: ["latin"],
  weight: ["400", "500"],
  variable: "--font-mono",
});

export const metadata = {
  metadataBase: new URL("https://subhan-portfolio.vercel.app"),
  title: {
    default: `${site.name} — ${site.role}`,
    template: `%s — ${site.name}`,
  },
  description: site.heroOneLiner,
  openGraph: {
    title: `${site.name} — ${site.role}`,
    description: site.heroOneLiner,
    type: "website",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="dark">
      <body className={`${display.variable} ${body.variable} ${mono.variable} font-body`}>
        <SettingsProvider>
          <CustomCursor />
          <div className="relative flex min-h-screen flex-col">
            <Navbar />
            <main className="flex-1">{children}</main>
            <Footer />
          </div>
        </SettingsProvider>
      </body>
    </html>
  );
}
