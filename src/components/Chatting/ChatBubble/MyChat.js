import { Box, Button, Link as ChakraLink, Flex, Heading, Spacer, Text, Wrap } from "@chakra-ui/react";
import { Link } from "react-router-dom";
function MyChat({ message, name, at, type }) {
  return (
    <Box w="full">
      <Text align="right" fontSize="9px" fontWeight="bold" mt="6px" mr="15px">
        {name}
      </Text>
      <Flex w="full" y="full">
        <Spacer />

        <Text fontSize="9px" color="#909090" mr="7px" verticalAlign="bottom">
          {at}
        </Text>
        <Box maxW="60%" bg={type} borderBottomRadius="10px" borderLeftRadius="10px" p="5px">
          {type === "link" ? (
            <ChakraLink>
              <Text color="white" fontSize="12px" fontWeight="bold">
                {message}
              </Text>
            </ChakraLink>
          ) : (
            <Text color="white" fontSize="12px" fontWeight="bold">
              {message}
            </Text>
          )}
        </Box>
      </Flex>
    </Box>
  );
}

export default MyChat;
