import { Grid, Typography } from "@mui/material";
import { ComponentCommonTwoColumnBlock } from "graphql/types";

type Props = {
  data: ComponentCommonTwoColumnBlock;
};
const TwoColumnBlock = (props: Props) => {
  //TODO: Implement this component
  return (
      <Grid container spacing={3} my={3} flexDirection={props.data.ImagePosition == "Left" ? "row" : "row-reverse"}>
        <Grid item xs={12} sm={6} textAlign={props.data.ImagePosition == "Left" ? "left" : "right"}>
          <img src={process.env.STRAPI_CMS_URL + props.data.Image.data.attributes.url} width={400}/>
        </Grid>
        <Grid item xs={12} sm={6}>
          <Typography variant="h5">{props.data.TitleText}</Typography>
          <Typography variant="subtitle1" my={3}>{props.data.Description}</Typography>
        </Grid>
      </Grid>
  );
};

export default TwoColumnBlock;
