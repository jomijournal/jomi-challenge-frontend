import { HomePageQuery } from "graphql/cms/homepage.generated";
import React from "react";
import TwoColumnBlock from "./common/TwoColumnBlock";
import HeaderBlock from './common/HeaderBlock';
import CarouselBlock from './common/CarouselBlock';

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
      case "ComponentCommonHeader":
        return <HeaderBlock data={data} />;
      case "ComponentCommonTwoColumnBlock":
        return <TwoColumnBlock data={data} />;
      case "ComponentCommonCarousel":
        return <CarouselBlock data={data} />
    }
};

export default HomePageSections;
