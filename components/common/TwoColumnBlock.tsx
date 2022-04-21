import { Grid, Container, Box } from "@mui/material";
import { ComponentCommonTwoColumnBlock } from "graphql/types";
const API_URL = "http://localhost:1337";
const TwoColumnBlock = (props: ComponentCommonTwoColumnBlock) => {
  return (
    <Container>
      <Grid container spacing={2} className="componentCommonTwoColumnBlock">
        {props.ImagePosition === "Right" ? (
          <>
            <Grid item xs={12} md={6} className="ColumnBlock">
              <Box
                component="img"
                sx={{
                  height: { md: 250 },
                  width: {
                    xs: "100%",
                    md: 350,
                  },
                }}
                alt="The house from the offer."
                src={`${API_URL}${props.Image.data.attributes.url}`}
              />
            </Grid>
            <Grid item xs={12} md={6} className="ColumnBlock">
              <h2>{props.TitleText}</h2>
              <p>{props.Description}</p>
              <button className="learnMore">{props.ButtonText}</button>
            </Grid>
          </>
        ) : (
          <>
            <Grid item xs={12} md={6} className="ColumnBlock">
              <h2>{props.TitleText}</h2>
              <p>{props.Description}</p>
              <button className="learnMore">{props.ButtonText}</button>
            </Grid>
            <Grid item xs={12} md={6} className="ColumnBlock">
              <Box
                component="img"
                sx={{
                  height: { md: 250 },
                  width: {
                    xs: "100%",
                    md: 350,
                  },
                  /*  */
                }}
                alt="The house from the offer."
                src={`${API_URL}${props.Image.data.attributes.url}`}
              />
            </Grid>
          </>
        )}
      </Grid>
      <hr className="line" />
    </Container>
  );
};

export default TwoColumnBlock;
