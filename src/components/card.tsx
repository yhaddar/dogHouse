import { Box, Heading, Text } from "@radix-ui/themes";
import bgImage from "../../public/images/home-cover.jpg";
import {fontFamily1, fontFamily2} from "@/utils/fonts";
import Link from "next/link";
import {types} from "@/utils/interfaces";
import Image from "next/image";
import giftImage from "../../public/images/gift.png";

export const Card = ({type, i}: {type: types, i: number}) => (
  <Box
    as="div"
    className="rounded-lg w-[23%] flex justify-center shadow-lg shadow-black/3 hover:scale-95"
    justifySelf="center"
    pb="3"
  >
   <Link href={"/"}>
     <Box as="div">
       <Box
           as="div"
           className="rounded-md mx-auto w-[95%] h-56 bg-cover relative bg-origin-border bg-center bg-no-repeat"
           mx="auto"
           mt="2"
           style={{ backgroundImage: `url('${bgImage.src}')` }}
       />
       <Box
           as="div"
           className={`rounded-md mx-auto w-[95%] ${fontFamily1.className}`}
           mx="auto"
           mt="2"
       >
         <Heading as="h6" className="text-[16px]!">
           MO221 - Pomerania While
         </Heading>
       </Box>
       <Box
           as="div"
           className={`rounded-md mx-auto w-[95%] ${fontFamily1.className}`}
           mx="auto"
           mt="2"
       >
         <Text as="p" className="text-[12px]!">
           <Text as="span" className="opacity-70!">
             {type === types.CATEGORY ? 'Gender' : 'Product'} :
           </Text>{" "}
           <Text as="span" className="opacity-70! font-bold">
             Male
           </Text>{" "}
           ·{" "}
           <Text as="span" className="opacity-70!">
             {type === types.CATEGORY ? 'Age' : 'Size'} :
           </Text>{" "}
           <Text as="span" className="opacity-70! font-bold">
             02 Month
           </Text>
         </Text>
       </Box>
       <Box
           as="div"
           className={`rounded-md mx-auto w-[95%] ${fontFamily1.className}`}
           mx="auto"
           mt="2"
       >
         <Heading as="h6" className="text-[16px]!">
           2 22 000.00 DH
         </Heading>
         {
           type === types.PRODUCT && i % 2 == 0 ? <Box as={"div"} className={"bg-[#f7dba7]/60 p-1! rounded-[5px]! flex! gap-3 items-center"}>
               <Image src={giftImage.src} width={20} height={20} alt={"gift image for products card"}  /> ·{" "} <Text as={"span"} className={`${fontFamily1.className}! bold! capitalize text-[12px]`}>free toy and free shaker</Text>
             </Box> : null
         }
       </Box>
     </Box>
   </Link>
  </Box>
);
