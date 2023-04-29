// import { NextLink } from "components/common/NextLink";
import styled from '@emotion/styled';
import { Box, Container, Typography } from '@mui/material';
import HomePageSections from 'components/HomePageSections';
import { flexStyle } from 'components/common/TwoColumnBlock';
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

const HomePage = styled(Box)({
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'space-between',
});

const Home: NextPage = () => {
  const { data } = useHomePageQuery();
  const { sections } = data.homePage.data.attributes;
  return (
    <Box
      sx={{
        background: '#e7e5e5',
        height: '100%',
      }}
    >
      <Head>
        <title>JOMI Code Challenge</title>
        <meta name='description' content='Manage your expenses' />
        <link rel='icon' href='/favicon.ico' />
      </Head>
      <Box>
        {/* <Box my={2}>
          <Typography variant='h4'>Welcome to JOMI Code Challenge</Typography>
          <Typography>
            Please follow the instructions on
            <a href='https://github.com/jomijournal/jomi-cms-challenge-backend'>
              https://github.com/jomijournal/jomi-cms-challenge-backend
            </a>{' '}
            to complete the challenge
          </Typography>
        </Box> */}

        <HomePage>
          {sections.map((data, index) => (
            <HomePageSections data={data} key={index} />
          ))}
        </HomePage>
      </Box>
    </Box>
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
