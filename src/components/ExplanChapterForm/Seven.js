import { Input, Text, Flex, Button, Box, Container, Image, Center } from "@chakra-ui/react";

import Logo from "../Logo";
function Seven({ setStep, setTitle }) {
  const handleNextStep = () => {
    setStep(7);
  };
  return (
    <>
    <Logo />
        <Box mb="39px">
      <Text mt="10" fontSize="16px" color="white">
        피크닉 사용방법
      </Text>
      <Text m="0px" p="0px" fontSize="24px" color="white">
        Step 3. [PICNIC 방 소개]
      </Text>
      <Text m="0px" p="0px" fontSize="24px" color="white">
        피크닉은 채팅 유형을 지정하여 채팅할 수 있어요
      </Text>
        </Box>
        <Image boxSize="400px" src="../images/image1.png" alignSelf="mid"></Image>
    <Button onClick={handleNextStep} mt="69px" maxW="300px" w="100%" textColor="#7879F1">
        <Text>다음</Text>
    </Button>
    </>
  );
}

export default Seven;