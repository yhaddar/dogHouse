"use client";
import {Box, Button, Flex, Heading} from "@radix-ui/themes";
import {fontFamily1, fontFamily2, logo} from "@/utils/fonts";
import React from "react";
import Link from "next/link";
import {usePathname} from "next/navigation";
import {pages} from "@/utils/interfaces";
import {Dialog, unstable_PasswordToggleField as PasswordToggleField, Tabs} from "radix-ui";
import {Cross2Icon, EyeClosedIcon, EyeOpenIcon} from "@radix-ui/react-icons";

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
            page: "products",
            path: "/products",
        },
        {
            page: "blogs",
            path: "/blogs",
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
            <nav className={"w-full flex justify-center fixed header bg-primary bg-border-bottom z-1"}>
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
                                   <Dialog.Root>
                                       <Dialog.Trigger asChild>
                                           <Button
                                               size="2"
                                               variant="surface"
                                               className={"bg-btn text-white! py-6! px-6! active:scale-95! cursor-pointer!"}
                                               radius={"large"}>
                                               Join the community
                                           </Button>
                                       </Dialog.Trigger>
                                       <Dialog.Portal>
                                           <Dialog.Overlay className="DialogOverlay" />
                                           <Dialog.Content className="DialogContent">
                                               <Dialog.Title className={`DialogTitle ${fontFamily1.className}`}>Join the community</Dialog.Title>
                                               <Dialog.Description className={`DialogDescription ${fontFamily2.className}`}>
                                                   Welcome back! Sign in to continue shopping for your furry friend.
                                               </Dialog.Description>
                                               <Tabs.Root className="TabsRoot w-full!" defaultValue="tab1">
                                                   <Tabs.List className="TabsList" aria-label="Manage your account">
                                                       <Tabs.Trigger className={`${fontFamily2.className} TabsTrigger bg-transparent! text-white!`} value="tab1">
                                                           Login
                                                       </Tabs.Trigger>
                                                       <Tabs.Trigger className={`${fontFamily2.className} TabsTrigger bg-transparent! text-white!`} value="tab2">
                                                           Register
                                                       </Tabs.Trigger>
                                                   </Tabs.List>
                                                   <Tabs.Content className="TabsContent bg-transparent!" value="tab1">
                                                       <fieldset className="Fieldset">
                                                           <label className={`Label text-white! ${fontFamily2.className}!`} htmlFor="email">
                                                               Email
                                                           </label>
                                                           <input className={`Input text-white! ${fontFamily2.className}!`} id="email" placeholder="email@gmail.com" />
                                                       </fieldset>
                                                       <fieldset className="Fieldset">
                                                           <label className={`Label text-white! ${fontFamily2.className}!`} htmlFor="password">
                                                               Password
                                                           </label>
                                                           <PasswordToggleField.Root>
                                                               <div className="Input flex flex-nowrap items-center justify-center rounded-sm text-white bg-black-a2 shadow-[0_0_0_1px_var(--black-a6)] px-[0.75em] pr-2.25 h-9 gap-2 hover:shadow-[0_0_0_1px_black]">
                                                                   <PasswordToggleField.Input className="w-full! all-[unset] text-white! box-border h-4.5 text-[15px]  leading-none selection:bg-blackA6 selection:text-white" />
                                                                   <PasswordToggleField.Toggle className="all-[unset] box-border h-4.5 text-[15px] text-inherit leading-none flex items-center justify-center aspect-square rounded-[0.5px] focus-visible:outline-2 focus-visible:outline-accent-9 focus-visible:outline-offset-[2px]">
                                                                       <PasswordToggleField.Icon
                                                                           color={"white"}
                                                                           visible={<EyeOpenIcon />}
                                                                           hidden={<EyeClosedIcon />}
                                                                       />
                                                                   </PasswordToggleField.Toggle>
                                                               </div>
                                                           </PasswordToggleField.Root>
                                                       </fieldset>
                                                       <Box as={"div"}
                                                            style={{ display: "flex", marginTop: 25, justifyContent: "flex-end" }}
                                                       >
                                                           <Dialog.Close asChild>
                                                               <button className="Button green cursor-pointer!">Login</button>
                                                           </Dialog.Close>
                                                       </Box>
                                                   </Tabs.Content>
                                                   <Tabs.Content className="TabsContent bg-transparent!" value="tab2">
                                                       <fieldset className="Fieldset">
                                                           <label className={`Label text-white! ${fontFamily2.className}!`} htmlFor="email">
                                                               Full Name
                                                           </label>
                                                           <input className={`Input text-white! ${fontFamily2.className}!`} id="email" placeholder="John Doe" />
                                                       </fieldset>
                                                       <fieldset className="Fieldset">
                                                           <label className={`Label text-white! ${fontFamily2.className}!`} htmlFor="email">
                                                               Email
                                                           </label>
                                                           <input className={`Input text-white! ${fontFamily2.className}!`} id="email" placeholder="email@gmail.com" />
                                                       </fieldset>
                                                       <fieldset className="Fieldset">
                                                           <label className={`Label text-white! ${fontFamily2.className}!`} htmlFor="password">
                                                               Password
                                                           </label>
                                                           <PasswordToggleField.Root>
                                                               <div className="Input flex flex-nowrap items-center justify-center rounded-sm text-white bg-black-a2 shadow-[0_0_0_1px_var(--black-a6)] px-[0.75em] pr-2.25 h-9 gap-2 hover:shadow-[0_0_0_1px_black]">
                                                                   <PasswordToggleField.Input className="w-full! all-[unset] text-white! box-border h-4.5 text-[15px]  leading-none selection:bg-blackA6 selection:text-white" />
                                                                   <PasswordToggleField.Toggle className="all-[unset] box-border h-4.5 text-[15px] text-inherit leading-none flex items-center justify-center aspect-square rounded-[0.5px] focus-visible:outline-2 focus-visible:outline-accent-9 focus-visible:outline-offset-[2px]">
                                                                       <PasswordToggleField.Icon
                                                                           color={"white"}
                                                                           visible={<EyeOpenIcon />}
                                                                           hidden={<EyeClosedIcon />}
                                                                       />
                                                                   </PasswordToggleField.Toggle>
                                                               </div>
                                                           </PasswordToggleField.Root>
                                                       </fieldset>
                                                       <Box as={"div"}
                                                            style={{ display: "flex", marginTop: 25, justifyContent: "flex-end" }}
                                                       >
                                                           <Dialog.Close asChild>
                                                               <button className="Button green cursor-pointer!">Register</button>
                                                           </Dialog.Close>
                                                       </Box>
                                                   </Tabs.Content>
                                               </Tabs.Root>
                                               <Dialog.Close asChild>
                                                   <button className="IconButton cursor-pointer!" aria-label="Close">
                                                       <Cross2Icon />
                                                   </button>
                                               </Dialog.Close>
                                           </Dialog.Content>
                                       </Dialog.Portal>
                                   </Dialog.Root>
                               </Box>
                           </Flex>
                        </Flex>
                    </Flex>
                </Box>
            </nav>
        </>
    )
}