import { ComponentCommonCarousel } from "graphql/types";
const $ = require("jquery");
if (typeof window !== "undefined") {
  // Client-side-only code
  window.$ = window.jQuery = require("jquery");
}
import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel/dist/assets/owl.theme.default.css";
import { Box } from "@mui/material";
import Image from "next/image";
import dynamic from "next/dynamic";

const OwlCarousel = dynamic(() => import("react-owl-carousel"), {
  ssr: false,
});

type Props = {
  data: ComponentCommonCarousel;
};
const CarouselBlock = ({ data }: Props) => {
  //TODO : Complete this component
  return (
    <Box bgcolor="secondary" paddingX={10} paddingY={2}>
      <OwlCarousel
        loop
        nav={false}
        autoplay={true}
        dots={false}
        autoplaySpeed={2000}
        autoplayTimeout={2000}
        autoplayHoverPause={true}
      >
        {data.Item.map((item) => {
          return (
            <Image
              key={item.id}
              src={item.Image.data.attributes.url}
              alt={item.Image.data.attributes.alternativeText}
              width={item.Image.data.attributes.width}
              height={item.Image.data.attributes.height}
            />
          );
        })}
      </OwlCarousel>
    </Box>
  );
};

export default CarouselBlock;
