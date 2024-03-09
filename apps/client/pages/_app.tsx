import "@total-typescript/ts-reset";
import { ChakraProvider } from "@chakra-ui/react";
import { theme } from "@metyme/ui";
import { Analytics } from "@vercel/analytics/react";
import { AppProps } from "next/app";

const App = ({ Component, pageProps }: AppProps) => (
      <ChakraProvider theme={theme}>
          <Analytics />
          {/* @ts-ignore */}
          <Component {...pageProps} />
      </ChakraProvider>
  );

export default App;
