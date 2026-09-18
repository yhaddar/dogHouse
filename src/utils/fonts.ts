import {Caveat, Roboto, Ubuntu} from "next/font/google";
import {NextFont} from "next/dist/compiled/@next/font";

export const fontFamily1: NextFont = Ubuntu({
    weight: ["500"],
    variable: "--font-ubuntu-sans-serif",
    subsets: ["latin"]
});

export const logo: NextFont = Caveat({
    weight: ['700'],
    variable: "--font-caveat-sans-serif",
    subsets: ["latin"]
});

export const fontFamily2: NextFont = Roboto({
    weight: ['400'],
    variable: "--font-roboto-serif",
    subsets: ["latin"]
});