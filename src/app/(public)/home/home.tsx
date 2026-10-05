import Link from "next/link";
import { PlayIcon } from "@radix-ui/react-icons";
import { Box, Flex, Heading, Text } from "@radix-ui/themes";
import { fontFamily1 } from "@/utils/fonts";

const image = "/images/home/5c012.png";

export const Home = () => (
  <Box role="main" className={`${fontFamily1.className} w-full bg-[#fdfdfd] text-[#00171f]`}>
    <Box role="region" aria-label="Hero" className="relative isolate h-[695px] overflow-hidden rounded-b-[40px] bg-[linear-gradient(115deg,#fceed5_8%,#fceed5_76%,#ffe7ba_100%)] max-lg:h-[650px]">
      <Box aria-hidden="true" className="absolute -left-[335px] -top-[697px] h-[845px] w-[845px] rotate-[25deg] rounded-[100px] bg-[#f7dba7]" />
      <Box aria-hidden="true" className="absolute left-[41%] top-[180px] h-[635px] w-[635px] rotate-[25deg] rounded-[100px] bg-[#f7dba7] max-lg:left-[38%]" />
      <Box aria-hidden="true" className="absolute left-[42%] top-[268px] h-[635px] w-[635px] rotate-[9deg] rounded-[100px] bg-[#003459] max-lg:left-[38%]" />
      <Box aria-hidden="true" className="absolute -left-[90px] top-[564px] h-[635px] w-[635px] rotate-[56deg] rounded-[100px] bg-[#f7dba7]/40" />

      <img
        src={image}
        alt="A woman smiling as she holds a corgi"
        className="absolute left-[36.8%] top-[84px] h-[693px] w-[65.6%] max-w-none object-cover object-center max-lg:left-[34%] max-lg:top-[150px] max-lg:h-[500px] max-lg:w-[80%] max-sm:left-[26%] max-sm:top-[250px] max-sm:h-[400px] max-sm:w-[95%]"
      />

      <Box className="absolute left-[max(24px,calc((100vw-1180px)/2))] top-[180px] z-10 max-w-[500px] max-lg:left-8 max-lg:top-[145px] max-sm:top-[132px]">
        <Heading as="h1" className="text-[60px] font-extrabold leading-[68px] capitalize tracking-[-1px] text-[#002a48] max-lg:text-5xl max-sm:text-[38px] max-sm:leading-[44px]">
          One more friend
        </Heading>
        <Heading as="h2" className="text-[46px] font-bold leading-[60px] capitalize tracking-[-0.7px] text-[#002a48] max-lg:text-[34px] max-lg:leading-[42px] max-sm:text-[26px] max-sm:leading-8">
          Thousands more fun!
        </Heading>
        <Text as="p" className="mt-4 max-w-[480px] text-base leading-6 text-[#242b33] max-sm:max-w-[310px] max-sm:text-sm">
          Having a pet means you have more joy, a new friend, a happy person who will always be with you to have fun. We have 200+ different pets that can meet your needs!
        </Text>
        <Flex className="mt-[70px] flex-wrap items-center gap-3 max-sm:mt-5">
          <Link href="/about" className="inline-flex h-11 items-center gap-2 rounded-full border-[1.5px] border-[#003459] px-7 text-sm font-medium text-[#003459] transition-colors hover:bg-[#003459] hover:text-white">
            View Intro <PlayIcon width={18} height={18} />
          </Link>
          <Link href="/category" className="inline-flex h-11 items-center justify-center rounded-full bg-[#003459] px-7 text-sm font-bold text-[#fdfdfd] transition-colors hover:bg-[#002a48]">
            Explore Now
          </Link>
        </Flex>
      </Box>
    </Box>
  </Box>
);
