import { ComponentCommonTwoColumnBlock } from "graphql/types";
import { Typography, Grid, Button, Box, Divider } from '@mui/material';

type Props = {
  data: ComponentCommonTwoColumnBlock;
};
const TwoColumnBlock = ({ data }: Props) => {
  return (
    <>
      <Box paddingY={6}>
        <Typography variant="h4" align="center" marginBottom={6}>{data.TitleText}</Typography>
        <Grid container spacing={2} flexDirection={data.ImagePosition === 'Left' ? 'row-reverse' : 'row'} alignItems="center">
          <Grid item xs={12} md={6} display="flex" justifyContent="center">
            <img src={process.env.STRAPI_CMS_URL + data.Image.data.attributes.url} alt={data.Image.data.attributes.caption}/>
          </Grid>

          <Grid item xs={12} md={6}>
            <Box paddingLeft={data.ImagePosition === 'Left' ? 0 : 5}>
              <Typography variant="h6" marginBottom={4}>{data.ButtonText}</Typography>
              <Typography marginBottom={4}>{data.Description}</Typography>
              <Button variant="outlined" href={data.ButtonUrl}>{data.ButtonText}</Button>
            </Box>
          </Grid>
        </Grid>
      </Box>
      <Divider />
    </>
  );
};

export default TwoColumnBlock;
