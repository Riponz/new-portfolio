import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "Diganta Biswas | Full-Stack Developer",
  description:
    "Portfolio of Diganta Biswas — showcasing web development and software solutions. Explore skills, projects, and contact details.",
  keywords: [
    "Diganta Biswas",
    "Web Developer",
    "Portfolio",
    "JavaScript",
    "Python",
    "Next.js",
    "React",
  ],
  authors: [{ name: "Diganta Biswas" }],

  // ✅ Open Graph / Facebook
  openGraph: {
    type: "website",
    url: "https://digantabiswas.tech/",
    title: "Diganta Biswas | Full-Stack Developer",
    description:
      "Explore the portfolio of Diganta Biswas — showcasing full-stack web apps and innovative projects.",
    // images: ["https://yourdomain.com/preview.png"], // uncomment when you add a preview image
  },

  // ✅ Twitter metadata (optional but recommended)
  twitter: {
    card: "summary_large_image",
    title: "Diganta Biswas | Full-Stack Developer",
    description:
      "Explore the portfolio of Diganta Biswas — showcasing full-stack web apps and innovative projects.",
    // images: ["https://yourdomain.com/preview.png"],
    creator: "@yourTwitterHandle",
  },

  // ✅ Favicons (optional if added in `public/`)
  icons: {
    icon: "/favicon.ico",
  },
};


export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased relative`}
      >
        {children}
      </body>
    </html>
  );
}
