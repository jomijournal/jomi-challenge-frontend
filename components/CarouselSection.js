import React from "react";
import Box from "@mui/material/Box";

export default function Partner({ item, theme, alt }) {
  return (
    <Box maxWidth={100} marginX={3}>
      <Box component="img" height={1} width={1} src={item} alt={alt} />
    </Box>
  );
}
