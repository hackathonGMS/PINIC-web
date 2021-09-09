import { Logo, InputCode, Button as LinkButton } from "..";
import { Box, Flex, Heading, Text, VStack, Container, Divider, HStack, Button } from "@chakra-ui/react";

export const TitleInfo = ({roomInfo, users}) => {
  const getUsername = () => {
      if(users == null) {
        return;
      }
      return users.map((user, index) => (
        <Text>{index+1}. {user.name}</Text>
      ));
  };
  const username = getUsername();
  return (
    <>
        <VStack spacing="17px" align="left">
            <Text>소속 : {roomInfo.group_name}</Text>
            <Text>안건 : {roomInfo.agenda}</Text>
            <Text>생성 날짜 : 2021년 8월 27일 오후 3시 35분</Text>
            <HStack align="top">
                <Text>참여자 목록</Text>
                <VStack spacing="0px" align="left">
                  {username}
                </VStack>
            </HStack>
        </VStack>
    </>
  );
};
export default TitleInfo;