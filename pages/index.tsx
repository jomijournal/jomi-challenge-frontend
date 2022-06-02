// import { NextLink } from "components/common/NextLink";
import { Box, Container, Typography, Stack } from "@mui/material";
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
  console.log("data", data);
  const { homePage } = data || {};
  const sections = homePage?.data.attributes.sections || [];
  return (
    <>
      <Box>{/* TODO: Render components from useHomePageQury here  */}</Box>
      <Box>
        <Container maxWidth={"lg"}>
          <Stack>
            {sections.map((section: any) => {
              return <HomePageSections key={section.id} data={section} />;
            })}
          </Stack>
        </Container>
      </Box>
    </>
  );
};

export default Home;

export const getStaticProps: GetStaticProps = async () => {
  try {
    const client = await initializeStrapiApollo();
    const HomePageData = await client.query<HomePageQuery>({
      query: HomePageDocument,
    });
    console.log("HomePageData", HomePageData);
    return {
      props: {
        [APOLLO_STRAPI_STATE_PROP_NAME]: client.cache.extract(),
      },
    };
  } catch (error) {
    console.log("error", error);
  }
  return {
    props: {
      [APOLLO_STRAPI_STATE_PROP_NAME]: "__APOLLO_STRAPI__",
    },
  };
};
