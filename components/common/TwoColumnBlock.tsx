import { ComponentCommonTwoColumnBlock } from "graphql/types";
import Card from "@mui/material/Card"
import Grid from "@mui/material/Grid"
import Typography from "@mui/material/Typography"
import Button from "@mui/material/Button"

type Props = {
  data: ComponentCommonTwoColumnBlock;
};

const TwoColumnBlock = ({ data }: Props) => {
  function styling (data){
    if (data.ImagePosition === "Right") {
      return "row"
    } else {
      return "row-reverse"
    }
  }
  return (
    <Grid container spacing={10} sx={{flexDirection: styling(data)}}>
      <Grid item xs={8}>
        <Card sx={{ maxWidth: "600px" }}>
          <Typography variant="h3" align="left">
            {data.TitleText}
          </Typography>
          <Typography paragraph={true} align="left" sx={{ pt: 6 }}>
            {data.Description}
          </Typography>
          <Button href={data.ButtonUrl} sx={{ mt: 6 }} >
            {data.ButtonText}
          </Button>
        </Card>
      </Grid>
      <Grid item xs={6}>
        <img
          src={data.Image.data.attributes.url}
          alt={data.Image.data.attributes.alternativeText}
          width={450}
          height={300}
        />
      </Grid>
    </Grid>
  );
};

export default TwoColumnBlock;
