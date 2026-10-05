import { Box } from "@radix-ui/themes";
import { Card } from "@/components/card";
import { Header } from "@/components/header";

const products = Array.from({ length: 8 }, (_, index) => index);

export const ProductsSection = () => (
  <Box role="region" aria-label="New pets" className="w-full bg-white py-8!">
    <Header
      title="take a look at some of our pets"
      subtitle="What's new?"
      href="/category"
    />

    <Box className="container mx-auto! flex! flex-wrap justify-between gap-y-5 px-5">
      {products.map((product) => (
        <Card key={product} />
      ))}
    </Box>
  </Box>
);
