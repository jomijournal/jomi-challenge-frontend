import { HomePageQuery } from "graphql/cms/homepage.generated";
import React from "react";
import TwoColumnBlock from "./common/TwoColumnBlock";
import HeaderBlock from "./common/HeaderBlock";
import CarouselBlock from "./common/CarouselBlock";
import { Typography } from "@mui/material";

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

const HomePageSections = ({ data }: Props) => {
  //TODO : Fix this component so that it can render other components
  switch (data.__typename) {
    case "ComponentCommonCarousel":
      return <CarouselBlock data={data} />;
    case "ComponentCommonHeader":
      return <HeaderBlock data={data} />;
    case "ComponentCommonTwoColumnBlock":
      //@ts-ignore
      return <TwoColumnBlock data={data} />;
    default:
      return <Typography variant="h4">Nothing to show</Typography>;
  }
};

export default HomePageSections;
