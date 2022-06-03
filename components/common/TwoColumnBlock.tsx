import { ComponentCommonTwoColumnBlock } from "graphql/types";
import { Box, Button, Typography } from "@mui/material";

type Props = {
  data: ComponentCommonTwoColumnBlock;
};
const TwoColumnBlock = ({ data }: Props) => {
  return (
    <Box 
      sx={{ 
        display: 'flex',
        borderBottom: 1,
        paddingBottom: 4,
        marginBottom: 4,
        justifyContent: 'space-between',
        flexDirection: data.ImagePosition == 'Right' ? 'row-reverse' : 'row',
      }}
    >
      <Box
        component={"img"}
        src={process.env.STRAPI_CMS_URL + data.Image.data.attributes.url}
        sx={{
          width: 300,
          height: 300,
          border: 1,
        }}
      />
      <Box
        sx={{
          marginLeft: 4,
          width: 300,
        }}
      >
        <Typography variant="h4">{data.TitleText}</Typography>
        <Typography>
          {data.Description}
        </Typography>
        <Button
          href={data.ButtonUrl}
          sx={{
            border: 1,
            paddingX: 2,
            paddingY: 1,
          }}
        >
          {data.ButtonText}
        </Button>
      </Box>

    </Box>
  );
};

export default TwoColumnBlock;
