import { Logo, InputCode, Button as LinkButton } from "..";
import { Box, Flex, Heading, Text, VStack, Container, Divider, HStack, Button } from "@chakra-ui/react";

export const VoteResult = () => {
  return (
    <>
        <VStack alignItems="left">
            <Text fontSize="18px">1번째 투표 | 커피당번 정하기</Text>
            <VStack alignItems="left" spacing="1px" fontWeight="200">
                <Text fontSize="14px">1위. 3표 제이슨</Text>
                <Text fontSize="14px">2위. 2표 한석봉</Text>
                <Text fontSize="14px">3위. 1표 한석원</Text>
            </VStack>
            <Text fontSize="18px">2번째 투표 | 커피당번 정하기</Text>
            <VStack alignItems="left" spacing="1px" fontWeight="200">
                <Text fontSize="14px">1위. 3표 제이슨</Text>
                <Text fontSize="14px">2위. 2표 한석봉</Text>
                <Text fontSize="14px">3위. 1표 한석원</Text>
            </VStack>
        </VStack>
    </>
  );
};
export default VoteResult;