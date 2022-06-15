import { ComponentCommonHeader } from "graphql/types";
import Typography from '@mui/material/Typography';

type Props = {
  data: ComponentCommonHeader;
};

const styles = {
  header: {
    display: 'flex',
    justifyContent: 'center',
    fontSize: '20px',
    fontWeight: '500'
  },
};

const HeaderBlock = ({ data }: Props) => {
  return <div>
      <Typography variant="h4" component="div" gutterBottom>
        Header Block
      </Typography>
    <p style={styles.header}>{data.Text}</p>
  </div>;
};

export default HeaderBlock;

