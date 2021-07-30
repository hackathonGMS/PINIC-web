import { Button as ChakraButton, Text, Box, Center, VStack } from "@chakra-ui/react";
import { Link } from "react-router-dom";
import Button from "../Button";
import db from "../Chatting/firbase";
function Three({ setStep, party, title }) {
  const handleNextStep = () => {
    setStep(0);
  };
  function randomNum() {
    const min = 100000;
    const max = 999999;
    const randNum = Math.floor(Math.random() * (max - min + 1)) + min;
    return randNum;
  }

  const codeNumber = randomNum();

  const createRoom = () => {
    db.collection("Chatting").doc(String(codeNumber)).set({
      party: party,
      title: title,
      code: codeNumber,
    });
  };

  return (
    <Box w="435px" h="710px" color="white">
      <VStack align="left">
        <Link as={Link} to="/">
          <Text fontWeight="bold" fontSize="32px" mt="0px" mb="30px">
            PICNIC
          </Text>
        </Link>
        <Text m="0" fontSize="16px">
          피크닉 새로 생성하기
        </Text>
        <Text fontWeight="bold" m="0px" p="0px" fontSize="24px">
          Step 3. 피크닉 준비 완료!
        </Text>
        <Box w="60px" h="2px" mt="15px" bg="white" />
      </VStack>
      <VStack align="left" mt="33px">
        <Text fontSize="21px" mb="0px">
          [{party}] 소속
        </Text>
        <Text fontSize="21px" m="0px">
          {title}
        </Text>
      </VStack>
      <Center w="100%" h="97px" mt="28px">
        <VStack>
          <Text fontSize="16px" align="center">
            피크닉 코드를 참여자들에게 알려주세요
          </Text>
          <Center bg="white" w="379px" h="61px" m="0px">
            <Center bg="#7879F1" w="373px" h="55px" m="0px">
              <Text fontWeight="bold" fontSize="28px" letterSpacing="28px" ml="28px">
                {codeNumber}
              </Text>
            </Center>
          </Center>
        </VStack>
      </Center>
      <Center w="100%" h="111px" mt="65px">
        <VStack w="full">
          <Button Link={`/ready/${codeNumber}`} onClick={() => createRoom()} text="피크닉 시작!" variant="main_button" />
          <Link onClick={() => handleNextStep()}>
            <Text as="ins" fontSize="16px" color="white">
              다시 입력할래요
            </Text>
          </Link>
        </VStack>
      </Center>
    </Box>
  );
}

export default Three;
