import Image from "next/image";
import {fontFamily1} from "@/utils/fonts";

type BlogProps = {
    category: string;
    title: string;
    description: string;
    image?: string;
    imageAlt?: string;
};

export const Blog = ({
    category,
    title,
    description,
    image = "/images/dogBlogs.jpg",
    imageAlt = title,
}: BlogProps) => (
    <article className={`${fontFamily1.className} overflow-hidden! rounded-xl! w-100 bg-white! p-3! shadow-[0_4px_16px_rgba(0,0,0,0.08)]`}>
        <Image
            src={image}
            alt={imageAlt}
            width={600}
            height={400}
            className="aspect-3/2! w-full! rounded-lg! object-cover!"
        />
        <div className="px-1! pb-2! pt-3!">
            <span className="inline-flex! rounded-full! bg-[#00A7E7]! px-2.5! py-1! text-[10px]! font-bold! leading-none! text-white!">
                {category}
            </span>
            <h3 className="mt-2! text-[16px]! font-bold! leading-5! text-[#00171F]!">
                {title}
            </h3>
            <p className="mt-2! line-clamp-3! text-[12px]! leading-4.5! text-[#242B33]!">
                {description}
            </p>
        </div>
    </article>
);
