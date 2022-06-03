// import { NextLink } from "components/common/NextLink";
import { Box, Container } from "@mui/material";
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
import Head from "next/head";
import HomePageSections from "components/HomePageSections";

const Home: NextPage = () => {
  const { data } = useHomePageQuery();
  const { sections } = data.homePage.data.attributes;

  return (
    <>
      <Head>
        <title>JOMI Code Challenge</title>
        <meta name="description" content="Manage your expenses" />
      </Head>
      <Container>
      <Box>
          {
            sections.map((section, index) => (
              <div key={index}>
                <HomePageSections data={section} />
              </div>
            ))
          }
        </Box>
      </Container>
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