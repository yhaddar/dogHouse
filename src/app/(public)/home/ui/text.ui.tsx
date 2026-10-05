import {Flex, Box, Heading, Text} from "@radix-ui/themes";
import {fontFamily1} from "@/utils/fonts";
import React from "react";
import {PlayIcon} from "@radix-ui/react-icons";
import Image from "next/image";
import {Button} from "@/components/Button";

const imagePng = "/images/home/5c012.png";


export const TextUI = () => {
    return (
        <>
            <Box role="main" className={`${fontFamily1.className} w-full bg-[#fdfdfd] flex items-center text-[#00171f]`}>
                <Box role="region" aria-label="Hero" className="relative h-screen! isolate overflow-hidden rounded-b-[40px] bg-[linear-gradient(115deg,#fceed5_8%,#fceed5_76%,#ffe7ba_100%)] max-lg:h-162.5">
                    <Box aria-hidden="true" className="absolute -left-83.75 -top-174.25 h-211.25 w-211.25 rotate-25 rounded-[100px] bg-[#f7dba7]" />
                    <Box aria-hidden="true" className="absolute left-[41%] top-45 h-158.75 w-158.75 rotate-25 rounded-[100px] bg-[#f7dba7] max-lg:left-[38%]" />
                    <Box aria-hidden="true" className="absolute left-[42%] top-67 h-158.75 w-158.75 rotate-[9deg] rounded-[100px] bg-[#003459] max-lg:left-[38%]" />
                    <Box aria-hidden="true" className="absolute -left-22.5 top-141 h-158.75 w-158.75 rotate-56 rounded-[100px] bg-[#f7dba7]/40" />

                    <Image
                        src={imagePng}
                        width={4096}
                        height={2731}
                        loading={"lazy"}
                        alt="A woman smiling as she holds a corgi"
                        className="absolute left-[36.8%] bottom-0 h-173.25 w-[65.6%] max-w-none object-cover object-center max-lg:left-[34%] max-lg:top-37.5 max-lg:h-125 max-lg:w-[80%] max-sm:left-[26%] max-sm:top-62.5 max-sm:h-100 max-sm:w-[95%]"
                    />

                    <Box className="absolute left-[max(24px,calc((100vw-1180px)/2))] top-45 z-10 max-w-125 max-lg:left-8 max-lg:top-36.25 max-sm:top-33">
                        <Heading as="h1" className={`text-[60px]! font-extrabold leading-20! capitalize tracking-[-1px] text-[#002a48] max-lg:text-5xl max-sm:text-[38px] max-sm:leading-11 ${fontFamily1.className}`}>
                            One more friend
                        </Heading>
                        <Heading as="h2" className="text-[46px]! font-bold leading-15! capitalize tracking-[-0.7px] text-[#002a48] max-lg:text-[34px] max-lg:leading-10.5 max-sm:text-[26px] max-sm:leading-8">
                            Thousands more fun!
                        </Heading>
                        <Text as="p" className="mt-4 max-w-120 text-base leading-6! text-[#242b33] max-sm:max-w-77.5 max-sm:text-sm">
                            Having a pet means you have more joy, a new friend, a happy person who will always be with you to have fun. We have 200+ different pets that can meet your needs!
                        </Text>
                        <Flex className="mt-5! flex-wrap items-center gap-3 max-sm:mt-5">
                            <Button withColor={false} text={"View Intro"} link={"about"} px={"7"} textSize={"13"} Icon={PlayIcon} />
                            <Button  text={"Explore Now"} link={"category"} px={"8"} textSize={"14"} />
                        </Flex>
                    </Box>
                </Box>
            </Box>

        </>
    )
}