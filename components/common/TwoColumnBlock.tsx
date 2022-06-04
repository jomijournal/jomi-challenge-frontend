import { ComponentCommonTwoColumnBlock } from "graphql/types";
import { Grid, Box, Typography, Button } from "@mui/material";

type Props = {
  data: ComponentCommonTwoColumnBlock;
};
const TwoColumnBlock = ({ data }: Props) => {
  //TODO: Implement this component

  const image = data.Image.data.attributes;
  const ImagePosition = data.ImagePosition;

  return (
    <Box>
      <Grid container spacing={4}>
        <Grid
          data-aos="fade-up"
          data-aos-delay={100}
          data-aos-offset={100}
          data-aos-duration={600}
          item
          container
          xs={12}
          spacing={4}
          direction={ImagePosition === "Right" ? "row-reverse" : "row"}
        >
          <Grid item container alignItems={"center"} xs={12} sm={6}>
            <Box>
              <Typography variant={"h6"} gutterBottom sx={{ fontWeight: 700 }}>
                {data.TitleText}
              </Typography>
              <Typography color="text.secondary">{data.Description}</Typography>
              <Button
                size={"large"}
                sx={{ marginTop: 2 }}
                endIcon={
                  // @ts-ignore
                  <Box
                    component={"a"}
                    href={data.ButtonUrl}
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    width={24}
                    height={24}
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M17 8l4 4m0 0l-4 4m4-4H3"
                    />
                  </Box>
                }
              >
                {data.ButtonText}
              </Button>
            </Box>
          </Grid>
          <Grid
            item
            container
            justifyContent={"center"}
            alignItems={"center"}
            xs={12}
            sm={6}
          >
            <Box
              component={"img"}
              src={`${process.env.STRAPI_CMS_URL + image.url}`}
              alt={image.alternativeText}
              width={1}
              maxWidth={"80%"}
            />
          </Grid>
        </Grid>
      </Grid>
    </Box>
  );
};

export default TwoColumnBlock;
