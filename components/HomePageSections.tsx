import React from "react";
import CarouselBlock from "./common/CarouselBlock";
import HeaderBlock from "./common/HeaderBlock";
import TwoColumnBlock from "./common/TwoColumnBlock";

// type Unpacked<T> = T extends (infer U)[]
//   ? U
//   : T extends (...args: any[]) => infer U
//   ? U
//   : T extends Promise<infer U>
//   ? U
//   : T;

// type Props = {
//   data: Unpacked<HomePageQuery["homePage"]["data"]["attributes"]["sections"]>;
// };

const HomePageSections = ({ data }: any) => {
  // import '../css/bootstrap-grid.css'
  // import '../css/style.css'

  return Object.keys(data.__typename).map((item, index) => {
    let tempArray = data.__typename[item]

    // TODO : Fix this component so that it can render other components
    switch (item) {
      case "ComponentCommonCarousel":
        if (item === 'ComponentCommonCarousel') {
          console.log('log tempArray', tempArray[0].Item);
          
          return <CarouselBlock data={{
            __typename: "ComponentCommonCarousel",
            Item: tempArray[0].Item,
            id: tempArray[0].id
          }} key={index}/>;
        }

      case "ComponentCommonHeader":
        return <HeaderBlock data={{
          __typename: "ComponentCommonHeader",
          ButtonLink: "",
          ButtonText: "",
          Text: tempArray[0].Text,
          id: tempArray[0].id
        }} key={index}/>;

      case "ComponentCommonTwoColumnBlock":
        if (item === 'ComponentCommonTwoColumnBlock') {
          return <TwoColumnBlock data={data.__typename[item]} key={index}/>;
        }
    }
  })
};

export default HomePageSections;
