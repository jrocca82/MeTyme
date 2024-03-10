import "@total-typescript/ts-reset";
import { ChakraProvider } from "@chakra-ui/react";
import { theme } from "@metyme/ui";
import { Analytics } from "@vercel/analytics/react";
import { AppProps } from "next/app";
import { NextSeo } from 'next-seo';
import Head from "next/head";

const App = ({ Component, pageProps }: AppProps) => (
  <ChakraProvider theme={theme}>
    <Head>
      <link rel="shortcut icon" href="/favicon.ico" />
    </Head>
    <Analytics />
    <NextSeo
      title="Me Tyme"
      description="Wellness services"
      
    />
    {/* @ts-ignore */}
    <Component {...pageProps} />
  </ChakraProvider>
);

export default App;
