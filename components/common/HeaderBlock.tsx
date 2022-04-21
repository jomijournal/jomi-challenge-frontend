import { ComponentCommonHeader } from "graphql/types";
type Props = {
  data: ComponentCommonHeader;
};
const HeaderBlock = ({ data }: Props) => {
  return <div className="header">{data.Text}</div>;
};

export default HeaderBlock;
