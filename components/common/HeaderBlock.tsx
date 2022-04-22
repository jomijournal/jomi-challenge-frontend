import { Typography } from '@mui/material';
import { ComponentCommonHeader } from 'graphql/types';
type Props = {
  data: ComponentCommonHeader;
};
const HeaderBlock = ({ data }: Props) => {
  return (
    <Typography
      variant='h4'
      component='div'
      sx={{ textAlign: 'center', p: 2, mb: 2 }}
    >
      {data.Text}
    </Typography>
  );
};

export default HeaderBlock;
