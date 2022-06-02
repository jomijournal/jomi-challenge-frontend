import { Box, Typography, Button } from "@mui/material";
import { ComponentCommonTwoColumnBlock } from "graphql/types";
import Image from "next/image";

type Props = {
  data: ComponentCommonTwoColumnBlock;
};
const TwoColumnBlock = ({ data }: Props) => {
  return (
    <Box>
      <Typography variant="h2" align="center" fontSize={32} marginBottom={3}>
        {data.TitleText}
      </Typography>
      <Box
        display="flex"
        justifyContent="between"
        alignItems="center"
        width="100%"
      >
        <Image
          src={data.Image.data.attributes.url}
          alt={data.Image.data.attributes.alternativeText}
          width={data.Image.data.attributes.width}
          height={data.Image.data.attributes.height}
        />
        <Box
          display="flex"
          justifyContent="between"
          flexDirection="row"
          alignItems="start"
          paddingY="10"
        >
          <Typography variant="body1" marginBottom={3}>
            {data.Description}
          </Typography>
          <Button
            component="a"
            href={data.ButtonUrl}
            variant="outlined"
            color="primary"
          >
            {data.ButtonText}
          </Button>
        </Box>
      </Box>
    </Box>
  );
};

export default TwoColumnBlock;
