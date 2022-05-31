import { ComponentCommonCarousel } from "graphql/types";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import Image from "next/image";

type Props = {
  data: ComponentCommonCarousel;
};
const CarouselBlock = ({ data }: Props) => {
  var settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
  };
  console.log(data);
  //TODO : Complete this component
  return (
    <div className="carousel-bg">
      <div className="car-hdr-txt">{data?.HeaderText}</div>
      <Slider {...settings}>
        {data?.Item.map((collection, i) => {
          const imgData = collection?.Image?.data?.attributes;
          return (
            <Image
              key={`carousal_${i}`}
              src={process.env.STRAPI_CMS_URL + imgData?.url}
              alt={imgData?.alternativeText}
              width={imgData?.width}
              height={imgData?.height}
            />
          );
        })}
      </Slider>
    </div>
  );
};

export default CarouselBlock;
