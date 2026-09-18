import {TextUI} from "@/app/(public)/home/ui/text.ui";
import {Box} from "@radix-ui/themes";
import bgImage from "../../../../public/images/home-cover.jpg";

export const Home = () => {
    return (
        <>
            <Box as={"div"} className={`bg-primary w-full h-screen bg-cover  relative bg-origin-border before:w-full before:h-screen before:absolute opacity-cover`} style={{ backgroundImage: `url(${bgImage.src})` }}>
                <Box as={"div"}>
                    <TextUI />
                </Box>
            </Box>
        </>
    )
}