import { Box, Button, Text, Wrap } from "@chakra-ui/react";

function ChatHistoryCategory({ setChatMode }) {
  return (
    <Wrap w="full" mt="12px" spacing="15px">
      <Button
        onClick={() => {
          setChatMode(0);
        }}
        h="23px"
        border="1px"
        borderRadius="30px"
        borderColor="white"
        p="p"
        px="10px"
        bg="primary">
        <Text fontSize="12px" color="white" paddingX="7px">
          일반 채팅
        </Text>
      </Button>
      <Button
        onClick={() => {
          setChatMode(1);
        }}
        h="23px"
        border="5px"
        borderRadius="30px"
        p="0"
        px="10px"
        bg="notice">
        <Text fontSize="12px" color="white" paddingX="7px">
          중요한 채팅
        </Text>
      </Button>
      <Button
        onClick={() => {
          setChatMode(2);
        }}
        h="23px"
        border="5px"
        borderRadius="30px"
        p="0"
        px="10px"
        bg="tts">
        <Text fontSize="12px" color="white" paddingX="7px">
          텍스트로 말하기
        </Text>
      </Button>
      <Button
        onClick={() => {
          setChatMode(4);
        }}
        h="23px"
        border="5px"
        borderRadius="30px"
        p="0"
        px="10px"
        bg="hyperlink">
        <Text fontSize="12px" color="white" paddingX="7px">
          하이퍼 링크
        </Text>
      </Button>
      <Button
        onClick={() => {
          setChatMode(5);
        }}
        h="23px"
        border="10px"
        borderRadius="30px"
        borderColor="white"
        p="p"
        px="10px"
        bg="calander">
        <Text fontSize="12px" color="black" paddingX="7px">
          일정 잡기
        </Text>
      </Button>
    </Wrap>
  );
}

export default ChatHistoryCategory;
