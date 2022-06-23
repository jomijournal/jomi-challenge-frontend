import { ComponentCommonHeader } from "graphql/types";
import { Box, Typography } from "@mui/material";
import { useTheme } from "@mui/material/styles";

type Props = {
  data: ComponentCommonHeader;
};
const HeaderBlock = ({ data }: Props) => {
  //TODO: Complete this component
  const theme = useTheme();
  return (
    <Box sx={{ marginTop: '6%'}}>
     <Typography
        variant="h5"
        color="text.primary"
        gutterBottom
        sx={{
          fontWeight: 300,
          marginTop: theme.spacing(5),
        }}
        align="center"
      > {data.Text} </Typography>
    </Box>
  )
};

export default HeaderBlock;
