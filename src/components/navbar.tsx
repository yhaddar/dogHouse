"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import {useEffect, useState} from "react";
import {
  Cross1Icon,
  HamburgerMenuIcon,
  MagnifyingGlassIcon,
} from "@radix-ui/react-icons";
import { Box, Flex } from "@radix-ui/themes";
import { fontFamily1 } from "@/utils/fonts";
import Image from "next/image";
import {Button} from "@/components/Button";

const navigationLinks = [
  { label: "Home", href: "/" },
  { label: "Category", href: "/category" },
  { label: "Product", href: "/product" },
  { label: "About", href: "/about" },
  { label: "Contact", href: "/contact" },
];

export const Navbar = () => {
  const pathname = usePathname();
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    window.addEventListener("scroll", () => {
      console.log(window.screenY)
      if(window.scrollY > 1) {
        document.querySelector("[role=banner]")?.classList.add("bg-[#fdfdfd]!");
      } else {
        document.querySelector("[role=banner]")?.classList.remove("bg-[#fdfdfd]!");
      }
    })
  }, [])

  return (
    <Box as="div" role="banner" className="fixed inset-x-0 top-0 z-50 bg-transparent text-[#003459] flex! justify-center">
        <Box as={"div"} className={"container flex! justify-between"}>
          <Flex
              as="div"
              role="navigation"
              aria-label="Main navigation"
              display={"flex"}
              justify={"between"}
              className={`${fontFamily1.className} mx-auto flex min-h-25 w-full max-w-360 items-center justify-between gap-8 px-5 py-7 font-medium sm:px-8 xl:px-32.5`}
          >
            <Flex className="shrink-0 items-center gap-7 min-[1280px]:gap-12">
              <Link href="/" aria-label="Doggo home" className="flex w-28.75 flex-col items-center leading-none text-[#003459]">
            <span className="relative text-[30px]! font-extrabold tracking-[-1.5px]">
              Doggo
              <Image src="/images/paw-print.png" alt="" width={100} height={100} aria-hidden="true" className="absolute -right-4! -top-1.75! h-5! w-5!" />
            </span>
                <span className="mt-1! ml-0! text-[10px] font-bold tracking-[-0.1px]">Pets for Best</span>
              </Link>
            </Flex>

            <Flex className="hidden items-center gap-7 whitespace-nowrap text-[16px] font-bold leading-6 text-[#003459] min-[1280px]:flex min-[1280px]:gap-12">
              {navigationLinks.map(({ label, href }) => (
                  <Link
                      key={href}
                      href={href}
                      aria-current={pathname === href ? "page" : undefined}
                      className={`transition-colors hover:text-[#0077a8] page-hover ${pathname == href ? 'active' : ''}`}
                  >
                    {label}
                  </Link>
              ))}
            </Flex>

            <Button text={"Join the community"} link={"authentication/login"} />

            <button
                type="button"
                aria-label={menuOpen ? "Close menu" : "Open menu"}
                aria-expanded={menuOpen}
                onClick={() => setMenuOpen((open) => !open)}
                className="min-[1280px]:hidden!"
                style={{ all: "unset", display: "flex", width: 40, height: 40, flexShrink: 0, alignItems: "center", justifyContent: "center", color: "#003459", cursor: "pointer" }}
            >
              {menuOpen ? <Cross1Icon width={21} height={21} /> : <HamburgerMenuIcon width={23} height={23} />}
            </button>
          </Flex>

          {menuOpen && (
              <Box className={`${fontFamily1.className} border-t border-[#e6eaec] bg-[#fdfdfd] px-5 pb-5 pt-3 shadow-lg min-[1280px]:hidden`}>
                <label className="mb-3 flex h-11 items-center gap-3 rounded-full bg-[#f8f9f9] px-4 text-[#667479]">
                  <MagnifyingGlassIcon width={20} height={20} aria-hidden="true" />
                  <input
                      type="search"
                      aria-label="Search"
                      placeholder="Search something here!"
                      className="min-w-0 flex-1 bg-transparent text-sm text-[#003459] outline-none placeholder:text-[#99a2a5]"
                      style={{ all: "unset", flex: 1, minWidth: 0, fontSize: 14, lineHeight: "20px", color: "#003459" }}
                  />
                </label>
                <Flex direction="column">
                  {navigationLinks.map(({ label, href }) => (
                      <Link
                          key={href}
                          href={href}
                          onClick={() => setMenuOpen(false)}
                          className="border-b border-[#eef0f1] py-3 text-[16px] font-bold text-[#003459]"
                      >
                        {label}
                      </Link>
                  ))}
                </Flex>
                <Link href="/join" onClick={() => setMenuOpen(false)} className="mt-4 flex w-full justify-center rounded-full bg-[#003459] px-5 py-3 text-[16px] font-bold text-white">
                  Join the community
                </Link>
                <Flex className="mt-4 items-center justify-center gap-2 text-sm text-[#002a48]"><span aria-hidden="true" className="flex h-2.75 w-2.75 items-center justify-center rounded-full text-[7px] leading-none text-[#ffeb00]">★</span> VND</Flex>
              </Box>
          )}
        </Box>
    </Box>
  );
};
