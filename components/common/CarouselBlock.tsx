import { Grid } from "@mui/material";
import { ComponentCommonCarousel } from "graphql/types";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
const responsive = {
  superLargeDesktop: {
    breakpoint: { max: 4000, min: 3000 },
    items: 4
  },
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 3
  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 2
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 1
  }
};

type Props = {
  data: ComponentCommonCarousel;
};
const CarouselBlock = ({ data }: Props) => {
  //TODO : Complete this component
  return (
    <Grid marginTop={15}>
      <Carousel responsive={responsive} containerClass="carousel-container">
        {
          data.Item.map((item, i) => {
            return <div key={i}><img src={process.env.STRAPI_CMS_URL + item.Image.data.attributes.url} height={100}/></div>
          })
        }
      </Carousel>
    </Grid>
  )
};


export default CarouselBlock;
