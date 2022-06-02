import { ComponentCommonHeader } from "graphql/types";
import { Typography } from "@mui/material";

type Props = {
  data: ComponentCommonHeader;
};
const HeaderBlock = ({ data }: Props) => {
  //TODO: Complete this component
  return (
    <Typography variant='h5' align='center'>{data?.Text}</Typography>
  );
};

export default HeaderBlock;
