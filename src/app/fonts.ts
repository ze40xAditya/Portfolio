import { Instrument_Serif, Cormorant_Garamond } from "next/font/google";

export const serif = Instrument_Serif({
  variable: "--font-serif",
  subsets: ["latin"],
  weight: ["400"],
  style: ["normal", "italic"],
  display: "swap",
});

export const quoteFont = Cormorant_Garamond({
  variable: "--font-quote",
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  style: ["italic"],
  display: "swap",
});
