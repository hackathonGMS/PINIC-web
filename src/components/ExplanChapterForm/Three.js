import { Input, Text, Flex, Button, Box, Container, Image, Center, VStack } from "@chakra-ui/react";
import { motion } from "framer-motion";
import { container, item, MotionBox, MotionButton } from "./cus_variants.js"
import Logo from "../Logo";

function Three({ setStep }) {
  const handleNextStep = () => {
    setStep(3);
  };
  return (
    <>
      <Logo />
      <motion.div
        variants={container}
        initial="hidden"
        animate="visible"
      >
        <Flex align={"center"} direction={"column"}>
          <MotionBox variants={item}>
            <Text mt="10" fontSize="16px" color="white">
              피크닉 사용방법
            </Text>
            <Text m="0px" p="0px" fontSize="24px" color="white">
              Step 2. [PICNIC 방 만들기]
            </Text>
            <Text m="0px" p="0px" fontSize="24px" color="white">
              안건을 적어주세요. 안건을 적지 않아도 좋아요.
            </Text>
          </MotionBox>
          <MotionBox variants={item} h="450px" alignItems="top">
            <Image h="100%" objectFit="none" src="/ExplanImages/image4.png" alignSelf="mid"></Image>
          </MotionBox>
          <MotionButton variants={item} onClick={handleNextStep} maxW="300px" w="100vw" textColor="#7879F1">
              <Text>다음</Text>
          </MotionButton>
        <Box h="50px"/>
        </Flex>
      </motion.div>
    </>
  );
}

export default Three;