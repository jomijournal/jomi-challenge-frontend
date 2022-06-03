import { Typography, Box, Divider } from "@mui/material";
import { ComponentCommonHeader } from "graphql/types";

type Props = {
  data: ComponentCommonHeader;
};

//Return a render of the Header Section pass down from the HomePage query
//TODO Completed
const HeaderBlock: React.FC<Props> = ({ data }) => {
  return(
    <>
      <Box display="flex" justifyContent="center">
        <Typography variant="h3" fontFamily="Roboto">
          {data.Text}
        </Typography>
      </Box>
      <Divider sx={{mb: 4, mt:2}}/>
    </>
  );
};

export default HeaderBlock;
