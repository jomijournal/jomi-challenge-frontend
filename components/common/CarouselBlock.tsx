import { Box } from '@mui/material';
import Slider from 'react-slick';
import { ComponentCommonCarousel } from 'graphql/types';

type Props = {
  data: ComponentCommonCarousel;
};
const settings = {
  arrows: true,
  dots: false,
  infinite: false,
  speed: 500,
  slidesToShow: 3,
  slidesToScroll: 1,
};
const STRAPI_CMS_URL = process.env.STRAPI_CMS_URL
const CarouselBlock = ({ data }: Props) => {
  return (
    <Box p={8}>
      <Slider {...settings}>
        {data.Item.map((item, index) => (
          <div key={index}>
            <Box display='flex' justifyContent='center'>
              <img
                src={`${STRAPI_CMS_URL}${item.Image.data.attributes.url}`}
                style={{ height: 100, width: 140, marginRight: 10 }}
              />
            </Box>
          </div>
        ))}
      </Slider>
    </Box>
  );
};

export default CarouselBlock;
