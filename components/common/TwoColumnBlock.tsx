import { ComponentCommonTwoColumnBlock } from "graphql/types";
import { Box, Grid, Typography, Button } from "@mui/material";

type Props = {
  data: ComponentCommonTwoColumnBlock;
};
const TwoColumnBlock = ({ data }: Props) => {

  return (
    <Box component="div" sx={{ m: 10 }}>
      <Grid container spacing={2} sx={{flexDirection: data.ImagePosition == "Left" ? "row" : "row-reverse"}}>
        <Grid item xs={6}>
          <Box sx={{ maxWidth: 500 }}>
            <Typography variant="h4" align="left">
              {data.TitleText}
            </Typography>
            <Typography paragraph={true} align="left" sx={{pt: 5}}>
              {data.Description}
            </Typography>
            <Button href={ data.ButtonUrl } color="info" variant="outlined" sx={{mt: 5}}>{ data.ButtonText }</Button>
          </Box>
        </Grid>
        <Grid item xs={6}>
          <img src={process.env.STRAPI_CMS_URL + data.Image.data.attributes.url} style={{height: "300px"}}/>
        </Grid>
      </Grid>
    </Box>
  );
};

export default TwoColumnBlock;
