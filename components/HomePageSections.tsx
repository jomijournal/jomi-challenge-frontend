import { HomePageQuery } from "graphql/cms/homepage.generated";
import React from "react";
import HeaderBlock from "./common/HeaderBlock";
import TwoColumnBlock from "./common/TwoColumnBlock";
import CarouselBlock from "./common/CarouselBlock";

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
      //@ts-ignore
      return <CarouselBlock data = { data }/>;
    case "ComponentCommonHeader":
      //@ts-ignore
      return <HeaderBlock data = { data } />;
    case "ComponentCommonTwoColumnBlock":
      //@ts-ignore
      return <TwoColumnBlock data = { data } />;
  }
};

export default HomePageSections;
