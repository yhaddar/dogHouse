import { BannerMoreFriend } from "@/app/(public)/home/ui/banner_more_friend";
import { CategorySection } from "@/app/(public)/home/ui/category.section";
import { TextUI } from "@/app/(public)/home/ui/text.ui";
import {ProductSection} from "@/app/(public)/home/ui/product.section";
import {SponsorsSection} from "@/app/(public)/home/ui/sponsors.section";
import {BannerAdoption} from "@/app/(public)/home/ui/banner_adoption";
import {BlogsSection} from "@/app/(public)/home/ui/blogs.section";

export const Home = () => (
  <>
    <TextUI />
    <CategorySection />
    <BannerMoreFriend />
      <ProductSection />
      <SponsorsSection />
      <BannerAdoption />
      <BlogsSection />
  </>
);
