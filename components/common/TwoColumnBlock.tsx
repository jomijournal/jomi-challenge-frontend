import { ComponentCommonTwoColumnBlock } from "graphql/types";
import { Box, Container, Typography } from "@mui/material";

type Props = {
  data: ComponentCommonTwoColumnBlock;
};
const TwoColumnBlock = ({ data }: Props) => {
  //TODO: Implement this component
  return <>
    {/* <div className="access-heading">
      <a href="#">Access. Anytime, anywhere.</a>
    </div> */}
    {/* start Two column block */}
    <Container>
      <Box>
        <div className={Number(data.id) % 2 != 0 ? "indivdual border-bottom" : "indivdual"}>
          {Number(data.id) % 2 != 0 ? <>
            <div className="indivdual-img">
              <img src={`${process.env.STRAPI_CMS_URL}` + data.Image.data.attributes.url} style={{ width: "65%" }} />
            </div>
            <div className="indivdual-details">
              <h3>{data.TitleText}</h3>
              <p>{data.Description}</p>
              <button>{data.ButtonText}</button>
            </div></> : <>
            <div className="indivdual-details">
              <h3>{data.TitleText}</h3>
              <p>{data.Description}</p>
              <button>{data.ButtonText}</button>
            </div>
            <div className="indivdual-img rightside">
              <img src={`${process.env.STRAPI_CMS_URL}` + data.Image.data.attributes.url} style={{ width: "65%" }} />
            </div></>}
        </div>
      </Box>
    </Container>
    {/* end Two column block */}
  </>;
};

export default TwoColumnBlock;
