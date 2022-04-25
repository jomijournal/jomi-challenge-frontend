import App from "next/app";
import Head from "next/head";
import "../assets/css/style.css";
import { createContext } from "react";
import { fetchAPI } from "../lib/api";
import Script from "next/script"
import { getStrapiMedia } from "../lib/media";

// Store Strapi Global object in context
export const GlobalContext = createContext({});

const MyApp = ({ Component, pageProps }) => {
  const { global } = pageProps;

  return (
    <>
    
      <Head>
      <meta name="viewport" content="width=device-width, initial-scale=1" />
<link
href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.0-beta1/dist/css/bootstrap.min.css" rel="stylesheet"
integrity="sha384-giJF6kkoqNQ00vy+HMDP7azOuL0xtbfIcaT9wjKHr8RbDVddVHyTfAAsrekwKmP1"
crossorigin="anonymous" 
/>
        <link
          rel="shortcut icon"
          href={getStrapiMedia(global.attributes.favicon)}
        />
      </Head>
      <Script
src="https://cdn.jsdelivr.net/npm/bootstrap@5.0.0-beta1/dist/js/bootstrap.bundle.min.js"
integrity="sha384-ygbV9kiqUc6oa4msXn9868pTtWMgiQaeYH7/t7LECLbyPA2x65Kgf80OJFdroafW"
crossorigin="anonymous"/>
      <GlobalContext.Provider value={global.attributes}>
        <Component {...pageProps} />
      </GlobalContext.Provider>
    </>
  );
};

// getInitialProps disables automatic static optimization for pages that don't
// have getStaticProps. So article, category and home pages still get SSG.
// Hopefully we can replace this with getStaticProps once this issue is fixed:
// https://github.com/vercel/next.js/discussions/10949
MyApp.getInitialProps = async (ctx) => {
  // Calls page's `getInitialProps` and fills `appProps.pageProps`
  const appProps = await App.getInitialProps(ctx);
  // Fetch global site settings from Strapi
  const globalRes = await fetchAPI("/global", {
    populate: {
      favicon: "*",
      defaultSeo: {
        populate: "*",
      },
    },
  });
  // Pass the data to our page via props
  return { ...appProps, pageProps: { global: globalRes.data } };
};

export default MyApp;