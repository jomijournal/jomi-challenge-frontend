import { Box, Button, Typography } from "@mui/material";
import Slider from "react-slick";
import { ComponentCommonCarousel } from "graphql/types";
import Image from "next/image";
import ArrowIcon from "./../../public/arrow.svg";

type Props = {
  data: ComponentCommonCarousel;
};

const getImage = (src: string): string => {
  return `${process.env.STRAPI_CMS_URL}${src}`;
};

const CarouselBlock = ({ data }: Props) => {
  //TODO : Complete this component
  const settings = {
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    nextArrow: <ArrowIcon />,
    prevArrow: <ArrowIcon />,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <Box
      py={2}
      px={10}
      sx={{
        width: "full",
        height: "130px",
        backgroundColor: "#222",
        marginBottom: "40px",
      }}
    >
      <Typography
        sx={{ fontSize: "14px", paddingBottom: "20px" }}
        color={"white"}
      >
        Subscribing institutions:
      </Typography>
      <Slider {...settings}>
        {data.Item.map((item: any) => (
          <Button
            key={item.id}
            component={"a"}
            href={item.ButtonUrl}
            sx={{
              height: "50px",
              position: "relative",
            }}
          >
            <Image
              alt={item.TitleText}
              src={getImage(item.Image.data.attributes.url)}
              layout="fill"
              objectFit="cover"
            />
          </Button>
        ))}
      </Slider>
    </Box>
  );
};

export default CarouselBlock;
