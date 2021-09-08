import { Button as ChakraButton, Text, Box, Center, Image } from "@chakra-ui/react";

import Button from "../Button";
import Logo from "../Logo";

function Nine({ setStep }) {
  return (
    <>
    <Logo />
    <Box mb="39px">
      <Text mt="10" fontSize="16px" color="white">
        피크닉 사용방법
      </Text>
      <Text m="0px" p="0px" fontSize="24px" color="white">
        Step 4. [PICNIC 소개]
      </Text>
      <Text m="0px" p="0px" fontSize="24px" color="white">
        이제 준비가 끝났어요! PICNIC을 시작해보세요!
      </Text>
    </Box>
    <Button Link="/" text="홈으로" variant="main_button"/>
    </>
  );
}

export default Nine;
