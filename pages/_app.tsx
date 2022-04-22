import type { AppProps } from 'next/app';
import { createTheme, CssBaseline, ThemeProvider } from '@mui/material';
import MyApolloProvider from 'lib/apollo/ApolloProvider';

import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import 'styles/global.css';

const theme = createTheme();
function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ThemeProvider theme={theme}>
      <MyApolloProvider pageProps={pageProps}>
        <CssBaseline />
        <Component {...pageProps} />
      </MyApolloProvider>
    </ThemeProvider>
  );
}

export default MyApp;
