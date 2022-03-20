import "../styles/globals.css";
import type { AppProps } from "next/app";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import { CssBaseline, LinearProgress, ThemeProvider } from "@mui/material";
import { theme } from "components/theme";
function MyApp({ Component, pageProps }: AppProps) {
  const router = useRouter();
  const [loading, setLoading] = useState(false);
  useEffect(() => {
    const handleRouteChangeStart = () => setLoading(true);
    const handleRouteChangeComplete = () => setLoading(false);
    router.events.on("routeChangeStart", handleRouteChangeStart);
    router.events.on("routeChangeComplete", handleRouteChangeComplete);
    router.events.on("routeChangeError", handleRouteChangeComplete);
  }, []);

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      {loading && <LinearProgress color="secondary" />}
      <Component {...pageProps} />
    </ThemeProvider>
  );
}

export default MyApp;
