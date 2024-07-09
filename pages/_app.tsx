import "@/styles/globals.css";
import type { AppProps } from "next/app";
import { ThemeProvider } from "@material-tailwind/react";
import { Montserrat } from "next/font/google";

const monts = Montserrat({ subsets: ["latin"] });
export default function App({ Component, pageProps }: AppProps) {
  return (
    <ThemeProvider>
      <div className={monts.className}>
        <Component {...pageProps} />
      </div>
    </ThemeProvider>
  );
}
