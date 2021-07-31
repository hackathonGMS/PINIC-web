import { InputGroup, Input, Text, Box } from "@chakra-ui/react";
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
          피크닉 새로 생성하기
        </Text>
        <Text m="0px" p="0px" fontSize="24px" color="white">
          Step 1. 소속을 입력해주세요
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
      </Box>
    </>
  );
}

export default One;
