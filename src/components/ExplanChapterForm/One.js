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
      <Flex align={"center"} mt={20} direction={"column"}>
        <Box mb="39px">
          <Text mt="10" fontSize="16px" color="white">
            피크닉 사용방법
          </Text>
          <Text m="0px" p="0px" fontSize="24px" color="white">
            Step 1. 피크닉은 사용자 친화적 화상미팅 플랫폼이에요
          </Text>
        </Box>
        <Image boxSize="400px" src="../images/image1.png" alignSelf="mid"></Image>
      </Flex>
    <Button onClick={handleNextStep} mt="69px" maxW="300px" w="100%" textColor="#7879F1">
        <Text>다음</Text>
    </Button>
    </>
  );
}

export default One;
