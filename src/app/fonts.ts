import {
  Montserrat,
  Open_Sans,
  Plus_Jakarta_Sans,
  Work_Sans,
  Lora,
  Roboto,
} from "next/font/google";

export const montserrat = Montserrat({
  variable: "--font-montserrat",
  subsets: ["latin"],
  weight: ["400", "600", "700"],
});

export const openSans = Open_Sans({
  variable: "--font-open-sans",
  subsets: ["latin"],
  weight: ["400", "600", "700"],
});

export const jakarta = Plus_Jakarta_Sans({
  subsets: ["latin"],
  weight: ["400", "600", "700"],
});

export const workSans = Work_Sans({
  subsets: ["latin"],
  weight: ["400", "600", "700"],
});

export const lora = Lora({
  subsets: ["latin"],
  weight: ["400", "600", "700"],
});

export const roboto = Roboto({
  subsets: ["latin"],
  weight: ["400", "600", "700"],
});
