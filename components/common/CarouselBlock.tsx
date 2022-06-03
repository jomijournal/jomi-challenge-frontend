import { ComponentCommonCarousel } from "graphql/types";
import Carousel from 'react-multi-carousel'
import "react-multi-carousel/lib/styles.css";

import { Box } from "@mui/material";
import { STRAPI_CMS_URL } from "lib/StrapiCMSUrl"

type Props = {
  data: ComponentCommonCarousel;
};
const CarouselBlock = ({ data }: Props) => {
  //TODO : Complete this component
  const responsive = {
    superLargeDesktop: {
      breakpoint: { max: 4000, min: 3000 },
      items: 5
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 4
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 1
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1
    }
  };

  return (
    <>
      <Box bgcolor="#111827" px={4} py={4}>
        <Carousel responsive={responsive} autoPlay={true} autoPlaySpeed={3000} renderArrowsWhenDisabled={true}>
            {
              data.Item?.map( (item, idx) => 
                <Box key={idx} display="flex" justifyContent="center" mx={5}>
                  <img src={STRAPI_CMS_URL + item.Image?.data?.attributes?.url} height="50" />
                </Box>
              )
            }
        </Carousel>
      </Box>
    </>
  );
  
};

export default CarouselBlock;
