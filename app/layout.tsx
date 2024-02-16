import type { Metadata } from "next";
import dynamic from "next/dynamic";
import { Inter } from "next/font/google";
import { PHProvider } from "./providers";
import "./styles/globals.css";

const inter = Inter({ subsets: ["latin"] });
const PostHogPageView = dynamic(() => import("../utilities/PostHogPageView"), {
  ssr: false,
});

export const metadata: Metadata = {
  title: "Workspacious",
  description: "Curated workspace inspirations.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <PHProvider>
        <body className={inter.className}>
          <PostHogPageView />
          {children}
        </body>
      </PHProvider>
    </html>
  );
}
