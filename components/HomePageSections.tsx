import { HomePageQuery } from "graphql/cms/homepage.generated";
import React from "react";
import TwoColumnBlock from "./common/TwoColumnBlock";
import CarouselBlock from "./common/CarouselBlock";
import HeaderBlock from "./common/HeaderBlock";
import { Box, Divider } from "@mui/material";

type Unpacked<T> = T extends (infer U)[]
  ? U
  : T extends (...args: any[]) => infer U
  ? U
  : T extends Promise<infer U>
  ? U
  : T;

type Props = {
  data: Unpacked<HomePageQuery["homePage"]["data"]["attributes"]["sections"]>;
};

const Section = (child) => {
  return (
    <Box sx={{ justifyContent: "center" }}>
      <main>
        {child}
        <Divider sx={{ margin: "5%" }} />
      </main>
    </Box>
  );
};

const HomePageSections = ({ data }: Props) => {
  //TODO : Fix this component so that it can render other components
  switch (data.__typename) {
    case "ComponentCommonCarousel":
      return Section(<CarouselBlock data={data} />);
    case "ComponentCommonHeader":
      return Section(<HeaderBlock data={data} />);
    case "ComponentCommonTwoColumnBlock":
      //@ts-ignore
      return Section(<TwoColumnBlock data={data} />);
    default:
      return <div> Nothing Was Found </div>;
  }
};

export default HomePageSections;
