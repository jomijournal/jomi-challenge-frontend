import {DialogTitle} from '@mui/material';
import { ComponentCommonHeader } from "graphql/types";
import {styled} from '@mui/material/styles';
type Props = {
  data: ComponentCommonHeader;
};

const Text = styled(DialogTitle)(({ theme }) => ({
  backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: 'center',
  color: theme.palette.text.primary,
  fontSize: '1.5rem',
  width: '100%',
  marginBottom: 40,
}));

const HeaderBlock = ({ data }: Props) => {
  return <Text>{data.Text}</Text>
};

export default HeaderBlock;
