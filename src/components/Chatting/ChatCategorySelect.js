import { Box, Button, Text, Wrap } from "@chakra-ui/react";

function ChatCategorySelect({ setChatMode }) {
  return (
    <Box w="full" borderRadius="10px" p="10px" borderWidth="1px">
      <Text w="100%" fontWeight="bold" fontSize="12px" m="0">
        채팅 유형을 선택하세요!
      </Text>
      <Wrap w="full" mt="12px" spacing="4px">
        <Button
          onClick={() => {
            setChatMode(1);
          }}
          h="23px"
          border="5px"
          borderRadius="30px"
          p="0"
          px="0"
          bg="important">
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
          px="0"
          bg="tts">
          <Text fontSize="12px" color="white" paddingX="7px">
            텍스트로 말하기
          </Text>
        </Button>
        <Button
          onClick={() => {
            setChatMode(0);
          }}
          h="23px"
          border="5px"
          borderRadius="30px"
          p="p"
          px="0"
          bg="message">
          <Text fontSize="12px" color="white" paddingX="7px">
            일반 채팅
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
          px="0"
          bg="link">
          <Text fontSize="12px" color="white" paddingX="7px">
            하이퍼 링크
          </Text>
        </Button>
      </Wrap>
    </Box>
  );
}

export default ChatCategorySelect;
