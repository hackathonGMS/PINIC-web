import { Logo, InputCode, Button } from "../components";
import {Button as chakraButton , Box, Flex, Heading, Text, VStack, Container, Divider, HStack } from "@chakra-ui/react";
import ChapterForm from "../components/ChapterForm";
export const Meeting = () => {
  return (
    <>
      <Container minH="100vh" centerContent color="white">
        <VStack align={"center"} mt={"77px"} mb={"77px"} spacing={"70px"} direction={"column"}>
            <Text color="white" fontSize="32px">PICNIC | 12345의 회의록</Text>
            <Box bg="white" maxW="650px" w="100vh" h="300px" borderRadius="12px" display="flex" 
            flexDirection="column" overflowY="auto" bgColor="rgba(0,0,0,0.3)" padding="25px">
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
            </Box>
            <VStack w="100%" align="left">
                <Text fontSize="24px">회의 ToDo</Text>
                <Divider w="60px" border="2px" borderColor="white"/>
                <Text fontSize="18px">1. 아이디어 브레인스토밍</Text>
                <Text fontSize="18px">2. 아이디어 구체화</Text>
                <Text fontSize="18px">3. 아이디어 결정하기</Text>
            </VStack>
            <VStack w="100%" align="left">
                <Text fontSize="24px">채팅 History</Text>
                <Divider w="60px" border="2px" borderColor="white"/>
                <HStack>
                    <chakraButton color="black"> 일반 채팅 </chakraButton>
                    <chakraButton bgColor="white"> 중요한 채팅 </chakraButton>
                    <chakraButton bgColor="white"> 텍스트로 말하기 </chakraButton>
                    <chakraButton bgColor="white"> 하이퍼 링크 </chakraButton>
                    <chakraButton bgColor="white"> 일정 잡기 </chakraButton>
                </HStack>
                <Box bg="white" maxW="650px" w="100%" h="300px" borderRadius="12px" display="flex" 
                flexDirection="column" overflowY="auto" bgColor="rgba(0,0,0,0.3)" padding="25px">
                    <Text>1번째 뽑기 | 커피당번 정하기</Text>
                    <Text fontSize="14px">제이슨 당첨</Text>
                    <Text>2번째 뽑기 | 커피당번 정하기</Text>
                    <Text fontSize="14px">한석원 당첨</Text>
                </Box>
            </VStack>
            <VStack w="100%" align="left">
                <Text fontSize="24px">투표 결과</Text>
                <Divider w="60px" border="2px" borderColor="white"/>
                <Box bg="white" maxW="650px" w="100%" h="300px" borderRadius="12px" display="flex" 
                flexDirection="column" overflowY="auto" bgColor="rgba(0,0,0,0.3)" padding="25px">
                    <Text>1번째 뽑기 | 커피당번 정하기</Text>
                    <Text fontSize="14px">제이슨 당첨</Text>
                    <Text>2번째 뽑기 | 커피당번 정하기</Text>
                    <Text fontSize="14px">한석원 당첨</Text>
                </Box>
            </VStack>
            <VStack w="100%" align="left">
                <Text fontSize="24px">뽑기 결과</Text>
                <Divider w="60px" border="2px" borderColor="white"/>
                <Box bg="white" maxW="650px" w="100%" h="300px" borderRadius="12px" display="flex" 
                flexDirection="column" overflowY="auto" bgColor="rgba(0,0,0,0.3)" padding="25px">
                    <Text>1번째 뽑기 | 커피당번 정하기</Text>
                    <Text fontSize="14px">제이슨 당첨</Text>
                    <Text>2번째 뽑기 | 커피당번 정하기</Text>
                    <Text fontSize="14px">한석원 당첨</Text>
                </Box>
            </VStack>
            <HStack spacing="27px">
                <Button Link="/" text="돌아가기" variant="main_button"/>
                <Button Link="/Meeting" text="로그 공유하기" variant="main_button"/>
            </HStack>
        </VStack>
      </Container>
    </>
  );
};
/*
      <div
        className="scroll"
        style={{ display: "flex", flexDirection: "column", minHeight: "60px", maxHeight: "160px", overflowY: "auto", paddingRight: "5px" }}>
        {notConfirmList().map((todo, index) => (
          <div key={index} style={{ display: "flex", justifyContent: "space-between" }}>
            {todo.value}
            <div style={{ display: "flex", alignSelf: "center" }}>
              <input type="checkbox" checked={todo.done} onChange={() => changeTodoState(todo.value, false)} />
            </div>
          </div>
        ))}
        {confirmedList().map((todo, index) => (
          <div key={index} style={{ display: "flex", justifyContent: "space-between" }}>
            {todo.value}
            <div style={{ display: "flex", alignSelf: "center" }}>
              <input type="checkbox" checked={todo.done} onChange={() => changeTodoState(todo.value, true)} />
            </div>
          </div>
        ))}
      </div>
*/

// Title | Name의 회의록
// Box
// title : 내용
// ...
// title : 내용1
//         내용2
// Box
// Title
// _____
// 내용
// 박스
