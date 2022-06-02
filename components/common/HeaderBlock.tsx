import { ComponentCommonHeader } from "graphql/types";
import { Typography, Box } from "@mui/material";

type Props = {
  data: ComponentCommonHeader;
};
const HeaderBlock = ({ data }: Props) => {
  return (
    <Typography variant="h2" align="center" sx={{m: 5}}>
      <Box sx={{ fontWeight: 'bold', m: 1 }}>{data.Text}</Box>
    </Typography>
  )
};

export default HeaderBlock;
