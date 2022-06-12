import { ComponentCommonTwoColumnBlock } from "graphql/types";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import Image from "next/image";
import getImageUrl from "lib/shared";

type Props = {
  data: ComponentCommonTwoColumnBlock;
};

const TwoColumnBlock = ({ data }: Props) => {
  const getFlexDirection = (data) => {
    if (data.ImagePosition === "Left") {
      return "row";
    } else {
      return "row-reverse";
    }
  };

  const renderDescription = () => (
    <Typography paragraph={true} align="left" sx={{ pt: 6 }}>
      {data.Description}
    </Typography>
  )

  const renderBtn = () => (
    <Button href={data.ButtonUrl} sx={{ mt: 6 }}>
      {data.ButtonText}
    </Button>
  )
  return (
    <>
      <Typography className="h2 mb-5 text-center">{data.TitleText}</Typography>
      <Grid container spacing={10} sx={{ flexDirection: getFlexDirection(data) }}>
        <Grid item xs={6}>
          <Image
            src={getImageUrl(data.Image.data.attributes.url)}
            alt={data.Image.data.attributes.alternativeText}
            width={450}
            height={300}
          />
        </Grid>
        <Grid item xs={6}>
          {renderDescription()}
          {renderBtn()}
        </Grid>
      </Grid>
    </>
  );
};

export default TwoColumnBlock;
