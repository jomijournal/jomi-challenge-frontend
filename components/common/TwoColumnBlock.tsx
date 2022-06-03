import { ComponentCommonTwoColumnBlock } from "graphql/types";
import { Typography, Grid, Box, Button, Divider } from "@mui/material";

type Props = {
  data: ComponentCommonTwoColumnBlock;
};

//TODO Completed
const TwoColumnBlock: React.FC<Props> = ({data}) => {
  //myImageUrl used to render the correct image from the API
  const myImageUrl: string = `http://localhost:1337${data.Image.data.attributes.url}`;

  //Return the components to be rendered
  //Use Grid system via MUI to correctly align elements
  return(
    <>
      <Grid 
        container 
        spacing={6}
        columns={2}
      >
        {/* Check the value of the Image Position field, render components accordingly */}
        {data.ImagePosition === "Left" ? 
          <Grid item xs={1}>
            <Box 
              component="img"
              alt={data.Image.data.attributes.name}
              src={myImageUrl}
              sx={{
                width: 1,
              }}
            />
          </Grid>
          : null
        }
        
        {/* Render the details */}
        <Grid item xs={1} sm container>
          <Grid item xs container direction="column" spacing={2}>
            <Grid item >
              <Typography variant="subtitle1" fontWeight="bold">
                {data.TitleText}
              </Typography>
            </Grid>
            <Grid item >
              <Typography variant="body2">
                {data.Description}
              </Typography>
            </Grid>
            <Grid item>
              <Button variant="outlined" href={data.ButtonUrl}>
                {data.ButtonText}
              </Button>
            </Grid>
          </Grid>
        </Grid>

        {data.ImagePosition === "Right" ? 
          <Grid item xs={1}>
            <Box 
              component="img"
              alt={data.Image.data.attributes.name}
              src={myImageUrl}
              sx={{
                width: 1,
              }}
            />
          </Grid>
          : null
        }
      </Grid>
      <Divider sx={{mb: 3, mt:3}}/>
    </>
  );
};

export default TwoColumnBlock;
