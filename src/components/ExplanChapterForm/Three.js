import { Input, Text, Flex, Button, Box, Container, Image, Center } from "@chakra-ui/react";

import Logo from "../Logo";
function Three({ setStep }) {
  const handleNextStep = () => {
    setStep(3);
  };
  return (
    <>
    <Logo />
        <Box mb="39px">
      <Text mt="10" fontSize="16px" color="white">
        피크닉 사용방법
      </Text>
      <Text m="0px" p="0px" fontSize="24px" color="white">
        Step 2. [PICNIC 방 만들기]
      </Text>
      <Text m="0px" p="0px" fontSize="24px" color="white">
        안건을 적어주세요. 안건을 적지 않아도 좋아요.
      </Text>
        </Box>
    <Center h="450px" alignItems="top">
      <Image h="100%" objectFit="none" src="/ExplanImages/image3.png" alignSelf="mid"></Image>
    </Center>
    <Button onClick={handleNextStep} mt="69px" maxW="300px" w="100%" textColor="#7879F1">
        <Text>다음</Text>
    </Button>
    </>
  );
}

export default Three;