import Image from "next/image";
import Link from "next/link";
import {InstagramLogoIcon, PlayIcon, TwitterLogoIcon} from "@radix-ui/react-icons";
import {fontFamily1} from "@/utils/fonts";
import {Flex} from "@radix-ui/themes";

const footerLinks = [
    {label: "Home", href: "/"},
    {label: "Category", href: "/category"},
    {label: "product", href: "/product"},
    {label: "About", href: "/about"},
    {label: "Contact", href: "/contact"},
];

export const Footer = () => {
    return (
        <footer className={`${fontFamily1.className} mt-12! rounded-t-[40px] bg-[#FCEED5]! px-5! pb-6! pt-10! text-[#00171F]!`}>
            <div className="mx-auto! max-w-295!">
                <div className="flex! items-center! justify-between! gap-8! rounded-2xl! bg-[#003459]! p-8! max-md:flex-col! max-md:items-stretch! max-md:p-5!">
                    <h2 className="max-w-90! text-[20px]! font-bold! leading-7! text-white! max-md:max-w-none!">
                        Register Now So You Don&apos;t Miss Our Programs
                    </h2>
                    <div role="group" aria-label="Email newsletter signup" className="flex! w-[60%]! items-center! gap-3! rounded-[14px]! bg-white! p-3! max-md:w-full! max-sm:flex-col!">
                        <input
                            type="email"
                            aria-label="Email address"
                            placeholder="Enter your Email"
                            className="h-11! min-w-0! flex-1! rounded-lg! border border-[#CCD1D2]! px-4! text-sm! text-[#00171F]! outline-none! max-sm:w-full!"
                        />
                        <button type="button" className="h-11! shrink-0! rounded-lg! bg-[#003459]! px-5! text-sm! font-semibold! text-white! max-sm:w-full!">
                            Subscribe Now
                        </button>
                    </div>
                </div>

                <div className="flex! items-center! justify-between! gap-5! py-8! max-sm:flex-col!">
                    <nav aria-label="Footer navigation">
                        <ul className="flex! flex-wrap! items-center! gap-x-10! gap-y-3! text-sm! font-semibold! max-sm:justify-center!">
                            {footerLinks.map((link) => (
                                <li key={link.label}>
                                    <Link href={link.href} className="page-hover transition-colors! hover:text-[#003459]!">{link.label}</Link>
                                </li>
                            ))}
                        </ul>
                    </nav>
                    <div aria-label="Social media" className="flex! items-center! gap-6!">
                        <span aria-label="Facebook" title="Facebook" className="text-lg! font-bold!">f</span>
                        <TwitterLogoIcon aria-label="Twitter" width={18} height={18} />
                        <InstagramLogoIcon aria-label="Instagram" width={18} height={18} />
                        <span aria-label="YouTube" title="YouTube" className="flex! h-5! w-6! items-center! justify-center! rounded-[5px]! bg-[#00171F]! text-white!">
                            <PlayIcon width={12} height={12} />
                        </span>
                    </div>
                </div>

                <div className="border-t! border-[#CCD1D2]! pt-5!">
                    <div className="grid! grid-cols-3! items-center! gap-4! text-xs! text-[#667479]! max-sm:grid-cols-1! max-sm:justify-items-center!">
                        <p className="max-sm:order-3!">© 2026 Doggo. All rights reserved.</p>
                        <Flex className="flex! justify-center!">
                            <Link href="/" aria-label="Doggo home" className="flex w-28.75 flex-col items-center leading-none text-[#003459]">
                                <span className="relative text-[30px]! font-extrabold tracking-[-1.5px]">
                                  Doggo
                                  <Image src="/images/paw-print.png" alt="" width={100} height={100} aria-hidden="true" className="absolute -right-4! -top-1.75! h-5! w-5!" />
                                </span>
                                <span className="mt-1! ml-0! text-[10px] font-bold tracking-[-0.1px]">Pets for Best</span>
                            </Link>
                        </Flex>
                        <div className="flex! justify-self-end! gap-6! max-sm:order-2! max-sm:justify-self-center!">
                            <Link href="/terms-of-service">Terms of Service</Link>
                            <Link href="/privacy-policy">Privacy Policy</Link>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    )
}
