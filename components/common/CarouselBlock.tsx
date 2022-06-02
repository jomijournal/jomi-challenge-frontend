import { ComponentCommonCarousel } from "graphql/types";
import { Box, Button, IconButton } from "@mui/material";
import Carousel from 'react-material-ui-carousel'
import { ArrowCircleRightOutlined, ArrowCircleLeftOutlined } from '@mui/icons-material';

type Props = {
  data: ComponentCommonCarousel;
};
const CarouselBlock = ({ data }: Props) => {

  return (
    <Box component="div" sx={{m: 5, p:2, backgroundColor: "#272727"}}>
      <Carousel
        NavButton={({onClick, className, style, next, prev}) => {
  
          return (
              <Button onClick={() => {onClick()}}>
                  <IconButton color="primary" aria-label="upload picture" component="span">
                    {next && <ArrowCircleRightOutlined />}
                    {prev && <ArrowCircleLeftOutlined />}
                  </IconButton>
              </Button>
          )
      }}
        indicators={false}
      >
        {
          data.Item.reduce((previewsElement, currentElement) => {
            const len = previewsElement.length
            if(len === 0) return [[currentElement]]
            if(previewsElement[len - 1].length !== 4) {
              previewsElement[len - 1].push(currentElement)
              return previewsElement
            }
            return [...previewsElement, [currentElement]]
          }, []).map( (items, i) => <Item key={i} items={items} /> )
        }
      </Carousel>
    </Box>
  );
};

const Item = ({ items }) => {
  return (
    <Box sx={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)' }}>
      {
        items.map((item, index) => <img key={index} src={process.env.STRAPI_CMS_URL + item.Image.data.attributes.url} style={{width: '100px', margin: "auto"}} />)
      }
    </Box>
  )
}

export default CarouselBlock;
