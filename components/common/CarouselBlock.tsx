import React from "react";
import Slider from "react-slick";
import { useTheme } from "@mui/material/styles";
import { Box, Typography, Grid } from "@mui/material/";
import useMediaQuery from "@mui/material/useMediaQuery";
import { ComponentCommonCarousel } from "graphql/types";
import Image from 'next/image'

type Props = {
  data: ComponentCommonCarousel;
};
const CarouselBlock = ({ data }: Props) => {
  //TODO : Complete this component
  const theme = useTheme();
  const isXs = useMediaQuery(theme.breakpoints.up("xs"), {
    defaultMatches: true,
  });
  const isSm = useMediaQuery(theme.breakpoints.up("sm"), {
    defaultMatches: true,
  });
  const isMd = useMediaQuery(theme.breakpoints.up("md"), {
    defaultMatches: true,
  });
  const isLg = useMediaQuery(theme.breakpoints.up("lg"), {
    defaultMatches: true,
  });

  let slidesToShow = 2;
  if (isXs) {
    slidesToShow = 2;
  }
  if (isSm) {
    slidesToShow = 2;
  }
  if (isMd) {
    slidesToShow = 3;
  }
  if (isLg) {
    slidesToShow = 4;
  }

  const sliderOpts = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow,
    slidesToScroll: 1,
    arrows: true,
    autoplay: true,
    autoplaySpeed: 2000,
  };
  return (
    <Grid container spacing={1}>
      <Grid item xs={12}>
       <Box sx={{  bgcolor: 'text.primary', color: 'background.paper', p:4, margin: "5%"  }}>
       <Typography sx={{ fontWeight: 100 }}>
               Subscribing Instatutions
          </Typography>
       <Slider {...sliderOpts}>
        {data.Item &&
          data.Item.map((item, i) => {
            return (
              <Box key={i} component="img" src={`${process.env.STRAPI_CMS_URL + item.Image.data.attributes.url}`} alt={`${item.Image.data.attributes.alternativeText}`} />
            );
          })}
      </Slider>
    </Box> 
    </Grid>
    </Grid>
  );
};

export default CarouselBlock;
