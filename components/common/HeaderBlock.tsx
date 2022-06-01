import { Typography } from "@mui/material";
import { ComponentCommonHeader } from "graphql/types";
type Props = {
  data: ComponentCommonHeader;
};
const HeaderBlock = ({ data }: Props) => {
  //TODO: Complete this component
  return (
    <Typography variant="h4" align="center" sx={{ my: 8 }}>
      {data.Text}
    </Typography>
  );
};

export default HeaderBlock;
