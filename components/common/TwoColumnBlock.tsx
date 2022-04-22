import {DialogTitle, Grid, Box, Button, ImageListItem, Divider} from '@mui/material';
import {styled} from '@mui/material/styles';

import {ComponentCommonTwoColumnBlock} from 'graphql/types';


type Props = {
  data: ComponentCommonTwoColumnBlock;
};

const Title = styled(DialogTitle)(({ theme }) => ({
  backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: 'left',
  color: theme.palette.text.primary,
  fontSize: '1.1rem',
  width: '100%',
}));

const TextDescription = styled(DialogTitle)(({ theme }) => ({
  backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: 'left',
  color: theme.palette.text.primary,
  fontSize: '0.95rem',
  width: '100%',
}));

const StyledDivider = styled(Divider)(({ theme }) => ({
  width: '100%',
  ...theme.typography.body2,
  marginTop: 50,
  marginBottom: 50,

}));

const ImageContainer = (image) => {
  const baseUrl = 'http://localhost:1337';

  return <Grid item xs={6}>
    <ImageListItem key={image.url}>
      <img src={`${baseUrl}${image.url}`}
           srcSet={`${baseUrl}${image.url}`}
           alt={image.name}
           loading="lazy"
      />
    </ImageListItem>
  </Grid>;
};

const TextContainer = (data) => {
  const { ButtonText, ButtonUrl, Description, TitleText } = data;

  return <Grid item xs={6} p={3}>
    <Grid item p={1}>
      <Title>{TitleText}</Title>
    </Grid>
    <Grid item p={1}>
      <TextDescription>{Description}</TextDescription>
    </Grid>
    <Grid item p={2}>
      <Button variant="outlined" href={ButtonUrl}>{ButtonText}</Button>
    </Grid>
  </Grid>;
};

const TwoColumnBlock = ({ data }: Props) => {
  const { ImagePosition, Image } = data;
  const image = Image.data.attributes.formats.medium;
  const isImagePositionLeft = ImagePosition === 'Left';

  return <Grid container item spacing={8}>
    {isImagePositionLeft ? (
      <>
        <ImageContainer {...image}/>
        <TextContainer {...data}/>
        <StyledDivider/>
      </>
    ) : (
      <>
        <TextContainer {...data}/>
        <ImageContainer {...image}/>
      </>
    )
    }
  </Grid>;
};

export default TwoColumnBlock;
