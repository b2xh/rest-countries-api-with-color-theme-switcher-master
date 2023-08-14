import { HeaderComponent } from "@/components/header/headerComponent";
import "./globals.css";
import type { Metadata } from "next";
import { ThemeProvider } from "./theme-provider";

export const metadata: Metadata = {
  title:
    "Frontend Mentor - REST Countries API with color theme switcher solution",
  description:
    "Frontend Mentor - REST Countries API with color theme switcher solution",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
          <HeaderComponent />
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
