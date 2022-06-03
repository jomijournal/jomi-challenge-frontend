import { ComponentCommonTwoColumnBlock } from "graphql/types";
import { Grid, Box, Typography, Link } from "@mui/material";
import { STRAPI_CMS_URL } from "lib/StrapiCMSUrl"
type Props = {
  data: ComponentCommonTwoColumnBlock;
};
const TwoColumnBlock = (props: Props) => {
  //TODO: Implement this component
  const ImageData = props.data?.Image?.data?.attributes;
  const isLeft = props.data?.ImagePosition == "Left" ? true : false;

  return (
    <>
      {
        props.data?.TitleText ? 
          (
            <Typography variant="h4" display="flex" justifyContent="center" my={5} >{props.data?.TitleText}</Typography>
          ) : null
      }
      <Grid container justifyContent="center" mb={10}>
        <Grid item xs={12} md={6} order={{md: !isLeft ? 2 : 1, sm: 1}}>
          <Box display="flex" justifyContent={isLeft ? 'start' : 'end'}>
            <img src={STRAPI_CMS_URL + ImageData?.url} width="100%" />
          </Box>
        </Grid>
        <Grid item md={6} xs={12}  
          order={{md: !isLeft ? 1 : 2, sm: 1}}
        >
          <Box display="flex" flexDirection="column" alignItems="start" 
            pr={isLeft ? { xs: 3, md: 10 } : { xs: 3, md: 20 }} 
            pl={isLeft ? { xs: 3, md: 10 } : { xs: 3, md: 0 }}
          >
            <Typography variant="h5" display="flex" justifyContent="start" mt={5} mb={5} >{props.data?.SubTitle}</Typography>
            <Typography fontSize={18} display="flex" justifyContent="start" mb={5} lineHeight={1.5} color="#4b5563">{props.data?.SubDescription}</Typography>
            <Link href={props.data?.ButtonUrl} underline="none" display="flex" justifyContent="start" px={2} py={1} border={1} borderRadius={1}>
              {props.data?.ButtonText}
            </Link>
          </Box>
        </Grid>
      </Grid>
    </>
  );
};

export default TwoColumnBlock;
