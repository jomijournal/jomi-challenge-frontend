import { HomePageQuery } from "graphql/cms/homepage.generated";
import React from "react";
import TwoColumnBlock from "./common/TwoColumnBlock";
import CarouselBlock from "./common/CarouselBlock"
import HeaderBlock from "./common/HeaderBlock";

type Unpacked<T> = T extends (infer U)[]
  ? U
  : T extends (...args: any[]) => infer U
  ? U
  : T extends Promise<infer U>
  ? U
  : T;

type Props = {
  sections: Unpacked<HomePageQuery["homePage"]["data"]["attributes"]["sections"]>;
};

/*
Holds all the sections of the homepage.
Using Math.random to generate keys for the map() function since the component IDs are not unique.
*/
const HomePageSections: React.FC<Props> = ({ sections }) => {
  return(
    <>
      {/* Similar issue to the Type error in index.tsx. Same outcome  */}
      {sections.map((section) => {
        const mapKey = Math.random() * 1000;
        switch(section.__typename) {
          case "ComponentCommonCarousel":
            return <CarouselBlock data={section} key={mapKey} />;
          case "ComponentCommonHeader":
            return <HeaderBlock data={section} key={mapKey} />;
          case "ComponentCommonTwoColumnBlock":
            return <TwoColumnBlock data={section} key={mapKey}/>;
        }
      })}
    </>
  )
};

export default HomePageSections;
