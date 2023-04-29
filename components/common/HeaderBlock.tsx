import { ComponentCommonHeader } from 'graphql/types';
import { Box, Typography } from '@mui/material';

type Props = {
  data: ComponentCommonHeader;
};

const appBarStyle = {
  width: '100%',
  display: 'flex',
  justifyContent: 'center',
};

const testStyle = {
  flexGrow: 1,
  textAlign: 'center',
  margin: '10px',
};

const HeaderBlock = ({ data }: Props) => {
  const { Text } = data;
  return (
    <Box position='static' sx={appBarStyle}>
      <Typography variant='h4' sx={testStyle}>
        {Text?.trim()}
      </Typography>
    </Box>
  );
};

export default HeaderBlock;
