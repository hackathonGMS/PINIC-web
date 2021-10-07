import { Input, Text, Flex, Button, Box, Container, Image, Center } from "@chakra-ui/react";

import { motion } from "framer-motion";

import Logo from "../Logo";
function Two({ setStep }) {
  const handleNextStep = () => {
    setStep(2);
  };
  return (
    <>
    <Logo />
    <Box>
      <Text mt="10" fontSize="16px" color="white">
        피크닉 사용방법
      </Text>
      <Text m="0px" p="0px" fontSize="24px" color="white">
        Step 2. [PICNIC 방 만들기]
      </Text>
      <Text m="0px" p="0px" fontSize="24px" color="white">
        먼저 화상미팅 소속을 적어주세요
      </Text>
    </Box>
    <motion.div
      animate={{
        y: [-100,0],
        opacity: [0,1]
      }}
      transition={{
        duration: 0.2,
        ease: "easeIn"
      }}
    >
      <Center h="450px" alignItems="top">
        <Image h="100%" objectFit="none" src="/ExplanImages/image2.png" alignSelf="mid"></Image>
      </Center>
    </motion.div>
    <Button onClick={handleNextStep} mt="69px" maxW="300px" w="100%" textColor="#7879F1">
        <Text>다음</Text>
    </Button>
    <Box h="50px"/>
    </>
  );
}

export default Two;