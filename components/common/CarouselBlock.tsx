import { ComponentCommonCarousel } from "graphql/types";
import { Box, ImageList, ImageListItem, Typography, IconButton, Grid } from "@mui/material";
import Image from 'next/image';
import ArrowRightIcon from '@mui/icons-material/ArrowRight';
import ArrowLeftIcon from '@mui/icons-material/ArrowLeft';

type Props = {
  data: ComponentCommonCarousel;
};

//TODO Completed
const CarouselBlock: React.FC<Props> = ({ data }) => {
  //myCarouselLength is used to dynamically change the number of items in the Carousel
  const myCarouselLength = data.Item.length;

  //Return a Carousel view of the data passed down
  return(
    <Grid container alignItems="center">
      {/* Header for this section */}
      <Grid item xs={12}>
        <Box display="flex" justifyContent="center">
          <Typography 
            variant="h6" 
            fontWeight="bold"
            fontFamily="Roboto"
          >
            Subscribing Institutions
          </Typography>
        </Box>
      </Grid>
      {/* Carousel nav left option. Does not have actual button functionality. */}
      <Grid item xs={1}>
        <IconButton aria-label="nav left">
          <ArrowLeftIcon />
        </IconButton>
      </Grid>
      {/* Carousel Items */}
      <Grid item xs={10}>
        <ImageList 
          sx={{ width: 1, height: 120}}
          cols={myCarouselLength}
          gap={5}
        >
          {data.Item.map((item) => {
            return(
              <ImageListItem key={item.Description} >
                <Image
                  alt={item.Image.data.attributes.name}
                  src={`http://localhost:1337${item.Image.data.attributes.url}`}
                  layout="fill"
                />
              </ImageListItem>
            )
          })}
        </ImageList>
      </Grid>
      {/* Carousel nav Right button. Does not hae actual button functionality. */}
      <Grid item xs={1}>
        <Box display="flex" justifyContent="flex-end">
          <IconButton aria-label="nav right">
            <ArrowRightIcon />
          </IconButton>
        </Box>
      </Grid>

    </Grid>
  );
};

export default CarouselBlock;
