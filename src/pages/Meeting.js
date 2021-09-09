import { Logo, InputCode, Button } from "../components";
import { Box, Flex, Heading, Text, Stack, Container, Avatar, useColorModeValue } from "@chakra-ui/react";
import MeetingForm from "../components/MeetingForm";
export const Meeting = ({match}) => {
  return (
    <>
      <Container minH="100vh" centerContent>
        <Flex align={"center"} mt={20} direction={"column"}>
          <MeetingForm match={match}/>
        </Flex>
      </Container>
    </>
  );
};
