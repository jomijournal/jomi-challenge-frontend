import { textAlign } from "@mui/system";
import { ComponentCommonHeader } from "graphql/types";
type Props = {
  data: ComponentCommonHeader;
};
const HeaderBlock = ({ data }: Props) => {
  //TODO: Complete this component
  // let header = {
  //   id: data.id,
  //   text: data.Text,
  //   buttonText: data.ButtonText,
  //   buttonLink: data.ButtonLink
  // }
  // return header;
  return (
    <div>
      <h1>
        {data.Text}
      </h1>
    </div>
  );
};

export default HeaderBlock;
