import { Logo, InputCode, Button as LinkButton } from "..";
import { Box, Flex, Heading, Text, VStack, Container, Divider, HStack, Button } from "@chakra-ui/react";

export const TitleInfo = () => {
  return (
    <>
        <VStack spacing="17px" align="left">
            <Text>소속 : [숭실대학교]</Text>
            <Text>안건 : 안건 없음</Text>
            <Text>생성 날짜 : 2021년 8월 27일 오후 3시 35분</Text>
            <HStack align="top">
                <Text>참여자 목록</Text>
                <VStack spacing="0px">
                    <Text>1. 홍길동</Text>
                    <Text>2. 한석봉</Text>
                    <Text>3. 한석원</Text>
                    <Text>4. 제이슨</Text>
                </VStack>
            </HStack>
        </VStack>
    </>
  );
};
export default TitleInfo;