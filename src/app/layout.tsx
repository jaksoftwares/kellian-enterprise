import type { Metadata } from "next";
import "./globals.css";
import { siteConfig } from "../lib/site-config";
import { Fira_Sans } from "next/font/google";
import { Toaster } from "../components/ui/toaster";
import { ThemeProvider } from "../components/core/utils/ThemeProvider";
import { ModalProvider } from "../hooks/use-modal";
import { Footer, Header } from "../components";

const firaSans = Fira_Sans({
  weight: ["200", "400", "700"],
  subsets: ["latin"],
});

export const metadata: Metadata = siteConfig.nextMetada;

const RootLayout = ({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) => {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${firaSans.className} flex flex-col min-h-screen`}
        suppressHydrationWarning
      >
        <ThemeProvider
          attribute="class"
          defaultTheme="light"
          enableSystem
          disableTransitionOnChange
          storageKey="theme-mode"
          themes={["light", "dark"]}
        >
          <ModalProvider>
            <Header />
            <div className="flex-grow my-12 lg:my-24">{children}</div>
            <Footer />
            <Toaster />
          </ModalProvider>
        </ThemeProvider>
      </body>
    </html>
  );
};

export default RootLayout;
