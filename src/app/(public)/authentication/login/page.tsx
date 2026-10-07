"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { Button, Heading, Link as RadixLink, Text, TextField } from "@radix-ui/themes";
import { fontFamily1 } from "@/utils/fonts";
import EyeIcon from "next/dist/next-devtools/dev-overlay/icons/eye-icon";
import {EyeClosedIcon, EyeOpenIcon} from "@radix-ui/react-icons";

export default function LoginPage() {
    const [showPassword, setShowPassword] = useState(false);

    return (
        <main className={`${fontFamily1.className} flex min-h-[calc(100vh-5rem)] items-center justify-center bg-[#FDF9F2] px-5 py-12`}>
            <section className="grid w-full max-w-5xl overflow-hidden rounded-[28px] bg-white shadow-[0_20px_60px_rgba(0,52,89,0.12)] md:min-h-147.5 md:grid-cols-2">
                <div className="relative hidden min-h-147.5 overflow-hidden bg-[#FCEED5] md:block">
                    <Image
                        src="/images/home-cover.jpg"
                        alt="A woman sharing a happy moment with her dog"
                        fill
                        priority
                        sizes="(min-width: 768px) 50vw, 100vw"
                        className="object-cover"
                    />
                    <div className="absolute inset-0 bg-linear-to-t from-[#002A48]/80 via-[#002A48]/10 to-transparent" />
                    <div className="absolute inset-x-0 bottom-0 p-10 text-white">
                        <p className="text-sm font-medium uppercase tracking-[0.18em] text-[#F7DBA7]">Welcome to Monito</p>
                        <h2 className="mt-3 max-w-sm text-4xl font-bold leading-tight">A little love goes a long way.</h2>
                        <p className="mt-3 max-w-sm text-sm leading-6 text-white/85">Find your new best friend and make every day a little brighter.</p>
                    </div>
                </div>

                <div className="flex items-center justify-center px-7 py-10 sm:px-12 md:px-14">
                    <div className="w-full max-w-md">
                        <Link href="/" aria-label="Monito home" className="inline-flex items-center gap-2 text-2xl font-bold tracking-tight text-[#003459] transition hover:opacity-80">
                            <Image src="/images/monito-logo.svg" alt="Monito" width={38} height={38} />
                            Monito
                        </Link>

                        <Text as="p" className="mt-8 text-sm font-semibold uppercase tracking-[0.16em] text-[#667781]">
                            Welcome back
                        </Text>
                        <Heading as="h1" size="8" className="mt-2 text-3xl! font-bold! tracking-tight! text-[#003459]! sm:text-4xl!">
                            Sign in to your account
                        </Heading>
                        <Text as="p" className="mt-3 block text-sm leading-6 text-[#667781]">
                            Enter your details to continue your journey with Monito.
                        </Text>

                        <form className="mt-8 space-y-5">
                            <div className="space-y-2">
                                <Text as="label" htmlFor="email" className="block text-sm font-semibold text-[#242B33]">
                                    Email address
                                </Text>
                                <TextField.Root
                                    id="email"
                                    name="email"
                                    type="email"
                                    autoComplete="email"
                                    placeholder="you@example.com"
                                    required
                                    size="3"
                                    disabled={false}
                                    className="auth-field"
                                />
                            </div>

                            <div className="space-y-2">
                                <div className="flex items-center justify-between">
                                    <Text as="label" htmlFor="password" className="text-sm font-semibold text-[#242B33]">
                                        Password
                                    </Text>
                                    <RadixLink asChild>
                                        <Link href="/authentication/reset-password" className="text-sm font-semibold text-[#003459] transition hover:text-[#002A48]">
                                            Forgot password?
                                        </Link>
                                    </RadixLink>
                                </div>
                                <div className="relative">
                                    <TextField.Root
                                        id="password"
                                        name="password"
                                        type={showPassword ? "text" : "password"}
                                        autoComplete="current-password"
                                        placeholder="Enter your password"
                                        required
                                        size="3"
                                        disabled={false}
                                        className="auth-field pr-10"
                                    />
                                    <button
                                        type="button"
                                        onClick={() => setShowPassword(!showPassword)}
                                        disabled={false}
                                        aria-label={showPassword ? "Hide password" : "Show password"}
                                        className="absolute right-3 top-1/2 -translate-y-1/2 text-[#667781] transition hover:text-[#003459] disabled:opacity-50"
                                    >
                                        {showPassword ? <EyeClosedIcon /> : <EyeOpenIcon width={18} height={18} />}
                                    </button>
                                </div>
                            </div>

                            {/* Submit Button */}
                            <Button
                                type="submit"
                                size="3"
                                radius="full"
                                disabled={false}
                                className="h-12! w-full! bg-[#003459]! text-sm! font-bold! text-white! transition! hover:bg-[#002A48]! disabled:opacity-60!"
                            >
                                {false ? "Signing in..." : "Sign in"}
                            </Button>
                        </form>

                        <div className="mt-7 space-y-3 text-center">
                            <Text as="p" className="text-sm text-[#667781]">
                                New to Monito?
                            </Text>
                            <RadixLink asChild>
                                <Link href="/authentication/register" className="inline-flex h-12 w-full items-center justify-center rounded-full border-2 border-[#003459] px-6 text-sm font-bold text-[#003459] transition hover:bg-[#FCEED5] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#003459]">
                                    Create an account
                                </Link>
                            </RadixLink>
                        </div>
                    </div>
                </div>
            </section>
        </main>
    );
}
