import {Lilita_One, Ubuntu} from "next/font/google";
import {NextFont} from "next/dist/compiled/@next/font";

export const fontFamily1: NextFont = Ubuntu({
    weight: ["500"],
    variable: "--font-ubuntu-sans-serif",
    subsets: ["latin"]
});

export const logo: NextFont = Lilita_One({
    weight: '400',
    variable: "--font-lilita-one-sans-serif",
    subsets: ["latin"]
});