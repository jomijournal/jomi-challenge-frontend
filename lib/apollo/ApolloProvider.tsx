import { ApolloProvider } from "@apollo/client";
import React from "react";
import { useStrapiClient } from "./cms-client";

const MyApolloProvider: React.FC<{ pageProps: any }> = ({
  children,
  pageProps,
}) => {
  const strapi = useStrapiClient(pageProps);
  return <ApolloProvider client={strapi}>{children}</ApolloProvider>;
};

export default MyApolloProvider;
