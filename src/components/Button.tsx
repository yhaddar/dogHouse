import {Flex} from "@radix-ui/themes";
import Link from "next/link";
import type { ElementType } from "react";

export const Button = ({withColor = true, px = "5", text, link, textSize = "14", Icon = null}: {withColor?: boolean, px?: string, text: string, link: string, textSize?: string, Icon?: ElementType | null}) => {
    return (
        <Flex className="hidden shrink-0 items-center gap-3.5 min-[1280px]:flex">
            <Link
                href={`/${link}`}
                className={`inline-flex h-11 gap-2.5! items-center whitespace-nowrap rounded-[50px] bg-${withColor ? '[#003459]' : 'transparent'}  px-${px}! text-[${textSize}px] active:scale-95 font-bold leading-6 text-${withColor ? '[#fdfdfd]' : '[#002a48]'}  transition-colors hover:bg-[#002a48] hover:text-white border-2 border-solid border-[${!withColor ? '#002a48' : 'none'}]`}
            >
                {text} {Icon && <Icon width={18} height={18} />}
            </Link>
        </Flex>
    )
}