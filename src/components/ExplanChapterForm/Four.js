import { Input, Text, Flex, Button, Box, Container, Image, Center } from "@chakra-ui/react";
import { motion } from "framer-motion";
import { container, item, MotionBox, MotionButton } from "./cus_variants.js"
import Logo from "../Logo";

function Four({ setStep, setTitle }) {
  const handleNextStep = () => {
    setStep(4);
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
              모든 준비가 완료되었어요! 참여자들에게 코드를 알려주세요
            </Text>
          </MotionBox>
          <MotionBox variants={item} h="450px" alignItems="top">
            <Image h="100%" objectFit="none" src="/ExplanImages/image4.png" alignSelf="mid"></Image>
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

export default Four;