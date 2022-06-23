// import { NextLink } from "components/common/NextLink";
import { Box, Container, Typography } from "@mui/material";
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
  const { homePage } = data || {};
  const sections = homePage?.data.attributes.sections || [];

  return (
    <>
      <Head>
        <title>JOMI Landing Page</title>
        <meta name="description" content="Manage your expenses" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Container>
        <Box>
        <Container maxWidth={"lg"}>
            {sections.map((section: any, index) => {
              return <HomePageSections key={index} data={section} />;
            })}
        </Container>
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
