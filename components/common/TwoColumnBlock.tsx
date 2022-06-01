import {
  Box,
  Button,
  Container,
  Divider,
  Grid,
  Stack,
  Typography,
} from "@mui/material";
import { grey } from "@mui/material/colors";
import { ComponentCommonTwoColumnBlock } from "graphql/types";
import Image from "next/image";

type Props = {
  data: ComponentCommonTwoColumnBlock;
  first: boolean;
};

const getImage = (src: string): string => {
  return `${process.env.STRAPI_CMS_URL}${src}`;
};

const TwoColumnBlock = ({ data, first }: Props) => {
  //TODO: Implement this component
  const imageData = data.Image.data.attributes;

  const isRight = data.ImagePosition === "Right";

  const imageOrder = isRight ? 1 : 0;

  return (
    <Box px={3} pb={10}>
      <Box
        mb={10}
        {...(!first && {
          borderTop: "solid 1px grey",
        })}
      >
        {first ? (
          <Typography variant="h5" align="center" gutterBottom>
            {"Access Anytime, Anywhere"}
          </Typography>
        ) : null}
      </Box>
      <Grid container spacing={4}>
        <Grid
          item
          xs={12}
          md={6}
          sx={{
            order: imageOrder,
            display: "flex",
            justifyContent: {
              xs: "center",
              md: isRight ? "flex-end" : "flex-start",
            },
          }}
        >
          {imageData && (
            <Box
              sx={{
                width: "350px",
                height: "250px",
                position: "relative",
              }}
            >
              <Image
                alt={"Column Block Image"}
                src={getImage(imageData.url)}
                layout="fill"
                objectFit="cover"
              />
            </Box>
          )}
        </Grid>
        <Grid
          item
          xs={12}
          md={6}
          sx={{
            display: "flex",
            alignItems: "center",
            justifyContent: {
              md: isRight ? "flex-start" : "flex-end",
              xs: "center",
            },
          }}
        >
          <Container maxWidth={"xs"} sx={{ m: 0, padding: "0px !important" }}>
            <Stack spacing={3}>
              {data.TitleText && (
                <Typography variant="h5">{data.TitleText}</Typography>
              )}

              {data.Description && (
                <Typography variant="body1">{data.Description}</Typography>
              )}

              {data.ButtonText && (
                <Box>
                  <Button
                    component={"a"}
                    href={data.ButtonUrl}
                    variant="outlined"
                    sx={{
                      borderRadius: 0,
                      textTransform: "none",
                    }}
                  >
                    {data.ButtonText}
                  </Button>
                </Box>
              )}
            </Stack>
          </Container>
        </Grid>
      </Grid>
    </Box>
  );
};

export default TwoColumnBlock;
