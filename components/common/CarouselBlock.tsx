import { ComponentCommonCarousel } from "graphql/types";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import Image from "next/image";
type Props = {
  data: ComponentCommonCarousel;
};
const CarouselBlock = ({ data }: Props) => {
  //TODO : Complete this component
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
  };

  return (
    <div style={{ background: "#282828", padding: 40, marginBottom: 30 }}>
      <Slider {...settings}>
        {data?.Item.map((collection, i) => {
          const imgData = collection?.Image?.data?.attributes;
          return (
            <div key={`carousal_${i}`}>
              <Image
                src={process.env.STRAPI_CMS_URL + imgData?.url}
                alt={imgData?.alternativeText}
                width={80}
                height={30}
                layout="responsive"
                objectFit="contain"
              />
            </div>
          );
        })}
      </Slider>
    </div>
  );
};

export default CarouselBlock;
