import { Text, Box, Center, VStack, Input, Container, Flex } from "@chakra-ui/react";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import Button from "../components/Button";
import db from "../components/Chatting/firbase";
export const Participate = ({ setName, match }) => {
  const [data, setData] = useState();
  useEffect(() => {
    db.collection("Chatting")
      .doc(String(match.params.id))
      .get()
      .then((doc) => {
        if (doc.exists) {
          setData({ party: doc.data().party, title: doc.data().title });
          console.log("Document data:", doc.data());
        } else {
          // doc.data() will be undefined in this case
          console.log("No such document!");
        }
      })
      .catch((error) => {
        console.log("Error getting document:", error);
      });
  }, []);
  return (
    <Container minH="100vh" centerContent>
      <Flex align={"center"} mt={20} direction={"column"}>
        <Box w="390px" h="690px" color="white">
          <VStack align="left" spacing="3px">
            <Text fontWeight="bold" fontSize="32px" mt="0px" mb="63px">
              PICNIC
            </Text>
            {data && (
              <>
                <Text fontSize="12px" color="white" m="0px">
                  [{data.party}]
                </Text>
                <Text fontSize="12px" color="white" m="0px">
                  {data.title}
                </Text>
              </>
            )}
          </VStack>
          <Box w="60px" h="2px" mt="11px" mb="17px" bg="white" />
          <VStack align="left" mt="7px">
            <Text fontWeight="bold" fontSize="24px" m="0px">
              이름을 입력하세요
            </Text>
          </VStack>
          <Center w="100%" h="97px" mt="28px">
            <VStack>
              <Input
                focusBorderColor="white"
                onChange={(e) => {
                  setName(e.target.value);
                  //console.log(e.target.value);
                }}
                placeholder="김 피크닉"
                variant="unstyled"
                mt="35px"
                w="100%"
                h="53px"
                p="0"
                bg="rgb(0,0,0,0)"
                color="white"
                fontSize="32px"
              />
              <Box w="100%" mt="0" h="3px" bg="white" />
            </VStack>
          </Center>
          <Center w="100%" h="111px" mt="64px">
            <VStack w="full">
              <Button Link={`/room/${match.params.id}`} text="회의 입장!" variant="main_button" />
              <Link to="/">
                <Text as="ins" fontSize="16px" color="white">
                  돌아갈래요
                </Text>
              </Link>
            </VStack>
          </Center>
        </Box>
      </Flex>
    </Container>
  );
};