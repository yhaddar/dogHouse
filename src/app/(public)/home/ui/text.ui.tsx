import {Flex, Box, Heading, Text, Button} from "@radix-ui/themes";
import {fontFamily1} from "@/utils/fonts";
import React from "react";
import {PlayIcon} from "@radix-ui/react-icons";

export const TextUI = () => {
    return (
        <>
            <Flex as={"div"} display={"flex"} justify={"center"} align={"center"} width={"100%"} height={"100%"}>
              <Box className={"z-10"} width={"60%"}>
                    <Heading as={"h1"} align={"center"} className={`text-white ${fontFamily1.className} capitalize text-[60px]!`} style={{ lineHeight: 1 }}>
                        one more friend
                    </Heading>
                    <Heading align={"center"} as={"h2"} className={`text-white ${fontFamily1.className} capitalize text-[35px]!`} style={{ lineHeight: 1 }}>
                        thousands more fun!
                    </Heading>
                  <Text as={"p"} align={"center"} className={"text-white opacity-70"}>
                      {'                      Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since 1966, when designers at Letraset and James Mosley, the librarian at St Bride Printing Library in London, took a 1914 Cicero translation and scrambled it to make dummy text for Letraset\'s Body Type sheets.\n'}
                  </Text>
                  <Flex as={"div"} display={"flex"} gap={"2"} justify={"center"} align={"center"} mt={"2"}>
                      <Button
                          size="2"
                          variant="surface"
                          className={"text-white! py-6! px-8! active:scale-95! cursor-pointer! bg-transparent! border! bg-border"}
                          radius={"large"}>
                          View Intro <PlayIcon />
                      </Button>
                      <Button
                          size="2"
                          variant="surface"
                          className={"bg-btn text-white! py-6! px-8! active:scale-95! cursor-pointer!"}
                          radius={"large"}>
                          Explore now
                      </Button>
                  </Flex>
              </Box>
            </Flex>
        </>
    )
}