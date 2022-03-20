import { CircularProgress, Stack } from "@mui/material";
import React from "react";

const LoadingScreen = () => {
  return (
    <Stack
      width="100vw"
      height="100vh"
      display="flex"
      alignItems={"center"}
      justifyContent={"center"}
      bgcolor="primary.main"
    >
      <CircularProgress sx={{ color: "primary.contrastText" }} />
    </Stack>
  );
};

export default LoadingScreen;
