// import localFont from "next/font/local";
import "../globals.css";

import { Poppins } from "next/font/google";
import Script from "next/script";
import Footer from "../components/common/Footer";

// Custom Error Handling
// import { ErrorBoundary } from "next/dist/client/components/error-boundary";
// import GlobalErrorPage from "./global-error";

// const geistSans = localFont({
//   src: "../fonts/GeistVF.woff",
//   variable: "--font-geist-sans",
//   weight: "100 900",
// });
// const geistMono = localFont({
//   src: "../fonts/GeistMonoVF.woff",
//   variable: "--font-geist-mono",
//   weight: "100 900",
// });
const poppins = Poppins({
  weight: ["400", "500", "600", "700"],
  style: ["normal"],
  subsets: ["latin"],
  display: "swap",
});

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        // className={`${geistSans.variable} ${geistMono.variable} antialiased`}
        className={`${poppins.className}`}>
        {/* <ErrorBoundary errorComponent={GlobalErrorPage}> */}
        <main>
          {children}
          <Footer categoryList={[]} />
        </main>
        {/* </ErrorBoundary> */}
      </body>
      <Script
        strategy="afterInteractive" // default value
        id="event-driven-imports"
        src="/external-js/event-driven-imports.js"></Script>
    </html>
  );
}
