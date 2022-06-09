import { ComponentCommonTwoColumnBlock } from "graphql/types";
import Card from "@mui/material/Card";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import Image from "next/image";
import getImageUrl from "lib/shared";

type Props = {
  data: ComponentCommonTwoColumnBlock;
};

const TwoColumnBlock = ({ data }: Props) => {
  const styling = (data) => {
    if (data.ImagePosition === "Right") {
      return "row";
    } else {
      return "row-reverse";
    }
  };
  return (
    <>
      <Typography className="h2 mb-5 text-center">{data.TitleText}</Typography>
      <Grid container spacing={10} sx={{ flexDirection: styling(data) }}>
        <Grid item xs={6}>
          <Image
            src={getImageUrl(data.Image.data.attributes.url)}
            alt={data.Image.data.attributes.alternativeText}
            width={450}
            height={300}
          />
        </Grid>
        <Grid item xs={6}>
          <Typography paragraph={true} align="left" sx={{ pt: 6 }}>
            {data.Description}
          </Typography>
          <Button href={data.ButtonUrl} sx={{ mt: 6 }}>
            {data.ButtonText}
          </Button>
        </Grid>
      </Grid>
    </>
  );
};

export default TwoColumnBlock;
