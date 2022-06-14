import { ComponentCommonCarousel } from "graphql/types";
import { Box, Container } from "@mui/material";
import Carousel from 'react-material-ui-carousel'

type Props = {
  data: ComponentCommonCarousel;
};

const CarouselBlock = ({ data }: Props) => {
  //TODO : Complete this component
  return (
    <Container sx={{ pb: 12 }}>
      <Carousel
        sx={{ width: 500 }}
        navButtonsAlwaysVisible={true}
        animation="slide"
      >
        {
          data.Item.length && data.Item.map((item, index) => (
            <Box
              component="img"
              sx={{
                height: 150,
                overflow: 'hidden',
                width: 300
              }}
              src={`${process.env.STRAPI_CMS_URL}${item.Image.data.attributes.url}`}
              alt={`${item.Image.data.attributes.name}`}
            />
          ))
        }
      </Carousel>
    </Container>
  );
};

export default CarouselBlock;
