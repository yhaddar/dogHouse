import {Header} from "@/components/header";
import {Blog} from "@/components/blog";
import {Box} from "@radix-ui/themes";

const blogs = Array.from({ length: 3 }, (_, index) => index);
export const BlogsSection = () => {
    return (
        <>
            <Header title={"useful pet knowledge"} subtitle={"you already now ?"} href={"blogs"} />
            <Box className="container mx-auto! flex! flex-wrap justify-between gap-y-5 px-5">
                {
                    blogs.map((blog) => {
                        return (
                            <Blog key={blog} category={"pet knowledge"} title={"what is pomeranian ? how to identify pomeranian dogs"} description={"The Pomeranian, also known as the Pomeranian (Pom dog), is always in the top of the cutest pets. Not only that, the small, lovely, smart, friendly, and skillful circus dog breed."} />
                        )
                    })
                }
            </Box>
        </>
    )
}