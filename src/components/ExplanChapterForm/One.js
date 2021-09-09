import { InputGroup, Input, Text, Box, Button, Container, Flex, Image, Center } from "@chakra-ui/react";
import React from "react";

import Logo from "../Logo";

function One({ setStep }) {
  const handleNextStep = () => {
    setStep(1);
  };
  return (
    <>
    <Logo />
    <Box>
      <Text mt="10" fontSize="16px" color="white">
        피크닉 사용방법
      </Text>
      <Text m="0px" p="0px" fontSize="24px" color="white">
        Step 1. 피크닉은 사용자 친화적 화상미팅 플랫폼이에요
      </Text>
    </Box>
    <Center h="485px" alignItems="top">
      <Image h="100%" objectFit="none" src="/ExplanImages/image1.png" alignSelf="mid"></Image>
    </Center>
    <Button onClick={handleNextStep} mt="69px" maxW="300px" w="100%" textColor="#7879F1">
        <Text>다음</Text>
    </Button>
    <Box h="50px"/>
    </>
  );
}

export default One;
