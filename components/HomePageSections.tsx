import { HomePageQuery } from "graphql/cms/homepage.generated";
import React from "react";
import TwoColumnBlock from "./common/TwoColumnBlock";
import CarouselBlock from "./common/CarouselBlock";
import HeaderBlock from "./common/HeaderBlock";

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
  switch (data.__typename) {
    case "ComponentCommonCarousel":
      return <CarouselBlock data={data} />;
    case "ComponentCommonHeader":
      return <HeaderBlock data={data} />;
    case "ComponentCommonTwoColumnBlock":
      return <TwoColumnBlock data={data} />;
    default:
      return null
  }
};

export default HomePageSections;
