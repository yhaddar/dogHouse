import {Box, Flex, Heading, Text} from "@radix-ui/themes"
import {fontFamily1, fontFamily2} from "@/utils/fonts";
import React from "react";
import Link from "next/link";
import {ChevronRightIcon} from "@radix-ui/react-icons";
import {headerProps} from "@/utils/interfaces";

export const Header = (props: headerProps) => {
    return (
        <>
            <Flex as={"div"} display={"flex"} justify={"center"} py={"2"} align={"center"}>
                <Box className={"container  mx-auto"} py={"2"}>
                    <Flex display={"flex"} justify={"between"}>
                        <Box as={"div"}>
                            <Text as={"p"} className={`text-black ${fontFamily2.className} text-md italic!`}>{props.subtitle}</Text>
                            <Heading as={"h2"} className={`clr-text ${fontFamily1.className} capitalize font-bold!`}>{props.title}</Heading>
                        </Box>
                        {
                            props.href !== "" ? <Box as={"div"} className={""} alignSelf={"center"}>
                                <Link
                                    href={props.href}
                                    className={`clr-text active:scale-95! flex! items-center! gap-1! before:mb-0 hover:text-[#003459] cursor-pointer! ${fontFamily1.className} italic! text-sm!`}>
                                    View More <ChevronRightIcon />
                                </Link>
                            </Box> : null
                        }
                    </Flex>
                </Box>
            </Flex>
        </>
    )
}