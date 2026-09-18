"use client";
import {Box, Button, Flex, Heading} from "@radix-ui/themes";
import {fontFamily1, logo} from "@/utils/fonts";
import React from "react";
import Link from "next/link";
import {usePathname} from "next/navigation";
import {pages} from "@/utils/interfaces";

export const Navbar = () => {

    const pages: pages[] = [
        {
            page: "home",
            path: "/",
        },
        {
            page: "category",
            path: "/category",
        },
        {
            page: "about",
            path: "/about",
        },
        {
            page: "contact",
            path: "/contact",
        },
    ];

    const pathname: string = usePathname();

    return (
        <>
            <nav className={"w-full flex justify-center fixed header bg-primary bg-border-bottom z-10"}>
                <Box as={"div"} className={"container py-2!"}>
                    <Flex as={"div"} display={"flex"} gap={"2"} justify={"between"} align={"center"}>
                        <Box className={""} width={"36%"}>
                            <Flex as={"div"} width={"100%"} justify={"between"}>
                                <Box width={"100%"} className={""}>
                                    <Heading
                                        as={"h2"}
                                        size={"8"}
                                        className={`${logo.className} clr-text`}>
                                        Woofy
                                    </Heading>
                                </Box>
                            </Flex>
                        </Box>
                        <Box className={""} width={"80%"}>
                            <Flex justify={"between"} align={"center"} height={"100%"}>
                                {
                                    pages.map((page: pages, index: number) =>
                                        <Link
                                            key={index}
                                            href={`${page.path}`}
                                            className={`${fontFamily1.className} ${ page.path === pathname ? 'active' : ''} capitalize page-hover cursor-pointer active:scale-95`}
                                        >{page.page}</Link>
                                    )
                                }
                            </Flex>
                        </Box>
                        <Flex width={"35%"} height={"full"} display={"flex"} justify={"end"} align={"center"}>
                           <Flex as={"div"} display={"flex"} justify={"center"} align={"center"} className={""}>
                               <Box>
                                   <Button
                                       size="2"
                                       variant="surface"
                                       className={"bg-btn text-white! py-6! px-6! active:scale-95! cursor-pointer!"}
                                       radius={"large"}>
                                       Join the community
                                   </Button>
                               </Box>
                           </Flex>
                        </Flex>
                    </Flex>
                </Box>
            </nav>
        </>
    )
}