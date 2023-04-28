// @ts-nocheck
// import { NextLink } from "components/common/NextLink";
import { useMemo } from 'react'
import type { GetStaticProps, NextPage } from "next";
import Head from "next/head";
import Image from 'next/image';
import {
  HomePageDocument,
  HomePageQuery,
  useHomePageQuery,
} from "graphql/cms/homepage.generated";
import {
  APOLLO_STRAPI_STATE_PROP_NAME,
  initializeStrapiApollo,
} from "lib/apollo/cms-client";
import { Box, Button, CircularProgress, Container, Typography } from "@mui/material";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";



const Home: NextPage = () => {

  const { data, loading } = useHomePageQuery();

  const hostUrl = useMemo(() => {
    return process.env.STRAPI_CMS_URL
  }, [])

  const pageData = useMemo(() => {
    return data?.homePage?.data?.attributes?.sections
  }, [data?.homePage?.data?.attributes?.sections])

  const settings = useMemo(() => {
    return {
      infinite: true,
      speed: 500,
      slidesToShow: 6,
      slidesToScroll: 1,
      swipeToSlide: true,
    }
  }, [])

  return (
    <>
      <Head>
        <title>JOMI Code Challenge</title>
        <meta name="description" content="Manage your expenses" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      {loading ?
        <Box sx={{ height: '100vh', display: 'flex', alignItems: 'center', justifyContent: 'center' }} >
          <CircularProgress />
        </Box>
        :
        <>
          <Container>
            <Box my={2}>
              <Typography sx={{ textAlign: 'center', mt: 3, fontSize: 32 }}>{pageData?.[0].Text}</Typography>
              <Box mt={8} sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                <Box >

                  <Image alt={pageData?.[1].Image?.data?.attributes?.alternativeText} width={500}
                    height={200}
                    src={`${hostUrl}${pageData?.[1].Image?.data?.attributes?.url}`} />
                </Box>
                <Box ml={5} sx={{ width: '50%' }}>
                  <Typography sx={{ fontSize: 26, fontWeight: 500 }}>{pageData?.[1]?.TitleText}</Typography>
                  <Typography sx={{ width: 400 }} mt={1} mb={3}>{pageData?.[1]?.Description}</Typography>
                  <Button variant="outlined">{pageData?.[1]?.ButtonText}</Button>
                </Box>
              </Box>
              <Box mt={8} sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>

                <Box >
                  <Typography sx={{ fontSize: 26, fontWeight: 500 }}>{pageData?.[2]?.TitleText}</Typography>
                  <Typography sx={{ width: 400 }} mt={1} mb={3}>{pageData?.[2]?.Description}</Typography>
                  <Button variant="outlined">{pageData?.[2]?.ButtonText}</Button>
                </Box>
                <Box ml={5} sx={{ width: '50%' }}>
                  <Image alt={pageData?.[2].Image?.data?.attributes?.alternativeText} width={500}
                    height={200}
                    src={`${hostUrl}${pageData?.[2].Image?.data?.attributes?.url}`} />
                </Box>
              </Box>

              {/* <Typography variant="h4">Welcome to JOMI Code Challenge</Typography>
              <Typography>
                Please follow the instructions on
                <a href="https://github.com/jomijournal/jomi-cms-challenge-backend">
                  https://github.com/jomijournal/jomi-cms-challenge-backend
                </a>{" "}
                to complete the challenge
              </Typography> */}
            </Box>

            {/* <Box>TODO: Render components from useHomePageQury here </Box> */}
          </Container>
          <Box sx={{ backgroundColor: '#000000', height: 300, display: "flex", alignItems: 'center' }} mt={8}>
            <Container>
              <Slider {...settings}>
                {pageData?.[3].Item.map((el, index) => (
                  <Box ml={1} key={index} >
                    <Image alt={el?.Image?.data?.attributes?.alternativeText} width={100}
                      height={100}
                      src={`${hostUrl}${el?.Image?.data?.attributes?.url}`} />
                  </Box>

                ))}



              </Slider>
            </Container>
          </Box >
        </>
      }

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
