import { Button as ChakraButton, Text, Box, Center, Flex } from "@chakra-ui/react";
import { motion } from "framer-motion";
import { container, item, MotionBox, MotionButton } from "./cus_variants.js"
import Button from "../Button";
import Logo from "../Logo";

function Nine({ setStep }) {
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
            Step 4. [PICNIC 소개]
          </Text>
          <Text m="0px" p="0px" fontSize="24px" color="white">
            이제 준비가 끝났어요! PICNIC을 시작해보세요!
          </Text>
        </MotionBox>
        <MotionBox variants={item} w="70%" mt="50px">
          <Button Link="/" text="홈으로" variant="main_button"/>
        </MotionBox>
        <Box h="50px"/>
        </Flex>
      </motion.div>
    </>
  );
}

export default Nine;
