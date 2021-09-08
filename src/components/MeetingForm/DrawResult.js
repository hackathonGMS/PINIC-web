import { Logo, InputCode, Button as LinkButton } from "..";
import { Box, Flex, Heading, Text, VStack, Container, Divider, HStack, Button } from "@chakra-ui/react";

export const DrawResult = () => {
  return (
    <>
        <VStack alignItems="left">
            <Text fontSize="18px">1번째 뽑기 | 커피당번 정하기</Text>
            <Text fontSize="14px" fontWeight="200">제이슨 당첨</Text>
            <Text fontSize="18px">2번째 뽑기 | 커피당번 정하기</Text>
            <Text fontSize="14px" fontWeight="200">한석원 당첨</Text>
        </VStack>
    </>
  );
};
export default DrawResult;