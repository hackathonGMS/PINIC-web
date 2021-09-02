import { Input, Text, Flex, Button, Box, Spacer } from "@chakra-ui/react";

import Logo from "../Logo";
function Two({ setStep, setTitle }) {
  const handleNextStep = () => {
    setStep(2);
  };
  return (
    <Box w="full" h="142px" color="white" mt="60px">
      <Logo />
      <Text mt="10" fontSize="16px">
        피크닉 사용방법
      </Text>
      <Flex>
        <Text m="0px" p="0px" fontSize="24px">
          Step 2. [피크닉 방 만들기]
        </Text>
        <Text m="0px" p="0px" fontSize="24px">
          먼저 화상채팅 소속을 적어주세요
        </Text>
        <Spacer />
        <Button variant="link" bg="transparent" w="136px" h="32px" p="0px" m="0px" onClick={handleNextStep}>
          <Text as="ins" fontSize="14px" color="white">
            안건이 없어요
          </Text>
        </Button>
      </Flex>
      <Input
        onKeyDown={(e) => {
          if (e.key === "Enter") {
            handleNextStep();
          }
        }}
        onChange={(e) => {
          setTitle(e.target.value);
          //console.log(e.target.value);
        }}
        variant="flushed"
        mt="35px"
        w="100%"
        h="53px"
        p="0"
        bg="rgb(0,0,0,0)"
        color="white"
        fontSize="24px"
        focusBorderColor="white"
        placeholder="2021 숭실대학교 소프트웨어 & 글로벌미디어학부 해커톤 아이디어 회의"
      />
      <Button onClick={handleNextStep}>
          <Text>다음</Text>
      </Button>
    </Box>
  );
}

export default Two;
