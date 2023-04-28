// import { NextLink } from "components/common/NextLink";
import { Box, Container, Divider, Stack } from "@mui/material";
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
import { useMemo } from "react";

const Home: NextPage = () => {
  const { data } = useHomePageQuery();
  const sections = useMemo(() => {
    const extractedSections = data?.homePage?.data?.attributes?.sections || []
    return extractedSections.filter(section => section.__typename !== 'Error') as unknown as Exclude<HomePageQuery['homePage']['data']['attributes']['sections'][number], ({ __typename?: 'Error' } | null)>[] // Exclude the errors
  }, [data?.homePage?.data?.attributes?.sections])

  return (
    <>
      <Head>
        <title>JOMI Code Challenge</title>
        <meta name="description" content="Manage your expenses" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Container>
        <Stack gap={2}>
          {sections.map((section, index) => {
            let shouldRenderDivider = false
            if (section.__typename === 'ComponentCommonTwoColumnBlock') {
              const nextSection = sections[index + 1]
              if (nextSection && nextSection.__typename === 'ComponentCommonTwoColumnBlock') {
                shouldRenderDivider = true
              }
            }
            return (
              <Box key={`${section.__typename}.${section.id}`}>
                <HomePageSections data={section} />
                {shouldRenderDivider ? <Divider /> : null}
              </Box>
            )
          })}
        </Stack>
      </Container>
    </>
  );
};

export default Home;

export const getStaticProps: GetStaticProps = async () => {
  const client = initializeStrapiApollo();
  await client.query<HomePageQuery>({
    query: HomePageDocument,
  });

  return {
    props: {
      [APOLLO_STRAPI_STATE_PROP_NAME]: client.cache.extract(),
    },
  };
};
