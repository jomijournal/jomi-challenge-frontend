import { ComponentCommonTwoColumnBlock } from 'graphql/types';
import { Grid, Box, Typography, Button } from '@mui/material';

type Props = {
  data: ComponentCommonTwoColumnBlock;
};

const imgDescStyle = {
  margin: 20,
  display: 'flex',
  alignItems: 'center',
};

export const flexStyle = {
  display: 'flex',
  flexDirection: 'column',
};

const TwoColumnBlock = ({ data }: Props) => {
  const { ButtonText, Description, Image, ImagePosition, TitleText } = data;
  const { url } = Image?.data?.attributes;

  return (
    <Grid
      container
      spacing={2}
      sx={{
        display: 'flex',
        flexDirection: ImagePosition !== 'Left' && 'row-reverse',
        maxWidth: '1700px',

        padding: '50px',
        paddingLeft: '150px',
        paddingRight: '150px',

        marginTop: '30px',
        marginBottom: '30px',
        margin: 'auto',
      }}
    >
      <Grid
        item
        xs={12}
        md={6}
        sx={{
          display: 'flex',
          justifyContent: ImagePosition !== 'Right' ? 'flex-start' : 'flex-end',
          alignItems: 'center',
        }}
      >
        <img
          src={`${process.env.STRAPI_CMS_URL}${url}`}
          alt='img'
          style={{
            objectFit: 'contain',
            maxWidth: '500px',
          }}
        />
      </Grid>
      <Grid item xs={12} md={6}>
        <Box style={imgDescStyle}>
          <Box
            sx={{
              ...flexStyle,
              gap: '1.5rem',
            }}
          >
            <Typography variant='h6' gutterBottom>
              {TitleText?.trim()}
            </Typography>
            <Box
              sx={{
                ...flexStyle,
                gap: '1.5rem',
              }}
            >
              <Typography variant='body1' gutterBottom>
                {Description?.trim()}
              </Typography>
              <Button
                variant='outlined'
                color='primary'
                style={{
                  width: 'fit-content',
                }}
              >
                {ButtonText}
              </Button>
            </Box>
          </Box>
        </Box>
      </Grid>
    </Grid>
  );
};

export default TwoColumnBlock;
