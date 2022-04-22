import { Box, Grid, Typography, Button } from '@mui/material';
import { ComponentCommonTwoColumnBlock } from 'graphql/types';
import Link from 'next/link';

const STRAPI_CMS_URL = process.env.STRAPI_CMS_UR
type Props = {
  data: ComponentCommonTwoColumnBlock;
};
const TwoColumnBlock = ({ data }: Props) => {
  return (
    <Grid
      container
      sx={{
        flexDirection: data.ImagePosition === 'Right' ? 'row-reverse' : 'row',
        mb: 6,
        borderBottom: '2px solid #e0e0e0',
      }}
    >
      <Grid item xs={12} sm={6} p={5}>
        <Box
          sx={{
            height: '100%',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
          }}
        >
          <img
            src={`${STRAPI_CMS_URL}${data.Image.data.attributes.url}`}
            alt={'item.title'}
            loading='lazy'
            style={{ maxWidth: '100%', objectFit: 'contain' }}
          />
        </Box>
      </Grid>
      <Grid item xs={12} sm={6} p={3}>
        <Box
          sx={{
            height: '100%',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            flexDirection: 'column',
          }}
        >
          <Typography
            variant='h5'
            component='div'
            sx={{ textAlign: 'center' }}
            mb={3}
          >
            {data.TitleText}
          </Typography>
          <Typography variant='subtitle1' mb={3}>
            {data.Description}
          </Typography>

          <Button variant='outlined'>
            <Link href={data.ButtonUrl}>
              <a target='_blank'>{data.ButtonText}</a>
            </Link>
          </Button>
        </Box>
      </Grid>
    </Grid>
  );
};

export default TwoColumnBlock;
