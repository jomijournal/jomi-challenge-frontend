import { ComponentCommonHeader } from "graphql/types";
type Props = {
  data: ComponentCommonHeader;
};
const HeaderBlock = ({ data }: Props) => {

  //TODO: Complete this component
  return (
    <>
    <br />
    <h2 style={{textAlign:'center'}}>{data.Text}</h2>
    <h2 style={{textAlign:'center'}}>{data.Text_2}</h2>
    </>
  )
};

export default HeaderBlock;
