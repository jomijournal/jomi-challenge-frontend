import { ComponentCommonHeader } from "graphql/types";
import { Box, Typography } from "@mui/material";

type Props = {
  data: ComponentCommonHeader;
};
const HeaderBlock = ({ data }: Props) => {
  //TODO: Complete this component
  return (
    <Box>
      <Typography
        sx={{
          fontWeight: 1300,
          marginTop: "1%",
        }}
        gutterBottom
        variant="h4"
        color={"secondary"}
        align={"center"}
      >
        {data?.Text}
      </Typography>
    </Box>
  );
};

export default HeaderBlock;
