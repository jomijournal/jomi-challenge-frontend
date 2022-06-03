import { ComponentCommonTwoColumnBlock } from "graphql/types";
import { Box, Grid, Typography, Button } from "@mui/material";
import Image from "next/image";

type Props = {
  data: ComponentCommonTwoColumnBlock;
};
const TwoColumnBlock = ({ data }: Props) => {
  //TODO: Implement this component
  return (
    <Box component="div" sx={{ m: 10 }}>
      <Grid
        container
        spacing={10}
        sx={{
          flexDirection: data.ImagePosition == "Right" ? "row" : "row-reverse",
        }}
      >
        <Grid item xs={6}>
          <Box sx={{ maxWidth: 500 }}>
            <Typography variant="h4" align="left">
              {data.TitleText}
            </Typography>
            <Typography paragraph={true} align="left" sx={{ pt: 5 }}>
              {data.Description}
            </Typography>
            <Button
              href={data.ButtonUrl}
              color="info"
              variant="outlined"
              sx={{ mt: 5 }}
            >
              {data.ButtonText}
            </Button>
          </Box>
        </Grid>
        <Grid item xs={6}>
          <Image
            src={process.env.STRAPI_CMS_URL + data.Image.data.attributes.url}
            alt={data.Image.data.attributes.alternativeText}
            width={450}
            height={300}
            layout="responsive"
            objectFit="contain"
          />
        </Grid>
      </Grid>
    </Box>
  );
};

export default TwoColumnBlock;
