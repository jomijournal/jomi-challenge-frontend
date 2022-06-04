import { ComponentCommonHeader } from "graphql/types";
import { Box, Typography } from "@mui/material";
import { alpha, useTheme } from "@mui/material/styles";
import Typed from "react-typed";

type Props = {
  data: ComponentCommonHeader;
};
const HeaderBlock = ({ data }: Props) => {
  const theme = useTheme();
  //TODO: Complete this component
  return (
    <Box>
      <Typography
        variant="h2"
        color="text.primary"
        gutterBottom
        sx={{
          fontWeight: 700,
          marginTop: theme.spacing(4),
        }}
        align="center"
      >
        {data?.Text}&nbsp;
        <Typography
          color={"primary"}
          component={"span"}
          variant={"inherit"}
          sx={{
            background: `linear-gradient(180deg, transparent 82%, ${alpha(
              theme.palette.secondary.main,
              0.3
            )} 0%)`,
          }}
        >
          <Typed
            strings={["content.", "articles.", "videos."]}
            typeSpeed={80}
            loop={true}
          />
        </Typography>
      </Typography>
    </Box>
  );
};

export default HeaderBlock;
