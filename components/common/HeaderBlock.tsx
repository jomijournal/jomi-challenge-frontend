import { Box, Typography } from "@mui/material";
import { ComponentCommonHeader } from "graphql/types";
type Props = {
  data: ComponentCommonHeader;
};
const HeaderBlock = ({ data }: Props) => {
  return (
    <Box textAlign="center">
      <Typography variant="h5" fontFamily="'Lexend Giga', sans-serif">{data.Text}</Typography>
    </Box>
  );
};

export default HeaderBlock;
