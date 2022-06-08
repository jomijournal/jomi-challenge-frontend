import { Box, Button, Typography } from "@mui/material";
import { ComponentCommonTwoColumnBlock } from "graphql/types";
import imageUrl from "lib/imageUrl";
import Image from "next/image";
import styles from "./Column.module.css";

type Props = {
  data: ComponentCommonTwoColumnBlock;
};

const TwoColumnBlock = ({ data }: Props) => {
  const { TitleText, Description, Image: dataImage, ButtonText } = data;
  //TODO: Implement this component
  const ltr = data.ImagePosition === "Left";
  return (
    <Box
      className={
        ltr ? styles.column_container_ltr : styles.column_container_rtl
      }
    >
      <Box className={styles.column_image_wrapper}>
        <Image
          priority={true}
          className={styles.column_image}
          src={imageUrl(dataImage.data.attributes.url)}
          alt={TitleText}
          layout="fill"
        />
      </Box>
      <Box className={styles.column_text_wrapper}>
        <Typography variant="h6">{TitleText}</Typography>
        <Typography>{Description}</Typography>
        <Button
          sx={{
            width: 220,
          }}
          variant="outlined"
          href={data.ButtonUrl}
        >
          {ButtonText}
        </Button>
      </Box>
    </Box>
  );
};

export default TwoColumnBlock;
