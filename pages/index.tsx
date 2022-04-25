// import { NextLink } from "components/common/NextLink";
import HomePageSections from "components/HomePageSections";
import {
  HomePageDocument,
  HomePageQuery,
  useHomePageQuery,
} from "graphql/cms/homepage.generated";

import {
  APOLLO_STRAPI_STATE_PROP_NAME,
  initializeStrapiApollo,
} from "lib/apollo/cms-client";
import type { GetStaticProps, NextPage } from "next";
import 'antd/dist/antd.css';
// import '../components/common/style.css'
// import $ from 'jquery'


const Home: NextPage = () => {
  const { data } = useHomePageQuery();

  var groupBy = function (data, key) {
    if (data.homePage.data.attributes.sections) {
      return data.homePage.data.attributes.sections.reduce(function (rv, x) {
        (rv[x[key]] = rv[x[key]] || []).push(x);
        return rv;
      }, {});
    }
  };

  return (
    <>
      {/* Load jQuery(1.7+) */}
      <script src="https://code.jquery.com/jquery-3.2.1.slim.min.js"></script>

      {/* <!-- Customized Style --> */}
      <link rel="stylesheet" href="owl-carousel/owl.theme.css"></link>
      {
        <HomePageSections data={{
          __typename: groupBy(data, '__typename'),
          id: ""
        }} />
        // )
        // )
      }

    </>
  );
};

export default Home;

export const getStaticProps: GetStaticProps = async () => {
  const client = await initializeStrapiApollo();
  await client.query<HomePageQuery>({
    query: HomePageDocument,
  });

  return {
    props: {
      [APOLLO_STRAPI_STATE_PROP_NAME]: client.cache.extract(),
    },
  };
};
