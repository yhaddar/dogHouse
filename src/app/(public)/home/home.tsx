import {TextUI} from "@/app/(public)/home/ui/text.ui";
import {Box} from "@radix-ui/themes";

export const Home = () => {
    return (
        <>
            <Box as={"div"} className={"bg-primary w-full h-[1000px]"}>
                <TextUI />
            </Box>
        </>
    )
}