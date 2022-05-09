import { ComponentCommonHeader } from "graphql/types";
import { Box, Container, Typography } from "@mui/material";

type Props = {
  data: ComponentCommonHeader;
};

const HeaderBlock = ({ data }: Props) => {
  //TODO: Complete this component
  return <>
    <Container>
      <Box>
        {/* Start Header block */}
        <header>
          <div className="header-heading">
            <a href="#">{data.Text}</a>
          </div>
        </header>
        {/* End Header block */}
      </Box>
    </Container>
  </>;
};

export default HeaderBlock;
