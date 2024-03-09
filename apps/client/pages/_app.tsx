import "@total-typescript/ts-reset";
import { ChakraProvider } from "@chakra-ui/react";
import { theme } from "@metyme/ui";
import { Analytics } from "@vercel/analytics/react";
import { AppProps } from "next/app";
import { NextSeo } from 'next-seo';

const App = ({ Component, pageProps }: AppProps) => (
      <ChakraProvider theme={theme}>
          <Analytics />
          <NextSeo
            title="Home Page Title"
            description="Home page description of the page"
        />
          {/* @ts-ignore */}
          <Component {...pageProps} />
      </ChakraProvider>
  );

export default App;
