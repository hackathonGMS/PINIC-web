import { Logo, InputCode, Button } from "../components";
import { Box, Flex, Heading, Text, Stack, Container, Avatar, useColorModeValue } from "@chakra-ui/react";
import ChapterForm from "../components/ChapterForm";
export const Create = () => {
  return (
    <>
      <Container minH="100vh" centerContent>
        <Flex align={"center"} mt={20} direction={"column"}>
          <ChapterForm />
        </Flex>
      </Container>
    </>
  );
};
