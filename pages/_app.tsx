import type { AppProps } from "next/app";
import "bootstrap/dist/css/bootstrap.css";
import { createTheme, CssBaseline, ThemeProvider } from "@mui/material";
import MyApolloProvider from "lib/apollo/ApolloProvider";
import Head from "next/head";
const theme = createTheme();
function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <ThemeProvider theme={theme}>
        <MyApolloProvider pageProps={pageProps}>
          <CssBaseline />
          <Component {...pageProps} />
        </MyApolloProvider>
      </ThemeProvider>
    </>
  );
}

export default MyApp;
