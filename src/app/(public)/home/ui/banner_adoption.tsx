import {PlayIcon} from "@radix-ui/react-icons";
import {Box, Flex, Heading, Text} from "@radix-ui/themes";
import Image from "next/image";
import {Button} from "@/components/Button";
import {fontFamily1} from "@/utils/fonts";
import pawprint from "../../../../../public/images/pawprint.png";

const adoptionImage = "/images/home/paw-hand-human.png";

export const BannerAdoption = () => {
    return (
        <Box className="flex! w-full! justify-center! px-5! py-12!">
            <Box
                role="region"
                aria-label="Pet adoption"
                className={`${fontFamily1.className} relative mx-auto flex! min-h-94.5! w-full! max-w-295! flex-row! overflow-hidden! rounded-[20px]! bg-[#FCEED5]! text-[#002A48]! max-lg:flex-col!`}
            >
                <Box className="relative flex! basis-[56%]! flex-col! justify-center! overflow-hidden! px-12! py-10! max-lg:order-2! max-lg:px-7! max-lg:py-8!">
                    <Box aria-hidden="true" className="absolute -left-28! -top-44! h-72! w-72! rotate-25! rounded-[64px]! bg-white/35!" />
                    <Box className="relative z-10!">
                       <Box as={"div"} className={"flex! gap-2"}>
                           <Heading as="h2" className="text-[42px]! font-extrabold! leading-tight! tracking-[-1px]! text-[#002A48]! max-sm:text-[34px]!">
                               Adoption
                           </Heading>
                           <Image src={pawprint} width={50} height={100} alt={"paw print of dog for the title adoption"} />
                       </Box>
                        <Heading as="h3" className="mt-1! text-[30px]! font-bold! leading-tight! tracking-[-0.7px]! text-[#002A48]! max-sm:text-[26px]!">
                            We Need Help. So Do They.
                        </Heading>
                        <Text as="p" className="mt-5! block! max-w-120! text-[15px]! leading-6! text-[#242B33]!">
                            Adopt a pet and give it a home, it will love you back unconditionally.
                        </Text>
                        <Flex className="mt-6! flex-wrap! items-center! gap-3!">
                            <Button text="Explore Now" link="category" textSize="14" />
                            <Button withColor={false} text="View Intro" link="about" textSize="13" Icon={PlayIcon} />
                        </Flex>
                    </Box>
                </Box>
                <Box className="relative flex! basis-[44%]! items-end! justify-center! overflow-hidden! max-lg:order-1! max-lg:min-h-70!">
                    <Box aria-hidden="true" className="absolute -right-28! -top-56! h-180! w-[118%]! rotate-[-25deg]! rounded-[100px]! bg-[#FFB775]!" />
                    <Box aria-hidden="true" className="absolute -right-12! -top-32! h-72! w-72! rounded-full! bg-[#F7DBA7]! opacity-70!" />
                    <Image
                        src={adoptionImage}
                        width={700}
                        height={900}
                        alt="A person gently holding a dog's paw"
                        className="relative z-10! block! h-auto! w-full! max-w-145! object-contain! object-bottom!"
                    />
                </Box>
            </Box>
        </Box>
    )
}
