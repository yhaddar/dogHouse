import {Box, Flex, Heading, Text} from "@radix-ui/themes";
import bgImage from "../../public/images/home-cover.jpg";
import {fontFamily1} from "@/utils/fonts";

export const Card = () => {
    return (
        <>
            <Flex display={"flex"} justify={"center"}>
                <Box as={"div"} className={"container"}>
                    <Flex justify={"between"}>
                        <Box as={"div"} className={"rounded-lg w-[23%] flex justify-center shadow-lg shadow-black/15"} justifySelf={"center"} pb={"3"}>
                            <Box
                                as={"div"}
                                className={"rounded-md mx-auto w-[95%] h-56 bg-cover relative bg-origin-border bg-center bg-no-repeat"} mx={"auto"} mt={"2"}
                                style={{ backgroundImage: `url('${bgImage.src}')` }}></Box>
                            <Box
                                as={"div"}
                                className={`rounded-md mx-auto w-[95%] ${fontFamily1.className}`} mx={"auto"} mt={"2"}>
                                <Heading as={"h6"} className={"text-[16px]!"}>MO221 - Pomerania While</Heading>
                            </Box>
                            <Box as={"div"} className={`rounded-md mx-auto w-[95%] ${fontFamily1.className}`} mx={"auto"} mt={"2"}>
                                <Text as={"p"} className={"text-[12px]!"}>
                                    <Text as={"span"} className={"opacity-70!"}>Gender : </Text><Text as={"span"} className={"opacity-70! font-bold"}>Male </Text> · <Text as={"span"} className={"opacity-70!"}>Age : </Text><Text as={"span"} className={"opacity-70! font-bold"}>02 Month</Text>
                                </Text>
                            </Box>
                            <Box
                                as={"div"}
                                className={`rounded-md mx-auto w-[95%] ${fontFamily1.className}`} mx={"auto"} mt={"2"}>
                                <Heading as={"h6"} className={"text-[16px]!"}>2 22 000.00 DH</Heading>
                            </Box>
                        </Box>
                    </Flex>
                </Box>
            </Flex>
        </>
    )
}