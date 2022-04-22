// import { NextLink } from "components/common/NextLink";
import { Box, Container, Typography } from '@mui/material';
import HomePageSections from 'components/HomePageSections';
import {
  HomePageDocument,
  HomePageQuery,
  useHomePageQuery,
} from 'graphql/cms/homepage.generated';

import {
  APOLLO_STRAPI_STATE_PROP_NAME,
  initializeStrapiApollo,
} from 'lib/apollo/cms-client';
import type { GetStaticProps, NextPage } from 'next';
import Head from 'next/head';

const Home: NextPage = () => {
  const { data } = useHomePageQuery();

  return (
    <>
      <Head>
        <title>JOMI Code Challenge</title>
        <meta name='description' content='Manage your expenses' />
        <link rel='icon' href='/favicon.ico' />
      </Head>
      <Container>
        <Box my={2}>
          {data.homePage.data.attributes.sections.map((item, index) => (
            <HomePageSections data={item} />
          ))}
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
