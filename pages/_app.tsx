import { ChakraProvider } from "@chakra-ui/react";
import { BlobsBackground } from "../components/BlurryBlobs";
import { useMemo } from "react";

function MyApp({ Component, pageProps }) {
  const randomColors = useMemo(() => {
    const newColor = () => `hsl(${Math.random() * 255}, 80%, 85%)`;
    return [
      newColor(),
      newColor(),
      newColor(),
      newColor(),
      newColor(),
      newColor(),
      newColor(),
    ] as const;
  }, []);

  return (
    <ChakraProvider>
      <BlobsBackground blobColors={randomColors}>
        <Component {...pageProps} />
      </BlobsBackground>
    </ChakraProvider>
  );
}

export default MyApp;
