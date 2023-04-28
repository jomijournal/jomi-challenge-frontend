import { Box, Button, Grid, Stack, Typography } from "@mui/material";
import { ComponentCommonTwoColumnBlock, Enum_Componentcommontwocolumnblock_Imageposition } from "graphql/types";
import { getStrapiImageUrl } from "lib/image";
import Image from "next/image";
import Link from "next/link";
import { useMemo } from "react";

type Props = {
  data: ComponentCommonTwoColumnBlock;
};
const TwoColumnBlock = ({ data }: Props) => {
  const { TitleText, Description, ImagePosition, Image: BlockImage, ButtonText, ButtonUrl } = data

  const ImageData = useMemo(() => {
    return BlockImage?.data?.attributes ?? null
  }, [BlockImage])

  return (
    <Grid container justifyContent="space-between" columnSpacing={2}>
      <Grid item sm={12} md={6} paddingY={6} paddingRight={4} order={1}>
        <Stack justifyContent="center" height="100%" spacing={4}>
          <Typography variant="h5">{TitleText}</Typography>
          <Typography variant="h6">{Description}</Typography>
          <Link href={ButtonUrl} passHref>
            <Button variant="outlined" sx={{
              width: 'fit-content'
            }}>{ButtonText}</Button>
          </Link>
        </Stack>
      </Grid>
      <Grid
        item
        sm={12}
        md={6}
        paddingY={6}
        order={ImagePosition === Enum_Componentcommontwocolumnblock_Imageposition.Left ? 0 : 2}
      >
        {!!ImageData ? (
          <Box
            marginRight={ImagePosition === Enum_Componentcommontwocolumnblock_Imageposition.Right ? 0 : "auto"}
            marginLeft={ImagePosition === Enum_Componentcommontwocolumnblock_Imageposition.Left ? 0 : "auto"}
            width="fit-content"
          >
            <Image
              width={ImageData.width}
              height={ImageData.height}
              src={getStrapiImageUrl(ImageData.url)}
              alt={ImageData.alternativeText}
            />
          </Box>
        ) : null}
      </Grid>
    </Grid>
  );
};

export default TwoColumnBlock;
