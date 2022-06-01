// import { NextLink } from "components/common/NextLink";
import { useState } from "react";
import { Box, Container, Stack, Typography } from "@mui/material";
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

  const sections: object[] = data.homePage.data.attributes.sections;

  const firstTwoColumnBlock: any = sections
    .filter(
      ({ __typename }: any) => __typename === "ComponentCommonTwoColumnBlock"
    )
    .sort((a: any, b: any) => a.id - b.id)
    .shift();
  const firstId = firstTwoColumnBlock.id;

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
          <Container maxWidth={"lg"}>
            <Stack>
              {sections.map((section: any) => {
                const isFirst = section.id === firstId;
                return (
                  <HomePageSections
                    key={section.id}
                    data={section}
                    first={isFirst}
                  />
                );
              })}
            </Stack>
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
