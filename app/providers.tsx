"use client";

import { ChakraProvider } from "@chakra-ui/react";
import { useMemo } from "react";
import { BlobsBackground } from "../views/BlobsBackground";

export function Providers({ children }: { children: React.ReactNode }) {
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
      <BlobsBackground blobColors={randomColors}>{children}</BlobsBackground>
    </ChakraProvider>
  );
}
