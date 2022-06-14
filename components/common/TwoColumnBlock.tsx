import { ComponentCommonTwoColumnBlock } from "graphql/types";
import { Grid, Typography, Box, Button, ButtonBase } from "@mui/material";
import { styled } from '@mui/material/styles';

type Props = {
  data: ComponentCommonTwoColumnBlock;
};

const Img = styled('img')({
  margin: 'auto',
  display: 'block',
  maxWidth: '100%',
  maxHeight: '100%',
});

const TwoColumnBlock = (props: Props) => {
  //TODO: Implement this component
  const { ImagePosition, Image, TitleText, Description, ButtonText, ...rest } = props

  return (
    <Box sx={{ flexGrow: 1 }}>
      <Grid 
        container
        spacing={12}
        direction={ImagePosition === "Left" ? "row" : "row-reverse"}
        justifyContent="center"
        alignItems="center"
      >
        <Grid item xs={4}>
          <Img
            src={`${process.env.STRAPI_CMS_URL}${Image.data.attributes.url}`}
            alt={Image.data.attributes.name}
            loading="lazy"
          />
        </Grid>
        <Grid item xs={8}>
          <Grid
            item
            container
            direction="column"
            spacing={4}
          >
            <Grid item zeroMinWidth>
              <Typography variant="h6">{TitleText}</Typography>
              <Typography variant="subtitle1">
                {Description}
              </Typography>
            </Grid>
            <Grid item>
              <Button sx={{border: 1}}>
                {ButtonText}
              </Button>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </Box>
    
  );
};

export default TwoColumnBlock;
