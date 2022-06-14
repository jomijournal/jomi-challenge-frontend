import { ComponentCommonHeader } from "graphql/types";
import { Typography } from "@mui/material";
type Props = {
  data: ComponentCommonHeader;
};
const HeaderBlock = ({ data }: Props) => {
  //TODO: Complete this component
  return (
    <Typography variant="h4">
      {data.Text}
    </Typography>
  );
};

export default HeaderBlock;
