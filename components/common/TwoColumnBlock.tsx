import { ComponentCommonTwoColumnBlock } from "graphql/types";
import Button from '@mui/material/Button';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';

type Props = {
  data: ComponentCommonTwoColumnBlock;
};

const styles = {
  title: {
    display: 'flex',
    justifyContent: 'center',
    fontSize: '20px',
    fontWeight: '500',
    marginBottom: '20px' 
  },
};

const TwoColumnBlock = ({ data }: Props) => {
  if (data.ImagePosition == 'Left') {
    return <>
      <Typography variant="h4" component="div" gutterBottom>
        TwoColumn Block
      </Typography>
      <label style={styles.title}>Access, Anytime, anywhere</label>
      <Grid  style={{marginBottom: '20px'}} container spacing={1}>
          <Grid item container spacing={2}>
            <Grid item xs={2}/>
            <Grid item xs={4}>
              <div style={{height: '200px'}}>
                <img style={{height: '100%'}}src={`http://localhost:1337${data.Image.data.attributes.url}`} alt="Individual Subscriptions" />
              </div>
            </Grid>
            <Grid item xs={4}>
              <div>
                <label>{data.TitleText}</label>
                <p>{data.Description}</p>
                <Button variant="outlined">{data.ButtonText}</Button>
              </div>
            </Grid>
          </Grid>
      </Grid><hr/>
    </>;
  }
  else {
    return <>
      <Grid style={{marginTop: '20px'}} container spacing={1}>
        <Grid item container spacing={2}>
          <Grid item xs={2}/>
          <Grid item xs={4}>
            <div>
              <label>{data.TitleText}</label>
              <p>{data.Description}</p>
              <Button variant="outlined">{data.ButtonText}</Button>
            </div>
          </Grid>
          <Grid item xs={4}>
            <div style={{height: '200px'}}>
              <img style={{height: '100%'}}src={`http://localhost:1337${data.Image.data.attributes.url}`} alt="Individual Subscriptions" />
            </div>
          </Grid>
        </Grid>
      </Grid>
    </>;
  }
};

export default TwoColumnBlock;
