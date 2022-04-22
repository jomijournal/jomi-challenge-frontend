import {ComponentCommonCarousel} from 'graphql/types';
import Carousel from 'react-grid-carousel';
import {Box} from '@mui/material';
import {styled} from '@mui/material/styles';

type Props = {
  data: ComponentCommonCarousel;
};

const StyledBox = styled(Box)(({ theme }) => ({
  backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : 'white',
  ...theme.typography.body2,
  padding: theme.spacing(1),
  color: theme.palette.text.primary,
  width: '100%',
  display: 'flex',
  height: 200,
}));

const ImageContainer = (item) => {
  const baseUrl = 'http://localhost:1337';
  const formats = item.Image.data.attributes.formats;
  const url = formats.large ? formats.large.url : formats.thumbnail.url;
  return <img src={`${baseUrl}${url}`}
              srcSet={`${baseUrl}${url}`}
              alt={item.TitleText}
              loading="lazy"
              style={{ objectFit: 'contain', width: '100%', height: 200 }}
  />;
};

const CarouselBlock = ({ data }: Props) => {
  return <StyledBox>
    <Carousel cols={3} rows={1} gap={10} loop={true}>
      {data.Item.map((item, key) => {
          return <Carousel.Item key={key}>
            <ImageContainer {...item}/>
          </Carousel.Item>;
        }
      )}
    </Carousel>
  </StyledBox>;
};

export default CarouselBlock;
