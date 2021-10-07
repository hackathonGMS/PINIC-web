import { Logo, InputCode, Button } from "../components";
import { Flex, Container, Stack, StackProps, Text, Box } from "@chakra-ui/react";
import { Link } from "react-router-dom";
import { pageVariants } from "../constants/animation";
import { motion } from "framer-motion";

import React, { useState } from "react";

export const Join = (props) => {
  const [code, setCode] = useState(null);
  return (
    <Container minH="100vh" centerContent>
      <Flex align={"center"} mt={20} direction={"column"}>
        <Logo />
        <InputCode />
        <Button Link="/Create" text="새 피크닉 생성하러 가기" variant="main_button" />
        <Box h="20px"/>
        <Link to="/Explan">
          <Text as="ins" fontSize="16px" color="white">
            설명 보러가기
          </Text>
        </Link>
        
      </Flex>
    </Container>
  );
};
