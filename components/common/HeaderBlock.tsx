import { Box, Typography } from "@mui/material";
import { ComponentCommonHeader } from "graphql/types";
type Props = {
  data: ComponentCommonHeader;
};
const HeaderBlock = ({ data }: Props) => {
  //TODO: Complete this component
  return (
    <Box>
      <Typography variant="h1" align="center" marginY={3} fontSize={36}>
        {data.Text}
      </Typography>
    </Box>
  );
};

export default HeaderBlock;
