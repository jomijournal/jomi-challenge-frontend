import {Box, Container} from '@mui/material';
import {
  HomePageDocument,
  HomePageQuery,
  useHomePageQuery,
} from 'graphql/cms/homepage.generated';

import {
  APOLLO_STRAPI_STATE_PROP_NAME,
  initializeStrapiApollo,
} from 'lib/apollo/cms-client';
import type {GetStaticProps, NextPage} from 'next';
import HomePageSections from '../components/HomePageSections';


const Home: NextPage = () => {
  const { data } = useHomePageQuery();
  const sections = data.homePage.data.attributes.sections;

  return (
    <Container>
      {sections.map((section, key) =>
        <Box key={key} style={{ display: 'flex', paddingBottom: 15 }}>
          <HomePageSections data={section}/>
        </Box>)}

    </Container>
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
