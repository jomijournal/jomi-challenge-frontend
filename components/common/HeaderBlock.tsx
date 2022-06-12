import { ComponentCommonHeader } from "graphql/types";
import Typography from "@mui/material/Typography";

type Props = {
  data: ComponentCommonHeader;
};
const HeaderBlock = ({ data }: Props) => {
  return (
    <Typography className="py-5 text-center h1"> { data.Text }</Typography>
  );
};

export default HeaderBlock;
