import { Logo, InputCode, Button } from "../components";
import { Box, Flex, Heading, Text, Stack, Container, Avatar, useColorModeValue } from "@chakra-ui/react";
import ExplanChapterForm from "../components/ExplanChapterForm";
export const Explan = () => {
  return (
    <>
    <Container minH="100vh" centerContent>
      <Flex align={"center"} mt={20} direction={"column"}>
        <ExplanChapterForm />
      </Flex>
    </Container>
    </>
  );
};
