import { Box, Center, Heading } from "@chakra-ui/react";

export const HelloWorld = () => (
  <Center minW="100vw" minH="100vh">
    <Box padding={20} background={"rgba(255, 255, 255, 0.6)"} borderRadius="md">
      <Heading>Hello world!</Heading>
    </Box>
  </Center>
);
