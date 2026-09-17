import {Box, Button, Flex} from "@radix-ui/themes";
import Image from "next/image";
import logoImage from "../../public/images/paw-print.png";
import {fontFamily1} from "@/utils/fonts";
import React from "react";
import Link from "next/link";

export const Navbar = async () => {

    const pages: string[] = ["home","category", "about", "contact"];
    return (
        <>
            <nav className={"w-full flex justify-center fixed"}>
                <Box as={"div"} className={"container py-2!"}>
                    <Flex as={"div"} display={"flex"} gap={"2"} justify={"between"} align={"center"}>
                        <Box className={""}>
                            <Flex as={"div"} width={"100%"} justify={"between"}>
                                <Box width={"18%"}>
                                    <Image
                                        src={logoImage}
                                        alt={"logo image"}
                                        loading={"eager"} />
                                </Box>
                            </Flex>
                        </Box>
                        <Box className={""} width={"80%"}>
                            <Flex justify={"between"} align={"center"} height={"100%"}>
                                {
                                    pages.map((page: string, index: number) =>
                                        <Link
                                            key={index}
                                            href={`${page === "home" ? '/' : `/${page}`}`}
                                            className={`${fontFamily1.className} capitalize page-hover cursor-pointer active:scale-95`}
                                        >{page}</Link>
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
                                       className={"bg-blue-900! text-white! py-6! px-6! active:scale-95! cursor-pointer!"}
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