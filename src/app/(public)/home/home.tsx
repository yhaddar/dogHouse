import {TextUI} from "@/app/(public)/home/ui/text.ui";
import {Box} from "@radix-ui/themes";
import bgImage from "../../../../public/images/home-cover.jpg";
import {ProductsSection} from "@/app/(public)/home/ui/products.section";

export const Home = () => {
    return (
        <>
            <Box as={"div"} className={`bg-primary w-full h-screen bg-cover relative bg-origin-border before:w-full before:h-screen before:absolute opacity-cover`} style={{ backgroundImage: `url(${bgImage.src})` }}>
                <TextUI />
                <ProductsSection />
            </Box>
        </>
    )
}