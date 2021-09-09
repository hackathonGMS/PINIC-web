import { Box, Button, Center, Flex, Heading, Spacer, Text, Wrap } from "@chakra-ui/react";

function ChatBar({ message, name, at }) {
  return (
    <Center w="full" bg="#7879F1" borderRadius="full" px="3" py="1px" mt="18px">
      <Text fontSize="9px" color="white" align="center">
        {name} 님께서 입장하셨어요
      </Text>
    </Center>
  );
}

export default ChatBar;
