import {Header} from "@/components/header";
import {Card} from "@/components/card";
import {Box} from "@radix-ui/themes";
import {types} from "@/utils/interfaces";

export const ProductSection = () => {

    const products = Array.from({ length: 8 }, (_, index) => index);

    return (
        <Box role="region" aria-label="New pets" className="w-full bg-white py-8!">
            <Header
                title="our products"
                subtitle="hard to choose right product for your pets ?"
                href="/products"
            />

            <Box className="container mx-auto! flex! flex-wrap justify-between gap-y-5 px-5">
                {products.map((product) => (
                    <Card key={product} type={types.PRODUCT} i={product} />
                ))}
            </Box>
        </Box>
    )
}