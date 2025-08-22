import { Montserrat } from "next/font/google";
import Head from "next/head";
import "./globals.css";
import { ShipmentProvider } from "@/contexts/ShipmentContext";
import Navbar from "@/components/Navbar/Navbar";
import { Toaster } from "sonner";

const montserrat = Montserrat({
  subsets: ["latin"],
  // You can adjust the weights you need
  weight: ["300", "400", "500", "600", "700"],
  // Optional: if you want to specify font display
  display: "swap",
});

export const metadata = {
  title: "LogiTrackExpress",
  description: "An International Transport and Logistic company",
  icons: {
    icon: "/logo.png",
    shortcut: "/logo.png",
    apple: "/logo.png",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <Head>
        <title>{metadata.title}</title>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <link rel="icon" href="/logo.png" />
        <link rel="shortcut icon" href="/logo.png" />
        <link rel="apple-touch-icon" href="/logo.png" />
      </Head>
      <body className={montserrat.className}>
        <ShipmentProvider>
          <Toaster position="top-right" richColors />
          {children}
          <script
            src="//code.tidio.co/ygyve4asnfwvzgxptvdmuylvhxblq04i.js"
            async
          ></script>
        </ShipmentProvider>
      </body>
    </html>
  );
}
