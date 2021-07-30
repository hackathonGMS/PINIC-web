import { Button as chakraButton, Box, Container, VStack, Heading } from "@chakra-ui/react";
import React from "react";
import { Link as RouterLink } from "react-router-dom";
import io from "socket.io-client";

export default function PicnicBlock(props) {
  return (
    <Container maxW="full" w="full" pr="0" pl="3" h="full" pt="3" centerContent>
      {console.log(props)}
      <Box w="full">
        <Heading textAlign="left" size="xs" mb="1">
          {props.header}
        </Heading>
      </Box>

      <Box bg="black" w="full" h="full" borderRadius="lg">
        {props.children}
      </Box>
    </Container>
  );
}
