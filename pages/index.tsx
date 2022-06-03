// import { NextLink } from "components/common/NextLink";
import { Box, Container } from "@mui/material";
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
  //Fetch the data then assign what we need to a variable. 
  //Pass that data down to the HomePageSections component.
  const { data } = useHomePageQuery();
  const mySections = data.homePage.data.attributes.sections;
  return (
    <>
      <Head>
        <title>JOMI Code Challenge</title>
        <meta name="description" content="Manage your expenses" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Container>
        {/* TODO Completed */}
        <Box>
          {/* Seems like an error is being thrown here because eslint doesn't like
            the type of the data being passed down. That being said, the webpage works 
            as expected regardless.  */}
          <HomePageSections sections={mySections}/>
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
