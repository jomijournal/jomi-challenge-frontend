// import { NextLink } from "components/common/NextLink";
import { Box, Container } from "@mui/material";
import {
  HomePageDocument,
  HomePageQuery,
  useHomePageQuery,
} from "graphql/cms/homepage.generated";
import HomePageSections from "components/HomePageSections";
import {
  APOLLO_STRAPI_STATE_PROP_NAME,
  initializeStrapiApollo,
} from "lib/apollo/cms-client";
import type { GetStaticProps, NextPage } from "next";

const Home: NextPage = () => {
  const { data: { homePage: { data: { attributes: { sections } } } } } = useHomePageQuery();

  return (
    <>
      <Container>
        <Box mt={0}>
          {sections?.map((section) => <HomePageSections data={section}/>)}
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
