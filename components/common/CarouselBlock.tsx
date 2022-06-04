import { ComponentCommonCarousel } from "graphql/types";
import Container from "../Container";
import { Grid } from "@mui/material";
import Universities from "../Universities";
type Props = {
  data: ComponentCommonCarousel;
};

const CarouselBlock = ({ data }: Props) => {
  const uniArray = data.Item.map((partner) => {
    return {
      logo: process.env.STRAPI_CMS_URL + partner.Image.data.attributes.url,
      name: partner.Image.data.attributes.alternativeText,
    };
  });

  //TODO : Complete this component
  return (
    // @ts-ignore
    <Container paddingX={"0 !important"} maxWidth={1}>
      <Grid container spacing={2}>
        <Grid item xs={12}>
          <Universities unis={uniArray} />
        </Grid>
      </Grid>
    </Container>
  );
};

export default CarouselBlock;
