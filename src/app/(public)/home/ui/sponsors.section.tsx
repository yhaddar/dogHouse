import {Header} from "@/components/header";
import {Box} from "@radix-ui/themes";
import Image from "next/image";

const sponsors = [
    {name: "Sheba", src: "/images/sponsors/sponsor_1.png", width: 89, height: 64},
    {name: "Whiskas", src: "/images/sponsors/sponsor_2.png", width: 115, height: 114},
    {name: "Purina Bakers", src: "/images/sponsors/sponsor_3.png", width: 105, height: 46},
    {name: "Purina Felix", src: "/images/sponsors/sponsor_4.png", width: 92, height: 64},
    {name: "Good Boy", src: "/images/sponsors/sponsor_5.png", width: 93, height: 92},
    {name: "Butcher's", src: "/images/sponsors/sponsor_6.png", width: 131, height: 56},
    {name: "Pedigree", src: "/images/sponsors/sponsor_7.png", width: 117, height: 72},
];

export const SponsorsSection = () => {
    return (
        <>
            <Header title={"pet sellers"} subtitle={"proud to be part of"} href={""} />
            <Box as={"div"} aria-label="Pet food sponsors" className="container! mx-auto! grid! grid-cols-2! items-center! justify-items-center! gap-x-8! gap-y-6! px-6! pb-8! sm:grid-cols-4! lg:grid-cols-7!">
                {sponsors.map((sponsor) => (
                    <Box as="div" key={sponsor.name} className="flex! h-16! w-full! items-center! justify-center!">
                        <Image
                            src={sponsor.src}
                            alt={sponsor.name}
                            width={sponsor.width}
                            height={sponsor.height}
                            className="h-auto! w-auto! max-h-16! max-w-full! object-contain!"
                        />
                    </Box>
                ))}
            </Box>
        </>
    )
}
