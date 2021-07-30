import { Input, Text, Flex, Button, Box, Spacer } from "@chakra-ui/react";

import Logo from "../Logo";
function Two({ setStep, setTitle }) {
  const handleNextStep = () => {
    setStep(2);
  };
  return (
    <Box h="142px" color="white">
      <Logo />
      <Text mt="10" fontSize="16px">
        피크닉 새로 생성하기
      </Text>
      <Flex>
        <Text m="0px" p="0px" fontSize="21px">
          Step 2. 회의 주제을 입력해주세요
        </Text>
        <Spacer />
        <Button bg="#7879F1" w="136px" h="35px" onClick={handleNextStep}>
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
      />
    </Box>
  );
}

export default Two;
