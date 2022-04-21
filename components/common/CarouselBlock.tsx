import { Box, Container } from "@mui/material";
import { ComponentCommonCarousel } from "graphql/types";
import Slider from "react-slick";
const API_URL = "http://localhost:1337";

type Props = {
  data: ComponentCommonCarousel;
};
const settings = {
  infinite: false,
  speed: 500,
  slidesToShow: 4,
  slidesToScroll: 4,
  initialSlide: 0,
  arrows: true,
};
const CarouselBlock = ({ data }: Props) => {
  //TODO : Complete this component
  return (
    <div className="sliderbg">
      <Container>
        <p>Subscribing Institutions :</p>
        <Slider {...settings}>
          {data.Item.map((item, i) => (
            <Box
              key={i}
              component="img"
              className="image"
              sx={{
                height: "auto",
                width: "auto",
                maxHeight: { xs: 233 },
                maxWidth: { xs: 350 },
              }}
              alt="The house from the offer."
              src={`${API_URL}${item.Image.data.attributes.url}`}
            />
          ))}
        </Slider>
      </Container>
    </div>
  );
};

export default CarouselBlock;
