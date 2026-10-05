import { BannerMoreFriend } from "@/app/(public)/home/ui/banner_more_friend";
import { CategorySection } from "@/app/(public)/home/ui/category.section";
import { TextUI } from "@/app/(public)/home/ui/text.ui";
import {ProductSection} from "@/app/(public)/home/ui/product.section";

export const Home = () => (
  <>
    <TextUI />
    <CategorySection />
    <BannerMoreFriend />
      <ProductSection />
  </>
);
