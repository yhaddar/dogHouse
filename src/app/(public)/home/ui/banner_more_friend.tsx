import { PlayIcon } from "@radix-ui/react-icons";
import {Box, Flex, Heading, Text} from "@radix-ui/themes";
import Image from "next/image";
import { fontFamily1 } from "@/utils/fonts";
import {Button} from "@/components/Button";
import React from "react";

const bannerImage = "/images/home/banner-more-friend.png";

export const BannerMoreFriend = () => (
  <Box as={"div"} className={"flex! justify-center"}>
    <Box
        role="region"
        aria-label="One more friend"
        className={`${fontFamily1.className} mx-auto mt-12 flex! h-94.5 w-[calc(100%-40px)] max-w-295 flex-row overflow-hidden rounded-[20px] bg-[#003459] text-[#003459] max-lg:h-auto max-lg:flex-col`}
    >
      <Box className="relative flex basis-[40%] flex-col justify-end max-lg:min-h-70">
        <Box
            aria-hidden="true"
            className="absolute inset-x-0 bottom-0! h-full! top-[20%] z-2 w-[200%] bg-[url('/images/home/banner-rect-left.png')] bg-cover"
        />
        <Image
            src={bannerImage}
            width={800}
            height={900}
            alt="A woman lifting her dog for a kiss"
            className="absolute z-3 block w-full! bottom-0!  max-w-full! object-contain object-bottom max-lg:mx-auto max-lg:h-auto max-lg:w-full!"
        />
      </Box>
      <Box className="relative flex! basis-[60%] flex-col justify-center overflow-hidden py-5 pl-5 pr-20 text-right max-lg:px-5 max-lg:py-8">
        <Box
            aria-hidden="true"
            className="absolute inset-y-0 left-[10%] right-0 rounded-[20px] bg-[url('/images/home/banner-rect-right.svg')] bg-cover bg-center"
        />
        <Box className="relative z-10 w-full flex! flex-wrap justify-end px-5! py-2!">
          <Heading as="h1" className={`text-[42px]! font-extrabold leading-20! capitalize tracking-[-1px] text-[#002a48] max-lg:text-5xl max-sm:text-[38px] max-sm:leading-11 ${fontFamily1.className}`}>
            One more friend
          </Heading>
          <Heading as="h2" className="text-[36px]! font-bold leading-1! capitalize tracking-[-0.7px] text-[#002a48] max-lg:text-[34px] max-lg:leading-10.5 max-sm:text-[26px] max-sm:leading-8">
            Thousands more fun!
          </Heading>
          <Text as="p" className="mt-7! text-[15px]! max-w-120 text-base leading-6! text-[#242b33] max-sm:max-w-77.5 max-sm:text-sm">
            Having a pet means you have more joy, a new friend, a happy person
            who will always be with you to have fun. We have 200+ different pets
            that can meet your needs!
          </Text>
          <Flex className="mt-5! flex-wrap items-center gap-3 max-sm:mt-5">
            <Button withColor={false} text={"View Intro"} link={"about"} px={"7"} textSize={"13"} Icon={PlayIcon} />
            <Button  text={"Explore Now"} link={"category"} px={"8"} textSize={"14"} />
          </Flex>
        </Box>
      </Box>

    </Box>
  </Box>
);
