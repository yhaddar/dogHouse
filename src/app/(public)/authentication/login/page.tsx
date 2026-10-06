import Image from "next/image";
import Link from "next/link";
import { Button, Heading, Link as RadixLink, Text, TextField } from "@radix-ui/themes";
import { fontFamily1 } from "@/utils/fonts";

export default function Authentication() {
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
                        <Link href="/public" aria-label="Monito home" className="inline-flex items-center gap-2 text-2xl font-bold tracking-tight text-[#003459]">
                            <Image src="/images/monito-logo.svg" alt="" width={38} height={38} />
                            Monito
                        </Link>
                        <Text as="p" className="mt-8 text-sm font-semibold uppercase tracking-[0.16em] text-[#667781]">Welcome back</Text>
                        <Heading as="h1" size="8" className="mt-2 text-3xl! font-bold! tracking-tight! text-[#003459]! sm:text-4xl!">Sign in to your account</Heading>
                        <Text as="p" className="mt-3 block text-sm leading-6 text-[#667781]">Enter your details to continue your journey with Monito.</Text>

                        <form className="mt-8 space-y-5">
                            <div>
                                <Text as="label" htmlFor="email" className="mb-2 block text-sm font-semibold text-[#242B33]">Email address</Text>
                                <TextField.Root
                                    id="email"
                                    name="email"
                                    type="email"
                                    autoComplete="email"
                                    placeholder="you@example.com"
                                    required
                                    size="3"
                                    className="auth-field"
                                />
                            </div>
                            <div>
                                <div className="mb-2 flex items-center justify-between gap-3">
                                    <Text as="label" htmlFor="password" className="block text-sm font-semibold text-[#242B33]">Password</Text>
                                    <RadixLink asChild>
                                        <Link href="/authentication/reset-password" className="text-sm font-semibold text-[#003459]">Forgot password?</Link>
                                    </RadixLink>
                                </div>
                                <TextField.Root
                                    id="password"
                                    name="password"
                                    type="password"
                                    autoComplete="current-password"
                                    placeholder="Enter your password"
                                    required
                                    size="3"
                                    className="auth-field"
                                />
                            </div>
                            <Button type="submit" size="3" radius="full" className="h-12! w-full! bg-[#003459]! text-sm! font-bold! text-white! hover:bg-[#002A48]!">
                                Sign in
                            </Button>
                        </form>

                        <div className="mt-7 text-center">
                            <Text as="p" className="text-sm text-[#667781]">New to Monito?</Text>
                            <RadixLink asChild>
                                <Link href="/authentication/register" className="mt-3 inline-flex h-12 w-full items-center justify-center rounded-full border-2 border-[#003459] px-6 text-sm font-bold text-[#003459] transition hover:bg-[#FCEED5]">
                                    Create an account
                                </Link>
                            </RadixLink>
                        </div>
                    </div>
                </div>
            </section>
        </main>
    )
};
