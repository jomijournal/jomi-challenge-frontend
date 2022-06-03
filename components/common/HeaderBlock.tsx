import { ComponentCommonHeader } from "graphql/types";
import { Typography } from "@mui/material";

type Props = {
  data: ComponentCommonHeader;
};
const HeaderBlock = ({ data }: Props) => {
  return (
    <Typography variant="h3" align="center" marginY={6}>{data.Text}</Typography>
  );
};

export default HeaderBlock;
