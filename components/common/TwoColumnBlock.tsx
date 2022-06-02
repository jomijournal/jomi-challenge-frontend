import { ComponentCommonTwoColumnBlock } from "graphql/types";
import { Grid, Box, Typography, Button } from "@mui/material";
import { useTheme } from "@mui/material/styles";
import useMediaQuery from "@mui/material/useMediaQuery";

type Props = {
  data: ComponentCommonTwoColumnBlock;
};
const TwoColumnBlock = ({ data }: Props) => {
  //TODO: Implement this component
  const theme = useTheme();
  const isMd = useMediaQuery(theme.breakpoints.up("md"), {
    defaultMatches: true,
  });

  const imageData = data.Image.data.attributes;

  return (
    <Grid container spacing={4}>
      <Grid item container alignItems={"center"} xs={12} md={6}>
        <Box data-aos={isMd ? "fade-right" : "fade-up"}>
          <Box marginBottom={2}>
            {data.TitleText && (
              <Typography
                variant="h2"
                color="text.primary"
                sx={{
                  fontWeight: 700,
                }}
              >
                {data.TitleText}
              </Typography>
            )}
          </Box>
          <Box marginBottom={3}>
            {data.Description && (
              <Typography
                variant="h6"
                component="p"
                color="text.secondary"
                sx={{ fontWeight: 400 }}
              >
                {data.Description}
              </Typography>
            )}
          </Box>
          <Box
            display="flex"
            flexDirection={{ xs: "column", sm: "row" }}
            alignItems={{ xs: "stretched", sm: "flex-start" }}
          >
            <Box
              marginTop={{ xs: 2, sm: 0 }}
              marginLeft={{ sm: 2 }}
              width={{ xs: "100%", md: "auto" }}
            >
              {data.ButtonText && (
                <Button
                  component={"a"}
                  href={data.ButtonUrl}
                  variant="outlined"
                  color="primary"
                  size="large"
                  fullWidth={isMd ? false : true}
                >
                  {data.ButtonText}
                </Button>
              )}
            </Box>
          </Box>
        </Box>
      </Grid>
      <Grid item xs={12} md={6} order={{ xs: 2, sm: 3 }}>
        <Box
          height={1}
          width={1}
          display={"flex"}
          justifyContent={"center"}
          alignItems={"center"}
        >
          {imageData && (
            <Box height={1} width={1} maxWidth={500}>
              {/* @ts-ignore */}
              <Box
                component={"img"}
                height={1}
                width={1}
                src={`${process.env.STRAPI_CMS_URL + imageData.url}`}
                alt={imageData.alternativeText}
                effect="blur"
                borderRadius={2}
                maxWidth={600}
                maxHeight={500}
                sx={{
                  objectFit: "cover",
                  boxShadow: "19px 20px 0px 0 rgb(140 152 164 / 13%)",
                }}
              />
            </Box>
          )}
        </Box>
      </Grid>
    </Grid>
  );
};

export default TwoColumnBlock;
