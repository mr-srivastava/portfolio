import { Sidebar } from "@/components/Sidebar";
import "./globals.css";
import type { Metadata } from "next";
import { Footer } from "@/components/Footer";
import { cn } from "@/lib/utils";
import { Montserrat, Poppins } from "next/font/google";

// Load the fonts
const montserrat = Montserrat({
  subsets: ["latin"],
  weight: "400", // Adjust weights if necessary
  variable: "--font-montserrat", // Define a custom CSS variable
});

const poppins = Poppins({
  subsets: ["latin"],
  weight: "400",
  variable: "--font-poppins",
});

export const metadata: Metadata = {
  title: "Aadarsh Srivastava - Developer",
  description:
    "Aadarsh Srivastava is a developer, writer and speaker. He is a digital nomad and travels around the world while working remotely.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={cn("", montserrat.variable, poppins.variable)}>
      <body
        className={cn(
          "flex antialiased h-screen overflow-hidden bg-background-50"
        )}
      >
        <Sidebar className="bg-background-50" />
        <div className="lg:pl-2 lg:pt-2 bg-background-50 flex-1 overflow-y-auto">
          <div className="flex-1 bg-background-100 min-h-screen lg:rounded-tl-xl border border-transparent  overflow-y-auto">
            {children}
            <Footer />
          </div>
        </div>
      </body>
    </html>
  );
}
