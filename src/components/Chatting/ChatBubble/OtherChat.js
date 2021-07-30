import { Box, Button, Flex, Heading, Spacer, Text, Wrap } from "@chakra-ui/react";

function OtherChat({ message, name, at, type }) {
  return (
    <Box w="full">
      <Text align="left" fontSize="9px" fontWeight="bold" mt="6px" ml="15px">
        {name}
      </Text>
      <Flex w="full">
        <Box maxW="60%" bg={type} borderBottomRadius="10px" borderRightRadius="10px" p="5px">
          <Text color="white" fontSize="12px" fontWeight="bold">
            {message}
          </Text>
        </Box>
        <Box>
          <Text fontSize="9px" color="#909090" ml="7px" verticalAlign="bottom">
            {at}
          </Text>
        </Box>
        <Spacer />
      </Flex>
    </Box>
  );
}

export default OtherChat;
