import { ComponentCommonHeader } from "graphql/types";
import { Box } from "@mui/material";

type Props = {
  data: ComponentCommonHeader;
};
const HeaderBlock = ({ data }: Props) => {
  return (
    <Box
      sx={{
        height: 100,
        fontSize: 20,
        border: 1,
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        marginBottom: 5,
      }}
    >
      {data.Text}
    </Box>
  );
};

export default HeaderBlock;
