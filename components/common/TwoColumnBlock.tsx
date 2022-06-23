import { ComponentCommonTwoColumnBlock } from "graphql/types";
import { Grid, Box, Typography, Button } from "@mui/material";
import { useRouter } from 'next/router'
type Props = {
  data: ComponentCommonTwoColumnBlock;
};
const TwoColumnBlock = (props: Props) => {
  //TODO: Implement this component
  const router = useRouter()
  const image = props.Image.data.attributes;
  const ImagePosition = props.ImagePosition;

  return (
    <Box sx={{ marginTop: "6%"}}>
       <Grid
          item
          container
          spacing={4}
          xs={12}
          alignItems={"center"}
          direction={ImagePosition === "Right" ? "row-reverse" : "row"}
        >
          <Grid item  xs={12} sm={6}>
          <Typography variant={"h6"} gutterBottom sx={{ fontWeight: 700 }}>
                {props.TitleText}
          </Typography>
          <Typography color="text.secondary">{props.Description}</Typography>
          <Button size={"large"} onClick = {() => router.push(`${props.ButtonUrl}`)}>{props.ButtonText}</Button>
          </Grid>
          <Grid item xs={12} sm={6}>
          <Box
              component={"img"}
              src={`${process.env.STRAPI_CMS_URL + image.url}`}
              alt={image.alternativeText}
              width={1}
              maxWidth={"80%"}
            />
            </Grid>
       </Grid> 
    </Box>
  );
};

export default TwoColumnBlock;
