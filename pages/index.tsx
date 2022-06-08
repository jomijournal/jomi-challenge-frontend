// import { NextLink } from "components/common/NextLink";
import type { GetStaticProps, NextPage } from "next";
import Head from "next/head";

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

import HomePageSections from "components/HomePageSections";

import "react-multi-carousel/lib/styles.css";

const Home: NextPage = () => {
  const { data } = useHomePageQuery();
  const {
    homePage: {
      data: {
        attributes: { sections },
      },
    },
  } = data;

  return (
    <>
      <Head>
        <title>JOMI Code Challenge</title>
        <meta name="description" content="Manage your expenses" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Container>
        <Box my={2}>
          <Typography variant="h4">Welcome to JOMI Code Challenge</Typography>
          <Typography>
            Please follow the instructions on
            <a href="https://github.com/jomijournal/jomi-cms-challenge-backend">
              https://github.com/jomijournal/jomi-cms-challenge-backend
            </a>{" "}
            to complete the challenge
          </Typography>
        </Box>
        <Box>
          {sections.map((section, index) => {
            return <HomePageSections data={section} key={index} />;
          })}
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
