/* eslint-disable @next/next/no-img-element */
import { ComponentCommonTwoColumnBlock } from "graphql/types";
import { Box, Button, Typography } from "@mui/material";
import { experimentalStyled as styled } from "@mui/material/styles";
import Link from "next/link";

type Props = {
  data: ComponentCommonTwoColumnBlock;
};
const TwoColumnBlock = (props: Props) => {
  //TODO: Implement this component
  const data = props.data;

  return (
    <BlockWrapper imagePosition={data.ImagePosition}>
      <Box flex={1}>
        <Box position='relative'>
          <img src={`${process.env.STRAPI_CMS_URL}${data.Image.data.attributes.url}`} alt='' width='100%' />
        </Box>
      </Box>
      <ContentWrapper flex={1} imagePosition={data.ImagePosition}>
        <Box>
          <Typography variant='h6' marginBottom={4}>{data.TitleText}</Typography>
          <Typography variant='body1' marginBottom={4}>{data.Description}</Typography>
          <Link href={data.ButtonUrl} passHref>
            <Button variant='outlined'>{data.ButtonText}</Button>
          </Link>
        </Box>
      </ContentWrapper>
    </BlockWrapper>
  );
};

export default TwoColumnBlock;

const BlockWrapper = styled(Box, {
  shouldForwardProp: (prop) => prop !== "imagePosition",
})<{ imagePosition?: string }>(({ imagePosition, theme }) => ({
  display: "flex",
  flexDirection: imagePosition === 'Left' ? 'row' : 'row-reverse',
  alignItems: "center",
  padding: "40px 0",
  [theme.breakpoints.down("md")]: {
    flexDirection: 'column',
  },
}));
const ContentWrapper = styled(Box, {
  shouldForwardProp: (prop) => prop !== "imagePosition",
})<{ imagePosition?: string }>(({ imagePosition, theme }) => ({
  padding: imagePosition === 'Left' ? '0 0 0 30px' : '0 30px 0 0',
  [theme.breakpoints.down("md")]: {
    marginTop: "30px",
    padding: 0
  },
}));
