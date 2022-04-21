/* eslint-disable @next/next/no-page-custom-font */
// import { NextLink } from "components/common/NextLink";
import { Box, Container, Typography } from "@mui/material";
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
import Head from "next/head";

const Home: NextPage = () => {
  const { data } = useHomePageQuery();
  const sections = data["homePage"].data.attributes.sections;
  return (
    <>
      <Head>
        <title>JOMI Code Challenge</title>
        <meta name="description" content="Manage your expenses" />
        <link rel="icon" href="/favicon.ico" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin />
        <link
          href="https://fonts.googleapis.com/css2?family=Open+Sans:ital,wght@0,300;0,400;0,500;0,600;0,700;1,300;1,400;1,500;1,600&display=swap"
          rel="stylesheet"
        />
        <link
          rel="stylesheet"
          type="text/css"
          charSet="UTF-8"
          href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick.min.css"
        />
        <link
          rel="stylesheet"
          type="text/css"
          href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick-theme.min.css"
        />
      </Head>
      {/* <Box my={2}>
          <Typography variant="h4">Welcome to JOMI Code Challenge</Typography>
          <Typography>
            Please follow the instructions on
            <a href="https://github.com/jomijournal/jomi-cms-challenge-backend">
              https://github.com/jomijournal/jomi-cms-challenge-backend
            </a>{" "}
            to complete the challenge
          </Typography>
        </Box> */}

      <Box>
        {/* TODO: Render components from useHomePageQury here  */}
        {sections.map((section, i) => (
          <HomePageSections key={i} data={section} />
        ))}
      </Box>
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
