import { ChakraProvider } from "@chakra-ui/react";
import { AppNavbar } from "../components/AppNavbar";

function MyApp({ Component, pageProps }) {
  return (
    <ChakraProvider>
      <AppNavbar />
      <Component {...pageProps} />
    </ChakraProvider>
  );
}

export default MyApp;
