import { ComponentCommonHeader } from "graphql/types";
import Card from '@mui/material/Card'
import Typography from '@mui/material/Typography'

type Props = {
  data: ComponentCommonHeader;
};
const HeaderBlock = ({ data }: Props) => {
  return (
    <Card>
      <Typography>
          <a href={data.ButtonLink}>{data.Text}</a>
      </Typography>
    </Card>
  )
};

export default HeaderBlock;
