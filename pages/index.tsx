// import { NextLink } from "components/common/NextLink";
import { Box, Grid, Container, Divider, Typography } from "@mui/material";
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
import { useEffect, useState } from "react";

const Home: NextPage = () => {
  const { data } = useHomePageQuery();
  const [sections, setSections] = useState([]);
  
  useEffect(() => {
    if (data)
      setSections(data.homePage.data.attributes.sections);
  }, [data])

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
        <Box sx={{pt: 5}}>
          {sections.length > 0 && (
            <Grid container
              direction="column"
              justifyContent="flex-start"
              alignItems="center"
              spacing={8}
            >
              <Grid item maxWidth='xs'>
                <HomePageSections data={sections[0]} />
              </Grid>
              <Grid item maxWidth='xs'>
                <Typography variant="h5">Access, Anytime, anywhere</Typography>
              </Grid>
              <Grid item maxWidth='xs' p={2}>
                <HomePageSections data={sections[1]} />
              </Grid>
              <Divider variant="middle" flexItem sx={{py: 2}} />
              <Grid item maxWidth='xs'>
                <HomePageSections data={sections[2]} />
              </Grid>
              <Grid item maxWidth='xs'>
                <HomePageSections data={sections[3]} />
              </Grid>
            </Grid>
          )}
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
