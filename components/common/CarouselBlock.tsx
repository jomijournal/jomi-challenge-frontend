import { ComponentCommonCarousel } from "graphql/types";
import { Box } from '@mui/material'
import Slider from "react-slick";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";

type Props = {
  data: ComponentCommonCarousel;
};
const CarouselBlock = ({ data }: Props) => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1
  };

  return (
    <Box
      sx={{
        marginBottom: 3,
      }}
    >
      <Slider {...settings}>
        {
          data.Item.map((item, i) => <Item key={i} item={item} />)
        }
    </Slider>
  </Box>
  );
};

const Item = ({item}) => {
  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "center",
        backgroundColor: '#272727',
      }}
    >
      <Box
        component={"img"}
        src={process.env.STRAPI_CMS_URL + item.Image.data.attributes.url}
        sx={{
          width: 100,
          height: 100,
          display: "flex",
          justifyContent: "center",
        }}
      />
    </Box>
  )
}

export default CarouselBlock;
