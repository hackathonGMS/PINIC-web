import { InputGroup, Input, Text, Box, Button } from "@chakra-ui/react";
import React from "react";

import Logo from "../Logo";

function One({ setStep, setParty }) {
  const handleNextStep = () => {
    setStep(1);
  };
  return (
    <>
      <Box w="full" mt="10" h="142px">
        <Logo />
        <Text mt="10" fontSize="16px" color="white">
          피크닉 사용방법
        </Text>
        <Text m="0px" p="0px" fontSize="24px" color="white">
          Step 1. 피크닉은 사용자 친화적 화상미팅 플랫폼이에요
        </Text>
        <Input
          onKeyDown={(e) => {
            if (e.key === "Enter") {
              handleNextStep();
            }
          }}
          focusBorderColor="white"
          onChange={(e) => {
            setParty(e.target.value);
            //console.log(e.target.value);
          }}
          placeholder="피크닉 대학교"
          variant="flushed"
          mt="35px"
          w="100%"
          h="53px"
          p="0"
          bg="rgb(0,0,0,0)"
          color="white"
          fontSize="32px"
        />
        <Button onClick={handleNextStep}>
            <Text>다음</Text>
        </Button>
      </Box>
    </>
  );
}

export default One;
