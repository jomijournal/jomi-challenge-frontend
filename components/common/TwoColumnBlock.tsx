import { ComponentCommonTwoColumnBlock } from "graphql/types";
import { Box, Button, Container, Typography } from "@mui/material";
import Image from "next/image";

type Props = {
  data: ComponentCommonTwoColumnBlock;
};
const TwoColumnBlock = (props: Props) => {

  const image = props?.Image?.data?.attributes;

  //TODO: Implement this component
  return (
    <Box sx={{
        display: "flex",
        flexDirection: props?.ImagePosition === 'Right' ? 'row-reverse' : 'row',
        alignItems: "center",
        justifyContent: "space-between"
      }}
    >
      <Box sx={{
          flex: 1,
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          ...(props?.ImagePosition === 'Right' ? {marginLeft: 3} : {marginRight: 3})
        }}
      >
        {
          image?.url &&
          <Image
            src={`${process.env.STRAPI_CMS_URL}${image.url}`}
            placeholder={image?.previewUrl ? 'blur' : 'empty'}
            blurDataURL={`${process.env.STRAPI_CMS_URL}${image?.previewUrl}`}
            width={image?.width}
            height={image?.height}
          />
        }
      </Box>
      <Box sx={{
          flex: 1
        }}
      >
        {
          props?.TitleText &&
          <Typography variant='h6'>{props.TitleText}</Typography>
        }
        {
          props?.Description &&
          <Typography>{props.Description}</Typography>
        }
        {
          (props?.ButtonUrl || props?.ButtonText) &&
            <Button href={props?.ButtonUrl} variant="outlined">{props?.ButtonText}</Button>
        }
      </Box>
    </Box>
  );
};

export default TwoColumnBlock;
