import { Typography } from "@mui/material";
import { ComponentCommonHeader } from "graphql/types";

type Props = {
  data: ComponentCommonHeader;
};

const HeaderBlock = ({ data: { Text } }: Props) => {
  //TODO: Complete this component
  return (
    <Typography variant="h4" textAlign="center">
      {Text}
    </Typography>
  );
};

export default HeaderBlock;
