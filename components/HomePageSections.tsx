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
  //TODO : Fix this component so that it can render other components
  switch (data.__typename) {
    case "ComponentCommonHeader":
      return <HeaderBlock data={data} />;
    case "ComponentCommonTwoColumnBlock":
      //@ts-ignore
      return <TwoColumnBlock data={data} />;
    case "ComponentCommonCarousel":
      return <CarouselBlock data={data} />;
  }
};

export default HomePageSections;
