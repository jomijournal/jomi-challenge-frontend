import { Typography, Box } from "@mui/material";
import { experimentalStyled as styled } from "@mui/material/styles";
import { ComponentCommonHeader } from "graphql/types";
type Props = {
  data: ComponentCommonHeader;
};
const HeaderBlock = (props: Props) => {
  //TODO: Complete this component
  const data = props.data;
  return (
    <BlockWrapper>
      <Typography variant='h2' sx={(theme) => ({
        [theme.breakpoints.down("md")]: {
          fontSize: 32
        }
      })}>{data.Text}</Typography>
    </BlockWrapper>
  );
};

export default HeaderBlock;

const BlockWrapper = styled(Box)(() => ({
  padding: "40px 0",
}));
