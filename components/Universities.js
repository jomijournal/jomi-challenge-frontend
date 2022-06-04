import React from "react";
import Slider from "react-slick";
import { useTheme } from "@mui/material/styles";
import { Box, Typography } from "@mui/material/";
import useMediaQuery from "@mui/material/useMediaQuery";
import Partner from "./CarouselSection";
import { motion } from "framer-motion";

const DISTANCE = 120;

const TRANSITION_ENTER = {
  duration: 0.64,
  ease: [0.43, 0.13, 0.23, 0.96],
};
const TRANSITION_EXIT = {
  duration: 0.48,
  ease: [0.43, 0.13, 0.23, 0.96],
};

const varFadeInRight = {
  initial: { x: DISTANCE, opacity: 0 },
  animate: { x: 0, opacity: 1, transition: TRANSITION_ENTER },
  exit: { x: DISTANCE, opacity: 0, transition: TRANSITION_EXIT },
};

const Universities = ({ unis }) => {
  const theme = useTheme();
  const isXs = useMediaQuery(theme.breakpoints.up("xs"), {
    defaultMatches: true,
  });
  const isSm = useMediaQuery(theme.breakpoints.up("sm"), {
    defaultMatches: true,
  });
  const isMd = useMediaQuery(theme.breakpoints.up("md"), {
    defaultMatches: true,
  });
  const isLg = useMediaQuery(theme.breakpoints.up("lg"), {
    defaultMatches: true,
  });

  let slidesToShow = 2;
  if (isXs) {
    slidesToShow = 2;
  }
  if (isSm) {
    slidesToShow = 2;
  }
  if (isMd) {
    slidesToShow = 3;
  }
  if (isLg) {
    slidesToShow = 4;
  }

  const sliderOpts = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow,
    slidesToScroll: 1,
    arrows: true,
    autoplay: true,
    autoplaySpeed: 2000,
  };

  return (
    <Box mb={8} mt={3}>
      <motion.div variants={varFadeInRight}>
        <Typography
          variant="h5"
          color="text.primary"
          gutterBottom
          sx={{
            fontWeight: 200,
            marginBottom: theme.spacing(1),
          }}
          align="center"
        >
          Subscriping Instutitions
        </Typography>
      </motion.div>
      <Slider {...sliderOpts}>
        {unis &&
          unis.map((item, i) => {
            return (
              <Partner item={item.logo} key={i} theme={theme} alt={item.name} />
            );
          })}
      </Slider>
    </Box>
  );
};

export default Universities;
