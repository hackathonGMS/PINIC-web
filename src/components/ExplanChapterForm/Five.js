import { Input, Text, Flex, Button, Box, Container, Image, Center } from "@chakra-ui/react";
import { motion } from "framer-motion";
import { container, item, MotionBox, MotionButton } from "./cus_variants.js"
import Logo from "../Logo";
function Five({ setStep, setTitle }) {
  const handleNextStep = () => {
    setStep(5);
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
              Step 3. [PICNIC 방 입장하기]
            </Text>
            <Text m="0px" p="0px" fontSize="24px" color="white">
              생성된 코드를 받아서 입력해주세요
            </Text>
          </MotionBox>
          <MotionBox variants={item} h="450px" alignItems="top">
            <Image h="100%" objectFit="none" src="/ExplanImages/image5.png" alignSelf="mid"></Image>
          </MotionBox>
          <MotionButton variants={item} onClick={handleNextStep} maxW="300px" w="100%" textColor="#7879F1">
              <Text>다음</Text>
          </MotionButton>
          <Box h="50px"/>
        </Flex>
      </motion.div>
    </>
  );
}

export default Five;