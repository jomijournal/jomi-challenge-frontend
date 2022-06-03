import { Stack } from "@mui/material";
import { ComponentCommonHeader } from "graphql/types";
type Props = {
  data: ComponentCommonHeader;
};
const HeaderBlock = ({ data: {ButtonLink, ButtonText, Text} }: Props) => {
  return <Stack spacing={2}>
      <strong>HeaderBlock</strong>
      <span>{Text}</span>
      <a href={ButtonLink}>{ButtonText}</a>
    </Stack>;
};

export default HeaderBlock;
