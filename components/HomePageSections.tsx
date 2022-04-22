import React from 'react';
import { HomePageQuery } from 'graphql/cms/homepage.generated';
import CarouselBlock from './common/CarouselBlock';
import HeaderBlock from './common/HeaderBlock';
import TwoColumnBlock from './common/TwoColumnBlock';

type Unpacked<T> = T extends (infer U)[]
  ? U
  : T extends (...args: any[]) => infer U
  ? U
  : T extends Promise<infer U>
  ? U
  : T;

type Props = {
  data: Unpacked<HomePageQuery['homePage']['data']['attributes']['sections']>;
};

const HomePageSections = ({ data }: Props) => {
  //TODO : Fix this component so that it can render other components
  switch (data.__typename) {
    case 'ComponentCommonHeader':
      return <HeaderBlock data={data} />;
    case 'ComponentCommonCarousel':
      return <CarouselBlock data={data} />;
    case 'ComponentCommonTwoColumnBlock':
      return <TwoColumnBlock data={data} />;
    default:
      return <div>Error</div>;
  }
};

export default HomePageSections;
