import { ComponentCommonCarousel } from "graphql/types";
import ImageList from '@mui/material/ImageList';
type Props = {
  data: ComponentCommonCarousel;
};
const CarouselBlock = ({ data }: Props) => {
  return (
    <ImageList sx={{height: "450px"}} cols={2} rowHeight={164}>
      {
        data.Item.map((item, index) => {
          <img 
            key={index}
            src={item.Image.data.attributes.url}
            width={item.Image.data.attributes.width}
            height={item.Image.data.attributes.height}
            alt={item.Image.data.attributes.alternativeText}
          >
          </img>
        })
      }
    </ImageList>
  )
};

export default CarouselBlock;
